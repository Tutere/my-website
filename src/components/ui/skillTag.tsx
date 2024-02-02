import { MouseEventHandler } from "react";

interface SkillTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean
  }

export default function SkillTag({name, onClick, isSelected}:SkillTagProps) {
    const buttonStyles = isSelected
    ? "border-blue-500"
    : "border-gray-500 hover:border-white"
    return (
        <button 
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-lg cursor-pointer text-white`}
            onClick={() => onClick (name)}
        >
            {name}
        </button>
    )
  }