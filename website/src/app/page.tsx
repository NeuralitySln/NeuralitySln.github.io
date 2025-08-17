'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Brain, Zap, Target, Play } from "lucide-react";
import { motion } from "framer-motion";
import TypedText from "@/components/TypedText";
import ImageModal from "@/components/ImageModal";

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
    "Capture Human Intent",
    "Control with Thought", 
    "Move Beyond Buttons",
    "Think. Act. Connect."
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
                width={240}
                height={60}
                className="h-12 w-auto"
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
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/sleeve.png"
            alt="Neural prosthetic technology"
            fill
            className="object-cover object-center opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
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

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  Breakthrough Biosignal Technology
                </motion.div>
                
                <div className="h-[240px] md:h-[280px] lg:h-[320px] flex items-center justify-start">
                  <div className="relative">
                    {/* Invisible placeholder to reserve space for longest text */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary opacity-0 pointer-events-none">
                      Capture Human Intent
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
              </div>
              
              <motion.p 
                className="text-xl md:text-2xl text-secondary leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Transform natural muscle movements into precise digital control. 
                Our advanced EMG technology reads your <span className="text-accent font-medium">intent</span>, 
                not just your actions.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button 
                  className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play size={20} className="group-hover:scale-110 transition-transform" fill="currentColor" />
                  Watch Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  className="inline-flex items-center gap-2 text-primary border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Technology
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="flex items-center gap-8 pt-8 border-t border-gray-200/50"
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
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
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
              </div>
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
              Advanced Biosignal
              <br />
              <span className="text-accent">Technology</span>
            </h2>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Our breakthrough approach combines cutting-edge electromyography with AI-powered signal processing 
              to create the most intuitive human-machine interfaces ever developed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <motion.div 
              className="group relative p-8 rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Brain className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Intuitive Muscle Control
                </h3>
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  Revolutionary EMG sensors capture muscle signals with unprecedented precision, 
                  enabling natural control that feels like an extension of your body.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  "< 5ms real-time processing",
                  "ML-powered gesture recognition",
                  "Seamless wireless integration"
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium text-secondary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-6 right-6 group/image">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => openModal(0)}
                >
                  <Image
                    src="/assets/distributed-recording.jpg"
                    alt="Distributed EMG recording setup showing multiple electrode placement"
                    width={100}
                    height={75}
                    className="rounded-xl opacity-30 group-hover:opacity-70 group-hover/image:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs font-medium text-white bg-primary/80 px-2 py-1 rounded">
                      View Setup
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="group relative p-8 rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: -5 }}
                >
                  <Zap className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Smart Signal Processing
                </h3>
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  AI algorithms decode complex bioelectric patterns to understand intent, 
                  not just movement—delivering control that anticipates your needs.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  "98.7% gesture accuracy",
                  "Adaptive learning algorithms", 
                  "Intent-based control logic"
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium text-secondary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-6 right-6 group/image">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => openModal(1)}
                >
                  <Image
                    src="/assets/signal-processing.jpg"
                    alt="Real-time signal processing algorithms visualizing muscle activity patterns"
                    width={100}
                    height={75}
                    className="rounded-xl opacity-30 group-hover:opacity-70 group-hover/image:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs font-medium text-white bg-accent/80 px-2 py-1 rounded">
                      Live Demo
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="group relative p-8 rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="mb-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <Target className="w-8 h-8 text-secondary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  Geodesic Sensor Network
                </h3>
                <p className="text-lg text-secondary leading-relaxed mb-6">
                  Proprietary electrode architecture provides comprehensive muscle coverage 
                  with unmatched signal fidelity and comfort during extended use.
                </p>
              </div>
              
              <div className="space-y-3">
                {[
                  "High-density sensor arrays",
                  "Optimized electrode placement",
                  "Superior signal-to-noise ratio"
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center gap-3 text-sm font-medium text-secondary"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                    {feature}
                  </motion.div>
                ))}
              </div>

              <div className="absolute top-6 right-6 group/image">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => openModal(2)}
                >
                  <Image
                    src="/assets/Fig1-high-meso-geo.png"
                    alt="Geodesic electrode array showing high-density and meso-density sensor placement patterns"
                    width={100}
                    height={75}
                    className="rounded-xl opacity-30 group-hover:opacity-70 group-hover/image:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-xs font-medium text-white bg-secondary/80 px-2 py-1 rounded">
                      Patent Tech
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technology Demo Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="group inline-flex items-center gap-4 bg-gradient-to-r from-primary to-accent text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={24} fill="currentColor" className="group-hover:scale-110 transition-transform" />
              Experience the Technology
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
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
              Ready to Transform
              <br />
              <span className="text-accent">Human-Computer Interaction?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the revolution in intuitive technology interfaces. Let's explore how our breakthrough 
              biosignal solutions can transform your vision into reality.
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