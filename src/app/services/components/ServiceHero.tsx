export default function ServiceHero() {
  return (
    <div className="text-center max-w-4xl">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Our AI Solutions
      </h1>
      <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
        Comprehensive artificial intelligence services designed to transform your business operations, 
        boost efficiency, and drive sustainable growth through cutting-edge technology.
      </p>
      
      <div className="flex gap-4 items-center flex-col sm:flex-row justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#contact"
        >
          Get Custom Quote
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#detailed-services"
        >
          Explore Services
        </a>
      </div>
    </div>
  );
}