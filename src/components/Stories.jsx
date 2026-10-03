import React from 'react';
import { Quote } from 'lucide-react';
import Reveal from './Reveal';
import { testimonials } from '../data/content';

export default function Stories() {
  return (
    <section className="section section-cream" id="stories">
      <div className="container">
        <Reveal className="section-heading section-heading-center">
          <p className="eyebrow">04 · FROM THE PARENTS</p>
          <h2>Real stories. Real growth.</h2>
        </Reveal>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08} className="testimonial-card">
              <Quote size={27} strokeWidth={1.5} />
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
