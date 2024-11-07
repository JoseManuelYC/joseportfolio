// main tools
import dayjs from 'dayjs'

// utils
import { bottomToTop, topToBottom } from '@atoms/animations/utils'

// icons
import { Github, Linkedin, Instagram } from 'react-bootstrap-icons'

const timezoneCode = 'America/Caracas'
const startWorkDate = dayjs('11/01/2023').tz(timezoneCode)

export const animations = {
  iconsAnimation: {
    ...topToBottom,
    transition: { ...topToBottom.transition, delay: 0.3 }
  },
  textsAnimation: {
    ...bottomToTop,
    transition: { ...bottomToTop.transition, delay: 0.6 }
  }
}

export const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=%2B584247697245&text=Hola,%20Jose%20Yanez%20mucho%20gusto.&type=phone_number&app_absent=0'

export const rrss = [
  { link: 'https://www.linkedin.com/in/joseyanez07/', Icon: Linkedin },
  { link: 'https://github.com/JoseManuelYC', Icon: Github },
  { link: 'https://instagram.com/_joseyanez/', Icon: Instagram }
]

export const info = [
  {
    title: dayjs().tz(timezoneCode).diff(startWorkDate, 'year'),
    description: 'Año de experiencia'
  },
  { title: 'Junior', description: 'Desarrollador web' },
  { title: 'Nest Js', description: 'Framework dominante' }
]