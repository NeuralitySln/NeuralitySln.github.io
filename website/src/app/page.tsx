'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Brain, Zap, Target, Play } from "lucide-react";
import { motion } from "framer-motion";
import TypedText from "@/components/TypedText";
import ImageModal from "@/components/ImageModal";
import Link from "next/link";

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  }>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    title: '',
    description: ''
  });

  const typedTexts = [
    "Restore Natural Control",
    "Unlock Human Potential", 
    "Move Beyond Limitations",
    "Think. Intent. Action."
  ];

  const techCards = [
    {
      imageSrc: "/assets/distributed-recording.jpg",
      imageAlt: "Distributed EMG recording setup showing multiple electrode placement",
      title: "Intuitive Muscle Control",
      description: "Our distributed EMG recording system features strategically placed electrodes that capture muscle signals across the entire limb surface. This setup allows for comprehensive monitoring of muscle activation patterns, enabling precise gesture recognition and natural control interfaces. The image shows our proprietary electrode array configuration optimized for maximum signal quality and user comfort."
    },
    {
      imageSrc: "/assets/signal-processing.jpg", 
      imageAlt: "Real-time signal processing algorithms visualizing muscle activity patterns",
      title: "Smart Signal Processing",
      description: "This visualization demonstrates our advanced signal processing pipeline in action. Real-time EMG data streams are processed through our proprietary algorithms that filter noise, extract meaningful features, and translate muscle intentions into digital commands. The colorized patterns represent different muscle activation states and the AI's interpretation of user intent."
    },
    {
      imageSrc: "/assets/Fig1-high-meso-geo.png",
      imageAlt: "Geodesic electrode array showing high-density and meso-density sensor placement patterns", 
      title: "Geodesic Sensor Network",
      description: "Our patented geodesic sensor network design optimizes electrode placement for maximum coverage and signal fidelity. The diagram illustrates both high-density configurations for precise control and meso-density arrays for broader muscle group monitoring. This innovative architecture ensures superior signal-to-noise ratios while maintaining comfort during extended use."
    }
  ];

  const openModal = (cardIndex: number) => {
    const card = techCards[cardIndex];
    setModalState({
      isOpen: true,
      imageSrc: card.imageSrc,
      imageAlt: card.imageAlt,
      title: card.title,
      description: card.description
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-200/20 backdrop-blur-xl sticky top-0 z-50 bg-background/95">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
        <Image
                src="/assets/logo/neurality-logo.png"
                alt="Neurality Solutions"
                width={320}
                height={80}
                className="h-20 w-auto"
          priority
        />
            </motion.div>
            <motion.nav 
              className="hidden md:flex items-center space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#technology" className="text-sm font-medium text-secondary hover:text-accent transition-all duration-200 hover:scale-105">
                Technology
              </a>
              <a href="#research" className="text-sm font-medium text-secondary hover:text-accent transition-all duration-200 hover:scale-105">
                Research
              </a>
              <a href="#about" className="text-sm font-medium text-secondary hover:text-accent transition-all duration-200 hover:scale-105">
                About
              </a>
              <motion.button 
                className="bg-accent text-primary px-6 py-2 rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.nav>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-background via-gray-50/30 to-background">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          {/* TODO: Replace with LSL signal monitor video when available */}
          {/* For now, using static image with subtle animation */}
          <Image
            src="/assets/sleeve.png"
            alt="Neural prosthetic technology"
            fill
            className="object-cover object-center opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
          
          {/* Optional: Video overlay structure for future implementation */}
          {/* 
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/assets/lsl-signal-monitor.mp4" type="video/mp4" />
            <source src="/assets/lsl-signal-monitor.webm" type="video/webm" />
          </video>
          */}
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-5">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute top-1/2 right-1/4 w-80 h-80 bg-primary/6 rounded-full blur-3xl"
            animate={{ 
              x: [0, -25, 0],
              y: [0, 15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          ></motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 flex flex-col justify-start" style={{ minHeight: '80vh', justifyContent: 'flex-start' }}>
          <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ alignItems: 'flex-start' }}>
            {/* Left Column - Headline and paragraph */}
            <motion.div
              className="flex flex-col justify-start"
              style={{ marginTop: 'calc(-10vh)' }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-[180px] md:h-[220px] lg:h-[260px] flex items-end">
                <div className="relative w-full">
                  {/* Invisible placeholder to reserve space for longest text */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary opacity-0 pointer-events-none">
                    Restore Natural Control
                  </h1>
                  {/* Actual typing text positioned absolutely */}
                  <h1 className="absolute top-0 left-0 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
                    <TypedText 
                      texts={typedTexts}
                      speed={100}
                      deleteSpeed={50}
                      pauseTime={3000}
                      className="text-primary"
                    />
                  </h1>
                </div>
              </div>
              <motion.p
                className="text-xl md:text-2xl text-secondary leading-relaxed max-w-lg mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Breakthrough EMG technology that restores natural movement control for those who need it most. 
                We read your <span className="text-accent font-medium">intent</span>, 
                enabling seamless interaction with the digital world.
              </motion.p>
            </motion.div>
            {/* Right Column - Hand image only */}
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <Image
                src="/assets/sleeve.png"
                alt="Neural prosthetic interface"
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
          {/* Buttons and stats below */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/watch-demo"
                className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 cursor-pointer"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" fill="currentColor" />
                Watch Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/explore-technology"
                className="inline-flex items-center gap-2 text-primary border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-accent/30 transition-all duration-300 cursor-pointer"
              >
                Explore Technology
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center gap-8 pt-6 border-t border-gray-200/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">&lt; 5ms</div>
              <div className="text-sm text-secondary">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98.7%</div>
              <div className="text-sm text-secondary">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-secondary">Monitoring</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scientific Validation Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50/50 to-background border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-secondary mb-2">
              Validated by Science
            </h3>
            <p className="text-sm text-secondary max-w-2xl mx-auto">
              Research-backed technology with proven performance metrics and patent protection
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">US Patent</div>
              <div className="text-sm text-secondary">Filed & Protected</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">&lt;5ms</div>
              <div className="text-sm text-secondary">Real-time Latency</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-sm text-secondary">Signal Accuracy</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Research</div>
              <div className="text-sm text-secondary">Validated</div>
            </motion.div>
          </div>
        </div>
      </section>

            {/* Technology Preview */}
      <section id="technology" className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap size={16} className="text-primary" />
              Revolutionary Technology Stack
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Empowering Human
              <br />
              <span className="text-accent">Connection</span>
            </h2>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              We're bridging the gap between human intent and digital interaction through revolutionary EMG technology 
              that understands what you want to do, not just what you can do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {techCards.map((card, idx) => (
              <motion.div
                key={card.title}
                className="group relative rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col min-h-[480px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Large, blended image */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 flex-shrink-0">
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover object-center w-full h-full scale-110 group-hover:scale-125 transition-transform duration-500"
                    style={{ zIndex: 1 }}
                    onClick={() => openModal(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View more about ${card.title}`}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && openModal(idx)}
                  />
                  {/* Soft gradient overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent pointer-events-none" style={{ zIndex: 2 }} />
                </div>

                {/* Card content overlays image on desktop, stacks below on mobile */}
                <div className="relative z-10 flex-1 flex flex-col justify-between p-8 pt-6 md:-mt-12">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-lg text-secondary leading-relaxed mb-6">
                      {card.description.split('. ')[0]}.
                    </p>
                    <div className="space-y-3 mb-6">
                      {idx === 0 && [
                        "< 5ms real-time processing",
                        "ML-powered gesture recognition",
                        "Seamless wireless integration"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-secondary">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {idx === 1 && [
                        "98.7% gesture accuracy",
                        "Adaptive learning algorithms",
                        "Intent-based control logic"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-secondary">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {idx === 2 && [
                        "High-density sensor arrays",
                        "Optimized electrode placement",
                        "Superior signal-to-noise ratio"
                      ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-medium text-secondary">
                          <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    className="mt-4 bg-accent text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-accent/90 transition-colors text-base focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    onClick={() => openModal(idx)}
                    aria-label={`Learn more about ${card.title}`}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Signal Demonstration */}
          <motion.div 
            className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Live Signal Processing
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                See Our Technology in Action
              </h3>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Watch real-time EMG signal processing through our Lab Streaming Layer (LSL) monitor, 
                showcasing the precision and responsiveness of our breakthrough technology.
              </p>
            </div>
            
            {/* Video Container - Ready for LSL signal monitor video */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto mb-8">
              {/* Placeholder for video content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 opacity-60" />
                  <p className="text-lg font-medium">LSL Signal Monitor Demo</p>
                  <p className="text-sm opacity-75 mt-2">Video content ready for integration</p>
                </div>
              </div>
              
              {/* TODO: Add actual video when ready */}
              {/* 
              <video 
                controls
                className="w-full h-full object-cover"
                poster="/assets/video-poster.jpg"
              >
                <source src="/assets/lsl-signal-monitor-demo.mp4" type="video/mp4" />
                <source src="/assets/lsl-signal-monitor-demo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              */}
            </div>

            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/experience-technology"
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-primary to-accent text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
                >
                  <Play size={24} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  Experience the Technology
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
              Ready to Unlock
              <br />
              <span className="text-accent">Human Potential?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Whether you're a researcher, clinician, or someone who could benefit from natural movement restoration, 
              let's explore how our breakthrough technology can make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                className="group inline-flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/25"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.div 
                className="flex items-center gap-6 text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">Patent</div>
                  <div className="text-sm">Protected</div>
                </div>
                <div className="w-1 h-8 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">Research</div>
                  <div className="text-sm">Backed</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200/50 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
          <Image
                src="/assets/logo/neurality-logo.png"
                alt="Neurality Solutions"
                width={160}
                height={40}
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-secondary max-w-md">
                Pioneering the future of human-computer interaction through advanced biosignal technology 
                and intelligent muscle control interfaces.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors">EMG Sensors</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Signal Processing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Machine Learning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-secondary">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200/50 mt-12 pt-8">
            <p className="text-sm text-secondary text-center">
              © 2024 Neurality Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
        title={modalState.title}
        description={modalState.description}
      />
    </div>
  );
}