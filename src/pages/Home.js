import React from 'react';
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import ProductSection from '../components/ProductSection';
import Features from '../components/Feature';
import PayPremium from '../components/PayPremium';
import ExploreMore from '../components/ExploreMore';
import Services from '../components/Services';

export default function Home() {
    return (
        < >

            <div id="others">
                <HorizontalScrollSection />
                <Services />
                {/* <ProductSection /> */}
                <Features />
                <PayPremium />
                <ExploreMore />
            </div>
        </>
    );
}