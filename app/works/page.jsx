'use client';

import { useEffect, useState, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';
import SkeletonWorkItem from '@/app/components/skeletons/SkeletonWorkItem';

const WorkItem = dynamic(() => import('@/app/components/works/WorkItem'), {
  loading: () => <SkeletonWorkItem />,
  ssr: false,
});

const WORKS = () => {
  const [workItems, setWorkItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/works.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWorkItems(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const renderWorkItem = useCallback(
    (item) => <WorkItem key={item.title} item={item} />,
    []
  );

  return (
    <div>
      <WRAPPER img="works.jpg" title="WORKS">
        <CONTAINER>
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <SkeletonWorkItem key={index} />
              ))
            : workItems.map(renderWorkItem)}
        </CONTAINER>
        <BUTTON href="/about" txt="自己紹介へ" />
      </WRAPPER>
    </div>
  );
};

export default memo(WORKS);
