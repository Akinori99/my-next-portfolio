import { memo } from 'react';
import SkillItem from './SkillItem';

const Section = ({ title, items, isSkill }) => (
  <div className="bg-gray-200 rounded-lg shadow-md p-6 md:col-span-2">
    <h2 className="text-3xl font-bold">{title}</h2>
    {items.map(item => (
      <div key={item.title || item.name} className="mt-4">
        {isSkill ? (
          <SkillItem skill={item} />
        ) : (
          <>
            <p>
              <span className="font-bold underline">{item.title}</span>
              <br />
              {item.description}
            </p>
          </>
        )}
      </div>
    ))}
  </div>
);

Section.displayName = 'Section';
export default memo(Section);
