import PublicLayout from '@/components/_layout/public/PublicLayout'
import Link from 'next/link'

export default function Home() {
  return (
    <PublicLayout>
      <h1
        className="text-6xl uppercase text-secondary font-extrabold flex flex-col"
        style={{ fontFamily: 'Arial Black' }}
      >
        <div className="text-[min(8vw,6rem)] flex flex-col items-center mb-8 sm:mb-0 sm:items-start">
          <span className="md:-ml-8">Evidence</span>
          <span className="">Based</span>
          <span className="md:ml-8 text-primary">Strength</span>
        </div>
        <p className="text-base flex flex-col items-center sm:flex-row sm:ml-16 sm:gap-8">
          <Link href="/invite" className="text-secondary">
            Request an invite
        </Link>
          <span>or</span>
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </h1>
    </PublicLayout>
  )
}
