'use client'

import { useState } from 'react';
import DetailedServiceCard from './DetailedServiceCard';
import { DetailedServiceData } from '@/lib/services-data';

interface ServiceGridProps {
  services: DetailedServiceData[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const handleToggleExpansion = (serviceId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl">
      {services.map((service, index) => (
        <DetailedServiceCard
          key={service.id}
          service={service}
          isExpanded={expandedCards.has(service.id)}
          onToggleExpansion={handleToggleExpansion}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
}