import { memo } from 'react';
import Image from 'next/image';

const SkillItem = ({ skill: { imgSrc, name, rating, description } }) => (
  <div className="flex flex-col items-start mt-8">
    <div className="flex items-center mb-4">
      <Image src={imgSrc} alt={name} width={64} height={64} />
      <div className="ml-4">
        <p className="font-bold">
          {name}
          <br />
          <span className="text-yellow-600">{rating}</span>
        </p>
      </div>
    </div>
    <p className="text-left">{description}</p>
  </div>
);

SkillItem.displayName = 'SkillItem';
export default memo(SkillItem);
