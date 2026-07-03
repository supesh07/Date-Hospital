import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Clock, Calendar, ChevronRight } from 'lucide-react';
import { Doctor } from '../types';

interface DoctorsProps {
  doctors: Doctor[];
  onOpenAppointmentModal: (doctorId?: string) => void;
}

export default function Doctors({ doctors, onOpenAppointmentModal }: DoctorsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  // List of specialties for filters
  const specialties = useMemo(() => {
    const list = new Set(doctors.map(d => {
      if (d.specialty.includes('Cardiologist')) return 'Cardiology';
      if (d.specialty.includes('Orthopedic')) return 'Orthopedics';
      if (d.specialty.includes('Pediatrician')) return 'Pediatrics';
      if (d.specialty.includes('Gynecologist') || d.specialty.includes('Obstetrician')) return 'Gynecology';
      if (d.specialty.includes('Critical Care') || d.specialty.includes('General Medicine')) return 'General Medicine';
      return 'Diagnostics';
    }));
    return ['all', ...Array.from(list)];
  }, [doctors]);

  // Filter & Search doctors
  const filteredDoctors = useMemo(() => {
    return doctors.filter(doc => {
      // Specialty Filter
      if (selectedSpecialty !== 'all') {
        const specLower = doc.specialty.toLowerCase();
        if (selectedSpecialty === 'Cardiology' && !specLower.includes('cardio')) return false;
        if (selectedSpecialty === 'Orthopedics' && !specLower.includes('ortho')) return false;
        if (selectedSpecialty === 'Pediatrics' && !specLower.includes('pediat')) return false;
        if (selectedSpecialty === 'Gynecology' && !specLower.includes('gyn') && !specLower.includes('obstet')) return false;
        if (selectedSpecialty === 'General Medicine' && !specLower.includes('medicine') && !specLower.includes('critical')) return false;
        if (selectedSpecialty === 'Diagnostics' && !specLower.includes('patho') && !specLower.includes('radio')) return false;
      }

      // Search Query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = doc.name.toLowerCase().includes(query);
        const matchesSpecialty = doc.specialty.toLowerCase().includes(query);
        const matchesBio = doc.bio.toLowerCase().includes(query);
        return matchesName || matchesSpecialty || matchesBio;
      }

      return true;
    });
  }, [doctors, selectedSpecialty, searchQuery]);

  return (
    <div className="space-y-12 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Clinical Excellence Panel</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">Our Senior Medical Board</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Consult with highly experienced medical practitioners, board-certified surgeons, and attentive diagnosticians committed to custom treatment workflows.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-150 p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by doctor name, clinical keyword, bio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-250 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
            />
          </div>

          {/* Specialty Filters */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start md:justify-end">
            {specialties.map(spec => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  selectedSpecialty === spec
                    ? 'bg-sky-600 border-sky-600 text-white shadow-sm shadow-sky-100'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {spec === 'all' ? 'All Specialties' : spec}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredDoctors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doc) => (
              <div 
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-150 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                {/* Photo and general */}
                <div className="p-6 space-y-5">
                  <div className="flex gap-4 items-start">
                    <img 
                      src={doc.image} 
                      alt={doc.name}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-2xl object-cover shrink-0 border border-slate-200 shadow-sm"
                    />
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{doc.rating}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-950 leading-tight">{doc.name}</h3>
                      <span className="block text-xs font-bold text-sky-600 uppercase tracking-wide leading-none">{doc.specialty}</span>
                      <span className="block text-[11px] text-slate-400 font-medium leading-normal">{doc.qualification}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-4 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {doc.bio}
                  </p>
                </div>

                {/* Footer timings and CTAs */}
                <div className="px-6 py-4 bg-slate-50/60 border-t border-slate-100 rounded-b-2xl space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="font-medium font-mono">{doc.availability}</span>
                  </div>

                  <button
                    onClick={() => onOpenAppointmentModal(doc.id)}
                    className="w-full py-2.5 bg-sky-900 hover:bg-sky-950 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-150 space-y-4">
            <p className="text-slate-500 font-medium text-sm">No clinical specialist matches your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecialty('all');
              }}
              className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs hover:bg-slate-200 transition-colors uppercase tracking-wider"
            >
              Clear Search filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
