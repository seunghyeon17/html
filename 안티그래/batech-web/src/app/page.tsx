"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Equipment from "@/components/Equipment";
import Facilities from "@/components/Facilities";
import Directions from "@/components/Directions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DocModal from "@/components/DocModal";

export default function Home() {
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);
  const [activeDocId, setActiveDocId] = useState<string | null>(null);

  const handleOpenDoc = (docId: string) => {
    setActiveDocId(docId);
    setIsDocModalOpen(true);
  };

  const handleCloseDoc = () => {
    setIsDocModalOpen(false);
    setTimeout(() => setActiveDocId(null), 200); // Wait for fade-out
  };

  return (
    <main className="min-h-screen">
      <Header onOpenDoc={handleOpenDoc} />
      
      <Hero />
      <About />
      <Equipment />
      <Facilities />
      <Directions />
      <Contact />
      
      <Footer />

      <DocModal 
        isOpen={isDocModalOpen} 
        onClose={handleCloseDoc} 
        documentId={activeDocId} 
      />
    </main>
  );
}
