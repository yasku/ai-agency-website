import { PROCESS_STEPS } from '@/lib/constants';

export default function ProcessOverview() {
  return (
    <section className="text-center max-w-6xl w-full">
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">How We Work</h2>
        <p className="text-foreground/70 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Our proven 6-step methodology ensures successful AI implementation from discovery to ongoing support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROCESS_STEPS.map((step, index) => (
          <div 
            key={step.id}
            className="flex flex-col items-center p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:bg-[#f9f9f9] dark:hover:bg-[#111] transition-all duration-300 hover:scale-105"
          >
            {/* Step Number */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-foreground to-foreground/70 text-background flex items-center justify-center font-bold text-lg mb-4">
              {index + 1}
            </div>

            {/* Step Content */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-foreground/70 text-sm text-center mb-3">{step.description}</p>
            
            {step.duration && (
              <div className="text-xs text-foreground/50 mb-4 px-2 py-1 rounded-full bg-black/[.05] dark:bg-white/[.05]">
                Duration: {step.duration}
              </div>
            )}

            <p className="text-xs text-foreground/60 text-center leading-relaxed">
              {step.details}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}