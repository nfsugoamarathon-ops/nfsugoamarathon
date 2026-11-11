import React, { useState } from 'react';
import {
  ArrowLeft,
  User,
  CheckCircle,
  Clock,
  Download,
  Edit2,
  Save,
  QrCode,
  ShieldCheck,
  Calendar,
  MapPin,
  AlertCircle,
  FileText,
  Award,
  Phone,
  LogOut
} from 'lucide-react';
import { EVENT, CATEGORIES } from '../data/eventData';

export default function ParticipantDashboard({ onBackToHome }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState('overview'); // overview | edit | certificate
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sample participant data (synchronized with registration flow)
  const [participant, setParticipant] = useState({
    regId: 'ADMY-2026-8942',
    bibNumber: '1042',
    fullName: 'Rahul Sharma',
    category: '10k',
    categoryLabel: '10 KM Elite Run',
    dob: '1998-05-14',
    age: 28,
    gender: 'Male',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    emergencyName: 'Priya Sharma',
    emergencyPhone: '+91 98765 43211',
    bloodGroup: 'B+',
    tshirtSize: 'L',
    paymentStatus: 'PAID',
    paymentId: 'pay_NzY20934KLD',
    paymentDate: '2026-11-01',
    reportingTime: '5:00 – 5:30 AM',
    flagOff: '6:30 AM',
    bibCollectionStatus: 'Ready for pickup (4-5 Dec)'
  });

  const [editForm, setEditForm] = useState({
    emergencyName: participant.emergencyName,
    emergencyPhone: participant.emergencyPhone,
    bloodGroup: participant.bloodGroup,
    tshirtSize: participant.tshirtSize,
  });

  const handleSaveDetails = (e) => {
    e.preventDefault();
    setParticipant((prev) => ({
      ...prev,
      ...editForm,
    }));
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const printConfirmation = () => {
    window.print();
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#FFFCEB] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-[#DADBCF] p-8">
          <div className="text-center mb-6">
            <img src="/marathon-logo.png" alt="Marathon Logo" className="h-16 w-16 mx-auto mb-3" />
            <h2 className="font-serif italic text-2xl font-bold text-[#191A17]">Participant Portal</h2>
            <p className="text-xs text-[#686D66]">Login to view your registration status &amp; bib pass</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setIsLoggedIn(true);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-[#191A17] uppercase tracking-wider mb-1">
                Registration ID or Email
              </label>
              <input
                type="text"
                defaultValue="ADMY-2026-8942"
                required
                className="w-full border border-[#DADBCF] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1749D1]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#191A17] uppercase tracking-wider mb-1">
                WhatsApp / Mobile Number
              </label>
              <input
                type="tel"
                defaultValue="+91 98765 43210"
                required
                className="w-full border border-[#DADBCF] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1749D1]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1749D1] hover:bg-[#1340b8] text-white font-semibold py-3 rounded-xl transition-all shadow-md text-sm"
            >
              Access Dashboard
            </button>
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={onBackToHome}
                className="text-xs text-[#686D66] hover:text-[#191A17] underline"
              >
                ← Back to Marathon Website
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="participant-dashboard min-h-screen bg-[#FFFCEB] text-[#191A17]">
      {/* Top Bar */}
      <header className="bg-[#111A17] text-white border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Return to public site"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back to Main Website</span>
            </button>
            <div className="h-5 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <img src="/marathon-logo.png" alt="Logo" className="h-7 w-7 rounded-full object-contain" />
              <span className="font-serif italic text-sm text-[#FFC36A] hidden sm:inline">
                Adamya Dhāvanam 2026
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-[#1749D1]/40 border border-[#1749D1] text-[#93c5fd] px-2.5 py-1 rounded-full font-medium hidden sm:inline">
              Participant: {participant.fullName}
            </span>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 text-xs flex items-center gap-1"
            >
              <LogOut size={14} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="participant-tabs flex items-center gap-1.5 sm:gap-2 border-b border-[#DADBCF] mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none" style={{ WebkitOverflowScrolling: 'touch' }}>
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'overview'
                ? 'bg-[#1749D1] text-white shadow-sm'
                : 'text-[#686D66] hover:bg-white'
            }`}
          >
            <User size={15} />
            Registration &amp; e-Bib
          </button>
          <button
            onClick={() => setActiveTab('edit')}
            className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'edit'
                ? 'bg-[#1749D1] text-white shadow-sm'
                : 'text-[#686D66] hover:bg-white'
            }`}
          >
            <Edit2 size={15} />
            Update Permitted Details
          </button>
          <button
            onClick={() => setActiveTab('certificate')}
            className={`px-4 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === 'certificate'
                ? 'bg-[#1749D1] text-white shadow-sm'
                : 'text-[#686D66] hover:bg-white'
            }`}
          >
            <Award size={15} />
            Certificate of Participation
          </button>
        </div>

        {/* Tab 1: Overview & E-Bib Pass */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Status Hero Card */}
            <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DADBCF]">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <CheckCircle size={13} />
                      REGISTRATION CONFIRMED
                    </span>
                    <span className="bg-[#EEF2FF] text-[#1749D1] text-xs font-semibold px-2.5 py-1 rounded-full">
                      Payment Verified (UPI/Razorpay)
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-serif italic text-[#191A17] font-bold">
                    Hello, {participant.fullName}!
                  </h1>
                  <p className="text-sm text-[#686D66] mt-1">
                    Your bib number and race pack are locked in for the <strong className="text-[#191A17]">{participant.categoryLabel}</strong>.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={printConfirmation}
                    className="flex items-center gap-2 bg-[#191A17] hover:bg-black text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow"
                  >
                    <Download size={14} />
                    Download / Print Confirmation
                  </button>
                </div>
              </div>

              {/* Grid with Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
                <div>
                  <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Registration ID</span>
                  <span className="font-mono font-bold text-base text-[#191A17]">{participant.regId}</span>
                </div>
                <div>
                  <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Assigned Bib #</span>
                  <span className="font-mono font-black text-2xl text-[#1749D1]">#{participant.bibNumber}</span>
                </div>
                <div>
                  <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Race Category</span>
                  <span className="font-bold text-base text-[#191A17]">{participant.category.toUpperCase()}</span>
                </div>
                <div>
                  <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">T-Shirt Reserved</span>
                  <span className="font-bold text-base text-[#191A17]">Size: {participant.tshirtSize}</span>
                </div>
              </div>
            </div>

            {/* Two Column: Digital Runner Pass & Bib Collection Instructions */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Digital Runner Pass / E-Bib */}
              <div className="bg-[#111A17] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-white/10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#1749D1]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <img src="/marathon-logo.png" alt="Logo" className="h-9 w-9 rounded-full object-contain" />
                    <div>
                      <span className="text-[10px] tracking-widest text-[#FFC36A] uppercase font-semibold block">
                        NFSU Goa Marathon
                      </span>
                      <span className="font-serif italic text-sm text-white font-bold">
                        Official Runner Pass
                      </span>
                    </div>
                  </div>
                  <span className="text-xs bg-[#FFC36A] text-[#111A17] font-bold px-2.5 py-0.5 rounded-full">
                    6 DEC 2026
                  </span>
                </div>

                <div className="text-center py-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
                  <span className="text-xs text-white/50 tracking-widest uppercase block mb-1">Runner Bib</span>
                  <span className="text-5xl font-mono font-black text-white tracking-wider block">
                    {participant.bibNumber}
                  </span>
                  <span className="text-sm font-semibold text-[#FFC36A] mt-1 block">
                    {participant.categoryLabel}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/70 mb-6 bg-white/5 p-4 rounded-xl">
                  <div className="flex justify-between">
                    <span className="text-white/40">Participant:</span>
                    <span className="font-semibold text-white">{participant.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Reporting Time:</span>
                    <span className="text-white font-medium">{participant.reportingTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Flag-off Time:</span>
                    <span className="text-[#FFC36A] font-bold">{participant.flagOff}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">Start Venue:</span>
                    <span className="text-white">NFSU Goa Campus</span>
                  </div>
                </div>

                {/* QR Code representation */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="text-left">
                    <span className="text-[10px] text-white/40 block">SECURITY BARCODE</span>
                    <span className="font-mono text-xs text-white/80">{participant.regId}</span>
                  </div>
                  <div className="bg-white p-2 rounded-lg">
                    <QrCode size={40} className="text-[#111A17]" />
                  </div>
                </div>
              </div>

              {/* Bib Collection & Logistics */}
              <div className="bg-white border border-[#DADBCF] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#1749D1] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Calendar size={14} />
                    Bib Distribution Details
                  </div>
                  <h3 className="font-serif italic text-xl font-bold text-[#191A17] mb-3">
                    Collect Your Race Kit
                  </h3>
                  <p className="text-sm text-[#686D66] mb-4">
                    Your bib kit includes your official running bib, event dry-fit T-shirt, and race day instructions.
                  </p>

                  <div className="space-y-3 bg-[#FFFCEB] p-4 rounded-2xl border border-[#DADBCF] mb-6 text-xs text-[#191A17]">
                    <div className="flex items-start gap-2">
                      <Calendar size={14} className="text-[#1749D1] mt-0.5 shrink-0" />
                      <div>
                        <strong>Dates:</strong> 4th &amp; 5th December 2026
                        <div className="text-[#686D66]">4:00 PM to 8:00 PM</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin size={14} className="text-[#FFC36A] mt-0.5 shrink-0" />
                      <div>
                        <strong>Venue:</strong> NFSU Goa Campus, Canteen Area
                        <div className="text-[#686D66]">Carry original photo ID &amp; Registration ID</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <AlertCircle size={14} className="text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <strong>Mandatory:</strong> Bring Original Government ID (Aadhaar/College ID) &amp; Reg ID {participant.regId}.
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-[#686D66] space-y-1">
                    <p>• Bib cannot be collected on race morning after 6:00 AM.</p>
                    <p>• If someone else is collecting your bib, they must carry an authorization letter signed by you and your ID photocopy.</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#DADBCF] mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#686D66]">Need assistance?</span>
                  <a
                    href="https://wa.me/918788629231"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#1749D1] flex items-center gap-1.5 hover:underline"
                  >
                    <Phone size={13} /> Contact Support (+91 87886 29231)
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Edit Permitted Details */}
        {activeTab === 'edit' && (
          <div className="max-w-2xl mx-auto bg-white border border-[#DADBCF] rounded-2xl p-6 sm:p-8">
            <h2 className="font-serif italic text-2xl font-bold text-[#191A17] mb-2">
              Update Personal Details
            </h2>
            <p className="text-sm text-[#686D66] mb-6">
              As per marathon rules, category and name changes are locked. You may update emergency contact details, blood group, and t-shirt preference prior to kit printing.
            </p>

            {saveSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle size={15} />
                Your details have been updated successfully!
              </div>
            )}

            <form onSubmit={handleSaveDetails} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#191A17] uppercase tracking-wider mb-1">
                    Emergency Contact Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editForm.emergencyName}
                    onChange={(e) => setEditForm({ ...editForm, emergencyName: e.target.value })}
                    className="w-full border border-[#DADBCF] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1749D1]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#191A17] uppercase tracking-wider mb-1">
                    Emergency Contact Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={editForm.emergencyPhone}
                    onChange={(e) => setEditForm({ ...editForm, emergencyPhone: e.target.value })}
                    className="w-full border border-[#DADBCF] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1749D1]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#191A17] uppercase tracking-wider mb-1">
                    Blood Group
                  </label>
                  <select
                    value={editForm.bloodGroup}
                    onChange={(e) => setEditForm({ ...editForm, bloodGroup: e.target.value })}
                    className="w-full border border-[#DADBCF] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1749D1] bg-white"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#191A17] uppercase tracking-wider mb-1">
                    T-Shirt Size
                  </label>
                  <select
                    value={editForm.tshirtSize}
                    onChange={(e) => setEditForm({ ...editForm, tshirtSize: e.target.value })}
                    className="w-full border border-[#DADBCF] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1749D1] bg-white"
                  >
                    <option value="XS">XS (Chest 36")</option>
                    <option value="S">S (Chest 38")</option>
                    <option value="M">M (Chest 40")</option>
                    <option value="L">L (Chest 42")</option>
                    <option value="XL">XL (Chest 44")</option>
                    <option value="XXL">XXL (Chest 46")</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#FFFCEB] p-4 rounded-xl border border-[#DADBCF] text-xs text-[#686D66]">
                <p><strong>Note:</strong> To change your running category or transfer registration, contact Abhay on WhatsApp with proof of registration.</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#1749D1] hover:bg-[#1340b8] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-all shadow"
                >
                  <Save size={15} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 3: Certificate Preview & Download */}
        {activeTab === 'certificate' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white border border-[#DADBCF] rounded-3xl p-8 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#1749D1] font-bold block mb-1">
                    Official Timing &amp; Recognition
                  </span>
                  <h2 className="font-serif italic text-2xl font-bold text-[#191A17]">
                    Certificate of Participation
                  </h2>
                </div>
                <button
                  onClick={printConfirmation}
                  className="flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow"
                >
                  <Download size={14} /> Download Certificate (PDF)
                </button>
              </div>

              {/* Certificate Canvas / Mockup */}
              <div className="border-8 border-double border-[#DADBCF] p-8 rounded-2xl bg-[#FFFCEB] text-center relative overflow-hidden">
                <div className="absolute top-4 left-4 opacity-10">
                  <img src="/marathon-logo.png" alt="watermark" className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <img src="/marathon-logo.png" alt="Marathon Crest" className="h-16 w-16 mx-auto mb-2" />
                  <p className="text-[11px] uppercase tracking-widest text-[#686D66] font-semibold">
                    National Forensic Sciences University, Goa Campus
                  </p>
                  <h3 className="font-serif italic text-3xl font-bold text-[#191A17] mt-1 mb-3">
                    अदम्यधावनम् — Adamya Dhāvanam 2026
                  </h3>
                  <div className="w-24 h-0.5 bg-[#FFC36A] mx-auto mb-4" />

                  <p className="text-xs text-[#686D66] uppercase tracking-wider mb-2">This is proudly presented to</p>
                  <h4 className="text-2xl sm:text-3xl font-bold font-serif text-[#1749D1] mb-2 underline decoration-[#FFC36A] decoration-2 underline-offset-4">
                    {participant.fullName}
                  </h4>
                  <p className="text-xs text-[#686D66] max-w-md mx-auto leading-relaxed mb-6">
                    for successfully demonstrating endurance and indomitable spirit by participating in the{' '}
                    <strong>{participant.categoryLabel}</strong> (Bib #{participant.bibNumber}) at NFSU Goa Campus on 6th December 2026.
                  </p>

                  <div className="grid grid-cols-3 gap-4 border-t border-[#DADBCF] pt-4 max-w-sm mx-auto text-xs text-[#191A17]">
                    <div>
                      <span className="text-[10px] text-[#686D66] block">DATE</span>
                      <span className="font-semibold">06-Dec-2026</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#686D66] block">DISTANCE</span>
                      <span className="font-semibold">{participant.category.toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#686D66] block">STATUS</span>
                      <span className="font-semibold text-emerald-700">FINISHER</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-[#686D66] text-center mt-4">
                * Official finishing results will be updated here within 24 hours of race completion.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

