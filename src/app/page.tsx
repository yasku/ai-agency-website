export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="row-start-1 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          AI Agency
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl">
          Transform your business with cutting-edge AI solutions
        </p>
      </header>

      <main className="flex flex-col gap-[48px] row-start-2 items-center text-center max-w-6xl w-full">
        <section className="flex flex-col gap-8 items-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Intelligent Solutions for Modern Businesses
          </h2>
          <p className="text-foreground/70 max-w-3xl text-base sm:text-lg leading-relaxed">
            We specialize in custom AI development, automation, and intelligent systems that drive growth, 
            efficiency, and innovation across industries.
          </p>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="#contact"
            >
              Get Started
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="#services"
            >
              Our Services
            </a>
          </div>
        </section>

        <section id="services" className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="flex flex-col items-center p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:bg-[#f9f9f9] dark:hover:bg-[#111] transition-colors">
            <h3 className="text-xl font-semibold mb-3">Custom AI Development</h3>
            <p className="text-foreground/70 text-center">
              Tailored AI solutions built specifically for your business needs and industry requirements.
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:bg-[#f9f9f9] dark:hover:bg-[#111] transition-colors">
            <h3 className="text-xl font-semibold mb-3">Process Automation</h3>
            <p className="text-foreground/70 text-center">
              Streamline operations with intelligent automation that reduces costs and improves efficiency.
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:bg-[#f9f9f9] dark:hover:bg-[#111] transition-colors">
            <h3 className="text-xl font-semibold mb-3">Data Intelligence</h3>
            <p className="text-foreground/70 text-center">
              Transform raw data into actionable insights with advanced analytics and machine learning.
            </p>
          </div>
        </section>

        <section className="text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Choose AI Agency?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium mb-1">Expert Team</h4>
                <p className="text-foreground/70 text-sm">Industry-leading AI engineers and data scientists</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium mb-1">Proven Results</h4>
                <p className="text-foreground/70 text-sm">Successful implementations across multiple industries</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium mb-1">Scalable Solutions</h4>
                <p className="text-foreground/70 text-sm">AI systems that grow with your business needs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-foreground mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-medium mb-1">24/7 Support</h4>
                <p className="text-foreground/70 text-sm">Continuous monitoring and support for all solutions</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl">
            Contact us today to discuss how AI can revolutionize your operations and drive unprecedented growth.
          </p>
          
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-8 mx-auto w-fit"
            href="mailto:hello@aiagency.com"
          >
            Contact Us Today
          </a>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-foreground/60">
        <span>© 2024 AI Agency. All rights reserved.</span>
      </footer>
    </div>
  );
}
