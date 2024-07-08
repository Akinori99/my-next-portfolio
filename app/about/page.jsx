import WRAPPER from '@/app/components/wrapper';
import BUTTON from '@/app/components/button';

export default function ABOUT() {
  return (
    <div>
      <WRAPPER img="about.jpg" title="ABOUT">
        <BUTTON href="/works" txt="作品を見る" />
      </WRAPPER>
    </div>
  );
}
