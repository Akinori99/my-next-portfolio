'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';

export default function ABOUT() {
  const [introductionItems, setIntroductionItems] = useState([]);
  const [skillItems, setSkillItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const introductionResponse = await fetch('/introduction.json');
        const skillsResponse = await fetch('/skills.json');
        setIntroductionItems(await introductionResponse.json());
        setSkillItems(await skillsResponse.json());
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    }

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
              />
            </div>
            <div className="text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-5xl font-serif">阿部亮則</h1>
              <p className="text-2xl mt-2">-Abe Akinori-</p>
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md p-6 md:col-span-2">
              <h2 className=" text-3xl font-bold">Introduction（自己紹介）</h2>
              {introductionItems.map((item) => (
                <p key={item.title} className="mt-4">
                  <span className="font-bold underline">{item.title}</span>
                  <br />
                  {item.description}
                </p>
              ))}
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md p-6 md:col-span-2">
              <h2 className="text-3xl font-bold">Skill（スキル）</h2>
              {skillItems.map((skill) => (
                <div key={skill.name} className="flex items-center mt-4">
                  <Image
                    src={skill.imgSrc}
                    alt={skill.name}
                    width={64}
                    height={64}
                  />
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
              ))}
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md p-6 text-center md:col-span-2">
              <h2 className="text-3xl font-bold">Contact（連絡先）</h2>
              <div className="flex justify-center mt-4">
                <a href="https://github.com/Akinori99" className="mx-2">
                  <Image
                    src="/img/github.png"
                    alt="GitHub"
                    width={40}
                    height={40}
                  />
                </a>
                <a href="mailto:akinori.work99@gmail.com" className="mx-2">
                  <Image
                    src="/img/gmail.png"
                    alt="Gmail"
                    width={40}
                    height={40}
                  />
                </a>
                <a
                  href="https://twitter.com/Akinori_99?ref_src=twsrc%5Etfw"
                  className="mx-2"
                >
                  <Image
                    src="/img/twitter.png"
                    alt="Twitter"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <p className="mt-4">
                ※ご連絡はTwitterのDMまたは、Gmailにてお願いいたします。
              </p>
              <p className="mt-2">※GitHubにて作品のコードを公開中！</p>
            </div>
          </div>
        </CONTAINER>
        <BUTTON href="/works" txt="作品を見る" />
      </WRAPPER>
    </div>
  );
}
