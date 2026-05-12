import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiHome,
  FiMessageCircle,
  FiMoon,
  FiMusic,
  FiPlay,
  FiShield,
  FiSmile,
  FiStar,
  FiSun,
  FiUsers,
  FiX
} from 'react-icons/fi';
import { programs, preschoolPrograms } from '../data/content';
import Divider from './Divider';

type ProgramAccent = 'aqua' | 'gold' | 'blush' | 'sunset' | 'orchid' | 'sky' | 'forest';

type ProgramDetail = {
  title: string;
  ageRange: string;
  tagline: string;
  description: string;
  activities: { label: string; icon: IconType }[];
  skills: string[];
  learningApproach: string;
  benefits: string[];
  parentFeatures: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  accent: ProgramAccent;
  icon: IconType;
};

const accentStyles: Record<ProgramAccent, { badge: string; glow: string; gradient: string; soft: string }> = {
  aqua: {
    badge: 'bg-cyan-400 text-white',
    glow: 'from-cyan-300/80 via-sky-200/70 to-white/40',
    gradient: 'from-cyan-100 via-sky-50 to-white',
    soft: 'bg-cyan-100 text-cyan-800'
  },
  gold: {
    badge: 'bg-orange-400 text-white',
    glow: 'from-orange-300/80 via-amber-200/70 to-white/40',
    gradient: 'from-orange-100 via-amber-50 to-white',
    soft: 'bg-orange-100 text-orange-800'
  },
  blush: {
    badge: 'bg-rose-400 text-white',
    glow: 'from-rose-300/80 via-pink-200/70 to-white/40',
    gradient: 'from-rose-100 via-pink-50 to-white',
    soft: 'bg-rose-100 text-rose-800'
  },
  sunset: {
    badge: 'bg-yellow-400 text-orange-900',
    glow: 'from-yellow-300/80 via-orange-200/70 to-white/40',
    gradient: 'from-yellow-100 via-orange-50 to-white',
    soft: 'bg-yellow-100 text-orange-900'
  },
  orchid: {
    badge: 'bg-fuchsia-400 text-white',
    glow: 'from-fuchsia-300/80 via-pink-200/70 to-white/40',
    gradient: 'from-fuchsia-100 via-pink-50 to-white',
    soft: 'bg-fuchsia-100 text-fuchsia-800'
  },
  sky: {
    badge: 'bg-sky-400 text-white',
    glow: 'from-sky-300/80 via-blue-200/70 to-white/40',
    gradient: 'from-sky-100 via-blue-50 to-white',
    soft: 'bg-sky-100 text-sky-800'
  },
  forest: {
    badge: 'bg-teal-500 text-white',
    glow: 'from-teal-300/80 via-emerald-200/70 to-white/40',
    gradient: 'from-teal-100 via-emerald-50 to-white',
    soft: 'bg-teal-100 text-teal-800'
  }
};

