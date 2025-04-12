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
  CHECK_IN = '/lab/checkin',
  CURRENT_WORKOUT = '/lab/current-workout',
  CUSTOM_EXERCISES = '/lab/custom-exercises',
  CYCLES = '/lab/cycles',
  DASHBOARD = '/lab/dashboard',
  ERROR = '/error',
  EXERCISES = '/lab/exercises',
  LAB = '/lab',
  LOGIN = '/login',
  MURPH = '/murph',
  NOT_FOUND = '/not-found',
  ROOT = '/',
  STYLEGUIDE = '/styleguide',
  PROFILE = '/lab/profile',
  WORKOUTS = '/lab/workouts',
}

export interface NavItem {
  authentication: boolean
  authorization: UserRole[]
  iconId?: string
  navLocations: NavLocations[]
  path: string
  title: string
}

export enum NavLocation {
  MAIN = 'main',
  MOBILE = 'mobile',
  FOOTER = 'footer',
}

const APP_ROUTES: NavItem[] = [
  {
    authentication: true,
    authorization: [],
    iconId: 'chart-pie',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.DASHBOARD,
    title: 'Dashboard',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'blocks',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.CURRENT_WORKOUT,
    title: 'Workout',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'clipboard-plus',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.CHECK_IN,
    title: 'Check In',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'dumbbell',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.WORKOUTS,
    title: 'Workouts',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'test-tubes',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.CYCLES,
    title: 'Cycles',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'cog',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.CUSTOM_EXERCISES,
    title: 'Custom Exercises',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'database',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.EXERCISES,
    title: 'Exercises',
  },
  {
    authentication: true,
    authorization: [],
    iconId: 'user-round',
    navLocations: ['main', 'mobile'] as NavLocations[],
    path: Routes.PROFILE,
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
    authentication: false,
    authorization: [],
    navLocations: ['footer'],
    path: Routes.MURPH,
    title: 'Murph',
  },
  {
    authentication: false,
    authorization: [Roles.ADMIN],
    navLocations: ['footer'] as NavLocations[],
    path: Routes.STYLEGUIDE,
    title: 'Style Guide',
  },
]

export const getRoutes = (location: NavLocations, routeOrder?: Routes[]): NavItem[] => {
  let routesToFilter = APP_ROUTES

  if (routeOrder && routeOrder.length > 0) {
     routesToFilter = routeOrder
      .map((route) => APP_ROUTES.find((r) => r.path === route)) as NavItem[]
  }

  return routesToFilter.filter((route) => route.navLocations.includes(location as NavLocations))
}
