import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
// import HorizontalScrollSection from "../components/HorizontalScrollSection";
import ProductSection from '../components/ProductSection';
import Products from '../components/Products';
import PayPremium from '../components/PayPremium';
import ExploreMore from '../components/ExploreMore';
import Services from '../components/Services';
// import Carousel from '../components/Carousel';
import videoOne from "../assets/SLider 1.mp4";
import videoTwo from "../assets/Slider 2.mp4"

export default function Home() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const videos = [videoOne, videoTwo];
        const randomVideo = videos[Math.floor(Math.random() * videos.length)];
        setSelectedVideo(randomVideo);
    }, []);
    return (
        < >
            <div id="others">
                {selectedVideo && (
                    <div className='home-media'>
                        <video
                            className=" w-100 carousel-video"
                            src={selectedVideo}
                            alt="safeguarding future from today"
                            autoPlay
                            loop
                            muted
                            controls={false}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100vh',
                            }}
                        />
                    </div>
                )}
                {/* <HorizontalScrollSection /> */}
                {/* <Carousel /> */}
                <Services />
                <ProductSection />
                <Products />
                <PayPremium />
                <ExploreMore />
            </div>
        </>
    );
}