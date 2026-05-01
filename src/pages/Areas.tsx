import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SEO } from "@/components/seo/SEO";
import { LOCATIONS } from "@/lib/locations";
import {
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/seo";

const Areas = () => {
  const byDistrict = LOCATIONS.reduce<Record<string, typeof LOCATIONS>>(
    (acc, l) => {
      (acc[l.district] ||= []).push(l);
      return acc;
    },
    {},
  );

  return (
    <>
      <SEO
        title="Areas We Serve — Web Design Across Northern KZN"
        description="Ntombii Tech designs and builds websites for businesses across Newcastle, Madadeni, Vryheid, Ladysmith, Dundee, Utrecht and the wider Northern KwaZulu-Natal region."
        path="/areas"
        keywords="web design Northern KZN, web designer Newcastle, web design Vryheid, web designer Ladysmith, KZN web agency"
        schemas={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas" },
          ]),
        ]}
      />

      <section className="container-wide pt-16 pb-12 md:pt-24">
        <Reveal>
          <p className="eyebrow">Areas we serve</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-4 text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Web design across <span className="serif text-accent">Northern KZN.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We're based in Newcastle and work with businesses across Amajuba,
            Zululand, uMzinyathi and uThukela districts. Pick your town to see
            how we help local businesses win on Google.
          </p>
        </Reveal>
      </section>

      <section className="container-wide pb-24 md:pb-32 space-y-16">
        {Object.entries(byDistrict).map(([district, towns]) => (
          <div key={district}>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-4 w-4 text-accent" />
                <h2 className="display text-2xl md:text-3xl">
                  {district} District
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
              {towns.map((t, i) => (
                <Reveal key={t.slug} delay={i * 60}>
                  <Link
                    to={`/areas/${t.slug}`}
                    className="group block lift rounded-2xl border border-border/70 bg-card p-6 h-full"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="display text-xl">{t.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          {t.region}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition shrink-0" />
                    </div>
                    <p className="mt-4 text-sm text-foreground/75 line-clamp-3">
                      {t.intro}
                    </p>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      {t.industries.slice(0, 3).join(" · ")}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Areas;
