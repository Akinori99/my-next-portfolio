import { memo } from 'react';
import SkillItem from './SkillItem';

const Section = ({ title, items, isSkill }) => {
  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const renderItem = item => (
    <div key={item.title || item.name} className="mt-8">
      {isSkill ? (
        <SkillItem skill={item} />
      ) : (
        <p className="text-left">
          <span className="font-bold underline mb-4 block">{item.title}</span>
          <span>{formatDescription(item.description)}</span>
        </p>
      )}
    </div>
  );

  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-6 md:col-span-2">
      <h2 className="text-3xl font-bold">{title}</h2>
      {items.map(renderItem)}
    </div>
  );
};

Section.displayName = 'Section';

export default memo(Section);
