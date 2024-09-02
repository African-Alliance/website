import React, { useEffect, useRef, useState } from 'react';
import ColorThief from 'colorthief';
import '../styles/HorizontalScrollSection.css';
import one from "../assets/testimage.jpg"
import two from "../assets/testimage2.jpg"
import three from "../assets/testimage3.jpg"
const HorizontalScrollSection = () => {
    const [colors, setColors] = useState({});
    const imgRefs = useRef([]);

    useEffect(() => {
        const colorThief = new ColorThief();
        imgRefs.current.forEach((img, index) => {
            if (img.complete) {
                setDominantColor(img, index, colorThief);
            } else {
                img.onload = () => setDominantColor(img, index, colorThief);
            }
        });
    }, []);

    const setDominantColor = (img, index, colorThief) => {
        const color = colorThief.getColor(img);
        setColors(prevColors => ({ ...prevColors, [index]: `rgb(${color[0]},${color[1]},${color[2]})` }));
    };

    const slides = [
        {
            src: one,
            alt: 'First slide',
            label: 'First slide label',
            text: 'Some representative placeholder content for the first slide.',
        },
        {
            src: two,
            alt: 'Second slide',
            label: 'Second slide label',
            text: 'Some representative placeholder content for the second slide.',
        },
        {
            src: three,
            alt: 'Third slide',
            label: 'Third slide label',
            text: 'Some representative placeholder content for the third slide.',
        },
    ];

    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
            <ol className="carousel-indicators">
                {slides.map((_, index) => (
                    <li key={index} data-target="#carouselExampleFade" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img
                            ref={el => imgRefs.current[index] = el}
                            className="d-block w-100 carousel-image img-fluid"
                            src={slide.src}
                            alt={slide.alt}
                        />

                    </div>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default HorizontalScrollSection;





















// import React from 'react';
// import '../styles/HorizontalScrollSection.css';

// const HorizontalScrollSection = () => {
//     return (
//         <div id="carouselExampleFade" className="carousel carousel-fade" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 <li data-target="#carouselExampleFade" data-slide-to="0" className="active"></li>
//                 <li data-target="#carouselExampleFade" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleFade" data-slide-to="2"></li>
//             </ol>
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img className="d-block w-100" src="https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2493.jpg?t=st=1721603012~exp=1721606612~hmac=dffdf571fbd6b918cfd18e475073217f754c072c2287a45add5995f696469936&w=1060" alt="First slide" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h5>First slide label</h5>
//                         <p>Some representative placeholder content for the first slide.</p>
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <img className="d-block w-100" src="https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D" alt="Second slide" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h5>Second slide label</h5>
//                         <p>Some representative placeholder content for the second slide.</p>
//                     </div>
//                 </div>
//                 <div className="carousel-item">
//                     <img className="d-block w-100" src="https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2493.jpg?t=st=1721603012~exp=1721606612~hmac=dffdf571fbd6b918cfd18e475073217f754c072c2287a45add5995f696469936&w=1060" alt="Third slide" />
//                     <div className="carousel-caption d-none d-md-block">
//                         <h5>Third slide label</h5>
//                         <p>Some representative placeholder content for the third slide.</p>
//                     </div>
//                 </div>
//             </div>
//             <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Previous</span>
//             </a>
//             <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only">Next</span>
//             </a>
//         </div>
//     );
// };

// export default HorizontalScrollSection;
