import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Phone, Mail, FileText, CheckCircle2, ChevronRight, Clock, MapPin, Sparkles } from 'lucide-react';
import { Doctor, MedicalService, Appointment, AppointmentStatus } from '../types';
import { doctorsData, servicesData } from '../data';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctors: Doctor[];
  services: MedicalService[];
  onAddAppointment: (appointment: Appointment) => void;
}

export default function AppointmentModal({ isOpen, onClose, doctors, services, onAddAppointment }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patientName: '',
    patientPhone: '',
    patientEmail: '',
    gender: 'Male',
    serviceId: '',
    doctorId: '',
    date: '',
    time: '09:00 AM',
    notes: '',
  });

  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(doctors);
  const [bookedReference, setBookedReference] = useState<string | null>(null);

  // Filter doctors based on selected service/specialty
  useEffect(() => {
    if (!formData.serviceId) {
      setFilteredDoctors(doctors);
      return;
    }
    const selectedService = services.find(s => s.id === formData.serviceId);
    if (!selectedService) {
      setFilteredDoctors(doctors);
      return;
    }

    // Map service name/id to doctor specialty keywords
    const serviceKeywordsMap: { [key: string]: string[] } = {
      'gen-medicine': ['General Medicine', 'Internal Medicine'],
      'emergency-care': ['General Medicine', 'Critical Care', 'Orthopedic'],
      'child-care': ['Pediatrician', 'Neonatologist'],
      'womens-health': ['Obstetrician', 'Gynecologist'],
      'laboratory': ['Pathologist', 'Radiologist'],
      'pharmacy': ['Chief Medical Officer', 'General Medicine'],
      'cardiology': ['Cardiologist'],
      'orthopedics': ['Orthopedic', 'Joint Care', 'Joint Replacement'],
    };

    const keywords = serviceKeywordsMap[formData.serviceId] || [];
    const matched = doctors.filter(doc => 
      keywords.some(kw => doc.specialty.toLowerCase().includes(kw.toLowerCase()))
    );

    setFilteredDoctors(matched.length > 0 ? matched : doctors);
    
    // Auto-select doctor if there is only one
    if (matched.length === 1) {
      setFormData(prev => ({ ...prev, doctorId: matched[0].id }));
    } else {
      setFormData(prev => ({ ...prev, doctorId: '' }));
    }
  }, [formData.serviceId, doctors, services]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.patientName || !formData.patientPhone || !formData.patientEmail) {
        alert('Please complete all required fields on this step.');
        return;
      }
    }
    if (step === 2) {
      if (!formData.serviceId || !formData.doctorId) {
        alert('Please select both a medical service and a clinical specialist.');
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.time) {
      alert('Please select an appointment date and preferred time slot.');
      return;
    }

    const refId = `DH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: Appointment = {
      id: refId,
      patientName: formData.patientName,
      patientPhone: formData.patientPhone,
      patientEmail: formData.patientEmail,
      doctorId: formData.doctorId,
      serviceId: formData.serviceId,
      date: formData.date,
      time: formData.time,
      gender: formData.gender,
      notes: formData.notes,
      status: AppointmentStatus.CONFIRMED, // Auto-confirm in our mock clinical workspace
      createdAt: new Date().toISOString(),
    };

    onAddAppointment(newAppointment);
    setBookedReference(refId);
    setStep(4);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setFormData({
      patientName: '',
      patientPhone: '',
      patientEmail: '',
      gender: 'Male',
      serviceId: '',
      doctorId: '',
      date: '',
      time: '09:00 AM',
      notes: '',
    });
    setBookedReference(null);
    onClose();
  };

  const selectedDoctor = doctors.find(d => d.id === formData.doctorId);
  const selectedService = services.find(s => s.id === formData.serviceId);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', 
    '06:00 PM', '07:00 PM'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-slate-950/45 backdrop-blur-sm"
          />

          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="bg-sky-900 text-white px-6 py-5 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h2 className="text-lg font-bold font-display text-white leading-tight">Digital Clinic Booking Portal</h2>
                    <p className="text-xs text-sky-200">Date Hospital Medical Scheduling Network</p>
                  </div>
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="rounded-lg p-1 text-sky-200 hover:bg-sky-800 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Steps Indicator */}
              {step < 4 && (
                <div className="bg-slate-50 border-b border-slate-100 px-6 py-3 shrink-0 flex justify-between items-center text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
                    <span className={step === 1 ? 'text-sky-700' : ''}>Personal Info</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
                    <span className={step === 2 ? 'text-sky-700' : ''}>Choose Specialty</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
                    <span className={step === 3 ? 'text-sky-700' : ''}>Date & Time</span>
                  </div>
                </div>
              )}

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto flex-1">
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 flex gap-3 text-sky-900 text-xs">
                      <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block">Patient Pre-Registration Panel</span>
                        Please enter valid personal identification details so we can synchronize your records with our in-hospital Electronic Medical Records (EMR) server.
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Full Patient Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                        <input
                          type="text"
                          name="patientName"
                          required
                          value={formData.patientName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Contact Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="tel"
                            name="patientPhone"
                            required
                            value={formData.patientPhone}
                            onChange={handleChange}
                            placeholder="10-digit mobile number"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="email"
                            name="patientEmail"
                            required
                            value={formData.patientEmail}
                            onChange={handleChange}
                            placeholder="patient@example.com"
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Gender Identification</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['Male', 'Female', 'Other'].map(g => (
                          <label
                            key={g}
                            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border text-sm font-semibold cursor-pointer transition-all ${
                              formData.gender === g 
                                ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold' 
                                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="gender"
                              value={g}
                              checked={formData.gender === g}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {g}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Select Medical Specialty / Department *</label>
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                      >
                        <option value="">-- Choose Speciality / Service --</option>
                        {services.map(s => (
                          <option key={s.id} value={s.id}>{s.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Select Clinical Doctor / Specialist *</label>
                      <select
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                      >
                        <option value="">-- Choose Specialist --</option>
                        {filteredDoctors.map(d => (
                          <option key={d.id} value={d.id}>{d.name} ({d.specialty})</option>
                        ))}
                      </select>
                      {filteredDoctors.length === 0 && (
                        <p className="text-xs text-amber-600 mt-1">No doctors currently mapped to this service. Displaying entire medical panel.</p>
                      )}
                    </div>

                    {selectedDoctor && (
                      <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex gap-4 mt-2">
                        <img
                          src={selectedDoctor.image}
                          alt={selectedDoctor.name}
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-slate-800 block text-sm font-display">{selectedDoctor.name}</span>
                          <span className="text-sky-600 font-semibold block">{selectedDoctor.specialty}</span>
                          <span className="text-slate-500 block mt-0.5 font-mono">{selectedDoctor.availability}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Preferred Clinic Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="date"
                            name="date"
                            required
                            min={new Date().toISOString().split('T')[0]}
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Consultation Time Slot *</label>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                          >
                            {timeSlots.map(t => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1">Symptoms or Special Requests (Optional)</label>
                      <div className="relative">
                        <FileText className="absolute left-3.5 top-3 w-4.5 h-4.5 text-slate-400" />
                        <textarea
                          name="notes"
                          rows={3}
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="e.g. Chronic knee pain, high fever for 2 days, regular pregnancy checkup..."
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm transition-all"
                        />
                      </div>
                    </div>

                    {/* Quick booking summary box */}
                    {selectedDoctor && selectedService && (
                      <div className="bg-sky-50/60 border border-sky-100 rounded-xl p-4 text-xs space-y-1.5">
                        <h4 className="font-bold text-sky-900 uppercase tracking-wider text-[10px]">Booking Summary Statement</h4>
                        <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-slate-700">
                          <div>Patient: <span className="font-semibold text-slate-900">{formData.patientName}</span></div>
                          <div>Service: <span className="font-semibold text-slate-900">{selectedService.name}</span></div>
                          <div>Specialist: <span className="font-semibold text-slate-900">{selectedDoctor.name}</span></div>
                          <div>Date & Time: <span className="font-semibold text-slate-900">{formData.date} at {formData.time}</span></div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {step === 4 && bookedReference && (
                  <div className="text-center py-6 space-y-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border-2 border-emerald-500 animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold font-display text-slate-950">Appointment Registered!</h3>
                      <p className="text-xs text-slate-500 font-medium">Your request is logged directly in the hospital clinic system.</p>
                    </div>

                    <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 max-w-md mx-auto text-sm space-y-3.5">
                      <div className="flex justify-between items-center border-b border-emerald-100/50 pb-2">
                        <span className="text-slate-500 font-medium text-xs uppercase tracking-wider">Appointment ID</span>
                        <span className="font-bold text-slate-900 font-mono text-base">{bookedReference}</span>
                      </div>

                      <div className="space-y-1.5 text-left text-xs text-slate-600">
                        <p><strong>Patient:</strong> {formData.patientName}</p>
                        <p><strong>Department:</strong> {selectedService?.name}</p>
                        <p><strong>Clinical Doctor:</strong> {selectedDoctor?.name} ({selectedDoctor?.specialty})</p>
                        <p><strong>Consultation Slot:</strong> {formData.date} at {formData.time}</p>
                        <p><strong>Status:</strong> <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase text-[9px] tracking-wider">CONFIRMED</span></p>
                      </div>
                      
                      <div className="border-t border-emerald-100/50 pt-2 flex items-center gap-1.5 text-xs text-emerald-800 font-semibold bg-emerald-100/20 p-2 rounded-lg">
                        <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Report to Counter B, 2nd Floor, Date Hospital 15 mins early.</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400">A verification SMS and email confirmation containing directions have been dispatched to your provided contact points.</p>
                  </div>
                )}
              </div>

              {/* Modal Footer Controls */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 shrink-0 flex justify-between items-center">
                {step < 4 ? (
                  <>
                    <button
                      type="button"
                      onClick={step === 1 ? handleResetAndClose : handleBack}
                      className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-semibold rounded-xl text-xs transition-all cursor-pointer"
                    >
                      {step === 1 ? 'Cancel' : 'Go Back'}
                    </button>
                    
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                      >
                        Continue
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-sky-600 hover:from-emerald-700 hover:to-sky-700 text-white font-bold rounded-xl text-xs transition-all cursor-pointer shadow-md"
                      >
                        Confirm Appointment
                      </button>
                    )}
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleResetAndClose}
                    className="w-full px-5 py-3 bg-sky-900 hover:bg-sky-950 text-white font-bold rounded-xl text-sm transition-all cursor-pointer text-center shadow-md"
                  >
                    Finish and Close
                  </button>
                )}
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
