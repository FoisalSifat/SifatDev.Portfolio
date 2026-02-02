
import React from 'react';
import { 
  Code, 
  Layout, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  FileCode, 
  Zap,
  Smartphone,
  Layers
} from 'lucide-react';
import { Project, Skill } from './types';

export const PERSONAL_DETAILS = {
  name: "Foisal Hasan Sifat",
  role: "MERN Stack Architect", // Default role
  brand: "SifatDev.",
  email: "foisalhasansifat22@gmail.com",
  phone: "01835099504",
  resumeLink: "#", 
  github: "https://github.com/FoisalSifat",
  facebook: "https://www.facebook.com/Sifat1dhaka/", 
  instagram: "https://www.instagram.com/_.sifat/", 
  linkedin: "https://linkedin.com/in/foisalsifat", 
};

export const ALTERNATE_TITLES = [
  "MERN Stack Architect",
  "Tech-Driven Problem Solver",
  "Next-Gen Web Developer",
  "Modern Web Craftsman",
  "Interactive Web Architect"
];

export const SKILLS: Skill[] = [
  { name: "React", icon: Layout, category: 'frontend', size: 'large' },
  { name: "Node.js", icon: Server, category: 'backend', size: 'medium' },
  { name: "MongoDB", icon: Database, category: 'database', size: 'medium' },
  { name: "JavaScript", icon: Code, category: 'frontend', size: 'large' },
  { name: "Express", icon: Cpu, category: 'backend', size: 'small' },
  { name: "Tailwind", icon: Zap, category: 'frontend', size: 'small' },
  { name: "HTML/CSS", icon: FileCode, category: 'frontend', size: 'medium' },
  { name: "Bootstrap", icon: Layers, category: 'frontend', size: 'small' },
  { name: "Git", icon: Globe, category: 'tools', size: 'small' },
  { name: "Responsive", icon: Smartphone, category: 'tools', size: 'medium' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "SkyCast Weather",
    description: "A sleek, real-time weather forecasting application providing high-accuracy data with dynamic atmosphere-based UI changes.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=800&auto=format&fit=crop",
    tags: ["#React", "#OpenWeatherAPI", "#Tailwind"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 2,
    title: "FoodGot",
    description: "A premium restaurant platform featuring a high-end menu explorer, real-time reservation system, and seamless food ordering experience.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
    tags: ["#MERN", "#Redux", "#Stripe"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: 3,
    title: "Wanderlust Explorers",
    description: "Comprehensive travel companion website for discovering exotic destinations, booking unique stays, and planning custom itineraries.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
    tags: ["#NextJS", "#MongoDB", "#FramerMotion"],
    liveLink: "#",
    sourceLink: "#",
  },
];
