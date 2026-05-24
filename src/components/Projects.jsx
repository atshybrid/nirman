import { projects } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <header className="section__header" data-reveal>
          <span className="section__eyebrow">Our Projects</span>
          <h2 className="section__title">Building the urban future</h2>
          <p className="section__subtitle">
            A growing pipeline of service apartments and green living communities across Hyderabad
            and Bangalore.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className="projects__card"
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="projects__visual">
                <span className="projects__city">{project.location}</span>
              </div>
              <div className="projects__body">
                <span className="projects__status">{project.status}</span>
                <h3>{project.name}</h3>
                <p className="projects__type">{project.type}</p>
                <ul className="projects__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
