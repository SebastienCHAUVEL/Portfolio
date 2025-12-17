import {  useRef, type Dispatch, type SetStateAction } from "react";
import ReactMarkdown from 'react-markdown';
import { cleanMarkdown, smoothScrollToElement, ucfirstAll } from "../../utils/utils";
import { type IProject } from "../../data/projects";

export function Project({ 
  project, 
  isExtend, 
  EXTEND_ANIMATION_DELAY, 
  handleExtendDelay, 
  HEADER_HEIGHT, 
  isLargeMode,
  setIsAutoScrolling 
}: { 
  project: IProject, 
  isExtend: boolean, 
  EXTEND_ANIMATION_DELAY: number, 
  handleExtendDelay: () => boolean, 
  HEADER_HEIGHT: number, 
  isLargeMode: boolean;
  setIsAutoScrolling: Dispatch<SetStateAction<boolean>>  
  }) {

  const articleRefs = useRef<(HTMLElement | null)>(null);


  async function onExtend () {
    const isDelayed =  handleExtendDelay(); // Toggle isExtend 
    const offsetScrollY =  isLargeMode ? HEADER_HEIGHT : 0; // If large mode is enable, header is fixed => define an offset by the size of the header 

    // Scroll into selected project if we open it
    if (!isExtend) {
      // Set delay before scroll if another project is already open (waiting until CSS animation is finished)
      if(isDelayed) {
        setTimeout(() => {
          smoothScrollToElement(
            articleRefs.current, 
            offsetScrollY,
            () => setIsAutoScrolling(true),   
            () => setIsAutoScrolling(false)   
          );
        }, EXTEND_ANIMATION_DELAY);
        return
      }
      smoothScrollToElement(
        articleRefs.current, 
        offsetScrollY,
        () => setIsAutoScrolling(true),   
        () => setIsAutoScrolling(false)   
      );
    }
  }

  return (
    <article key={project.id} ref={articleRefs} className={isExtend ? 'project extend' : 'project'}>
      <button type='button' onClick={onExtend}>
        <img src={`/projects_image/${project.image}.png`} alt={`${project.title} preview`} /></button>
      <div className="project__extend-part">
        <div>
          <div className='project__links'>
            <a href={project.demo} target="_blank">Accèder à la démo</a>
            <a href={project.github} target="_blank">Github</a>
          </div>
          <h3>{ucfirstAll(project.title)}</h3>
          <div className="description">
            <h4>Description</h4>
            <ReactMarkdown>{cleanMarkdown(project.description)}</ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  )
}