import React from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const email = import.meta.env.VITE_SCHOOL_EMAIL || 'info@tis.edu.in';
const phone = import.meta.env.VITE_ADMISSION_PHONE || '+919837983791';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="footer-brand">TULA’S <span>INTERNATIONAL SCHOOL</span></a>
          <p>Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand.</p>
        </div>
        <div className="footer-contact">
          <a href={`tel:${phone}`}><Phone size={15} /> {phone.replace('+91', '+91 ')}</a>
          <a href={`mailto:${email}`}><Mail size={15} /> {email}</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Tulas+International+School+Dehradun" target="_blank" rel="noreferrer">
            <MapPin size={15} /> Open location <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Tulas International School. All Rights Reserved.</span>
        <a href="https://tis.edu.in/" target="_blank" rel="noreferrer">Official website <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
