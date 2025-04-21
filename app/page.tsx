import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UploadSection from "@/components/UploadSection";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <HeroSection/>

            {/* Conversion Section */}
            <UploadSection/>

            {/* Features Section */}
            <FeaturesSection/>

        </div>
    )
}
