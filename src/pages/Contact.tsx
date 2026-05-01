import { useState } from "react";
import { z } from "zod";
import { Loader2, MessageCircle, Mail, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  business: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  project_type: z.string().max(80).optional().or(z.literal("")),
  budget: z.string().max(80).optional().or(z.literal("")),
  timeline: z.string().max(80).optional().or(z.literal("")),
  brief: z.string().trim().max(2000).optional().or(z.literal("")),
});

const projectTypes = [
  "Starter Website (R2,500)",
  "Business Website (R3,500)",
  "Premium Website (R7,500)",
  "Web App / SaaS",
  "Mobile App",
  "E-Commerce Store",
];
const budgets = ["Under R5,000", "R5,000 - R15,000", "R15,000 - R50,000", "R50,000+"];
const timelines = ["ASAP", "1-2 Weeks", "1 Month", "Not Urgent"];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast.error(first ?? "Please check the form");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      business: parsed.data.business || null,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      project_type: parsed.data.project_type || null,
      budget: parsed.data.budget || null,
      timeline: parsed.data.timeline || null,
      brief: parsed.data.brief || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Try WhatsApp instead.");
      return;
    }
    toast.success("Got it! We'll be in touch within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="container-wide pt-16 pb-12 md:pt-24">
        <p className="eyebrow">Talk to us</p>
        <h1 className="display mt-4 text-5xl md:text-7xl max-w-4xl">
          Request a callback <span className="serif text-accent">or start on WhatsApp.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Share your contact details and project type. Ntombii Tech will follow up with the best next step for your build.
        </p>
      </section>

      <section className="container-wide pb-24 md:pb-32 grid gap-10 md:grid-cols-12">
        <aside className="md:col-span-4 space-y-4">
          <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer"
             className="block rounded-3xl bg-foreground text-background p-6 hover:opacity-95 transition">
            <MessageCircle className="h-5 w-5" />
            <h3 className="display mt-4 text-2xl">WhatsApp</h3>
            <p className="mt-1 text-sm text-background/70">{SITE.whatsappDisplay}</p>
            <p className="mt-3 text-xs text-background/60">Fastest way to reach the studio.</p>
          </a>
          <div className="rounded-3xl bg-card border border-border/70 p-6">
            <Mail className="h-5 w-5" />
            <h3 className="display mt-4 text-2xl">Email</h3>
            <p className="mt-1 text-sm text-muted-foreground">hello@ntombii.tech</p>
          </div>
          <div className="rounded-3xl bg-card border border-border/70 p-6">
            <MapPin className="h-5 w-5" />
            <h3 className="display mt-4 text-2xl">Studio</h3>
            <p className="mt-1 text-sm text-muted-foreground">Newcastle, KZN — South Africa</p>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="md:col-span-8 rounded-3xl bg-card border border-border/70 p-6 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your full name" name="name" required />
            <Field label="Business name (optional)" name="business" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Email address" name="email" type="email" required />
            <Field label="Phone number" name="phone" type="tel" />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Select label="Project type" name="project_type" options={projectTypes} />
            <Select label="Budget" name="budget" options={budgets} />
            <Select label="Timeline" name="timeline" options={timelines} />
          </div>
          <div>
            <label className="text-sm font-medium">Project brief</label>
            <textarea
              name="brief"
              rows={5}
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10"
              placeholder="Tell us about goals, audience, anything you've tried..."
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Request contact
          </button>
          <p className="text-xs text-muted-foreground">
            We save your contact details first, then continue the conversation on WhatsApp.
          </p>
        </form>
      </section>
    </>
  );
};

const Field = ({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) => (
  <div>
    <label className="text-sm font-medium">{label}{required && <span className="text-accent"> *</span>}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10"
    />
  </div>
);

const Select = ({ label, name, options }: { label: string; name: string; options: string[] }) => (
  <div>
    <label className="text-sm font-medium">{label}</label>
    <select
      name={name}
      defaultValue=""
      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10"
    >
      <option value="">Select...</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

export default Contact;
