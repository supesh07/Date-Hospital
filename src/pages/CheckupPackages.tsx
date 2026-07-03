import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star, Percent, Calendar, Heart } from 'lucide-react';
import { CheckupPackage } from '../types';

interface CheckupPackagesProps {
  packages: CheckupPackage[];
  onOpenAppointmentModal: (packageId?: string) => void;
}

export default function CheckupPackages({ packages, onOpenAppointmentModal }: CheckupPackagesProps) {
  return (
    <div className="space-y-12 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Preventative Wellness Screenings</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">Health Checkup Packages</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Protect your health with our discounted multi-organ clinical screenings, featuring comprehensive biochemical pathology panels and consultation reviews by senior doctors.
          </p>
        </div>
      </section>

      {/* Intro highlight message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 border border-sky-100 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-display font-bold text-slate-950">Why opt for a Preventive Health Package?</h3>
            <p className="text-slate-600 text-xs leading-relaxed max-w-2xl">
              Early detection of cardiac risks, metabolic changes (diabetes, cholesterol), and thyroid issues can completely shift treatment outcomes. Date Hospital preventive packages save over 50% compared to booking individual clinical diagnostics.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-slate-100 text-xs font-bold text-sky-600 uppercase tracking-wider">
            <Percent className="w-5 h-5 text-emerald-500 animate-bounce" />
            <span>Up to 50% Flat Saving</span>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const savingsPercent = Math.round((1 - pkg.price / pkg.originalPrice) * 100);
            return (
              <div 
                key={pkg.id}
                className={`bg-white rounded-3xl border p-8 flex flex-col justify-between space-y-8 relative overflow-hidden transition-all shadow-sm hover:shadow-md ${
                  pkg.isPopular 
                    ? 'border-sky-500 ring-2 ring-sky-100/50' 
                    : 'border-slate-200'
                }`}
              >
                {/* Popular / Recommended Badge */}
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-[9px] uppercase tracking-widest py-1.5 px-5 rounded-bl-xl shadow-sm font-display">
                    Highly Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-xl text-slate-950 leading-tight">{pkg.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-medium">{pkg.description}</p>
                  </div>

                  {/* Pricing block */}
                  <div className="flex items-baseline gap-2.5 pb-5 border-b border-slate-100">
                    <span className="text-4xl font-black text-slate-950 font-display">${pkg.price}</span>
                    <span className="text-sm text-slate-400 line-through font-mono">${pkg.originalPrice}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-bold uppercase bg-emerald-50 px-2.5 py-1 rounded-lg">
                      Save {savingsPercent}%
                    </span>
                  </div>

                  {/* Diagnostic inclusions list */}
                  <div className="space-y-3">
                    <span className="block text-[10px] font-bold text-sky-600 uppercase tracking-widest">Inclusions ({pkg.inclusions.length} Tests)</span>
                    <ul className="space-y-2.5 text-xs">
                      {pkg.inclusions.map((inclusion, idx) => (
                        <li key={idx} className="flex gap-2.5 text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Trigger */}
                <button
                  onClick={() => onOpenAppointmentModal(pkg.id)}
                  className={`w-full py-3 rounded-xl font-bold font-display text-xs uppercase tracking-wider transition-all shadow-md text-center cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white'
                      : 'bg-sky-900 hover:bg-sky-950 text-white'
                  }`}
                >
                  Book Screening Package Test
                </button>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
