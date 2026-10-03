import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Academics from './components/Academics';
import Sports from './components/Sports';
import Stories from './components/Stories';
import CTA from './components/CTA';
import Footer from './components/Footer';

function getInitialTheme() {
  const saved = localStorage.getItem('tis-theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('tis-theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <Sports />
        <Stories />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
