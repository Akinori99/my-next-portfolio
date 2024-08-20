'use client';

import React, { memo, useCallback } from 'react';
import Image from 'next/image';

const Modal = ({ isOpen, onClose, item }) => {
  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-[85%] max-h-[calc(100vh-6.5rem)] w-full h-auto z-50 overflow-auto">
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
        <h3 className="text-lg border-l-4 border-blue-800 pl-4 mb-2">作成・更新日</h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className='mb-2'>{item.createdDate}</p>
            <p className='mb-2'>{item.updateDate}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-4xl p-1 bg-white rounded-full"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
