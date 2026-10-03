import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section section-light" id="about">
      <div className="container split-section">
        <Reveal className="section-heading">
          <p className="eyebrow">01 · ABOUT TIS</p>
          <h2>School should be more than a classroom.</h2>
          <p className="lead">
            Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.
          </p>
          <a className="text-link text-link-dark" href="https://tis.edu.in/about-tis/why-choose-us/" target="_blank" rel="noreferrer">
            Why families choose TIS <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <Reveal delay={0.12} className="about-card">
          <div className="about-image-wrap">
            <img
              src="https://tis.edu.in/_next/static/media/AtTIS.59351600.png"
              alt="Student learning at Tulas International School"
            />
          </div>
          <div className="about-card-copy">
            <span>OUR APPROACH</span>
            <h3>Curiosity leads. Creativity thrives.</h3>
            <p>
              TIS combines a CBSE curriculum with holistic development, giving students room to grow academically, socially and culturally.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
