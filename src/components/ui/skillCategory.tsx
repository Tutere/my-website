import Image from "next/image";
import { Badge } from "./badge";

interface SkillSectionProps {
    icon: string;
    name: string;
    skills: string[];
    tags: string[];
  }

export default function SkillCategory({icon, name, skills, tags}: SkillSectionProps) {
    return (
      <section>
        <div className="flex flex-col items-center gap-4">
          <div className="border rounded-sm w-12 h-12 flex justify-center">
          <Image
            className=""
            src={icon}
            width={32}
            height={32}
            alt="menu icon"
          />
          </div>
          <h2 className="text-white">{name}</h2>
          <div className="flex flex-wrap gap-1 max-w-52">
            {skills.map((skill,index) => (
            <Badge key={index}  variant={"secondary"}>
              {skill}
            </Badge>
            ))}
          </div> 
        </div>
        {/* <p>{skills}</p>   */}
      </section>
    )
  }