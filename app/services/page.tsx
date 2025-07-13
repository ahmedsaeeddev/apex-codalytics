import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Palette, Monitor, FileText, Code, Rocket, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "Discovery & Strategy",
      description:
        "We start by understanding your business goals, target audience, and technical requirements through comprehensive research and analysis.",
      features: ["Market Research", "Competitor Analysis", "Technical Audit", "Strategy Planning"],
      price: "Starting at $25",
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description:
        "Create a distinctive brand identity that resonates with your audience and sets you apart from the competition.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography Selection"],
      price: "Starting at $15",
    },
    {
      icon: Monitor,
      title: "Web Design & UX",
      description: "Design intuitive and visually compelling user experiences that convert visitors into customers.",
      features: ["UI/UX Design", "Responsive Design", "Prototyping", "User Testing"],
      price: "Starting at $60",
    },
    {
      icon: FileText,
      title: "Content Creation",
      description:
        "Craft compelling content that engages your audience and drives meaningful interactions with your brand.",
      features: ["Copywriting", "Content Strategy", "SEO Optimization", "Content Management"],
      price: "Starting at $20",
    },
    {
      icon: Code,
      title: "Development",
      description: "Build robust, scalable solutions using cutting-edge technology and industry best practices.",
      features: ["Frontend Development", "Backend Development", "Database Design", "API Integration"],
      price: "Starting at $150",
    },
    {
      icon: Rocket,
      title: "Launch & Growth",
      description: "Deploy your solution and provide ongoing support to ensure continuous growth and optimization.",
      features: ["Deployment", "Performance Monitoring", "Maintenance", "Growth Analytics"],
      price: "Starting at $50/month",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-scale-in">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed animate-slide-in">
            Comprehensive solutions designed to take your business from concept to success. We handle every aspect of
            your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="services">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="service-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/30 animate-fade-in hover:shadow-glow-blue group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-glow-blue animate-float">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 animate-slide-in"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-lg font-semibold text-primary mb-3">{service.price}</div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-glow-blue"
                    asChild
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-16 glass-card-light rounded-2xl mb-16 animate-fade-in" id="process">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-scale-in">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 animate-slide-in">
              A proven methodology that delivers results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
            {[
              { step: "01", title: "Discover", desc: "Understanding your needs and goals" },
              { step: "02", title: "Design", desc: "Creating the perfect solution" },
              { step: "03", title: "Develop", desc: "Building with precision and care" },
              { step: "04", title: "Deploy", desc: "Launching and supporting your success" },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-bounce-in hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-glow-blue">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-scale-in">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-in">
            Let's discuss your needs and create something amazing together. Contact us at{" "}
            <a href="mailto:apexcodalytics@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
              apexcodalytics@gmail.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+923112348744" className="text-primary hover:text-primary/80 transition-colors">
              +92 311 234 8744
            </a>
            . We have offices in Karachi.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-slide-in-right">
            <strong>Karachi Office 1:</strong> Shahrah-e-Faisal, Ayesha Bawany 75350
            <br />
            <strong>Karachi Office 2:</strong> Landhi Town, 75120
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-glow-blue"
              asChild
            >
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 border-primary/30 hover:border-primary"
              asChild
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
