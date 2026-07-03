import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Eye, Layers } from 'lucide-react';
import { GalleryImage } from '../types';

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'facilities', label: 'Clinics & Wards' },
    { id: 'equipment', label: 'Diagnostics Machinery' },
    { id: 'doctors', label: 'Consultants & Staff' },
    { id: 'events', label: 'Community Events' }
  ];

  // Filter images
  const filteredImages = images.filter(img => 
    activeTab === 'all' ? true : img.category === activeTab
  );

  return (
    <div className="space-y-12 pb-20">
      
      {/* Page Header */}
      <section className="relative bg-slate-950 py-16 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-sky-400">Date Hospital Visual Tour</span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white">Hospital Facility Gallery</h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Browse through real photographs of our diagnostic lobbies, modular surgical suites, ICU monitors, pathological labs, and outreach medical programs.
          </p>
        </div>
      </section>

      {/* Tabs Selector Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-sky-600 border-sky-600 text-white shadow-sm shadow-sky-100'
                  : 'bg-white border-slate-250 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-150 shadow-sm cursor-pointer aspect-4/3"
                onClick={() => setLightboxImage(img)}
              >
                <img 
                  src={img.url} 
                  alt={img.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Backdrop overlay on hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-white/20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-5 h-5 text-sky-600" />
                  </div>
                </div>

                {/* Bottom title display */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent text-white text-[11px] font-semibold">
                  <span className="line-clamp-1">{img.caption}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox pop-up Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-white rounded-2xl w-full max-w-2xl border border-slate-100 shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 p-1.5 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-950 text-white rounded-lg transition-colors border border-white/10 z-10"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative aspect-video w-full">
                  <img 
                    src={lightboxImage.url} 
                    alt={lightboxImage.caption}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 bg-white space-y-2">
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md inline-block">
                    {lightboxImage.category === 'facilities' && 'Facility & Ward View'}
                    {lightboxImage.category === 'equipment' && 'Medical Technology'}
                    {lightboxImage.category === 'doctors' && 'Consultant Profile'}
                    {lightboxImage.category === 'events' && 'Community Outreach Camp'}
                  </span>
                  <p className="text-slate-800 text-xs font-semibold leading-relaxed">
                    {lightboxImage.caption}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
