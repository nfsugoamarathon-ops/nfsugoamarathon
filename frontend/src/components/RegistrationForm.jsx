import { useState, useEffect } from 'react';
import {
  ChevronRight,
  AlertCircle,
  CheckCircle,
  Loader2,
  Upload,
  CreditCard,
  QrCode,
  Smartphone,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Printer
} from 'lucide-react';
import { CATEGORIES, EVENT } from '../data/eventData';

const STEPS = ['Category', 'Details', 'Review', 'Payment'];

const T_SHIRT_SIZES = ['XS (36")', 'S (38")', 'M (40")', 'L (42")', 'XL (44")', 'XXL (46")'];
const BLOOD_GROUPS = ['A+', 'A−', 'B+', 'B−', 'AB+', 'AB−', 'O+', 'O−', 'Unknown'];
const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

function StepIndicator({ current }) {
  return (
    <nav aria-label="Registration steps" className="flex items-center justify-center gap-2 mb-10">
      {STEPS.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <div key={step} className="flex items-center gap-2">
            <div className={`flex items-center gap-2 ${active ? '' : done ? '' : 'opacity-40'}`}>
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  done
                    ? 'bg-[#1749D1] text-white'
                    : active
                    ? 'bg-[#191A17] text-white ring-2 ring-[#1749D1] ring-offset-2'
                    : 'bg-[#DADBCF] text-[#686D66]'
                }`}
                aria-current={active ? 'step' : undefined}
              >
                {done ? <CheckCircle size={14} /> : i + 1}
              </div>
              <span className={`hidden sm:block text-xs font-medium ${active ? 'text-[#191A17]' : 'text-[#686D66]'}`}>
                {step}
              </span>
            </div>
            {i < STEPS.length - 1 && <div className="w-8 h-px bg-[#DADBCF]" aria-hidden="true" />}
          </div>
        );
      })}
    </nav>
  );
}

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="text-red-600 text-xs mt-1 flex items-center gap-1" role="alert">
      <AlertCircle size={12} /> {msg}
    </p>
  );
}

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-[#191A17] mb-1">
      {children}
      {required && <span className="text-red-500 ml-0.5" aria-label="required">*</span>}
    </label>
  );
}

function Input({ id, type = 'text', value, onChange, placeholder, required, autoComplete, min, max, accept }) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      min={min}
      max={max}
      accept={accept}
      className="w-full border border-[#DADBCF] rounded-xl px-4 py-3 text-sm text-[#191A17] bg-white placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#1749D1] focus:border-transparent transition-all"
    />
  );
}

function Select({ id, value, onChange, children, required }) {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-[#DADBCF] rounded-xl px-4 py-3 text-sm text-[#191A17] bg-white focus:outline-none focus:ring-2 focus:ring-[#1749D1] focus:border-transparent transition-all appearance-none"
    >
      {children}
    </select>
  );
}

export default function RegistrationForm({ onOpenPortal }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    categoryId: '10k',
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    whatsapp: '',
    address: '',
    city: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    bloodGroup: '',
    tshirtSize: '',
    medicalCondition: '',
    idProof: null,
    paymentMethod: 'upi', // upi | card | netbanking
    agreeTerms: false,
    agreeHealth: false,
    agreePhoto: false,
  });
  const [errors, setErrors] = useState({});
  const [submitState, setSubmitState] = useState('idle'); // idle | loading | success | error
  const [generatedRegId, setGeneratedRegId] = useState('');
  const [generatedBib, setGeneratedBib] = useState('');

  const selectedCategory = CATEGORIES.find((c) => c.id === form.categoryId);

  // Listen for category selection from category cards
  useEffect(() => {
    const handler = (e) => {
      setForm((f) => ({ ...f, categoryId: e.detail }));
    };
    window.addEventListener('selectCategory', handler);
    return () => window.removeEventListener('selectCategory', handler);
  }, []);

  const getAge = () => {
    if (!form.dob) return null;
    const today = new Date('2026-12-06');
    const birth = new Date(form.dob);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const needsIdProof = () => {
    const age = getAge();
    return age !== null && age < 18;
  };

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: '' }));
  };

  const validate0 = () => {
    const e = {};
    if (!form.categoryId) e.categoryId = 'Please select a category.';
    return e;
  };

  const validate1 = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required.';
    if (!form.dob) e.dob = 'Date of birth is required.';
    if (!form.gender) e.gender = 'Gender is required.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address.';
    if (!form.whatsapp.match(/^\+?[0-9]{10,13}$/)) e.whatsapp = 'Enter a valid WhatsApp number.';
    if (!form.address.trim()) e.address = 'Address is required.';
    if (!form.city.trim()) e.city = 'City and state are required.';
    if (!form.emergencyContactName.trim()) e.emergencyContactName = 'Emergency contact name is required.';
    if (!form.emergencyContactPhone.match(/^\+?[0-9]{10,13}$/)) e.emergencyContactPhone = 'Enter a valid emergency contact number.';
    if (!form.tshirtSize) e.tshirtSize = 'T-shirt size is required.';
    if (needsIdProof() && !form.idProof) e.idProof = 'ID proof is required for participants under 18.';

    // Eligibility check reminder
    const age = getAge();
    if (age !== null) {
      if (form.categoryId === '3k' && age >= 14 && age < 60) {
        e.dob = 'Note: 3K is intended for ages under 14 and 60+. For age 15–59, consider 6K or 10K.';
      }
    }

    return e;
  };

  const validate2 = () => {
    const e = {};
    if (!form.agreeTerms) e.agreeTerms = 'You must accept the Terms & Conditions to proceed.';
    if (!form.agreeHealth) e.agreeHealth = 'You must confirm the health declaration to proceed.';
    if (!form.agreePhoto) e.agreePhoto = 'You must acknowledge the photography and data policy.';
    return e;
  };

  const handleNext = () => {
    let errs = {};
    if (step === 0) errs = validate0();
    if (step === 1) errs = validate1();
    if (step === 2) errs = validate2();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState('loading');

    // Simulate secure Razorpay processing
    try {
      await new Promise((r) => setTimeout(r, 1600));
      const regId = `ADMY-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const bib = form.categoryId === '10k' ? `10${Math.floor(20 + Math.random() * 80)}` : form.categoryId === '6k' ? `60${Math.floor(10 + Math.random() * 80)}` : `30${Math.floor(10 + Math.random() * 80)}`;
      setGeneratedRegId(regId);
      setGeneratedBib(bib);
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  if (submitState === 'success') {
    return (
      <section id="register" className="bg-white py-24 scroll-mt-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
              <CheckCircle size={32} className="text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
              Registration &amp; Payment Confirmed
            </span>
            <h2 className="font-serif italic text-3xl font-bold text-[#191A17] mt-3 mb-2">
              Welcome to Adamya Dhāvanam!
            </h2>
            <p className="text-sm text-[#686D66]">
              A confirmation email and SMS with your Registration ID have been dispatched to <strong>{form.email}</strong>.
            </p>
          </div>

          {/* Digital Confirmation Pass */}
          <div className="bg-[#111A17] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10 mb-6 relative overflow-hidden">
            <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
              <div>
                <span className="text-[10px] text-[#FFC36A] tracking-widest uppercase font-semibold block">
                  NFSU GOA MARATHON · 6 DEC 2026
                </span>
                <span className="font-serif italic text-lg text-white font-bold block">
                  Runner Confirmation Pass
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-white/50 block">BIB NUMBER</span>
                <span className="font-mono text-2xl font-black text-[#FFC36A]">#{generatedBib}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs mb-4">
              <div>
                <span className="text-white/40 block text-[10px]">RUNNER NAME</span>
                <span className="font-semibold text-white">{form.fullName}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">REGISTRATION ID</span>
                <span className="font-mono font-bold text-[#93c5fd]">{generatedRegId}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">CATEGORY</span>
                <span className="font-medium text-white">{selectedCategory?.label} ({selectedCategory?.name})</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">REPORTING TIME</span>
                <span className="text-white">5:00 – 5:30 AM (Flag-off {selectedCategory?.flagOff})</span>
              </div>
            </div>

            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
              <div>
                <span className="text-white/60 block text-[10px]">PAYMENT STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={12} /> Paid via Razorpay ({form.paymentMethod.toUpperCase()})
                </span>
              </div>
              <QrCode size={36} className="text-white/80" />
            </div>
          </div>

          {/* Bib Collection Card */}
          <div className="bg-[#FFFCEB] border border-[#DADBCF] rounded-2xl p-5 mb-6 text-xs text-[#191A17] space-y-2">
            <p className="font-semibold text-sm text-[#191A17] flex items-center gap-1.5">
              <span>📍</span> Bib Collection Instructions:
            </p>
            <p><strong>Dates &amp; Time:</strong> 4th and 5th December 2026, 4:00 PM – 8:00 PM</p>
            <p><strong>Venue:</strong> NFSU Goa Campus, Canteen Area.</p>
            <p><strong>Carry:</strong> Registration ID ({generatedRegId}) + Original ID Proof.</p>
            <p className="text-[#686D66] text-[11px] pt-1 border-t border-[#DADBCF]">
              * Note: No bib distribution on race morning after 6:00 AM.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.print()}
              className="flex-1 flex items-center justify-center gap-2 bg-[#191A17] hover:bg-black text-white text-xs font-semibold py-3 rounded-xl transition-all"
            >
              <Printer size={14} /> Print / Save PDF
            </button>
            <button
              onClick={() => onOpenPortal?.('participant')}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs font-semibold py-3 rounded-xl transition-all shadow"
            >
              <span>Go to Participant Dashboard</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="text-center mt-6 text-xs text-[#686D66]">
            Questions? Contact Abhay on WhatsApp at{' '}
            <a href="https://wa.me/918788629231" target="_blank" rel="noreferrer" className="text-[#1749D1] underline">
              +91 87886 29231
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="bg-white py-24 scroll-mt-16" aria-labelledby="register-heading">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-4">Registration</p>
          <h2 id="register-heading" className="font-serif italic text-4xl sm:text-5xl text-[#191A17] mb-4">
            Secure your spot.
          </h2>
          <p className="text-[#686D66] text-sm">
            Complete the 4 simple steps below. Your information is preserved as you navigate.
          </p>
        </div>

        <StepIndicator current={step} />

        <form onSubmit={handleSubmit} noValidate>
          {/* Step 0: Category */}
          {step === 0 && (
            <div>
              <h3 className="font-semibold text-[#191A17] text-lg mb-6">Step 1: Select your running category</h3>
              <div className="space-y-3 mb-8" role="radiogroup" aria-label="Race categories">
                {CATEGORIES.map((cat) => (
                  <label
                    key={cat.id}
                    className={`flex items-start gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      form.categoryId === cat.id
                        ? 'border-[#1749D1] bg-[#EEF2FF] shadow-sm'
                        : 'border-[#DADBCF] bg-white hover:border-[#1749D1]/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="categoryId"
                      value={cat.id}
                      checked={form.categoryId === cat.id}
                      onChange={set('categoryId')}
                      className="mt-1 accent-[#1749D1]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-[#191A17] text-base">
                          {cat.label} — {cat.name}
                        </span>
                        <span className="text-xs bg-[#111A17] text-white px-2.5 py-0.5 rounded-full font-medium">
                          Flag-off {cat.flagOff}
                        </span>
                      </div>
                      <p className="text-xs text-[#686D66] font-medium mb-1">
                        Eligibility: <strong className="text-[#191A17]">{cat.eligibility}</strong>
                      </p>
                      <p className="text-xs text-[#686D66]">{cat.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-[#191A17] font-semibold">
                        <span>Cut-off: 2 hours</span>
                        <span className="text-[#1749D1]">Fee: {cat.fee}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <FieldError msg={errors.categoryId} />
            </div>
          )}

          {/* Step 1: Personal details */}
          {step === 1 && (
            <div>
              <h3 className="font-semibold text-[#191A17] text-lg mb-2">Step 2: Participant Information</h3>
              <p className="text-xs text-[#686D66] mb-6">
                Please enter accurate information as per your Government ID. Age proof will be verified at bib distribution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Label htmlFor="fullName" required>Full Name</Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={set('fullName')}
                    placeholder="Full name as printed on ID proof"
                    autoComplete="name"
                    required
                  />
                  <FieldError msg={errors.fullName} />
                </div>

                <div>
                  <Label htmlFor="dob" required>Date of Birth</Label>
                  <Input
                    id="dob"
                    type="date"
                    value={form.dob}
                    onChange={set('dob')}
                    max="2026-12-06"
                    required
                  />
                  <FieldError msg={errors.dob} />
                  {form.dob && (
                    <p className="text-xs text-[#686D66] mt-1">
                      Age on race day: <strong className="text-[#191A17]">{getAge()} years</strong>
                      {needsIdProof() && ' (Age < 18: ID proof required below)'}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="gender" required>Gender</Label>
                  <Select id="gender" value={form.gender} onChange={set('gender')} required>
                    <option value="">Select gender</option>
                    {GENDERS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </Select>
                  <FieldError msg={errors.gender} />
                </div>

                <div>
                  <Label htmlFor="email" required>Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="name@example.com"
                    autoComplete="email"
                    required
                  />
                  <FieldError msg={errors.email} />
                </div>

                <div>
                  <Label htmlFor="whatsapp" required>WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={set('whatsapp')}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    required
                  />
                  <FieldError msg={errors.whatsapp} />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="address" required>Residential Address</Label>
                  <Input
                    id="address"
                    value={form.address}
                    onChange={set('address')}
                    placeholder="House/Flat number, Street, Locality"
                    autoComplete="street-address"
                    required
                  />
                  <FieldError msg={errors.address} />
                </div>

                <div>
                  <Label htmlFor="city" required>City &amp; State</Label>
                  <Input
                    id="city"
                    value={form.city}
                    onChange={set('city')}
                    placeholder="e.g. Panaji, Goa"
                    required
                  />
                  <FieldError msg={errors.city} />
                </div>

                <div>
                  <Label htmlFor="bloodGroup">Blood Group <span className="text-[#686D66] text-xs">(optional)</span></Label>
                  <Select id="bloodGroup" value={form.bloodGroup} onChange={set('bloodGroup')}>
                    <option value="">Select blood group</option>
                    {BLOOD_GROUPS.map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Label htmlFor="emergencyContactName" required>Emergency Contact Person</Label>
                  <Input
                    id="emergencyContactName"
                    value={form.emergencyContactName}
                    onChange={set('emergencyContactName')}
                    placeholder="Parent / Spouse / Relative name"
                    required
                  />
                  <FieldError msg={errors.emergencyContactName} />
                </div>

                <div>
                  <Label htmlFor="emergencyContactPhone" required>Emergency Contact Number</Label>
                  <Input
                    id="emergencyContactPhone"
                    type="tel"
                    value={form.emergencyContactPhone}
                    onChange={set('emergencyContactPhone')}
                    placeholder="+91 98765 43210"
                    required
                  />
                  <FieldError msg={errors.emergencyContactPhone} />
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="tshirtSize" required>Official Dry-Fit T-Shirt Size</Label>
                  <Select id="tshirtSize" value={form.tshirtSize} onChange={set('tshirtSize')} required>
                    <option value="">Select T-shirt size</option>
                    {T_SHIRT_SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </Select>
                  <FieldError msg={errors.tshirtSize} />
                  <p className="text-[11px] text-[#686D66] mt-1">
                    T-shirts are provided with your race bib at the kit distribution desk on 4–5 December.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="medicalCondition">
                    Medical Declaration / Pre-existing Conditions <span className="text-[#686D66] text-xs">(optional)</span>
                  </Label>
                  <textarea
                    id="medicalCondition"
                    value={form.medicalCondition}
                    onChange={set('medicalCondition')}
                    placeholder="E.g., Asthma, cardiac history, diabetes, hypertension, major allergies..."
                    rows={2}
                    className="w-full border border-[#DADBCF] rounded-xl px-4 py-3 text-sm text-[#191A17] bg-white placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#1749D1] focus:border-transparent transition-all resize-none"
                  />
                  <p className="text-xs text-[#686D66] mt-1">
                    Participants with health concerns must consult a physician prior to the event. Organizers maintain medical teams on course.
                  </p>
                </div>

                {needsIdProof() && (
                  <div className="sm:col-span-2 bg-[#FFFCEB] p-4 rounded-xl border border-[#DADBCF]">
                    <Label htmlFor="idProof" required>
                      Proof of Age Upload (Aadhaar Card / College Student ID)
                    </Label>
                    <div className="flex items-center gap-3 mt-2">
                      <label
                        htmlFor="idProof"
                        className="flex items-center gap-2 border-2 border-dashed border-[#1749D1]/50 hover:border-[#1749D1] rounded-xl px-4 py-3 text-xs text-[#1749D1] cursor-pointer transition-colors bg-white w-full font-semibold"
                      >
                        <Upload size={16} />
                        {form.idProof ? form.idProof.name : 'Select Aadhaar or College ID File (PDF / JPG / PNG)'}
                      </label>
                      <input
                        id="idProof"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setForm((f) => ({ ...f, idProof: e.target.files?.[0] || null }))}
                        className="sr-only"
                      />
                    </div>
                    <FieldError msg={errors.idProof} />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Review & Declarations */}
          {step === 2 && (
            <div>
              <h3 className="font-semibold text-[#191A17] text-lg mb-2">Step 3: Review &amp; Consent</h3>
              <p className="text-xs text-[#686D66] mb-6">
                Verify your details and review the race safety rules before proceeding to payment.
              </p>

              {/* Summary Card */}
              <div className="bg-[#FFFCEB] border border-[#DADBCF] rounded-2xl p-5 mb-6 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-[#DADBCF] mb-3">
                  <span className="font-bold text-[#191A17] text-base">{selectedCategory?.label} ({selectedCategory?.name})</span>
                  <button type="button" onClick={() => setStep(0)} className="text-xs text-[#1749D1] font-medium hover:underline">
                    Change Category
                  </button>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                  <div><span className="text-[#686D66]">Name:</span> <strong className="text-[#191A17] ml-1">{form.fullName}</strong></div>
                  <div><span className="text-[#686D66]">DOB / Age:</span> <span className="text-[#191A17] ml-1">{form.dob} ({getAge()} yrs)</span></div>
                  <div><span className="text-[#686D66]">Email:</span> <span className="text-[#191A17] ml-1">{form.email}</span></div>
                  <div><span className="text-[#686D66]">WhatsApp:</span> <span className="text-[#191A17] ml-1">{form.whatsapp}</span></div>
                  <div><span className="text-[#686D66]">T-Shirt Size:</span> <strong className="text-[#191A17] ml-1">{form.tshirtSize}</strong></div>
                  <div><span className="text-[#686D66]">Emergency:</span> <span className="text-[#191A17] ml-1">{form.emergencyContactName} ({form.emergencyContactPhone})</span></div>
                </dl>
              </div>

              {/* Legal Declarations */}
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer p-3 bg-white border border-[#DADBCF] rounded-xl hover:bg-[#FFFCEB] transition-colors">
                  <input
                    type="checkbox"
                    checked={form.agreeHealth}
                    onChange={set('agreeHealth')}
                    className="mt-1 accent-[#1749D1] w-4 h-4 shrink-0"
                  />
                  <span className="text-xs text-[#191A17] leading-relaxed">
                    <strong>Health Declaration:</strong> I confirm I am physically fit to participate in the race. I have consulted a physician if I have asthma, heart conditions, hypertension or diabetes. I agree organizers may withdraw any runner if deemed medically unfit.
                  </span>
                </label>
                <FieldError msg={errors.agreeHealth} />

                <label className="flex items-start gap-3 cursor-pointer p-3 bg-white border border-[#DADBCF] rounded-xl hover:bg-[#FFFCEB] transition-colors">
                  <input
                    type="checkbox"
                    checked={form.agreePhoto}
                    onChange={set('agreePhoto')}
                    className="mt-1 accent-[#1749D1] w-4 h-4 shrink-0"
                  />
                  <span className="text-xs text-[#191A17] leading-relaxed">
                    <strong>Photography &amp; Privacy:</strong> I consent to race photos and videos being used by organizers for event communication. My personal details will never be sold or shared with external parties.
                  </span>
                </label>
                <FieldError msg={errors.agreePhoto} />

                <label className="flex items-start gap-3 cursor-pointer p-3 bg-white border border-[#DADBCF] rounded-xl hover:bg-[#FFFCEB] transition-colors">
                  <input
                    type="checkbox"
                    checked={form.agreeTerms}
                    onChange={set('agreeTerms')}
                    className="mt-1 accent-[#1749D1] w-4 h-4 shrink-0"
                  />
                  <span className="text-xs text-[#191A17] leading-relaxed">
                    <strong>Terms &amp; Liability Waiver:</strong> I understand that registration fees are non-refundable and non-transferable. In case of cancellation due to weather/force majeure, entries carry forward to the next edition. I accept the liability waiver and code of conduct.
                  </span>
                </label>
                <FieldError msg={errors.agreeTerms} />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div>
              <h3 className="font-semibold text-[#191A17] text-lg mb-2">Step 4: Secure Payment Gateway</h3>
              <p className="text-xs text-[#686D66] mb-6">
                Integrated via Razorpay with support for UPI apps, Debit/Credit Cards, and Net Banking.
              </p>

              {/* Order Box */}
              <div className="bg-[#EEF2FF] border border-[#1749D1]/30 rounded-2xl p-5 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm text-[#191A17]">Adamya Dhāvanam 2026 Registration</span>
                  <span className="text-xs bg-[#1749D1] text-white px-2 py-0.5 rounded font-mono font-bold">
                    {selectedCategory?.label}
                  </span>
                </div>
                <div className="text-xs text-[#686D66] space-y-1 border-t border-[#1749D1]/20 pt-2">
                  <div className="flex justify-between">
                    <span>Runner: {form.fullName}</span>
                    <span>T-Shirt Size: {form.tshirtSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Race Bib, T-Shirt &amp; Finisher Medal:</span>
                    <span className="text-emerald-700 font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between text-[#191A17] font-bold pt-2 border-t border-[#1749D1]/20 text-sm">
                    <span>Total Amount Payable:</span>
                    <span>{selectedCategory?.fee}</span>
                  </div>
                </div>
              </div>

              {/* Select Payment Method */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#686D66] block">
                  Select Payment Method
                </span>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    form.paymentMethod === 'upi' ? 'border-[#1749D1] bg-white shadow-sm' : 'border-[#DADBCF] bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={form.paymentMethod === 'upi'}
                    onChange={set('paymentMethod')}
                    className="accent-[#1749D1]"
                  />
                  <Smartphone size={18} className="text-[#1749D1]" />
                  <div className="flex-1">
                    <span className="font-semibold text-xs text-[#191A17] block">UPI Instant (GPay / PhonePe / Paytm / BHIM)</span>
                    <span className="text-[11px] text-[#686D66]">Zero surcharge · Instant confirmation</span>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Fastest</span>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    form.paymentMethod === 'card' ? 'border-[#1749D1] bg-white shadow-sm' : 'border-[#DADBCF] bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={form.paymentMethod === 'card'}
                    onChange={set('paymentMethod')}
                    className="accent-[#1749D1]"
                  />
                  <CreditCard size={18} className="text-[#1749D1]" />
                  <div className="flex-1">
                    <span className="font-semibold text-xs text-[#191A17] block">Debit / Credit Cards</span>
                    <span className="text-[11px] text-[#686D66]">Visa, MasterCard, RuPay</span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    form.paymentMethod === 'netbanking' ? 'border-[#1749D1] bg-white shadow-sm' : 'border-[#DADBCF] bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={form.paymentMethod === 'netbanking'}
                    onChange={set('paymentMethod')}
                    className="accent-[#1749D1]"
                  />
                  <Building size={18} className="text-[#1749D1]" />
                  <div className="flex-1">
                    <span className="font-semibold text-xs text-[#191A17] block">Net Banking</span>
                    <span className="text-[11px] text-[#686D66]">All major Indian banks supported</span>
                  </div>
                </label>
              </div>

              {/* Safety notice from info.txt */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 mb-6 leading-relaxed">
                <strong>Important Payment Notice:</strong> If your payment is deducted but you do not receive a confirmation SMS/email within 5 minutes, please wait 30 minutes and check your spam folder. If still not received, contact support on WhatsApp with your payment screenshot. <em>Do not pay twice.</em>
              </div>
            </div>
          )}

          {/* Form Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#DADBCF]">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="text-xs text-[#686D66] hover:text-[#191A17] font-semibold transition-colors"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex items-center gap-2 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs font-bold px-6 py-3 rounded-full transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1749D1]"
              >
                Continue to Step {step + 2} <ChevronRight size={14} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="flex items-center gap-2 bg-[#1749D1] hover:bg-[#1340b8] disabled:bg-[#1749D1]/60 text-white text-xs font-bold px-7 py-3 rounded-full transition-all shadow-lg hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1749D1]"
              >
                {submitState === 'loading' ? (
                  <>
                    <Loader2 size={15} className="animate-spin" /> Verifying Razorpay Transaction…
                  </>
                ) : (
                  <>
                    <ShieldCheck size={15} /> Confirm &amp; Register Now
                  </>
                )}
              </button>
            )}
          </div>

          {submitState === 'error' && (
            <p className="text-red-600 text-xs text-center mt-4 flex items-center justify-center gap-2" role="alert">
              <AlertCircle size={15} />
              Something went wrong processing payment. Please contact Abhay (+91 87886 29231).
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
