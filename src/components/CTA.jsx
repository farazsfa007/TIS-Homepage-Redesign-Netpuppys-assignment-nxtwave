import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import Reveal from './Reveal';

const admissionUrl = import.meta.env.VITE_ADMISSION_URL || 'https://admission.tis.edu.in/';
const phone = import.meta.env.VITE_ADMISSION_PHONE || '+919837983791';

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <Reveal className="cta-card">
          <div>
            <p className="eyebrow eyebrow-light">ADMISSIONS OPEN</p>
            <h2>Give curiosity a place to grow.</h2>
            <p>Explore the TIS campus, curriculum and admission process.</p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href={admissionUrl} target="_blank" rel="noreferrer">
              Apply now <ArrowUpRight size={18} />
            </a>
            <a className="phone-link" href={`tel:${phone}`}>
              <Phone size={16} /> {phone.replace('+91', '+91 ')}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
