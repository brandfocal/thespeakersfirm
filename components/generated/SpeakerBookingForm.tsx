"use client";

import * as React from "react";
import { CheckCircle } from "lucide-react";

const SUB_HEADING_CLASS = "font-['Kontora',sans-serif] text-lg font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-xl md:text-2xl";

interface SpeakerBookingFormProps {
  speakerName: string;
  speakerRef: string;
}

export const SpeakerBookingForm = ({ speakerName, speakerRef }: SpeakerBookingFormProps) => {
  const [step, setStep] = React.useState(1);
  const [enquiryRef] = React.useState(() => `TSF-ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
  
  const [formData, setFormData] = React.useState({
    // Step 1
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    mobile: "",
    country: "South Africa",
    city: "",
    website: "",
    contactMethod: "Email",
    decisionMaker: "Yes",
    additionalContact: "",
    
    // Step 2
    speakerName: speakerName,
    speakerRef: speakerRef,
    engagementCategory: "Keynote speaker",
    expertise: "",
    alternativeRecommendations: "No",
    eventObjectives: "",
    audienceOutcomes: "",
    presentationStyle: "",
    duration: "",
    additionalActivities: "No",
    
    // Step 3
    eventName: "",
    eventType: "Conference",
    eventFormat: "In-person",
    eventDate: "",
    alternativeDate: "",
    times: "",
    techCheckTime: "",
    performanceTime: "",
    venue: "",
    eventCityCountry: "",
    audienceSize: "",
    audienceProfile: "",
    industry: "",
    classification: "Private",
    paidEvent: "No",
    recorded: "No",
    postEventUse: "No",
    mediaAttendance: "No",
    eventWebsite: "",
    intendedPlatform: "",
    proposedUse: "",
    territory: "",
    usagePeriod: "",
    
    // Step 4
    budgetRange: "",
    currency: "ZAR",
    budgetStatus: "Approved",
    quotationDeadline: "",
    decisionDate: "",
    
    // Step 5
    source: "Google or another search engine",
    sourceDetails: "",
    
    // Step 6
    ackComplete: false,
    ackPolicy: false,
    ackNoReserve: false,
    ackNoTender: false,
    ackConsent: false,
    marketingConsent: false
  });

  // Sync props to state if they change
  React.useEffect(() => {
    setFormData(prev => ({
      ...prev,
      speakerName,
      speakerRef
    }));
  }, [speakerName, speakerRef]);

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Sync currency with country selection
  React.useEffect(() => {
    let matchedCurrency = "USD";
    if (formData.country === "South Africa") matchedCurrency = "ZAR";
    else if (formData.country === "United Kingdom") matchedCurrency = "GBP";
    else if (formData.country === "Europe") matchedCurrency = "EUR";
    else if (formData.country === "Kenya") matchedCurrency = "KES";
    else if (formData.country === "Nigeria") matchedCurrency = "NGN";
    
    setFormData(prev => ({ ...prev, currency: matchedCurrency }));
  }, [formData.country]);

  const getBudgetRanges = () => {
    switch (formData.currency) {
      case "ZAR":
        return ["R50,000 - R100,000", "R100,000 - R150,000", "R150,000 - R200,000", "R200,000+"];
      case "GBP":
        return ["£3,000 - £6,000", "£6,000 - £10,000", "£10,000 - £15,000", "£15,000+"];
      case "EUR":
        return ["€4,000 - €8,000", "€8,000 - €12,000", "€12,000 - €16,000", "€16,000+"];
      case "KES":
        return ["KSh 500,000 - KSh 1,000,000", "KSh 1,000,000+"];
      case "NGN":
        return ["₦5,000,000 - ₦10,000,000", "₦10,000,000+"];
      default:
        return ["$5,000 - $10,000", "$10,000 - $15,000", "$15,000 - $20,000", "$20,000+"];
    }
  };

  const handleFieldChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
      if (!formData.organisation.trim()) newErrors.organisation = "Organisation is required";
      if (!formData.email.trim()) newErrors.email = "Email address is required";
      if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
    }
    
    if (currentStep === 2) {
      if (!formData.expertise.trim()) newErrors.expertise = "Topic or area of expertise is required";
      if (!formData.eventObjectives.trim()) newErrors.eventObjectives = "Event objectives are required";
    }
    
    if (currentStep === 3) {
      if (!formData.eventName.trim()) newErrors.eventName = "Event name is required";
      if (!formData.eventCityCountry.trim()) newErrors.eventCityCountry = "Event city & country are required";
      if (!formData.eventDate.trim()) newErrors.eventDate = "Proposed date is required";
      if (!formData.audienceSize.trim()) newErrors.audienceSize = "Expected audience size is required";
      if (!formData.audienceProfile.trim()) newErrors.audienceProfile = "Audience profile is required";
      if (!formData.industry.trim()) newErrors.industry = "Industry/sector is required";
      
      const requiresMediaConsent = formData.recorded === "Yes" || formData.postEventUse === "Yes";
      if (requiresMediaConsent) {
        if (!formData.intendedPlatform.trim()) newErrors.intendedPlatform = "Intended platform is required";
        if (!formData.proposedUse.trim()) newErrors.proposedUse = "Proposed use is required";
        if (!formData.territory.trim()) newErrors.territory = "Territory is required";
        if (!formData.usagePeriod.trim()) newErrors.usagePeriod = "Usage period is required";
      }
    }
    
    if (currentStep === 4) {
      if (!formData.budgetRange.trim()) newErrors.budgetRange = "Budget range is required";
    }
    
    if (currentStep === 5) {
      const needsDetails = ["Referral or recommendation", "Speaker or talent referral", "Other"].includes(formData.source);
      if (needsDetails && !formData.sourceDetails.trim()) {
        newErrors.sourceDetails = "Please specify source details";
      }
    }
    
    if (currentStep === 6) {
      if (!formData.ackComplete) newErrors.ackComplete = "Please confirm accurate details";
      if (!formData.ackPolicy) newErrors.ackPolicy = "Please accept policy terms";
      if (!formData.ackNoReserve) newErrors.ackNoReserve = "Please acknowledge booking terms";
      if (!formData.ackNoTender) newErrors.ackNoTender = "Please acknowledge tender restrictions";
      if (!formData.ackConsent) newErrors.ackConsent = "Please consent to data processing";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(6)) {
      setIsSubmitting(true);
      try {
        let utm_source = "";
        let utm_medium = "";
        let utm_campaign = "";
        let utm_term = "";
        let utm_content = "";
        let gclid = "";

        if (typeof window !== 'undefined') {
          const params = new URLSearchParams(window.location.search);
          utm_source = params.get('utm_source') || "";
          utm_medium = params.get('utm_medium') || "";
          utm_campaign = params.get('utm_campaign') || "";
          utm_term = params.get('utm_term') || "";
          utm_content = params.get('utm_content') || "";
          gclid = params.get('gclid') || "";
        }

        // Combine the 5 checked consents into one dynamic single text payload for field 79
        const combinedConsents = [
          `Confirm Details: Yes`,
          `Accept Booking/Confidentiality Policy: Yes`,
          `Acknowledge no reservation: Yes`,
          `Accept no tender representation: Yes`,
          `Consent to secure processing: Yes`
        ].join(" | ");

        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formId: 1, // Book A Speaker Form ID: 1
            values: {
              "input_25": formData.fullName,
              "input_5": formData.jobTitle,
              "input_4": formData.organisation,
              "input_26": formData.email,
              "input_9": formData.mobile,
              "input_27": formData.country,
              "input_46": formData.city,
              "input_47": formData.website,
              "input_48": formData.contactMethod,
              "input_49": formData.decisionMaker,
              "input_50": formData.additionalContact,
              "input_28": formData.speakerName,
              "input_45": formData.speakerRef,
              "input_30": formData.engagementCategory,
              "input_29": formData.expertise,
              "input_51": formData.alternativeRecommendations,
              "input_52": formData.duration,
              "input_53": formData.presentationStyle,
              "input_54": formData.additionalActivities,
              "input_55": formData.eventObjectives,
              "input_56": formData.audienceOutcomes,
              "input_10": formData.eventName,
              "input_57": formData.eventType,
              "input_58": formData.eventFormat,
              "input_31": formData.eventDate,
              "input_59": formData.alternativeDate,
              "input_60": formData.times,
              "input_61": formData.techCheckTime,
              "input_62": formData.performanceTime,
              "input_63": formData.venue,
              "input_32": formData.eventCityCountry,
              "input_33": formData.audienceSize,
              "input_34": formData.audienceProfile,
              "input_35": formData.industry,
              "input_64": formData.classification,
              "input_65": formData.paidEvent,
              "input_66": formData.recorded,
              "input_67": formData.postEventUse,
              "input_68": formData.mediaAttendance,
              "input_69": formData.eventWebsite,
              "input_70": formData.intendedPlatform,
              "input_71": formData.proposedUse,
              "input_72": formData.territory,
              "input_73": formData.usagePeriod,
              "input_40": formData.currency,
              "input_39": formData.budgetRange,
              "input_74": formData.budgetStatus,
              "input_75": formData.quotationDeadline,
              "input_76": formData.decisionDate,
              "input_77": formData.source,
              "input_78": formData.sourceDetails,
              "input_79": combinedConsents, // Combined Consents Paragraph Field ID: 79
              "input_84": formData.marketingConsent ? "Yes" : "No",
              "input_85": enquiryRef,
              "input_38": enquiryRef,
              "input_19": utm_source,
              "input_20": utm_medium,
              "input_21": utm_campaign,
              "input_22": utm_term,
              "input_23": utm_content,
              "input_24": gclid
            }
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const errData = await response.json().catch(() => ({}));
          console.error("Failed to submit speaker booking form", response.status, errData);
          setErrors({ submit: "There was a validation issue submitting your booking. Please review your fields." });
        }
      } catch (err) {
        console.error("Booking form submit error", err);
        setErrors({ submit: "A network error occurred. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/25 bg-[#0A0A0A] p-8 text-center text-white shadow-2xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e30e04]">
          <CheckCircle className="h-8 w-8 text-white" />
        </div>
        <h3 className={`${SUB_HEADING_CLASS} text-white`}>Enquiry Submitted Successfully</h3>
        <p className="mt-4 text-[#9A9A9A] text-sm leading-relaxed">
          Thank you for considering The Speakers Firm™.
        </p>
        <div className="my-6 rounded-xl bg-black p-4 border border-white/25">
          <p className="text-xs uppercase tracking-widest text-[#9A9A9A]">Reference Number</p>
          <p className="mt-1 text-lg font-mono font-bold text-[#e30e04]">{enquiryRef}</p>
        </div>
        <p className="text-[#9A9A9A] text-sm leading-relaxed text-left max-w-md mx-auto">
          A member of our team will contact you within one business day to assess availability, review your requirements and advise you on the next steps.
          <br /><br />
          <span className="text-xs text-[#FFFFFF]/70 italic">Please note that submitting an enquiry does not reserve or confirm the requested speaker. All bookings remain subject to availability, written confirmation and fulfilment of our commercial terms.</span>
        </p>
        <button 
          onClick={() => {
            setStep(1);
            setIsSubmitted(false);
            setFormData(prev => ({
              ...prev,
              fullName: "",
              email: "",
              mobile: "",
              organisation: "",
              eventName: "",
              eventDate: "",
              ackComplete: false,
              ackPolicy: false,
              ackNoReserve: false,
              ackNoTender: false,
              ackConsent: false
            }));
          }}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#e30e04] px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03]"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  const renderProgress = () => {
    return (
      <div className="mb-8 w-full border-b border-white/25 pb-6">
        <div className="flex justify-between items-center text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
          <span>Step {step} of 6</span>
          <span className="text-[#e30e04]">Progress</span>
        </div>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-[#e30e04] h-full transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
        <div className="grid grid-cols-6 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] mt-3 gap-1">
          <span className={step === 1 ? "text-white" : ""}>1. Contact</span>
          <span className={step === 2 ? "text-white" : ""}>2. Talent</span>
          <span className={step === 3 ? "text-white" : ""}>3. Event</span>
          <span className={step === 4 ? "text-white" : ""}>4. Budget</span>
          <span className={step === 5 ? "text-white" : ""}>5. Source</span>
          <span className={step === 6 ? "text-white" : ""}>6. Consent</span>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border border-white/25 bg-[#0A0A0A] p-6 text-white shadow-2xl md:p-8 contact-tabbed-panel">
      <div className="tabbed-contact-form w-full">
        {renderProgress()}
        
        <form onSubmit={handleFormSubmit} className="space-y-6 tabbed-contact-form__fields">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 1: Contact Information</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Full Name*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.fullName} 
                    onChange={e => handleFieldChange("fullName", e.target.value)} 
                  />
                  {errors.fullName && <p className="text-[#e30e04] text-xs mt-1">{errors.fullName}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Job Title*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.jobTitle} 
                    onChange={e => handleFieldChange("jobTitle", e.target.value)} 
                  />
                  {errors.jobTitle && <p className="text-[#e30e04] text-xs mt-1">{errors.jobTitle}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Organisation*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.organisation} 
                    onChange={e => handleFieldChange("organisation", e.target.value)} 
                  />
                  {errors.organisation && <p className="text-[#e30e04] text-xs mt-1">{errors.organisation}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Business Email Address*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="email" 
                    value={formData.email} 
                    onChange={e => handleFieldChange("email", e.target.value)} 
                  />
                  {errors.email && <p className="text-[#e30e04] text-xs mt-1">{errors.email}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Mobile Number*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="tel" 
                    value={formData.mobile} 
                    onChange={e => handleFieldChange("mobile", e.target.value)} 
                  />
                  {errors.mobile && <p className="text-[#e30e04] text-xs mt-1">{errors.mobile}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Country*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.country} 
                    onChange={e => handleFieldChange("country", e.target.value)}
                  >
                    <option value="South Africa">South Africa</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Europe">Europe</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.city} 
                    onChange={e => handleFieldChange("city", e.target.value)} 
                  />
                  {errors.city && <p className="text-[#e30e04] text-xs mt-1">{errors.city}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Organisation Website</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.website} 
                    onChange={e => handleFieldChange("website", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred Contact Method</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.contactMethod} 
                    onChange={e => handleFieldChange("contactMethod", e.target.value)}
                  >
                    <option value="Email">Email</option>
                    <option value="Telephone">Telephone</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Are you the final decision-maker?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.decisionMaker} 
                    onChange={e => handleFieldChange("decisionMaker", e.target.value)}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Additional decision-maker or booking contact</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.additionalContact} 
                    onChange={e => handleFieldChange("additionalContact", e.target.value)} 
                  />
                </label>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 2: Speaker or Talent Requirements</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaker Requested</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#1A1A1A] px-4 text-sm text-[#888] focus:outline-none cursor-not-allowed"
                    type="text" 
                    readOnly 
                    value={formData.speakerName} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Profile Reference</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#1A1A1A] px-4 text-sm text-[#888] focus:outline-none cursor-not-allowed"
                    type="text" 
                    readOnly 
                    value={formData.speakerRef} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Engagement Category*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.engagementCategory} 
                    onChange={e => handleFieldChange("engagementCategory", e.target.value)}
                  >
                    <option value="Keynote speaker">Keynote speaker</option>
                    <option value="Facilitator">Facilitator</option>
                    <option value="Moderator">Moderator</option>
                    <option value="Master of ceremonies">Master of ceremonies</option>
                    <option value="Panellist">Panellist</option>
                    <option value="Comedian">Comedian</option>
                    <option value="Celebrity">Celebrity</option>
                    <option value="Influencer">Influencer</option>
                    <option value="Performer">Performer</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Topic, stream or area of expertise*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. Ethical Leadership, Governance"
                    value={formData.expertise} 
                    onChange={e => handleFieldChange("expertise", e.target.value)} 
                  />
                  {errors.expertise && <p className="text-[#e30e04] text-xs mt-1">{errors.expertise}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Alternative recommendations?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.alternativeRecommendations} 
                    onChange={e => handleFieldChange("alternativeRecommendations", e.target.value)}
                  >
                    <option value="Yes">Yes, please propose alternatives if unavailable</option>
                    <option value="No">No, only {speakerName}</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Required duration of engagement</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. 60 Minutes, Half Day"
                    value={formData.duration} 
                    onChange={e => handleFieldChange("duration", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred presentation style</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. Interactive Keynote, Q&A"
                    value={formData.presentationStyle} 
                    onChange={e => handleFieldChange("presentationStyle", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Required for additional activities?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.additionalActivities} 
                    onChange={e => handleFieldChange("additionalActivities", e.target.value)}
                  >
                    <option value="Yes">Yes (panel, VIP, media, signing etc)</option>
                    <option value="No">No, keynote presentation only</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event objectives*</span>
                  <textarea 
                    className="min-h-[80px] w-full rounded-xl border border-white/25 bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.eventObjectives} 
                    onChange={e => handleFieldChange("eventObjectives", e.target.value)} 
                  />
                  {errors.eventObjectives && <p className="text-[#e30e04] text-xs mt-1">{errors.eventObjectives}</p>}
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Desired audience outcomes</span>
                  <textarea 
                    className="min-h-[80px] w-full rounded-xl border border-white/25 bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.audienceOutcomes} 
                    onChange={e => handleFieldChange("audienceOutcomes", e.target.value)} 
                  />
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 3: Event Information</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Name*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.eventName} 
                    onChange={e => handleFieldChange("eventName", e.target.value)} 
                  />
                  {errors.eventName && <p className="text-[#e30e04] text-xs mt-1">{errors.eventName}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Type*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.eventType} 
                    onChange={e => handleFieldChange("eventType", e.target.value)}
                  >
                    <option value="Conference">Conference</option>
                    <option value="Leadership summit">Leadership summit</option>
                    <option value="Corporate function">Corporate function</option>
                    <option value="Awards ceremony">Awards ceremony</option>
                    <option value="Strategy session">Strategy session</option>
                    <option value="Training programme">Training programme</option>
                    <option value="Employee engagement">Employee engagement</option>
                    <option value="Client event">Client event</option>
                    <option value="Media engagement">Media engagement</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Format*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.eventFormat} 
                    onChange={e => handleFieldChange("eventFormat", e.target.value)}
                  >
                    <option value="In-person">In-person</option>
                    <option value="Virtual">Virtual</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposed Event Date*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. 15 September 2026"
                    value={formData.eventDate} 
                    onChange={e => handleFieldChange("eventDate", e.target.value)} 
                  />
                  {errors.eventDate && <p className="text-[#e30e04] text-xs mt-1">{errors.eventDate}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Alternative Date</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.alternativeDate} 
                    onChange={e => handleFieldChange("alternativeDate", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Start and End Time</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. 09:00 - 17:00"
                    value={formData.times} 
                    onChange={e => handleFieldChange("times", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Arrival / Technical Check Time</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.techCheckTime} 
                    onChange={e => handleFieldChange("techCheckTime", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaking / Performance Time</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.performanceTime} 
                    onChange={e => handleFieldChange("performanceTime", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Venue Details</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. Sandton Convention Centre"
                    value={formData.venue} 
                    onChange={e => handleFieldChange("venue", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City and Country*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. Johannesburg, South Africa"
                    value={formData.eventCityCountry} 
                    onChange={e => handleFieldChange("eventCityCountry", e.target.value)} 
                  />
                  {errors.eventCityCountry && <p className="text-[#e30e04] text-xs mt-1">{errors.eventCityCountry}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Expected Audience Size*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. 250 people"
                    value={formData.audienceSize} 
                    onChange={e => handleFieldChange("audienceSize", e.target.value)} 
                  />
                  {errors.audienceSize && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceSize}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Audience Profile & Seniority*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. Executive Board, C-Suite Leaders"
                    value={formData.audienceProfile} 
                    onChange={e => handleFieldChange("audienceProfile", e.target.value)} 
                  />
                  {errors.audienceProfile && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceProfile}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Industry or Sector*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    placeholder="e.g. Financial Services"
                    value={formData.industry} 
                    onChange={e => handleFieldChange("industry", e.target.value)} 
                  />
                  {errors.industry && <p className="text-[#e30e04] text-xs mt-1">{errors.industry}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Classification</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.classification} 
                    onChange={e => handleFieldChange("classification", e.target.value)}
                  >
                    <option value="Public">Public (open registration)</option>
                    <option value="Private">Private (invite only)</option>
                    <option value="Internal">Internal (employees only)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Is this a paid/ticketed event?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.paidEvent} 
                    onChange={e => handleFieldChange("paidEvent", e.target.value)}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Will it be recorded/livestreamed?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.recorded} 
                    onChange={e => handleFieldChange("recorded", e.target.value)}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Will content be used post-event?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.postEventUse} 
                    onChange={e => handleFieldChange("postEventUse", e.target.value)}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Is media attendance planned?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.mediaAttendance} 
                    onChange={e => handleFieldChange("mediaAttendance", e.target.value)}
                  >
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event website / registration link</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.eventWebsite} 
                    onChange={e => handleFieldChange("eventWebsite", e.target.value)} 
                  />
                </label>

                {(formData.recorded === "Yes" || formData.postEventUse === "Yes") && (
                  <div className="col-span-1 sm:col-span-2 rounded-xl bg-black/30 border border-white/25 p-4 space-y-4 mt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#e30e04]">Media & Broadcast Rights Details</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Intended Platform*</span>
                        <input 
                          className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                          type="text" 
                          placeholder="e.g. YouTube, Internal Intranet"
                          value={formData.intendedPlatform} 
                          onChange={e => handleFieldChange("intendedPlatform", e.target.value)} 
                        />
                        {errors.intendedPlatform && <p className="text-[#e30e04] text-xs mt-1">{errors.intendedPlatform}</p>}
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposed Use*</span>
                        <input 
                          className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                          type="text" 
                          placeholder="e.g. Educational replay"
                          value={formData.proposedUse} 
                          onChange={e => handleFieldChange("proposedUse", e.target.value)} 
                        />
                        {errors.proposedUse && <p className="text-[#e30e04] text-xs mt-1">{errors.proposedUse}</p>}
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Territory*</span>
                        <input 
                          className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                          type="text" 
                          placeholder="e.g. South Africa, Global"
                          value={formData.territory} 
                          onChange={e => handleFieldChange("territory", e.target.value)} 
                        />
                        {errors.territory && <p className="text-[#e30e04] text-xs mt-1">{errors.territory}</p>}
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Usage Period*</span>
                        <input 
                          className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                          type="text" 
                          placeholder="e.g. 12 months"
                          value={formData.usagePeriod} 
                          onChange={e => handleFieldChange("usagePeriod", e.target.value)} 
                        />
                        {errors.usagePeriod && <p className="text-[#e30e04] text-xs mt-1">{errors.usagePeriod}</p>}
                      </label>
                    </div>
                    <p className="text-[10px] text-[#9A9A9A] leading-relaxed italic">Note: Recording, livestreaming, distribution, and content-usage rights require prior written approval and may attract additional fees.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 4: Budget and Commercial Information</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Currency*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.currency} 
                    onChange={e => handleFieldChange("currency", e.target.value)}
                  >
                    <option value="ZAR">ZAR (R)</option>
                    <option value="USD">USD ($)</option>
                    <option value="GBP">GBP (£)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="KES">KES (KSh)</option>
                    <option value="NGN">NGN (₦)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Speaker Budget Range*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.budgetRange} 
                    onChange={e => handleFieldChange("budgetRange", e.target.value)}
                  >
                    <option value="" disabled>Select range...</option>
                    {getBudgetRanges().map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.budgetRange && <p className="text-[#e30e04] text-xs mt-1">{errors.budgetRange}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Budget Status*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.budgetStatus} 
                    onChange={e => handleFieldChange("budgetStatus", e.target.value)}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Provisional">Provisional</option>
                    <option value="Under consideration">Under consideration</option>
                    <option value="Budget to be discussed">Budget to be discussed</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Proposal or Quotation Deadline</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="date" 
                    value={formData.quotationDeadline} 
                    onChange={e => handleFieldChange("quotationDeadline", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Booking Decision Date</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="date" 
                    value={formData.decisionDate} 
                    onChange={e => handleFieldChange("decisionDate", e.target.value)} 
                  />
                </label>
              </div>

              <div className="rounded-xl border border-white/25 bg-black/40 p-5 mt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#e30e04]">Quotation Notice</p>
                <p className="text-xs text-[#9A9A9A] leading-relaxed">
                  Unless expressly included in writing, all quotations exclude:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 text-xs text-[#9A9A9A] gap-2 pl-4 list-disc">
                  <li>VAT, where applicable</li>
                  <li>Technical riders and equipment</li>
                  <li>Production and staging requirements</li>
                  <li>Travel and flights</li>
                  <li>Accommodation</li>
                  <li>Ground transportation and transfers</li>
                  <li>Security, visas and permits</li>
                  <li>Recording, livestreaming and content-usage rights</li>
                  <li>Other agreed engagement-related expenses</li>
                </ul>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 5: How Did You Hear About Us?</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">How did you hear about The Speakers Firm™?</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.source} 
                    onChange={e => handleFieldChange("source", e.target.value)}
                  >
                    <option value="Google or another search engine">Google or another search engine</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                    <option value="YouTube">YouTube</option>
                    <option value="TikTok">TikTok</option>
                    <option value="Referral or recommendation">Referral or recommendation</option>
                    <option value="Previous client or booking">Previous client or booking</option>
                    <option value="Speaker or talent referral">Speaker or talent referral</option>
                    <option value="Conference or event">Conference or event</option>
                    <option value="Media appearance">Media appearance</option>
                    <option value="Email campaign or newsletter">Email campaign or newsletter</option>
                    <option value="The Speakers Firm™ team">The Speakers Firm™ team</option>
                    <option value="EmpowaWorx Group">EmpowaWorx Group</option>
                    <option value="Other">Other</option>
                  </select>
                </label>

                {["Referral or recommendation", "Speaker or talent referral", "Other"].includes(formData.source) && (
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Please provide details / person's name*</span>
                    <input 
                      className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                      type="text" 
                      value={formData.sourceDetails} 
                      onChange={e => handleFieldChange("sourceDetails", e.target.value)} 
                    />
                    {errors.sourceDetails && <p className="text-[#e30e04] text-xs mt-1">{errors.sourceDetails}</p>}
                  </label>
                )}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 6: Review, Policy and Consent</h4>
              
              <div className="rounded-xl border border-white/25 bg-black/40 p-5 space-y-4 max-h-[300px] overflow-y-auto text-xs text-[#9A9A9A] leading-relaxed">
                <h5 className="font-bold text-white uppercase text-sm">Booking, Tender, Payment and Confidentiality Policy</h5>
                <p><strong>1. Booking and Payment:</strong> The Speakers Firm™ requires full payment before the event. A booking may only be confirmed once payment has cleared or an authorised purchase order is accepted.</p>
                <p><strong>2. Availability and Confirmation:</strong> Availability cannot be guaranteed or reserved indefinitely. A booking becomes binding only once formal written confirmation is issued by The Speakers Firm™.</p>
                <p><strong>3. Announcements and Marketing:</strong> Clients may not market or represent the speaker as confirmed before receiving formal written confirmation.</p>
                <p><strong>4. Tender and Proposal Restrictions:</strong> Clients may not name or represent any talent in a tender or bid without prior written authorisation.</p>
                <p><strong>5. Recording and Content Rights:</strong> Photography, recording, livestreaming, and post-event content use require prior written approval and may attract additional fees.</p>
                <p><strong>6. Quotation Exclusions:</strong> Quotations exclude VAT, technical riders, travel, accommodation, ground transportation, security, visas, and permits.</p>
                <p><strong>7. Privacy and Confidentiality:</strong> Booking details will be treated as strictly confidential and processed in accordance with data-protection requirements.</p>
                <p><strong>8. No Automatic Agreement:</strong> A submitted booking form, quotation, or purchase order does not independently constitute a final engagement agreement.</p>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackComplete} 
                    onChange={e => handleFieldChange("ackComplete", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I confirm that the information provided is complete and accurate.*</span>
                </label>
                {errors.ackComplete && <p className="text-[#e30e04] text-xs pl-7">{errors.ackComplete}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackPolicy} 
                    onChange={e => handleFieldChange("ackPolicy", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I have read and accept The Speakers Firm™ Booking, Tender, Payment and Confidentiality Policy.*</span>
                </label>
                {errors.ackPolicy && <p className="text-[#e30e04] text-xs pl-7">{errors.ackPolicy}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackNoReserve} 
                    onChange={e => handleFieldChange("ackNoReserve", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I understand that submitting this enquiry does not reserve or confirm the requested speaker.*</span>
                </label>
                {errors.ackNoReserve && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoReserve}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackNoTender} 
                    onChange={e => handleFieldChange("ackNoTender", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I understand that I may not include or represent a speaker from The Speakers Firm™ in a tender, bid or proposal without prior written authorisation.*</span>
                </label>
                {errors.ackNoTender && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoTender}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackConsent} 
                    onChange={e => handleFieldChange("ackConsent", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I consent to the secure processing of my information for purposes related to this booking enquiry.*</span>
                </label>
                {errors.ackConsent && <p className="text-[#e30e04] text-xs pl-7">{errors.ackConsent}</p>}

                {/* Marketing consent radio choices (Yes/No) */}
                <div className="pt-3 border-t border-white/25 mt-3 flex flex-col gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A9A9A]">You can add me to The Speakers Firm mailing list*</span>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="radio" required name="marketingConsent" checked={formData.marketingConsent} onChange={() => handleFieldChange("marketingConsent", true)} className="h-4 w-4 text-[#e30e04] focus:ring-[#e30e04]" />
                      <span className="text-xs text-[#9A9A9A]">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="radio" required name="marketingConsent" checked={!formData.marketingConsent} onChange={() => handleFieldChange("marketingConsent", false)} className="h-4 w-4 text-[#e30e04] focus:ring-[#e30e04]" />
                      <span className="text-xs text-[#9A9A9A]">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs text-[#9A9A9A]">
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={prevStep}
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#9A9A9A] px-6 text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] transition-colors hover:border-white hover:text-white sm:text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </button>
              )}
            </div>
            
            <div>
              {step < 6 ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e30e04] px-7 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:w-auto sm:text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                </button>
              ) : (
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#e30e04] px-7 text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#c00c03] sm:w-auto sm:text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Enquiry"}
                </button>
              )}
            </div>
          </div>
          
          {errors.submit && <p className="text-[#e30e04] text-xs font-bold mt-4 text-center">{errors.submit}</p>}
        </form>
      </div>
    </div>
  );
};
