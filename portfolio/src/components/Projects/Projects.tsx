import { useState, type Dispatch, type SetStateAction } from "react";
import { projects } from "../../data/projects";
import { Project } from "./Project";

export function Projects({ 
  HEADER_HEIGHT, 
  isLargeMode, 
  setIsScrolling 
} : { 
  HEADER_HEIGHT: 
  number, 
  isLargeMode: boolean ,
  setIsScrolling: Dispatch<SetStateAction<boolean>>
}) {

  const [isExtend, setIsExtend] = useState(projects.map(() => false));
  const extendAnimationDelay = 700;

  function handleExtendDelaye(index: number) {
    let isExtendCopy = isExtend.map((_, i) => i === index);

    // If current project is already extended we just close it
    if (isExtend[index]) {
      isExtendCopy = isExtend.map(() => false);
      setIsExtend(isExtendCopy);
      return false;
    }

    // If no project is extended we just open it
    if(!isExtend.includes(true)) {
      setIsExtend(isExtendCopy);
      return false;
    } 

    // Else, we start by closing all projects
    const allClosed = isExtend.map(() => false);
    setIsExtend(allClosed);

    // Then we open the project selected with delay for CSS animation
    setTimeout(() => {
      setIsExtend(isExtendCopy);
    }, extendAnimationDelay); 

    return true;
  }

  return (
    <section className='projects'>
      <h2>Mes projets</h2>
      <div className="projects__container">
        {projects.map((project, i) => 
          <Project 
            key={project.id}
            project={project}
            isExtend={isExtend[i]}
            extendAnimationDelay={extendAnimationDelay}
            handleExtendDelaye={() => handleExtendDelaye(i)}
            HEADER_HEIGHT={HEADER_HEIGHT}
            isLargeMode={isLargeMode}
            setIsScrolling={setIsScrolling}
          /> 
        )}
      </div>
    </section>
  )
}