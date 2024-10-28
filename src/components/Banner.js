import React from "react";
import '../styles/PageStyle.css';
import '../styles/Material_Icon.css';

export default function Banner({image}) {
    return (
        <div className="banner-image">
          <img src={image} alt="product" />
        </div>
    );
};