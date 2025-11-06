import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} Arpandeep Singh · Crafted with React and Framer Motion
      </div>
    </footer>
  );
}
