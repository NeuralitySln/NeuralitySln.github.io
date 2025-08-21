'use client';

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          organization: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-b from-primary to-primary/90 text-white px-4 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Let&apos;s discuss how our technology can support your needs
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to answer questions about our technology, research 
                  collaborations, or partnership opportunities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Email</div>
                      <div className="text-gray-600">contact@neurality.solutions</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Location</div>
                      <div className="text-gray-600">Laguna Beach, Southern California</div>
                      <div className="text-sm text-gray-500 mt-1">Where innovation meets the Pacific 🌊</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Response Time</div>
                      <div className="text-gray-600">Within 24-48 hours</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-semibold text-primary mb-3">For Researchers</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Interested in collaboration or accessing our research data? 
                    We welcome academic partnerships.
                  </p>
                  <Link 
                    href="/science" 
                    className="text-accent hover:text-accent/90 font-medium text-sm"
                  >
                    Learn about our research →
                  </Link>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl border border-gray-200 p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    Send us a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-primary mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        We&apos;ll get back to you within 24-48 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                          placeholder="University, Hospital, Company, etc."
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        >
                          <option value="">Select a topic</option>
                          <option value="research">Research Collaboration</option>
                          <option value="clinical">Clinical Applications</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="technology">Technology Inquiry</option>
                          <option value="general">General Question</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                          placeholder="Tell us about your interest in our technology..."
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">
                          * Required fields
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all ${
                            isSubmitting 
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                              : 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg'
                          }`}
                        >
                          {isSubmitting ? (
                            <>Sending...</>
                          ) : (
                            <>
                              Send Message <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Explore More
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/science" className="group">
                <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    Research & Development
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn about our scientific approach and breakthrough technology
                  </p>
                </div>
              </Link>

              <Link href="/about" className="group">
                <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    About Our Team
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Meet the experts behind the innovation
                  </p>
                </div>
              </Link>

              <Link href="/#technology" className="group">
                <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    Technology Overview
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover how our EMG technology works
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}