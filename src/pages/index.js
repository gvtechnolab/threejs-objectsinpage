import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Canvas } from "@react-three/fiber";
import Box1 from "@/components/Box1";
import Box2 from "@/components/Box2";
import Box3 from "@/components/Box3";
import AnimatedSphere from "@/components/AnimatedSphere";
import { OrbitControls } from "@react-three/drei";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <span>
          Welcoming <span class="text-blue-500">YOU</span>
        </span>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
            <Box1 />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
            <Box2 />
          </Suspense>
        </Canvas>
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5}/>
          <directionalLight position={[-2, 5, 2]} intensity={1}/>
          <Suspense fallback={null}>
            <Box3 />
          </Suspense>
        </Canvas>
        <div id="container3D"></div>
      </main>
      <Footer />
    </>
  );
}
