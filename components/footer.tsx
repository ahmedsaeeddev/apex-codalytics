import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-card-light border-t border-gray-200/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Apex Codalytics</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Leading software development company delivering exceptional digital solutions with precision, reliability,
              and unwavering dedication to your business success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/apexcodalytics"
                className="text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow Apex Codalytics on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/apexcodalytics"
                className="text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow Apex Codalytics on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/apexcodalytics"
                className="text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow Apex Codalytics on Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/apexcodalytics"
                className="text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md p-1"
                aria-label="Follow Apex Codalytics on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2" role="navigation" aria-label="Footer navigation">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Services</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/services#web-development"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="/services#mobile-apps"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Mobile Apps
              </Link>
              <Link
                href="/services#ui-ux-design"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                UI/UX Design
              </Link>
              <Link
                href="/services#consulting"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                Consulting
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <Link
                  href="tel:+923112348744"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  +92 311 234 8744
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <Link
                  href="mailto:apexcodalytics@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  apexcodalytics@gmail.com
                </Link>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div className="text-gray-600 dark:text-gray-400">
                  <p className="mb-1">Shahrah-e-Faisal, Ayesha Bawany 75350</p>
                  <p>Landhi Town, 75120</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Apex Codalytics. All rights reserved. | Professional Software Development Services
          </p>
        </div>
      </div>
    </footer>
  )
}
