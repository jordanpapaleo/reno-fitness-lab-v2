// import {
//   // Bars3Icon,
//   // BellIcon,
//   // CalendarIcon,
//   ChartPieIcon,
//   // DocumentDuplicateIcon,
//   FolderIcon,
//   HomeIcon,
//   UsersIcon,
//   // XMarkIcon,
// } from '@heroicons/react/24/outline'

export type UserRole = 'admin' | 'contributor' | 'user'
export type NavLocations = 'main' | 'mobile' | 'footer'

export enum Roles {
  ADMIN = 'admin',
  CONTRIBUTOR = 'contributor',
  USER = 'user',
}

export enum Routes {
  CURRENT_WORKOUT = '/rfl/current-workout',
  CUSTOM_EXERCISES = '/rfl/custom-exercises',
  DASHBOARD = '/rfl/dashboard',
  ERROR = '/error',
  LOGIN = '/login',
  MESOCYCLE = '/rfl/mesocycle',
  NOT_FOUND = '/not-found',
  PROTECTED = '/protected',
  ROOT = '/',
  STYLEGUIDE = '/styleguide',
  TEMPLATES = '/rfl/templates',
}

export interface NavItem {
  authentication: boolean
  authorization: UserRole[]
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  navLocations: NavLocations[]
  path: string
  title: string
}

export enum NavLocation {
  MAIN = 'main',
  MOBILE = 'mobile',
  FOOTER = 'footer',
}

export const getRoutes = (location?: NavLocations): NavItem[] => {
  return [
    {
      authentication: false,
      authorization: [],
      navLocations: ['main', 'mobile'] as NavLocations[],
      path: Routes.DASHBOARD,
      title: 'Dashboard',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: ['main', 'mobile'] as NavLocations[],
      path: Routes.CURRENT_WORKOUT,
      title: 'Current Workout',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: ['main', 'mobile'] as NavLocations[],
      path: Routes.MESOCYCLE,
      title: 'Mesocycle',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: ['main', 'mobile'] as NavLocations[],
      path: Routes.TEMPLATES,
      title: 'Templates',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: ['main', 'mobile'] as NavLocations[],
      path: Routes.CUSTOM_EXERCISES,
      title: 'Custom Exercises',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: [] as NavLocations[],
      path: Routes.LOGIN,
      title: 'Profile',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: [],
      path: Routes.LOGIN,
      title: 'Login',
    },
    {
      authentication: false,
      authorization: [],
      navLocations: [],
      path: Routes.ROOT,
      title: 'Home',
    },
    {
      authentication: true,
      authorization: [],
      navLocations: [],
      path: Routes.PROTECTED,
      title: 'Protected',
    },
    {
      authentication: false,
      authorization: [Roles.ADMIN],
      navLocations: ['footer'] as NavLocations[],
      path: Routes.STYLEGUIDE,
      title: 'Style Guide',
    },
  ].filter((route) => {
    if (!location) return true
    return route.navLocations.includes(location as NavLocations)
  })
}
