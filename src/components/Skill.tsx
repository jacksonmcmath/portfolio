import type { ReactNode } from "react";

export interface SkillProps {
  label: string;
  icon: ReactNode;
}

const Skill = ({ label, icon }: SkillProps) => {
  return (
    <div className="bg-gray-200 h-20 w-24 rounded flex flex-col justify-center items-center">
      <div className="flex justify-center mb-1">{icon}</div>
      <p className="text-sm text-center">{label}</p>
    </div>
  );
};

export default Skill;
