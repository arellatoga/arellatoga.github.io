
import { useEffect, useState } from "react";
import { Square } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const AnimatedBackground = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  // Calculate cell size based on screen size
  const cellSize = isMobile ? 60 : 80;
  const totalDistance = cellSize * 2; // Full pattern cycle
  
  // Animation effect with smoother transition and screen-size awareness
  useEffect(() => {
    let animationFrame: number;
    let startTime: number | null = null;
    const animationDuration = 4000; // 4 seconds for a complete cycle
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % animationDuration) / animationDuration;
      
      // Calculate smooth position using sine wave for continuous motion
      setBackgroundPosition({ 
        x: Math.floor(progress * totalDistance), 
        y: Math.floor((1 - progress) * totalDistance) 
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [totalDistance]);
  
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      style={{ 
        transform: `translate(${backgroundPosition.x}px, ${backgroundPosition.y}px)`,
        width: '200vw',
        height: '200vh',
        left: '-50vw',
        top: '-50vh'
      }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: `
          repeating-conic-gradient(
            #fff 0% 25%,
            transparent 0% 50%
          )
        `,
        backgroundSize: `${cellSize}px ${cellSize}px`,
      }} />
      
      {/* Gray square pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex">
            {Array.from({ length: 50 }).map((_, colIndex) => {
              const isEven = (rowIndex + colIndex) % 2 === 0;
              return (
                <div 
                  key={`${rowIndex}-${colIndex}`} 
                  className="flex items-center justify-center"
                  style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                >
                  {isEven && (
                    <Square 
                      size={cellSize / 2} 
                      fill="#888888" 
                      stroke="#888888" 
                      className="opacity-80"
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
