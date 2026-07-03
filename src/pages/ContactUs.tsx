import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, Bus, Car } from 'lucide-react';

export default function ContactUs() {
  const [inquirySubmitted, setInquirySubmitted] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      alert('Please fill out all required contact fields.');
      return;
    }
    const inquiryRef = `DH-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquirySubmitted(inquiryRef);
  };

  const handleReset = () => {
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
    setInquirySubmitted(null);
  };

  return (
    <div className="space-y-12 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Reach Our Outpatient Helpdesk</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">Contact & Location</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Have questions about clinical ward timings, health screening appointments, or insurance panel authorizations? Send us a direct inquiry.
          </p>
        </div>
      </section>

      {/* Grid: Details vs Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl font-display font-extrabold text-slate-950">Administrative Offices</h2>
              <p className="text-slate-500 text-xs leading-relaxed font-medium">
                Our helpdesk coordinators are available to answer general administrative inquiries from Mon-Sat, 08:00 AM to 08:00 PM. Trauma emergencies are handled 24/7.
              </p>
            </div>

            {/* Direct details cards */}
            <div className="space-y-5 text-xs">
              <div className="flex gap-4 p-4 border border-slate-100 bg-white rounded-xl shadow-sm">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0" />
                <div className="space-y-1">
                  <span className="block font-bold text-slate-800 uppercase tracking-wider text-[10px]">Hospital Campus Address</span>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    Date Hospital Road, Medical Square, Near Central Park Drive, Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 bg-white rounded-xl shadow-sm">
                <Phone className="w-5 h-5 text-sky-600 shrink-0" />
                <div className="space-y-1">
                  <span className="block font-bold text-slate-800 uppercase tracking-wider text-[10px]">Infoline Contact Numbers</span>
                  <p className="text-slate-600 font-medium font-mono leading-relaxed">
                    Outpatient Helpdesk: +91 22 2345 6789 <br />
                    Trauma Redline: +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-slate-100 bg-white rounded-xl shadow-sm">
                <Mail className="w-5 h-5 text-sky-600 shrink-0" />
                <div className="space-y-1">
                  <span className="block font-bold text-slate-800 uppercase tracking-wider text-[10px]">Secured Email Inbox</span>
                  <p className="text-slate-600 font-medium font-mono">
                    General: info@datehospital.org <br />
                    Billing/TPA: tpa@datehospital.org
                  </p>
                </div>
              </div>
            </div>

            {/* Public Transport and Parking */}
            <div className="p-5 border border-slate-150 bg-slate-50 rounded-2xl space-y-4">
              <h3 className="font-display font-extrabold text-slate-950 text-sm">Directions & Parking Guides</h3>
              <div className="space-y-3.5 text-xs">
                <div className="flex gap-3 text-slate-600">
                  <Bus className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p><strong>Public Transport:</strong> Just 5 minutes walk from Central Metro Station (Line-3) and Medical Square Bus Terminus.</p>
                </div>
                <div className="flex gap-3 text-slate-600">
                  <Car className="w-5 h-5 text-emerald-600 shrink-0" />
                  <p><strong>Visitor Parking:</strong> Dedicated multi-level basement car parking available 24/7. First 2 hours are completely free of cost for inpatient families.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-250 shadow-sm p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {!inquirySubmitted ? (
                /* INQUIRY FORM */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-display font-extrabold text-slate-950">Inquiry Intake Portal</h2>
                    <p className="text-slate-500 text-xs">Complete the secure portal below to reach out directly to our admin staff.</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Sunil Deshmukh"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="sunil@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Inquiry Subject Category *</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    >
                      <option value="General Inquiry">General Medical Inquiry</option>
                      <option value="OPD/IPD Billing">Outpatient / Inpatient Billing questions</option>
                      <option value="TPA Insurance Clearance">Cashless TPA Insurance approval</option>
                      <option value="Career & Staff Openings">Careers & Clinical Fellowships</option>
                      <option value="Patient Grievance / Feedback">Patient Feedback & Grievance desk</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Your Detailed Message *</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Type your question or request here..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-sky-900 hover:bg-sky-950 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    Submit Inquiry Form
                  </button>
                </form>
              ) : (
                /* INQUIRY SUCCESS PANEL */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-5"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-display text-slate-950">Inquiry Logged Successfully!</h3>
                    <p className="text-xs text-slate-500">Your form has been recorded on our secure administrative database.</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-150 rounded-2xl p-4 text-xs space-y-2 max-w-sm mx-auto text-left">
                    <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-1.5">
                      <span>Inquiry Ticket ID</span>
                      <span className="font-mono text-sky-600 font-extrabold">{inquirySubmitted}</span>
                    </div>
                    <p><strong>Name:</strong> {form.name}</p>
                    <p><strong>Subject:</strong> {form.subject}</p>
                    <p><strong>Status:</strong> <span className="text-sky-600 font-bold uppercase tracking-wider text-[10px]">Pending Staff Review</span></p>
                  </div>

                  <p className="text-[10px] text-slate-400 max-w-xs mx-auto">One of our outpatient desk officers will review your ticket and reply to your email or telephone within 24 working hours.</p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                  >
                    Submit New Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Interactive/Visual Google Maps Replacement Representation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm max-w-5xl mx-auto">
          {/* Mock Map Canvas */}
          <div className="relative h-80 bg-slate-100 flex items-center justify-center overflow-hidden">
            {/* Background design elements to look like map coordinates */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] opacity-25"></div>
            
            {/* Map Roads representation (some lines) */}
            <div className="absolute top-1/3 left-0 right-0 h-4 bg-slate-200"></div>
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-slate-200"></div>
            <div className="absolute left-1/4 top-0 bottom-0 w-4 bg-slate-200"></div>
            <div className="absolute left-2/3 top-0 bottom-0 w-4 bg-slate-200"></div>
            
            {/* Landmark: Central Park */}
            <div className="absolute top-12 left-[10%] bg-emerald-100 border border-emerald-200 rounded-2xl p-3 text-[10px] font-bold text-emerald-800 shadow-sm flex items-center gap-1">
              <Car className="w-4 h-4 text-emerald-600" />
              <span>Central Park Reserve</span>
            </div>

            {/* Metro Station */}
            <div className="absolute bottom-12 right-[12%] bg-blue-100 border border-blue-200 rounded-2xl p-3 text-[10px] font-bold text-blue-800 shadow-sm flex items-center gap-1">
              <Bus className="w-4 h-4 text-blue-600" />
              <span>Central Metro Station (Line-3)</span>
            </div>

            {/* DATE HOSPITAL PIN (pulsing) */}
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-500 rounded-full blur-md animate-ping scale-150"></div>
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-tr from-sky-600 to-emerald-500 border-4 border-white flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="bg-slate-900 text-white border border-slate-800 rounded-xl px-4 py-2 text-xs font-bold text-center shadow-md space-y-0.5">
                <span className="block text-white uppercase tracking-wider text-[9px] font-extrabold text-emerald-400">Date Hospital Campus</span>
                <span className="block font-medium text-slate-300 text-[10px]">Mumbai Medical District</span>
              </div>
            </div>

            {/* Direct Directions control bottom right */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl border border-slate-150 text-[10px] shadow-md flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <div>
                <span className="block text-slate-400 uppercase tracking-wider font-extrabold leading-none">GPS Coordinates</span>
                <span className="block text-slate-800 font-bold font-mono mt-0.5">19.0760&deg; N, 72.8777&deg; E</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
