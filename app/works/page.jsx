'use client';

import { useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import WRAPPER from '@/app/components/wrapper';
import CONTAINER from '@/app/components/container';
import BUTTON from '@/app/components/button';

const WorkItem = dynamic(() => import('@/app/components/WorkItem'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

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

  const renderWorkItem = useCallback((item) => (
    <WorkItem key={item.title} item={item} />
  ), []);

  return (
    <div>
      <WRAPPER img="works.jpg" title="WORKS">
        <CONTAINER>
          {workItems.map(renderWorkItem)}
        </CONTAINER>
        <BUTTON href="/about" txt="自己紹介へ" />
      </WRAPPER>
    </div>
  );
}
