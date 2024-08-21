'use client';

import { memo, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Modal from '@/app/components/Modal'; 

const WorkItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-8 relative">
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

        <div className="block md:hidden">
          <button
            onClick={openModal}
            className="text-blue-500 underline mb-4"
          >
            詳細を表示
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          item={item}
        />

        <div className="hidden md:block">
          <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">サイトURL</h3>
          <p className="mb-4 break-words">
            <a href={item.siteURL}>{item.siteURL || item.siteURLnot}</a>
          </p>
          <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">コード</h3>
          <p className="mb-4 break-words">
            <a href={item.codeURL}>{item.codeURL || item.codeURLnot}</a>
          </p>
          <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">作成・更新日</h3>
          <p className='mb-2'>{item.createdDate}</p>
          <p>{item.updateDate}</p>
        </div>
      </div>
    </div>
  );
};

export default memo(WorkItem);
