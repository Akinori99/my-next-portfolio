'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import WRAPPER from '@/app/components/wrapper';
import BUTTON from '@/app/components/button';

export default function WORKS() {
  const [workItems, setWorkItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/works.json');
        const data = await response.json();
        setWorkItems(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <WRAPPER img="works.jpg" title="WORKS">
        <div className="content bg-azure bg-opacity-80 text-black rounded-lg mx-auto p-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {workItems.map((item) => (
              <div
                key={item.title}
                className="item bg-gray-200 rounded-lg shadow-md p-6"
              >
                <a
                  href={item.siteURL}
                  className="block mb-4 w-full relative"
                  style={{ aspectRatio: '5 / 3' }}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </a>
                <h2 className="text-2xl mb-4">{item.title}</h2>
                <div className="text-left">
                  <p className="mb-4">
                    {item.description} <br />
                    {item.ReferenceURL && (
                      <a href={item.ReferenceURL}>※ {item.ReferenceURL}</a>
                    )}
                  </p>
                  <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">
                    開発言語
                  </h3>
                  <p className="mb-4">{item.developmentLanguage}</p>
                  <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">
                    サイトURL
                  </h3>
                  <p className="mb-4">
                    <a href={item.siteURL}>{item.siteURL || item.siteURLnot}</a>
                  </p>
                  <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">
                    コード
                  </h3>
                  <p className="mb-4">
                    <a href={item.codeURL}>{item.codeURL || item.codeURLnot}</a>
                  </p>
                  <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">
                    作成日
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: item.createdDate }}></p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <BUTTON href="/about" txt="自己紹介へ" />
      </WRAPPER>
    </div>
  );
}
