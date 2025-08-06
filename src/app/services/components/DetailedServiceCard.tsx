'use client'

import { useOptimistic, useTransition, useState, useEffect } from 'react';
import { DetailedServiceData } from '@/lib/services-data';

interface DetailedServiceCardProps {
  service: DetailedServiceData;
  isExpanded?: boolean;
  onToggleExpansion?: (serviceId: string) => void;
  animationDelay?: number;
}

export default function DetailedServiceCard({ 
  service, 
  isExpanded = false, 
  onToggleExpansion,
  animationDelay = 0 
}: DetailedServiceCardProps) {
  const [optimisticExpanded, setOptimisticExpanded] = useOptimistic(
    isExpanded,
    (currentState: boolean, optimisticValue: boolean) => optimisticValue
  );
  
  const [isPending, startTransition] = useTransition();
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggleExpansion = () => {
    startTransition(() => {
      setOptimisticExpanded(!optimisticExpanded);
      
      if (onToggleExpansion) {
        onToggleExpansion(service.id);
      }
    });
  };

  const getGradientColors = (id: string) => {
    const gradients = {
      'data-solutions': 'from-blue-500/20 to-cyan-500/20',
      'ai-solutions': 'from-purple-500/20 to-pink-500/20',
      'ai-development': 'from-green-500/20 to-emerald-500/20',
      'automation-services': 'from-orange-500/20 to-red-500/20'
    };
    return gradients[id as keyof typeof gradients] || 'from-gray-500/20 to-gray-600/20';
  };

  const getHoverGlow = (id: string) => {
    const glows = {
      'data-solutions': 'shadow-blue-500/25',
      'ai-solutions': 'shadow-purple-500/25',
      'ai-development': 'shadow-green-500/25',
      'automation-services': 'shadow-orange-500/25'
    };
    return glows[id as keyof typeof glows] || 'shadow-gray-500/25';
  };

  return (
    <div 
      className={`
        group relative flex flex-col p-8 rounded-xl border border-black/[.08] 
        dark:border-white/[.145] transition-all duration-500 ease-out
        bg-gradient-to-br ${getGradientColors(service.id)}
        hover:scale-[1.02] hover:shadow-2xl hover:${getHoverGlow(service.id)}
        hover:-translate-y-2 hover:border-transparent
        ${optimisticExpanded ? 'scale-[1.01] shadow-xl' : ''}
        ${isPending ? 'opacity-90' : ''}
        overflow-hidden
      `}
      style={{
        animationDelay: `${animationDelay}ms`,
        transform: mounted && isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)' : '',
        transformStyle: 'preserve-3d'
      }}
      onMouseEnter={mounted ? () => setIsHovered(true) : undefined}
      onMouseLeave={mounted ? () => setIsHovered(false) : undefined}
    >
      {/* Animated Background Gradient */}
      <div className={`
        absolute inset-0 bg-gradient-to-br ${getGradientColors(service.id)}
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
        animate-pulse
      `} />
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Service Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {service.title}
          </h3>
          <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Key Features Preview */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3 text-foreground/90">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-foreground/60 mt-2 flex-shrink-0 animate-pulse" />
                <span className="text-sm text-foreground/70">{feature}</span>
              </div>
            ))}
            {service.features.length > 4 && !optimisticExpanded && (
              <div className="text-sm text-foreground/50 ml-5">
                +{service.features.length - 4} more features
              </div>
            )}
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mb-6 p-4 rounded-lg bg-black/[.02] dark:bg-white/[.02] border border-black/[.05] dark:border-white/[.05]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-foreground/60">Starting from</span>
              <div className="text-2xl font-bold text-foreground">
                {service.pricing.startingPrice}
              </div>
            </div>
            <div className="text-xs text-foreground/50 capitalize">
              {service.pricing.model} project
            </div>
          </div>
        </div>

        {/* Expanded Content */}
        {optimisticExpanded && (
          <div className="space-y-6 animate-in slide-in-from-top-2 duration-500">
            {/* All Features */}
            {service.features.length > 4 && (
              <div>
                <h4 className="text-lg font-semibold mb-3 text-foreground/90">Additional Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.slice(4).map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-foreground/60 mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground/90">Key Benefits</h4>
              <div className="grid grid-cols-1 gap-2">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-sm text-foreground/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold mb-3 text-foreground/90">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-black/[.05] dark:bg-white/[.05] text-foreground/70 border border-black/[.08] dark:border-white/[.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="p-6 rounded-lg bg-gradient-to-br from-black/[.02] to-black/[.05] dark:from-white/[.02] dark:to-white/[.05] border border-black/[.08] dark:border-white/[.08]">
              <h4 className="text-lg font-semibold mb-4 text-foreground/90">
                Success Story: {service.caseStudy.client}
              </h4>
              
              <div className="space-y-4 text-sm text-foreground/70">
                <div>
                  <span className="font-medium text-foreground/90">Challenge:</span>
                  <p className="mt-1">{service.caseStudy.challenge}</p>
                </div>
                
                <div>
                  <span className="font-medium text-foreground/90">Solution:</span>
                  <p className="mt-1">{service.caseStudy.solution}</p>
                </div>

                {/* Metrics */}
                <div>
                  <span className="font-medium text-foreground/90">Key Metrics:</span>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="p-3 rounded border border-black/[.05] dark:border-white/[.05] bg-black/[.02] dark:bg-white/[.02]">
                        <div className="text-xs text-foreground/60">{metric.label}</div>
                        <div className="text-lg font-bold text-foreground">{metric.value}</div>
                        <div className="text-xs text-green-600 dark:text-green-400">{metric.improvement}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <span className="font-medium text-foreground/90">Results:</span>
                  <ul className="mt-2 space-y-1">
                    {service.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Detailed Pricing */}
            <div className="p-4 rounded-lg bg-gradient-to-br from-foreground/[.02] to-foreground/[.05] border border-foreground/[.08]">
              <h4 className="text-lg font-semibold mb-3 text-foreground/90">What&apos;s Included</h4>
              <ul className="space-y-2">
                {service.pricing.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA for expanded card */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-sm rounded-full 
                       bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]
                       transition-colors font-medium"
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
            mt-6 w-full px-6 py-3 text-sm font-medium rounded-full transition-all duration-300
            border border-solid border-black/[.08] dark:border-white/[.145]
            hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent
            hover:shadow-lg hover:scale-105
            ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            ${optimisticExpanded ? 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]' : ''}
          `}
          aria-expanded={optimisticExpanded}
          aria-label={`${optimisticExpanded ? 'Hide' : 'Show'} details for ${service.title}`}
        >
          {isPending ? 'Loading...' : optimisticExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-foreground/[.05] to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-foreground/[.03] to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}