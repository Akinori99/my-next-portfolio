'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';

const WorkItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDetails = useCallback(() => {
    setShowDetails(prev => !prev);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 mt-6 relative">
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
          onClick={openModal}
          className="text-blue-500 underline mb-4"
        >
          詳細を表示
        </button>
        {isModalOpen && (
          <div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleOverlayClick}
          >
            <div className="relative bg-white rounded-lg shadow-lg p-4 w-5/6 md:w-1/6 lg:w-1/8 z-50">
              <button
                onClick={closeModal}
                className="absolute bottom-4 right-4 text-gray-500 hover:text-gray-800 text-4xl p-4 bg-white rounded-full"
                aria-label="Close"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-8 w-8 fill-current"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              </button>
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
              <h2 className="text-lg text-center mb-4">{item.title}</h2>
              <p className="mb-4">
                {item.description} <br />
                {item.ReferenceURL && (
                  <a className="mb-4 break-words" href={item.ReferenceURL}>※ {item.ReferenceURL}</a>
                )}
              </p>
              <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">開発言語</h3>
              <p className="mb-4">{item.developmentLanguage}</p>
              <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">サイトURL</h3>
              <p className="mb-4 break-words">
                <a href={item.siteURL}>{item.siteURL || item.siteURLnot}</a>
              </p>
              <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">コード</h3>
              <p className="mb-4 break-words">
                <a href={item.codeURL}>{item.codeURL || item.codeURLnot}</a>
              </p>
              <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">作成日</h3>
              <p dangerouslySetInnerHTML={{ __html: item.createdDate }}></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(WorkItem);
