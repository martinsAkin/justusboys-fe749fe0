import { brand, nav, socials } from "@/content/site";

export function Footer() {
  return (
    <footer className="grain overflow-hidden pt-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <a href="#home" aria-label="Just Us Boys home"><img src={brand.logo} alt="Just Us Boys" loading="lazy" className="h-16 w-auto" width={95} height={64} /></a>
          <p className="mt-6 max-w-xs text-cream-soft">{brand.description}</p>
        </div>
        <nav aria-label="Footer" className="col-span-6 md:col-span-3 md:col-start-7">
          <p className="eyebrow mb-4 text-muted-foreground">Navigate</p>
          <ul className="space-y-2">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-primary">{n.label}</a></li>)}</ul>
        </nav>
        <div className="col-span-6 md:col-span-3">
          <p className="eyebrow mb-4 text-muted-foreground">Follow</p>
          <ul className="space-y-2">{socials.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary">{s.label}</a></li>)}</ul>
        </div>
      </div>
      <p aria-hidden className="font-display mt-16 select-none whitespace-nowrap px-3 text-center text-[13.5vw] text-primary">Just us boys</p>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 border-t border-border px-5 py-6 text-sm text-muted-foreground md:flex-row md:justify-between md:px-10">
        <p>© 2026 Just Us Boys. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" aria-disabled title="Coming soon" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" aria-disabled title="Coming soon" className="hover:text-foreground">Terms</a>
        </div>
      </div>
    </footer>
  );
}
