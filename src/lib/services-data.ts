// Detailed services data for comprehensive services page
// Following established design patterns and enhanced service categories

export interface DetailedServiceData {
  id: string;
  title: string;
  description: string;
  icon: string; // For future icon implementation
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    metrics: {
      label: string;
      value: string;
      improvement: string;
    }[];
  };
  pricing: {
    startingPrice: string;
    model: 'fixed' | 'hourly' | 'subscription';
    includes: string[];
  };
}

export const DETAILED_SERVICES: DetailedServiceData[] = [
  {
    id: 'data-solutions',
    title: 'Data Solutions',
    description: 'Transform raw data into strategic assets with comprehensive data engineering, analytics, and intelligence platforms.',
    icon: 'database',
    features: [
      'Data Pipeline Engineering',
      'Real-time Data Processing',
      'Data Lake & Warehouse Design',
      'ETL/ELT Process Automation',
      'Data Quality Management',
      'Advanced Analytics Dashboards',
      'Data Governance Framework',
      'Cloud Data Architecture'
    ],
    benefits: [
      'Unified data ecosystem across all business units',
      '10x faster data processing and insights generation',
      'Real-time decision making capabilities',
      'Automated data quality monitoring',
      'Scalable cloud-native architecture',
      'Enhanced data security and compliance'
    ],
    technologies: [
      'Apache Airflow', 'Snowflake', 'AWS/Azure/GCP', 
      'Databricks', 'Apache Kafka', 'dbt', 'Tableau', 'Power BI'
    ],
    caseStudy: {
      client: 'Global Retail Chain',
      challenge: 'Fragmented data across 500+ stores preventing unified analytics and inventory optimization',
      solution: 'Built unified data platform with real-time processing, automated ETL pipelines, and predictive analytics dashboard',
      results: [
        'Unified data from 500+ locations in real-time',
        'Reduced inventory waste by 35%',
        'Improved demand forecasting accuracy to 94%',
        'Decreased data processing time from hours to minutes'
      ],
      metrics: [
        { label: 'Data Processing Speed', value: '50x faster', improvement: '5000% improvement' },
        { label: 'Inventory Turnover', value: '8.2x annually', improvement: '35% improvement' },
        { label: 'Forecast Accuracy', value: '94%', improvement: '28% improvement' },
        { label: 'Cost Reduction', value: '$3.2M annually', improvement: '22% cost savings' }
      ]
    },
    pricing: {
      startingPrice: '$15,000',
      model: 'fixed',
      includes: [
        'Data architecture design',
        'Pipeline development',
        'Dashboard creation',
        '3 months support'
      ]
    }
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence applications including machine learning models, natural language processing, and computer vision systems.',
    icon: 'brain',
    features: [
      'Machine Learning Model Development',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Recommendation Engines',
      'Predictive Analytics Models',
      'Sentiment Analysis Tools',
      'Chatbots & Virtual Assistants',
      'AI Model Optimization'
    ],
    benefits: [
      'Automated decision-making processes',
      'Enhanced customer experience through personalization',
      'Predictive insights for proactive business decisions',
      'Reduced operational costs through automation',
      'Improved accuracy in pattern recognition',
      'Scalable AI solutions that grow with your business'
    ],
    technologies: [
      'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI GPT',
      'Hugging Face', 'YOLO', 'OpenCV', 'Kubernetes'
    ],
    caseStudy: {
      client: 'Healthcare Network',
      challenge: 'Manual medical image analysis taking 4+ hours per case, leading to delayed diagnoses and increased costs',
      solution: 'Developed computer vision AI system for automated medical image analysis with 99.2% accuracy',
      results: [
        'Reduced analysis time from 4 hours to 5 minutes',
        'Achieved 99.2% diagnostic accuracy',
        'Processed 10,000+ images monthly',
        'Improved patient outcome scores by 25%'
      ],
      metrics: [
        { label: 'Analysis Speed', value: '5 minutes', improvement: '4800% faster' },
        { label: 'Diagnostic Accuracy', value: '99.2%', improvement: '12% improvement' },
        { label: 'Patient Satisfaction', value: '9.1/10', improvement: '25% improvement' },
        { label: 'Cost Savings', value: '$1.8M annually', improvement: '45% reduction' }
      ]
    },
    pricing: {
      startingPrice: '$25,000',
      model: 'fixed',
      includes: [
        'Custom AI model development',
        'Training and validation',
        'Integration support',
        '6 months maintenance'
      ]
    }
  },
  {
    id: 'ai-development',
    title: 'AI Development',
    description: 'End-to-end AI application development from concept to deployment, including custom software solutions and AI-powered platforms.',
    icon: 'code',
    features: [
      'Custom AI Application Development',
      'AI-Powered Web Applications',
      'Mobile AI Solutions',
      'API Development & Integration',
      'AI Platform Architecture',
      'Model Deployment & Scaling',
      'Performance Optimization',
      'Security & Compliance Integration'
    ],
    benefits: [
      'Tailored AI solutions for specific business needs',
      'Seamless integration with existing systems',
      'Scalable architecture for future growth',
      'Enhanced user experience with AI features',
      'Competitive advantage through innovation',
      'Faster time-to-market for AI initiatives'
    ],
    technologies: [
      'React', 'Next.js', 'Python', 'FastAPI', 'Docker',
      'AWS Lambda', 'MLFlow', 'Redis', 'PostgreSQL'
    ],
    caseStudy: {
      client: 'Manufacturing Company',
      challenge: 'Need for intelligent quality control system to reduce defects and improve production efficiency',
      solution: 'Built comprehensive AI-powered quality control application with real-time monitoring and automated decision making',
      results: [
        'Reduced product defects by 87%',
        'Increased production efficiency by 40%',
        'Automated 95% of quality control processes',
        'Saved $2.5M in annual quality costs'
      ],
      metrics: [
        { label: 'Defect Reduction', value: '87% fewer', improvement: '87% improvement' },
        { label: 'Production Efficiency', value: '40% increase', improvement: '40% improvement' },
        { label: 'Process Automation', value: '95% automated', improvement: '95% automation' },
        { label: 'Cost Savings', value: '$2.5M annually', improvement: '60% cost reduction' }
      ]
    },
    pricing: {
      startingPrice: '$35,000',
      model: 'fixed',
      includes: [
        'Full application development',
        'AI model integration',
        'Deployment & hosting setup',
        '1 year support & updates'
      ]
    }
  },
  {
    id: 'automation-services',
    title: 'Automation Services',
    description: 'Intelligent process automation solutions that streamline workflows, reduce manual tasks, and optimize business operations.',
    icon: 'cog',
    features: [
      'Robotic Process Automation (RPA)',
      'Intelligent Document Processing',
      'Workflow Automation',
      'Business Process Optimization',
      'Integration Automation',
      'Email & Communication Automation',
      'Data Entry Automation',
      'Compliance & Audit Automation'
    ],
    benefits: [
      '70% reduction in manual processing time',
      'Elimination of human errors in repetitive tasks',
      '24/7 automated operations',
      'Improved compliance and audit trails',
      'Cost savings through reduced labor needs',
      'Enhanced employee satisfaction by removing tedious work'
    ],
    technologies: [
      'UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate',
      'Zapier', 'Python Selenium', 'Apache Airflow'
    ],
    caseStudy: {
      client: 'Financial Services Firm',
      challenge: 'Manual loan processing taking 5-7 days per application with high error rates affecting customer satisfaction',
      solution: 'Implemented intelligent automation system for document processing, verification, and approval workflows',
      results: [
        'Reduced processing time from 7 days to 2 hours',
        'Achieved 99.8% accuracy in document processing',
        'Processed 50,000+ applications monthly',
        'Improved customer satisfaction score to 4.8/5'
      ],
      metrics: [
        { label: 'Processing Speed', value: '2 hours', improvement: '8400% faster' },
        { label: 'Accuracy Rate', value: '99.8%', improvement: '15% improvement' },
        { label: 'Monthly Volume', value: '50,000+ apps', improvement: '300% increase' },
        { label: 'Customer Satisfaction', value: '4.8/5', improvement: '35% improvement' }
      ]
    },
    pricing: {
      startingPrice: '$12,000',
      model: 'fixed',
      includes: [
        'Process analysis & design',
        'Automation development',
        'Testing & deployment',
        '4 months support'
      ]
    }
  }
];