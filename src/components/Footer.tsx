import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onPageChange: (pageId: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (id: string) => {
    onPageChange(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top emergency highlight bar */}
      <div className="bg-emerald-950 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-900/50 rounded-xl border border-emerald-800">
              <Phone className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <div>
              <p className="text-emerald-400 text-xs uppercase tracking-widest font-bold font-mono">24/7 Trauma Emergency Dispatch</p>
              <h3 className="text-white text-lg font-bold font-display">Need an ambulance immediately?</h3>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center w-full md:w-auto">
            <a 
              href="tel:+919876543210"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-center font-bold font-display rounded-xl shadow-lg shadow-emerald-900/20 transition-all text-sm uppercase tracking-wider"
            >
              Call +91 98765 43210
            </a>
            <button
              onClick={() => handleNavClick('emergency')}
              className="px-6 py-3 bg-transparent border border-emerald-700 hover:bg-emerald-900/30 text-emerald-300 text-center font-bold font-display rounded-xl transition-all text-sm uppercase tracking-wider"
            >
              Emergency Manual
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Col 1: About */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 shadow-sm">
              <Heart className="h-5 w-5 text-slate-950 fill-slate-950/20" />
            </div>
            <div>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                DATE <span className="text-emerald-400">HOSPITAL</span>
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-bold leading-none">
                TRUSTED HEALTHCARE
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Date Hospital stands as a leading healthcare institution, dedicated to delivering state-of-the-art medical services, empathetic diagnostics, and clinical excellence under one modern roof.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 border border-slate-800 rounded-xl p-3 bg-slate-950/40">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span>Accredited ISO Quality Standard & Govt. Panel Approved.</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h3 className="text-white font-display font-semibold text-base mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-emerald-400">
            Quick Navigation
          </h3>
          <ul className="space-y-3.5 text-sm">
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'about', label: 'About Our Mission' },
              { id: 'doctors', label: 'Our Medical Panel' },
              { id: 'services', label: 'Specialized Treatments' },
              { id: 'opd-ipd', label: 'OPD & IPD Information' },
              { id: 'packages', label: 'Health Screening Packages' },
              { id: 'gallery', label: 'Hospital Facility Tour' },
              { id: 'contact', label: 'Reach Out / Map Location' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-slate-400 hover:text-emerald-400 transition-colors text-left flex items-center gap-1.5 group cursor-pointer"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-emerald-400 transition-colors"></span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Medical Specialities */}
        <div>
          <h3 className="text-white font-display font-semibold text-base mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-emerald-400">
            Specialized Services
          </h3>
          <ul className="space-y-3.5 text-sm">
            {[
              'General Medicine Consultation',
              '24×7 Trauma Emergency Care',
              'Pediatric & Neonatal Care',
              'Maternity & Gynecological Care',
              'Modern Pathological Laboratory',
              'Comprehensive Cardiology Care',
              'Arthroscopic Joint Orthopedics',
              '24x7 In-House Pharmacy'
            ].map((service, idx) => (
              <li key={idx} className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-500 font-bold font-mono text-xs">&bull;</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div className="space-y-6">
          <h3 className="text-white font-display font-semibold text-base mb-2 relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-emerald-400">
            Contact & Address
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed">
                Date Hospital Campus, Medical Square, Near Central Park Drive, Mumbai, Maharashtra 400001
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-400 font-mono">+91 22 2345 6789 / 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-400 font-mono">info@datehospital.org</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-slate-400">Emergencies: 24 Hours / 365 Days</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/50 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left">
            &copy; 2026 Date Hospital. All Rights Reserved. Fully Certified Healthcare Provider.
          </p>
          <p className="text-center md:text-right text-[11px] max-w-md leading-relaxed">
            Disclaimer: The medical guidance provided on this website is of educational nature. For diagnostic examinations, please visit our OPD or consult one of our authorized clinical specialists directly.
          </p>
        </div>
      </div>
    </footer>
  );
}
