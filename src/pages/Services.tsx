import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, X, Sparkles, AlertCircle } from 'lucide-react';
import { MedicalService } from '../types';
import ServiceIcon from '../components/ServiceIcon';

interface ServicesProps {
  services: MedicalService[];
  onOpenAppointmentModal: (serviceId?: string) => void;
}

export default function Services({ services, onOpenAppointmentModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<MedicalService | null>(null);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Our Clinical Capabilities</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">Our Medical Services</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            From round-the-clock emergency responses to state-of-the-art pathology scans and advanced pediatric care, Date Hospital operates 8 primary core medical departments.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl border border-slate-150 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
                
                {/* Floating Category Icon Badge */}
                <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-md border border-slate-100 flex items-center justify-center">
                  <ServiceIcon name={service.icon} className="w-5.5 h-5.5 text-sky-600" />
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold font-display leading-tight">{service.name}</h3>
                </div>
              </div>

              {/* Description and brief bullet inclusions */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-slate-600 text-xs leading-relaxed">{service.description}</p>
                  
                  {/* Highlights preview */}
                  <ul className="space-y-1.5 text-xs">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-semibold line-clamp-1">{detail}</span>
                      </li>
                    ))}
                    <li className="text-[10px] text-sky-600 font-bold uppercase tracking-wider pl-6 mt-1">
                      + {service.details.length - 3} more sub-clinics included
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold uppercase tracking-wider text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                  >
                    View All Details
                    <ChevronRight className="w-4 h-4 animate-pulse" />
                  </button>
                  <button
                    onClick={() => onOpenAppointmentModal(service.id)}
                    className="px-3.5 py-1.5 rounded-lg bg-sky-900 hover:bg-sky-950 text-white font-bold text-[10px] uppercase tracking-wide cursor-pointer transition-colors"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable Service Details Drawer/Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm"
            />

            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-2xl w-full max-w-lg border border-slate-100 shadow-2xl overflow-hidden"
              >
                {/* Header with image */}
                <div className="relative h-48">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 p-1.5 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-950 text-white rounded-lg transition-colors border border-white/10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-4 left-6 text-white flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 shrink-0">
                      <ServiceIcon name={selectedService.icon} className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-white leading-tight">{selectedService.name}</h3>
                      <span className="block text-[10px] text-sky-300 font-bold uppercase tracking-wider mt-0.5">Primary Ward & Clinical Sub-areas</span>
                    </div>
                  </div>
                </div>

                {/* Body details list */}
                <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  <div className="space-y-2">
                    <span className="block text-[10px] font-bold text-sky-600 uppercase tracking-widest">Medical Description</span>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">{selectedService.description}</p>
                  </div>

                  <div className="space-y-3">
                    <span className="block text-[10px] font-bold text-sky-600 uppercase tracking-widest">Inclusions, Procedures & Technologies</span>
                    <ul className="space-y-2.5 text-xs">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2.5 text-slate-700 bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="font-semibold">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pre-consult instruction */}
                  <div className="p-3 border border-amber-100 bg-amber-50/50 rounded-xl flex gap-2.5 text-[10px] text-amber-800 leading-relaxed font-semibold">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold">Patient Protocol Reminder</span>
                      No advance medical file is needed for general consultation. However, please carry previous diagnostic statements or allergy records, if any, for our doctors’ review.
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-bold uppercase tracking-wider"
                  >
                    Close Panel
                  </button>
                  <button
                    onClick={() => {
                      const serviceId = selectedService.id;
                      setSelectedService(null);
                      onOpenAppointmentModal(serviceId);
                    }}
                    className="px-4 py-2 rounded-xl bg-sky-900 hover:bg-sky-950 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    Book Diagnostic Slot
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
