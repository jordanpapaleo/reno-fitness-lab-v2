import { getRoutes } from "@/config/routes";
import { BasePropT } from "@/types/componentTypes";
import clsx from "clsx";
import Link from "next/link";

export default function PageFooter({ className}: BasePropT) {
  const routes = getRoutes('footer')

  return (
    <div className={clsx('bg-background px-12 text-primary-foreground', className)}>
      <footer className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <nav>
          <header className="text-primary font-bold uppercase">Services</header>
          {routes
            .filter((route) => {
              return route.title !== 'Contact' && route.title !== 'Styleguide'
            })
            .map((route) => {
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className="block font-bold"
                >
                  <small>{route.title}</small>
                </Link>
              )
            })}
        </nav>
        <nav>
          <header className="text-primary font-bold uppercase">Company</header>
          {routes
            .filter((route) => {
              return route.title === 'Contact' || route.title === 'Styleguide'
            })
            .map((route) => {
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className="block font-bold"
                >
                  <small>{route.title}</small>
                </Link>
              )
            })}
        </nav>
        <nav>
          <header className="text-primary font-bold uppercase">Legal</header>
        </nav>
      </footer>
      <footer className="py-8 border-t border-border bg-base-200 ">
        <aside className="items-center grid-flow-col">
          {/* <Image src={Logo.src} alt="RFL logo" width={50} height={50} /> */}
          <h1 className="uppercase font-black text-lg">Reno Fitness Lab</h1>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            Mail Icon
            {/* <Link href="/contact">
              <Icon name="mail" />
            </Link> */}
          </div>
        </nav>
      </footer>
    </div>
  )
}
