"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

function AnimatedRectangle({
  position = [0, 0, -10] as [number, number, number],
  width = 50,
  height = 50,
  color1 = [0.0, 0.3, 0.5],
  color2 = [0.2, 0.0, 0.6],
  color3 = [0.0, 0.5, 0.5],
  timeOffset = 0,
}) {
  const mesh = useRef<THREE.Mesh>(null!)
  const uniforms = useRef({
    time: { value: 0 },
    resolution: { value: new THREE.Vector2() },
    color1: { value: new THREE.Vector3(...color1) },
    color2: { value: new THREE.Vector3(...color2) },
    color3: { value: new THREE.Vector3(...color3) },
    timeOffset: { value: timeOffset },
  })

  useFrame((state) => {
    if (!mesh.current) return
    uniforms.current.time.value = state.clock.getElapsedTime() * 0.2
    uniforms.current.resolution.value.set(window.innerWidth, window.innerHeight)
  })

  const fragmentShader = `
    uniform float time;
    uniform vec2 resolution;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    uniform float timeOffset;
    
    // Simplex noise
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    
    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod289(i);
      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m*m;
      m = m*m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }
    
    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      float adjustedTime = time + timeOffset;
      
      // Multi-layered noise for organic movement
      float n1 = snoise(uv * 3.0 + adjustedTime * 0.3);
      float n2 = snoise(uv * 6.0 - adjustedTime * 0.2);
      float n3 = snoise(uv * 12.0 + adjustedTime * 0.15);
      
      float noise = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;
      
      // Create flowing gradients
      float flowX = sin(uv.x * 5.0 + adjustedTime + noise * 2.0) * 0.5 + 0.5;
      float flowY = cos(uv.y * 5.0 - adjustedTime * 0.7 + noise * 2.0) * 0.5 + 0.5;
      
      // Mix colors with noise
      vec3 color = mix(color1, color2, flowX + noise * 0.3);
      color = mix(color, color3, flowY * 0.6 + noise * 0.2);
      
      // Add subtle pulsing glow
      float pulse = sin(adjustedTime * 0.5) * 0.15 + 0.85;
      color *= pulse;
      
      // Vignette effect
      float vignette = 1.0 - length(uv - 0.5) * 0.8;
      color *= vignette;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `

  return (
    <mesh ref={mesh} position={position}>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={`
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={uniforms.current}
      />
    </mesh>
  )
}

function FloatingTriangles({ count = 80, spread = 20 }) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const trianglesData = useMemo(() => {
    return Array(count).fill(0).map(() => {
      const size = 0.1 + Math.random() * 0.4
      const x = (Math.random() - 0.5) * spread * 2
      const y = (Math.random() - 0.5) * spread * 1.5
      const z = -5 + Math.random() * -15
      
      return {
        position: [x, y, z] as [number, number, number],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI] as [number, number, number],
        size,
        speed: 0.2 + Math.random() * 0.5,
        rotationSpeed: 0.3 + Math.random() * 0.8,
        floatAmplitude: 0.5 + Math.random() * 2,
        floatSpeed: 0.3 + Math.random() * 0.5,
        color: [
          "#06b6d4", // cyan
          "#8b5cf6", // purple
          "#0ea5e9", // sky
          "#a855f7", // violet
          "#22d3ee", // cyan lighter
        ][Math.floor(Math.random() * 5)],
      }
    })
  }, [count, spread])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const time = clock.getElapsedTime()

    groupRef.current.children.forEach((triangle, i) => {
      const data = trianglesData[i]
      if (!data) return
      
      // Floating motion
      triangle.position.y = data.position[1] + Math.sin(time * data.floatSpeed + i) * data.floatAmplitude
      triangle.position.x = data.position[0] + Math.sin(time * data.floatSpeed * 0.5 + i * 0.5) * data.floatAmplitude * 0.3
      
      // Rotation
      triangle.rotation.x = data.rotation[0] + time * data.rotationSpeed * 0.3
      triangle.rotation.y = data.rotation[1] + time * data.rotationSpeed * 0.5
      triangle.rotation.z = data.rotation[2] + time * data.rotationSpeed * 0.2
    })
  })

  return (
    <group ref={groupRef}>
      {trianglesData.map((data, i) => (
        <mesh key={i} position={data.position} rotation={data.rotation}>
          <tetrahedronGeometry args={[data.size, 0]} />
          <meshStandardMaterial
            color={data.color}
            roughness={0.3}
            metalness={0.7}
            emissive={data.color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

function GlowingOrbs({ count = 20 }) {
  const groupRef = useRef<THREE.Group>(null!)
  
  const orbsData = useMemo(() => {
    return Array(count).fill(0).map(() => ({
      position: [
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        -8 + Math.random() * -10,
      ] as [number, number, number],
      size: 0.05 + Math.random() * 0.15,
      speed: 0.2 + Math.random() * 0.4,
      color: Math.random() > 0.5 ? "#06b6d4" : "#a855f7",
      pulseSpeed: 1 + Math.random() * 2,
      orbitRadius: 1 + Math.random() * 3,
    }))
  }, [count])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const time = clock.getElapsedTime()

    groupRef.current.children.forEach((orb, i) => {
      const data = orbsData[i]
      if (!data) return
      
      // Orbit motion
      orb.position.x = data.position[0] + Math.sin(time * data.speed) * data.orbitRadius
      orb.position.y = data.position[1] + Math.cos(time * data.speed * 0.8) * data.orbitRadius * 0.5
      
      // Pulsing scale
      const pulse = 1 + Math.sin(time * data.pulseSpeed) * 0.3
      orb.scale.setScalar(pulse)
    })
  })

  return (
    <group ref={groupRef}>
      {orbsData.map((data, i) => (
        <mesh key={i} position={data.position}>
          <sphereGeometry args={[data.size, 16, 16]} />
          <meshStandardMaterial
            color={data.color}
            emissive={data.color}
            emissiveIntensity={2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

function GridLines() {
  const linesRef = useRef<THREE.Group>(null!)
  
  useFrame(({ clock }) => {
    if (!linesRef.current) return
    const time = clock.getElapsedTime()
    
    linesRef.current.children.forEach((line, i) => {
      const material = line as THREE.Line
      if (material.material instanceof THREE.LineBasicMaterial) {
        material.material.opacity = 0.1 + Math.sin(time * 0.5 + i * 0.2) * 0.05
      }
    })
  })

  const linePositions = useMemo(() => {
    const lines: [number, number, number, number, number, number][] = []
    
    // Horizontal lines
    for (let i = -10; i <= 10; i += 2) {
      lines.push([-25, i * 2, -15, 25, i * 2, -15])
    }
    
    // Vertical lines
    for (let i = -12; i <= 12; i += 2) {
      lines.push([i * 2, -20, -15, i * 2, 20, -15])
    }
    
    return lines
  }, [])

  return (
    <group ref={linesRef}>
      {linePositions.map((pos, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([pos[0], pos[1], pos[2], pos[3], pos[4], pos[5]])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#06b6d4" transparent opacity={0.08} />
        </line>
      ))}
    </group>
  )
}

function EnergyCore() {
  const coreRef = useRef<THREE.Mesh>(null!)
  const uniforms = useRef({
    time: { value: 0 },
  })

  useFrame(({ clock }) => {
    if (!coreRef.current) return
    uniforms.current.time.value = clock.getElapsedTime()
  })

  const fragmentShader = `
    uniform float time;
    varying vec2 vUv;
    
    void main() {
      vec2 uv = vUv * 2.0 - 1.0;
      float r = length(uv);
      
      // Create pulsing rings
      float ring1 = smoothstep(0.4, 0.42, r) * smoothstep(0.45, 0.43, r);
      float ring2 = smoothstep(0.6, 0.62, r) * smoothstep(0.65, 0.63, r);
      float ring3 = smoothstep(0.8, 0.82, r) * smoothstep(0.85, 0.83, r);
      
      float pulse1 = sin(time * 2.0) * 0.5 + 0.5;
      float pulse2 = sin(time * 2.0 + 1.0) * 0.5 + 0.5;
      float pulse3 = sin(time * 2.0 + 2.0) * 0.5 + 0.5;
      
      // Core glow
      float glow = 0.02 / (r + 0.1);
      
      // Combine
      float intensity = glow + ring1 * pulse1 * 0.5 + ring2 * pulse2 * 0.3 + ring3 * pulse3 * 0.2;
      intensity *= smoothstep(1.0, 0.3, r);
      
      vec3 color1 = vec3(0.024, 0.714, 0.831); // cyan
      vec3 color2 = vec3(0.545, 0.361, 0.965); // purple
      
      vec3 finalColor = mix(color1, color2, r + sin(time) * 0.2);
      
      gl_FragColor = vec4(finalColor * intensity, intensity * 0.6);
    }
  `

  return (
    <mesh ref={coreRef} position={[0, 0, -7]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        uniforms={uniforms.current}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function Scene() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  useFrame(({ clock }) => {
    if (!cameraRef.current) return
    const t = clock.getElapsedTime() * 0.15
    cameraRef.current.position.x = Math.sin(t) * 3
    cameraRef.current.position.y = Math.cos(t * 0.7) * 2
    cameraRef.current.lookAt(0, 0, 0)
  })

  return (
    <>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 10]} fov={75} />

      {/* Background rectangles with vivid colors */}
      <AnimatedRectangle
        position={[0, 0, -12]}
        width={40}
        height={60}
        color1={[0.0, 0.15, 0.25]}
        color2={[0.15, 0.0, 0.3]}
        color3={[0.0, 0.25, 0.35]}
        timeOffset={0}
      />

      {/* Left rectangle */}
      <AnimatedRectangle
        position={[-22, 0, -14]}
        width={18}
        height={45}
        color1={[0.0, 0.2, 0.3]}
        color2={[0.1, 0.0, 0.25]}
        color3={[0.0, 0.3, 0.4]}
        timeOffset={1.5}
      />

      {/* Right rectangle */}
      <AnimatedRectangle
        position={[22, 0, -14]}
        width={18}
        height={45}
        color1={[0.1, 0.0, 0.25]}
        color2={[0.0, 0.2, 0.35]}
        color3={[0.15, 0.0, 0.35]}
        timeOffset={3}
      />

      {/* Grid lines for tech feel */}
      <GridLines />

      {/* Energy core effect */}
      <EnergyCore />

      {/* Floating triangular asteroids */}
      <FloatingTriangles count={100} spread={25} />

      {/* Glowing orbs */}
      <GlowingOrbs count={30} />

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[-10, -10, 5]} intensity={0.5} color="#a855f7" />
      <pointLight position={[0, 0, 10]} intensity={0.3} color="#ffffff" />
    </>
  )
}

export default function Background3D() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}
