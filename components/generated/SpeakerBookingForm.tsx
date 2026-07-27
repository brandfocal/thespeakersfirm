"use client";

import * as React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

const SUB_HEADING_CLASS = "font-['Kontora',sans-serif] text-lg font-bold uppercase leading-[0.95] tracking-[-0.05em] sm:text-xl md:text-2xl";

interface SpeakerBookingFormProps {
  speakerName: string;
  speakerRef: string;
}

export const SpeakerBookingForm = ({ speakerName, speakerRef }: SpeakerBookingFormProps) => {
  const [step, setStep] = React.useState(1);
  const [enquiryRef] = React.useState(() => `TSF-ENQ-${Math.floor(100000 + Math.random() * 900000)}`);
  
  const [formData, setFormData] = React.useState({
    // Step 1: Contact Details
    fullName: "",
    jobTitle: "",
    organisation: "",
    email: "",
    mobile: "",
    countryCity: "",
    website: "",
    contactMethod: "Email",
    
    // Step 2: Speaker or Talent Requirements
    speakerName: speakerName,
    speakerRef: speakerRef,
    engagementCategory: "Keynote",
    expertise: "",
    eventObjectives: "",
    audienceOutcomes: "",
    presentationStyle: "Presentation / Keynote",
    duration: "45-60 Minutes",
    additionalRequirements: "None",
    alternativeRecommendations: "No",
    
    // Step 3: Event Details
    eventName: "",
    eventType: "Conference",
    eventFormat: "In-person",
    eventDate: "",
    times: "",
    venue: "",
    venueAddress: "",
    eventCityProvinceCountry: "",
    audienceSize: "",
    audienceProfile: "",
    industry: "",
    eventWebsite: "",
    hostingPlatform: "",
    accessRequirements: "",
    
    // Step 4: Consent & Review
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
  const [editStepIndex, setEditStepIndex] = React.useState<number | null>(null);

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
      if (!formData.email.trim()) newErrors.email = "Business email is required";
      if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
      if (!formData.countryCity.trim()) newErrors.countryCity = "Country and city are required";
    }
    
    if (currentStep === 2) {
      if (!formData.engagementCategory.trim()) newErrors.engagementCategory = "Engagement category is required";
      if (!formData.expertise.trim()) newErrors.expertise = "Topic or area of expertise is required";
      if (!formData.eventObjectives.trim()) newErrors.eventObjectives = "Event objectives are required";
    }
    
    if (currentStep === 3) {
      if (!formData.eventName.trim()) newErrors.eventName = "Event name is required";
      if (!formData.eventType.trim()) newErrors.eventType = "Event type is required";
      if (!formData.eventFormat.trim()) newErrors.eventFormat = "Event format is required";
      if (!formData.eventDate.trim()) newErrors.eventDate = "Event date is required";
      if (!formData.times.trim()) newErrors.times = "Start and end time are required";
      if (!formData.venue.trim()) newErrors.venue = "Venue name is required";
      if (!formData.venueAddress.trim()) newErrors.venueAddress = "Full venue address is required";
      if (!formData.eventCityProvinceCountry.trim()) newErrors.eventCityProvinceCountry = "City, province/state and country are required";
      if (!formData.audienceSize.trim()) newErrors.audienceSize = "Expected audience size is required";
      if (["virtual", "hybrid"].includes(formData.eventFormat.toLowerCase())) {
        if (!formData.hostingPlatform.trim()) newErrors.hostingPlatform = "Hosting platform is required";
      }
    }
    
    if (currentStep === 4) {
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
    if (validateStep(4)) {
      setIsSubmitting(true);
      try {
        // Build combined consents string
        const combinedConsents = [
          `Confirm Details: Yes`,
          `Accept Booking Policy: Yes`,
          `Acknowledge no reservation: Yes`,
          `Accept no tender representation: Yes`,
          `Consent to secure processing: Yes`
        ].join(" | ");

        // Build mock UTM parameters
        let utm_source = "";
        let utm_medium = "";
        let utm_campaign = "";

        if (typeof window !== "undefined") {
          const params = new URLSearchParams(window.location.search);
          utm_source = params.get("utm_source") || "";
          utm_medium = params.get("utm_medium") || "";
          utm_campaign = params.get("utm_campaign") || "";
        }

        const response = await fetch("/api/submit-form", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formId: 1,
            values: {
              "input_25": formData.fullName,
              "input_5": formData.jobTitle,
              "input_4": formData.organisation,
              "input_26": formData.email,
              "input_9": formData.mobile,
              "input_46": formData.countryCity,
              "input_47": formData.website,
              "input_48": formData.contactMethod,
              "input_28": formData.speakerName,
              "input_45": formData.speakerRef,
              "input_30": formData.engagementCategory,
              "input_29": formData.expertise,
              "input_51": formData.alternativeRecommendations,
              "input_52": formData.duration,
              "input_53": formData.presentationStyle,
              "input_54": formData.additionalRequirements,
              "input_55": formData.eventObjectives,
              "input_56": formData.audienceOutcomes,
              "input_10": formData.eventName,
              "input_57": formData.eventType,
              "input_58": formData.eventFormat,
              "input_31": formData.eventDate,
              "input_60": formData.times,
              "input_63": formData.venue,
              "input_86": formData.venueAddress,
              "input_32": formData.eventCityProvinceCountry,
              "input_33": formData.audienceSize,
              "input_34": formData.audienceProfile,
              "input_35": formData.industry,
              "input_69": formData.eventWebsite,
              "input_70": formData.hostingPlatform,
              "input_87": formData.accessRequirements,
              "input_79": combinedConsents,
              "input_84": formData.marketingConsent ? "Yes" : "No",
              "input_85": enquiryRef,
              "input_38": enquiryRef,
              "input_19": utm_source,
              "input_20": utm_medium,
              "input_21": utm_campaign
            }
          })
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const errData = await response.json().catch(() => ({}));
          console.error("Booking form submit failure", response.status, errData);
          setErrors({ submit: "There was a validation issue submitting your booking. Please review your fields." });
        }
      } catch (err) {
        console.error("Booking form submit network error", err);
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
          <span>Step {step} of 4</span>
          <span className="text-[#e30e04]">Progress</span>
        </div>
        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-[#e30e04] h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
        <div className="grid grid-cols-4 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-[#9A9A9A] mt-3 gap-1">
          <button type="button" onClick={() => setStep(1)} className={`text-left hover:text-white transition-colors ${step === 1 ? "text-white" : ""}`}>1. Contact Details</button>
          <button type="button" onClick={() => step > 1 ? setStep(2) : null} className={`text-left hover:text-white transition-colors ${step === 2 ? "text-white" : ""}`}>2. Requirements</button>
          <button type="button" onClick={() => step > 2 ? setStep(3) : null} className={`text-left hover:text-white transition-colors ${step === 3 ? "text-white" : ""}`}>3. Event Details</button>
          <button type="button" onClick={() => step > 3 ? setStep(4) : null} className={`text-left hover:text-white transition-colors ${step === 4 ? "text-white" : ""}`}>4. Review &amp; Consent</button>
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
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 1: Contact Details</h4>
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
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Business Email*</span>
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
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Country and City*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. South Africa, Johannesburg"
                    type="text" 
                    value={formData.countryCity} 
                    onChange={e => handleFieldChange("countryCity", e.target.value)} 
                  />
                  {errors.countryCity && <p className="text-[#e30e04] text-xs mt-1">{errors.countryCity}</p>}
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
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 2: Speaker or Talent Requirements</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred Speaker or Talent</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#1A1A1A] px-4 text-sm text-[#888] focus:outline-none cursor-not-allowed"
                    type="text" 
                    readOnly 
                    value={formData.speakerName} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Engagement Category*</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.engagementCategory} 
                    onChange={e => handleFieldChange("engagementCategory", e.target.value)}
                  >
                    <option value="Keynote">Keynote</option>
                    <option value="Facilitator">Facilitator</option>
                    <option value="Moderator">Moderator</option>
                    <option value="MC">MC</option>
                    <option value="Panellist">Panellist</option>
                    <option value="Comedian">Comedian</option>
                    <option value="Celebrity">Celebrity</option>
                    <option value="Influencer">Influencer</option>
                    <option value="Performer">Performer</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.engagementCategory && <p className="text-[#e30e04] text-xs mt-1">{errors.engagementCategory}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Topic or Area of Expertise*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. Ethical Leadership, AI Transformation"
                    type="text" 
                    value={formData.expertise} 
                    onChange={e => handleFieldChange("expertise", e.target.value)} 
                  />
                  {errors.expertise && <p className="text-[#e30e04] text-xs mt-1">{errors.expertise}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred Presentation Style</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.presentationStyle} 
                    onChange={e => handleFieldChange("presentationStyle", e.target.value)}
                  >
                    <option value="Presentation / Keynote">Presentation / Keynote</option>
                    <option value="Interactive Dialogue / Fireside">Interactive Dialogue / Fireside</option>
                    <option value="Formal Address">Formal Address</option>
                    <option value="Q&amp;A Session">Q&amp;A Session</option>
                    <option value="Virtual Live / Pre-record">Virtual Live / Pre-record</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Engagement Duration</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.duration} 
                    onChange={e => handleFieldChange("duration", e.target.value)}
                  >
                    <option value="45-60 Minutes">45-60 Minutes</option>
                    <option value="60-90 Minutes">60-90 Minutes</option>
                    <option value="Half Day Masterclass">Half Day Masterclass</option>
                    <option value="Full Day Strategy Retreat">Full Day Strategy Retreat</option>
                    <option value="Multi-day Residency">Multi-day Residency</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Additional Requirements</span>
                  <select 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    value={formData.additionalRequirements} 
                    onChange={e => handleFieldChange("additionalRequirements", e.target.value)}
                  >
                    <option value="None">None</option>
                    <option value="Panel Integration">Panel Integration</option>
                    <option value="Media Interview">Media Interview</option>
                    <option value="Meet-and-greet">Meet-and-greet</option>
                    <option value="Book signing">Book signing</option>
                    <option value="VIP Engagement">VIP Engagement</option>
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Objectives*</span>
                  <textarea 
                    className="w-full rounded-xl border border-white/25 bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    rows={3}
                    placeholder="What are the key goals and objectives for this segment?"
                    value={formData.eventObjectives} 
                    onChange={e => handleFieldChange("eventObjectives", e.target.value)} 
                  />
                  {errors.eventObjectives && <p className="text-[#e30e04] text-xs mt-1">{errors.eventObjectives}</p>}
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Desired Audience Outcomes</span>
                  <textarea 
                    className="w-full rounded-xl border border-white/25 bg-[#0A0A0A] p-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    rows={2}
                    placeholder="What should the audience feel, think or do differently after the session?"
                    value={formData.audienceOutcomes} 
                    onChange={e => handleFieldChange("audienceOutcomes", e.target.value)} 
                  />
                </label>

                <div className="sm:col-span-2 flex flex-col gap-2 pt-2">
                  <span className="text-xs font-bold uppercase text-[#9A9A9A]">Would you like alternative recommendations?</span>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="radio" checked={formData.alternativeRecommendations === "Yes"} onChange={() => handleFieldChange("alternativeRecommendations", "Yes")} className="h-4 w-4 text-[#e30e04]" />
                      <span className="text-xs text-[#9A9A9A]">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer select-none">
                      <input type="radio" checked={formData.alternativeRecommendations === "No"} onChange={() => handleFieldChange("alternativeRecommendations", "No")} className="h-4 w-4 text-[#e30e04]" />
                      <span className="text-xs text-[#9A9A9A]">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 3: Event Details</h4>
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
                    <option value="Boardroom Briefing">Boardroom Briefing</option>
                    <option value="Strategy Session">Strategy Session</option>
                    <option value="Panel Discussion">Panel Discussion</option>
                    <option value="Annual General Meeting">Annual General Meeting</option>
                    <option value="Awards Ceremony">Awards Ceremony</option>
                    <option value="Private Dinner">Private Dinner</option>
                    <option value="Public Forum">Public Forum</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.eventType && <p className="text-[#e30e04] text-xs mt-1">{errors.eventType}</p>}
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
                  {errors.eventFormat && <p className="text-[#e30e04] text-xs mt-1">{errors.eventFormat}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Date*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="date" 
                    value={formData.eventDate} 
                    onChange={e => handleFieldChange("eventDate", e.target.value)} 
                  />
                  {errors.eventDate && <p className="text-[#e30e04] text-xs mt-1">{errors.eventDate}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Start and End Time*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. 09:00 - 10:30 SAST"
                    type="text" 
                    value={formData.times} 
                    onChange={e => handleFieldChange("times", e.target.value)} 
                  />
                  {errors.times && <p className="text-[#e30e04] text-xs mt-1">{errors.times}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Venue Name*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. Sandton Convention Centre"
                    type="text" 
                    value={formData.venue} 
                    onChange={e => handleFieldChange("venue", e.target.value)} 
                  />
                  {errors.venue && <p className="text-[#e30e04] text-xs mt-1">{errors.venue}</p>}
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Full Venue Address*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.venueAddress} 
                    onChange={e => handleFieldChange("venueAddress", e.target.value)} 
                  />
                  {errors.venueAddress && <p className="text-[#e30e04] text-xs mt-1">{errors.venueAddress}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">City, Province/State and Country*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. Sandton, Gauteng, South Africa"
                    type="text" 
                    value={formData.eventCityProvinceCountry} 
                    onChange={e => handleFieldChange("eventCityProvinceCountry", e.target.value)} 
                  />
                  {errors.eventCityProvinceCountry && <p className="text-[#e30e04] text-xs mt-1">{errors.eventCityProvinceCountry}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Expected Audience Size*</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. 150"
                    type="text" 
                    value={formData.audienceSize} 
                    onChange={e => handleFieldChange("audienceSize", e.target.value)} 
                  />
                  {errors.audienceSize && <p className="text-[#e30e04] text-xs mt-1">{errors.audienceSize}</p>}
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Audience Profile</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. C-Suite, middle management, public"
                    type="text" 
                    value={formData.audienceProfile} 
                    onChange={e => handleFieldChange("audienceProfile", e.target.value)} 
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Industry or Sector</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    placeholder="e.g. Financial Services"
                    type="text" 
                    value={formData.industry} 
                    onChange={e => handleFieldChange("industry", e.target.value)} 
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Event Website or Registration Link</span>
                  <input 
                    className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                    type="text" 
                    value={formData.eventWebsite} 
                    onChange={e => handleFieldChange("eventWebsite", e.target.value)} 
                  />
                </label>

                {["virtual", "hybrid"].includes(formData.eventFormat.toLowerCase()) && (
                  <>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Preferred Hosting Platform*</span>
                      <input 
                        className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                        placeholder="e.g. MS Teams, Zoom Webinar"
                        type="text" 
                        value={formData.hostingPlatform} 
                        onChange={e => handleFieldChange("hostingPlatform", e.target.value)} 
                      />
                      {errors.hostingPlatform && <p className="text-[#e30e04] text-xs mt-1">{errors.hostingPlatform}</p>}
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase text-[#9A9A9A]">Platform Access Requirements</span>
                      <input 
                        className="min-h-12 w-full rounded-xl border border-white/25 bg-[#0A0A0A] px-4 text-sm text-white focus:border-[#e30e04] focus:outline-none"
                        placeholder="e.g. Moderator login, custom registration"
                        type="text" 
                        value={formData.accessRequirements} 
                        onChange={e => handleFieldChange("accessRequirements", e.target.value)} 
                      />
                    </label>
                  </>
                )}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white uppercase tracking-wider">Step 4: Review and Consent</h4>
              
              {/* Core Booking Policy Box */}
              <div className="rounded-xl border border-[#e30e04]/30 bg-black/40 p-5 space-y-4 text-xs text-[#9A9A9A] leading-relaxed">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#e30e04]" />
                  <h5 className="font-bold text-white uppercase text-sm">Core Booking &amp; Tender Policy</h5>
                </div>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Full payment is required before the engagement unless approved written terms apply.</li>
                  <li>A booking is confirmed only through formal written confirmation from The Speakers Firm™.</li>
                  <li>Availability cannot be guaranteed or reserved through an enquiry, quotation, invoice or purchase order alone.</li>
                  <li>Talent may not be publicly announced or marketed before written confirmation.</li>
                  <li>Talent names, profiles, images, credentials or fees may not be used in tenders or proposals without prior written authorisation.</li>
                  <li>Recording, livestreaming, rebroadcasting and post-event content use require written approval and may attract additional fees.</li>
                  <li>Client and commercial information will be handled confidentially and in accordance with applicable data-protection requirements.</li>
                </ul>
              </div>

              {/* Summary View */}
              <div className="rounded-xl border border-white/10 bg-[#111] p-5 space-y-4 text-xs">
                <h5 className="font-bold text-white uppercase text-sm border-b border-white/10 pb-2">Enquiry Summary</h5>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <span className="text-[#9A9A9A] uppercase tracking-wider block font-semibold mb-1">Contact</span>
                    <p className="text-white font-medium">{formData.fullName} ({formData.jobTitle})</p>
                    <p className="text-[#9A9A9A]">{formData.organisation} · {formData.email}</p>
                    <p className="text-[#9A9A9A]">{formData.mobile} · {formData.countryCity}</p>
                    <button type="button" onClick={() => setStep(1)} className="text-[#e30e04] hover:underline font-bold mt-2 uppercase tracking-widest text-[9px]">Edit Contact</button>
                  </div>
                  <div>
                    <span className="text-[#9A9A9A] uppercase tracking-wider block font-semibold mb-1">Talent &amp; Format</span>
                    <p className="text-white font-medium">{formData.speakerName}</p>
                    <p className="text-[#9A9A9A]">{formData.engagementCategory} · {formData.expertise}</p>
                    <p className="text-[#9A9A9A]">{formData.duration} · {formData.presentationStyle}</p>
                    <button type="button" onClick={() => setStep(2)} className="text-[#e30e04] hover:underline font-bold mt-2 uppercase tracking-widest text-[9px]">Edit Talent</button>
                  </div>
                  <div>
                    <span className="text-[#9A9A9A] uppercase tracking-wider block font-semibold mb-1">Event Details</span>
                    <p className="text-white font-medium">{formData.eventName} ({formData.eventFormat})</p>
                    <p className="text-[#9A9A9A]">{formData.eventDate} · {formData.times}</p>
                    <p className="text-[#9A9A9A]">{formData.venue} · {formData.eventCityProvinceCountry}</p>
                    <button type="button" onClick={() => setStep(3)} className="text-[#e30e04] hover:underline font-bold mt-2 uppercase tracking-widest text-[9px]">Edit Event</button>
                  </div>
                </div>
              </div>

              {/* Acknowledgements Checklist */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackComplete} 
                    onChange={e => handleFieldChange("ackComplete", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I confirm that the information supplied is accurate.*</span>
                </label>
                {errors.ackComplete && <p className="text-[#e30e04] text-xs pl-7">{errors.ackComplete}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackPolicy} 
                    onChange={e => handleFieldChange("ackPolicy", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I accept The Speakers Firm™ Booking, Tender, Payment and Confidentiality Policy.*</span>
                </label>
                {errors.ackPolicy && <p className="text-[#e30e04] text-xs pl-7">{errors.ackPolicy}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackNoReserve} 
                    onChange={e => handleFieldChange("ackNoReserve", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I understand that submitting an enquiry does not reserve or confirm the talent.*</span>
                </label>
                {errors.ackNoReserve && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoReserve}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackNoTender} 
                    onChange={e => handleFieldChange("ackNoTender", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I understand that prior written authorisation is required before including talent in any tender, bid or proposal.*</span>
                </label>
                {errors.ackNoTender && <p className="text-[#e30e04] text-xs pl-7">{errors.ackNoTender}</p>}

                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.ackConsent} 
                    onChange={e => handleFieldChange("ackConsent", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I consent to the secure processing of my information for this enquiry.*</span>
                </label>
                {errors.ackConsent && <p className="text-[#e30e04] text-xs pl-7">{errors.ackConsent}</p>}

                <label className="flex items-start gap-3 cursor-pointer pt-3 border-t border-white/10 mt-3">
                  <input 
                    type="checkbox" 
                    checked={formData.marketingConsent} 
                    onChange={e => handleFieldChange("marketingConsent", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-white/25 bg-[#0A0A0A] text-[#e30e04] focus:ring-[#e30e04]" 
                  />
                  <span className="text-xs text-[#9A9A9A]">I would like to receive relevant talent recommendations, industry insights and updates. (Optional)</span>
                </label>
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
              {step < 4 ? (
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
          
          {Object.keys(errors).length > 0 && (
            <div className="mt-6 rounded-xl border border-[#e30e04]/30 bg-[#e30e04]/10 p-4">
              <p className="text-sm font-bold text-[#e30e04] mb-2">Please correct the following errors:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-[#e30e04]">
                {Object.entries(errors)
                  .filter(([key]) => key !== "submit")
                  .map(([key, msg]) => (
                    <li key={key}>{msg}</li>
                  ))}
                {Object.keys(errors).length === 1 && errors.submit && (
                  <li>{errors.submit}</li>
                )}
              </ul>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
