/// <reference types="@react-three/fiber" />

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any
      mesh: any
      ambientLight: any
      directionalLight: any
      perspectiveCamera: any
      points: any
      pointMaterial: any
      canvas: any
    }
  }
}

export {}
