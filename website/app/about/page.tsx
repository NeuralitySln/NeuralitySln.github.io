import Link from "next/link";
import { ArrowRight, Users, Target, Heart, Lightbulb, Shield, Award } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary to-primary/90 text-white px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              About Neurality
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of human-computer interaction through breakthrough EMG technology
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  We&apos;re dedicated to restoring natural movement and control for individuals 
                  who need it most, bridging the gap between human intent and digital action.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Through innovative EMG technology and intelligent signal processing, we&apos;re 
                  creating a world where physical limitations don&apos;t define digital capabilities.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Human-Centered Design</div>
                    <div className="text-sm text-gray-600">Every innovation starts with human needs</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent mb-2">&lt;5ms</div>
                  <div className="text-sm font-medium text-gray-600">Response Time</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent mb-2">98.7%</div>
                  <div className="text-sm font-medium text-gray-600">Accuracy Rate</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm font-medium text-gray-600">Continuous Use</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-accent mb-2">16ch</div>
                  <div className="text-sm font-medium text-gray-600">High-Density</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Guided by principles that put people first and science at the forefront
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Innovation with Purpose
                </h3>
                <p className="text-gray-600">
                  Every breakthrough we achieve is measured by its ability to improve 
                  real human lives, not just technical metrics.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Scientific Rigor
                </h3>
                <p className="text-gray-600">
                  Our technology is built on peer-reviewed research, validated testing, 
                  and transparent methodologies.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  Accessibility First
                </h3>
                <p className="text-gray-600">
                  We believe advanced technology should be available to everyone who 
                  needs it, regardless of their circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Interdisciplinary experts united by a shared vision of accessible technology
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl">🏄‍♂️</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Research Lead</h3>
                <p className="text-gray-600 text-sm mb-3">Biomedical Engineering</p>
                <p className="text-gray-500 text-sm">
                  Leading breakthrough research in EMG signal processing between surf sessions
                </p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl">☕</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Engineering Lead</h3>
                <p className="text-gray-600 text-sm mb-3">Hardware & Software Systems</p>
                <p className="text-gray-500 text-sm">
                  Fueled by Pacific Coast coffee, building the future of human-computer interaction
                </p>
              </div>

              <div className="text-center group">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-4xl">🌴</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Clinical Advisor</h3>
                <p className="text-gray-600 text-sm mb-3">Rehabilitation Medicine</p>
                <p className="text-gray-500 text-sm">
                  Bringing SoCal wellness vibes to medical technology innovation
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Join Our Mission
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;re always looking for passionate individuals who want to make a 
                real difference in people&apos;s lives through technology.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Recognition & Support
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Patent Protected</h3>
                <p className="text-gray-600 text-sm">
                  US Patent filed for dual-layer noise cancellation technology
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Research Validated</h3>
                <p className="text-gray-600 text-sm">
                  Rigorous testing and validation through academic partnerships
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Community Driven</h3>
                <p className="text-gray-600 text-sm">
                  Developed with continuous feedback from users and clinicians
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our technology can make a difference in your research, 
              clinical practice, or personal journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/science"
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center gap-2"
              >
                Explore the Science
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-flex items-center justify-center gap-2"
              >
                Contact Our Team <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}