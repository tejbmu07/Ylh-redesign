import ThankYouClient from './ThankYouClient';

export default function EventThankYouPage({ searchParams }) {
  const participantName = searchParams?.name || 'Participant';
  return <ThankYouClient participantName={participantName} />;
}
