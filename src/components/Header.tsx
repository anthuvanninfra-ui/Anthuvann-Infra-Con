import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectsData';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Categories', href: '#categories' },
    { label: 'Projects', href: '#projects' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Turnkey', href: '#turnkey' },
    { label: 'Safety & Quality', href: '#safety' },
    { label: 'Partner With Us', href: '#partner' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-stone-900/95 backdrop-blur-md border-b border-stone-800 shadow-lg'
          : 'bg-stone-900/80 backdrop-blur-sm border-b border-stone-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single text element wordmark with custom logo */}
          <a
            href="#"
            className="flex items-center text-white tracking-tight whitespace-nowrap shrink-0 hover:opacity-95 transition-opacity"
            aria-label="Anthuvann Infra & Construction Homepage"
          >
            <Logo variant="compact" theme="dark" size="md" />
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(
                'Hello Anthuvann Infra, I would like to inquire about a construction / interior project in Bengaluru.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="p-2.5 text-stone-300 hover:text-emerald-400 transition-colors rounded-md border border-stone-800 hover:border-emerald-500/50"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider shadow-sm whitespace-nowrap shrink-0"
            >
              Start Your Project
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-stone-300 pb-3 border-b border-stone-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-sm hover:bg-stone-900 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-center text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider"
            >
              Start Your Project
            </button>
            <div className="flex flex-col gap-1.5 text-xs text-stone-400 pt-2 px-1 border-t border-stone-800">
              <div className="flex items-center justify-between">
                <a href={`tel:${COMPANY_CONTACT.phone}`} className="flex items-center gap-1.5 hover:text-amber-400">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{COMPANY_CONTACT.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WA: 9844392232</span>
                </a>
              </div>
              <div className="flex items-center justify-between">
                <a href={`tel:${COMPANY_CONTACT.phoneSecondary}`} className="flex items-center gap-1.5 hover:text-amber-400">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{COMPANY_CONTACT.phoneSecondary}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsappNumberSecondary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WA: 7760384188</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
