import PublicLayout from '@/components/_layout/public/PublicLayout'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <PublicLayout>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </PublicLayout>
  )
}
