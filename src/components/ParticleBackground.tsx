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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const createParticle = (): Particle => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      
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

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      const particle = createParticle();
      // Distribute initially across the path
      const progress = Math.random();
      particle.x += progress * canvas.height;
      particle.y -= progress * canvas.height;
      particlesRef.current.push(particle);
    }

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const canvasHeight = canvas.height;
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
        if (particle.y < -50 || particle.x > canvas.width + 50 || displayOpacity <= 0) {
          particlesRef.current[index] = createParticle();
        } else {
          // Draw gray square
          ctx.fillStyle = `rgba(156, 163, 175, ${displayOpacity})`;
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
});
