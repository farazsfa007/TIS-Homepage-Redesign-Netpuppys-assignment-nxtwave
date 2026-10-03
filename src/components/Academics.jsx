import React from 'react';
import { BookOpen, Lightbulb, MonitorSmartphone, Trophy } from 'lucide-react';
import Reveal from './Reveal';

const items = [
  { icon: BookOpen, title: 'Academic Excellence', text: 'A CBSE course structure that prioritises reasoning and analytical thinking.' },
  { icon: Lightbulb, title: 'Experiential Learning', text: 'Projects, arts, educational trips, seminars and practical experiences.' },
  { icon: MonitorSmartphone, title: 'Digital Advantage', text: 'Digital classrooms and technology-supported learning experiences.' },
  { icon: Trophy, title: 'Beyond Academics', text: 'Olympiads, sport, clubs and activities that develop confidence and discipline.' },
];

export default function Academics() {
  return (
    <section className="section section-dark" id="academics">
      <div className="container">
        <Reveal className="section-heading section-heading-wide">
          <p className="eyebrow eyebrow-light">02 · ACADEMICS</p>
          <h2>Build a mind that stays curious.</h2>
          <p className="lead lead-light">Our curriculum understands and supports the journey of every child.</p>
        </Reveal>

        <div className="feature-grid">
          {items.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.07} className="feature-card">
              <span className="feature-number">0{index + 1}</span>
              <Icon size={25} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
