'use client';

import ContactIcon from '@/app/components/about/ContactIcon';

const contactItems = [
  {
    href: 'https://github.com/Akinori99',
    src: '/img/github.png',
    alt: 'GitHub',
  },
  {
    href: 'mailto:akinori.work99@gmail.com',
    src: '/img/gmail.png',
    alt: 'Gmail',
  },
  {
    href: 'https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw',
    src: '/img/twitter.png',
    alt: 'Twitter',
  },
];

export default function ContactSection() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <div className="flex justify-center mt-8 space-x-4">
        {contactItems.map((item) => (
          <ContactIcon
            key={item.alt}
            href={item.href}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
      <p className="mt-8">※ご連絡はTwitterのDMまたは、Gmailにてお願いいたします。</p>
      <p className="mt-2">※GitHubにて作品のコードを公開中！</p>
    </div>
  );
}
