import React from 'react';
import Reveal from './Reveal';
import { stats } from '../data/content';

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06} className="stat-item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
