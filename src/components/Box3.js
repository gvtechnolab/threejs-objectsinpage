import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import textureImg from "@/assets/images/just.jpg";

export default function Box3() {
    const colorMap = useLoader(TextureLoader, textureImg?.src);

    return <mesh rotation={[90, 0, 20]}>
        <boxGeometry attach="geometry" args={[3, 3, 3]}/>
        <meshNormalMaterial attach="material" />
    </mesh>;
}