import { NavItem } from '@/config/routes'

export function getProtectedRoutes(pageRoutes: NavItem[]) {
  const protectedRoutes: string[] = []
  const routeMap = new Map()

  pageRoutes.forEach((route) => {
    routeMap.set(route.path, route.authorization)

    if (route.authentication || route.authorization.length) {
      protectedRoutes.push(route.path)
    }
  })

  return { protectedRoutes, routeMap }
}
