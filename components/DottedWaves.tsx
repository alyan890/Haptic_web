"use client";

import React, { useEffect, useRef } from 'react';

export default function DottedWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dotGap = 35;
      const rows = Math.ceil(canvas.height / dotGap);
      const cols = Math.ceil(canvas.width / dotGap);

      ctx.fillStyle = '#00f5ff'; // accent-cyan

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * dotGap;
          const y = r * dotGap;

          // Wave logic
          const dist = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2));
          const wave = Math.sin(dist * 0.005 - time * 2) * 15;
          const opacityWave = (Math.sin(dist * 0.01 - time * 1.5) + 1) / 2;

          const finalY = y + wave;
          
          ctx.beginPath();
          ctx.arc(x, finalY, 0.8, 0, Math.PI * 2);
          ctx.globalAlpha = opacityWave * 0.3;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-20 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
}
