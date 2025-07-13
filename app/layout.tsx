import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "#1 Software Development Company Pakistan | Apex Codalytics Karachi | Web & Mobile App Development Services",
  description:
    "TOP-RATED Software Development Company in Pakistan! Expert Web Development, Mobile Apps, Custom Software Solutions in Karachi. 500+ Projects Delivered | 24/7 Support | Free Consultation +92 311 234 8744 | apexcodalytics@gmail.com",
  keywords: [
    // Primary Keywords
    "software development company Pakistan",
    "web development company Karachi",
    "mobile app development Pakistan",
    "custom software development Karachi",
    "best software company Pakistan",

    // Location-based Keywords
    "software development Karachi",
    "web development services Pakistan",
    "mobile app developers Karachi",
    "IT company Pakistan",
    "software house Karachi",
    "web design company Pakistan",

    // Service-based Keywords
    "React development Pakistan",
    "Node.js development Karachi",
    "e-commerce development Pakistan",
    "UI UX design Pakistan",
    "digital marketing Pakistan",
    "SEO services Karachi",

    // Long-tail Keywords
    "affordable software development Pakistan",
    "professional web development Karachi",
    "top mobile app development company Pakistan",
    "custom web application development",
    "enterprise software solutions Pakistan",
    "startup software development Karachi",

    // Business Keywords
    "Apex Codalytics",
    "software development Shahrah-e-Faisal",
    "web development Landhi Town",
    "Pakistan software outsourcing",
    "Karachi IT services",
  ].join(", "),
  authors: [
    {
      name: "Apex Codalytics - Leading Software Development Company Pakistan",
      url: "https://apex-codalytics.vercel.app",
    },
  ],
  creator: "Apex Codalytics Pakistan",
  publisher: "Apex Codalytics Software Development Company",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apex-codalytics.vercel.app",
    title: "#1 Software Development Company Pakistan | Apex Codalytics",
    description:
      "TOP-RATED Software Development Company in Pakistan! Expert Web Development, Mobile Apps, Custom Software Solutions in Karachi. 500+ Projects Delivered!",
    siteName: "Apex Codalytics - Pakistan's Leading Software Development Company",
    images: [
      {
        url: "https://apex-codalytics.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Codalytics - #1 Software Development Company Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Software Development Company Pakistan | Apex Codalytics",
    description:
      "TOP-RATED Software Development Company in Pakistan! Expert Web Development, Mobile Apps, Custom Software Solutions in Karachi.",
    images: ["https://apex-codalytics.vercel.app/og-image.png"],
    creator: "@apexcodalytics",
    site: "@apexcodalytics",
  },
  alternates: {
    canonical: "https://apex-codalytics.vercel.app",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "yandex-verification": "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://apex-codalytics.vercel.app" />
        <meta name="geo.region" content="PK-SD" />
        <meta name="geo.placename" content="Karachi, Pakistan" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />
        <meta name="rating" content="5 stars" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Apex Codalytics",
              alternateName: "Apex Codalytics Software Development Company Pakistan",
              description:
                "Leading software development company in Pakistan providing expert web development, mobile app development, and custom software solutions in Karachi.",
              url: "https://apex-codalytics.vercel.app",
              logo: "https://apex-codalytics.vercel.app/logo.png",
              image: "https://apex-codalytics.vercel.app/og-image.png",
              telephone: "+923112348744",
              email: "apexcodalytics@gmail.com",
              foundingDate: "2019",
              numberOfEmployees: "50-100",
              slogan: "Your Brand. Our Commitment.",
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Shahrah-e-Faisal, Ayesha Bawany",
                  addressLocality: "Karachi",
                  addressRegion: "Sindh",
                  postalCode: "75350",
                  addressCountry: "PK",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Landhi Town",
                  addressLocality: "Karachi",
                  addressRegion: "Sindh",
                  postalCode: "75120",
                  addressCountry: "PK",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "24.8607",
                longitude: "67.0011",
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Pakistan",
                },
                {
                  "@type": "City",
                  name: "Karachi",
                },
                "Global",
              ],
              sameAs: [
                "https://facebook.com/apexcodalytics",
                "https://instagram.com/apexcodalytics",
                "https://twitter.com/apexcodalytics",
                "https://linkedin.com/company/apexcodalytics",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services Pakistan",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development Pakistan",
                      description: "Custom web application development using React, Node.js, and modern technologies",
                      provider: {
                        "@type": "Organization",
                        name: "Apex Codalytics",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development Pakistan",
                      description: "Native and cross-platform mobile application development for iOS and Android",
                      provider: {
                        "@type": "Organization",
                        name: "Apex Codalytics",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Software Development Karachi",
                      description: "Enterprise software solutions and custom application development",
                      provider: {
                        "@type": "Organization",
                        name: "Apex Codalytics",
                      },
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://apex-codalytics.vercel.app/#organization",
              name: "Apex Codalytics - Software Development Company Pakistan",
              image: "https://apex-codalytics.vercel.app/og-image.png",
              telephone: "+923112348744",
              email: "apexcodalytics@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Shahrah-e-Faisal, Ayesha Bawany",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                postalCode: "75350",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "24.8607",
                longitude: "67.0011",
              },
              url: "https://apex-codalytics.vercel.app",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$",
              currenciesAccepted: "PKR, USD",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Apex Codalytics - Software Development Company Pakistan",
              url: "https://apex-codalytics.vercel.app",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://apex-codalytics.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to Main Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:p-3 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <Header />
            <main role="main" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
