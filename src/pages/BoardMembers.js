import React from 'react';
import '../styles/BoardMember.css';
// import { Link } from 'react-router-dom';
// import 
import banner from '../assets/smart kid education plan.jpg';
import smartKid from '../assets/smart kid education plan.jpg';

export default function Board() {
    return (
        <div className='board-container mt-5 pt-3'>
            <div className='board-banner'>
                <div className='board-header-text'>
                    <p>MEET</p>
                    <h1 style={{ color: '#1b3271' }}>The Board Members</h1>
                </div>

            </div>
            <div className='mt-3'>
                <div className='board-cards row col-12 col-md-10 col-lg-8'>
                    <div class="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#chairman" aria-controls="offcanvasWithBothOptions">
                        {/* <img src="https://www.africanallianceplc.com/assets/team/img/Chairman.png" class="card-img-top" alt="Sylva" /> */}
                        <img src="" class="card-img-top" alt="Board_Member" />
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">BOARD MEMBER</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="chairman" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                {/* <img src="https://www.africanallianceplc.com/assets/team/img/Chairman.png" class="card-img-top" alt="Sylva" /> */}
                                <img src="" class="card-img-top" alt="Board_Member" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h1>
                            </div>
                            <p className='offcanvas-text'>
                               </p>
                        </div>
                    </div>

                    <div class="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#independentDir1" aria-controls="offcanvasWithBothOptions">
                        {/* <img src="https://www.africanallianceplc.com/assets/team/img/Adiele.png" class="card-img-top" alt="Adiele" /> */}
                        <img src="" class="card-img-top" alt="Board_Member" />
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">BOARD MEMBER</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="independentDir1" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                {/* <img src="https://www.africanallianceplc.com/assets/team/img/Adiele.png" class="card-img-top" alt="Sylva" /> */}
                                <img src="" class="card-img-top" alt="Board_Member" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h1>
                            </div>
                            <p className='offcanvas-text'></p>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#nonExecutive" aria-controls="offcanvasWithBothOptions" >
                        {/* <img src="https://www.africanallianceplc.com/assets/team/img/Atasie.png" class="card-img-top" alt="Macauley" /> */}
                        <img src="" class="card-img-top" alt="Board_Member" />
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">BOARD MEMBER</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="nonExecutive" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                {/* <img src="https://www.africanallianceplc.com/assets/team/img/Atasie.png" class="card-img-top" alt="Sylva" /> */}
                                <img src="" class="card-img-top" alt="Board_Member" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h1>
                            </div>
                            <p className='offcanvas-text'></p>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#independentDir2" aria-controls="offcanvasWithBothOptions" >
                        {/* <img src="https://www.africanallianceplc.com/assets/team/img/Bulama%201.png" className="card-img-top" alt="Abatcha" /> */}
                        <img src="" class="card-img-top" alt="Board_Member" />
                        <div className="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text">BOARD MEMBER</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="independentDir2" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                {/* <img src="https://www.africanallianceplc.com/assets/team/img/Bulama%201.png" class="card-img-top" alt="Sylva" /> */}
                                <img src="" class="card-img-top" alt="Board_Member" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h1>
                            </div>
                            <p className='offcanvas-text'></p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
