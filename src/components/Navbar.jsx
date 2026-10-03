import React from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/content';
import ThemeToggle from './ThemeToggle';

const admissionUrl = import.meta.env.VITE_ADMISSION_URL || 'https://admission.tis.edu.in/';

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a href="#top" className="brand" aria-label="Tulas International School home">
          <img
            src="https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png"
            alt="Tulas International School"
          />
          <span>TULA’S <small>INTERNATIONAL SCHOOL</small></span>
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="button button-small button-dark" href={admissionUrl} target="_blank" rel="noreferrer">
            Apply Now <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
