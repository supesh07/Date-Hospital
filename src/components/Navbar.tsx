import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Clock, Menu, X, Calendar, Heart } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
  onOpenAppointmentModal: () => void;
}

export default function Navbar({ currentPage, onPageChange, onOpenAppointmentModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'services', label: 'Medical Services' },
    { id: 'emergency', label: 'Emergency Care' },
    { id: 'opd-ipd', label: 'OPD & IPD Info' },
    { id: 'packages', label: 'Health Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Banner Bar */}
      <div className="bg-sky-900 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-sky-100 font-medium">
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              Emergency 24x7 Hotline: <span className="text-white font-bold font-mono">+91 98765 43210</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-sky-100">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              OPD Hours: Mon - Sat (08:00 AM - 08:00 PM)
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sky-200">ISO 9001:2015 Certified Hospital</span>
            <span className="h-3 w-px bg-sky-700"></span>
            <button 
              onClick={() => handleNavClick('emergency')}
              className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wide transition-colors uppercase text-[10px]"
            >
              Emergency Protocols &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white/95 backdrop-blur-md">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-600 to-emerald-500 shadow-md shadow-sky-100 transition-all group-hover:scale-105">
              <Heart className="h-6 w-6 text-white fill-white/10" />
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-white"></div>
            </div>
            <div>
              <span className="font-display text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-950 via-sky-850 to-emerald-700 bg-clip-text text-transparent">
                DATE
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold leading-none">
                HOSPITAL
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'text-sky-700 font-bold bg-sky-50/60' 
                      : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-sky-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Appointment CTA */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white font-semibold text-sm shadow-md shadow-sky-100 hover:shadow-lg transition-all duration-200 cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-sky-600 hover:bg-slate-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-slate-100 bg-white shadow-inner overflow-hidden"
          >
            <div className="space-y-1.5 px-4 py-4 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex w-full items-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-50 to-sky-100/50 text-sky-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-sky-600'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="pt-4 pb-2 border-t border-slate-100 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAppointmentModal();
                  }}
                  className="flex w-full items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 text-white font-bold text-sm shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 text-center font-medium">
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  Hotline Call: <span className="font-bold text-slate-800 font-mono">+91 98765 43210</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
