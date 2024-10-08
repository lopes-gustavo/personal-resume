import { PropsWithChildren } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup = ({ skillGroup }: PropsWithChildren<{ skillGroup: SkillGroupType }>) => {
  const { name, skills } = skillGroup;

  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export const Skill = ({ skill }: { skill: SkillType }) => {
  const { name, level, years } = skill;
  const percentage = Math.round((level / 10) * 100);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div
          className="flex items-center text-xs h-full rounded-full bg-orange-400 pl-2"
          style={{ width: `${percentage}%` }}
        >
          {years} {years > 1 ? 'years' : 'year'}
        </div>
      </div>
    </div>
  );
};
