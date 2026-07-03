import { Doctor, MedicalService, CheckupPackage, Testimonial, GalleryImage } from './types';

export const doctorsData: Doctor[] = [
  {
    id: 'dr-rohan-date',
    name: 'Dr. Rohan Date',
    specialty: 'Chief Medical Officer & Orthopedic Surgeon',
    qualification: 'MD, MS (Orthopedics), MCh (Joint Replacement)',
    experience: '18+ Years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop',
    availability: 'Mon - Fri (10:00 AM - 04:00 PM)',
    bio: 'Dr. Rohan Date is the founder and visionary behind Date Hospital. Specializing in minimally invasive arthroplasty, joint replacements, and sports injuries, he has successfully completed over 5,000 surgeries.',
    rating: 5,
  },
  {
    id: 'dr-ananya-sharma',
    name: 'Dr. Ananya Sharma',
    specialty: 'Interventional Cardiologist',
    qualification: 'MD (Medicine), DM (Cardiology), FACC',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=600&auto=format&fit=crop',
    availability: 'Mon - Sat (09:00 AM - 01:00 PM)',
    bio: 'Dr. Ananya Sharma specializes in preventative cardiology, coronary angioplasty, and complex cardiac procedures. She is dedicated to promoting heart-healthy lifestyles and early detection of cardiovascular diseases.',
    rating: 4.9,
  },
  {
    id: 'dr-sarah-jenkins',
    name: 'Dr. Sarah Jenkins',
    specialty: 'Senior Pediatrician',
    qualification: 'MD (Pediatrics), DCH, Fellowship in Neonatology',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    availability: 'Tue, Thu, Sat (11:00 AM - 05:00 PM)',
    bio: 'Dr. Sarah Jenkins offers compassionate, family-centered care for children from infancy through adolescence. She is a pioneer in developmental pediatrics and neonatal intensive care workflows.',
    rating: 4.8,
  },
  {
    id: 'dr-meera-patel',
    name: 'Dr. Meera Patel',
    specialty: 'Obstetrician & Gynecologist',
    qualification: 'MS (OBG), DNB, Fellowship in Laparoscopic Gynecology',
    experience: '14+ Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    availability: 'Mon - Fri (02:00 PM - 07:00 PM)',
    bio: 'Dr. Meera Patel specializes in high-risk pregnancy management, laparoscopic gynecological surgeries, and comprehensive women\'s wellness programs. She believes in empowering patients through education and empathetic guidance.',
    rating: 4.9,
  },
  {
    id: 'dr-david-vance',
    name: 'Dr. David Vance',
    specialty: 'General Medicine & Critical Care Specialist',
    qualification: 'MD (Internal Medicine), IDCCM',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop',
    availability: 'Mon - Sat (08:00 AM - 12:00 PM / 05:00 PM - 08:00 PM)',
    bio: 'Dr. David Vance supervises the Emergency Department and Intensive Care Unit at Date Hospital. He has profound expertise in infectious diseases, metabolic management, and trauma care coordination.',
    rating: 4.7,
  },
  {
    id: 'dr-kenji-tanaka',
    name: 'Dr. Kenji Tanaka',
    specialty: 'Lead Pathologist & Radiologist',
    qualification: 'MD (Radio-diagnosis & Pathology)',
    experience: '11+ Years',
    image: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=600&auto=format&fit=crop',
    availability: 'Mon - Sat (09:00 AM - 06:00 PM)',
    bio: 'Dr. Kenji Tanaka is an expert in diagnostic imaging, MRI/CT reporting, and advanced laboratory investigations. He ensures absolute accuracy and timely delivery of clinical testing results.',
    rating: 4.8,
  }
];

