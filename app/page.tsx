import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, Eye, PenSquare, Zap, Code } from "lucide-react"
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UploadSection from "@/components/UploadSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Conversion Section */}
      <UploadSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
