import {
  Blocks,
  ChartPie,
  ClipboardPlus,
  Cog,
  Database,
  Dumbbell,
  Inbox,
  LogOut,
  Search,
  Settings,
  TestTubes,
  UserRound,
} from "lucide-react"

type Icons =
  | 'blocks'
  | 'chart-pie'
  | 'checkin'
  | 'clipboard-plus'
  | 'cog'
  | 'database'
  | 'dumbbell'
  | 'inbox'
  | 'log-out'
  | 'search'
  | 'settings'
  | 'test-tubes'
  | 'user-round'

export const iconMap = new Map<Icons, React.FC<React.SVGProps<SVGSVGElement>>>([
  ['blocks', Blocks],
  ['chart-pie', ChartPie],
  ['checkin', ClipboardPlus],
  ['clipboard-plus', ClipboardPlus],
  ['cog', Cog],
  ['database', Database],  // <-- fixed typo here
  ['dumbbell', Dumbbell],
  ['inbox', Inbox],
  ['log-out', LogOut],
  ['search', Search],
  ['settings', Settings],
  ['test-tubes', TestTubes],
  ['user-round', UserRound],
])
