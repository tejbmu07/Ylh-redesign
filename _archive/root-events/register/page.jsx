import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import PageWrapper from '@/components/PageWrapper';
import EventRegistrationForm from '@/components/EventRegistrationForm';

export default function EventRegisterPage() {
  return (
    <>
      <AnimatedNetworkBackground />
      <PageWrapper className="page-spacing container" style={{ maxWidth: '860px', paddingTop: '24px' }}>
        <EventRegistrationForm />
      </PageWrapper>
    </>
  );
}
