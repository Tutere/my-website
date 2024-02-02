'use client';
import { useState } from "react";
import SkillCategory from "./skillCategory";
import { SkillsData } from "./skillsData";
import SkillTag from "./skillTag";

export default function AboutSection() {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag:string) => {
      setTag(newTag);
    }

    const filteredSkills = SkillsData.filter((skill) =>
      skill.tags.includes(tag)
    );

    return (
      <section className="py-16">
        <div className="flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">About Me</h2>
        <p className="text-base lg:text-lg text-white text-centre max-w-5xl">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
          ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute 
          iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt 
           mollit anim id est laborum. 
        </p>
        </div>
        <div className="text-white flex flex-row justify-center items-centre gap-2 py-6">
        <SkillTag
          onClick={handleTagChange}
          name="All"
          isSelected ={tag === "All"}
        />
        <SkillTag
          onClick={handleTagChange}
          name="Technical"
          isSelected ={tag === "Technical"}
        />
        <SkillTag
          onClick={handleTagChange}
          name="Soft"
          isSelected ={tag === "Soft"}
        />
        </div>
        <div className="grid gap-8  md:grid-cols-3 md:gap-12">
          {filteredSkills.map((skill,index) => (
            <SkillCategory
            key={index} 
            icon={skill.icon} 
            name={skill.name} 
            skills={skill.skills}
            tags={skill.tags} 
            />
          ))}
        </div>
      </section>
    )
  }