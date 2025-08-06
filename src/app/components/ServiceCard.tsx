'use client'

import { useOptimistic, useTransition } from 'react';
import { ServiceCardProps } from '@/lib/types';

export default function ServiceCard({ service, isExpanded = false, onToggleExpansion }: ServiceCardProps) {
  const [optimisticExpanded, setOptimisticExpanded] = useOptimistic(
    isExpanded,
    (currentState: boolean, optimisticValue: boolean) => optimisticValue
  );
  
  const [isPending, startTransition] = useTransition();

  const handleToggleExpansion = () => {
    startTransition(() => {
      // Optimistically update the UI immediately
      setOptimisticExpanded(!optimisticExpanded);
      
      // Call the actual state update function
      if (onToggleExpansion) {
        onToggleExpansion(service.id);
      }
    });
  };

  return (
    <div 
      className={`
        flex flex-col items-center p-6 rounded-lg border border-black/[.08] 
        dark:border-white/[.145] transition-all duration-300
        ${optimisticExpanded 
          ? 'hover:bg-[#f9f9f9] dark:hover:bg-[#111] hover:scale-105' 
          : 'hover:bg-[#f9f9f9] dark:hover:bg-[#111] hover:scale-105'
        }
        ${isPending ? 'opacity-90' : ''}
      `}
    >
      {/* Service Title */}
      <h3 className="text-xl font-semibold mb-3 text-center">
        {service.title}
      </h3>
      
      {/* Service Description */}
      <p className="text-foreground/70 text-center mb-4">
        {service.description}
      </p>

      {/* Features List - Always visible */}
      {service.features && (
        <ul className="text-sm text-foreground/60 mb-4 space-y-1">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Expanded Content - Conditionally visible */}
      {optimisticExpanded && (
        <div className="w-full transition-all duration-300 ease-in-out">
          {/* Additional Features */}
          {service.features && service.features.length > 3 && (
            <ul className="text-sm text-foreground/60 mb-4 space-y-1">
              {service.features.slice(3).map((feature, index) => (
                <li key={index + 3} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Case Study Section */}
          {service.caseStudy && (
            <div className="w-full p-4 rounded border border-black/[.05] dark:border-white/[.1] bg-background/50 mb-4">
              <h4 className="text-sm font-medium mb-2 text-foreground/90">
                Success Story: {service.caseStudy.client}
              </h4>
              
              <div className="space-y-2 text-xs text-foreground/70">
                <div>
                  <span className="font-medium">Challenge:</span> {service.caseStudy.challenge}
                </div>
                <div>
                  <span className="font-medium">Solution:</span> {service.caseStudy.solution}
                </div>
                
                {/* Results */}
                <div>
                  <span className="font-medium">Results:</span>
                  <ul className="mt-1 space-y-1 ml-4">
                    {service.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-foreground/30 mt-1.5 flex-shrink-0"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* CTA for expanded card */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-full 
                     border border-solid border-black/[.08] dark:border-white/[.145] 
                     transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] 
                     hover:border-transparent font-medium"
          >
            Get Started with {service.title}
          </a>
        </div>
      )}

      {/* Learn More Button */}
      <button
        onClick={handleToggleExpansion}
        disabled={isPending}
        className={`
          mt-4 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200
          border border-solid border-black/[.08] dark:border-white/[.145]
          hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent
          ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${optimisticExpanded ? 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]' : ''}
        `}
        aria-expanded={optimisticExpanded}
        aria-label={`${optimisticExpanded ? 'Hide' : 'Show'} details for ${service.title}`}
      >
        {isPending ? 'Loading...' : optimisticExpanded ? 'Show Less' : 'Learn More'}
      </button>
    </div>
  );
}