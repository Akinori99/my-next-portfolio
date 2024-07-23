'use client';

import { useEffect, useState, memo } from 'react';
import Image from 'next/image';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';

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

  return (
    <div>
      <WRAPPER img="about.jpg" title="ABOUT">
        <CONTAINER>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="text-center">
              <Image
                src="/img/myface.jpg"
                alt="myface"
                width={240}
                height={240}
                className="rounded-full border-4 border-black mx-auto"
                priority
              />
            </div>
            <div className="text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-5xl font-serif">阿部亮則</h1>
              <p className="text-2xl mt-2">-Abe Akinori-</p>
            </div>
            <Section title="Introduction（自己紹介）" items={introductionItems} />
            <Section title="Skill（スキル）" items={skillItems} isSkill />
            <div className="bg-gray-200 rounded-lg shadow-md p-6 text-center md:col-span-2">
              <h2 className="text-3xl font-bold">Contact（連絡先）</h2>
              <div className="flex justify-center mt-4">
                <ContactIcon href="https://github.com/Akinori99" src="/img/github.png" alt="GitHub" />
                <ContactIcon href="mailto:akinori.work99@gmail.com" src="/img/gmail.png" alt="Gmail" />
                <ContactIcon href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw" src="/img/twitter.png" alt="Twitter" />
              </div>
              <p className="mt-4">※ご連絡はTwitterのDMまたは、Gmailにてお願いいたします。</p>
              <p className="mt-2">※GitHubにて作品のコードを公開中！</p>
            </div>
          </div>
        </CONTAINER>
        <BUTTON href="/works" txt="作品を見る" />
      </WRAPPER>
    </div>
  );
}

const Section = memo(({ title, items, isSkill }) => (
  <div className="bg-gray-200 rounded-lg shadow-md p-6 md:col-span-2">
    <h2 className="text-3xl font-bold">{title}</h2>
    {items.map(item => (
      <div key={item.title || item.name} className="mt-4">
        {isSkill ? (
          <SkillItem skill={item} />
        ) : (
          <>
            <p>
              <span className="font-bold underline">{item.title}</span>
              <br />
              {item.description}
            </p>
          </>
        )}
      </div>
    ))}
  </div>
));

Section.displayName = 'Section';

const SkillItem = memo(({ skill }) => (
  <div className="flex items-center">
    <Image src={skill.imgSrc} alt={skill.name} width={64} height={64} />
    <div className="ml-4">
      <p className="font-bold">
        {skill.name}
        <br />
        <span className="text-yellow-600">{skill.rating}</span>
      </p>
    </div>
    <div className="ml-8">
      <p>{skill.description}</p>
    </div>
  </div>
));

SkillItem.displayName = 'SkillItem';

const ContactIcon = memo(({ href, src, alt }) => (
  <a href={href} className="mx-2">
    <Image src={src} alt={alt} width={40} height={40} />
  </a>
));

ContactIcon.displayName = 'ContactIcon';
