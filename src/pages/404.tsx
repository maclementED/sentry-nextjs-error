import { IconChevronRight } from '@tabler/icons-react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

function NotFoundPage() {
  const { t } = useTranslation('404');

  return (
    <section className="wrapper min-h-screen flex items-center justify-center flex-col gap-8 text-center">
      <h1>{t("Hmm, something's gone wrong")}</h1>
      <h3 className="font-normal">404 | {t('Page not found')}</h3>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xl">
        <Link href="/">
          <div className="flex gap-1 items-center">
            {t('Home')} <IconChevronRight />
          </div>
        </Link>
        <Link href="/process">
          <div className="flex gap-1 items-center">
            {t('Process')} <IconChevronRight />
          </div>
        </Link>
        <Link href="/projects">
          <div className="flex gap-1 items-center">
            {t('Projects')} <IconChevronRight />
          </div>
        </Link>
        <Link href="/faq">
          <div className="flex gap-1 items-center">
            {t('FAQ')} <IconChevronRight />
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
