"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Apex Codalytics - <span className="text-primary">Software Development Company</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next software development project? Contact our expert team in Karachi, Pakistan. We'd
            love to hear from you and provide a free consultation for your digital transformation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 text-lg">
            <Link
              href="tel:+923112348744"
              className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              <Phone className="h-5 w-5" />
              +92 311 234 8744
            </Link>
            <Link
              href="mailto:apexcodalytics@gmail.com"
              className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              <Mail className="h-5 w-5" />
              apexcodalytics@gmail.com
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch with Our Software Development Team
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone & WhatsApp</h3>
                    <Link
                      href="tel:+923112348744"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      +92 311 234 8744
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-500">Available Mon-Sat 9am-8pm PKT</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Address</h3>
                    <Link
                      href="mailto:apexcodalytics@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      apexcodalytics@gmail.com
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-500">We'll respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Office Locations</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-400">
                        <strong>Main Office:</strong>
                        <br />
                        Shahrah-e-Faisal, Ayesha Bawany 75350
                        <br />
                        Karachi, Pakistan
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        <strong>Branch Office:</strong>
                        <br />
                        Landhi Town, 75120
                        <br />
                        Karachi, Pakistan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-400">Sunday: 10:00 AM - 6:00 PM</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Pakistan Standard Time (PKT)</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us on Social Media</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com/apexcodalytics"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Follow Apex Codalytics on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://instagram.com/apexcodalytics"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Follow Apex Codalytics on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://twitter.com/apexcodalytics"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Follow Apex Codalytics on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/company/apexcodalytics"
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    aria-label="Follow Apex Codalytics on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Response Card */}
            <Card
              className="glass-card-light border-2 border-primary/20 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="text-primary">Quick Response Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  We understand that time is valuable for your software development project. That's why we guarantee a
                  response to all inquiries within 2 hours during business hours, and within 24 hours on weekends.
                </p>
                <div className="mt-4 space-y-2">
                  <Link
                    href="tel:+923112348744"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    Call for immediate response: +92 311 234 8744
                  </Link>
                  <Link
                    href="mailto:apexcodalytics@gmail.com"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4" />
                    Email: apexcodalytics@gmail.com
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card
              className="glass-card-light border-2 border-gray-200/50 hover:border-primary/30 transition-colors animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Get Free Software Development Consultation
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and our expert team will contact you within 2 hours to discuss your project
                  requirements.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">
                        Company/Organization Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project" className="text-gray-700 dark:text-gray-300">
                        Project Type *
                      </Label>
                      <select
                        id="project"
                        name="project"
                        required
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      >
                        <option value="">Select your project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="e-commerce">E-commerce Platform</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="consulting">IT Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300">
                      Project Budget (PKR)
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select your budget range</option>
                      <option value="under-100k">Under PKR 100,000</option>
                      <option value="100k-300k">PKR 100,000 - 300,000</option>
                      <option value="300k-500k">PKR 300,000 - 500,000</option>
                      <option value="500k-1m">PKR 500,000 - 1,000,000</option>
                      <option value="over-1m">Over PKR 1,000,000</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      Project Details & Requirements *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Please describe your project requirements, goals, timeline, and any specific features you need. The more details you provide, the better we can assist you with your software development needs."
                    />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <strong>Prefer to talk directly?</strong> Contact us immediately:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="tel:+923112348744"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <Phone className="h-4 w-4" />
                        Call: +92 311 234 8744
                      </Link>
                      <Link
                        href="mailto:apexcodalytics@gmail.com"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        <Mail className="h-4 w-4" />
                        Email: apexcodalytics@gmail.com
                      </Link>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions - Software Development Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Quick answers to common questions about our software development services in Pakistan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical software development project take?",
                answer:
                  "Project timelines vary based on complexity and requirements. Simple websites take 2-4 weeks, while complex web applications and mobile apps typically require 8-16 weeks. We provide detailed timelines during our free consultation.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer:
                  "Yes, we offer comprehensive maintenance and support packages to keep your software running smoothly. This includes bug fixes, security updates, performance optimization, and feature enhancements.",
              },
              {
                question: "What's your software development process?",
                answer:
                  "We follow an agile development methodology with regular check-ins, ensuring transparency and flexibility throughout the project. Our process includes discovery, design, development, testing, deployment, and ongoing support.",
              },
              {
                question: "Can you work with our existing development team?",
                answer:
                  "We're experienced in collaborating with in-house teams and can adapt to your existing workflow, tools, and processes. We can provide additional expertise or take full project ownership as needed.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web technologies including React, Node.js, Python, PHP, mobile app development (React Native, Flutter), cloud services (AWS, Google Cloud), and database management (MySQL, MongoDB, PostgreSQL).",
              },
              {
                question: "Do you serve clients outside Pakistan?",
                answer:
                  "Yes, while we're based in Karachi, Pakistan, we serve clients globally. We have experience working with international clients and can accommodate different time zones and communication preferences.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="glass-card-light border-2 border-gray-200/50 hover:border-primary/30 transition-colors"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+923112348744"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                <Phone className="h-5 w-5" />
                Call: +92 311 234 8744
              </Link>
              <Link
                href="mailto:apexcodalytics@gmail.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                <Mail className="h-5 w-5" />
                Email: apexcodalytics@gmail.com
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
