'use client';

import { memo, useState, useCallback } from 'react';
import Image from 'next/image';

const WorkItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = useCallback(() => {
    setShowDetails(prev => !prev);
  }, []);

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 mt-6">
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
          priority
        />
      </a>
      <h2 className="text-2xl mb-4">{item.title}</h2>
      <div className="text-left">
        <p className="mb-4">
          {item.description} <br />
          {item.ReferenceURL && (
            <a className="mb-4 break-words" href={item.ReferenceURL}>※ {item.ReferenceURL}</a>
          )}
        </p>
        <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">開発言語</h3>
        <p className="mb-4">{item.developmentLanguage}</p>
        <button
          onClick={toggleDetails}
          className="text-blue-500 underline mb-4"
        >
          {showDetails ? '詳細を非表示' : '詳細を表示'}
        </button>
        {showDetails && (
          <>
            <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">サイトURL</h3>
            <p className="mb-4 break-words">
              <a href={item.siteURL}>{item.siteURL || item.siteURLnot}</a>
            </p>
            <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">コード</h3>
            <p className="mb-4 break-words">
              <a href={item.codeURL}>{item.codeURL || item.codeURLnot}</a>
            </p>
            <h3 className="text-xl border-l-4 border-blue-800 pl-4 mb-2">作成日</h3>
            <p dangerouslySetInnerHTML={{ __html: item.createdDate }}></p>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(WorkItem);
