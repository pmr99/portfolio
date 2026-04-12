import "./proj.css"
import Footer from "../Components/footer"
import intropage from "../Img/intropage.png"
import swiftlyExplained from "../Img/swiftlyExplained.png"
import comparison from "../Img/Comparison.png"
import payingFees from "../Img/PayingSchoolFees.png"
import step1 from "../Img/step1.png"
import step2 from "../Img/step2.png"
import step3 from "../Img/step3.png"
import step4 from "../Img/step4.png"


const Swiftly = () => {
    return (
        <div>

            <h1 className="title-head"> Swiftly </h1>

            <div className="viewproject">
            <a href="https://github.com/yinglin33/simply-client" style={{textDecoration:"none"}}>
            <img src={intropage} alt="Swiftly landing page" width="100%" style={{paddingTop:"8px", paddingBottom: "0px", borderRadius: "12px"}} />
            <p className="text" style={{textAlign: "center", paddingTop: "12px"}}> <b> View on GitHub </b> </p>
            </a>
            </div>

            <h1 className="main-header"> Presenting Swiftly </h1>
            <p className="text"> Swiftly is a <b>stablecoin-powered concept project</b> exploring what international tuition and rent payments could look like if built on modern crypto infrastructure. The core idea: use USDC — a stablecoin pegged 1:1 to the US dollar — as the transfer medium to move money across borders in under a day, at a fraction of what traditional remittance services charge.
            </p>
            <p className="text"> This was a collaborative concept and prototype built with my close friends Ying Lin and Vince Han, whom I met at Invention Corps, a student organization at UC Berkeley. We've been working on projects together since 2021, and this one was driven by a pain point all three of us felt firsthand as international students navigating the broken cross-border payments experience.
            </p>

            <h1 className="main-header"> The Problem </h1>
            <h1 className="second-header"> A Costly and Slow Process </h1>
            <p className="text"> International students in the U.S. face a frustrating reality every semester: paying tuition and rent from abroad is expensive, slow, and opaque. Conventional international transfers cost an average of $674/year in fees, take up to a week to process, and offer no real-time tracking. The process often involves multiple intermediaries, each taking a cut.
            </p>
            <img src={payingFees} alt="Paying education fees comparison" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom: "30px", borderRadius: "12px"}} />
            <h1 className="second-header"> The Typical Student Journey </h1>
            <p className="text"> For a student's first semester, they often have no U.S. bank account and are forced to use services like Flywire, paying exorbitant fees. In subsequent semesters, students open a local bank account and rely on wire transfers or platforms like Revolut and Pomelo to fund it before paying tuition via ACH. While cheaper than Flywire, this remains a multi-step, slow, and costly process with fees stacking at each step.
            </p>

            <h1 className="main-header"> The Solution </h1>
            <h1 className="second-header"> Stablecoins as the Medium </h1>
            <p className="text"> Swiftly leverages USDC, a stablecoin pegged 1:1 to the US dollar, to eliminate unnecessary intermediaries. When Coinbase announced zero on-ramp and off-ramp fees for USDC, I realized this could fundamentally change the remittance landscape. A student's family can convert local currency to USDC, transfer it across borders on the Polygon network in seconds for fractions of a cent, and off-ramp it directly to a U.S. bank account or university.
            </p>
            <img src={swiftlyExplained} alt="How Swiftly works" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom: "30px", borderRadius: "12px"}} />
            <h1 className="second-header"> The Cost Difference </h1>
            <p className="text"> Consider sending $20,000 from India to the United States. Credit card transfers cost around $600, Wise charges $892, and Flywire charges $415. Even a direct wire transfer costs $43. Swiftly processes the same transaction for just $22.24, which already includes a 200% cost profit margin. That's a reduction of over 96% compared to credit card fees.
            </p>
            <img src={comparison} alt="Fee comparison chart" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom: "30px", borderRadius: "12px"}} />

            <h1 className="main-header"> How It Works </h1>
            <p className="text"> Once Swiftly is integrated into a university's student portal (such as CalCentral at UC Berkeley), paying tuition internationally becomes as simple as four steps:
            </p>

            <div className="overall-container" style={{flexWrap: "wrap"}}>
                <div className="wasteless-container" style={{width: "580px"}}>
                    <div className="wasteless-image" style={{width: "580px"}}>
                        <img src={step1} alt="Step 1: Choose Currency" height="500px" style={{borderRadius: "12px"}} />
                    </div>
                    <p className="wasteless-para"><b>Step 1: Choose Currency</b><br/>From within CalCentral, the student selects their home currency. Swiftly displays the live exchange rate and total fee upfront — no hidden charges.</p>
                </div>
                <div className="wasteless-container" style={{width: "580px"}}>
                    <div className="wasteless-image" style={{width: "580px"}}>
                        <img src={step2} alt="Step 2: Enter Payment Details" height="500px" style={{borderRadius: "12px"}} />
                    </div>
                    <p className="wasteless-para"><b>Step 2: Enter Payment Details</b><br/>The student enters their home country banking information. A payment summary confirms the university, exchange rate, transaction fee, and total amount to send.</p>
                </div>
                <div className="wasteless-container" style={{width: "580px"}}>
                    <div className="wasteless-image" style={{width: "580px"}}>
                        <img src={step3} alt="Step 3: Finalize Details" height="500px" style={{borderRadius: "12px"}} />
                    </div>
                    <p className="wasteless-para"><b>Step 3: Finalize Details</b><br/>The student reviews their personal and payment information before confirming. Student ID, name, and email are pre-filled from the university portal.</p>
                </div>
                <div className="wasteless-container" style={{width: "580px"}}>
                    <div className="wasteless-image" style={{width: "580px"}}>
                        <img src={step4} alt="Step 4: Payment Successful" height="500px" style={{borderRadius: "12px"}} />
                    </div>
                    <p className="wasteless-para"><b>Step 4: Payment Initiated</b><br/>The student receives instant confirmation with tracking information and a receipt via email. They are notified once the university receives the payment.</p>
                </div>
            </div>

            <h1 className="main-header"> Technical Architecture </h1>
            <p className="text"> Swiftly's architecture is designed to handle secure cross-border transactions with minimal latency and cost. Here's how the system is structured:
            </p>

            <svg viewBox="0 0 920 520" width="90%" style={{maxWidth: "920px", margin: "20px auto 30px auto", display: "block"}} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                    </marker>
                </defs>

                {/* Frontend Section */}
                <rect x="20" y="20" width="260" height="160" rx="16" fill="#f0f7ff" stroke="#b8d4f0" strokeWidth="2" />
                <text x="150" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#2c5282" textAnchor="middle">Frontend</text>

                <rect x="45" y="62" width="210" height="48" rx="10" fill="#e8f0fe" stroke="#4285f4" strokeWidth="1.5" />
                <text x="150" y="83" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">React Web App</text>
                <text x="150" y="100" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Payment UI + Student Dashboard</text>

                <rect x="45" y="120" width="210" height="48" rx="10" fill="#e8f0fe" stroke="#4285f4" strokeWidth="1.5" />
                <text x="150" y="141" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Exchange Rate Display</text>
                <text x="150" y="158" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Real-time Currency Conversion</text>

                {/* Backend Section */}
                <rect x="330" y="20" width="260" height="220" rx="16" fill="#f0faf0" stroke="#b8e6b8" strokeWidth="2" />
                <text x="460" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#276749" textAnchor="middle">Backend</text>

                <rect x="355" y="62" width="210" height="48" rx="10" fill="#e6f4ea" stroke="#34a853" strokeWidth="1.5" />
                <text x="460" y="83" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Python API Server</text>
                <text x="460" y="100" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Business Logic + Auth</text>

                <rect x="355" y="122" width="210" height="48" rx="10" fill="#e6f4ea" stroke="#34a853" strokeWidth="1.5" />
                <text x="460" y="143" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Transaction Engine</text>
                <text x="460" y="160" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Payment Orchestration</text>

                <rect x="355" y="182" width="210" height="48" rx="10" fill="#e6f4ea" stroke="#34a853" strokeWidth="1.5" />
                <text x="460" y="203" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">PostgreSQL</text>
                <text x="460" y="220" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Users, Transactions, Tracking</text>

                {/* External Services Section */}
                <rect x="640" y="20" width="260" height="280" rx="16" fill="#fef7f0" stroke="#f0d4b8" strokeWidth="2" />
                <text x="770" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#9c4221" textAnchor="middle">External Services</text>

                <rect x="665" y="62" width="210" height="48" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="83" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Coinbase Platform</text>
                <text x="770" y="100" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">USDC On/Off-ramp + Wallets</text>

                <rect x="665" y="122" width="210" height="48" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="143" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Polygon Network</text>
                <text x="770" y="160" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">USDC Transfer (36s, ~$0)</text>

                <rect x="665" y="182" width="210" height="48" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="203" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">OpenACH</text>
                <text x="770" y="220" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">US Bank-to-Bank Transfers</text>

                <rect x="665" y="242" width="210" height="48" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="263" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Exchange Rate API</text>
                <text x="770" y="280" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Real-time FX Rates</text>

                {/* Cloud Section */}
                <rect x="330" y="280" width="260" height="80" rx="16" fill="#f3e8fd" stroke="#d4b8f0" strokeWidth="2" />
                <text x="460" y="308" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#553c9a" textAnchor="middle">Cloud Infrastructure</text>
                <rect x="355" y="318" width="210" height="32" rx="8" fill="#ede5f7" stroke="#7c4dff" strokeWidth="1.5" />
                <text x="460" y="339" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">AWS (Hosting, Storage, CDN)</text>

                {/* User */}
                <rect x="20" y="220" width="260" height="60" rx="12" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" />
                <text x="150" y="247" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">International Student</text>
                <text x="150" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Pays tuition from home country</text>

                {/* University */}
                <rect x="20" y="320" width="260" height="60" rx="12" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" />
                <text x="150" y="347" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">University / Landlord</text>
                <text x="150" y="365" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Receives USD payment</text>

                {/* Arrows */}
                {/* User -> Frontend */}
                <line x1="150" y1="220" x2="150" y2="185" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="110" y="207" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">Interacts</text>

                {/* Frontend -> Backend */}
                <line x1="280" y1="100" x2="350" y2="100" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="315" y="93" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">REST API</text>

                {/* Backend -> External Services */}
                <line x1="590" y1="86" x2="660" y2="86" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="625" y="79" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">API</text>

                <line x1="590" y1="146" x2="660" y2="146" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="625" y="139" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">Blockchain</text>

                <line x1="590" y1="206" x2="660" y2="206" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="625" y="199" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">ACH</text>

                {/* Backend -> Cloud */}
                <line x1="460" y1="245" x2="460" y2="275" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="480" y="263" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">Hosted on</text>

                {/* Backend -> University */}
                <line x1="355" y1="230" x2="280" y2="335" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
                <text x="290" y="285" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">USD Payment</text>

                {/* Transaction flow label */}
                <rect x="20" y="420" width="880" height="80" rx="12" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="460" y="445" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#333" textAnchor="middle">Transaction Flow</text>
                <text x="460" y="470" fontFamily="Arial, sans-serif" fontSize="11" fill="#666" textAnchor="middle">Local Currency  &#8594;  On-ramp to USDC (Coinbase)  &#8594;  Transfer via Polygon (~36s)  &#8594;  Off-ramp to USD (Coinbase)  &#8594;  ACH to University (OpenACH)</text>
                <text x="460" y="490" fontFamily="Arial, sans-serif" fontSize="10" fill="#888" textAnchor="middle">Total time: ~2.5 hours  |  Total fees: ~$5-22 (vs $400-900 traditional)</text>
            </svg>

            <h1 className="main-header"> Market Opportunity </h1>
            <p className="text"> The money transfer market for peer-to-peer transactions is valued at around $800 billion and serves more than 1 billion individuals globally. 48% of this market is concentrated in North America, making the U.S. an ideal starting point.
            </p>
            <p className="text"> Beyond tuition and rent, there are tremendous growth opportunities in international healthcare payments, peer-to-peer transfers for migrant workers, and trade industries. The timing is right: USDC adoption is growing, regulatory sentiment is shifting positively toward crypto, and exchanges are now offering low-to-no-cost on-ramps and off-ramps.
            </p>

            <h1 className="main-header"> Why We Built This </h1>
            <p className="text"> As former international students, we've experienced firsthand the inefficiencies of cross-border payments. The frustration of watching hundreds of dollars disappear in transfer fees every semester, waiting days for transactions to clear, and having no transparency into where our money was in the pipeline. When Coinbase announced zero-fee USDC on-ramps, I spent weeks researching whether stablecoins could solve this problem. After sharing the findings with Ying and Vince, we collectively decided to build the solution we wished we had during our college years.
            </p>

            <p className="text" style={{paddingBottom: "12px"}}> If you liked this project, feel free to reach out to me! Special thanks to Ying Lin and Vince Han who made this project possible.</p>
            <Footer> </Footer>
        </div>
    )
}

export default Swiftly