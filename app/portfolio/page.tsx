"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    // --- Web Development ---
    {
      title: "Quality Digitize",
      description:
        "A modern 3D animated Website developed using Next JS & Tailwind CSS with stunning motion graphics.",
      image: "/quality-digitize.jpg",
      tags: ["Next JS", "Framer Motion", "3D Animations"],
      category: "Web Development",
      link: "https://qualitydigitize.net/",
      github: "",
    },
    {
      title: "United Punch",
      description:
        "Static Website for an American digitizing company with accessible and cross-browser compatible design.",
      image: "/united-punch.jpg",
      tags: ["HTML", "CSS", "JS", "Bootstrap"],
      category: "Web Development",
      link: "/contact",
      github: "#",
    },
    {
      title: "Patch Dispatcher",
      description:
        "Modern Digitizing Company Website with Professional Layout and animations.",
      image: "/patch-dispatcher.jpg",
      tags: ["React", "Vercel"],
      category: "Web Development",
      link: "https://patchdispatcher.com",
      github: "https://github.com/patch_dispatcher/",
    },

    // --- Graphic Design ---
    {
      title: "Creative Social Posts",
      description:
        "Creative Social Posts for a client's brand, crafted to boost social engagement & brand awareness.",
      image: "/unitedpunch.jpg",
      tags: ["Photoshop", "Social Media Design", "Branding"],
      category: "Graphic Design",
      link: "https://instagram.com/unitedpunch",
      github: "#",
    },
    {
      title: "Desire Herbal Store",
      description:
        "Creative Facebook post designs for Herbal Store, crafted to boost social engagement & brand awareness.",
      image: "/desire-herbal-store-posts.jpg",
      tags: ["Photoshop", "Social Media Design", "Branding"],
      category: "Graphic Design",
      link: "#",
      github: "#",
    },

    // --- Digital Marketing ---
    {
      title: "SEO Optimization Campaign",
      description:
        "Full SEO optimization for a client website resulting in a 70% traffic increase.",
      image: "/seo-campaign.jpg",
      tags: ["SEO", "Google Analytics", "Content Strategy"],
      category: "Digital Marketing",
      link: "https://www.facebook.com/profile.php?id=61577171317619",
      github: "#", 
    },
    {
      title: "Social Media Branding",
      description:
        "Managed content and ads for Facebook & Instagram, improving engagement by 200%.",
      image: "/social-media-branding.jpg",
      tags: ["Facebook Ads", "Instagram", "Canva"],
      category: "Digital Marketing",
      link: "#",
      github: "#",
    },

    // --- WordPress Development ---
    {
      title: "Classic Punch",
      description:
        "Complete WordPress Website for a U.S-based digitizing company with animations.",
      image: "/classic-punch.jpg",
      tags: ["WordPress", "CSS"],
      category: "Wordpress Development",
      link: "https://classicpunch.net",
      github: "#",
    },
    {
      title: "E-Commerce Store",
      description:
        "Fully responsive WooCommerce store with custom theme development.",
      image: "/woocommerce-store.jpg",
      tags: ["WooCommerce", "Elementor", "PHP"],
      category: "Wordpress Development",
      link: "#",
      github: "#",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Wordpress Development",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects across multiple domains.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all hover:scale-105 ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "glass-card-light hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group glass-card-light hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.link}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <Link href={project.github}>
                      <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <Badge variant="secondary">{project.category}</Badge>
                <h3 className="text-xl font-bold mt-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
