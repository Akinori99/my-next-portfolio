'use client';

import ContactIcon from '@/app/components/ContactIcon';

export default function ContactSection() {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <div className="flex justify-center mt-4">
        <ContactIcon href="https://github.com/Akinori99" src="/img/github.png" alt="GitHub" />
        <ContactIcon href="mailto:akinori.work99@gmail.com" src="/img/gmail.png" alt="Gmail" />
        <ContactIcon href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw" src="/img/twitter.png" alt="Twitter" />
      </div>
      <p className="mt-4">※ご連絡はTwitterのDMまたは、Gmailにてお願いいたします。</p>
      <p className="mt-2">※GitHubにて作品のコードを公開中！</p>
    </div>
  );
}
