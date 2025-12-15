import {  useRef } from "react";
import ReactMarkdown from 'react-markdown';
import { cleanMarkdown, scrollToElement, ucfirstAll } from "../../utils/utils";
import { type IProject } from "../../data/projects";

export function Project({ project, isExtend, extendAnimationDelay, handleExtendDelaye }: { project: IProject, isExtend: boolean, extendAnimationDelay: number, handleExtendDelaye: () => boolean }) {

  const articleRefs = useRef<(HTMLElement | null)>(null);


  async function onExtend () {
    const isDelayed =  handleExtendDelaye();

    if (!isExtend) {
      if(isDelayed) {
        setTimeout(() => {
          scrollToElement(articleRefs.current);
        }, extendAnimationDelay);
        return
      }

      scrollToElement(articleRefs.current);
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