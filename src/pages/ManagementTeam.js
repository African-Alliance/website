import React from 'react';
import '../styles/BoardMember.css';
import { Link } from 'react-router-dom';
import banner from '../assets/smart kid education plan.jpg';
import smartKid from '../assets/smart kid education plan.jpg';

export default function Management() {
    return (
        <div className='board-container mt-5 pt-3'>
            <div className='board-banner'>
                <div className='board-header-text'>

                    <h1 style={{ color: '#1b3271' }}>Meet Our Management Team</h1>
                </div>

            </div>
            <div className='mt-3'>
                <div className='board-cards row col-12 col-md-10 col-lg-8'>
                    <div class="card  col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#abuja" aria-controls="offcanvasWithBothOptions">
                        <img src="https://www.africanallianceplc.com/assets/team/img/amaka.jpg?p=38" class="card-img-top" alt="Amaka" />
                        
                        <div class="card-body">
                            <h5 class="card-title">Amaka Okafor</h5>
                            <p class="card-text">HEAD (ABUJA/NORTHERN REGION)</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="abuja" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/amaka.jpg?p=38" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Amaka Okafor</h1>
                            </div>
                            <p>Ukamaka Okafor is a corporate marketer, sales strategist and Business
                                Continuity professional with almost two decades’ experience in the
                                insurance industry. She started out as an Assistant Manager at the
                                defunct United Trust Insurance in 2001 and after four years of
                                supporting her team to achieving various marketing targets, she joined
                                Unity Kapital (now Veritas Kapital) as Manager (Group Life), her first
                                exposure to the intricacies of Group Life marketing. At Unity Kapital,
                                her ability to help team members close complicated accounts brought her
                                to the attention of Metropolitan Life Insurance (recently renamed
                                Tangerine Insurance) who consequently hired her. As Senior Manager/Team
                                Lead (Group Life) at Metropolitan Life, she led and won various pitches
                                for the firm and used market intelligence to develop formidable sales
                                strategies that helped grow the business’ top and bottom lines. Amaka
                                joined African Alliance in 2009 as Deputy Controller, Marketing
                                (Northern Region) with a mandate to develop, grow and stabilize the
                                corporate marketing business of the company in the Norther region. Her
                                success at the role aided her promotion to her current position as
                                Controller, Marketing (Northern region) in 2015. Amaka is a B.Sc
                                Accountancy graduate of Enugu State University of Science and Technology
                                and an M.Sc Management graduate of the University of Liverpool, United
                                Kingdom. She has attended various courses in Business Continuity,
                                Insurance Sales and Leadership within and outside the country.</p>
                        </div>
                    </div>

                    <div class="card  col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#finance" aria-controls="offcanvasWithBothOptions">
                        <img src="https://www.africanallianceplc.com/assets/team/img/mr_akinbode.jpg?g=223" class="card-img-top" alt="Akinbode" />
                        <div class="card-body">
                            <h5 class="card-title">Akinbode Raji</h5>
                            <p class="card-text">HEAD, FINANCE</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="finance" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/mr_akinbode.jpg?g=223" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Akinbode Raji</h1>
                            </div>
                            <p>Akinbode Raji is a Certified Forensic Accountant and Tax professional
                                with 20 years’ experience in Finance, Risk and Compliance and Internal
                                Audit. He started his career as a Senior Clerical Officer in the finance
                                department at African Alliance in 2000. He worked his way through
                                various finance functions where he was saddled with diverse, critical
                                responsibilities before moving to Internal Audit in 2010. As the Head of
                                Internal Audit and Control, he pioneered the Risk and Compliance unit
                                which was hitherto an Internal Control function within the business.
                                Thereafter, he was assigned the Risk Office for a short, stabilising
                                period while he led the Compliance unit for five more years before he
                                was promoted to Deputy Head, Finance. His financial acumen and vast mind
                                saw him become the Head, Finance in 2018, the position he currently
                                occupies. Bode attended the Federal College of Education (Technical)
                                Akoka, Lagos and Ogun State University, Ago-Iwoye (now Olabisi Onabanjo
                                University) where he graduated with a B.Sc in Accounting. He also holds
                                an MBA in Financial Management from Ladoke Akintola University and an
                                M.Sc in Business Administration from the National Open University of
                                Nigeria (NOUN). A thoroughbred accountant, Bode is an Associate Member
                                of the Institute of Chartered Accountants of Nigeria (ICAN), the Nigeria
                                Institute of Management (NIM), the Chartered Institute of Economics and
                                the Chartered Institute of Taxation of Nigeria (CITN). A certified
                                Anti-Money Laundering Specialist, Bode is also an Associate Business
                                Continuity Professional from the Disaster Recovery Institute
                                International.</p>
                        </div>
                    </div>
                    <div class="card  col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#admin" aria-controls="offcanvasWithBothOptions">
                        <img src="https://www.africanallianceplc.com/assets/team/img/alice.jpg?g=223" class="card-img-top" alt="Alice" />
                        <div class="card-body">
                            <h5 class="card-title">Alice Amina Uwodi</h5>
                            <p class="card-text">HEAD, ADMINISTRATION</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="admin" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/alice.jpg?g=223" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Alice Amina Uwodi</h1>
                            </div>
                            <p>Alice Amina Uwodi is a chartered secretary and administrator with 25
                                years’ post youth service experience in human resources, general office
                                administration and personnel management. She began her career as a
                                Finance and Administrative Officer at AG Leventis PLC before being
                                promoted to Branch Administrator/Accountant as Worldwide Superstores
                                (Formerly Leventis Superstores) a year later in 1999. In 2001, she
                                joined Netspex Ltd as Admin/Accounts Officer tasked with looking after
                                the staff welfare and general office administration. After spending
                                three years in the role, he was employed by African Alliance as Senior
                                Supervisor – Administration. Between 2004 and now, Alice has risen
                                through various administrative and Human Resources role including
                                Assistant Manager – Special Duties (Office of the MD/CEO); Agency
                                Administration Manager where she developed a robust cost saving and team
                                building initiatives the department has built upon; and now Deputy
                                Controller, Human Resources and Administration. It is pertinent to note
                                that Alice drove the entire cascading of the first rebranding exercise
                                the company has done in its sixty year existence across all the
                                company’s units and collaterals. Alice holds an MBA and a post graduate
                                diploma in Management from the University of Calabar in addition to an
                                HND in Business Administration from Kaduna Polytechnic. She is also an
                                Associate Member of both the Chartered Institute of Personnel Management
                                of Nigeria (CIPM) and Institute of Chartered Secretaries and
                                Administration of Nigeria (ICSAN). Blessed with excellent planning and
                                organisational skills, Alice has attended several courses in Business &
                                Management and is an alumnus of the prestigious Lagos Business School.</p>
                        </div>
                    </div>
                    <div className="card  col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#marketing" aria-controls="offcanvasWithBothOptions">
                        <img src="https://www.africanallianceplc.com/assets/team/img/emmanuel.jpg?g=223" className="card-img-top" alt="Emmanuel" />
                        <div className="card-body">
                            <h5 class="card-title">Emmanuel Eburajolo</h5>
                            <p class="card-text">HEAD, MARKETING</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="marketing" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/emmanuel.jpg?g=223" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Emmanuel Eburajolo</h1>
                            </div>
                            <p>Emmanuel Ojelre Eburajolor is a dynamic and technical sales professional
                                with about 30 years’ experience in driving sales targets across both
                                life and non-life insurance. He started his career as a General Duties
                                Officer at African Development Insurance Company in 1990. His natural
                                appetite for challenges drew him into the technical aspects of insurance
                                where he learnt the basics of the profession to the acclaim of his peers
                                and superiors. He moved into the marketing department in 1994 and thus
                                began his lifelong adventure into the difficult terrain of insurance
                                sales. He rose through the ranks and became a part of the ADIC Life team
                                in 2000 where he built a reputation as a salesman par distinction.
                                Emmanuel joined African Alliance in 2007 as Senior Manager, Corporate
                                Marketing, with a mandate to grow the Brokers Market and position the
                                company for lateral growth. After almost a decade of success, his hard
                                work and business acumen saw him promoted into top management as the
                                Deputy Controller, Corporate Marketing, the position he currently
                                occupies. Emmanuel holds a Diploma in Marketing from Delta State
                                University and a bachelor’s degree in Insurance from Lagos State
                                University. He is an Associate Member of the Chartered Insurance
                                Institute of Nigeria; Full Member, Chartered Institute of
                                Administration; Fellow, Institute of Certified Sales Professional and
                                Fellow, Chartered Institute of Public Diplomacy and Management.</p>
                        </div>
                    </div>
                    <div className="card  col-12 col-sm-5 col-md-4" data-bs-toggle="offcanvas" data-bs-target="#hcm" aria-controls="offcanvasWithBothOptions">
                        <img src="https://www.africanallianceplc.com/assets/team/img/Philip.jpg?g=223" className="card-img-top" alt="Philip" />
                        <div className="card-body">
                            <h5 class="card-title">Philip Ikhianosime</h5>
                            <p class="card-text">HEAD, HUMAN CAPITAL MANAGEMENT</p>
                        </div>
                    </div>
                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="hcm" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <div className='offcanvas-image'>
                                <img src="https://www.africanallianceplc.com/assets/team/img/Philip.jpg?g=223" class="card-img-top" alt="Sylva" />
                                <h1 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Philip Ikhianosime</h1>
                            </div>
                            <p>Philip is a seasoned Human Resource Management professional with keen
                                interest and skills in the development of employees’ potentials. He has
                                over 20 years practical experience in the field of Human Resource
                                Management, strategy and business development. He has interests and
                                skills in performance management systems design, human resource strategy
                                mapping and human resource systems design, organizational culture
                                modelling and learning/talent development cutting across manufacturing,
                                consulting and financial services sectors. He has helped to develop and
                                deliver business strategy projects, HR initiatives, employee performance
                                improvement projects, performance management projects and has at
                                different times in his career either as HR lead or head of training,
                                played active role in organisational culture change and employee
                                re-branding projects amongst others. Philip is a Business Administration
                                graduate of the University of Lagos Akoka and an alumnus of the Advanced
                                Management Programme (AMP25) of the Lagos Business School. He is a full
                                member of the Chartered Institute of Personnel Management of Nigeria
                                (CIPM), an accredited Management Trainer, and a certified Safety
                                Professional.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
