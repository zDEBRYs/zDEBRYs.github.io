
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  trail: number;
}

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const lastTime = useRef<number>(0);
  const interval = 1000 / 30; // Cap at 30 FPS for performance

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars.current = [];
      const density = window.innerWidth < 768 ? 12000 : 8000; // Less stars on mobile
      const starCount = Math.min(100, Math.floor(window.innerWidth * window.innerHeight / density));
      
      for (let i = 0; i < starCount; i++) {
        stars.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.7 + 0.3,
          trail: Math.random() * 10 + 5
        });
      }
    };

    const drawStar = (star: Star) => {
      if (!ctx) return;
      
      ctx.save();
      
      ctx.fillStyle = `rgba(155, 135, 245, ${star.opacity})`;
      ctx.shadowColor = 'rgba(155, 135, 245, 0.5)';
      ctx.shadowBlur = 10;
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
      
      const gradient = ctx.createLinearGradient(
        star.x, 
        star.y, 
        star.x, 
        star.y + star.trail
      );
      gradient.addColorStop(0, `rgba(155, 135, 245, ${star.opacity})`);
      gradient.addColorStop(1, 'rgba(155, 135, 245, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(star.x - star.size / 2, star.y);
      ctx.lineTo(star.x + star.size / 2, star.y);
      ctx.lineTo(star.x + star.size / 3, star.y + star.trail);
      ctx.lineTo(star.x - star.size / 3, star.y + star.trail);
      ctx.closePath();
      ctx.fill();
      
      ctx.restore();
    };

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;
      
      // Only run the animation at specified intervals for better performance
      if (timestamp - lastTime.current < interval) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }
      lastTime.current = timestamp;
      
      ctx.fillStyle = 'rgba(26, 31, 44, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.current.forEach((star) => {
        star.y += star.speed;
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        drawStar(star);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    setCanvasSize();
    
    // Use ResizeObserver instead of window resize event for better performance
    const resizeObserver = new ResizeObserver(setCanvasSize);
    resizeObserver.observe(document.body);
    
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarryBackground;
