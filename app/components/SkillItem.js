import { memo } from 'react';
import Image from 'next/image';

const SkillItem = ({ skill }) => (
  <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
    <div className="flex items-center">
      <Image src={skill.imgSrc} alt={skill.name} width={64} height={64} />
      <div className="ml-4">
        <p className="font-bold">
          {skill.name}
          <br />
          <span className="text-yellow-600">{skill.rating}</span>
        </p>
      </div>
    </div>
    <div className="mt-4 md:mt-0 md:ml-8">
      <p>{skill.description}</p>
    </div>
  </div>
);

SkillItem.displayName = 'SkillItem';
export default memo(SkillItem);
