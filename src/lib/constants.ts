// Constants for AI Agency project
// Following established design patterns and business requirements

import { ServiceData, ProcessStepData } from '@/lib/types';

// Core AI services offered by the agency
export const AI_SERVICES: ServiceData[] = [
  {
    id: 'custom-ai-development',
    title: 'Custom AI Development',
    description: 'Tailored AI solutions built specifically for your business needs and industry requirements.',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'Predictive Analytics',
      'AI Strategy Consulting'
    ],
    caseStudy: {
      client: 'Manufacturing Corp',
      challenge: 'Quality control inefficiencies causing 15% defect rate',
      solution: 'Custom computer vision AI for real-time defect detection',
      results: [
        '95% defect detection accuracy',
        '60% reduction in manual inspection time',
        '$2M annual cost savings'
      ]
    }
  },
  {
    id: 'process-automation',
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation that reduces costs and improves efficiency.',
    features: [
      'Robotic Process Automation (RPA)',
      'Intelligent Document Processing',
      'Workflow Optimization',
      'Integration Solutions',
      'Change Management Support'
    ],
    caseStudy: {
      client: 'Financial Services Inc',
      challenge: 'Manual document processing taking 4 hours per transaction',
      solution: 'Intelligent automation pipeline with OCR and NLP',
      results: [
        '85% processing time reduction',
        '99.2% accuracy rate',
        '300% ROI within 6 months'
      ]
    }
  },
  {
    id: 'data-intelligence',
    title: 'Data Intelligence',
    description: 'Transform raw data into actionable insights with advanced analytics and machine learning.',
    features: [
      'Data Pipeline Engineering',
      'Advanced Analytics Dashboards',
      'Real-time Data Processing',
      'Business Intelligence Solutions',
      'Data Governance & Security'
    ],
    caseStudy: {
      client: 'Retail Chain Ltd',
      challenge: 'Fragmented data across 200+ stores limiting insights',
      solution: 'Unified data platform with predictive analytics',
      results: [
        '40% improvement in inventory turnover',
        'Real-time insights across all locations',
        '$5M increase in annual revenue'
      ]
    }
  }
];

// Development process steps
export const PROCESS_STEPS: ProcessStepData[] = [
  {
    id: 'discovery',
    title: 'Discovery',
    description: 'Understanding business needs',
    details: 'We conduct thorough analysis of your current processes, pain points, and objectives to identify the best AI opportunities.',
    duration: '1-2 weeks',
    deliverables: [
      'Current state assessment',
      'AI opportunity mapping',
      'Technical feasibility study',
      'Project roadmap'
    ]
  },
  {
    id: 'strategy',
    title: 'Strategy',
    description: 'AI solution planning',
    details: 'Develop comprehensive strategy including technology selection, architecture design, and implementation timeline.',
    duration: '1-2 weeks',
    deliverables: [
      'Technical architecture',
      'Implementation timeline',
      'Resource requirements',
      'Success metrics definition'
    ]
  },
  {
    id: 'development',
    title: 'Development',
    description: 'Custom AI implementation',
    details: 'Build and train AI models using cutting-edge technologies, ensuring scalability and performance.',
    duration: '4-12 weeks',
    deliverables: [
      'Trained AI models',
      'Integration APIs',
      'User interfaces',
      'Documentation'
    ]
  },
  {
    id: 'testing',
    title: 'Testing',
    description: 'Quality assurance',
    details: 'Comprehensive testing including model validation, performance testing, and user acceptance testing.',
    duration: '2-3 weeks',
    deliverables: [
      'Test results reports',
      'Performance benchmarks',
      'Security validation',
      'User training materials'
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    description: 'Production rollout',
    details: 'Careful deployment to production environment with monitoring and rollback capabilities.',
    duration: '1-2 weeks',
    deliverables: [
      'Production deployment',
      'Monitoring dashboards',
      'Deployment documentation',
      'Handover training'
    ]
  },
  {
    id: 'support',
    title: 'Support',
    description: 'Ongoing maintenance',
    details: 'Continuous monitoring, maintenance, and optimization to ensure peak performance.',
    duration: 'Ongoing',
    deliverables: [
      '24/7 system monitoring',
      'Regular performance reports',
      'Model retraining',
      'Technical support'
    ]
  }
];

// Animation configuration constants
export const ANIMATION_CONFIG = {
  CARD_HOVER_SCALE: 1.05,
  TRANSITION_DURATION: 300,
  STAGGER_DELAY: 100,
  FADE_DURATION: 500,
  GRADIENT_ANIMATION_DURATION: 6000
} as const;

// Form validation constants
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MESSAGE_MIN_LENGTH: 10,
  MESSAGE_MAX_LENGTH: 500
} as const;

// Contact form service options
export const SERVICE_OPTIONS = [
  { value: 'custom-ai', label: 'Custom AI Development' },
  { value: 'automation', label: 'Process Automation' },
  { value: 'data-intelligence', label: 'Data Intelligence' },
  { value: 'consulting', label: 'AI Strategy Consulting' }
] as const;

// Chatbot conversation flow
export const CHATBOT_MESSAGES = {
  WELCOME: "Hello! I'm your AI assistant. I can help you find the perfect AI solution for your business. What's your main challenge?",
  ASSESSMENT_QUESTIONS: [
    "What industry is your business in?",
    "What's your primary business challenge?",
    "What's your approximate company size?",
    "What's your timeline for implementation?"
  ],
  RECOMMENDATIONS: {
    'custom-ai': "Based on your needs, Custom AI Development would be perfect for you.",
    'automation': "Process Automation sounds like the ideal solution for your challenges.",
    'data-intelligence': "Data Intelligence services would help transform your business insights."
  }
} as const;