const programDetails: ProgramDetail[] = [
  {
    ...programs[0],
    tagline: 'A safe and joyful space for your little one.',
    description:
      'Our daycare program provides a nurturing and secure environment where children feel loved, comfortable, and engaged throughout the day. With caring staff, playful learning activities, healthy routines, and supervised care, children enjoy a balanced experience of learning and fun.',
    activities: [
      { label: 'Playtime activities', icon: FiPlay },
      { label: 'Storytelling sessions', icon: FiBookOpen },
      { label: 'Nap time routines', icon: FiMoon },
      { label: 'Music & dance', icon: FiMusic },
      { label: 'Indoor games', icon: FiStar },
      { label: 'Social interaction activities', icon: FiUsers }
    ],
    skills: ['Emotional confidence', 'Social bonding', 'Communication skills', 'Basic independence'],
    learningApproach: 'Focus on comfort, safety, care, and playful engagement.',
    benefits: [
      'Creates a calm rhythm between play, rest, and guided activities.',
      'Helps children build trust, routine awareness, and cheerful confidence.',
      'Encourages happy exploration in a supervised environment.'
    ],
    parentFeatures: ['Safe supervised environment', 'Caring staff support', 'Regular activity updates'],
    ctaLabel: 'Visit Our Centre',
    ctaHref: '#contact'
  },
  {
    ...programs[1],
    tagline: 'After-school learning made easy and engaging.',
    description:
      'Our Evening Tuition program helps children strengthen academic understanding through guided learning, homework support, reading practice, and concept clarity in a calm and focused environment.',
    activities: [
      { label: 'Homework assistance', icon: FiCheckCircle },
      { label: 'Reading practice', icon: FiBookOpen },
      { label: 'Concept revision', icon: FiClock },
      { label: 'Interactive learning games', icon: FiSmile },
      { label: 'Doubt clarification', icon: FiMessageCircle }
    ],
    skills: ['Academic confidence', 'Concentration', 'Reading ability', 'Problem-solving'],
    learningApproach: 'Personalized support with patient guidance.',
    benefits: [
      'Makes after-school study time more structured and less stressful.',
      'Improves clarity in subjects with one-to-one style guidance.',
      'Builds confidence for homework, reading, and class participation.'
    ],
    parentFeatures: ['Homework completion support', 'Academic progress guidance'],
    ctaLabel: 'Enroll Now',
    ctaHref: '#contact'
  },
  {
    ...programs[2],
    tagline: 'Fun-filled weekends full of creativity and exploration.',
    description:
      'Our Weekend Activity Club encourages children to explore creativity, imagination, teamwork, and fun through exciting hands-on activities and engaging workshops.',
    activities: [
      { label: 'Art & craft', icon: FiHeart },
      { label: 'Dance sessions', icon: FiMusic },
      { label: 'Music activities', icon: FiSun },
      { label: 'Brain games', icon: FiStar },
      { label: 'Drawing & coloring', icon: FiSmile },
      { label: 'Storytelling workshops', icon: FiBookOpen }
    ],
    skills: ['Creativity', 'Teamwork', 'Confidence', 'Communication'],
    learningApproach: 'Activity-based joyful learning.',
    benefits: [
      'Turns weekends into meaningful, happy discovery time.',
      'Encourages self-expression through movement, color, and imagination.',
      'Helps children connect, collaborate, and shine in groups.'
    ],
    parentFeatures: ['Interactive weekend engagement', 'Creative skill development'],
    ctaLabel: 'Enroll Now',
    ctaHref: '#contact'
  },
  {
    title: 'Little Rays – Playgroup',
    ageRange: '1.5 – 3 Years',
    tagline: 'First steps into joyful learning.',
    description:
      'Little Rays Playgroup introduces toddlers to a warm, playful, and caring learning environment where they begin exploring communication, movement, music, and social interaction through fun activities.',
    activities: [
      { label: 'Toy play', icon: FiHeart },
      { label: 'Rhymes & music', icon: FiMusic },
      { label: 'Sensory games', icon: FiStar },
      { label: 'Storytelling', icon: FiBookOpen },
      { label: 'Circle time', icon: FiUsers },
      { label: 'Motor skill activities', icon: FiSun }
    ],
    skills: ['Social interaction', 'Listening skills', 'Motor coordination', 'Emotional comfort'],
    learningApproach: 'Play-based early childhood learning.',
    benefits: [
      'Supports a gentle, happy first separation from home.',
      'Encourages toddlers to speak, move, and interact naturally.',
      'Builds familiarity with routines in a caring environment.'
    ],
    parentFeatures: ['Gentle transition into school environment', 'Safe nurturing care'],
    ctaLabel: 'Visit Our Centre',
    ctaHref: '#contact',
    image: '/little-rays-playgroup.jpeg',
    accent: 'sunset',
    icon: preschoolPrograms[0].icon
  },
  {
    title: 'Sparkle Stars – Pre-K.G',
    ageRange: '3 – 4 Years',
    tagline: 'Learning through creativity and curiosity.',
    description:
      'Sparkle Stars Pre-K.G focuses on early learning foundations through phonics, rhymes, creativity, language activities, and interactive classroom experiences that make learning enjoyable.',
    activities: [
      { label: 'Alphabet learning', icon: FiBookOpen },
      { label: 'Coloring activities', icon: FiHeart },
      { label: 'Rhymes & phonics', icon: FiMusic },
      { label: 'Creative play', icon: FiSmile },
      { label: 'Early writing practice', icon: FiStar }
    ],
    skills: ['Language development', 'Creativity', 'Cognitive skills', 'Classroom confidence'],
    learningApproach: 'Interactive and activity-based learning.',
    benefits: [
      'Introduces structured learning in a bright and welcoming way.',
      'Strengthens curiosity through stories, sounds, and creative tasks.',
      'Prepares children for the next stage with joyful confidence.'
    ],
    parentFeatures: ['Early academic readiness', 'Personalized attention'],
    ctaLabel: 'Enroll Now',
    ctaHref: '#contact',
    image: preschoolPrograms[1].image,
    accent: 'orchid',
    icon: preschoolPrograms[1].icon
  },
  {
    title: 'Rising Lights – L.K.G',
    ageRange: '4 – 5 Years',
    tagline: 'Building strong foundations for growing minds.',
    description:
      'Rising Lights L.K.G helps children strengthen communication, writing, reading, and numerical understanding while encouraging confidence, teamwork, and active participation.',
    activities: [
      { label: 'Handwriting practice', icon: FiBookOpen },
      { label: 'Number activities', icon: FiStar },
      { label: 'Reading sessions', icon: FiClock },
      { label: 'Classroom games', icon: FiSmile },
      { label: 'Communication activities', icon: FiUsers }
    ],
    skills: ['Reading & writing', 'Numeracy skills', 'Confidence', 'Team participation'],
    learningApproach: 'Structured learning with fun engagement.',
    benefits: [
      'Balances classroom readiness with enjoyable learning moments.',
      'Improves focus, expression, and number confidence every day.',
      'Supports children as active and happy learners.'
    ],
    parentFeatures: ['Academic skill development', 'Progress-oriented learning'],
    ctaLabel: 'Enroll Now',
    ctaHref: '#contact',
    image: preschoolPrograms[2].image,
    accent: 'sky',
    icon: preschoolPrograms[2].icon
  },
  {
    title: 'Bright Minds – U.K.G',
    ageRange: '5 – 6 Years',
    tagline: 'Preparing confident learners for primary school.',
    description:
      'Bright Minds U.K.G prepares children for primary education through advanced kindergarten learning, communication building, teamwork, problem-solving activities, and interactive academic development.',
    activities: [
      { label: 'Reading & comprehension', icon: FiBookOpen },
      { label: 'Problem-solving games', icon: FiStar },
      { label: 'Creative learning', icon: FiHeart },
      { label: 'Group activities', icon: FiUsers },
      { label: 'School readiness exercises', icon: FiCheckCircle }
    ],
    skills: ['Logical thinking', 'Communication', 'Leadership qualities', 'School readiness'],
    learningApproach: 'Confidence-building academic preparation.',
    benefits: [
      'Helps children step into primary school with readiness and joy.',
      'Sharpens thinking, communication, and collaborative learning habits.',
      'Builds confidence for classroom participation and leadership.'
    ],
    parentFeatures: ['Smooth transition to primary school', 'Holistic child development'],
    ctaLabel: 'Visit Our Centre',
    ctaHref: '#contact',
    image: preschoolPrograms[3].image,
    accent: 'forest',
    icon: preschoolPrograms[3].icon
  }
];

