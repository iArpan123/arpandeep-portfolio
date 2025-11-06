import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        style={{
          position: "fixed",
          top: "10%",
          left: "5%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, #63e6e2 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        style={{
          position: "fixed",
          bottom: "10%",
          right: "12%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
          filter: "blur(90px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </>
  );
}
