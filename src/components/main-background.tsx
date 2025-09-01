"use client";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import React from "react";

const MainBackground = () => {
  return (
    <ShaderGradientCanvas
      className="w-full h-full min-h-screen scale-150"
      lazyLoad={undefined}
      fov={100}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="waterPlane"
        wireframe={false}
        shader="defaults"
        uTime={20}
        uSpeed={0.16}
        uStrength={0.6}
        uDensity={1.5}
        uFrequency={0}
        uAmplitude={0}
        positionX={0}
        positionY={0}
        positionZ={0}
        rotationX={50}
        rotationY={0}
        rotationZ={-60}
        color1="#292f98"
        color2="#9f0aa2"
        color3="#202838"
        reflection={0.1}
        // View (camera) props
        cAzimuthAngle={180}
        cPolarAngle={80}
        cDistance={2.8}
        cameraZoom={9.1}
        // Effect props
        lightType="3d"
        brightness={1}
        envPreset="city"
        grain="on"
        // Tool props
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        // Optional - if using transition features
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  );
};

export default MainBackground;
