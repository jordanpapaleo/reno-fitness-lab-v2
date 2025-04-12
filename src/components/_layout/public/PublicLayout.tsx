import Frame from '@/components/Frame'
import Poster from '@/components/Poster'
import PageFooter from './PageFooter'

export default function PublicLayout({children}: {children: React.ReactNode}) {
  return (
      <Poster
        path="assets/chalk-barbell.jpg"
        className="bg-[55%_0%] md:bg-center relative"
      >
        <Frame />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="absolute text-4xl top-14 left-16 text-orange-500 font-extrabold text-[min(8vw,2rem)]">
            Reno Fitness Lab
          </h1>
          {children}
        </div>
        <PageFooter className="absolute top-[100%] dark w-full" />
      </Poster>
  )
}
