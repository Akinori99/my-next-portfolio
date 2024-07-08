import WRAPPER from '@/app/components/wrapper';
import BUTTON from '@/app/components/button';

export default function TOP() {
  return (
    <div>
      <WRAPPER img="top.jpg" title="Akinori's Portfolio" isTopPage={true}>
        <BUTTON href="/works" txt="作品を見る" />
      </WRAPPER>
    </div>
  );
}
