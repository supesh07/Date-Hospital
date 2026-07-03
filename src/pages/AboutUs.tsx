import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Award, Target, Users, Sparkles, Star } from 'lucide-react';

export default function AboutUs() {
  const values = [
    {
      title: 'Clinical Integrity First',
      description: 'We prioritize medical ethics and strict evidence-based clinical diagnostics above all else.',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      title: 'Empathetic Human Care',
      description: 'We believe medicine is a service, not a business. Every patient is treated with dignity, respect, and deep care.',
      icon: Heart,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    {
      title: 'Constant Innovation',
      description: 'We upgrade our diagnostic equipments, laboratory automations, and modular OTs to reflect global healthcare standards.',
      icon: Sparkles,
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      title: 'Absolute Accessibility',
      description: 'We coordinate with diverse government panels and cashless TPAs to ensure premium medical care remains affordable.',
      icon: Target,
      color: 'bg-amber-50 text-amber-600 border-amber-100'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Discover Date Hospital</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">About Our Institution</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Founded with a vision of blending medical precision with compassionate care, we have grown into one of Mumbai’s most trusted multi-specialty clinical networks.
          </p>
        </div>
      </section>

      {/* Main Core Mission / Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-[4/5] border border-slate-200 shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" 
              alt="Date Hospital Panel Doctors"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-slate-100 shadow-md">
              <span className="block text-xl font-black text-sky-950 font-display">ISO 9001:2015</span>
              <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">National Quality Certified</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-600 block">Our Core Ideals</span>
            <h2 className="text-3xl font-display font-extrabold text-slate-950">Guiding Principles in Every Diagnostic & Surgical Task</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            At Date Hospital, we redefine the clinical journey. Our facilities are designed to eliminate the anxiety typically associated with hospitalizations. By housing high-grade laboratories, clinical wards, operating rooms, and consult cabins within a singular connected digital network, we reduce waiting lists and expedite recovery pathways.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Under our Chief Medical Officer Dr. Rohan Date, we maintain strict audit mechanisms on diagnostic quality control. Our pathology labs operate 24 hours a day to facilitate critical emergency decision-making.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 border border-slate-100 bg-white rounded-xl shadow-sm space-y-2">
              <span className="block text-xs font-bold text-sky-600 uppercase tracking-widest">Our Mission</span>
              <p className="text-slate-600 text-xs leading-relaxed">To deliver world-class medical interventions with empathetic care, promoting preventive screenings, and sustaining absolute diagnostic transparency.</p>
            </div>
            <div className="p-4 border border-slate-100 bg-white rounded-xl shadow-sm space-y-2">
              <span className="block text-xs font-bold text-emerald-600 uppercase tracking-widest">Our Vision</span>
              <p className="text-slate-600 text-xs leading-relaxed">To emerge as the premier patient-centric medical sanctuary in the region, recognized for advanced diagnostics and surgical excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Letter Box */}
      <section className="bg-slate-50 py-16 border-y border-slate-150">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 text-center md:text-left space-y-3 shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop" 
              alt="Dr. Rohan Date"
              referrerPolicy="no-referrer"
              className="w-32 h-32 md:w-full md:h-auto mx-auto rounded-2xl object-cover shadow-md border border-slate-200"
            />
            <div>
              <h3 className="font-display font-bold text-slate-950 text-base leading-tight">Dr. Rohan Date</h3>
              <p className="text-xs text-sky-600 font-bold uppercase tracking-wider mt-0.5">Founder & CMO</p>
              <p className="text-[10px] text-slate-400 font-mono">MS (Orthopedics), MCh</p>
            </div>
          </div>
          
          <div className="md:col-span-8 space-y-4">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xl font-serif font-black select-none">&ldquo;</span>
            <h3 className="text-xl font-display font-extrabold text-slate-950">A Message From Chief Medical Officer</h3>
            <p className="text-slate-600 text-xs leading-relaxed italic">
              &quot;When we laid down the blueprints for Date Hospital, our objective was clear: we wanted to build a clinical environment where we would trust our own families to be treated. For us, medicine is not simply a business of prescribing pills, but a human covenant of trust, empathy, and professional integrity. 
            </p>
            <p className="text-slate-600 text-xs leading-relaxed italic">
              Today, with over 18 years of clinical operations, our team continues to build upon that core vision. From our automated pathological testing queues to our ultra-modern modular laminar-flow surgical suites, we ensure that every clinical decision is verified, secure, and delivered with warmth.&quot;
            </p>
            <div className="pt-2 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs text-slate-400 ml-2">Awarded Outpatient Clinic of the Year</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital values Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-600">The Values We Live By</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">Our Healthcare Pillars</h2>
          <p className="text-slate-500 text-xs">These values form the bedrock of our day-to-day nursing and diagnostic workloads.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
              <div className={`p-3 rounded-xl inline-block border ${v.color}`}>
                <v.icon className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-base text-slate-950 leading-tight">{v.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
