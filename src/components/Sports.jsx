import React from 'react';
import Reveal from './Reveal';
import { sports } from '../data/content';

export default function Sports() {
  return (
    <section className="section section-light" id="sports">
      <div className="container">
        <Reveal className="sports-intro">
          <div>
            <p className="eyebrow">03 · BEYOND ACADEMICS</p>
            <h2>16+ sports. One bigger playground.</h2>
          </div>
          <p className="lead">It’s not just a facility. At Tulas it’s the foundation — curated to bring joy and discipline to life.</p>
        </Reveal>

        <div className="sports-grid">
          {sports.map((sport, index) => (
            <Reveal key={sport.name} delay={index * 0.05} className="sport-card">
              <img src={sport.image} alt={sport.name} loading="lazy" />
              <div className="sport-overlay" />
              <div className="sport-label">
                <span>0{index + 1}</span>
                <strong>{sport.name}</strong>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
