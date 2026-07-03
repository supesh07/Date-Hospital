import React, { useState } from 'react';
import { Clock, FileText, CheckCircle2, ShieldCheck, Heart, Info, DollarSign, ArrowRight } from 'lucide-react';

export default function OpdIpd() {
  const [activeTab, setActiveTab] = useState<'opd' | 'ipd'>('opd');

  const opdSteps = [
    { title: 'Token & Queue', desc: 'Acquire an Outpatient Token from Counter A at the main entrance lobby.' },
    { title: 'Billing & Reg', desc: 'Pre-pay the Flat Consulting Fee ($25 / INR 500) and link your National ID card.' },
    { title: 'Vitals & Triage', desc: 'A registered nursing officer will record blood pressure, temperature, weight, and SpO2.' },
    { title: 'Consultation', desc: 'Visit your assigned senior medical consultant in the specialized OPD cabins.' },
    { title: 'Pharmacy / Diagnostics', desc: 'Collect prescribed medicines from our 24/7 Pharmacy or proceed to the lab for scans.' }
  ];

  const roomCategories = [
    {
      name: 'General Ward Suite',
      pricing: '$40 / Day',
      details: ['Shared spacious ward (6 beds)', 'Continuous central oxygen & suction channels', 'Centralized air conditioning', 'Assigned round-the-clock nursing officer', 'Standard clinical monitoring monitors']
    },
    {
      name: 'Semi-Private Room',
      pricing: '$80 / Day',
      details: ['Dual occupancy room (2 beds separated by privacy drapes)', 'Attached hygienic bathroom & washroom', 'Dedicated visitor couch', 'Individual flat-screen TV & dietary meals included', 'Nurse call button alert console']
    },
    {
      name: 'Deluxe Private Room',
      pricing: '$150 / Day',
      details: ['Single occupancy premium room with air-conditioning', 'Attached modern modular washroom', 'Refrigerator, micro-oven, sofa-cum-bed for attendant', 'Advanced electronic motorized hospital bed', 'Daily clinical round reporting to CMO office']
    },
    {
      name: 'Super Deluxe Suite',
      pricing: '$250 / Day',
      details: ['Luxurious double-room setup (patient suite + visitor living lounge)', 'Private clinical kitchenette and executive workstation', 'Premium motorized bed with custom spine supports', 'Personalized assigned nurse on-demand 24x7', 'Priority counseling rounds with senior consultants']
    }
  ];

  const cashlessPartners = [
    'Star Health Insurance',
    'ICICI Lombard',
    'HDFC ERGO General',
    'Niva Bupa Health',
    'Bajaj Allianz TPA',
    'Care Health Insurance'
  ];

  return (
    <div className="space-y-12 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Patient & Attendee Care Manual</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">OPD & IPD Information</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Discover detailed step-by-step registration guidelines, ward features, room categories, visitor restrictions, and cashless insurance claims processing.
          </p>
        </div>
      </section>

      {/* Tabs Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4 border-b border-slate-200 pb-1 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('opd')}
            className={`pb-3 px-6 text-sm font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'opd'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Out-Patient (OPD)
          </button>
          <button
            onClick={() => setActiveTab('ipd')}
            className={`pb-3 px-6 text-sm font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
              activeTab === 'ipd'
                ? 'border-sky-600 text-sky-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            In-Patient (IPD)
          </button>
        </div>
      </section>

      {/* Main Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'opd' ? (
          /* OPD CONTENT */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            
            {/* Steps Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-display font-extrabold text-slate-950">OPD Step-by-Step Registration</h2>
                <p className="text-slate-500 text-xs">A transparent workflow designed to minimize outpatient wait times.</p>
              </div>

              <div className="space-y-6">
                {opdSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative group">
                    {idx < opdSteps.length - 1 && (
                      <div className="absolute top-10 left-5 bottom-0 w-0.5 bg-slate-100 group-hover:bg-sky-200 transition-colors"></div>
                    )}
                    <div className="h-10 w-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center font-bold text-sky-600 shrink-0 text-sm font-display shadow-sm">
                      0{idx + 1}
                    </div>
                    <div className="space-y-1 pt-1.5">
                      <h3 className="font-display font-bold text-sm text-slate-950">{step.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Pricing Summary */}
            <div className="lg:col-span-5 space-y-6 bg-slate-50 rounded-2xl p-6 border border-slate-150">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-extrabold text-sky-600 block">Outpatient Policies</span>
                <h3 className="text-lg font-display font-extrabold text-slate-950">Timings & Consulting Charges</h3>
              </div>
              
              <ul className="space-y-4 text-xs">
                <li className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-slate-500 font-medium">Standard Registration Fee</span>
                  <span className="font-bold text-slate-950 font-mono">$25 / INR 500 flat</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-slate-500 font-medium">Valid Consultation Period</span>
                  <span className="font-bold text-slate-950">3 Days (Free follow-ups)</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                  <span className="text-slate-500 font-medium">Outpatient Clinic Hours</span>
                  <span className="font-bold text-slate-950">08:00 AM - 08:00 PM (Mon-Sat)</span>
                </li>
              </ul>

              <div className="p-3 border border-sky-100 bg-sky-50/60 rounded-xl flex gap-2.5 text-[10px] text-sky-850 leading-relaxed font-semibold">
                <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <p>
                  Senior Citizen diagnostics receive a flat 10% concession across all pathological tests and radiology scan bills generated during OPD sessions.
                </p>
              </div>
            </div>

          </div>
        ) : (
          /* IPD CONTENT */
          <div className="space-y-16 max-w-5xl mx-auto">
            
            {/* Introduction and Cashless */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4">
                <h2 className="text-2xl font-display font-extrabold text-slate-950">In-Patient Admissions Guide</h2>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Admissions to Date Hospital are initiated under the prescription of our chief panel consultants or in immediate response to critical trauma emergencies. Once admitted, our EMR synchronizes patient data, ensuring the treating clinical team is instantly aware of medicine lists and histories.
                </p>
                
                {/* Cashless partners list */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-950 uppercase tracking-wider">Cashless TPA Partnerships</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {cashlessPartners.map((partner, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-600 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Visitor code of conduct */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-150 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-rose-600">
                  <Info className="w-5 h-5 shrink-0" />
                  <h3 className="font-display font-bold text-slate-950 text-sm">Visitor Code & Regulations</h3>
                </div>
                
                <ul className="space-y-3 text-xs leading-relaxed text-slate-600 font-medium">
                  <li>&bull; Only **one Attendant Pass** is issued per patient room.</li>
                  <li>&bull; Attendant visiting hours: **04:00 PM to 06:00 PM** daily.</li>
                  <li>&bull; Outside dietary food, flowers, and fruits are strictly prohibited to prevent cross-infections in critical wards.</li>
                  <li>&bull; Children below 12 years are not allowed in general patient wards as visitors.</li>
                </ul>
              </div>
            </div>

            {/* Room Categories */}
            <div className="space-y-6 pt-8 border-t border-slate-100">
              <div className="space-y-2 text-center max-w-xl mx-auto">
                <span className="text-xs uppercase tracking-widest font-bold text-sky-600">Premium Medical Infrastructure</span>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-950">Patient Room & Ward Categories</h3>
                <p className="text-slate-500 text-xs">We provide comfortable clinical environments supporting diverse accommodation expectations.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {roomCategories.map((room, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200/60 p-6 flex flex-col justify-between shadow-sm hover:shadow transition-all space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-baseline gap-2">
                        <h4 className="font-display font-bold text-base text-slate-950 leading-tight">{room.name}</h4>
                        <span className="font-extrabold text-sky-600 text-sm shrink-0 font-display">{room.pricing}</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        {room.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </section>

    </div>
  );
}
