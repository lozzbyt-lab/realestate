import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ServiceProcess from "@/components/sections/ServiceProcess";
import CtaBanner from "@/components/sections/CtaBanner";
import ServiceFaq from "@/components/sections/ServiceFaq";

export const metadata = {
  title: "Services — Brikly Construction",
  description: "Full-spectrum construction services: residential, commercial, renovation & consulting.",
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        label="What We Do"
        title={"Full-Spectrum\nConstruction Services."}
        subtitle="From ground-up builds to precision renovations — we handle every stage of your project."
        frame="frame_0014.jpeg"
      />
      <ServicesGrid />
      <ServiceProcess />
      <CtaBanner />
      <ServiceFaq />
    </PageLayout>
  );
}
