import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import React from 'react'
import Project from './Project'
import useSectionInView from '../libs/hooks'
import { client } from '../libs/sanityClient'
import type { SanityProject } from '../libs/types'

const query = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  description,
  tags,
  "imageUrl": image.asset->url,
  link
}`

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.27)
  const [projects, setProjects] = useState<SanityProject[]>([])

  useEffect(() => {
    client.fetch<SanityProject[]>(query).then(setProjects)
  }, [])

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={project._id}>
            <Project index={index} {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects