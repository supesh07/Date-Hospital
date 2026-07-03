import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Calendar, 
  ShieldCheck, 
  Clock, 
  Activity, 
  ShieldAlert, 
  Users, 
  Award, 
  Heart 
} from 'lucide-react';
import { Doctor, MedicalService, CheckupPackage, Testimonial } from '../types';
import ServiceIcon from '../components/ServiceIcon';

interface HomeProps {
  onPageChange: (pageId: string) => void;
  onOpenAppointmentModal: () => void;
  doctors: Doctor[];
  services: MedicalService[];
  packages: CheckupPackage[];
  testimonials: Testimonial[];
}

export default function Home({ 
  onPageChange, 
  onOpenAppointmentModal, 
  doctors, 
  services, 
  packages, 
  testimonials 
}: HomeProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const featuredServices = services.slice(0, 4);
  const featuredDoctors = doctors.slice(0, 3);
  const featuredPackages = packages.slice(0, 2);

  // Stats Data
  const stats = [
    { value: '18+', label: 'Years of Clinical Trust', icon: Award, color: 'text-sky-600 bg-sky-50' },
    { value: '150k+', label: 'Successful Recoveries', icon: Users, color: 'text-emerald-600 bg-emerald-50' },
    { value: '250+', label: 'Specialized IPD Beds', icon: Heart, color: 'text-red-600 bg-red-50' },
    { value: '24/7', label: 'Continuous Critical Care', icon: Activity, color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div className="space-y-20 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-950 pt-20 pb-32 md:pt-24 md:pb-40 text-white overflow-hidden">
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-sky-600/20 to-emerald-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-wider"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Advanced Multispeciality Healthcare
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight"
            >
              Where Clinical Expertise <br />
              Meets Deep <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Compassion</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Date Hospital delivers world-class critical diagnostics, preventative health, and advanced surgical interventions. Our senior consultants are committed to restoring your health and vitality with unwavering dedication.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-bold text-sm shadow-xl shadow-sky-950/40 hover:from-sky-600 hover:to-emerald-600 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                Book Clinic Appointment
              </button>
              <button
                onClick={() => {
                  onPageChange('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-1.5 px-7 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-white font-bold text-sm transition-all cursor-pointer"
              >
                Explore Medical Specialities
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800 max-w-md mx-auto lg:mx-0"
            >
              {[
                'Govt. Empanelled',
                'ISO 9001:2015',
                'Cashless Insurance'
              ].map((trust, index) => (
                <div key={index} className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{trust}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual image block */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-sky-950/50 aspect-4/3 sm:aspect-video lg:aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop" 
                alt="Date Hospital Entrance Lobby"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              {/* Floating emergency badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 border border-emerald-500/40 rounded-lg">
                    <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-bold">Ambulance Service</span>
                    <span className="block font-bold text-sm text-white font-mono">+91 98765 43210</span>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    onPageChange('emergency');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold transition-all uppercase tracking-wide cursor-pointer"
                >
                  Call Now
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. Quick Stats Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 p-4 rounded-xl hover:bg-slate-50/50 transition-all">
              <div className={`p-3 rounded-xl shrink-0 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-3xl font-extrabold font-display text-slate-950 leading-tight">{stat.value}</span>
                <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-150 aspect-video lg:aspect-[4/5] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop" 
                alt="Modern Hospital Operation Theater"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-100 flex items-center gap-2 shadow-md">
                <Clock className="w-5 h-5 text-sky-600" />
                <div className="text-[10px] leading-tight">
                  <span className="block text-slate-500 uppercase tracking-wider font-bold">OPD Walk-in</span>
                  <span className="block text-slate-900 font-bold">08:00 AM - 08:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Background design accents */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-50 rounded-full -z-10 blur-xl"></div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-sky-600 block">About Date Hospital</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">A Legacy of Clinical Precision, Built on Family Trust</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm">
              Founded under the leadership of Dr. Rohan Date, Date Hospital has grown from a specialized joint-care and trauma clinic to an expansive multispeciality institution. We bring together world-class medical equipment, standardized pathology protocols, and senior medical consultants under one roof.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our workflows are fully digitized, meaning patient record tracking, medication lists, and medical history are immediately available to our treating panel in any critical emergency. We partner with India’s leading insurance TPAs to guarantee cashless claim processing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                '24/7 Level-1 Emergency & ICU',
                'Advanced Modular OT Suite',
                'ISO 9001 Certified Clinical Lab',
                '24/7 Fully Stocked Pharmacy',
                'In-house Critical Cardiac Care',
                'Senior Pediatric & Maternity Care'
              ].map((val, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-800">{val}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => {
                  onPageChange('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specialized Services Preview */}
      <section className="bg-slate-50 py-20 border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-sky-600 block">Our Core Specialities</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">Expert Medical Departments</h2>
            </div>
            <button
              onClick={() => {
                onPageChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              View All Services
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl border border-slate-150/80 shadow-sm hover:shadow-md transition-all flex flex-col h-full group"
              >
                <div className="relative h-40 overflow-hidden rounded-t-2xl">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                    <ServiceIcon name={service.icon} className="w-5 h-5 text-sky-600" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-slate-950 group-hover:text-sky-600 transition-colors leading-snug">{service.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">{service.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      onPageChange('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 group-hover:text-sky-600 transition-colors cursor-pointer mt-auto"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Our Doctors Section Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-600 block">World-Class Specialists</span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">Meet Our Medical Panel</h2>
          </div>
          <button
            onClick={() => {
              onPageChange('doctors');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer"
          >
            See Our Doctors List
            <ArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map((doc) => (
            <div 
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col sm:flex-row gap-5 items-start"
            >
              <img 
                src={doc.image} 
                alt={doc.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-sm border border-slate-200"
              />
              <div className="space-y-3 flex-1 flex flex-col justify-between h-full">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-base text-slate-950 leading-tight">{doc.name}</h3>
                    <div className="flex items-center gap-0.5 text-amber-500 font-semibold text-xs shrink-0">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{doc.rating}</span>
                    </div>
                  </div>
                  <span className="block text-xs font-bold text-sky-600 uppercase tracking-wide leading-none">{doc.specialty}</span>
                  <span className="block text-[11px] text-slate-400 font-medium leading-normal">{doc.qualification}</span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-[10px] text-slate-500">
                  <span className="font-medium font-mono">{doc.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 6. Emergency protocols highlight banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-650 via-rose-600 to-rose-750 text-white rounded-2xl p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-rose-500/30">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 text-rose-200 rounded-full text-xs font-bold uppercase tracking-wider border border-red-500/20">
              <ShieldAlert className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
              24/7 Red Code Trauma Care
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">Advanced Critical Trauma & Cardiac Emergency Wing</h3>
            <p className="text-sm text-rose-100 leading-relaxed">
              Equipped with non-invasive and invasive continuous critical-care monitoring, immediate mechanical ventilators, pediatric incubator facilities, and dedicated interventional catheterization labs. In case of emergency, immediately dial our redline trauma dispatch.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a 
              href="tel:+919876543210"
              className="px-6 py-3.5 bg-white text-rose-650 hover:bg-slate-50 font-bold text-sm text-center rounded-xl shadow-lg transition-all font-display uppercase tracking-wide"
            >
              Dial +91 98765 43210
            </a>
            <button
              onClick={() => {
                onPageChange('emergency');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3.5 bg-red-950 hover:bg-red-900 text-rose-200 font-bold text-sm text-center rounded-xl border border-red-500/30 transition-all uppercase tracking-wide cursor-pointer"
            >
              Emergency First Aid Manual
            </button>
          </div>
        </div>
      </section>

      {/* 7. Health Packages Preview */}
      <section className="bg-slate-50 py-20 border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-sky-600 block">Preventative Screenings</span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">Discounted Clinical Checkups</h2>
            </div>
            <button
              onClick={() => {
                onPageChange('packages');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              Compare Packages
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPackages.map((pkg) => (
              <div 
                key={pkg.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between space-y-6 relative overflow-hidden"
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-bold text-[9px] uppercase tracking-widest py-1.5 px-4 rounded-bl-xl shadow-sm font-display">
                    Recommended
                  </div>
                )}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-lg text-slate-950 leading-tight">{pkg.name}</h3>
                    <p className="text-xs text-slate-500">{pkg.description}</p>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-2 pb-4 border-b border-slate-100">
                    <span className="text-3xl font-extrabold text-slate-950 font-display">${pkg.price}</span>
                    <span className="text-xs text-slate-400 line-through">${pkg.originalPrice}</span>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded">Save {Math.round((1 - pkg.price/pkg.originalPrice) * 100)}%</span>
                  </div>

                  {/* Highlights inclusions (slice first 4) */}
                  <ul className="space-y-2 text-xs">
                    {pkg.inclusions.slice(0, 4).map((inc, i) => (
                      <li key={i} className="flex items-center gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="font-medium">{inc}</span>
                      </li>
                    ))}
                    <li className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">
                      + {pkg.inclusions.length - 4} more diagnostics included
                    </li>
                  </ul>
                </div>

                <button
                  onClick={onOpenAppointmentModal}
                  className="w-full py-3 bg-sky-900 hover:bg-sky-950 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer text-center"
                >
                  Book Package Test Slot
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Patient Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Patient Experiences</span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-950">What Our Patients Say</h2>
          <p className="text-slate-500 text-xs">Verified clinic testimonials from patients treated in our surgery and medicine wards.</p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-150 p-8 md:p-12 shadow-sm max-w-3xl mx-auto relative">
          <div className="absolute top-0 left-0 -translate-y-4 translate-x-6 text-9xl font-serif text-sky-100 select-none leading-none -z-10">&ldquo;</div>
          
          <div className="space-y-6 relative">
            <div className="flex gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-current" />
              ))}
            </div>
            
            <p className="text-slate-700 text-sm leading-relaxed font-medium italic">
              &quot;{testimonials[activeTestimonial].content}&quot;
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div>
                <span className="block text-sm font-bold text-slate-950 font-display">{testimonials[activeTestimonial].name}</span>
                <span className="block text-xs text-slate-500">{testimonials[activeTestimonial].role}</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">{testimonials[activeTestimonial].date}</span>
            </div>
          </div>

          {/* Testimonial Nav */}
          <div className="flex justify-center gap-1.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${activeTestimonial === i ? 'w-8 bg-sky-600' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Booking Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-900 to-sky-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-sky-800 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0369a1_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left z-10">
            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white leading-tight">Ready to Book Your Diagnostics Consultation?</h3>
            <p className="text-sm text-sky-200 leading-relaxed">
              Confirm your outpatient consulting session or health screening package within minutes. Simply select your medical department and coordinate directly with our senior clinical specialists.
            </p>
          </div>
          <div className="shrink-0 w-full lg:w-auto text-center z-10">
            <button
              onClick={onOpenAppointmentModal}
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold font-display text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-950/40 hover:-translate-y-0.5 transition-all cursor-pointer w-full sm:w-auto"
            >
              Schedule Appointment Now
            </button>
            <span className="block text-[11px] text-sky-300 font-semibold mt-3">Or call outpatient support: +91 22 2345 6789</span>
          </div>
        </div>
      </section>

    </div>
  );
}
