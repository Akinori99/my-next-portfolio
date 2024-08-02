'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';
import SkeletonWorkItem from '@/app/components/SkeletonWorkItem';

const WorkItem = dynamic(() => import('@/app/components/WorkItem'), {
  loading: () => <SkeletonWorkItem />,
  ssr: false,
});

export default function WORKS() {
  const [workItems, setWorkItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/works.json');
        const data = await response.json();
        setWorkItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const renderWorkItem = useCallback((item) => (
    <WorkItem key={item.title} item={item} />
  ), []);

  return (
    <div>
      <WRAPPER img="works.jpg" title="WORKS">
        <CONTAINER>
          {loading
            ? Array.from({ length: workItems.length || 4 }).map((_, index) => (
                <SkeletonWorkItem key={index} />
              ))
            : workItems.map(renderWorkItem)}
        </CONTAINER>
        <BUTTON href="/about" txt="自己紹介へ" />
      </WRAPPER>
    </div>
  );
}
