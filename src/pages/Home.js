import React from 'react';
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import ProductSection from '../components/ProductSection';
import Features from '../components/Feature';
import PayPremium from '../components/PayPremium';
import ExploreMore from '../components/ExploreMore';
import Services from '../components/Services';
import Carousel from '../components/Carousel';

export default function Home() {
    return (
        < >
            <div id="others">
                <HorizontalScrollSection />
                {/* <Carousel /> */}
                <Services />
                <ProductSection />
                <Features />
                <PayPremium />
                <ExploreMore />
            </div>
        </>
    );
}