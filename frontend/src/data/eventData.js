// Event data — single source of truth matching docs/info.txt
export const EVENT = {
  name: 'Adamya Dhāvanam',
  nameDevanagari: 'अदम्यधावनम्',
  tagline: 'Dare to run. Run to dare.',
  organizer: 'NFSU Goa Campus',
  website: 'nfsugoamarathon.in',
  // Official Google Form registration URL
  googleFormUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  // Official Sponsorship Proposal PDF
  sponsorshipProposalPdf: '/sponsorship-proposal.pdf',
  // Official Google My Maps course route
  routeMapEmbedUrl: 'https://www.google.com/maps/d/embed?mid=1UtoKyhS5wSvuqg4CB5enqR6n07ZapQA',
  routeMapViewerUrl: 'https://www.google.com/maps/d/viewer?mid=1UtoKyhS5wSvuqg4CB5enqR6n07ZapQA&usp=sharing',
  date: '6 December 2026',
  dateISO: '2026-12-06',
  reportingTime: '5:00 – 5:30 AM',
  warmupTime: '6:00 AM',
  venue: 'NFSU Goa Campus',
  contact: {
    name: 'Abhay',
    phone: '+91 87886 29231',
    whatsapp: 'https://wa.me/918788629231',
  },
  bibCollection: {
    dates: '4th & 5th December 2026',
    time: '4:00 PM – 8:00 PM',
    venue: 'NFSU Goa Campus, Canteen Area',
  },
};

