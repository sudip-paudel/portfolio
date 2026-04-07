import { useEffect, useState } from 'react'
import useSectionInView from '../libs/hooks'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { client } from '../libs/sanityClient'

type SanitySkill = { _id: string; name: string }

const query = `*[_type == "skill"] | order(order asc) { _id, name }`

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
}

const Skills = () => {
  const { ref } = useSectionInView('Skills')
  const [skills, setSkills] = useState<SanitySkill[]>([])

  useEffect(() => {
    client.fetch<SanitySkill[]>(query).then(setSkills)
  }, [])

  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex gap-2 flex-wrap justify-center text-lg text-gray-800">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] px-5 py-3 dark:bg-white/10 dark:text-white/80 rounded-xl"
            key={skill._id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default Skills