"use client";

import { useState } from "react";
import ScrollIntro from "@/components/ScrollIntro";
import Website from "@/components/Website";

export default function Home() {
  const [showSite, setShowSite] = useState(false);

  return (
    <main>
      <ScrollIntro onComplete={() => setShowSite(true)} />
      <Website visible={showSite} />
    </main>
  );
}
