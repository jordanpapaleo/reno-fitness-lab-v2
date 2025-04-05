import PublicLayout from '@/components/_layout/public/PublicLayout'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import InviteForm from './InviteForm'

export default function LoginPage() {
  return (
    <PublicLayout>
      <Card>
        <CardHeader>
          <CardTitle>Request Invite</CardTitle>
        </CardHeader>
        <CardContent>
          <InviteForm />
        </CardContent>
      </Card>
    </PublicLayout>
  )
}
