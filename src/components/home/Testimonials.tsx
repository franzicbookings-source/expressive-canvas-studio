import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/home/Reveal";
import { cn } from "@/lib/utils";

const sectionLabel = (n: string, label: string) => (
  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-10">
    <span className="tabular-nums">({n})</span>
    <span className="h-px w-8 bg-border" />
    <span>{label}</span>
  </div>
);

export const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, containScroll: "trimSnaps" },
    [autoplay.current],
  );

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    setSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    onSelect();
  }, [emblaApi]);

  return (
    <section className="container-wide py-20 md:py-28 border-t border-border/60">
      <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16 items-end">
        <div className="col-span-12 md:col-span-7">
          {sectionLabel("04", "Testimonials")}
          <h2 className="display-xl">
            Words from <span className="serif text-accent">people</span>
            <br />
            we've actually <span className="serif">shipped for.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col gap-6">
          <p className="text-muted-foreground">
            Every quote here is tied to a live project you can open and click
            through. No stock praise.
          </p>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => emblaApi?.scrollPrev()}
              className="h-11 w-11 rounded-full border border-border/70 inline-flex items-center justify-center hover:bg-foreground hover:text-background transition"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => emblaApi?.scrollNext()}
              className="h-11 w-11 rounded-full border border-border/70 inline-flex items-center justify-center hover:bg-foreground hover:text-background transition"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <Reveal>
        <div
          className="overflow-hidden -mx-4 px-4 select-none"
          ref={emblaRef}
        >
          <div className="flex touch-pan-y">
            {SITE.testimonials.map((t, i) => (
              <div
                key={t.name}
                className={cn(
                  "flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_72%] min-w-0 pr-5",
                  "transition-opacity duration-500",
                  selected === i ? "opacity-100" : "opacity-50",
                )}
              >
                <article className="rounded-3xl bg-foreground text-background p-8 md:p-12 lg:p-16 relative overflow-hidden h-full">
                  <div
                    aria-hidden
                    className="absolute -top-24 -right-16 h-80 w-80 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(closest-side, hsl(var(--accent) / 0.35), transparent)",
                    }}
                  />
                  <div className="relative flex flex-col h-full">
                    <div className="serif text-6xl md:text-7xl text-accent leading-none select-none">
                      &ldquo;
                    </div>
                    <p className="mt-2 display text-xl md:text-2xl lg:text-3xl leading-snug text-background/95">
                      {t.quote}
                    </p>
                    <div className="mt-10 flex items-end justify-between gap-4 pt-6 border-t border-background/15">
                      <div>
                        <p className="display text-base">{t.name}</p>
                        <p className="text-sm text-background/60">{t.role}</p>
                      </div>
                      <Link
                        to={`/work#${t.project}`}
                        className="inline-flex items-center gap-1.5 text-sm text-background/80 hover:text-accent transition shrink-0"
                      >
                        View project <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + mobile hint */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  selected === i
                    ? "w-8 bg-foreground"
                    : "w-4 bg-border hover:bg-muted-foreground",
                )}
              />
            ))}
          </div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:hidden">
            Swipe →
          </p>
          <p className="hidden md:block text-[11px] uppercase tracking-[0.22em] text-muted-foreground tabular-nums">
            {String(selected + 1).padStart(2, "0")} / {String(snaps.length).padStart(2, "0")}
          </p>
        </div>
      </Reveal>
    </section>
  );
};
