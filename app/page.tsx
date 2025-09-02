"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  FlaskConical,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Factory,
  Droplets,
  Clock,
  Leaf,
  ArrowRight,
  Star,
  Recycle,
  Microscope,
  Stethoscope,
} from "lucide-react";

import logo from "../public/logo.png";
import Image from "next/image";

// Optional: shadcn/ui components. If you don't use shadcn, replace Button/Card with <button>/<div> styled via Tailwind.
const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: string;
    size?: string;
  }
> = ({ children, className = "", variant, size, ...props }) => (
  <button
    className={`px-4 py-2 rounded-xl font-semibold transition ${className} ${
      variant === "outline"
        ? "border border-slate-300 bg-white text-slate-900"
        : "bg-[var(--brand)] text-white"
    }`}
    {...props}
  >
    {children}
  </button>
);
// Simple Card fallback if shadcn/ui is not installed
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`bg-white rounded-xl shadow border ${className}`} {...props}>
    {children}
  </div>
);
const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
);

/**
 * CT Natural — Landing Page (Next.js + TypeScript)
 *
 * Usage:
 * 1) Save as app/page.tsx (App Router) or pages/index.tsx (Pages Router).
 * 2) Ensure Tailwind CSS is set up.
 * 3) If not using shadcn/ui, swap the Button/Card imports above with plain elements.
 */

const CONFIG = {
  companyName: "CT Natural",
  tagline: "Natural spray-on cleaner for contrast in MRI & CT suites",
  // 🌿 Brand palette
  primaryHex: "#16a34a", // emerald-600
  accentHex: "#22c55e", // green-500
  supportEmail: "hello@ctnatural.example",
  supportPhone: "+1 (555) 987-1234",
  supportAddress: "Haarlem, NL",
  logoText: "CTN",
  heroImage:
    // MRI/CT room — replace with brand asset if you have one
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop",
  productShot:
    // Spray bottle / lab surface — replace with product photo when available
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
};

const useBrandStyle = () =>
  useMemo(
    () =>
      ({
        ["--brand"]: CONFIG.primaryHex,
        ["--accent"]: CONFIG.accentHex,
      } as React.CSSProperties),
    []
  );

const container = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const features: Array<{ icon: React.ReactNode; title: string; desc: string }> =
  [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Equipment‑Safe",
      desc: "Non‑abrasive and materials‑conscious for housings, tables, and accessories common to MRI/CT.",
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Contrast Cleanup, Simplified",
      desc: "Cuts through iodinated and gadolinium spill residue with a quick spray‑and‑wipe routine.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Residue‑Free Finish",
      desc: "Leaves surfaces clean without sticky films—great for patient‑contact areas.",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Fast Turnover",
      desc: "Rapid application supports efficient room turnaround between scans.",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Naturally Derived",
      desc: "Plant‑forward formulation, low odor, and friendly daily handling characteristics.",
    },
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Reliable Supply",
      desc: "From solo clinics to multi‑site networks—predictable lead times and volume options.",
    },
  ];

const testimonials = [
  {
    name: "Dr. Elena Park",
    role: "Lead Radiographer",
    quote:
      "Room turnover is smoother and the low‑odor profile is a win for patients.",
  },
  {
    name: "Samir Patel",
    role: "Facilities Manager",
    quote: "Gentle on panels and pads—no residue under harsh lighting checks.",
  },
  {
    name: "Maria Gomez",
    role: "Clinic Owner",
    quote: "The spray format keeps training simple for rotating staff.",
  },
];

