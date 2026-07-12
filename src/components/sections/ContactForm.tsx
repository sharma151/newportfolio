"use client";

import { useGSAP } from "@gsap/react";
import { CheckCircle2, Clock, Mail, MapPin, Send } from "lucide-react";
import { type FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { siteConfig, socialLinks } from "@/data/portfolioData";
import { gsap, registerScrollTrigger } from "@/hooks/useScrollTrigger";
import { cn } from "@/lib/utils";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

interface FormErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: FormData = {
  firstname: "",
  lastname: "",
  email: "",
  subject: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.firstname.trim()) errors.firstname = "First name is required";
  if (!data.lastname.trim()) errors.lastname = "Last name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useGSAP(
    () => {
      registerScrollTrigger();

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message");
      }
      setSubmittedName(formData.firstname);
      setFormData(initialFormData);
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("FAILED...", err);
      setSubmitError(
        err.message || "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="border-t border-border px-6 py-24 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div ref={contentRef} className="mx-auto max-w-6xl">
        <div className="mb-16 text-center lg:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Let&apos;s Build Something Great
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Info panel */}
          <aside className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-8">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    Available for freelance
                  </span>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    Whether you have a project in mind, want to collaborate, or
                    just want to say hello — my inbox is always open.
                  </p>
                </div>

                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                      <Mail
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        data-cursor="interactive"
                        className="text-sm font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                      <MapPin
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Location
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {siteConfig.location}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                      <Clock
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Response time
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        Within 48 hours
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="border-t border-border pt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Connect
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {socialLinks.slice(0, 3).map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="interactive"
                        className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div
                className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-accent/30 bg-accent/5 p-12 text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2
                  className="h-14 w-14 text-accent"
                  aria-hidden="true"
                />
                <p className="mt-6 text-2xl font-semibold text-foreground">
                  Message sent successfully!
                </p>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Thanks for reaching out,{submittedName || "there"}. I&apos;ll
                  get back to you soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={cn(
                  "rounded-3xl border border-border bg-card p-8 sm:p-10",
                  "shadow-sm"
                )}
                noValidate
                aria-label="Contact form"
              >
                {submitError && (
                  <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-500">
                    {submitError}
                  </div>
                )}
                <div className="grid gap-6 sm:grid-cols-2">
                  <Input
                    label="First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    error={errors.firstname}
                    placeholder="John Doe"
                    required
                    autoComplete="name"
                  />
                  <Input
                    label="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    error={errors.lastname}
                    placeholder="Doe"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <div className="mt-6">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="mt-6">
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="Project inquiry, collaboration..."
                    required
                  />
                </div>

                <div className="mt-6">
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell me about your project, timeline, and goals..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="mt-8 w-full sm:w-auto"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
