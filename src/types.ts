export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  image: string;
  availability: string;
  bio: string;
  rating: number;
}

export interface MedicalService {
  id: string;
  name: string;
  description: string;
  details: string[];
  icon: string; // Lucide icon name
  image: string;
}

export interface CheckupPackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  inclusions: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  category: 'facilities' | 'doctors' | 'equipment' | 'events';
}

export enum AppointmentStatus {
  PENDING = 'Pending Approval',
  CONFIRMED = 'Confirmed',
  CANCELLED = 'Cancelled',
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  doctorId: string;
  serviceId: string;
  date: string;
  time: string;
  gender: string;
  notes?: string;
  status: AppointmentStatus;
  createdAt: string;
}
