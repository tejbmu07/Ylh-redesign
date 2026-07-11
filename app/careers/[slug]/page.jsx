import { EMPLOYERS } from '@/lib/site-data';
import EmployerDetailClient from './EmployerDetailClient';

export async function generateStaticParams() {
  return EMPLOYERS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const employer = EMPLOYERS.find((e) => e.slug === params.slug);
  return {
    title: employer ? `${employer.name} | Careers | Young Legal House` : 'Careers | Young Legal House',
  };
}

export default function EmployerDetailPage({ params }) {
  const employer = EMPLOYERS.find((e) => e.slug === params.slug);
  return <EmployerDetailClient employer={employer} />;
}
