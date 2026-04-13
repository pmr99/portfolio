import "./proj.css"
import Footer from "../Components/footer"
import dashboard from "../Img/mani_dashboard.png"
import wealth from "../Img/mani_wealth.png"
import transactions from "../Img/mani_transactions.png"
import insights from "../Img/mani_insights.png"


const Mani = () => {
    return (
        <div>

            <h1 className="title-head"> Mani </h1>

            <div className="viewproject">
                <a href="https://github.com/pmr99/mani" style={{textDecoration:"none"}}>
                    <img src={dashboard} alt="Mani Dashboard" width="100%" style={{paddingTop:"8px", paddingBottom:"0px", borderRadius:"12px"}} />
                    <p className="text" style={{textAlign:"center", paddingTop:"12px"}}><b>View on GitHub</b></p>
                </a>
            </div>

            <h1 className="main-header"> Why I Built This </h1>
            <p className="text"> I've tried a lot of personal finance trackers. Products like Rocket Money and Monarch have great features and genuinely good UX. They surface the metrics that actually matter: savings rate, spending trends, net worth over time, portfolio breakdowns. But they all come with monthly fees. $10-15/month adds up, and it felt ironic to pay a recurring subscription just to track whether I'm spending too much on recurring subscriptions.
            </p>
            <p className="text"> So I decided to build my own. Mani is a personal finance dashboard that connects to real bank accounts via Plaid, pulls in live data, and gives me the exact views I care about. No subscription, no ads, just my own data on my own terms. It even has a Free Mode that uses only Plaid's free balance APIs, so you can track your net worth and asset distribution without paying anything at all.
            </p>

            <h1 className="main-header"> Features </h1>

            <h1 className="second-header"> Dashboard </h1>
            <p className="text"> The main view gives a snapshot of everything at a glance: net worth, income, expenses, cash balance, and investment totals. Below that, a savings chart shows monthly income vs. expenses with a trend line, along with a detailed breakdown of income sources and expense categories. There's also a spending section with category-level charts and a cash forecast to project where your balance is heading.
            </p>
            <img src={dashboard} alt="Mani Dashboard" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom:"30px", borderRadius:"12px"}} />

            <h1 className="second-header"> Wealth </h1>
            <p className="text"> The wealth page tracks net worth over time with a line chart showing historical trends. It breaks down assets and liabilities separately, with distribution charts showing how your money is spread across account types: checking, savings, money market, investments, credit cards, and loans. This was one of the features I missed most from Monarch, where you can see exactly how your financial picture has shifted month over month.
            </p>
            <img src={wealth} alt="Mani Wealth View" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom:"30px", borderRadius:"12px"}} />

            <h1 className="second-header"> Transactions </h1>
            <p className="text"> A full transaction history with spending breakdowns by category, account, or overall. Horizontal bar charts show where money is going at a glance: rent, entertainment, food, travel, and more. Below the charts is a searchable, filterable transaction list with date ranges, category filters, and merchant search. You can also recategorize transactions if Plaid's auto-categorization doesn't get it right.
            </p>
            <img src={transactions} alt="Mani Transactions" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom:"30px", borderRadius:"12px"}} />

            <h1 className="second-header"> Insights </h1>
            <p className="text"> The insights page generates smart, actionable analysis of your spending and portfolio. It compares your current month to last month, checks spending against your 3-month average, flags months where you overspent relative to income, and tracks metrics like savings rate and emergency fund coverage. Each insight is color-coded green, yellow, or red based on how you're doing. Below the spending insights, portfolio insights analyze your investment performance and allocation.
            </p>
            <img src={insights} alt="Mani Insights" style={{display:"block", width:"80%", marginLeft:"10%", marginRight:"10%", marginTop:"20px", marginBottom:"30px", borderRadius:"12px"}} />

            <h1 className="second-header"> Free Mode vs Full Mode </h1>
            <p className="text"> One of the design decisions I'm most happy with is Free Mode. Plaid's balance API is completely free and unlimited. So Mani offers a zero-cost mode that gives you net worth tracking and asset distribution using only balance data. If you want transaction history, spending analysis, and investment holdings, Full Mode uses Plaid's paid APIs at roughly $0.30-0.50 per connected account per month. You can toggle between modes in the sidebar and start with Free Mode to try it out.
            </p>

            <h1 className="main-header"> Technical Architecture </h1>
            <p className="text"> Mani is built with a modern frontend stack and a serverless backend. Here's how the pieces fit together:
            </p>

            <svg viewBox="0 0 920 480" width="90%" style={{maxWidth:"920px", margin:"20px auto 30px auto", display:"block"}} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="maniArrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                    </marker>
                </defs>

                {/* Frontend */}
                <rect x="20" y="20" width="260" height="240" rx="16" fill="#f0f7ff" stroke="#b8d4f0" strokeWidth="2" />
                <text x="150" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#2c5282" textAnchor="middle">Frontend</text>

                <rect x="40" y="60" width="220" height="40" rx="10" fill="#e8f0fe" stroke="#4285f4" strokeWidth="1.5" />
                <text x="150" y="78" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">React 19 + TypeScript</text>
                <text x="150" y="92" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Vite dev server</text>

                <rect x="40" y="110" width="220" height="40" rx="10" fill="#e8f0fe" stroke="#4285f4" strokeWidth="1.5" />
                <text x="150" y="128" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Tailwind CSS v4</text>
                <text x="150" y="142" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Dark theme styling</text>

                <rect x="40" y="160" width="220" height="40" rx="10" fill="#e8f0fe" stroke="#4285f4" strokeWidth="1.5" />
                <text x="150" y="178" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Recharts</text>
                <text x="150" y="192" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Charts + data visualization</text>

                <rect x="40" y="210" width="220" height="40" rx="10" fill="#e8f0fe" stroke="#4285f4" strokeWidth="1.5" />
                <text x="150" y="228" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Supabase JS Client</text>
                <text x="150" y="242" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Auth + DB queries</text>

                {/* Backend */}
                <rect x="330" y="20" width="260" height="240" rx="16" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
                <text x="460" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">Supabase Backend</text>

                <rect x="350" y="60" width="220" height="40" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="460" y="78" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">PostgreSQL Database</text>
                <text x="460" y="92" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Accounts, transactions, holdings</text>

                <rect x="350" y="110" width="220" height="40" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="460" y="128" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Edge Functions</text>
                <text x="460" y="142" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Plaid token exchange + sync</text>

                <rect x="350" y="160" width="220" height="40" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="460" y="178" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Row Level Security</text>
                <text x="460" y="192" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Per-user data isolation</text>

                <rect x="350" y="210" width="220" height="40" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="460" y="228" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Database Migrations</text>
                <text x="460" y="242" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">5 migration scripts via API</text>

                {/* External */}
                <rect x="640" y="20" width="260" height="190" rx="16" fill="#fef7f0" stroke="#f0d4b8" strokeWidth="2" />
                <text x="770" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#9c4221" textAnchor="middle">External APIs</text>

                <rect x="660" y="60" width="220" height="40" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="78" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Plaid API</text>
                <text x="770" y="92" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Bank connections + data sync</text>

                <rect x="660" y="110" width="220" height="40" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="128" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Plaid Link</text>
                <text x="770" y="142" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Secure bank auth flow</text>

                <rect x="660" y="160" width="220" height="40" rx="10" fill="#fce8e6" stroke="#ea4335" strokeWidth="1.5" />
                <text x="770" y="178" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Balance / Transactions API</text>
                <text x="770" y="192" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Free vs paid tier</text>

                {/* User */}
                <rect x="20" y="300" width="260" height="55" rx="12" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" />
                <text x="150" y="325" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">User</text>
                <text x="150" y="343" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Views dashboard on localhost</text>

                {/* Bank */}
                <rect x="640" y="250" width="260" height="55" rx="12" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" />
                <text x="770" y="275" fontFamily="Arial, sans-serif" fontSize="13" fill="#333" textAnchor="middle">Bank Accounts</text>
                <text x="770" y="293" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Checking, savings, investments, credit</text>

                {/* Arrows */}
                <line x1="150" y1="300" x2="150" y2="265" stroke="#666" strokeWidth="1.5" markerEnd="url(#maniArrow)" />
                <text x="115" y="288" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">Interacts</text>

                <line x1="280" y1="130" x2="345" y2="130" stroke="#666" strokeWidth="1.5" markerEnd="url(#maniArrow)" />
                <text x="312" y="122" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">Queries</text>

                <line x1="590" y1="80" x2="655" y2="80" stroke="#666" strokeWidth="1.5" markerEnd="url(#maniArrow)" />
                <text x="622" y="72" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">API calls</text>

                <line x1="770" y1="210" x2="770" y2="245" stroke="#666" strokeWidth="1.5" markerEnd="url(#maniArrow)" />
                <text x="800" y="232" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">Fetches</text>

                {/* Flow bar */}
                <rect x="20" y="390" width="880" height="70" rx="12" fill="#fafafa" stroke="#e0e0e0" strokeWidth="1" />
                <text x="460" y="415" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="bold" fill="#333" textAnchor="middle">Data Flow</text>
                <text x="460" y="438" fontFamily="Arial, sans-serif" fontSize="11" fill="#666" textAnchor="middle">Bank &#8594; Plaid API &#8594; Supabase Edge Function &#8594; PostgreSQL &#8594; React Frontend &#8594; Recharts Visualization</text>
                <text x="460" y="454" fontFamily="Arial, sans-serif" fontSize="10" fill="#888" textAnchor="middle">Free Mode: balances only (free) | Full Mode: transactions + investments ($0.30-0.50/account/month)</text>
            </svg>

            <h1 className="second-header"> Tech Stack </h1>
            <ul>
                <li className="text"><b>Frontend:</b> React 19, TypeScript, Vite, Tailwind CSS v4, Recharts</li>
                <li className="text"><b>Backend:</b> Supabase (PostgreSQL + Edge Functions + Row Level Security)</li>
                <li className="text"><b>Banking API:</b> Plaid (account linking, balances, transactions, investment holdings)</li>
                <li className="text"><b>Deployment:</b> Runs locally via <code>npm run dev</code>, one-command setup script handles all config</li>
            </ul>

            <h1 className="main-header"> What I Learned </h1>
            <p className="text"> Building Mani taught me a lot about working with financial APIs and the nuances of Plaid's pricing model. The Free Mode vs Full Mode distinction came from realizing that Plaid's balance API is completely free and unlimited, while transaction syncing costs per account per month. Designing the app to gracefully degrade between these two modes was an interesting challenge and ended up being one of the features I'm happiest with.
            </p>
            <p className="text"> I also got much more comfortable with Supabase's edge functions and row-level security during this project. Having the database enforce per-user data isolation at the query level, rather than relying on application code, made the whole backend feel much more robust.
            </p>

            <p className="text" style={{paddingBottom:"12px"}}> If you liked this project, feel free to reach out to me!</p>
            <Footer />
        </div>
    )
}

export default Mani
