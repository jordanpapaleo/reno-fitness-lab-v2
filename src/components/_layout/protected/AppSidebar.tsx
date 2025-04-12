


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { getRoutes, NavItem, Routes } from "@/config/routes"
import { iconMap } from "@/components/ui/iconMap"
import { ChevronDown } from "lucide-react"

type Plop = Omit<NavItem, "iconId"> & {
  icon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
}


const topRoutes:Plop[] = getRoutes('main', [
  Routes.DASHBOARD,
  Routes.CURRENT_WORKOUT,
  Routes.WORKOUTS,
  Routes.CYCLES,
  Routes.CHECK_IN,
  Routes.EXERCISES,
  Routes.CUSTOM_EXERCISES,
]).map((route) => ({
  ...route,
  icon: iconMap.get(route?.iconId),
}))

const bottomRoutes: Plop[] = getRoutes('main', [
  Routes.PROFILE
]).map((route) => ({
  ...route,
  icon: iconMap.get(route?.iconId),
}))

bottomRoutes.push({
  path: '#',
  icon: iconMap.get('log-out'),
  title: 'Log out',
} as Plop)


console.log(bottomRoutes)

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className="uppercase font-black text-lg">Reno Fitness Lab</h1>
      </SidebarHeader>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Client
                  <ChevronDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem>
                  <span>Gavin</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Colin</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sawyer</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavLinks routes={topRoutes} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavLinks routes={bottomRoutes} />
      </SidebarFooter>
    </Sidebar>
  )
}


const NavLinks = ({ routes }: { routes: Plop[] }) => (
  <SidebarMenu>
    {routes.map((route) => (
      <SidebarMenuItem key={route.title}>
        <SidebarMenuButton asChild>
          <Link href={route.path}>
            {route.icon && <route.icon />}
            <span>{route.title}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    ))}
  </SidebarMenu>
)
