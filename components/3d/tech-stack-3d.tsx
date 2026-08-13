'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import * as THREE from 'three'
import { techStackList } from '@/lib/site'

type TechItem = typeof techStackList[0]

function TechTile({ item, position }: { item: TechItem; position: [number, number, number] }) {
    const meshRef = useRef<THREE.Group>(null)
    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) => {
        if (!meshRef.current) return
        const targetZ = position[2] + (hovered ? 0.6 : 0)
        const targetScale = hovered ? 1.15 : 1.0

        meshRef.current.position.z = THREE.MathUtils.damp(meshRef.current.position.z, targetZ, 6, delta)
        meshRef.current.scale.x = THREE.MathUtils.damp(meshRef.current.scale.x, targetScale, 6, delta)
        meshRef.current.scale.y = THREE.MathUtils.damp(meshRef.current.scale.y, targetScale, 6, delta)
        meshRef.current.scale.z = THREE.MathUtils.damp(meshRef.current.scale.z, targetScale, 6, delta)
    })

    return (
        <group
            ref={meshRef}
            position={position}
            onPointerOver={(e) => {
                e.stopPropagation()
                setHovered(true)
            }}
            onPointerOut={() => setHovered(false)}
        >
            {/* Glass Box Tile */}
            <mesh>
                <boxGeometry args={[1.35, 0.65, 0.08]} />
                <meshPhysicalMaterial
                    color={hovered ? '#1E1433' : '#0B0912'}
                    roughness={0.25}
                    metalness={0.4}
                    transmission={0.3}
                    clearcoat={0.5}
                    emissive={hovered ? item.color : '#000000'}
                    emissiveIntensity={hovered ? 0.5 : 0}
                />
            </mesh>

            {/* Glowing Wireframe Border */}
            <mesh position={[0, 0, 0.05]}>
                <planeGeometry args={[1.32, 0.62]} />
                <meshBasicMaterial
                    color={hovered ? item.color : 'rgba(184, 76, 255, 0.25)'}
                    transparent
                    opacity={hovered ? 0.9 : 0.25}
                    wireframe
                />
            </mesh>

            {/* Tech Name Label */}
            <Text
                position={[0, 0, 0.06]}
                fontSize={0.17}
                color={hovered ? '#FFFFFF' : '#D66BFF'}
                anchorX="center"
                anchorY="middle"
            >
                {item.name}
            </Text>

            {hovered && <pointLight position={[0, 0, 0.4]} color={item.color} intensity={2} distance={2.5} />}
        </group>
    )
}

function InvertedPyramidConstellation() {
    const cloudGroup = useRef<THREE.Group>(null)

    useFrame((state) => {
        if (cloudGroup.current) {
            cloudGroup.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
            cloudGroup.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.05
        }
    })

    // Inverted Pyramid / V-shaped positions matching Screenshot 5 layout
    const vPositions: [number, number, number][] = [
        // Row 1 (Top Wide Row: 10 items)
        [-6.5, 2.4, 0], [-5.0, 2.4, 0], [-3.5, 2.4, 0], [-2.0, 2.4, 0], [-0.5, 2.4, 0],
        [0.5, 2.4, 0], [2.0, 2.4, 0], [3.5, 2.4, 0], [5.0, 2.4, 0], [6.5, 2.4, 0],

        // Row 2 (8 items)
        [-5.2, 1.4, 0.2], [-3.7, 1.4, 0.2], [-2.2, 1.4, 0.2], [-0.7, 1.4, 0.2],
        [0.7, 1.4, 0.2], [2.2, 1.4, 0.2], [3.7, 1.4, 0.2], [5.2, 1.4, 0.2],

        // Row 3 (6 items)
        [-4.0, 0.4, 0.4], [-2.5, 0.4, 0.4], [-1.0, 0.4, 0.4],
        [1.0, 0.4, 0.4], [2.5, 0.4, 0.4], [4.0, 0.4, 0.4],

        // Row 4 (4 items)
        [-2.7, -0.6, 0.6], [-0.9, -0.6, 0.6], [0.9, -0.6, 0.6], [2.7, -0.6, 0.6],

        // Row 5 (2 items)
        [-1.4, -1.6, 0.8], [1.4, -1.6, 0.8],

        // Row 6 (Bottom Tip: 1 item)
        [0, -2.6, 1.0],
    ]

    return (
        <group ref={cloudGroup}>
            {techStackList.map((item, index) => {
                const pos = vPositions[index % vPositions.length]
                return (
                    <Float key={item.name} speed={1.2} rotationIntensity={0.05} floatIntensity={0.2}>
                        <TechTile item={item} position={pos} />
                    </Float>
                )
            })}
        </group>
    )
}

export function TechStack3D() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="relative h-[720px] w-full">
            {/* Atmospheric Background Purple Mesh & Glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[550px] w-[800px] rounded-full bg-accent/15 blur-[170px]" />
                <div className="absolute inset-0 bg-grid opacity-30" />
            </div>

            <Canvas
                camera={{ position: [0, 0, 8.2], fov: 50 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                className="w-full h-full"
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[0, 0, 5]} color="#B84CFF" intensity={3} />
                <directionalLight position={[4, 5, 4]} color="#FFFFFF" intensity={1.5} />

                <InvertedPyramidConstellation />
            </Canvas>
        </div>
    )
}

