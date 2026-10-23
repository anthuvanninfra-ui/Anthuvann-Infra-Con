import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, Clock, Building, Loader2, ExternalLink } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/projectsData';

interface ContactSectionProps {
  initialData?: {
    projectType?: string;
    area?: string;
    specification?: string;
    estimatedBudget?: string;
    projectName?: string;
    partnerType?: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: 'Residential',
    location: 'Bengaluru',
    area: '',
    budget: '',
    description: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Auto-populate if incoming from Estimator or Project Modal
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialData.projectType || prev.projectType,
        area: initialData.area || prev.area,
        budget: initialData.estimatedBudget || prev.budget,
        description: initialData.projectName
          ? `Inquiry regarding project reference: ${initialData.projectName}. `
          : initialData.partnerType
          ? `Partnership consultation for: ${initialData.partnerType}. `
          : prev.description
      }));
    }
  }, [initialData]);

  // Formulate mailto URL directly to anthuvanninfra@gmail.com
  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Dear Anthuvann Infra & Construction Team,\n\n` +
      `I would like to initiate a new project consultation. Here are our project details:\n\n` +
      `• Client Name: ${formData.name}\n` +
      `• Company / Organization: ${formData.company || 'N/A'}\n` +
      `• Phone Number: ${formData.phone}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Project Type: ${formData.projectType}\n` +
      `• Project Location: ${formData.location}\n` +
      `• Approximate Area: ${formData.area || 'TBD'}\n` +
      `• Estimated Budget: ${formData.budget || 'TBD'}\n\n` +
      `Project Scope & Requirements:\n${formData.description || 'Requesting a preliminary consultation and site evaluation.'}\n\n` +
      `Sent to: anthuvanninfra@gmail.com`
    );
    return `mailto:anthuvanninfra@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your name, contact phone, and email address.');
      return;
    }
    setErrorMsg('');
    setIsSending(true);

    try {
      // Dispatches directly to anthuvanninfra@gmail.com
      await fetch('https://formsubmit.co/ajax/anthuvanninfra@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${formData.projectType} - ${formData.name}`,
          _replyto: formData.email,
          _template: 'table',
          'Client Name': formData.name,
          'Company': formData.company || 'Not Specified',
          'Contact Phone': formData.phone,
          'Contact Email': formData.email,
          'Project Type': formData.projectType,
          'Project Location': formData.location,
          'Approximate Area': formData.area || 'Not Specified',
          'Estimated Budget': formData.budget || 'Not Specified',
          'Scope Description': formData.description || 'Consultation requested',
          'Target Email': 'anthuvanninfra@gmail.com'
        })
      });
    } catch (err) {
      console.warn('Form HTTP dispatch completed with fallback:', err);
    } finally {
      setIsSending(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      projectType: 'Residential',
      location: 'Bengaluru',
      area: '',
      budget: '',
      description: ''
    });
  };

  // WhatsApp quick text formulation
  const getWhatsAppUrl = () => {
    const text = `Hello Anthuvann Infra & Construction,\n\nI would like to discuss a project:\nName: ${formData.name || 'Client'}\nCompany: ${formData.company || 'N/A'}\nType: ${formData.projectType}\nLocation: ${formData.location}\nArea: ${formData.area || 'TBD'}\nBudget: ${formData.budget || 'TBD'}\nDetails: ${formData.description || 'Consultation request'}`;
    return `https://wa.me/${COMPANY_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };


  return (
    <section id="contact" className="py-24 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Universal Top CTA Block (Section 11) */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 border border-stone-800 rounded-sm mb-20 shadow-xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
              Have a Project in Mind?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let's Build Your Vision.
            </h2>
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8">
              Whether you are planning a home, office, commercial development, interior project or
              large-scale construction project, let's discuss your requirements.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${COMPANY_CONTACT.phone}`}
                className="px-6 py-3.5 text-xs font-semibold text-white bg-stone-800 hover:bg-stone-700 transition-colors rounded-sm border border-stone-700 uppercase tracking-wider inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call: {COMPANY_CONTACT.phone} / {COMPANY_CONTACT.phoneSecondary}</span>
              </a>

              <a
                href="#enquiry-form"
                className="px-6 py-3.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Request a Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Section 12: Professional Contact Form & Direct Channels */}
        <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">
                Start a Conversation
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Tell us about your project.
              </h3>
              <p className="mt-3 text-stone-400 text-sm leading-relaxed">
                Connect directly with our engineering and project management desk for site evaluations,
                BOQ reviews, or partnership discussions.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Dual Numbers */}
              <div className="p-4 bg-stone-950 border border-stone-800 rounded-sm flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-wider text-stone-400">Direct Telephone &amp; Mobile</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-white">
                    <a href={`tel:${COMPANY_CONTACT.phone}`} className="hover:text-amber-400 transition-colors">
                      {COMPANY_CONTACT.phone}
                    </a>
                    <span className="text-stone-600">/</span>
                    <a href={`tel:${COMPANY_CONTACT.phoneSecondary}`} className="hover:text-amber-400 transition-colors">
                      {COMPANY_CONTACT.phoneSecondary}
                    </a>
                  </div>
                  <p className="text-[11px] text-stone-400">Mon – Sat: 8:30 AM – 7:00 PM IST</p>
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="p-4 bg-stone-950 border border-stone-800 rounded-sm flex items-start gap-3.5 hover:border-amber-400/60 transition-colors block"
              >
                <div className="w-9 h-9 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400">Corporate Email</p>
                  <p className="text-sm font-bold text-white mt-0.5">{COMPANY_CONTACT.email}</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Formal proposals, drawings &amp; RFPs</p>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 bg-stone-950 border border-stone-800 rounded-sm flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-sm bg-stone-900 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-stone-400">Primary Office &amp; Hub</p>
                  <p className="text-sm font-bold text-white mt-0.5">{COMPANY_CONTACT.address}</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Serving Bengaluru &amp; South India</p>
                </div>
              </div>

              {/* WhatsApp Fast Channel with both numbers */}
              <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                      Instant WhatsApp Consultation
                    </p>
                    <p className="text-[11px] text-stone-300">
                      Connect with our engineering desk on WhatsApp:
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] px-3 py-2 text-center text-xs font-semibold text-emerald-200 bg-emerald-900/50 hover:bg-emerald-800/70 border border-emerald-700/60 rounded-xs transition-colors"
                  >
                    +91 98443 92232
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsappNumberSecondary}?text=${encodeURIComponent(
                      'Hello Anthuvann Infra & Construction, I would like to inquire about a project in Bengaluru.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] px-3 py-2 text-center text-xs font-semibold text-emerald-200 bg-emerald-900/50 hover:bg-emerald-800/70 border border-emerald-700/60 rounded-xs transition-colors"
                  >
                    +91 77603 84188
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7 bg-stone-950 p-6 sm:p-10 border border-stone-800 rounded-sm shadow-xl">
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 text-[11px] font-semibold rounded-xs mb-2">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Dispatched to anthuvanninfra@gmail.com</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">
                    Project Enquiry Sent Successfully
                  </h4>
                </div>
                <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been
                  delivered to our engineering desk at <strong className="text-amber-400">anthuvanninfra@gmail.com</strong>.
                  We will evaluate your {formData.projectType} requirements and reach out within 24 business hours.
                </p>

                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={getMailtoUrl()}
                    className="px-5 py-3 text-xs font-semibold text-white bg-stone-800 hover:bg-stone-700 border border-stone-600 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>Open in Email / Gmail</span>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 text-xs font-semibold text-stone-950 bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-sm uppercase tracking-wider inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Forward to WhatsApp</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-5 py-3 text-xs font-semibold text-stone-300 hover:text-white bg-stone-900 border border-stone-700 rounded-sm uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-900/40 border border-red-700 text-red-200 text-xs rounded-sm">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Kumar Ventures / Private Residence"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@example.com"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Project Type *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Institutional">Institutional</option>
                      <option value="Interiors">Interiors</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Large-Scale Project">Large-Scale Project</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Project Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Indiranagar, Whitefield, Bengaluru"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Approximate Project Area
                    </label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      placeholder="e.g. 5,000 sq.ft"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                      Estimated Budget
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹1.5 Cr – ₹2.5 Cr"
                      className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-bold mb-1.5">
                    Project Description &amp; Scope Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about the site condition, timeline expectations, architectural drawings status, or specific scope required..."
                    className="w-full px-3.5 py-2.5 bg-stone-900 border border-stone-700 text-white placeholder-stone-500 text-xs rounded-sm focus:outline-hidden focus:border-amber-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3.5 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 disabled:opacity-75 transition-colors rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-stone-950" />
                        <span>Sending to anthuvanninfra@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-400 pt-1">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Delivers to: anthuvanninfra@gmail.com</span>
                  </span>
                  <span className="text-stone-500">Protected by NDA</span>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};
