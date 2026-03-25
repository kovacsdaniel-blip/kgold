import { useState } from "react";

const services = [
  {
    title: "TikTok / Reels / Shorts",
    description:
      "Short-form videók vágása erős hookkal, pörgős ritmussal és figyelemmegtartó szerkezettel.",
    icon: "play",
  },
  {
    title: "Long-form vágás",
    description:
      "YouTube-videók, interjúk, podcastok és edukációs tartalmak letisztult, profi utómunkával.",
    icon: "cut",
  },
  {
    title: "AI automatizált tartalmak",
    description:
      "Feliratozás, gyors workflow, ismétlődő folyamatok gyorsítása és tartalomgyártás optimalizálása.",
    icon: "spark",
  },
];

const benefits = [
  "Gyors és modern videóvágás",
  "Short-form fókusz magasabb retentionre",
  "Feliratok és dinamikus vizuális ritmus",
  "Tartalomgyártóknak és márkáknak egyaránt",
];

const heroVideos = [
  {
    src: "/mnt/data/dangmuai1.mp4",
    title: "Videó 1",
    rotate: "rotate-[-10deg]",
    tone: "dark",
  },
  {
    src: "/mnt/data/freshline_koklerklimas.mp4",
    title: "Videó 2",
    rotate: "rotate-[9deg]",
    tone: "light",
    offset: "mt-10",
  },
];

const referenceVideos = [...heroVideos];

const contacts = [
  {
    title: "Instagram",
    value: "@danielk_gold",
    href: "https://instagram.com/danielk_gold",
    icon: "at",
  },
  {
    title: "Email",
    value: "dani031208@gmail.com",
    href: "mailto:dani031208@gmail.com",
    icon: "mail",
    breakAll: true,
  },
  {
    title: "Elérhetőség",
    value: "Telefonszám helye",
    href: "tel:+36300000000",
    icon: "phone",
  },
];

const smokeTests = [
  {
    name: "2 referencia videó jelenik meg",
    pass: referenceVideos.length === 2,
  },
  {
    name: "2 hero videó jelenik meg",
    pass: heroVideos.length === 2,
  },
  {
    name: "3 szolgáltatás jelenik meg",
    pass: services.length === 3,
  },
  {
    name: "3 kontakt kártya jelenik meg",
    pass: contacts.length === 3,
  },
  {
    name: "Minden kontakt rendelkezik hivatkozással",
    pass: contacts.every((contact) => typeof contact.href === "string" && contact.href.length > 0),
  },
];

