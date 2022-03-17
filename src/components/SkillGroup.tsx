import Skill, { SkillProps } from "./Skill";

export interface SkillGroupProps {
  heading: string;
  skills: SkillProps[][];
}

const SkillGroup = ({ heading, skills }: SkillGroupProps) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-center mb-4">{heading}</h3>
      <div className={`grid grid-rows-${skills.length} gap-4`}>
        {skills.map((row, i) => {
          return (
            <div className="flex gap-4 justify-center" key={i}>
              {row.map(({ label, icon }, j) => (
                <Skill label={label} icon={icon} key={`${i}${j}`} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillGroup;
