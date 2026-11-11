import React, { useState } from 'react';
import {
  ArrowLeft,
  Users,
  CreditCard,
  Shirt,
  Calendar,
  Award,
  FileSpreadsheet,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
  Plus,
  Shield,
  Download,
  AlertTriangle,
  Megaphone,
  HeartHandshake
} from 'lucide-react';
import { CATEGORIES, EVENT } from '../data/eventData';

export default function AdminDashboard({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('overview'); // overview | participants | inventory | volunteers | sponsors | event
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedPaymentFilter, setSelectedPaymentFilter] = useState('ALL');

  // Realistic sample registrations
  const [participants, setParticipants] = useState([
    {
      id: 'ADMY-2026-8942',
      bib: '1042',
      name: 'Rahul Sharma',
      age: 28,
      gender: 'Male',
      category: '10k',
      tshirt: 'L',
      blood: 'B+',
      phone: '+91 98765 43210',
      email: 'rahul.sharma@example.com',
      paymentStatus: 'PAID',
      amount: '₹750',
      idProofStatus: 'VERIFIED',
      regDate: '2026-11-01',
    },
    {
      id: 'ADMY-2026-8943',
      bib: '6012',
      name: 'Ananya Deshmukh',
      age: 24,
      gender: 'Female',
      category: '6k',
      tshirt: 'M',
      blood: 'O+',
      phone: '+91 98221 45678',
      email: 'ananya.d@example.com',
      paymentStatus: 'PAID',
      amount: '₹750',
      idProofStatus: 'VERIFIED',
      regDate: '2026-11-02',
    },
    {
      id: 'ADMY-2026-8944',
      bib: '3008',
      name: 'Rohan Naik',
      age: 12,
      gender: 'Male',
      category: '3k',
      tshirt: 'S',
      blood: 'A+',
      phone: '+91 98450 11223',
      email: 'parent.rohan@example.com',
      paymentStatus: 'PAID',
      amount: '₹750',
      idProofStatus: 'PENDING_REVIEW', // minor requiring ID proof
      regDate: '2026-11-02',
    },
    {
      id: 'ADMY-2026-8945',
      bib: '1043',
      name: 'Vikramjit Singh',
      age: 42,
      gender: 'Male',
      category: '10k',
      tshirt: 'XL',
      blood: 'AB+',
      phone: '+91 97665 99887',
      email: 'vikram.singh@example.com',
      paymentStatus: 'PAID',
      amount: '₹750',
      idProofStatus: 'VERIFIED',
      regDate: '2026-11-03',
    },
    {
      id: 'ADMY-2026-8946',
      bib: '3009',
      name: 'Dr. Sharad Prabhu',
      age: 64,
      gender: 'Male',
      category: '3k',
      tshirt: 'L',
      blood: 'O-',
      phone: '+91 94220 33445',
      email: 'sharad.prabhu@example.com',
      paymentStatus: 'PAID',
      amount: '₹750',
      idProofStatus: 'VERIFIED',
      regDate: '2026-11-03',
    },
    {
      id: 'ADMY-2026-8947',
      bib: '6013',
      name: 'Sneha Fernandes',
      age: 29,
      gender: 'Female',
      category: '6k',
      tshirt: 'S',
      blood: 'B+',
      phone: '+91 88888 12345',
      email: 'sneha.f@example.com',
      paymentStatus: 'PENDING',
      amount: '₹750',
      idProofStatus: 'NOT_REQUIRED',
      regDate: '2026-11-04',
    },
  ]);

  // Inventory state
  const [inventory, setInventory] = useState({
    XS: { total: 100, allocated: 42 },
    S: { total: 250, allocated: 180 },
    M: { total: 400, allocated: 320 },
    L: { total: 350, allocated: 290 },
    XL: { total: 200, allocated: 145 },
    XXL: { total: 100, allocated: 62 },
  });

  // Volunteers state
  const [volunteers, setVolunteers] = useState([
    { name: 'Sameer Sawant', role: 'Route Marshal (Water Station 2K)', phone: '+91 98220 00111', status: 'CONFIRMED' },
    { name: 'Kavita Joshi', role: 'Medical Desk Lead (Start/Finish)', phone: '+91 98220 00222', status: 'CONFIRMED' },
    { name: 'Tanmay Gaitonde', role: 'Bib Kit Distribution Desk', phone: '+91 98220 00333', status: 'CONFIRMED' },
    { name: 'Pooja Hegde', role: 'Timekeeper & Finish Line Desk', phone: '+91 98220 00444', status: 'CONFIRMED' },
  ]);

  // Sponsors state
  const [sponsors, setSponsors] = useState([
    { name: 'State Bank of India', tier: 'Title Sponsor', contact: 'manager.panaji@sbi.co.in', status: 'In Discussion' },
    { name: 'Goa Tourism Development Corp', tier: 'Gold Partner', contact: 'events@gtdc.co.in', status: 'Confirmed' },
    { name: 'Bisleri Hydration', tier: 'Hydration Partner', contact: 'west.events@bisleri.co.in', status: 'Confirmed' },
  ]);

  // Announcements state
  const [broadcast, setBroadcast] = useState('Bib collection on 4th and 5th Dec, 4 PM - 8 PM at NFSU Goa Campus, Canteen Area.');

  // Filtering
  const filteredParticipants = participants.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.bib.includes(searchTerm) ||
      p.phone.includes(searchTerm);
    const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesPayment = selectedPaymentFilter === 'ALL' || p.paymentStatus === selectedPaymentFilter;
    return matchesSearch && matchesCategory && matchesPayment;
  });

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Reg ID', 'Bib', 'Name', 'Age', 'Gender', 'Category', 'T-Shirt', 'Blood', 'Phone', 'Email', 'Payment', 'Amount', 'Date'];
    const rows = filteredParticipants.map((p) => [
      p.id,
      p.bib,
      `"${p.name}"`,
      p.age,
      p.gender,
      p.category,
      p.tshirt,
      p.blood,
      p.phone,
      p.email,
      p.paymentStatus,
      p.amount,
      p.regDate,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Adamya_Dhavanam_Participants_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVerifyId = (id) => {
    setParticipants((prev) =>
      prev.map((p) => (p.id === id ? { ...p, idProofStatus: 'VERIFIED' } : p))
    );
  };

  return (
    <div className="admin-dashboard min-h-screen bg-[#FFFCEB] text-[#191A17]">
      {/* Header */}
      <header className="bg-[#111A17] text-white border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-1.5 text-xs font-medium"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Back to Public Site</span>
            </button>
            <div className="h-5 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-[#FFC36A]" />
              <span className="font-serif italic text-sm text-[#FFC36A] font-bold">
                Marathon Administration Console
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 px-2.5 py-1 rounded-full font-medium">
              Event: 06-DEC-2026
            </span>
            <span className="text-xs text-white/50 hidden md:inline">Admin: Abhay (+91 87886 29231)</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Navigation Tabs */}
        <div className="admin-tabs flex items-center gap-1.5 sm:gap-2 border-b border-[#DADBCF] mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-none" style={{ WebkitOverflowScrolling: 'touch' }}>
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: Users },
            { id: 'participants', label: 'Runner Management', icon: Users },
            { id: 'inventory', label: 'T-Shirt Inventory', icon: Shirt },
            { id: 'volunteers', label: 'Volunteers & Marshals', icon: HeartHandshake },
            { id: 'sponsors', label: 'Sponsors & Partners', icon: Award },
            { id: 'event', label: 'Event Controls & Broadcast', icon: Megaphone },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all flex items-center gap-2 whitespace-nowrap ${
                  active ? 'bg-[#1749D1] text-white shadow-sm font-semibold' : 'text-[#686D66] hover:bg-white'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="bg-white border border-[#DADBCF] rounded-2xl p-5 shadow-sm">
                <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Total Runners</span>
                <span className="text-3xl font-black text-[#191A17] block">1,039</span>
                <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">↑ 84 registered today</span>
              </div>

              <div className="bg-white border border-[#DADBCF] rounded-2xl p-5 shadow-sm">
                <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Total Fee Collected</span>
                <span className="text-3xl font-black text-[#1749D1] block">₹5,19,500</span>
                <span className="text-[11px] text-[#686D66] mt-1 block">Razorpay settlement active</span>
              </div>

              <div className="bg-white border border-[#DADBCF] rounded-2xl p-5 shadow-sm">
                <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Bibs Assigned</span>
                <span className="text-3xl font-black text-[#191A17] block">1,024</span>
                <span className="text-[11px] text-[#686D66] mt-1 block">Bib numbers verified</span>
              </div>

              <div className="bg-white border border-[#DADBCF] rounded-2xl p-5 shadow-sm">
                <span className="text-xs text-[#686D66] uppercase tracking-wider block mb-1">Pending ID Verification</span>
                <span className="text-3xl font-black text-amber-600 block">18</span>
                <span className="text-[11px] text-amber-700 font-medium mt-1 block">Minors under 18 requiring review</span>
              </div>
            </div>

            {/* Category Breakdown & Payment Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Category Breakdown */}
              <div className="md:col-span-2 bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm">
                <h3 className="font-serif italic text-lg font-bold text-[#191A17] mb-4">
                  Category-Wise Registrations
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>10 KM Elite Run (Flag-off 6:30 AM)</span>
                      <span>482 Runners (46%)</span>
                    </div>
                    <div className="w-full bg-[#EEF2FF] h-3 rounded-full overflow-hidden">
                      <div className="bg-[#1749D1] h-full rounded-full" style={{ width: '46%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>6 KM Challenge Run (Flag-off 6:45 AM)</span>
                      <span>365 Runners (35%)</span>
                    </div>
                    <div className="w-full bg-[#EEF2FF] h-3 rounded-full overflow-hidden">
                      <div className="bg-[#9B59C8] h-full rounded-full" style={{ width: '35%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span>3 KM Fun Run (Flag-off 6:50 AM)</span>
                      <span>192 Runners (19%)</span>
                    </div>
                    <div className="w-full bg-[#FFF7E6] h-3 rounded-full overflow-hidden">
                      <div className="bg-[#FFC36A] h-full rounded-full" style={{ width: '19%' }} />
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#DADBCF] mt-6 pt-4 flex flex-wrap items-center justify-between text-xs text-[#686D66]">
                  <span>Cut-off rule: 2 hours strictly applied to all categories</span>
                  <span>Results target: Within 24 hours of race finish</span>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-serif italic text-lg font-bold text-[#191A17] mb-4">
                    Payment Gateway (Razorpay)
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-[#DADBCF]">
                      <span className="text-[#686D66]">Successful Online (UPI/Cards):</span>
                      <span className="font-bold text-emerald-700">1,021</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#DADBCF]">
                      <span className="text-[#686D66]">Pending Reconciliations:</span>
                      <span className="font-bold text-amber-600">14</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#DADBCF]">
                      <span className="text-[#686D66]">Failed Transactions:</span>
                      <span className="font-bold text-red-600">4</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#DADBCF]">
                      <span className="text-[#686D66]">Duplicate Refunds Processed:</span>
                      <span className="font-bold text-[#191A17]">2 (₹1,000)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFCEB] p-3 rounded-xl border border-[#DADBCF] mt-4 text-[11px] text-[#686D66]">
                  <strong>Policy:</strong> Registration is non-refundable. Duplicate payments processed within 7–10 days.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Runner Management */}
        {activeTab === 'participants' && (
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="bg-white border border-[#DADBCF] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-1 items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 max-w-sm">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#686D66]" />
                  <input
                    type="text"
                    placeholder="Search by Name, Bib #, Reg ID, Phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-[#DADBCF] rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#1749D1]"
                  />
                </div>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-[#DADBCF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#1749D1] bg-white"
                >
                  <option value="ALL">All Categories</option>
                  <option value="10k">10 KM Elite</option>
                  <option value="6k">6 KM Challenge</option>
                  <option value="3k">3 KM Fun Run</option>
                </select>

                <select
                  value={selectedPaymentFilter}
                  onChange={(e) => setSelectedPaymentFilter(e.target.value)}
                  className="border border-[#DADBCF] rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#1749D1] bg-white"
                >
                  <option value="ALL">All Payments</option>
                  <option value="PAID">Paid</option>
                  <option value="PENDING">Pending</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={exportToCSV}
                  className="flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow"
                >
                  <FileSpreadsheet size={14} />
                  Export to CSV
                </button>
              </div>
            </div>

            {/* Participants Table */}
            <div className="bg-white border border-[#DADBCF] rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-[#111A17] text-white">
                      <th className="py-3 px-4 font-semibold">Bib #</th>
                      <th className="py-3 px-4 font-semibold">Reg ID</th>
                      <th className="py-3 px-4 font-semibold">Runner Name</th>
                      <th className="py-3 px-4 font-semibold">Category</th>
                      <th className="py-3 px-4 font-semibold">Age / Sex</th>
                      <th className="py-3 px-4 font-semibold">T-Shirt</th>
                      <th className="py-3 px-4 font-semibold">Contact</th>
                      <th className="py-3 px-4 font-semibold">Payment</th>
                      <th className="py-3 px-4 font-semibold">ID Proof</th>
                      <th className="py-3 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DADBCF]">
                    {filteredParticipants.map((p) => (
                      <tr key={p.id} className="hover:bg-[#FFFCEB] transition-colors">
                        <td className="py-3 px-4 font-mono font-bold text-[#1749D1]">#{p.bib}</td>
                        <td className="py-3 px-4 font-mono text-[#686D66]">{p.id}</td>
                        <td className="py-3 px-4 font-semibold text-[#191A17]">{p.name}</td>
                        <td className="py-3 px-4">
                          <span className="font-semibold px-2 py-0.5 rounded text-[10px] bg-[#EEF2FF] text-[#1749D1]">
                            {p.category.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#686D66]">
                          {p.age} y / {p.gender.charAt(0)}
                        </td>
                        <td className="py-3 px-4 font-medium">{p.tshirt}</td>
                        <td className="py-3 px-4 text-[#686D66]">
                          <div>{p.phone}</div>
                          <div className="text-[10px] text-gray-400">{p.email}</div>
                        </td>
                        <td className="py-3 px-4">
                          {p.paymentStatus === 'PAID' ? (
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full text-[10px]">
                              <CheckCircle2 size={11} /> PAID
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-full text-[10px]">
                              <Clock size={11} /> PENDING
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          {p.idProofStatus === 'VERIFIED' && (
                            <span className="text-emerald-700 text-[10px] font-medium">✓ Verified</span>
                          )}
                          {p.idProofStatus === 'PENDING_REVIEW' && (
                            <button
                              onClick={() => handleVerifyId(p.id)}
                              className="text-amber-800 bg-amber-100 hover:bg-amber-200 px-2 py-0.5 rounded text-[10px] font-semibold"
                            >
                              Verify ID Proof
                            </button>
                          )}
                          {p.idProofStatus === 'NOT_REQUIRED' && (
                            <span className="text-[#686D66] text-[10px]">Adult (Bib Check)</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={() => alert(`Participant Profile: ${p.name}\nEmergency: ${p.blood} Blood\nStatus: ${p.paymentStatus}`)}
                            className="text-[#1749D1] hover:underline font-medium text-[11px]"
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: T-Shirt Inventory */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif italic text-xl font-bold text-[#191A17] mb-2">
                Official Marathon Dry-Fit T-Shirt Inventory
              </h3>
              <p className="text-sm text-[#686D66] mb-6">
                Real-time tracking of runner size selections versus warehouse batch orders for kit distribution.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {Object.entries(inventory).map(([size, counts]) => {
                  const remaining = counts.total - counts.allocated;
                  const pct = Math.round((counts.allocated / counts.total) * 100);
                  return (
                    <div key={size} className="border border-[#DADBCF] rounded-2xl p-4 text-center bg-[#FFFCEB]">
                      <span className="font-black text-2xl text-[#191A17] block mb-1">{size}</span>
                      <div className="text-xs text-[#686D66] space-y-1 mb-3">
                        <div>Allocated: <strong>{counts.allocated}</strong></div>
                        <div>Total Stock: {counts.total}</div>
                        <div className={remaining < 20 ? 'text-red-600 font-bold' : 'text-emerald-700'}>
                          Left: {remaining}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${pct > 80 ? 'bg-amber-500' : 'bg-[#1749D1]'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-500 mt-1 block">{pct}% Claimed</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Volunteers */}
        {activeTab === 'volunteers' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-serif italic text-xl font-bold text-[#191A17]">
                    Volunteer &amp; Course Marshal Roster
                  </h3>
                  <p className="text-xs text-[#686D66] mt-1">
                    Deployment across Start/Finish line, Water Stations (every 2 km), and Medical Desks.
                  </p>
                </div>
                <button
                  onClick={() => alert('New volunteer registration modal')}
                  className="flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white px-3 py-2 rounded-xl text-xs font-semibold"
                >
                  <Plus size={14} /> Add Volunteer
                </button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {volunteers.map((vol, idx) => (
                  <div key={idx} className="border border-[#DADBCF] p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#191A17]">{vol.name}</h4>
                      <p className="text-xs text-[#1749D1] font-medium">{vol.role}</p>
                      <p className="text-[11px] text-[#686D66] mt-0.5">{vol.phone}</p>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      {vol.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Sponsors */}
        {activeTab === 'sponsors' && (
          <div className="space-y-6">
            <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-serif italic text-xl font-bold text-[#191A17]">
                    Sponsors &amp; Strategic Partners
                  </h3>
                  <p className="text-xs text-[#686D66] mt-1">
                    Track partnership packages, branding materials, and sponsor confirmations.
                  </p>
                </div>
                <button
                  onClick={() => alert('Add sponsor dialogue')}
                  className="flex items-center gap-1.5 bg-[#1749D1] hover:bg-[#1340b8] text-white px-3 py-2 rounded-xl text-xs font-semibold"
                >
                  <Plus size={14} /> Add Sponsor Lead
                </button>
              </div>

              <div className="space-y-3">
                {sponsors.map((sp, idx) => (
                  <div key={idx} className="border border-[#DADBCF] p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#191A17]">{sp.name}</h4>
                      <p className="text-xs text-[#686D66]">{sp.tier} · {sp.contact}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                      sp.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {sp.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: Event Controls */}
        {activeTab === 'event' && (
          <div className="max-w-3xl space-y-6">
            <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif italic text-xl font-bold text-[#191A17] mb-2">
                Emergency &amp; Broadcast Messaging
              </h3>
              <p className="text-xs text-[#686D66] mb-4">
                Update the official ticker announcement shown to all participants on website &amp; WhatsApp broadcast.
              </p>

              <textarea
                value={broadcast}
                onChange={(e) => setBroadcast(e.target.value)}
                rows={3}
                className="w-full border border-[#DADBCF] rounded-xl p-3 text-xs focus:ring-2 focus:ring-[#1749D1] focus:outline-none"
              />

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => alert('Broadcast notice updated successfully!')}
                  className="bg-[#1749D1] hover:bg-[#1340b8] text-white px-4 py-2 rounded-xl text-xs font-semibold"
                >
                  Publish Broadcast Notice
                </button>
              </div>
            </div>

            <div className="bg-white border border-[#DADBCF] rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif italic text-xl font-bold text-[#191A17] mb-2">
                Route Disclosure Status
              </h3>
              <p className="text-xs text-[#686D66] mb-4">
                Current state: <strong className="text-amber-700">"Route to be announced"</strong> (guardrail per organizers).
              </p>
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                <AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-600" />
                <span>
                  Per brief instructions, do not publish or fabricate course GPX until final clearance is obtained from Goa Police &amp; NFSU authorities.
                </span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

