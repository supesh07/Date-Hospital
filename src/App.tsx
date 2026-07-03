import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Trash2, ShieldCheck, MapPin, X, Info, HelpCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Emergency from './pages/Emergency';
import OpdIpd from './pages/OpdIpd';
import CheckupPackages from './pages/CheckupPackages';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';

// Data & Types
import { Doctor, MedicalService, CheckupPackage, Testimonial, GalleryImage, Appointment, AppointmentStatus } from './types';
import { doctorsData, servicesData, checkupPackagesData, testimonialsData, galleryData } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preSelectedDoctorId, setPreSelectedDoctorId] = useState<string | undefined>(undefined);
  const [bookingsDrawerOpen, setBookingsDrawerOpen] = useState(false);

  // Load appointments from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('date_hospital_appointments');
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (err) {
        console.error('Failed to parse saved clinical appointments', err);
      }
    }
  }, []);

  // Save appointments to localStorage on change
  const handleAddAppointment = (appt: Appointment) => {
    const updated = [...appointments, appt];
    setAppointments(updated);
    localStorage.setItem('date_hospital_appointments', JSON.stringify(updated));
  };

  const handleCancelAppointment = (id: string) => {
    const filtered = appointments.filter(a => a.id !== id);
    setAppointments(filtered);
    localStorage.setItem('date_hospital_appointments', JSON.stringify(filtered));
  };

  const handleOpenAppointmentModal = (doctorId?: string) => {
    setPreSelectedDoctorId(doctorId);
    setAppointmentModalOpen(true);
  };

  // Render the current page component based on the active tab state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onPageChange={setCurrentPage}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
            doctors={doctorsData}
            services={servicesData}
            packages={checkupPackagesData}
            testimonials={testimonialsData}
          />
        );
      case 'about':
        return <AboutUs />;
      case 'doctors':
        return <Doctors doctors={doctorsData} onOpenAppointmentModal={handleOpenAppointmentModal} />;
      case 'services':
        return <Services services={servicesData} onOpenAppointmentModal={handleOpenAppointmentModal} />;
      case 'emergency':
        return <Emergency />;
      case 'opd-ipd':
        return <OpdIpd />;
      case 'packages':
        return <CheckupPackages packages={checkupPackagesData} onOpenAppointmentModal={handleOpenAppointmentModal} />;
      case 'gallery':
        return <Gallery images={galleryData} />;
      case 'contact':
        return <ContactUs />;
      default:
        return (
          <Home 
            onPageChange={setCurrentPage}
            onOpenAppointmentModal={() => handleOpenAppointmentModal()}
            doctors={doctorsData}
            services={servicesData}
            packages={checkupPackagesData}
            testimonials={testimonialsData}
          />
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative selection:bg-sky-100 selection:text-sky-900">
      
      {/* 1. Header Navigation Bar */}
      <Navbar 
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onOpenAppointmentModal={() => handleOpenAppointmentModal()}
      />

      {/* 2. Main Page Viewer with Smooth Slide Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer Map & Map Links */}
      <Footer onPageChange={setCurrentPage} />

      {/* 4. Digital Clinic Scheduling Modal */}
      <AppointmentModal 
        isOpen={appointmentModalOpen}
        onClose={() => {
          setAppointmentModalOpen(false);
          setPreSelectedDoctorId(undefined);
        }}
        doctors={doctorsData}
        services={servicesData}
        onAddAppointment={handleAddAppointment}
      />

      {/* 5. Floating Active Bookings Indicator (Visible if they have booked slots) */}
      {appointments.length > 0 && (
        <div className="fixed bottom-6 right-6 z-40">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBookingsDrawerOpen(true)}
            className="flex items-center gap-2 px-4.5 py-3.5 bg-gradient-to-r from-emerald-600 to-sky-600 text-white font-bold text-xs uppercase tracking-wider rounded-2xl shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all cursor-pointer border border-white/15"
          >
            <Calendar className="w-5 h-5 animate-pulse" />
            <span>My Bookings ({appointments.length})</span>
          </motion.button>
        </div>
      )}

      {/* 6. Right Side Slide-in Active Bookings Drawer */}
      <AnimatePresence>
        {bookingsDrawerOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBookingsDrawerOpen(false)}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs"
            />

            <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 220 }}
                className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
              >
                {/* Header */}
                <div className="px-6 py-5 bg-sky-900 text-white flex justify-between items-center border-b border-sky-950">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    <div>
                      <h3 className="font-display font-bold text-base text-white">Your Hospital Appointments</h3>
                      <p className="text-[10px] text-sky-200">Active records in our diagnostic queue</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setBookingsDrawerOpen(false)}
                    className="p-1 rounded-lg text-sky-200 hover:text-white hover:bg-sky-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="flex-grow p-6 overflow-y-auto space-y-6">
                  {appointments.length > 0 ? (
                    appointments.map((appt) => {
                      const doc = doctorsData.find(d => d.id === appt.doctorId);
                      const svc = servicesData.find(s => s.id === appt.serviceId);
                      return (
                        <div 
                          key={appt.id}
                          className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-4 shadow-inner relative group"
                        >
                          <div className="flex justify-between items-start border-b border-slate-200/60 pb-2">
                            <div>
                              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Appointment reference</span>
                              <h4 className="font-bold text-slate-950 font-mono text-sm">{appt.id}</h4>
                            </div>
                            <button
                              onClick={() => {
                                if (confirm('Are you sure you want to cancel this hospital appointment?')) {
                                  handleCancelAppointment(appt.id);
                                }
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                              title="Cancel slot"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="space-y-1.5 text-xs text-slate-700">
                            <p><strong>Patient:</strong> {appt.patientName} ({appt.gender})</p>
                            <p><strong>Clinical Doctor:</strong> {doc?.name || 'Chief Medical Panel'}</p>
                            <p><strong>Department:</strong> {svc?.name || 'General Clinic'}</p>
                            <p><strong>Scheduled Slot:</strong> {appt.date} at {appt.time}</p>
                            <p className="flex items-center gap-1"><strong>Status:</strong> <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-black uppercase text-[9px] tracking-wide">Confirmed</span></p>
                          </div>

                          <div className="border-t border-slate-200/60 pt-2 flex items-center gap-1.5 text-[10px] text-emerald-800 font-bold bg-emerald-100/20 p-2 rounded-lg">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>Counter B, Floor 2, Main Campus (Report 15 mins early).</span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12 text-slate-400 space-y-2">
                      <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
                      <p className="text-xs">No active appointments found in this session.</p>
                    </div>
                  )}
                </div>

                {/* Footer Drawer Info */}
                <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-3 shrink-0">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-semibold">
                    <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0" />
                    <span>Securely stored locally. Contact helpdesk for further coordination.</span>
                  </div>
                  <button
                    onClick={() => setBookingsDrawerOpen(false)}
                    className="w-full py-3 bg-sky-900 hover:bg-sky-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm text-center"
                  >
                    Close Panel
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
