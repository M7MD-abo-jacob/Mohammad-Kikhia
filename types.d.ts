import { getDictionary } from '@/lib/getDictionary';

interface HomeProps {
  params: {
    locale: string;
  };
}

type Trans = Awaited<ReturnType<typeof getDictionary>>;
