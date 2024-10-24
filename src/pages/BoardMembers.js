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
                        <img src="https://www.africanallianceplc.com/assets/team/img/Chairman.png" class="card-img-top" alt="Sylva" />
                        <div class="card-body">
                            <h5 class="card-title">Sylva Ogwemoh (SAN)</h5>
                            <p class="card-text">CHAIRMAN</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="chairman" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/Chairman.png" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Sylva Ogwemoh (SAN)</h1>
                            </div>
                            <p>Sylva Ogwemoh is a Senior Advocate of Nigeria (SAN) with over three decades
                                of experience in Commercial Litigation and Corporate Law. He has vast legal
                                compliance and private equity experiences where he has advised clients on
                                structured finance, corporate governance issues, portfolio decision making,
                                corporate strategy, board facilitation, joint ventures, mergers, and
                                acquisition, among others. Sylva Ogwemoh (SAN) is the Senior Partner and
                                Head of the law firm of Kevin Martin Ogwemoh Legal, a commercial law firm
                                with the Headquarters in Lagos. He obtained his LL.B from the former Bendel
                                State University (now Ambrose Alli University), Ekpoma, in 1987. He was
                                admitted as a Solicitor and Advocate of the Supreme Court of Nigeria in
                                1988. In 2000, he obtained a Masters in law degree (LL.M) with
                                specialisation in Corporate Management and Finance Law from Lagos State
                                University. He is an alumnus of Saῐd Business School (OAMLP), University of
                                Oxford, United Kingdom, with a certification in management and leadership.
                                He became a Notary Public of the Federal Republic of Nigeria in 1998 and
                                subsequently elevated to the prestigious rank of a Senior Advocate of
                                Nigeria (SAN) in 2014. Sylva Ogwemoh (SAN) is a Fellow of the Chartered
                                Institute of Arbitrators, United Kingdom; Member of the London Court of
                                International Arbitration (LCIA African User’s Council); and a Panel Member
                                of the Kigali International Arbitration Centre (KIAC) Rwanda. He is also a
                                member of the Lagos Court of Arbitration, Maritime Arbitrators Association
                                of Nigeria and the Negotiation and Conflict Management Group. He is a Fellow
                                and Certified Member of the Institute of Management Consultants, Nigeria. He
                                is also a member of the Nigerian Bar Association, International Bar
                                Association, Nigerian Institute of Management, Capital Market Solicitors
                                Association of Nigeria and a Registered Capital Market Practitioner with the
                                Securities and Exchange Commission of Nigeria. He was an Associate Editor,
                                Journal of Human Rights Law and Practice from 1991-1992. Sylva Ogwemoh (SAN)
                                is the 2018 winner of African Prize for Leadership Excellence under the
                                Legal Personality Prize Category. He also won the LEGALSFINEST Client Choice
                                Award-Shipping and Maritime Law in 2013. He has attended several local and
                                international conferences in law and has delivered many papers on diverse
                                subjects in law.</p>
                        </div>
                    </div>

                    <div class="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#independentDir1" aria-controls="offcanvasWithBothOptions">
                        <img src="https://www.africanallianceplc.com/assets/team/img/Adiele.png" class="card-img-top" alt="Adiele" />
                        <div class="card-body">
                            <h5 class="card-title">Dr Adiele Ekechukwu</h5>
                            <p class="card-text">INDEPENDENT DIRECTOR</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="independentDir1" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/Adiele.png" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Dr Adiele Ekechukwu</h1>
                            </div>
                            <p>Dr Adiele Ekechukwu is a seasoned professional with over 37 years combined
                                experience in consultancy and advisory, project management and training and
                                capacity development. He began his career in 1983 as the pioneer
                                Petrochemical Lecturer in Federal University of Technology, Owerri before
                                joining the Nigerian Defence Academy, Kaduna also as a Lecturer. He was the
                                Chief Research Officer and Head, Division of Postgraduate Services, National
                                Universities Commission, roles which saw him actively coordinate
                                International donor funds to Nigerian Universities. In 1993, Dr Ekechukwu
                                joined the Management Support Unit of the European Union, Nigeria branch as
                                the Head of Training and Research Programs (TARP). Due to his commitment and
                                remarkable leadership, he was promoted as Head, Monitoring and Evaluation.
                                Under his watch, major European Development Fund (EDF) projects in Nigeria,
                                valued at about 300 million European Currency Unit (ECU), were completed. He
                                was instrumental in the development, implementation and monitoring of many
                                institutional training, rural development and conservation programmes
                                including Management Development Programme with Centre for Management
                                Development; Small Scale Entrepreneurial Development with the Administrative
                                Staff College of Nigeria; Industrial Maintenance programme with the Federal
                                Ministry of Industries; and the development of an MBA curriculum working in
                                concert with the Faculty of Economics at the University of Ibadan. He joined
                                Ernst And Young Consulting Ltd, a member firm of Ernst & Young
                                International in 1995 as the Head of Human Resources Development and Special
                                Projects, coordinating the activities of the Management Consulting Services
                                Group and Human Resources Department of the organization. He held this
                                position till 2001 when he became an Executive Director in Neads Consult
                                Limited, a human resource consulting firm in Lagos, Nigeria. An alumnus of
                                the University of Ibadan with BSc (Hons) in Chemistry, Dr Ekechukwu holds
                                both master’s and doctorate degrees in Petrochemicals from the University of
                                Manchester Institute of Science and Technology (UMIST) U.K. He also holds a
                                professional certificate in Administrative Management with distinction from
                                Manchester Polytechnic. He is a member of the Institute of Petroleum and an
                                associate member of Institute of Administrative Management and currently a
                                Partner at George Davidson & Associates, an advisory and management
                                consulting firm.</p>
                        </div>
                    </div>
                    <div class="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#nonExecutive" aria-controls="offcanvasWithBothOptions" >
                        <img src="https://www.africanallianceplc.com/assets/team/img/Atasie.png" class="card-img-top" alt="Macauley" />
                        <div class="card-body">
                            <h5 class="card-title">Sir Macauley Atasie</h5>
                            <p class="card-text">NON-EXECUTIVE DIRECTOR</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="nonExecutive" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/Atasie.png" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Sir Macauley Atasie</h1>
                            </div>
                            <p>Macauley Atasie is an emerging markets consultant and accomplished
                                e-commerce solutions provider with over two decades’ experience across the
                                fintech space. As Head ePayments, Ventures and Strategy Development in
                                Accenture Nigeria, Atasie led the conceptualisation and setup of Interswitch
                                and eTranzact and also championed the reform agenda for the then ValuCard
                                (now Unified Payments Limited). At the national level, he steered the group
                                that defined Nigeria’s eGovernment’s strategy in 2005/6; a process that
                                ushered in the establishment of National e-Government Strategies Limited
                                (NeGSt). He was a key member of the high-powered team that inspired the
                                Central Bank of Nigeria (CBN) directive to all banks to use the National
                                Identity Number (NIN) as sole KYC platform in Nigeria. The NIN was later
                                replaced by Bank Verification Number (BVN). Within the private sector and as
                                CEO of NEXTZON, Atasie has played important roles such as the programme
                                management of a rigorous process that led to the development of Nigeria’s
                                13-year Financial Systems Strategy (FSS2020). He led the launch of the first
                                for profit business incubation platform in Nigeria with funding support from
                                the World Bank. Atasie has offered strategy development services both to
                                leading public and private sector organisations including regulators and is
                                the strategy advisor to at least 2 states in Nigeria. Under his leadership,
                                NEXTZON has supported over 400 clients across leading sectors of the economy
                                including State Governments in Nigeria covering well over ten states,
                                Commercial Banks, Insurance Companies, SMEs and regulatory bodies including
                                the Central Bank of Nigeria (CBN), National Insurance Commission (NAICOM),
                                Securities Exchange Commission (SEC), Nigerian Stock Exchange (NSE) etc.
                                Atasie has a bachelor’s degree in Microbiology and master’s in Pharmacy,
                                both from the University of Nigeria, Nsukka. He has attended several courses
                                and executive programmes at top rated global business schools such as
                                Stanford University in the United States, Cranfield University in the United
                                Kingdom and Witts University in South Africa. Atasie is the current
                                President of E-Payment Providers Association of Nigeria (EPPAN), an umbrella
                                body of all ePayments providers in the country.</p>
                        </div>
                    </div>
                    <div className="card col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#independentDir2" aria-controls="offcanvasWithBothOptions" >
                        <img src="https://www.africanallianceplc.com/assets/team/img/Bulama%201.png" className="card-img-top" alt="Abatcha" />
                        <div className="card-body">
                            <h5 class="card-title">Alhaji Abatcha Bulama</h5>
                            <p class="card-text">NON-EXECUTIVE DIRECTOR</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="independentDir2" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/Bulama%201.png" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Alhaji Abatcha Bulama</h1>
                            </div>
                            <p>Alhaji Abatcha Bulama is a member of the Board of African Alliance Insurance
                                PLC. Alh. Bulama was a graduate of the Ahmadu Bello University, Zaria,
                                Nigeria with a degree in Accounting and an MBA. He is a Fellow Member of the
                                Chartered Institute of Bankers of Nigeria (CIBN) & the Institute of
                                Chartered Accountants of Nigeria. He has over 35 years of varied work
                                experience. His career included working with the State Civil Service,
                                Merchant & Commercial Banking and Capital Market Regulatory sectors at
                                senior levels of responsibility. At various times he was on the Boards of
                                the S.E.C, Financial Reporting Council, Council of the CIBN, etc. He is
                                currently on the Boards of Tourist Company of Nigeria Plc, Capital Hotels
                                Plc, Ikeja Hotel Plc and a member, Audit Committee of the CIBN. He has
                                attended numerous local and foreign management training and development
                                programmes.</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
