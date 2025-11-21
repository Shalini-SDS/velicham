import type { IconType } from 'react-icons';
import {
  FiHeart,
  FiBook,
  FiSun,
  FiShield,
  FiUsers,
  FiFeather,
  FiSmile,
  FiStar
} from 'react-icons/fi';

export const logoUrl =
  'https://i.imgur.com/0nMF0E1.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];

export const marqueeTopics = [
  'Indoor Play',
  'Creative Learning',
  'Happy Kids',
  'Safe Environment',
  'Expert Teachers',
  'Fun Activities',
  'Music & Dance'
];

export const heroStats = [
  { value: '250+', label: 'Happy Families' },
  { value: '25+', label: 'Caring Educators' },
  { value: '10+', label: 'Years of Trust' }
];

type ProgramCard = {
  title: string;
  ageRange: string;
  description: string;
  icon: IconType;
  accent: 'aqua' | 'gold' | 'blush';
  image: string;
};

export const programs: ProgramCard[] = [
  {
    title: 'Daycare',
    ageRange: 'Ages 1.5 - 6.5 years',
        description: 'Full-day care with nurturing routines, healthy snacks, and joyful discovery.',
    icon: FiHeart,
    accent: 'gold',
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Evening Tuition',
    ageRange: 'Ages 3 - 12 years',
    description:
      'Homework guidance and focused support to keep curiosity bright after school.',
    icon: FiBook,
    accent: 'blush',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Sunday Activity Club',
    ageRange: 'Ages 3 - 13 years',
    description:
      'Weekend bursts of art, music, dance, and creative workshops for sparkling talents.',
    icon: FiStar,
    accent: 'gold',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80'
  }
];

type FacilityCard = {
  title: string;
  description: string;
  icon: IconType;
};

export const facilities: FacilityCard[] = [
  {
    title: 'Safe Classrooms',
    description: 'Child-proofed spaces with 24/7 security and CCTV monitoring.',
    icon: FiShield
  },
  {
    title: 'Creative Learning Zones',
    description: 'Theme corners for arts, reading, music, and imaginative play.',
    icon: FiFeather
  },
  {
    title: 'Personalised Attention',
    description: 'Little hearts receive focused care from compassionate mentors.',
    icon: FiHeart
  },
  {
    title: 'Play Area & AC Comfort',
    description: 'Indoor play with climate control and curated playsets.',
    icon: FiSun
  },
  {
    title: 'Experienced Team',
    description: 'Qualified educators passionate about early childhood development.',
    icon: FiUsers
  },
  {
    title: 'Regular Updates',
    description: 'Daily WhatsApp updates, weekly reviews, and open parent connect.',
    icon: FiBook
  },
  {
    title: 'Extracurricular Activities',
    description: 'Sunday Activity Club and Evening Tuition for holistic development.',
    icon: FiStar
  },
  {
    title: 'Balanced Learning and Play',
    description: 'Perfect blend of structured learning and free play for well-rounded growth.',
    icon: FiSmile
  }
];

type Highlight = {
  title: string;
  description: string;
  icon: IconType;
};

export const aboutHighlights: Highlight[] = [
  {
    title: 'Love & Care',
    description: 'Every child receives individual attention in a loving atmosphere.',
    icon: FiHeart
  },
  {
    title: 'Quality Education',
    description: 'Structured curriculum promoting cognitive, social, and emotional skills.',
    icon: FiBook
  },
  {
    title: 'Expert Team',
    description: 'Highly qualified educators passionate about early childhood journeys.',
    icon: FiUsers
  },
  {
    title: 'Safe Environment',
    description: 'Child-proofed facilities with vigilant monitoring for peace of mind.',
    icon: FiShield
  }
];

export const dailySchedule = [
  { time: '8:00 AM', title: 'Welcome & Free Play', emoji: '👋', color: 'pastelYellow' },
  { time: '9:00 AM', title: 'Snack Time', emoji: '🍎', color: 'pastelPink' },
  { time: '9:30 AM', title: 'Learning Activities', emoji: '📚', color: 'pastelBlue' },
  { time: '11:00 AM', title: 'Indoor Play', emoji: '🌞', color: 'pastelYellow' },
  { time: '12:00 PM', title: 'Lunch Time', emoji: '🍽️', color: 'pastelPink' },
  { time: '1:00 PM', title: 'Rest & Story Time', emoji: '😴', color: 'pastelBlue' }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1604881988758-f76ad8556b36?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1611659934315-6ddc0d3c92b0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1485322551133-3a4c27a9d925?auto=format&fit=crop&w=900&q=80'
];

type Testimonial = {
  quote: string;
  name: string;
  relation: string;
  rating: number;
  image: string;
};

export const testimonials: Testimonial[] = [
  
  {
    quote:
      'From wholesome games to loving teachers, their attention to detail sets them apart. My son never wants to leave! Highly recommended.',
    name: 'Prabhakaran ',
    relation: 'Father of Mukilamuthan ',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    quote:
      'The Sunday Activity Club is the highlight of our week! Hasvitha has discovered talents we never knew he had. Every class is filled with joy and learning.',
    name: 'Priyanka Saravanan',
    relation: 'Mother of Hasvitha',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    quote:
      'My daughter comes home excited every single day. She talks about the teachers, the activities, and her friends. That says everything about Velicham!',
    name: 'Meera ',
    relation: 'Mother of Varshitha',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80'
  }
];

export const contactDetails = {
  phones: ['+91 9952833078', '+91 9344862277'],
  email: 'vdps2k25@gmail.com',
  address: 'Haridaspuram Main Road, Hastinapuram, Chitlapakkam - 600064'
};

export const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'YouTube', href: 'https://youtube.com' },
  { name: 'Twitter/X', href: 'https://twitter.com' }
];

export const callToAction = {
  title: 'Join Our Happy Family!',
  subtitle:
    'Give your child the best start in life with our nurturing environment and expert care.',
  button: 'Schedule a Visit Today'
};
