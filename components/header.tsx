"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="glass-header sticky top-0 z-50 animate-slide-in">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            aria-label="Apex Codalytics Home"
          >
            Apex Codalytics
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fade-in" role="navigation" aria-label="Main navigation">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2 animate-slide-in ${
                  pathname === item.href
                    ? "text-primary bg-primary/10 backdrop-blur-sm shadow-glow-blue"
                    : "text-gray-700 dark:text-gray-200 hover:bg-primary/10 backdrop-blur-sm hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-primary text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:scale-110"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300 hover:scale-110"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 animate-scale-in" />
              ) : (
                <Menu className="h-5 w-5 animate-scale-in" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden mt-4 pb-4 animate-fade-in glass-card-light rounded-lg mx-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-3 py-2 animate-slide-in ${
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/10"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