export const CATEGORIES = [
  {
    id: '3k',
    label: '3 KM',
    distance: '3 km',
    name: 'Fun Run',
    color: 'marigold',
    flagOff: '6:50 AM',
    eligibility: 'Age 60+ and under 14',
    ageGroups: ['Under 14', '60 and above'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments', 'Result on website within 24h'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'A spirited short run for the youngest hearts and our senior champions.',
  },
  {
    id: '6k',
    label: '6 KM',
    distance: '6 km',
    name: 'Challenge Run',
    color: 'race-blue',
    flagOff: '6:45 AM',
    eligibility: 'Age 15–35 and 36–59',
    ageGroups: ['15–35', '36–59'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments', 'Result on website within 24h'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'Push your limits on a scenic Ponda course built for driven runners.',
  },
  {
    id: '10k',
    label: '10 KM',
    distance: '10 km',
    name: 'Elite Run',
    color: 'dawn-lilac',
    flagOff: '6:30 AM',
    eligibility: 'Age 15–35 and 36–59',
    ageGroups: ['15–35', '36–59'],
    inclusions: ['Finisher medal', 'Participation certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments', 'Result on website within 24h'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'The marquee distance — a full test of endurance across the hills and avenues of Ponda, Goa.',
  },
];

export const SCHEDULE = [
  { time: '5:00 – 5:30 AM', event: 'Reporting & check-in at start line', type: 'info' },
  { time: '6:00 AM', event: 'Warm-up session', type: 'info' },
  { time: '6:30 AM', event: 'Flag-off — 10 KM Elite Run', type: 'race', category: '10k' },
  { time: '6:45 AM', event: 'Flag-off — 6 KM Challenge Run', type: 'race', category: '6k' },
  { time: '6:50 AM', event: 'Flag-off — 3 KM Fun Run', type: 'race', category: '3k' },
  { time: 'Every 2 km', event: 'Water stations along route', type: 'support' },
  { time: 'Every 3 km', event: 'Medical desk (also at Start/Finish)', type: 'support' },
  { time: 'Within 24 h', event: 'Results published on website', type: 'info' },
];

export const FAQS = [
  {
    category: 'Registration',
    questions: [
      {
        q: 'How do I register?',
        a: 'Registrations are handled via our official Google Form. Select your category (3K / 6K / 10K), fill in your participant details, upload ID proof if required, and follow the instructions in the form.',
      },
      {
        q: 'Is there an age limit for each category?',
        a: 'Yes. 3K: age under 14 and age 60+. 6K and 10K: age 15–35 and 36–59. Age proof is verified at bib collection.',
      },
      {
        q: 'What documents does a participant under 18 need?',
        a: 'Participants under 18 must upload a valid ID proof (Aadhaar card or College ID) during registration. Bring the original to bib collection.',
      },
      {
        q: 'Can I change my category after registration?',
        a: 'Please contact the organizers on WhatsApp. Category changes are subject to availability and organizer approval.',
      },
    ],
  },
  {
    category: 'Payment & Refunds',
    questions: [
      {
        q: 'What payment methods are accepted?',
        a: 'UPI, Debit/Credit Cards, and Net Banking via Razorpay.',
      },
      {
        q: 'Is the registration fee refundable?',
        a: 'The fee is non-refundable and non-transferable. If the event is cancelled due to weather, government order, or force majeure, the fee will be carried forward to the next edition — no cash refund.',
      },
      {
        q: 'My payment was deducted but I did not receive a confirmation.',
        a: 'Wait 30 minutes and check your email and spam folder. If you still have not received confirmation, contact support on WhatsApp with a screenshot of your payment.',
      },
      {
        q: 'What if I paid twice by mistake?',
        a: 'Duplicate payments are refunded within 7–10 working days after verification.',
      },
    ],
  },
  {
    category: 'Bib Collection',
    questions: [
      {
        q: 'When and where do I collect my bib?',
        a: 'Bib collection is on 4th and 5th December 2026, 4:00 PM – 8:00 PM at NFSU Goa Campus, Canteen Area. Bring your Registration ID and an ID proof.',
      },
      {
        q: 'Can someone else collect my bib?',
        a: 'Only with an authorization letter and a copy of your ID. No exceptions.',
      },
      {
        q: 'Can I collect my bib on race morning?',
        a: 'No. Bib distribution closes at 6:00 AM on race day. Collect your bib during the designated dates.',
      },
    ],
  },
  {
    category: 'Race Day',
    questions: [
      {
        q: 'What should I bring on race day?',
        a: 'Wear your bib visibly on your chest. Bring your ID proof. Arrive by 5:30 AM for check-in. No bib means no official result or medal.',
      },
      {
        q: 'Is there a cut-off time?',
        a: 'Yes — 2 hours for all categories.',
      },
      {
        q: 'What support is available on the route?',
        a: 'Water stations every 2 km. Medical desks at the Start/Finish line and every 3 km.',
      },
      {
        q: 'When are results published?',
        a: 'Results are published on this website within 24 hours of the event.',
      },
    ],
  },
  {
    category: 'Medical & Safety',
    questions: [
      {
        q: 'Do I need a medical certificate?',
        a: 'No certificate is required, but by registering you confirm you are physically fit to participate. Participants with heart disease, asthma, high blood pressure, or diabetes must consult a doctor before registering and inform the organizers.',
      },
      {
        q: 'Can organizers stop a runner on the course?',
        a: 'Yes. Organizers reserve the right to stop any participant if the medical team finds them unfit during the race.',
      },
    ],
  },
  {
    category: 'Route',
    questions: [
      {
        q: 'Where does the race start and finish?',
        a: 'NFSU Goa Campus.',
      },
      {
        q: 'Is the route map available?',
        a: 'Yes! The official interactive course route map is available above on this page and can also be opened directly in Google Maps.',
      },
    ],
  },
];

/**
 * Opens the Google Form registration link when configured, or scrolls to
 * `#contact` so runners can reach organizers while the link is finalized.
 */
export function openRegistration(e) {
  if (EVENT.googleFormUrl) {
    if (e?.currentTarget?.tagName === 'A') {
      return;
    }
    if (e?.preventDefault) e.preventDefault();
    window.open(EVENT.googleFormUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  if (e?.preventDefault) e.preventDefault();
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}


