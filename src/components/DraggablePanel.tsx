
import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface DraggablePanelProps {
  children: ReactNode;
  className?: string;
  constraints?: React.RefObject<Element>;
  dragAxis?: "x" | "y" | boolean;
}

const DraggablePanel = ({ 
  children, 
  className = "", 
  constraints, 
  dragAxis = true 
}: DraggablePanelProps) => {
  return (
    <motion.div
      drag={dragAxis}
      dragMomentum={false}
      dragConstraints={constraints}
      dragElastic={0.1}
      className={`bg-white rounded-2xl p-6 border border-black ${className}`}
      whileHover={{ scale: 1.02 }}
      whileDrag={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  );
};

export default DraggablePanel;
