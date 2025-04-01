
import { motion } from "framer-motion";
import { ReactNode } from "react";
import DraggablePanel from "./DraggablePanel";

interface ContentPanelProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const ContentPanel = ({ title, children, className = "" }: ContentPanelProps) => {
  return (
    <DraggablePanel 
      className={`flex-[3] ${className}`}
      dragAxis="y"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">{title}</h2>
        <div className="space-y-4 text-gray-700">
          {children}
        </div>
      </motion.div>
    </DraggablePanel>
  );
};

export default ContentPanel;