export default function LandingPage() {
  const brandStyle = useBrandStyle();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `${CONFIG.companyName} — Website Inquiry`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Company: ${form.company}

${form.message}`
    );
    window.location.href = `mailto:${CONFIG.supportEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white to-emerald-50 text-slate-900"
      style={brandStyle}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-emerald-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src={logo}
              alt="CT Natural logo"
              className="h-20 w-auto md:h-22" // increased from h-9
              priority
            />
            <div>
              {/* <p className="text-base font-semibold leading-tight">
                {CONFIG.companyName}
              </p> */}
              <p className="text-sm text-slate-500">{CONFIG.tagline}</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#product"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Product
            </a>
            <a
              href="#docs"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Docs
            </a>
            <a
              href="#contact"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Contact
            </a>
            <Button className="bg-[var(--brand)] hover:bg-[var(--brand)]/90">
              Get a Quote
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Natural{" "}
              <span className="text-[var(--brand)]">spray‑on cleaner</span> for
              imaging care
            </h1>
            <p className="text-slate-600 md:text-lg">
              Designed for MRI and CT environments to simplify contrast cleanup,
              support patient comfort, and protect sensitive equipment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-[var(--brand)] hover:bg-[var(--brand)]/90">
                Talk to Sales
              </Button>
              <Button variant="outline" className="border-emerald-300">
                Download SDS
              </Button>
              <Button variant="outline" className="border-emerald-300">
                Product Sheet (PDF)
              </Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4" /> Equipment‑safe
              </div>
              <div className="flex items-center gap-1">
                <Microscope className="h-4 w-4" /> Lab‑tested
              </div>
              <div className="flex items-center gap-1">
                <Leaf className="h-4 w-4" /> Low odor
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-emerald-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.heroImage}
                alt="MRI/CT room"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-3xl bg-[var(--accent)]/10 blur-2xl md:block" />
            <div className="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-3xl bg-[var(--brand)]/10 blur-2xl md:block" />
          </motion.div>
        </div>
      </section>

      {/* Logos / Social proof */}
      <section className="border-y border-emerald-200/60 bg-white/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-6 px-4 py-8 md:grid-cols-6 md:px-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-8 rounded bg-emerald-100" />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-30 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Why imaging teams choose {CONFIG.companyName}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Built for day‑to‑day workflows—clean quickly, protect equipment, and
            keep rooms patient‑ready.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="rounded-2xl border-emerald-200/70">
              <CardContent className="p-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-[var(--brand)]/10 px-3 py-2 text-[var(--brand)]">
                  {f.icon}
                  <span className="text-sm font-semibold">{f.title}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Product */}
      <section id="product" className="bg-white/70">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Made for MRI & CT workflows
            </h3>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Quick spray‑and‑wipe routine for contrast spill cleanup",
                "Residue‑free on tables, coils, pads, and housings",
                "Low‑odor handling that supports patient comfort",
                "Ready‑to‑use bottles; bulk refills available",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-[var(--brand)] hover:bg-[var(--brand)]/90">
                Request Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-emerald-300">
                Book a Demo
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-emerald-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CONFIG.productShot}
                alt="CT Natural spray bottle"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <h3 className="text-2xl font-semibold md:text-4xl">
            Teams love the simplicity
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            From community clinics to hospital networks, CT Natural helps
            streamline daily cleaning tasks.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="rounded-2xl border-emerald-200/70">
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-500">
                  <span className="font-medium text-slate-700">{t.name}</span> ·{" "}
                  {t.role}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Docs / SDS */}
      <section id="docs" className="relative isolate">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl border border-emerald-200/70 bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] p-8 text-white shadow-xl">
            <div className="grid items-center gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-semibold leading-tight md:text-3xl">
                  Documentation at your fingertips
                </h3>
                <p className="mt-2 text-white/90">
                  Access SDS, IFU, and product data sheets for your compliance
                  workflows.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Button
                  size="lg"
                  className="bg-grey-300 text-slate-900 hover:bg-white/90"
                >
                  Download SDS
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="bg-grey-300 text-slate-900 hover:bg-white/90"
                >
                  Spec Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">
              Talk to our team
            </h3>
            <p className="mt-3 max-w-prose text-slate-600">
              Tell us about your imaging suite and needs. We'll follow up with
              product details and next steps.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> {CONFIG.supportEmail}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> {CONFIG.supportPhone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {CONFIG.supportAddress}
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-emerald-200/70 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="mb-1 block text-sm font-medium">Name</label>
                <input
                  required
                  className="w-full rounded-xl border border-emerald-300 px-3 py-2 outline-none ring-[var(--brand)]/30 focus:ring-2"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="md:col-span-1">
                <label className="mb-1 block text-sm font-medium">Email</label>
                <input
                  required
                  type="email"
                  className="w-full rounded-xl border border-emerald-300 px-3 py-2 outline-none ring-[var(--brand)]/30 focus:ring-2"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">
                  Organization
                </label>
                <input
                  className="w-full rounded-xl border border-emerald-300 px-3 py-2 outline-none ring-[var(--brand)]/30 focus:ring-2"
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-xl border border-emerald-300 px-3 py-2 outline-none ring-[var(--brand)]/30 focus:ring-2"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Button
                type="submit"
                className="bg-[var(--brand)] hover:bg-[var(--brand)]/90"
              >
                Send Inquiry
              </Button>
              {submitted && (
                <span className="text-sm text-emerald-700">
                  Thanks! Your email client should open…
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-emerald-200/60 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--brand)] text-white font-bold tracking-tight">
              {CONFIG.logoText}
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">
                {CONFIG.companyName}
              </p>
              <p className="text-xs text-slate-500">{CONFIG.tagline}</p>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              © {new Date().getFullYear()} {CONFIG.companyName}. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center justify-start gap-4 md:justify-end">
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
              SDS
            </a>
            <a href="#" className="text-sm text-slate-600 hover:text-slate-900">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
