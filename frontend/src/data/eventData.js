// Event data - single source of truth matching docs/info.txt
export const EVENT = {
  name: 'Adamya Dhāvanam',
  nameDevanagari: 'अदम्यधावनम्',
  tagline: 'Dare to run. Run to dare.',
  organizer: 'NFSU Goa Campus',
  website: 'nfsugoamarathon.in',
  // Official Google Form registration URL
  googleFormUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  // Dedicated Google Form registration URL for Persons with Disabilities (PwD)
  pwdGoogleFormUrl: 'https://forms.gle/K4c6jexzm47kxjT3A',
  // Official Sponsorship Proposal PDF
  sponsorshipProposalPdf: '/sponsorship-proposal.pdf',
  // Official Google My Maps course route
  routeMapEmbedUrl: 'https://www.google.com/maps/d/embed?mid=1UtoKyhS5wSvuqg4CB5enqR6n07ZapQA',
  routeMapViewerUrl: 'https://www.google.com/maps/d/viewer?mid=1UtoKyhS5wSvuqg4CB5enqR6n07ZapQA&usp=sharing',
  date: '24 January 2027',
  dateISO: '2027-01-24',
  reportingTime: '5:00 – 5:30 AM',
  warmupTime: '6:00 AM',
  venue: 'NFSU Goa Campus',
  contact: {
    name: 'Abhay',
    phone: '+91 87886 29231',
    whatsapp: 'https://wa.me/918788629231',
    email: 'info@nfsugoamarathon.in',
  },
  social: {
    instagram: 'https://instagram.com/nfsugoamarathon',
    linkedin: 'https://linkedin.com/school/nfsu',
    youtube: 'https://youtube.com/@nfsu',
    twitter: 'https://x.com/nfsu_official',
  },
  bibCollection: {
    dates: 'To be Announced Soon!',
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
    inclusions: ['Finisher medal', 'Participation e-certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments'],
    fee: '₹400',
    cutoff: '2 hours',
    description: 'A spirited short run for the youngest hearts and our senior champions.',
    formUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
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
    inclusions: ['Finisher medal', 'Participation e-certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'Push your limits on a scenic Ponda course built for driven runners.',
    formUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
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
    inclusions: ['Finisher medal', 'Participation e-certificate', 'T-shirt', 'Podium Trophy', 'Water & refreshments'],
    fee: '₹750',
    cutoff: '2 hours',
    description: 'The marquee distance - a full test of endurance across the hills and avenues of Ponda, Goa.',
    formUrl: 'https://forms.gle/mJH5q4Rnm3N2k8Uv5',
  },
  {
    id: 'pwd',
    label: '3 KM',
    distance: '3 km',
    name: 'Inclusive Run',
    color: 'emerald',
    flagOff: '6:50 AM',
    eligibility: 'PwD',
    ageGroups: ['Open to all PwD'],
    inclusions: ['Finisher medal', 'Participation e-certificate', 'T-shirt', 'Volunteer assistance', 'Water & refreshments'],
    fee: 'FREE',
    cutoff: '2 hours',
    description: 'Dedicated inclusive race for Persons with Disabilities with volunteer support.',
    formUrl: 'https://forms.gle/K4c6jexzm47kxjT3A',
  },
];

export const SCHEDULE = [
  { time: '5:00 – 5:30 AM', event: 'Reporting & check-in at start line', type: 'info' },
  { time: '6:00 AM', event: 'Warm-up session', type: 'info' },
  { time: '6:30 AM', event: 'Flag-off - 10 KM Elite Run', type: 'race', category: '10k' },
  { time: '6:45 AM', event: 'Flag-off - 6 KM Challenge Run', type: 'race', category: '6k' },
  { time: '6:50 AM', event: 'Flag-off - 3 KM Fun Run & PwD Inclusive Run', type: 'race', category: '3k' },
  { time: 'Every 2 km', event: 'Water stations along route', type: 'support' },
  { time: 'Every 2 km', event: 'Medical desk (also at Start/Finish)', type: 'support' },
  { time: 'Within 24 h', event: 'Results published on website', type: 'info' },
];

export const FAQS = [
  {
    category: 'Registration',
    questions: [
      {
        q: 'How do I register?',
        a: 'Registrations are handled via our official Google Forms. For standard categories (3K, 6K, 10K), register at https://forms.gle/mJH5q4Rnm3N2k8Uv5. For Persons with Disabilities (PwD), register via the dedicated form at https://forms.gle/K4c6jexzm47kxjT3A.',
      },
      {
        q: 'Is there an age limit for each category?',
        a: 'Yes. 3K: age under 14, age 60+, and all Persons with Disabilities (PwD) participants. 6K and 10K: age 15–35 and 36–59. Age proof and PwD/UDID proof are verified at bib collection.',
      },
      {
        q: 'Can Persons with Disabilities (PwD) participate in the marathon?',
        a: 'Absolutely! Adamya Dhāvanam proudly hosts a dedicated 3 KM Inclusive Run for Persons with Disabilities (PwD) with 100% FREE registration (no fee). You can register directly using the official PwD registration form: https://forms.gle/K4c6jexzm47kxjT3A. Dedicated volunteer assistance, accessible resting areas, and medical support are arranged by the organising committee.',
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
        a: 'The fee is non-refundable and non-transferable. If the event is cancelled due to weather, government order, or force majeure, the fee will be carried forward to the next edition - no cash refund.',
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
        a: 'Yes - 2 hours for all categories.',
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

export const PROMINENT_PARTICIPANTS = [
  {
    id: 'so-junare',
    name: 'Prof. (Dr.) S. O. Junare',
    honorific: 'Prof. (Dr.)',
    designation: 'Vice-Chancellor (I/C)',
    organization: 'National Forensic Sciences University',
    image: '/ppd/so_junare.jpg',
    objectPosition: 'center',
    description:
      'Vice-Chancellor (In-Charge) of NFSU, providing visionary leadership to India\'s premier forensic sciences institution.',
  },
  {
    id: 'naveen-chaudhary',
    name: 'Prof. (Dr.) Naveen Chaudhary',
    honorific: 'Prof. (Dr.)',
    designation: 'Campus Director, NFSU Goa',
    organization: 'NFSU, Goa Campus',
    image: '/ppd/naveen_chaudhary.jpg',
    objectPosition: '50% 15%',
    description:
      'Campus Director of NFSU Goa and Dean of the School of Cyber Security & Digital Forensics at NFSU Gandhinagar — a pioneer in digital forensics education and research.',
  },
  {
    id: 'lokesh-chouhan',
    name: 'Dr. Lokesh Chouhan',
    honorific: 'Dr.',
    designation: 'Dean Academics & Professor',
    organization: 'NFSU, Goa Campus',
    image: '/ppd/lokesh_chouhan.jpg',
    objectPosition: 'center',
    description:
      'Dean Academics and Professor at the National Forensic Sciences University, Goa Campus — leading academic excellence and research in forensic sciences.',
  },

  {
    id: 'naveen-kumar',
    name: 'Shri. Naveen Kumar',
    honorific: 'Shri.',
    designation: 'Managing Director',
    organization: 'Goa Dairy',
    image: '/ppd/naveen_kumar_md.jpg',
    description:
      'Managing Director at Goa Dairy & Member Secretary, championing endurance, discipline, and community wellness.',
  },
  {
    id: 'gaurav-desai',
    name: 'Dr. Gaurav Desai',
    honorific: 'Dr.',
    credentials: 'BAMS, MD (Ayurveda)',
    specialization: 'Ayurvedic Toxicology',
    designation: 'Senior Faculty & Ayurvedic Doctor',
    organization: 'Gomantak University & Hospital, Goa',
    image: '/ppd/dr_gaurav_desai.jpg',
    description:
      'Senior faculty at Gomantak University & Hospital with an MD in Ayurvedic Toxicology from KLE University. Practicing in Panjim & Margao, dedicated to student mentorship and community health.',
  },
  {
    id: 'ajay-gaude',
    name: 'Shri. Ajay Gaude',
    honorific: 'Shri.',
    designation: 'Director of Sports & Youth Affairs',
    organization: 'Government of Goa',
    image: '/ppd/ajay_gaude.jpg',
    description:
      'Director of Sports & Youth Affairs, Government of Goa — championing grassroots fitness and youth participation across the state.',
  },
  {
    id: 'arun-desai',
    name: 'Shri. Arun Desai',
    honorific: 'Shri.',
    designation: 'IAS (Rtd.) & Air Veteran',
    organization: 'Government of India',
    image: '/ppd/arun_desai.jpg',
    objectFit: 'contain',
    objectPosition: 'center',
    description:
      'Retired IAS officer and distinguished Air Veteran, bringing decades of administrative leadership and service to the nation.',
  },
  {
    id: 'rakesh-yadav',
    name: 'Shri. Rakesh Yadav',
    honorific: 'Shri.',
    designation: 'Running & Marathon Enthusiast',
    organization: 'Severo Infracon LLP',
    image: '/ppd/rakesh_yadav.jpg',
    objectPosition: 'center 20%',
    description:
      'Passionate distance runner and marathon enthusiast representing Severo Infracon LLP, championing endurance, fitness, and community spirit at Adamya Dhāvanam 2026.',
  },
  {
    id: 'shreeja-naik',
    name: 'Shreeja Shailesh Naik',
    honorific: 'Kum.',
    designation: 'Young Athlete & Distance Runner',
    organization: 'Goa',
    image: '/ppd/shreeja_shailesh_naik.jpg',
    objectPosition: 'center 20%',
    description:
      'Accomplished young distance runner and multi-sport athlete from Goa, podium finisher in regional distance runs and national-level gymnastics medalist.',
  },
  {
    id: 'dharma-gaonkar',
    name: 'Shri. Dharma K. Gaonkar',
    honorific: 'Shri.',
    //designation: 'Round Forest Officer',
    //organization: 'Department of Forest, Govt. of Goa',
    image: '/ppd/dharma_gaonkar.jpg',
    objectPosition: 'center 20%',
    // description:
    //'Round Forest Officer with the Department of Forest, Government of Goa (Ponda), dedicated to forest conservation, environmental stewardship, and community wellness.',
  },
];

/**
 * Opens the Google Form registration link when configured, or scrolls to
 * `#contact` so runners can reach organizers while the link is finalized.
 * Accepts an optional category id ('pwd', '3k', etc.) or explicit URL.
 */
export function openRegistration(e, categoryOrUrl) {
  let targetUrl = EVENT.googleFormUrl;
  if (typeof categoryOrUrl === 'string') {
    if (categoryOrUrl.startsWith('http')) {
      targetUrl = categoryOrUrl;
    } else if (categoryOrUrl === 'pwd') {
      targetUrl = EVENT.pwdGoogleFormUrl || EVENT.googleFormUrl;
    } else {
      const cat = CATEGORIES.find((c) => c.id === categoryOrUrl);
      if (cat?.formUrl) {
        targetUrl = cat.formUrl;
      }
    }
  }

  if (targetUrl) {
    if (e?.currentTarget?.tagName === 'A') {
      return;
    }
    if (e?.preventDefault) e.preventDefault();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    return;
  }
  if (e?.preventDefault) e.preventDefault();
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
}


