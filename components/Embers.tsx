import resources from "@/static";
import { useCallback, useEffect, useRef } from "react";

function EmberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface Ember {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    flickerSpeed: number;
    flickerDirection: number;
  }

  const hexToRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const animate = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      embers: Ember[],
      canvas: HTMLCanvasElement
    ) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const emberRGB = hexToRGB(resources.background.color);

      embers.forEach((ember) => {
        ember.opacity += ember.flickerSpeed * ember.flickerDirection;
        if (ember.opacity >= 1 || ember.opacity <= 0.3) {
          ember.flickerDirection *= -1;
        }

        const gradient = ctx.createRadialGradient(
          ember.x,
          ember.y,
          0,
          ember.x,
          ember.y,
          ember.size
        );

        gradient.addColorStop(
          0,
          `rgba(${emberRGB.r}, ${emberRGB.g}, ${emberRGB.b}, ${ember.opacity})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${emberRGB.r}, ${emberRGB.g}, ${emberRGB.b}, ${
            ember.opacity * 0.6
          })`
        );
        gradient.addColorStop(
          1,
          `rgba(${emberRGB.r}, ${emberRGB.g}, ${emberRGB.b}, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fill();

        ember.y = (ember.y + ember.speed) % canvas.height;
        ember.x += Math.sin(ember.y / 30) * 0.5;

        if (ember.x < 0) ember.x = canvas.width;
        if (ember.x > canvas.width) ember.x = 0;
      });

      requestAnimationFrame(() => animate(ctx, embers, canvas));
    },
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener("resize", setSize);

    const embers = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      flickerSpeed: Math.random() * 0.03 + 0.01,
      flickerDirection: 1,
    }));

    animate(ctx, embers, canvas);

    return () => window.removeEventListener("resize", setSize);
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#111" }}
    />
  );
}

export default EmberBackground;
