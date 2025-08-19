import React, { useEffect, useRef, useState } from "react";

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
}

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 150,
  particleSpread = 8,
  speed = 0.05,
  particleColors = ['#3B82F6', '#FFFFFF', '#808080'],
  moveParticlesOnHover = true,
  particleHoverFactor = 0.5,
  alphaParticles = true,
  particleBaseSize = 80,
  sizeRandomness = 0.8,
  cameraDistance = 25,
  disableRotation = false,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [useWebGL, setUseWebGL] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Try to load WebGL version
    const loadWebGLVersion = async () => {
      try {
        const { Renderer, Camera, Geometry, Program, Mesh } = await import("ogl");
        
        const renderer = new Renderer({ depth: false, alpha: true });
        const gl = renderer.gl;
        
        // Set canvas style
        gl.canvas.style.position = 'absolute';
        gl.canvas.style.top = '0';
        gl.canvas.style.left = '0';
        gl.canvas.style.width = '100%';
        gl.canvas.style.height = '100%';
        gl.canvas.style.pointerEvents = 'none';
        
        container.appendChild(gl.canvas);
        gl.clearColor(0, 0, 0, 0);

        const camera = new Camera(gl, { fov: 15 });
        camera.position.set(0, 0, cameraDistance);

        const resize = () => {
          const width = container.clientWidth;
          const height = container.clientHeight;
          renderer.setSize(width, height);
          camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        };
        window.addEventListener("resize", resize, false);
        resize();

        // Create particles
        const count = particleCount;
        const positions = new Float32Array(count * 3);
        const randoms = new Float32Array(count * 4);
        const colors = new Float32Array(count * 3);

        const hexToRgb = (hex: string): [number, number, number] => {
          hex = hex.replace(/^#/, "");
          if (hex.length === 3) {
            hex = hex.split("").map((c) => c + c).join("");
          }
          const int = parseInt(hex, 16);
          const r = ((int >> 16) & 255) / 255;
          const g = ((int >> 8) & 255) / 255;
          const b = (int & 255) / 255;
          return [r, g, b];
        };

        for (let i = 0; i < count; i++) {
          let x: number, y: number, z: number, len: number;
          do {
            x = Math.random() * 2 - 1;
            y = Math.random() * 2 - 1;
            z = Math.random() * 2 - 1;
            len = x * x + y * y + z * z;
          } while (len > 1 || len === 0);
          const r = Math.cbrt(Math.random());
          positions.set([x * r, y * r, z * r], i * 3);
          randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
          const col = hexToRgb(particleColors[Math.floor(Math.random() * particleColors.length)]);
          colors.set(col, i * 3);
        }

        const geometry = new Geometry(gl, {
          position: { size: 3, data: positions },
          random: { size: 4, data: randoms },
          color: { size: 3, data: colors },
        });

        const vertex = /* glsl */ `
          attribute vec3 position;
          attribute vec4 random;
          attribute vec3 color;
          
          uniform mat4 modelMatrix;
          uniform mat4 viewMatrix;
          uniform mat4 projectionMatrix;
          uniform float uTime;
          uniform float uSpread;
          uniform float uBaseSize;
          uniform float uSizeRandomness;
          
          varying vec4 vRandom;
          varying vec3 vColor;
          
          void main() {
            vRandom = random;
            vColor = color;
            
            vec3 pos = position * uSpread;
            pos.z *= 10.0;
            
            vec4 mPos = modelMatrix * vec4(pos, 1.0);
            float t = uTime;
            mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
            mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
            mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
            
            vec4 mvPos = viewMatrix * mPos;
            gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
            gl_Position = projectionMatrix * mvPos;
          }
        `;

        const fragment = /* glsl */ `
          precision highp float;
          
          uniform float uTime;
          uniform float uAlphaParticles;
          varying vec4 vRandom;
          varying vec3 vColor;
          
          void main() {
            vec2 uv = gl_PointCoord.xy;
            float d = length(uv - vec2(0.5));
            
            if(uAlphaParticles < 0.5) {
              if(d > 0.5) {
                discard;
              }
              gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
            } else {
              float circle = smoothstep(0.5, 0.4, d) * 0.8;
              gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), circle);
            }
          }
        `;

        const program = new Program(gl, {
          vertex,
          fragment,
          uniforms: {
            uTime: { value: 0 },
            uSpread: { value: particleSpread },
            uBaseSize: { value: particleBaseSize },
            uSizeRandomness: { value: sizeRandomness },
            uAlphaParticles: { value: alphaParticles ? 1 : 0 },
          },
          transparent: true,
          depthTest: false,
        });

        const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

        let animationFrameId: number;
        let lastTime = performance.now();
        let elapsed = 0;

        const update = (t: number) => {
          animationFrameId = requestAnimationFrame(update);
          const delta = t - lastTime;
          lastTime = t;
          elapsed += delta * speed;

          program.uniforms.uTime.value = elapsed * 0.001;

          if (!disableRotation) {
            particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
            particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
            particles.rotation.z += 0.01 * speed;
          }

          renderer.render({ scene: particles, camera });
        };

        animationFrameId = requestAnimationFrame(update);

        return () => {
          window.removeEventListener("resize", resize);
          cancelAnimationFrame(animationFrameId);
          if (container.contains(gl.canvas)) {
            container.removeChild(gl.canvas);
          }
        };
      } catch (err) {
        console.error("WebGL Particles failed to load:", err);
        setUseWebGL(false);
        setError(err instanceof Error ? err.message : "WebGL not supported");
      }
    };

    loadWebGLVersion();
  }, [
    particleCount,
    particleSpread,
    speed,
    particleColors,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
  ]);

  // Fallback CSS-based particles if WebGL fails
  if (!useWebGL) {
    return (
      <div
        ref={containerRef}
        className={`relative w-full h-full ${className}`}
        style={{ minHeight: '100vh' }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: Math.min(particleCount, 50) }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                backgroundColor: particleColors[Math.floor(Math.random() * particleColors.length)],
                opacity: Math.random() * 0.5 + 0.2,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full ${className}`}
      style={{ minHeight: '100vh' }}
    />
  );
};

export default Particles;
