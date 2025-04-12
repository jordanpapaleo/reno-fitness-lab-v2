import ProtectedLayout from "@/components/_layout/protected/ProtectedLayout";
import { getAuthProfile } from "@/utils/db/profiles/getAuthProfile";

export default async function CheckinPage() {
  const stuff = await getAuthProfile()
  return (
    <ProtectedLayout headerText="Check In">
      <pre>{JSON.stringify(stuff, null, 2)}</pre>
    </ProtectedLayout>
  )
}

