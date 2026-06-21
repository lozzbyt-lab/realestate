import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import AboutTeam from "@/components/sections/AboutTeam";
import AboutTimeline from "@/components/sections/AboutTimeline";

export const metadata = {
  title: "About — Brikly Construction",
  description: "15+ years building Austin's finest residential and commercial spaces.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        label="Who We Are"
        title={"Trusted Builders,\nProud Partners."}
        subtitle="Since 2009, Brikly has been Austin's go-to construction partner for homes, offices, and everything in between."
        frame="frame_0008.jpeg"
      />
      <About />
      <AboutTimeline />
      <Stats />
      <AboutTeam />
      <WhyUs />
    </PageLayout>
  );
}
