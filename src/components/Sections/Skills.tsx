import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';
import {SkillGroup} from './Resume/Skills';

const Skills: FC = memo(() => {
  return (
  <Section className="bg-neutral-800" sectionId={SectionId.Skills}>
      <div className="flex flex-col gap-y-8 text-white">
        <h2 className="self-center text-xl font-bold ">Some of my skills</h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <SkillGroup key={`${skillGroup.name}-${index}`} skillGroup={skillGroup} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;

