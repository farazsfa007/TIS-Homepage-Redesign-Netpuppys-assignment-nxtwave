import React from 'react';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const admissionUrl = import.meta.env.VITE_ADMISSION_URL || 'https://admission.tis.edu.in/';

export default function Hero() {
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-grid" />
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          DEHRADUN · UTTARAKHAND · INDIA
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          Made for the <em>future.</em>
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
        >
          A modern gurukul where academic excellence, character, sport, creativity and curiosity grow together.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
        >
          <a className="button button-primary" href={admissionUrl} target="_blank" rel="noreferrer">
            Explore admissions <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="#about">
            Discover TIS <ArrowDown size={17} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.94, x: 30 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.18 }}
      >
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-card hero-card-image">
          <img
            src="https://tis.edu.in/_next/static/media/ladyInPink.c358aa8f.png"
            alt="Tulas International School student"
          />
        </div>
        <div className="hero-card hero-card-note">
          <span>THE MODERN GURUKUL</span>
          <strong>Learn. Explore. Become.</strong>
        </div>
        <div className="hero-play" aria-hidden="true"><Play size={16} fill="currentColor" /></div>
      </motion.div>

      <div className="hero-bottom-note">SCROLL TO EXPLORE <ArrowDown size={14} /></div>
    </section>
  );
}
