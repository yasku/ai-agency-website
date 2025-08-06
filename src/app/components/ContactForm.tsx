'use client'

import { useState, useTransition } from 'react';
import { ContactFormProps, ContactFormData, FormValidation, LoadingState } from '@/lib/types';
import { VALIDATION_RULES, SERVICE_OPTIONS } from '@/lib/constants';

export default function ContactForm({ onSubmit, initialData }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: initialData?.name || '',
    email: initialData?.email || '',
    company: initialData?.company || '',
    message: initialData?.message || '',
    serviceInterest: initialData?.serviceInterest || undefined
  });

  const [errors, setErrors] = useState<FormValidation[]>([]);
  const [submitState, setSubmitState] = useState<LoadingState>('idle');
  const [isPending, startTransition] = useTransition();

  // Form validation function
  const validateForm = (): FormValidation[] => {
    const newErrors: FormValidation[] = [];

    // Name validation
    if (formData.name.length < VALIDATION_RULES.NAME_MIN_LENGTH) {
      newErrors.push({
        field: 'name',
        message: `Name must be at least ${VALIDATION_RULES.NAME_MIN_LENGTH} characters long`
      });
    }

    if (formData.name.length > VALIDATION_RULES.NAME_MAX_LENGTH) {
      newErrors.push({
        field: 'name',
        message: `Name must be less than ${VALIDATION_RULES.NAME_MAX_LENGTH} characters`
      });
    }

    // Email validation
    if (!VALIDATION_RULES.EMAIL_PATTERN.test(formData.email)) {
      newErrors.push({
        field: 'email',
        message: 'Please enter a valid email address'
      });
    }

    // Message validation
    if (formData.message.length < VALIDATION_RULES.MESSAGE_MIN_LENGTH) {
      newErrors.push({
        field: 'message',
        message: `Message must be at least ${VALIDATION_RULES.MESSAGE_MIN_LENGTH} characters long`
      });
    }

    if (formData.message.length > VALIDATION_RULES.MESSAGE_MAX_LENGTH) {
      newErrors.push({
        field: 'message',
        message: `Message must be less than ${VALIDATION_RULES.MESSAGE_MAX_LENGTH} characters`
      });
    }

    return newErrors;
  };

  // Handle form submission with useTransition
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors([]);
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Use React 19's useTransition for smooth UX
    startTransition(async () => {
      try {
        setSubmitState('loading');
        
        if (onSubmit) {
          await onSubmit(formData);
          setSubmitState('success');
          
          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            company: '',
            message: '',
            serviceInterest: undefined
          });
        } else {
          // Fallback: create mailto link
          const subject = `AI Agency Inquiry${formData.serviceInterest ? ` - ${SERVICE_OPTIONS.find(opt => opt.value === formData.serviceInterest)?.label}` : ''}`;
          const body = `Name: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}Service Interest: ${formData.serviceInterest ? SERVICE_OPTIONS.find(opt => opt.value === formData.serviceInterest)?.label : 'General Inquiry'}\n\nMessage:\n${formData.message}`;
          
          const mailtoLink = `mailto:hello@aiagency.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoLink;
          setSubmitState('success');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitState('error');
      }
    });
  };

  // Handle input changes
  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear specific field error when user starts typing
    setErrors(prev => prev.filter(error => error.field !== field));
  };

  // Get error message for specific field
  const getFieldError = (field: keyof ContactFormData) => {
    return errors.find(error => error.field === field)?.message;
  };

  // Success message display
  if (submitState === 'success') {
    return (
      <div className="flex flex-col gap-6 p-8 rounded-lg border border-black/[.08] dark:border-white/[.145] max-w-2xl w-full text-center">
        <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <div className="w-6 h-6 rounded-full bg-green-500"></div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
          <p className="text-foreground/70">
            Thank you for your interest. Our team will get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setSubmitState('idle')}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] 
                   transition-colors flex items-center justify-center hover:bg-[#f2f2f2] 
                   dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-base h-12 px-8 mx-auto"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 p-8 rounded-lg border border-black/[.08] 
               dark:border-white/[.145] max-w-2xl w-full"
    >
      {/* Form Header */}
      <div className="text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-foreground/70">
          Ready to transform your business with AI? Let&apos;s discuss your needs.
        </p>
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 text-foreground bg-background 
                    focus:ring-2 focus:ring-foreground/20 transition-all outline-none
                    ${getFieldError('name') 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-black/[.08] dark:border-white/[.145]'
                    }`}
          placeholder="Your full name"
          required
        />
        {getFieldError('name') && (
          <p className="text-red-500 text-xs mt-1">{getFieldError('name')}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full rounded-lg border px-4 py-3 text-foreground bg-background 
                    focus:ring-2 focus:ring-foreground/20 transition-all outline-none
                    ${getFieldError('email') 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-black/[.08] dark:border-white/[.145]'
                    }`}
          placeholder="your.email@company.com"
          required
        />
        {getFieldError('email') && (
          <p className="text-red-500 text-xs mt-1">{getFieldError('email')}</p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company (Optional)
        </label>
        <input
          id="company"
          type="text"
          value={formData.company}
          onChange={(e) => handleInputChange('company', e.target.value)}
          className="w-full rounded-lg border border-black/[.08] dark:border-white/[.145] 
                   px-4 py-3 text-foreground bg-background 
                   focus:ring-2 focus:ring-foreground/20 transition-all outline-none"
          placeholder="Your company name"
        />
      </div>

      {/* Service Interest Field */}
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-medium mb-2">
          Service Interest (Optional)
        </label>
        <select
          id="serviceInterest"
          value={formData.serviceInterest || ''}
          onChange={(e) => handleInputChange('serviceInterest', e.target.value as ContactFormData['serviceInterest'])}
          className="w-full rounded-lg border border-black/[.08] dark:border-white/[.145] 
                   px-4 py-3 text-foreground bg-background 
                   focus:ring-2 focus:ring-foreground/20 transition-all outline-none"
        >
          <option value="">Select a service...</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          rows={4}
          className={`w-full rounded-lg border px-4 py-3 text-foreground bg-background 
                    focus:ring-2 focus:ring-foreground/20 transition-all outline-none resize-none
                    ${getFieldError('message') 
                      ? 'border-red-500 focus:ring-red-500/20' 
                      : 'border-black/[.08] dark:border-white/[.145]'
                    }`}
          placeholder="Tell us about your project, challenges, and how we can help..."
          required
        />
        <div className="flex justify-between items-center mt-1">
          {getFieldError('message') ? (
            <p className="text-red-500 text-xs">{getFieldError('message')}</p>
          ) : (
            <div></div>
          )}
          <p className="text-xs text-foreground/50">
            {formData.message.length}/{VALIDATION_RULES.MESSAGE_MAX_LENGTH}
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isPending || submitState === 'loading'}
        className={`rounded-full border border-solid border-transparent transition-all 
                  flex items-center justify-center gap-2 font-medium text-base h-12 px-8
                  ${isPending || submitState === 'loading'
                    ? 'bg-foreground/50 text-background/50 cursor-not-allowed'
                    : 'bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]'
                  }`}
      >
        {isPending || submitState === 'loading' ? (
          <>
            <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin"></div>
            Sending Message...
          </>
        ) : (
          'Send Message'
        )}
      </button>

      {/* Error State */}
      {submitState === 'error' && (
        <div className="p-4 rounded border border-red-500/20 bg-red-500/5">
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again or contact us directly at hello@aiagency.com
          </p>
        </div>
      )}
    </form>
  );
}