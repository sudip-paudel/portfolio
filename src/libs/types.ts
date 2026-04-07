import { links } from './data'

export type PortableTextBlock = { _type: string; [key: string]: unknown }

export type SectionName = (typeof links)[number]['name']

export type SanityProject = {
  _id: string
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link: string
}

export type SanityExperience = {
  _id: string
  title: string
  company: string
  logoUrl: string
  location: string
  description: string
  icon: string
  date: string
}

export type SanitySiteConfig = {
  cvUrl: string
  profileImageUrl: string
  intro: PortableTextBlock[]
  githubUrl: string
  linkedinUrl: string
  aboutMe: string
}