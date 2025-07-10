import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next/types"

export const metadata: Metadata = {
  title: "Software Development Portfolio - [Your Name/Company] - Karachi, Pakistan",
  description:
    "Explore our software development portfolio showcasing web, mobile, and enterprise solutions. Based in Karachi, Pakistan, we deliver innovative and high-quality software.",
  keywords: [
    "software development",
    "portfolio",
    "web development",
    "mobile app development",
    "Karachi",
    "Pakistan",
    "software company",
    "custom software",
    "enterprise solutions",
  ],
  openGraph: {
    title: "Software Development Portfolio - [Your Name/Company] - Karachi, Pakistan",
    description:
      "Explore our software development portfolio showcasing web, mobile, and enterprise solutions. Based in Karachi, Pakistan, we deliver innovative and high-quality software.",
    url: "[Your Website URL]",
    siteName: "[Your Name/Company]",
    images: [
      {
        url: "/og-image.png", // Replace with your Open Graph image
        width: 1200,
        height: 630,
        alt: "Software Development Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Portfolio - [Your Name/Company] - Karachi, Pakistan",
    description:
      "Explore our software development portfolio showcasing web, mobile, and enterprise solutions. Based in Karachi, Pakistan, we deliver innovative and high-quality software.",
    images: ["/og-image.png"], // Replace with your Twitter card image
    creator: "@[YourTwitterHandle]", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "[Your Google Verification Code]", // Replace with your Google Verification code
    yandex: "[Your Yandex Verification Code]", // Replace with your Yandex Verification code
    yahoo: "[Your Yahoo Verification Code]", // Replace with your Yahoo Verification code
    microsoft: "[Your Microsoft Verification Code]", // Replace with your Microsoft Verification code
  },
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with advanced inventory management and seamless payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      link: "/contact",
      github: "#",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management, appointments, and medical records.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "PostgreSQL", "TypeScript", "Tailwind"],
      category: "Healthcare",
      link: "/contact",
      github: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial analytics dashboard with advanced reporting and data visualization.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Vue.js", "Python", "D3.js", "AWS"],
      category: "FinTech",
      link: "/contact",
      github: "#",
    },
    {
      title: "Mobile Learning App",
      description: "Interactive mobile application for online learning with gamification and progress tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Education",
      link: "/contact",
      github: "#",
    },
    {
      title: "Restaurant Management",
      description: "Complete restaurant management system with POS, inventory, and customer management features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Angular", "Express.js", "MySQL", "Socket.io"],
      category: "Restaurant",
      link: "/contact",
      github: "#",
    },
    {
      title: "Real Estate Platform",
      description: "Modern real estate platform with property listings, virtual tours, and agent management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "GraphQL", "Prisma", "Vercel"],
      category: "Real Estate",
      link: "/contact",
      github: "#",
    },
  ]

  const categories = ["All", "Web Development", "Healthcare", "FinTech", "Education", "Restaurant", "Real Estate"]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform their digital presence and achieve
            remarkable results. Based in Karachi, Pakistan, we are committed to delivering exceptional software
            solutions.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`transition-all hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                category === "All"
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "glass-card-light hover:bg-primary hover:text-white border-gray-200"
              }`}
              asChild
            >
              <Link href="/contact">{category}</Link>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group glass-card-light hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2"
                    asChild
                  >
                    <Link href={project.link} aria-label={`View ${project.title} project`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2"
                    asChild
                  >
                    <Link href={project.github} aria-label={`View ${project.title} source code`}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="glass-card text-gray-900 dark:text-white border-white/20">
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <section className="py-16 glass-card-light rounded-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed in Karachi" },
              { number: "98%", label: "Client Satisfaction Rate" },
              { number: "50+", label: "Happy Clients in Pakistan" },
              { number: "5+", label: "Years Experience in Software Development" },
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project requirements. We are based in
            Karachi, Pakistan and serve clients globally.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-medium transition-all hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2"
            asChild
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
