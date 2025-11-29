import React, { useState, useRef, useEffect } from 'react';
import { Move, Maximize2 } from 'lucide-react';

interface Props {
  image: string;
  isActive: boolean;
}

const Location360: React.FC<Props> = ({ image, isActive }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const delta = startX.current - e.clientX;
    setPosition((prev) => {
      const newPos = prev + delta * 0.1;
      return Math.max(0, Math.min(100, newPos));
    });
    startX.current = e.clientX;
  };

  // Auto-pan effect when not interacting
  useEffect(() => {
    if (!isActive) return;
    
    const interval = setInterval(() => {
      if (!isDragging.current) {
        setPosition(p => {
          const next = p + 0.05;
          return next > 100 ? 0 : next;
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[400px] overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute top-0 left-0 h-full w-[200%] transition-transform duration-75 ease-linear will-change-transform"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateX(-${position / 2}%)`
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-black/10">
        <div className="bg-black/50 text-white px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
          <Move size={16} />
          <span className="text-sm font-medium">Drag to look around</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 bg-black/50 text-white p-2 rounded-lg backdrop-blur-sm">
        <Maximize2 size={20} />
      </div>
      
      <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
        360° View
      </div>
    </div>
  );
};

export default Location360;
