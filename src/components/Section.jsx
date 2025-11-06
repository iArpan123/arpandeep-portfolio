import React from "react";
import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(90deg, var(--brand), var(--brand-2))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.06 }}
        >
          {children}
        </motion.div>
        <div
          style={{
            height: "1px",
            width: "100%",
            marginTop: "80px",
            background: "linear-gradient(90deg, transparent, var(--brand), transparent)",
            opacity: 0.12,
          }}
        />
      </div>
    </section>
  );
}
