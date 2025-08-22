import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Palette,
  Monitor,
  FileText,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  Star,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Software Development | Apex Codalytics - Karachi, Pakistan",
  description:
    "Apex Codalytics is a Karachi-based software firm specializing in custom software development, web applications, and mobile app solutions for startups and enterprises in Pakistan and globally.",
  keywords:
    "custom software development Pakistan, web application Karachi, mobile app developers, software agency Karachi, enterprise app solutions, React and Node.js experts Pakistan",
  openGraph: {
    title: "Custom Software Development | Apex Codalytics",
    description:
      "Apex Codalytics delivers tailored web and mobile software solutions for clients in Pakistan and beyond. Explore our 15+ project success stories.",
    url: "https://apex-codalytics.vercel.app",
  },
  alternates: {
    canonical: "https://apex-codalytics.vercel.app",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Enhanced with Animations */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent animate-float"></div>
        <div className="container mx-auto px-6 text-center relative">
          <div className="animate-fade-in">
            {/* Trust Indicators */}
            <div className="mb-4 flex justify-center items-center gap-2 animate-bounce-in">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg font-semibold text-primary">4.9/5 Rating | 15+ Projects Delivered</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight animate-scale-in">
              <span className="text-primary">Custom Software Development</span> for Ambitious Businesses
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-6 animate-slide-in">
              Web Platforms, Mobile Apps & Tailored Digital Solutions — Built in Karachi
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
              Apex Codalytics helps startups and enterprises build scalable software products including web applications, mobile apps, and internal tools. We serve clients in Karachi and globally with end-to-end digital expertise.
            </p>

            {/* Trust Indicators */}
            <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm font-medium animate-fade-in">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">
                15+ Projects Completed
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                Based in Karachi
              </span>
              <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
                24/7 Support
              </span>
              <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-3 py-1 rounded-full">
                Focused on Client Success
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8 text-lg animate-slide-in">
              <Link
                href="tel:+923112348744"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Phone className="h-5 w-5" />
                +92 311 234 8744 (Consult Now)
              </Link>
              <span className="hidden sm:inline text-gray-400">|</span>
              <Link
                href="mailto:apexcodalytics@gmail.com"
                className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Mail className="h-5 w-5" />
                apexcodalytics@gmail.com
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium group transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-glow-blue"
                asChild
              >
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 border-primary/30 hover:border-primary"
                asChild
              >
                <Link href="/portfolio">View 15+ Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Enhanced Cards */}
      <section className="py-20 glass-card-light mx-4 rounded-3xl animate-fade-in" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-scale-in">
              Software Development Services in Pakistan
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 animate-slide-in">
              Web, Mobile, and Custom Software Solutions from Karachi
            </h3>
            <p className="text-xl text-primary max-w-3xl mx-auto animate-slide-in-right">
              Tailored digital products built to meet your business needs in Pakistan and beyond.
              <strong> React, Node.js, Python, and cross-platform mobile app expertise.</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Search,
                title: "Discovery & Strategy",
                desc: "Business analysis and digital planning for effective software outcomes.",
                link: "/services#discovery",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                desc: "Clear, modern interface design focused on user experience.",
                link: "/services#design",
              },
              {
                icon: Monitor,
                title: "Web Development",
                desc: "Responsive, scalable web apps built with modern technologies.",
                link: "/services#web-development",
              },
              {
                icon: FileText,
                title: "Content & SEO",
                desc: "Content writing and SEO strategies to improve search visibility.",
                link: "/services#content",
              },
              {
                icon: Code,
                title: "Software Development",
                desc: "Custom-built software and mobile apps tailored to your goals.",
                link: "/services#development",
              },
              {
                icon: Rocket,
                title: "Launch & Growth",
                desc: "Deployment, support, and continuous product improvement.",
                link: "/services#launch",
              },
            ].map((service, index) => (
              <Link
                key={service.title}
                href={service.link}
                className="text-center p-8 group service-card rounded-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 animate-fade-in block hover:shadow-glow-blue"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow-blue animate-float">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-scale-in">
            <Button
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 border-primary/30 hover:border-primary shadow-glow-blue"
              asChild
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Why Choose Us - Enhanced */}
      <section className="py-20 animate-fade-in" id="about">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-scale-in">
                Why Partner with Apex Codalytics for Your Next Software Project?
              </h2>
              <h3 className="text-xl font-semibold text-primary mb-6 animate-slide-in">
                Full-Cycle Software Development Services from Karachi, Pakistan
              </h3>
              <div className="space-y-4">
                {[
                  "Custom software crafted for business needs — 15+ successful deployments",
                  "Skilled team with over a decade of development experience in Pakistan",
                  "Modern tech stack including React, Node.js, Python, Flutter, and more",
                  "Reliable support and maintenance available around the clock",
                  "Agile project workflows with clear communication at every step",
                  "Strong client relationships with long-term engagement focus",
                  "Transparent pricing models tailored to your business goals",
                  "Locally rooted in Karachi with clients across multiple regions",
                  "Industry expertise across e-commerce, healthcare, finance, and SaaS",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-slide-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 glass-card-light rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 animate-bounce-in">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Let’s Build Something Meaningful Together
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Reach out to discuss your idea, get a tailored plan, and start building your next software product with a dedicated team in Pakistan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="tel:+923112348744"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    <Phone className="h-5 w-5" />
                    Call: +92 311 234 8744
                  </Link>
                  <Link
                    href="mailto:apexcodalytics@gmail.com"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    <Mail className="h-5 w-5" />
                    Email: apexcodalytics@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="animate-fade-in">
              <Card className="glass-card-light hover:shadow-2xl transition-all duration-500 border-2 border-primary/20 hover:border-primary/40 hover:scale-105 shadow-glow-blue">
                <CardContent className="p-8">
                  <div className="text-center mb-6 animate-bounce-in">
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Start Your Project Today</h3>
                    <p className="text-primary font-semibold">Consult with our team to plan your solution</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                    Businesses across industries trust Apex Codalytics for software development services that deliver results. Let’s work together on your next idea.
                  </p>
                  <div className="space-y-3 mb-6">
                    <Link
                      href="tel:+923112348744"
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-105 justify-center"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      Instant Call: +92 311 234 8744
                    </Link>
                    <Link
                      href="mailto:apexcodalytics@gmail.com"
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300 hover:scale-105 justify-center"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      Quick Email: apexcodalytics@gmail.com
                    </Link>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 text-lg py-3 shadow-glow-blue"
                    asChild
                  >
                    <Link href="/contact">Get a Project Estimate</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
