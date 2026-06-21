import Nav from "@/components/Nav";
import Footer from "@/components/sections/Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white">
      <Nav dark />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
