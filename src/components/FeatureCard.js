import React from "react";
import { Link } from "react-router-dom";

export default function FeatureCard() {
    return (
        <>
            <div class="feature-card col-10 col-md-6 col-lg-3 mb-4 text-center">
                <span class="material-icons">volunteer_activism</span>
                <h3>Disability Benefit</h3>
                <p>In the event of permanent disability of the policyholder during the policy term, the sum assured becomes payable.</p>
            </div>
        </>
    );
};