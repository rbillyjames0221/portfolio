import { Metadata } from "next";
import { Mail, Phone, MapPin, Github } from "lucide-react";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      {/* Quick Contact Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <a
          href="mailto:rbillyjames0221@gmail.com"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
        >
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground font-medium">Email Me</div>
            <div className="text-sm font-semibold truncate text-foreground">
              rbillyjames0221@gmail.com
            </div>
          </div>
        </a>

        <a
          href="tel:+639364536500"
          className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:bg-accent transition-colors"
        >
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <Phone className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground font-medium">Call / Message</div>
            <div className="text-sm font-semibold text-foreground">
              +639364536500
            </div>
          </div>
        </a>

        <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground font-medium">Location</div>
            <div className="text-sm font-semibold text-foreground">
              Taguig City, Philippines
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex justify-end">
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
