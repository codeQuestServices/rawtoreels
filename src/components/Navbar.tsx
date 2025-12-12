import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  tallyUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ tallyUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Ref for the mobile menu to detect outside clicks
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navLinks = ['How It Works', 'Portfolio', 'Pricing', 'FAQ'];

  // Handle scroll for sticky nav styling and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const scrollPosition = window.scrollY + 120; // Offset for sticky header
      let currentSection = '';

      navLinks.forEach((item) => {
        const id = item.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(id);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      {/* Constrain nav to site container */}
      <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center relative z-50">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
          {/* Logo Container */}
          <div className="flex items-center gap-2 group">
            <Logo className="h-10" />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 flex-nowrap max-w-[60%] overflow-x-auto scrollbar-hide">
          {navLinks.map((item) => {
            const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeSection === itemSlug;
            
            return (
              <a
                key={item}
                href={`#${itemSlug}`}
                className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          <button
            data-tally-open="KYzkWg"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-form-events-forwarding="1"
            data-tally-width="800"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 flex items-center gap-2 flex-shrink-0"
          >
            Start My Reel
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={buttonRef}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Nav Dropdown */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 w-full bg-white z-40 transition-all duration-300 ease-out transform ${isMenuOpen ? 'translate-y-0 shadow-xl' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4 pt-24 pb-8 flex flex-col gap-2">
           {navLinks.map((item) => {
             const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
             const isActive = activeSection === itemSlug;
             
             return (
              <a
                key={item}
                href={`#${itemSlug}`}
                className={`text-lg font-medium p-4 rounded-xl transition-colors flex items-center justify-between group ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50 text-gray-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
                <ArrowRight size={16} className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'} text-blue-600`} />
              </a>
             );
           })}
          <button
            data-tally-open="KYzkWg"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            data-tally-form-events-forwarding="1"
            data-tally-width="800"
            className="bg-blue-600 text-white w-full py-4 rounded-xl font-bold text-center mt-4 shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform"
            onClick={() => setIsMenuOpen(false)}
          >
            Start My Reel
          </button>
        </div>
      </div>
    </nav>
  );
};