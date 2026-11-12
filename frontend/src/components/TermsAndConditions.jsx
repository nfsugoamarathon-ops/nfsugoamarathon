export default function TermsAndConditions() {
  return (
    <section id="terms" className="bg-[#FFFCEB] py-20 border-t border-[#DADBCF] scroll-mt-16" aria-labelledby="terms-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="text-[#1749D1] text-xs font-semibold uppercase tracking-widest mb-4">Legal</p>
        <h2 id="terms-heading" className="font-serif italic text-3xl sm:text-4xl text-[#191A17] mb-8">Terms & Conditions</h2>

        <div className="space-y-8 text-sm text-[#686D66] leading-relaxed">
          <div>
            <h3 className="font-semibold text-[#191A17] text-base mb-2">Registration &amp; Payment</h3>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>The registration fee is non-refundable and non-transferable.</li>
              <li>If the event is cancelled due to weather, government order, or force majeure, the fee will be carried forward to the next edition. No cash refund will be issued.</li>
              <li>Duplicate payments will be refunded within 7–10 working days after verification.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#191A17] text-base mb-2">Health &amp; Medical Declaration</h3>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>By registering, you confirm you are physically fit to participate in the chosen category.</li>
              <li>Participants with heart disease, asthma, high blood pressure, or diabetes must consult a doctor before registering and inform the organizers.</li>
              <li>Organizers are not responsible for any pre-existing medical condition.</li>
              <li>Organizers reserve the right to stop any participant if the medical team finds them unfit during the race.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#191A17] text-base mb-2">Liability Waiver</h3>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>Participation is at your own risk.</li>
              <li>Organizers, sponsors, and volunteers will not be liable for any injury, loss, or death during or after the event, except in case of proven negligence.</li>
              <li>Participants agree to follow instructions of marshals, police, and the medical team.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#191A17] text-base mb-2">Code of Conduct</h3>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>No littering on the route. Use dustbins at water stations.</li>
              <li>No cheating, short-cutting the route, or using a vehicle. Disqualification if found.</li>
              <li>Bib must be worn visibly on the chest at all times. No bib = no official result or medal.</li>
              <li>Misbehaviour with volunteers or staff will lead to immediate disqualification.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#191A17] text-base mb-2">Photography &amp; Data</h3>
            <ul className="space-y-1.5 list-disc pl-4">
              <li>By registering, you agree that photos and videos taken during the event may be used by organizers for promotion on social media and this website.</li>
              <li>Your personal data will only be used for event communication and will not be shared with third parties.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

