import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNairaSign } from '@fortawesome/free-solid-svg-icons';
import '../styles/ProductSection.css';

const ProductSection = () => {
    return (
        <>
            <div class="products d-flex product-list flex-wrap py-5">
                <div class="product col-6 col-md-3 p-2">
                    <span className="material-icons">volunteer_activism</span>
                    <p>Savings</p>
                </div>
                <div class="product col-6 col-md-3 p-2">
                    <span className="material-icons">diversity_1</span>
                    <p>Child and Family</p>
                </div>
                <div class="product col-6 col-md-3 p-2">
                    <span className="material-icons">real_estate_agent</span>
                    <p>Mortgage</p>
                </div>
                <div class="product col-6 col-md-3 p-2">
                    <FontAwesomeIcon className='material-icons icon' icon={faNairaSign} />
                    <p>Esusu</p>
                </div>
                <div class="product col-6 col-md-3 p-2">
                    <span className="material-icons">volunteer_activism</span>
                    <p>Savings</p>
                </div>
                <div class="product col-6 col-md-3 p-2">
                    <span className="material-icons">diversity_1</span>
                    <p>Child and Family</p>
                </div>
                <div class="product col-6 col-md-3 p-2">
                    <span className="material-icons">real_estate_agent</span>
                    <p>Mortgage</p>
                </div>
            </div>

        </>
    );
};

export default ProductSection;
