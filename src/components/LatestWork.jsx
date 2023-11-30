import React from 'react';
import { designData, project } from '../utils';

const LatesWork =() => {

return(
    <section className='container'>
            <h2>My Project</h2>
        <div className='main-work'>
                {project.map((pro) => (
            <div className={`project-card project-card1 ${pro.id}`} key={pro.id}>
                    <div className='title'>
                        <h3>{pro.title}</h3>
                        <div className='tech-stack'>
                            <p>{pro.techStack1}</p>
                            <p>{pro.techStack2}</p>
                        </div>
                    </div>
                        <img 
                        className='project-img-2'
                        src={pro.images} 
                        alt={pro.title}
                         />

                    <div className="social">
                        <a href={pro.deploy}>
                        <i className={pro.icon}></i>
                            </a>
                    </div>
            </div>
                ))}
        </div>
    </section>
)

}

export default LatesWork;
