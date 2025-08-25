'use client';

import { motion } from "framer-motion";
import { ArrowRight, Brain, Zap, Target, Activity, Cpu, Wifi } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent border border-accent/20 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Zap size={16} className="text-accent" />
              Revolutionary EMG Technology
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
              Advanced EMG
              <br />
              <span className="text-accent">Technology Stack</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              Our breakthrough electromyography technology captures and interprets muscle signals 
              with unprecedented precision, enabling natural control interfaces for digital devices.
            </p>
          </motion.div>

          {/* Core Technology Stats */}
          <motion.div 
            className="grid md:grid-cols-4 gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-gray-200/50">
              <div className="text-3xl font-bold text-accent mb-2">&lt; 5ms</div>
              <div className="text-sm text-secondary">Signal Latency</div>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-gray-200/50">
              <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-sm text-secondary">Accuracy Rate</div>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-gray-200/50">
              <div className="text-3xl font-bold text-accent mb-2">16ch</div>
              <div className="text-sm text-secondary">Sensor Array</div>
            </div>
            <div className="text-center p-6 bg-white/50 rounded-2xl border border-gray-200/50">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-secondary">Operation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* EMG Signal Acquisition */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-3xl border border-gray-100 h-full">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <Activity size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Signal Acquisition
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  High-density electrode arrays capture muscle electrical activity with precision, 
                  using our patented geodesic sensor placement for optimal signal quality.
                </p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    16-channel simultaneous recording
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    1kHz sampling rate per channel
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Adaptive noise filtering
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Real-time Processing */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-3xl border border-gray-100 h-full">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Cpu size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Real-time Processing
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Advanced signal processing algorithms extract meaningful patterns from raw EMG data, 
                  translating muscle intentions into digital commands in real-time.
                </p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Motor unit decomposition
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Adaptive referencing system
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Intent classification ML
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Wireless Integration */}
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-3xl border border-gray-100 h-full">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <Wifi size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Wireless Integration
                </h3>
                <p className="text-secondary mb-6 leading-relaxed">
                  Seamless wireless connectivity enables natural interaction with digital devices, 
                  from computers and smartphones to IoT systems and assistive technologies.
                </p>
                <ul className="space-y-3 text-sm text-secondary">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Low-latency Bluetooth 5.0
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Universal device compatibility
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Secure encrypted transmission
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How It Works
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              A comprehensive look at our revolutionary EMG signal processing pipeline
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Technical Diagram */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
                <Image
                  src="/assets/Fig1-high-meso-geo.png"
                  alt="EMG sensor array technical diagram"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Technical Explanation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    1. Muscle Signal Detection
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Our high-density electrode arrays capture electrical signals from individual 
                    motor units, providing granular insight into muscle activation patterns.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    2. Intelligent Signal Processing
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Advanced algorithms perform real-time filtering, feature extraction, and 
                    pattern recognition to interpret user intent from complex muscle signals.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    3. Natural Control Interface
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    Machine learning models translate muscle intentions into precise digital 
                    commands, enabling natural and intuitive device control.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Breakthrough Innovations
            </h2>
            <p className="text-xl text-secondary leading-relaxed">
              Patent-protected technologies that set new standards in EMG signal processing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-3xl border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Adaptive Referencing System
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Our proprietary adaptive referencing technology dynamically adjusts to changing 
                signal conditions, maintaining optimal performance across different usage scenarios.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-accent">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Patent Pending
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-3xl border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                Motor Unit Decomposition
              </h3>
              <p className="text-secondary mb-6 leading-relaxed">
                Advanced signal processing algorithms separate individual motor unit activities 
                from complex EMG signals, enabling precise gesture recognition and control.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Research Validated
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Experience the Technology
            </h2>
            <p className="text-xl text-secondary mb-8 leading-relaxed">
              Ready to see our breakthrough EMG technology in action?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/25"
                >
                  Request Demo
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/science"
                  className="inline-flex items-center gap-2 text-primary border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-accent/30 transition-all duration-300"
                >
                  View Research
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}