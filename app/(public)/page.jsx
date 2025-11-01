'use client'
import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurSpecs from "@/components/OurSpec";
import LatestArticles from "@/components/LatestArticles";
import LatestCourses from "@/components/LatestCourses";
import LatestTestimonials from "@/components/LatestTestimonials";

export default function Home() {
    return (
        <div>
            <Hero />
            <LatestArticles />
            <LatestCourses />
            {/* <LatestProducts />
            <BestSelling /> */}
            <OurSpecs />
            <LatestTestimonials />
            <Newsletter />
        </div>
    );
}