function Icon({ name, className = "h-5 w-5" }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  if (name === "play") {
    return (
      <svg {...commonProps}>
        <polygon points="8 5 19 12 8 19 8 5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "cut") {
    return (
      <svg {...commonProps}>
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M8.2 7.8L19 19" />
        <path d="M8.2 16.2L19 5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg {...commonProps}>
        <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M7.5 4.5h3l1.2 3.1-1.8 1.8a14.8 14.8 0 0 0 4.7 4.7l1.8-1.8 3.1 1.2v3a1.5 1.5 0 0 1-1.6 1.5C9.6 18 6 14.4 6 10.1A1.5 1.5 0 0 1 7.5 8.5v-4z" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 12h16" />
      <path d="M12 4v16" />
    </svg>
  );
}

function ContactCard({ title, value, href, icon, breakAll = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 text-left transition duration-300 hover:bg-white/[0.07] hover:-translate-y-1"
    >
      <Icon name={icon} className="h-5 w-5" />
      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/45">{title}</p>
      <p className={`mt-2 text-base font-semibold ${breakAll ? "break-all" : ""}`}>{value}</p>
    </a>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight">{service.title}</h3>
      <p className="mt-4 leading-7 text-white/65">{service.description}</p>
    </div>
  );
}

function HeroVideoCard({ video }) {
  const isLight = video.tone === "light";

  return (
    <div
      className={`${video.offset || ""} ${video.rotate} min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/10 ${
        isLight ? "bg-white" : "bg-gradient-to-b from-neutral-800 via-neutral-900 to-black"
      } p-2 shadow-2xl`}
    >
      <div className="relative h-full overflow-hidden rounded-[1.2rem]">
        <video
          className="h-full min-h-[304px] w-full object-cover"
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </div>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black shadow-lg shadow-white/10">
        <span className="text-lg font-black">k.</span>
      </div>
      <div>
        <p className="text-lg font-black tracking-tight">k.gold</p>
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">videóvágás</p>
      </div>
    </div>
  );
}

export default function KGoldWebsite() {
  const [activePage, setActivePage] = useState("home");
  const testsPassed = smokeTests.every((test) => test.pass);
  const isHome = activePage === "home";
  const isReferences = activePage === "references";
  const isServices = activePage === "services";
  const isAbout = activePage === "about";
  const isContact = activePage === "contact";

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
          <div className="flex items-center justify-between">
            <button type="button" onClick={() => setActivePage("home")} className="text-left">
              <BrandMark />
            </button>

            <button
              type="button"
              onClick={() => setActivePage("contact")}
              className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              Írj nekem
            </button>
          </div>

          <nav className="flex flex-wrap items-center gap-3 text-sm text-white/70">
            <button
              type="button"
              onClick={() => setActivePage("home")}
              className={`rounded-full px-4 py-2 transition ${isHome ? "bg-white text-black" : "hover:text-white"}`}
            >
              Főoldal
            </button>
            <button
              type="button"
              onClick={() => setActivePage("references")}
              className={`rounded-full px-4 py-2 transition ${isReferences ? "bg-white text-black" : "hover:text-white"}`}
            >
              Referenciák
            </button>
            <button
              type="button"
              onClick={() => setActivePage("services")}
              className={`rounded-full px-4 py-2 transition ${isServices ? "bg-white text-black" : "hover:text-white"}`}
            >
              Szolgáltatások
            </button>
            <button
              type="button"
              onClick={() => setActivePage("about")}
              className={`rounded-full px-4 py-2 transition ${isAbout ? "bg-white text-black" : "hover:text-white"}`}
            >
              Miért én
            </button>
            <button
              type="button"
              onClick={() => setActivePage("contact")}
              className={`rounded-full px-4 py-2 transition ${isContact ? "bg-white text-black" : "hover:text-white"}`}
            >
              Kapcsolat
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        {isHome && (
          <>
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.09),transparent_24%)]" />
              <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
                <div className="relative z-10 animate-[fadeIn_0.7s_ease-out]">
                  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
                    Tiktok / Reels / Shorts videóvágás
                  </p>
                  <h1 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight md:text-6xl">
                    Vágás, ami megfogja a nézőt az első másodpercben.
                  </h1>
                  <p className="mt-10 max-w-2xl text-base leading-8 text-white/70">
                    Short-form és long-form videók professzionális vágása tartalomgyártóknak,
                    személyes márkáknak és vállalkozásoknak. A cél egyszerű: ütős tartalom,
                    erősebb figyelem, jobb megjelenés.
                  </p>

                  <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => setActivePage("contact")}
                      className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
                    >
                      Projektet indítok
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePage("references")}
                      className="rounded-2xl border border-white/15 px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white/5"
                    >
                      Referenciák megnyitása
                    </button>
                  </div>
                </div>

                <div className="relative animate-[fadeIn_0.9s_ease-out]">
                  <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-white/10 blur-3xl md:block" />
                  <div className="absolute -right-6 bottom-6 hidden h-40 w-40 rounded-full bg-white/10 blur-3xl md:block" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
                    <div className="grid gap-4 md:grid-cols-2">
                      {heroVideos.map((video) => (
                        <HeroVideoCard key={video.src} video={video} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {isReferences && (
          <>
            <section className="border-b border-white/10 bg-neutral-950 py-20">
              <div className="mx-auto max-w-7xl px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
                  Referenciák
                </p>
                <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Válogatott munkák és videós referenciák
                </h1>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-2">
                  {referenceVideos.map((video) => (
                    <div
                      key={`reference-${video.src}`}
                      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl"
                    >
                      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
                        <video
                          className="h-[520px] w-full object-cover"
                          src={video.src}
                          controls
                          muted
                          loop
                          playsInline
                          preload="metadata"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {isServices && (
          <>
            <section className="border-b border-white/10 bg-neutral-950 py-20">
              <div className="mx-auto max-w-7xl px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
                  Szolgáltatások
                </p>
                <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Tartalomvágás, ami a platformhoz van igazítva
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                  Short-form, long-form és automatizált videós workflow egy helyen, gyors és prémium kivitelezéssel.
                </p>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {isAbout && (
          <>
            <section className="border-b border-white/10 bg-neutral-950 py-20">
              <div className="mx-auto max-w-7xl px-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
                  Miért én
                </p>
                <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Letisztult vizuál, erős ritmus, gyors kivitelezés.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                  Olyan videókat készítek, amelyek nemcsak jól néznek ki, hanem jobban meg is tartják a figyelmet.
                </p>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <h2 className="text-2xl font-black tracking-tight md:text-4xl">
                    A tartalmad profibbnak hat, és tovább nézik végig.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
                    A videóidat úgy vágom meg, hogy egyszerre legyenek igényesek, modernebbek és platform-kompatibilisek. A cél az, hogy a tartalmad karakteresebb legyen és jobb első benyomást adjon.
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                  <div className="space-y-5">
                    {benefits.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                        <p className="text-base leading-7 text-white/80">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-white/10 bg-neutral-950 py-20">
              <div className="mx-auto max-w-7xl px-6">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
                  <div className="grid gap-8 md:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
                        Workflow
                      </p>
                      <h3 className="mt-4 text-2xl font-black">Egyszerű, gyors együttműködés</h3>
                    </div>
                    <div className="space-y-4 text-white/70 md:col-span-2">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                        <p className="font-semibold text-white">1. Brief és anyagküldés</p>
                        <p className="mt-2 leading-7">
                          Megbeszéljük a stílust, a célt és a platformot, ahová a videó készül.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                        <p className="font-semibold text-white">2. Vágás és finomhangolás</p>
                        <p className="mt-2 leading-7">
                          Tempó, hook, képi dinamika, feliratok és ritmus a nézők figyelmére optimalizálva.
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                        <p className="font-semibold text-white">3. Kész anyag átadás</p>
                        <p className="mt-2 leading-7">
                          Export a kívánt platformra szabva, gyors és egyszerű visszajelzési körrel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {isContact && (
          <>
            <section className="border-b border-white/10 bg-neutral-950 py-20">
              <div className="mx-auto max-w-7xl px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/45">
                  Kapcsolat
                </p>
                <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Dolgozzunk együtt a következő videódon.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  Ha short-form, reels, TikTok, YouTube vagy AI-alapú tartalomvágás kell,
                  írj és beszéljük át a projektedet.
                </p>
              </div>
            </section>

            <section className="py-20">
              <div className="mx-auto max-w-4xl px-6">
                <div className="grid gap-4 md:grid-cols-3">
                  {contacts.map((contact) => (
                    <ContactCard key={contact.title} {...contact} />
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <section className="border-t border-white/10 bg-neutral-950 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} k.gold — videóvágás</p>
            <p>{testsPassed ? "Smoke checks: OK" : "Smoke checks: ellenőrzés szükséges"}</p>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
