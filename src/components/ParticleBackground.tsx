import { useEffect, useRef, memo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  flickerPhase: number;
  flickerSpeed: number;
}

export const ParticleBackground = memo(function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const viewportSizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      // Use viewport size so section/content layout changes (and scrollbars)
      // don't change the particle system bounds.
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      // Keep particle positions consistent across resizes (including scrollbar show/hide)
      const prev = viewportSizeRef.current;
      if (prev.width > 0 && prev.height > 0) {
        const sx = newWidth / prev.width;
        const sy = newHeight / prev.height;
        for (const p of particlesRef.current) {
          p.x *= sx;
          p.y *= sy;
          // Don't scale size - keep squares consistent
        }
      }

      // Render in CSS pixels; scale backing store for crispness
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(newWidth * dpr);
      canvas.height = Math.floor(newHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      viewportSizeRef.current = { width: newWidth, height: newHeight };
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = (): Particle => {
      const { width: canvasWidth, height: canvasHeight } = viewportSizeRef.current;
      
      // Randomly choose to spawn from bottom or left side
      const spawnFromLeft = Math.random() < 0.5;
      
      let startX: number;
      let startY: number;
      
      if (spawnFromLeft) {
        // Spawn from left side (offscreen)
        startX = -20 - Math.random() * 50;
        startY = Math.random() * canvasHeight;
      } else {
        // Spawn from bottom (offscreen)
        // Offset x to the left so particles can reach upper areas
        startX = Math.random() * canvasWidth - canvasWidth * 0.5;
        startY = canvasHeight + 20 + Math.random() * 50;
      }
      
      return {
        x: startX,
        y: startY,
        size: 15 + Math.random() * 20,
        flickerPhase: Math.random() * Math.PI * 2,
        flickerSpeed: 0.02 + Math.random() * 0.03,
      };
    };

    // Initialize particles once
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 30; i++) {
        const particle = createParticle();
        // Distribute initially across the path
        const progress = Math.random();
        particle.x += progress * viewportSizeRef.current.height;
        particle.y -= progress * viewportSizeRef.current.height;
        particlesRef.current.push(particle);
      }
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      
      const { width: canvasWidth, height: canvasHeight } = viewportSizeRef.current;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const fadeStartY = canvasHeight * (2 / 3); // Fade starts 1/3 from bottom

      particlesRef.current.forEach((particle, index) => {
        // Move at 45 degrees: up and to the right
        const speed = 0.1;
        particle.x += speed;
        particle.y -= speed;

        // Update flicker phase
        particle.flickerPhase += particle.flickerSpeed;

        // Calculate flicker opacity (0.25 to 0.75)
        const flickerOpacity = 0.25 + (Math.sin(particle.flickerPhase) + 1) * 0.25;

        // Calculate fade based on position (independent multiplier)
        // Fade starts 1/3 from bottom (at fadeStartY)
        let fadeFactor = 1;
        if (particle.y < fadeStartY) {
          fadeFactor = particle.y / fadeStartY;
        }

        // Combine: flicker opacity multiplied by fade factor
        const displayOpacity = flickerOpacity * fadeFactor;

        // Reset particle if it goes offscreen (top or right)
        if (particle.y < -50 || particle.x > canvasWidth + 50 || displayOpacity <= 0) {
          particlesRef.current[index] = createParticle();
        } else {
          // Draw gray square
          ctx.fillStyle = `rgba(100, 149, 237, ${displayOpacity})`;
          ctx.fillRect(
            particle.x - particle.size / 2,
            particle.y - particle.size / 2,
            particle.size,
            particle.size
          );
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
});
