import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import type { SanityProject } from '../libs/types'

type ProjectProp = SanityProject & { index: number }

function Project({ title, description, tags, imageUrl, link, index }: ProjectProp) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className={`bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 ${index % 2 === 1 ? 'even:pl-8 sm:group-even:pl-8' : ''}`}>
        <div className={`pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${index % 2 === 1 ? 'sm:group-even:ml-[18rem]' : ''}`}>
          <a href={link} target="_blank" rel="noreferrer">
            <h3 className="text-2xl font-semibold underline cursor-pointer">
              {title}
            </h3>
          </a>
          <p className="mt-2 sm:ml-0 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, i) => (
              <li
                className="bg-black/[0.7] px-3 py-1 mt-2 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={i}
              >
                {tag}
              </li>
            ))}
          </ul>
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className={`absolute top-8 h-full -right-40 object-cover w-[28.25rem] rounded-t-lg shadow-2xl transition hidden sm:block
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2
              ${index % 2 === 1 ? 'group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40' : ''}`}
            />
          )}
        </div>
      </section>
    </motion.div>
  )
}

export default Project