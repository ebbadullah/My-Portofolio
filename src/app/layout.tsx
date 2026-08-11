import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import VisitorTracker from '@/Components/VisitorTracker';
import { ThemeProvider } from '@/Context/Theme-Provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://ebadbaloch.vercel.app'),
  title: {
    default: 'Ebad Ullah (Ebadullah Baloch) | Full-Stack MERN Web Developer',
    template: '%s | Ebad Ullah',
  },
  description:
    'Official portfolio of Ebad Ullah (also known as Ebadullah Baloch), a passionate Senior Full-Stack MERN Web Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web applications.',
  keywords: [
    'Ebad Ullah',
    'Ebadullah',
    'Ebad Ullah Baloch',
    'Ebadullah Baloch',
    'Ebad Ullah developer',
    'Ebad Ullah web developer',
    'Ebad Ullah portfolio',
    'Ebad Ullah MERN developer',
    'MERN Stack Developer Karachi',
    'Full Stack Web Developer Pakistan',
    'React Next.js Developer',
  ],
  authors: [{ name: 'Ebad Ullah', url: 'https://ebadbaloch.vercel.app' }],
  creator: 'Ebad Ullah',
  publisher: 'Ebad Ullah',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://ebadbaloch.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ebadbaloch.vercel.app',
    title: 'Ebad Ullah (Ebadullah Baloch) | Full-Stack MERN Web Developer',
    description:
      'Explore the official portfolio of Ebad Ullah — Full-Stack Web Developer specializing in React, Next.js, Node.js, Express & MongoDB.',
    siteName: 'Ebad Ullah Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Ebad Ullah - Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ebad Ullah | Full-Stack Web Developer',
    description:
      'Official portfolio of Ebad Ullah — Full-Stack Web Developer specializing in React, Next.js, Node.js, Express & MongoDB.',
    images: [
      '/profile.jpg',
    ],
    creator: '@ebadull4h',
  },
  icons: {
    icon: '/Real2.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://ebadbaloch.vercel.app/#person',
    name: 'Ebad Ullah',
    alternateName: ['Ebadullah', 'Ebad Ullah Baloch', 'Ebadullah Baloch'],
    givenName: 'Ebad',
    familyName: 'Ullah',
    jobTitle: 'Full-Stack Web Developer',
    description:
      'Ebad Ullah is a Full-Stack MERN Web Developer specializing in React, Next.js, Node.js, Express, MongoDB, and modern web application development.',
    url: 'https://ebadbaloch.vercel.app',
    image: '/profile.jpg',
    sameAs: [
      'https://www.linkedin.com/in/ebadull4h/',
      'https://github.com/ebbadullah',
      'https://facebook.com/EBAD.BALOCH345',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'Pakistan',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Govt PECHS Education Foundation Science College, Karachi',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Techzone Learning',
      },
    ],
    knowsAbout: [
      'Web Development',
      'Full-Stack Development',
      'MERN Stack',
      'React.js',
      'Next.js',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  };

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://ebadbaloch.vercel.app/#website',
    url: 'https://ebadbaloch.vercel.app',
    name: 'Ebad Ullah Portfolio',
    description:
      'Official portfolio website of Ebad Ullah, Full-Stack MERN Web Developer.',
    publisher: {
      '@id': 'https://ebadbaloch.vercel.app/#person',
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
        <Script id="hotjar-tracking" strategy="afterInteractive">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:5357179,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <VisitorTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
