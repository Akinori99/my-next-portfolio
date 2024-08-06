'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';
import SkeletonSection from '@/app/components/SkeletonSection';
import ContactSection from '@/app/components/ContactSection';
import SkeletonContactSection from '@/app/components/SkeletonContactSection';

const Section = dynamic(() => import('@/app/components/Section'), {
  loading: () => <SkeletonSection />,
  ssr: false,
});

export default function ABOUT() {
  const [introductionItems, setIntroductionItems] = useState([]);
  const [skillItems, setSkillItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [introductionResponse, skillsResponse] = await Promise.all([
          fetch('/introduction.json'),
          fetch('/skills.json'),
        ]);
        setIntroductionItems(await introductionResponse.json());
        setSkillItems(await skillsResponse.json());
        setLoading(false);
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
            {loading
              ? <SkeletonSection />
              : renderSection("Introduction", introductionItems)}
          </div>
          <div className="col-span-1">
            {loading
              ? <SkeletonSection />
              : renderSection("Skills", skillItems, true)}
          </div>
          <div className="col-span-1">
            {loading
              ? <SkeletonContactSection />
              : <ContactSection />}
          </div>
        </CONTAINER>
        <BUTTON href="/works" txt="作品を見る" />
      </WRAPPER>
    </div>
  );
}
