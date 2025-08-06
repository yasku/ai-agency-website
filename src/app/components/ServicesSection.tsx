'use client'

import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { AI_SERVICES } from '@/lib/constants';

export default function ServicesSection() {
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
      {AI_SERVICES.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          isExpanded={expandedCards.has(service.id)}
          onToggleExpansion={handleToggleExpansion}
        />
      ))}
    </div>
  );
}