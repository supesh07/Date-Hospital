import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  Baby, 
  Heart, 
  FlaskConical, 
  Pill, 
  ShieldAlert, 
  Scissors,
  HelpCircle
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export default function ServiceIcon({ name, className = "w-6 h-6 text-sky-650" }: ServiceIconProps) {
  switch (name) {
    case 'Stethoscope':
      return <Stethoscope className={className} />;
    case 'Activity':
      return <Activity className={className} />;
    case 'Baby':
      return <Baby className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'FlaskConical':
      return <FlaskConical className={className} />;
    case 'Pills':
      return <Pill className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Scissors':
      return <Scissors className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}
