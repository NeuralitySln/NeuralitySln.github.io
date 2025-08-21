import Link from "next/link";
import { ArrowRight, Award, Shield, TrendingUp, Microscope, Brain, Activity, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function SciencePage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-primary to-primary/90 text-white px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Research & Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Advancing the science of human-computer interaction through rigorous EMG research
          </p>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Research Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining cutting-edge biomedical engineering with innovative signal processing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dual-Layer Technology */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Dual-Layer EMG Arrays
              </h3>
              <p className="text-gray-600 mb-4">
                Patent-pending technology using dual-layer electrode configurations to achieve superior 
                environmental noise cancellation while maintaining signal integrity.
              </p>
              <Link href="#patents" className="text-accent hover:text-accent/90 font-medium flex items-center gap-2">
                View Patents <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Geodesic Arrays */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Geodesic Sensor Arrays
              </h3>
              <p className="text-gray-600 mb-4">
                High-density, anatomically-optimized sensor placement for comprehensive muscle 
                activity mapping and improved spatial resolution.
              </p>
              <Link href="#methodology" className="text-accent hover:text-accent/90 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Real-time Processing */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Real-time Signal Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Ultra-low latency algorithms achieving &lt;5ms processing time for real-world 
                applications requiring instantaneous response.
              </p>
              <Link href="#performance" className="text-accent hover:text-accent/90 font-medium flex items-center gap-2">
                View Metrics <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section id="performance" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            Validated Performance
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">&lt;5ms</div>
              <div className="text-gray-600 font-medium">System Latency</div>
              <div className="text-sm text-gray-500 mt-1">End-to-end processing</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">98.7%</div>
              <div className="text-gray-600 font-medium">Signal Accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Gesture classification</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">40dB</div>
              <div className="text-gray-600 font-medium">Noise Reduction</div>
              <div className="text-sm text-gray-500 mt-1">Environmental rejection</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">16ch</div>
              <div className="text-gray-600 font-medium">Channel Density</div>
              <div className="text-sm text-gray-500 mt-1">High-resolution capture</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Testing Methodology
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Our performance metrics are validated through rigorous testing protocols following 
                established biomedical engineering standards. All measurements are conducted in 
                controlled laboratory environments with standardized testing procedures.
              </p>
              <p>
                Signal accuracy is evaluated using a comprehensive gesture classification task set 
                with cross-validation across multiple subjects. Latency measurements include complete 
                signal chain from electrode acquisition through final output.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patent Portfolio */}
      <section id="patents" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            Intellectual Property
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  Filed
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                Dual-Layer EEG Noise Cancellation System
              </h3>
              <p className="text-gray-600 mb-4">
                Revolutionary approach to environmental noise rejection in bioelectric signal 
                recording using spatially-separated electrode layers for active cancellation.
              </p>
              <div className="text-sm text-gray-500">
                US Patent Application • Priority Date: 2024
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  In Development
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                Geodesic EMG Array with Dual-Layer Configuration
              </h3>
              <p className="text-gray-600 mb-4">
                High-density surface EMG recording system with anatomically-optimized electrode 
                placement and integrated noise cancellation capabilities.
              </p>
              <div className="text-sm text-gray-500">
                Patent Application in Preparation • Target: Q1 2025
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section id="methodology" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16 text-center">
            Research Methodology
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-semibold text-primary mb-6">
                Signal Acquisition & Processing
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our research leverages state-of-the-art biosignal amplifiers including the 
                  ADS1299 family for high-resolution data acquisition at sampling rates up to 
                  16kHz with 24-bit resolution.
                </p>
                <p>
                  Advanced digital signal processing techniques including adaptive filtering, 
                  independent component analysis (ICA), and machine learning algorithms enable 
                  real-time signal decomposition and feature extraction.
                </p>
                <p>
                  Cross-talk cancellation (XTC) algorithms minimize interference between 
                  adjacent muscle groups, improving signal specificity and enabling precise 
                  control applications.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-primary mb-6">
                Key Research Areas
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Microscope className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Motor Unit Decomposition</div>
                    <div className="text-sm text-gray-600">
                      Advanced algorithms for identifying individual motor unit action potentials
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Adaptive Referencing</div>
                    <div className="text-sm text-gray-600">
                      Dynamic reference electrode selection for optimal signal quality
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Brain className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-primary">Neural Decoding</div>
                    <div className="text-sm text-gray-600">
                      Machine learning approaches for intent recognition and control
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Collaborate With Us
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re actively seeking research partnerships with academic institutions, 
            medical centers, and technology companies to advance the field of human-computer interaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-flex items-center justify-center gap-2"
            >
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold inline-flex items-center justify-center"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}