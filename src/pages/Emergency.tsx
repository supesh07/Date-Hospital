import React from 'react';
import { Phone, AlertTriangle, ShieldAlert, Heart, Clock, HelpCircle, Activity, MapPin } from 'lucide-react';

export default function Emergency() {
  const protocols = [
    {
      title: 'Cardiac Arrest / Chest Pain',
      symptoms: 'Crushing chest pain radiating to left arm, shortness of breath, sudden sweating, dizziness.',
      firstAid: 'Call our emergency hotline immediately. Keep the patient sitting upright and calm. Do not allow them to exert or walk. If conscious, let them chew a standard dispersible Aspirin (300mg) if not allergic.',
      color: 'border-red-200 bg-red-50/40 text-red-950'
    },
    {
      title: 'Accidental Trauma & Fractures',
      symptoms: 'Deformed joint, inability to bear weight, severe bleeding, blunt impact trauma.',
      firstAid: 'Apply firm direct pressure with a clean cloth to stop external bleeding. Immobilize the injured joint/limb using a temporary splint or pillow. Do not attempt to force the bone back into place.',
      color: 'border-amber-250 bg-amber-50/40 text-amber-950'
    },
    {
      title: 'Stroke (F.A.S.T Protocol)',
      symptoms: 'Facial drooping, Arm weakness on one side, Speech slurring or difficulty, Time to call ER.',
      firstAid: 'Record the exact time symptoms first started. This is critical for administering thrombolytic drugs in our ER. Lay the patient on their side with the head slightly elevated. Do not give any food or liquid.',
      color: 'border-rose-200 bg-rose-50/40 text-rose-950'
    },
    {
      title: 'Pediatric / Child Emergency',
      symptoms: 'Difficulty breathing, bluish lips, high fever with stiff neck, continuous vomiting, lethargy.',
      firstAid: 'Contact pediatric ER dispatcher immediately. Maintain comfortable airways. Do not administer over-the-counter fever medications without consulting our pediatric panel on call.',
      color: 'border-emerald-200 bg-emerald-50/40 text-emerald-950'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="relative bg-red-950 py-16 text-white text-center border-b border-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-900/50 text-red-200 rounded-full text-xs font-extrabold uppercase tracking-widest border border-red-500/20 animate-pulse">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            24x7 Red Code Trauma Care
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">Emergency Medical Care</h1>
          <p className="text-red-200 text-sm max-w-2xl mx-auto leading-relaxed">
            In critical medical scenarios, seconds count. Date Hospital maintains a Level-1 Trauma Emergency Ward, staffed 24/7 by board-certified critical care specialists and cardiac surgeons.
          </p>
        </div>
      </section>

      {/* 2. Urgent Contact Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-3xl border border-red-100 shadow-xl p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-7 space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center gap-2 text-red-600 font-extrabold text-xs uppercase tracking-widest">
              <Activity className="w-4 h-4 animate-pulse" />
              Trauma Dispatch Redline
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">Need an Ambulance Instantly?</h2>
            <p className="text-slate-500 text-xs leading-relaxed">
              Our advanced life support (ALS) ambulances are stationed at strategic points in Mumbai, equipped with mechanical ventilators, oxygen cylinders, and cardiac defibrillators. We guarantee dispatch within 3 minutes of receiving your call.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-start text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-emerald-500" /> Average Response: Under 15 mins</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-500" /> Coverage Radius: 15 Kilometers</span>
            </div>
          </div>

          <div className="md:col-span-5 shrink-0">
            <a
              href="tel:+919876543210"
              className="flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white rounded-2xl shadow-xl shadow-red-100 border border-red-500/20 group transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-8 h-8 text-white mb-2 animate-bounce" />
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-red-100">Click to Dial Redline</span>
              <span className="text-2xl sm:text-3xl font-black font-mono mt-1 tracking-tight group-hover:scale-105 transition-transform">+91 98765 43210</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. Triage protocol guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-red-600">Pre-Arrival First Aid Guide</span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-950">Clinical Protocols While You Wait</h2>
          <p className="text-slate-500 text-xs">Standard emergency steps to maintain vitals until our ambulance crew or trauma team arrives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {protocols.map((p, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 shadow-sm ${p.color}`}>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-base text-slate-950">{p.title}</h3>
                <div className="space-y-1.5">
                  <p className="text-[10px] uppercase tracking-widest font-extrabold text-red-700">Identifying Symptoms</p>
                  <p className="text-slate-700 text-xs leading-relaxed">{p.symptoms}</p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200/50 space-y-1.5">
                <p className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-800">Critical First Aid Steps</p>
                <p className="text-slate-700 text-xs leading-relaxed font-medium">{p.firstAid}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. What to bring checklist */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-slate-800">
          <div className="md:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 block">Pre-Admission Quick Checklist</span>
            <h3 className="text-2xl font-display font-extrabold text-white">Preparedness for Emergency Admission</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              If safe to do so, our trauma triage crew recommends placing these items in a single package to accompany the patient to Date Hospital. This speeds up our admission verification and physician coordination.
            </p>
          </div>
          <div className="md:col-span-5 space-y-2">
            {[
              'Patient National ID Card (Aadhaar/PAN)',
              'Health Insurance Card & TPA Policy ID',
              'Previous Discharge Summaries (if applicable)',
              'List of active daily medications/prescriptions',
              'Details of known drug allergies (e.g. Penicillin)'
            ].map((check, i) => (
              <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                <div className="h-2 w-2 rounded-full bg-emerald-400 shrink-0"></div>
                <span className="font-semibold">{check}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
