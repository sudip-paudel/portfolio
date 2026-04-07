import { useEffect, useState } from 'react'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import useSectionInView from '../libs/hooks'
import { useTheme } from '../context/ThemeContext'
import { client } from '../libs/sanityClient'
import type { SanityExperience } from '../libs/types'
import { FaReact, FaAngular, FaVuejs, FaNodeJs, FaPython } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact />,
  FaAngular: <FaAngular />,
  FaVuejs: <FaVuejs />,
  FaNodeJs: <FaNodeJs />,
  FaPython: <FaPython />,
}

const query = `*[_type == "experience"] | order(order asc) {
  _id,
  title,
  company,
  "logoUrl": logo.asset->url,
  location,
  description,
  icon,
  date
}`

export default function Experience() {
  const { ref } = useSectionInView('Experience')
  const { theme } = useTheme()
  const [experiences, setExperiences] = useState<SanityExperience[]>([])

  useEffect(() => {
    client.fetch<SanityExperience[]>(query).then(setExperiences)
  }, [])

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor={theme === 'light' ? '#e5e7eb' : 'rgba(255, 255, 255, 0.2)'}>
        {experiences.map((item) => (
          <React.Fragment key={item._id}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: theme === 'light'
                  ? '0.4rem solid #9ca3af'
                  : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={iconMap[item.icon] ?? <FaReact />}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <div className="flex items-center gap-2">
                {item.logoUrl && (
                  <img src={item.logoUrl} alt={item.company} className="w-4 h-4 rounded-full" />
                )}
                <h4>{item.company}</h4>
              </div>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}