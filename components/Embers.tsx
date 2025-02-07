import resources from "@/static";
import { useEffect, useRef } from "react";

interface Ember {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  flickerSpeed: number;
  flickerDirection: number;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  angle: number;
  life: number;
}

const EmberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const hexToRGB = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
  };

  const emberColor = hexToRGB(resources.background.color);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initEmbers();
    };
    window.addEventListener("resize", handleResize);

    let embers: Ember[] = [];
    const numEmbers = 150;
    const shootingStars: ShootingStar[] = [];
    const maxShootingStars = 3;

    const initEmbers = () => {
      embers = [];
      for (let i = 0; i < numEmbers; i++) {
        embers.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          flickerSpeed: Math.random() * 0.03 + 0.01,
          flickerDirection: 1,
        });
      }
    };
    initEmbers();

    const addShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height / 2),
        len: Math.random() * 80 + 10,
        speed: Math.random() * 10 + 6,
        angle: Math.PI / 4,
        life: 0,
      });
    };

    let lastTime = performance.now();
    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      // Add background fill
      ctx.fillStyle = "#0B0C10"; // dark background
      ctx.fillRect(0, 0, width, height);

      // Embers
      for (const ember of embers) {
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
          `rgba(${emberColor}, ${ember.opacity})`
        );
        gradient.addColorStop(
          0.4,
          `rgba(${emberColor}, ${ember.opacity * 0.6})`
        );
        gradient.addColorStop(
          1,
          `rgba(${emberColor}, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fill();

        ember.y = (ember.y + ember.speed) % height;
        ember.x += Math.sin(ember.y / 30) * 0.5;

        if (ember.x < 0) ember.x = width;
        if (ember.x > width) ember.x = 0;
      }

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);
        s.life += deltaTime;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(
          s.x - s.len * Math.cos(s.angle),
          s.y - s.len * Math.sin(s.angle)
        );
        const grad = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.len * Math.cos(s.angle),
          s.y - s.len * Math.sin(s.angle)
        );
        grad.addColorStop(0, "white");
        grad.addColorStop(1, "rgba(138,43,226,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();
        if (s.x > width || s.y > height) shootingStars.splice(i, 1);
      }

      if (shootingStars.length < maxShootingStars && Math.random() < 0.01) {
        addShootingStar();
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ background: "#111" }}
    />
  );
};

export default EmberBackground;