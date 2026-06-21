"use client";

import { useState } from "react";
import ScrollIntro from "@/components/ScrollIntro";
import MainContent from "@/components/MainContent";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <main>
      <ScrollIntro onComplete={() => setShowContent(true)} />
      <MainContent visible={showContent} />
    </main>
  );
}
