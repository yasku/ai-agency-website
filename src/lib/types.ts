// TypeScript interfaces for AI Agency components
// Following Next.js 15 + React 19 + TypeScript patterns

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  features?: string[];
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
  };
}

export interface SuccessStoryData {
  id: string;
  clientName: string;
  clientLogo?: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
}

export interface ProcessStepData {
  id: string;
  title: string;
  description: string;
  details: string;
  duration?: string;
  deliverables?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  serviceInterest?: 'custom-ai' | 'automation' | 'data-intelligence' | 'consulting';
}

export interface ChatbotMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  options?: {
    label: string;
    value: string;
  }[];
}

export interface ChatbotState {
  messages: ChatbotMessage[];
  isTyping: boolean;
  currentStep: 'welcome' | 'assessment' | 'recommendation' | 'contact';
  userResponses: Record<string, string>;
}

// Component props interfaces following React 19 patterns
export interface ServiceCardProps {
  service: ServiceData;
  isExpanded?: boolean;
  onToggleExpansion?: (serviceId: string) => void;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  initialData?: Partial<ContactFormData>;
}

export interface ProcessTimelineProps {
  steps: ProcessStepData[];
  currentStep?: number;
}

export interface SuccessStoryProps {
  stories: SuccessStoryData[];
  displayLimit?: number;
}

export interface AIChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  onLeadCapture?: (data: Partial<ContactFormData>) => void;
}

// Navigation-specific TypeScript interfaces
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface NavigationBarProps {
  // No specific props needed yet, but defined for future expansion
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
}

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

// Utility types for component state management
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface FormValidation {
  field: keyof ContactFormData;
  message: string;
}

export interface AnimationConfig {
  duration: number;
  delay?: number;
  easing?: string;
}