import { getCookie } from 'formula_one'
import { urlStaticBase } from './urls'

export const PATHNAME = '/maintainer_site/'

export const MEDIUM_URL = 'https://medium.com/'

export const GITHUB_URL = 'https://github.com/'

export const BLOG_SECTION_LINE_1 =
  'Ken the ins and outs of life and moil at IMG.'
export const BLOG_SECTION_LINE_2 =
  'Find answers to all your whats, whys and hows.'

export const CREATORS = [
  {
    name: 'Aman Sharma',
    role: 'Full-stack developer',
    url: `${GITHUB_URL}algomaster99`,
  },
  {
    name: 'Harshit Khetan',
    role: 'Full-stack developer',
    url: `${GITHUB_URL}promehul`,
  },
]

export const IMAGE_STYLE = {
  maxHeight: '100%',
  maxWidth: '100%',
}

export const backgroundImageStyle = image => {
  return {
    width: '100%',
    minHeight: '16.2rem',
    backgroundImage: `url('${image}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '1.1rem'
  }
}

export const memberImageStyle = (image, height) => {
  return {
    width: '100%',
    height: `${height}`,
    backgroundImage: `url('${image}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '12px',
  }
}

export const validateLink = (link) => {
  const linkRegex = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/i
  return linkRegex.test(link)
}

const personalityTypes = [
  'Adventurer',
  'Advocate',
  'Architect',
  'Campaigner',
  'Commander',
  'Consul',
  'Debater',
  'Defender',
  'Entertainer',
  'Entrepreneur',
  'Executive',
  'Logician',
  'Logistician',
  'Mediator',
  'Protagonist',
  'Vistuoso',
]

export const personalityTypeOptions = personalityTypes.map((personalityType) => ({
  key: personalityType.toLowerCase(),
  text: personalityType,
  value: personalityType.toLowerCase(),
  image: { src: `${urlStaticBase()}personality_types/${personalityType.toLowerCase()}.png` },
}))

export const headers = {
  'X-CSRFToken': getCookie('csrftoken'),
}
