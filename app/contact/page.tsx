import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact — Brikly Construction",
  description: "Get in touch with Brikly. Let's start building your vision.",
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        label="Get In Touch"
        title={"Let's Build\nSomething Great."}
        subtitle="Tell us about your project and we'll be in touch within one business day."
        frame="frame_0030.jpeg"
      />
      <ContactSection />
    </PageLayout>
  );
}
