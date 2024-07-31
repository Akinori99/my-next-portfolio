'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';

const Section = dynamic(() => import('@/app/components/Section'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const ContactIcon = dynamic(() => import('@/app/components/ContactIcon'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function ABOUT() {
  const [introductionItems, setIntroductionItems] = useState([]);
  const [skillItems, setSkillItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [introductionResponse, skillsResponse] = await Promise.all([
          fetch('/introduction.json'),
          fetch('/skills.json'),
        ]);
        setIntroductionItems(await introductionResponse.json());
        setSkillItems(await skillsResponse.json());
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const renderSection = useCallback((title, items, isSkill = false) => (
    <Section title={title} items={items} isSkill={isSkill} />
  ), []);

  return (
    <div>
      <WRAPPER img="about.jpg" title="ABOUT">
        <CONTAINER>
          <div className="col-span-1 text-center">
            <Image
              src="/img/myface.jpg"
              alt="myface"
              width={240}
              height={240}
              className="rounded-full border-4 border-black mx-auto"
              priority
            />
          </div>
          <div className="col-span-1 text-center flex flex-col items-center justify-center mt-6 md:mt-0">
            <h1 className="text-5xl font-serif">阿部亮則</h1>
            <p className="text-2xl mt-2">-Abe Akinori-</p>
          </div>
          <div className="col-span-1">
            {renderSection("Introduction", introductionItems)}
          </div>
          <div className="col-span-1">
            {renderSection("Skills", skillItems, true)}
          </div>
          <div className="col-span-1 bg-gray-200 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="flex justify-center mt-4">
              <ContactIcon href="https://github.com/Akinori99" src="/img/github.png" alt="GitHub" />
              <ContactIcon href="mailto:akinori.work99@gmail.com" src="/img/gmail.png" alt="Gmail" />
              <ContactIcon href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw" src="/img/twitter.png" alt="Twitter" />
            </div>
            <p className="mt-4">※ご連絡はTwitterのDMまたは、Gmailにてお願いいたします。</p>
            <p className="mt-2">※GitHubにて作品のコードを公開中！</p>
          </div>
        </CONTAINER>
        <BUTTON href="/works" txt="作品を見る" />
      </WRAPPER>
    </div>
  );
}