const decorativeShapes = [
  'left-6 top-10 h-16 w-16 bg-pink-200/40',
  'right-10 top-20 h-12 w-12 bg-yellow-200/50',
  'bottom-16 left-10 h-14 w-14 bg-sky-200/40',
  'bottom-10 right-12 h-20 w-20 bg-orange-200/30'
];

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState<ProgramDetail | null>(null);

  useEffect(() => {
    if (!activeProgram) {
      document.body.style.overflow = '';
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProgram(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [activeProgram]);

  const featuredPrograms = useMemo(() => programDetails.slice(0, 3), []);
  const featuredPreschoolPrograms = useMemo(() => programDetails.slice(3), []);

  const getProgramId = (title: string) =>
    title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/–|—|:/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');

  const getProgramLabel = (title: string) => {
    const parts = title.split('–');
    return parts[1]?.trim() || title;
  };

  const scrollToProgram = (anchor: string) => {
    const target = document.getElementById(anchor);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderCard = (program: ProgramDetail, index: number) => {
    const accent = accentStyles[program.accent];

    return (
      <motion.article
        id={getProgramId(program.title)}
        key={program.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 * index }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="group flex h-full min-h-[390px] flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:shadow-2xl"
      >
        <div className="relative h-44 overflow-hidden sm:h-48">
          <motion.div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <motion.img
            src={program.image}
            alt={program.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          <motion.div
            className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white p-2.5 shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <program.icon className="h-5 w-5 text-orange-500" />
          </motion.div>
        </div>
        <motion.div className="flex flex-1 flex-col space-y-3 px-5 pb-6 pt-5">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.1 }}
            className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold sm:text-sm ${accent.badge}`}
          >
            {program.ageRange}
          </motion.div>
          <motion.h3
            className="font-display text-2xl font-bold text-orange-600 transition-colors group-hover:text-orange-700 sm:text-[1.7rem]"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.15 }}
          >
            {program.title}
          </motion.h3>
          <motion.p
            className="text-sm leading-relaxed text-gray-700 sm:text-base"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.2 }}
          >
            {program.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.25 }}
            className="mt-auto pt-3"
          >
            <button
              type="button"
              onClick={() => setActiveProgram(program)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Learn More
              <FiArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </motion.article>
    );
  };

  return (
    <>
      <section id="programs" className="relative overflow-hidden bg-gradient-to-b from-orange-400 via-orange-300 to-orange-200 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute right-12 top-32 text-4xl"
            animate={{ y: ['0%', '15%', '0%'], scale: [1, 1.15, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'⭐'}
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-1/4 text-5xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
          >
            {'❤️'}
          </motion.div>
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tag-pill mx-auto"
            >
              Our Programs
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 font-display text-4xl font-black leading-tight text-brand-600 sm:text-5xl"
            >
              Programs Designed for <span className="text-brand-500">Every Child</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-base text-orange-900/70 sm:text-lg"
            >
              We offer a variety of programs tailored to meet the unique needs and interests of children at
              different ages.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
            {featuredPrograms.map((program, index) => renderCard(program, index))}
          </div>

          <div className="mt-14 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-display font-black text-brand-600"
            >
              Preschool Programs
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mt-4 max-w-2xl text-base text-orange-900/80 sm:text-lg"
            >
              Designed for early learners, these preschool programs offer playful, nurturing, and confidence-building experiences.
            </motion.p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {featuredPreschoolPrograms.map((program) => (
              <button
                key={program.title}
                type="button"
                onClick={() => scrollToProgram(getProgramId(program.title))}
                className="rounded-full border border-orange-300 bg-white px-4 py-2 text-sm font-semibold text-orange-600 transition hover:border-orange-400 hover:bg-orange-50"
              >
                {getProgramLabel(program.title)}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
            {featuredPreschoolPrograms.map((program, index) => renderCard(program, index))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {activeProgram ? (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-md sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 18 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-[0_35px_120px_rgba(15,23,42,0.28)]"
              role="dialog"
              aria-modal="true"
              aria-labelledby="program-modal-title"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${accentStyles[activeProgram.accent].gradient}`} />
              {decorativeShapes.map((shapeClass, index) => (
                <motion.span
                  key={shapeClass}
                  className={`pointer-events-none absolute rounded-full blur-[2px] ${shapeClass}`}
                  animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0], rotate: [0, 8, 0] }}
                  transition={{ duration: 6 + index, repeat: Infinity, ease: 'easeInOut' }}
                />
              ))}
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg transition hover:scale-105 hover:bg-white"
                aria-label="Close program details"
              >
                <FiX className="h-5 w-5" />
              </button>

              <div className="relative grid max-h-[90vh] grid-cols-1 overflow-y-auto lg:grid-cols-[1.02fr_1fr]">
                <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
                  <motion.img
                    src={activeProgram.image}
                    alt={activeProgram.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur-sm">
                    <activeProgram.icon className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-semibold text-slate-700">Programs Designed With Love & Care</span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/20 p-4 text-white backdrop-blur-md">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/85">Warm • Safe • Inspiring</p>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/90">{activeProgram.tagline}</p>
                  </div>
                </div>

                <div className="relative overflow-y-auto px-5 pb-6 pt-16 sm:px-8 sm:pb-8 lg:max-h-[90vh] lg:px-10">
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 }}
                  >
                    <div className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${accentStyles[activeProgram.accent].badge}`}>
                      {activeProgram.ageRange}
                    </div>
                    <h3 id="program-modal-title" className="mt-4 font-display text-3xl font-black text-slate-800 sm:text-4xl">
                      {activeProgram.title}
                    </h3>
                    <p className="mt-3 text-lg font-medium text-orange-600">{activeProgram.tagline}</p>
                    <p className="mt-5 text-base leading-7 text-slate-600">{activeProgram.description}</p>
                  </motion.div>

                  <div className="mt-8 space-y-6">
                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                    >
                      <div className="flex items-center gap-2">
                        <FiStar className="h-5 w-5 text-orange-500" />
                        <h4 className="text-lg font-bold text-slate-800">Activities Included</h4>
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {activeProgram.activities.map((activity) => (
                          <motion.div
                            key={activity.label}
                            whileHover={{ y: -3 }}
                            className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-orange-100 backdrop-blur-sm"
                          >
                            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${accentStyles[activeProgram.accent].soft}`}>
                              <activity.icon className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-medium text-slate-700">{activity.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.section>

                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.16 }}
                      className="grid gap-4 lg:grid-cols-2"
                    >
                      <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-orange-100">
                        <div className="flex items-center gap-2">
                          <FiSun className="h-5 w-5 text-orange-500" />
                          <h4 className="text-lg font-bold text-slate-800">Skills Developed</h4>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {activeProgram.skills.map((skill) => (
                            <li key={skill} className="flex items-start gap-3 text-sm text-slate-700">
                              <FiCheckCircle className="mt-0.5 h-4 w-4 flex-none text-orange-500" />
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-orange-100">
                        <div className="flex items-center gap-2">
                          <FiClock className="h-5 w-5 text-orange-500" />
                          <h4 className="text-lg font-bold text-slate-800">Daily Routine / Learning Approach</h4>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-700">{activeProgram.learningApproach}</p>
                      </div>
                    </motion.section>

                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.22 }}
                      className="grid gap-4 lg:grid-cols-2"
                    >
                      <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-orange-100">
                        <div className="flex items-center gap-2">
                          <FiHeart className="h-5 w-5 text-orange-500" />
                          <h4 className="text-lg font-bold text-slate-800">Benefits for Children</h4>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {activeProgram.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                              <FiCheckCircle className="mt-0.5 h-4 w-4 flex-none text-orange-500" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-3xl bg-white/80 p-5 shadow-sm ring-1 ring-orange-100">
                        <div className="flex items-center gap-2">
                          <FiShield className="h-5 w-5 text-orange-500" />
                          <h4 className="text-lg font-bold text-slate-800">Parent-Friendly Features</h4>
                        </div>
                        <ul className="mt-4 space-y-3">
                          {activeProgram.parentFeatures.map((feature) => (
                            <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
                              <FiCheckCircle className="mt-0.5 h-4 w-4 flex-none text-orange-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.section>

                    <motion.section
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.28 }}
                      className="rounded-[1.75rem] bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-300 p-[1px] shadow-lg"
                    >
                      <div className="rounded-[1.65rem] bg-white/95 px-5 py-5 sm:px-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <FiHome className="h-5 w-5 text-orange-500" />
                              <h4 className="text-lg font-bold text-slate-800">Inquiry & Enrollment</h4>
                            </div>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              Speak with our caring team to discover the perfect fit for your child and schedule your visit.
                            </p>
                          </div>
                          <a
                            href={activeProgram.ctaHref}
                            onClick={() => setActiveProgram(null)}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
                          >
                            {activeProgram.ctaLabel}
                            <FiArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </motion.section>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Divider fromColor="#FFA500" toColor="#FFB366" />
    </>
  );
};

export default Programs;


