import React, { useRef, useEffect } from 'react';

interface Dot {
  x: number;
  y: number;
  radius: number;
  speed: number;
}

const WhiteDots: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let dots: Dot[] = [];
    const maxDots = 650;

    const initializeDots = () => {
      dots = [];
      for (let i = 0; i < maxDots; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.75 + 0.25,
        });
      }
    };

    initializeDots();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        dot.y -= dot.speed;

        if (dot.y < 0) {
          dot.y = height;
          dot.x = Math.random() * width;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initializeDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: '#111' }}
    />
  );
};

export default WhiteDots;
