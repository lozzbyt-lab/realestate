import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata = {
  title: "Projects — Brikly Construction",
  description: "Browse our portfolio of residential, commercial, and renovation projects across Austin.",
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHero
        label="Our Portfolio"
        title={"Built to Last.\nDesigned to Inspire."}
        subtitle="Every project tells a story of craftsmanship, vision, and dedication."
        frame="frame_0022.jpeg"
      />
      <ProjectsGallery />
      <CtaBanner />
    </PageLayout>
  );
}