export const servicesData: MedicalService[] = [
  {
    id: 'gen-medicine',
    name: 'General Medicine',
    description: 'Comprehensive adult medical services covering primary care, chronic condition management, and diagnosis of complex systems.',
    icon: 'Stethoscope',
    details: [
      'Comprehensive annual physical examinations and screening',
      'Management of chronic ailments like Diabetes, Hypertension, and Asthma',
      'Diagnosis and medical management of multi-system illnesses',
      'Geriatric wellness and lifestyle counseling services',
      'Infectious disease screening, vaccination, and treatment plans'
    ],
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'emergency-care',
    name: 'Emergency Care (24×7)',
    description: 'Round-the-clock rapid response trauma care, state-of-the-art ambulance dispatch, and acute life-saving interventions.',
    icon: 'Activity',
    details: [
      '24/7 fully equipped Level-1 Trauma Emergency Care Unit',
      'Cardiac emergency triage and rapid-access catheterization lab support',
      'On-site state-of-the-art ambulance with advanced life support (ALS)',
      'Critical stroke management and neuro-rehabilitation pathway',
      'Dedicated toxicological, respiratory, and burns stabilization suites'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'child-care',
    name: 'Child Care (Pediatrics)',
    description: 'Expert pediatric services ensuring the physical, mental, and developmental health of babies, infants, children, and teenagers.',
    icon: 'Baby',
    details: [
      'Immunization programs and growth monitoring tracking',
      'Newborn and Neonatal Intensive Care Unit (NICU) with 24/7 nursery',
      'Treatment of acute pediatric illnesses (infections, asthma, fevers)',
      'Developmental assessment and behavioral advice',
      'Pediatric nutritional guidance and allergen profiling'
    ],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'womens-health',
    name: 'Women\'s Health (Gynecology)',
    description: 'Compassionate care for women at every stage of life, including maternity, fertility, gynecological surgery, and menopause support.',
    icon: 'Heart',
    details: [
      'Pre-pregnancy counselling, prenatal testing, and childbirth delivery options',
      'High-risk pregnancy clinic with advanced fetal monitoring',
      'Minimally invasive laparoscopic gynecological surgeries',
      'Preventive screenings: Pap smears, Breast exams, Mammograms, and HPV vaccine',
      'Menopause transition counseling and hormonal replacement therapies'
    ],
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'laboratory',
    name: 'Clinical Laboratory Services',
    description: 'Fully automated diagnostics offering precise biochemistry, pathology, immunology, and genomic results quickly.',
    icon: 'FlaskConical',
    details: [
      '24/7 automated biochemistry, hematology, and serology testing',
      'Advanced cancer screening panels and hormone assays',
      'Same-day results for urgent care diagnostics and pre-op profiles',
      'Strict quality controls aligned with CAP and ISO-15189 standards',
      'Digital reports delivered securely via email or online portal'
    ],
    image: 'https://images.unsplash.com/photo-1579154341101-e06924139f13?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'pharmacy',
    name: '24×7 Hospital Pharmacy',
    description: 'Fully stocked, regulated pharmacy with certified pharmacists ensuring medication safety, counseling, and swift dispensing.',
    icon: 'Pills',
    details: [
      'Continuous 24/7 supply of life-saving drugs and general prescriptions',
      'Rigorous storage standards for temperature-sensitive biologics and vaccines',
      'Free inpatient drug delivery and detailed outpatient discharge counseling',
      'Verification of drug-drug interactions with clinical record cross-checks',
      'Generic and branded drug inventories with zero-shortage assurances'
    ],
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'cardiology',
    name: 'Cardiology (Heart Care)',
    description: 'Advanced diagnostic screening, non-invasive imaging, and surgical cardiac interventions for all coronary conditions.',
    icon: 'ShieldAlert',
    details: [
      'Electrocardiography (ECG), Stress Testing (TMT), and Echocardiography',
      '24-Hour ambulatory Holter heart rhythm monitoring',
      'Coronary angiogram, angioplasty, and drug-eluting stent placements',
      'Pacemaker and implantable cardioverter-defibrillator (ICD) implants',
      'Cardiovascular rehabilitation programs and lifestyle therapy'
    ],
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics & Joint Care',
    description: 'Bone, joint, and spine interventions. Expert care in total joint replacements, trauma management, and physiotherapy.',
    icon: 'Scissors',
    details: [
      'Total Knee, Hip, and Shoulder Replacement procedures',
      'Arthroscopic surgeries for ACL tears, meniscal damage, and rotator cuffs',
      'Complex fracture trauma fixation with high-grade lock-plates',
      'Spine treatments for disc herniations and chronic sciatica',
      'Integrated physical rehabilitation and custom orthotic support'
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop'
  }
];

export const checkupPackagesData: CheckupPackage[] = [
  {
    id: 'basic-screening',
    name: 'Basic Health Screening',
    price: 49,
    originalPrice: 99,
    description: 'A fundamental biochemical screening designed for adults to evaluate vital organs and blood parameters.',
    inclusions: [
      'Complete Blood Count (CBC) with ESR',
      'Fasting Blood Sugar (FBS)',
      'Lipid Profile (Total Cholesterol, Triglycerides)',
      'Liver Function Test (SGOT, SGPT)',
      'Kidney Function Test (Serum Creatinine, Urea)',
      'Urine Routine & Microscopic Examination',
      'General Physician Medical Consultation'
    ]
  },
  {
    id: 'womens-wellness',
    name: 'Women\'s Wellness Essential',
    price: 129,
    originalPrice: 249,
    description: 'An expansive checkup custom-tailored for women to identify gynecological issues, thyroid irregularities, and bone health.',
    inclusions: [
      'All Basic Health Screening parameters',
      'Thyroid Profile (T3, T4, TSH)',
      'Vitamin D3 & Calcium Assessment',
      'Pelvis/Abdomen Ultrasound (USG)',
      'Liquid-Based Pap Smear Screen',
      'Digital Mammography (for ages 40+ or referred)',
      'Consultation with Senior Obstetrician & Gynecologist'
    ],
    isPopular: true
  },
  {
    id: 'senior-gold',
    name: 'Senior Citizen Gold Package',
    price: 149,
    originalPrice: 299,
    description: 'Comprehensive screening for elderly individuals to assess metabolic fitness, heart health, joint pain, and tumor screening.',
    inclusions: [
      'All Basic Health Screening parameters',
      'HbA1c (Glycated Hemoglobin) Diabetes Tracker',
      'Uric Acid (Gout & Joint Screen)',
      'Cardiac Evaluation: ECG & Chest X-Ray',
      'Vitamin B12 & D3 levels',
      'Electrolyte Panel (Sodium, Potassium, Chloride)',
      'Comprehensive Head-to-Toe review by Chief Physician'
    ]
  },
  {
    id: 'cardio-guard',
    name: 'Comprehensive Cardio Guard',
    price: 199,
    originalPrice: 399,
    description: 'The ultimate circulatory and cardiovascular profile intended for individuals with stressful lifestyles or cardiac family histories.',
    inclusions: [
      'All Basic Health Screening parameters',
      'High Sensitivity C-Reactive Protein (hs-CRP)',
      'Cardiac Enzymes (TMT - Treadmill Test)',
      '2D Echocardiogram (Echo Doppler)',
      'Comprehensive Lipids (HDL, LDL, VLDL, Ratio)',
      'Pulmonary Function Test (Spirometry)',
      'One-on-One Counseling with Interventional Cardiologist'
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sunil Gadhve',
    role: 'IT Consultant',
    content: 'My father was admitted here for a cardiac emergency. The coordination between the ambulance and the emergency room triage was lightning fast. Dr. Ananya Sharma performed the angioplasty with extreme precision. The care and transparent communication we received at Date Hospital was world-class.',
    rating: 5,
    date: 'June 14, 2026'
  },
  {
    id: 'test-2',
    name: 'Priyanka Patil',
    role: 'School Teacher',
    content: 'I delivered my first baby girl at Date Hospital under Dr. Meera Patel. The maternity suites were incredibly spacious and clean. The nursing staff treated us like family, guiding us patiently through lactation and early care. I highly recommend their Women\'s Health department!',
    rating: 5,
    date: 'May 28, 2026'
  },
  {
    id: 'test-3',
    name: 'Rajesh Shinde',
    role: 'Retired Government Officer',
    content: 'I underwent a total knee replacement surgery done by Dr. Rohan Date. After months of debilitating arthritis, I am now able to walk completely pain-free. The post-operative physical rehabilitation program is incredibly organized and thorough. True experts!',
    rating: 5,
    date: 'April 02, 2026'
  },
  {
    id: 'test-4',
    name: 'Amina Shaikh',
    role: 'Homemaker',
    content: 'I always visit Date Hospital for my child\'s routine vaccinations and checkups. Dr. Sarah Jenkins is incredibly warm and patient with toddlers. She answers every single question we have and explains instructions clearly. The child care wing is very welcoming and kid-friendly.',
    rating: 4.8,
    date: 'June 25, 2026'
  }
];

export const galleryData: GalleryImage[] = [
  {
    id: 'gal-1',
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop',
    caption: 'The main lobby and welcoming help-desk reception at Date Hospital.',
    category: 'facilities'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop',
    caption: 'Our ultra-clean, laminar-flow integrated Operating Theater (OT).',
    category: 'facilities'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    caption: 'Dr. Sarah Jenkins consulting with senior nursing officers.',
    category: 'doctors'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1579154341101-e06924139f13?q=80&w=600&auto=format&fit=crop',
    caption: 'Fully automated biochemistry analyzers in the Pathological Lab.',
    category: 'equipment'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop',
    caption: 'Our clean, ICU ward showing non-invasive ventilators and clinical monitoring units.',
    category: 'equipment'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop',
    caption: 'Maternity wellness checkup and comprehensive fetal ultrasound.',
    category: 'facilities'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=600&auto=format&fit=crop',
    caption: 'Date Hospital Medical Camp and community wellness event.',
    category: 'events'
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    caption: 'Specialized diagnostic imaging suite featuring digital radiography.',
    category: 'equipment'
  }
];
