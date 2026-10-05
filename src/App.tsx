import { motion } from 'framer-motion';
import { Bot, Smartphone, Plug, Youtube, Send, MessageCircle, Languages, Code2, Sparkles, Ban } from 'lucide-react';
import { profile, links, services, notAvailable, alsoSkilled, tech, languages } from './data';

const icons = { Bot, Smartphone, Plug } as const;
const Wrap = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <section id={id} className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-16">{children}</section>
);
const Title = ({ icon: I, children }: { icon: typeof Code2; children: React.ReactNode }) => (
  <h2 className="h-sub mb-6 flex items-center gap-3 font-bold text-white">
    <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime text-ink"><I size={20} /></span>{children}
  </h2>
);

function Hero() {
  return (
    <header className="bg-dots relative">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-10 pt-12 sm:px-8 md:grid-cols-2 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}
          className="relative mx-auto w-full max-w-[340px] md:max-w-[400px]">
          <div className="absolute -left-3 -top-3 h-20 w-20 rounded-2xl border border-lime/30 bg-panel" />
          <div className="absolute -bottom-4 -right-4 h-[92%] w-[92%] rounded-[2rem] bg-lime/90" />
          <img src={profile.photo} alt={profile.name} className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-top" />
          <div className="absolute -right-3 -top-3 grid h-20 w-20 place-items-center rounded-full bg-lime text-center leading-none text-ink shadow-xl sm:h-24 sm:w-24">
            <span><b className="font-display text-xl sm:text-2xl">{profile.years}</b><br /><small className="text-xs font-semibold">years</small></span>
          </div>
          <div className="absolute -bottom-3 left-3 flex items-center gap-2 rounded-full border border-lime/50 bg-ink px-4 py-2 text-sm font-medium text-white">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" /><span className="relative h-2.5 w-2.5 rounded-full bg-lime" /></span>
            Available for work
          </div>
        </motion.div>

        <div className="mt-6 text-center md:mt-0 md:text-left">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-lime/30 bg-panel px-4 py-1.5 text-sm text-lime md:mx-0">
            <Bot size={16} /> Focused on bot development
          </p>
          <h1 className="h-fluid mt-5 font-bold text-white">Hi, I'm <span className="text-lime">{profile.name}</span></h1>
          <p className="mt-4 font-display text-lg font-medium text-white/90 sm:text-xl">{profile.title}</p>
          <p className="mx-auto mt-3 max-w-md text-base text-white/60 md:mx-0">{profile.intro}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a href={links.contact} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-semibold text-ink transition active:scale-95"><MessageCircle size={18} /> Contact me</a>
            <a href="#links" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-medium text-white">See my channels</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Services() {
  return (
    <Wrap id="services">
      <Title icon={Bot}>What I build</Title>
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((s, i) => { const I = icons[s.icon as keyof typeof icons]; return (
          <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}
            className="rounded-3xl border border-lime/15 bg-panel p-6">
            <I className="text-lime" size={28} />
            <h3 className="mt-4 font-display text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-1 text-white/60">{s.text}</p>
          </motion.div>); })}
      </div>
      <p className="mt-5 flex items-center gap-2 text-sm text-white/45"><Ban size={16} /> {notAvailable}</p>
      <div className="mt-8">
        <p className="mb-3 flex items-center gap-2 text-white/70"><Sparkles size={16} className="text-lime" /> Also skilled as</p>
        <div className="flex flex-wrap gap-2">{alsoSkilled.map(s => <span key={s} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80">{s}</span>)}</div>
      </div>
    </Wrap>
  );
}

function Tech() {
  return (
    <Wrap id="tech">
      <Title icon={Code2}>Tech I know</Title>
      <div className="flex flex-wrap gap-2.5">
        {tech.map(t => <span key={t} className="rounded-xl bg-panel px-4 py-2.5 font-display text-sm font-medium text-lime ring-1 ring-lime/20 sm:text-base">{t}</span>)}
      </div>
      <div className="mt-12"><Title icon={Languages}>Languages</Title>
        <div className="flex flex-wrap gap-2.5">{languages.map(l => <span key={l} className="rounded-full bg-lime px-5 py-2 font-semibold text-ink">{l}</span>)}</div>
      </div>
    </Wrap>
  );
}

function Links() {
  const items = [
    { icon: Youtube, label: 'YouTube channel', sub: 'Watch my videos', href: links.youtube },
    { icon: Send, label: 'Telegram channel', sub: 't.me/uglybots', href: links.channel },
    { icon: MessageCircle, label: 'Contact me', sub: profile.handle, href: links.contact },
  ];
  return (
    <Wrap id="links">
      <h2 className="h-sub mb-6 font-bold text-white">Let's connect</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((it, i) => (
          <a key={it.label} href={it.href} target="_blank" rel="noreferrer"
            className={`group flex items-center gap-4 rounded-3xl p-5 transition active:scale-[.98] ${i === 2 ? 'bg-lime text-ink' : 'border border-lime/20 bg-panel text-white hover:border-lime'}`}>
            <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${i === 2 ? 'bg-ink text-lime' : 'bg-lime text-ink'}`}><it.icon size={24} /></span>
            <span><b className="block font-display text-lg">{it.label}</b><span className={i === 2 ? 'text-ink/70' : 'text-white/55'}>{it.sub}</span></span>
          </a>
        ))}
      </div>
    </Wrap>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-ink pb-[env(safe-area-inset-bottom)]">
      <Hero /><Services /><Tech /><Links />
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/40">© {new Date().getFullYear()} {profile.name}</footer>
    </main>
  );
}
