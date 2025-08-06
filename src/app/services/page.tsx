import Link from 'next/link';
import ServiceHero from './components/ServiceHero';
import ServiceGrid from './components/ServiceGrid';
import ProcessOverview from './components/ProcessOverview';
import ContactForm from '../components/ContactForm';
import { DETAILED_SERVICES } from '@/lib/services-data';

export default function ServicesPage() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 text-center">
        <ServiceHero />
      </header>

      <main className="flex flex-col gap-[48px] row-start-2 items-center text-center max-w-7xl w-full">
        <section id="detailed-services" className="flex flex-col gap-8 items-center w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-foreground/70 max-w-3xl text-base sm:text-lg leading-relaxed">
              Explore our complete range of AI services designed to transform your business operations, 
              drive innovation, and deliver measurable results across every aspect of your organization.
            </p>
          </div>
          
          <ServiceGrid services={DETAILED_SERVICES} />
        </section>

        <ProcessOverview />

        <section id="contact" className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-foreground/70 max-w-2xl">
              Let&apos;s discuss which AI solution is perfect for your business needs. Our experts are ready to help you transform your operations.
            </p>
          </div>
          
          <ContactForm />
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-foreground/60">
        <Link href="/" className="hover:text-foreground/80 transition-colors">← Back to Home</Link>
        <span>© 2024 AI Agency. All rights reserved.</span>
      </footer>
    </div>
  );
}