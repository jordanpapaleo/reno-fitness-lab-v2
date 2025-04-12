// https://lucide.dev/icons/clipboard-plus
import { Blocks, Calendar, ChartPie, ChevronDown, ClipboardPlus, Cog, Database, Dumbbell, Inbox, LogOut, Search, Settings, TestTubes, UserRound } from "lucide-react"



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

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/lab/dashboard",
    icon: ChartPie,
  },
  {
    title: "Current Workout",
    url: "/lab/current-workout",
    icon: Dumbbell,
  },
  {
    title: "Workouts",
    url: "/lab/workouts",
    icon: Blocks,
  },
  {
    title: "Cycles",
    url: "/lab/cycles",
    icon: TestTubes,
  },

  {
    title: "Check In",
    url: "/lab/checkin",
    icon: ClipboardPlus,
  },
  {
    title: "Exercises",
    url: "/lab/exercises",
    icon: Database,
  },
  {
    title: "Custom Exercises",
    url: "/lab/custom-exercises",
    icon: Cog,
  },
]

const bottomNav = [
  {
    title: "Profile",
    url: "/lab/profile",
    icon: UserRound,
  },
  {
    title: "Sign Out",
    url: "#",
    icon: LogOut,
  },
]

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
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {bottomNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
