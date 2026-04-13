import "./proj.css"
import Footer from "../Components/footer"
import claudeLogo from "../Img/claudeSymbol.svg"

const ClaudeSkill = () => {
    return (
        <div>

            <h1 className="title-head"> Maintaining My Portfolio with Claude </h1>

            <div className="viewproject">
                <a href="https://github.com/pmr99/portfolio/blob/main/.claude/skills/add-project.md" style={{textDecoration:"none"}}>
                    <img src={claudeLogo} alt="Claude" width="100%" style={{paddingTop:"8px", paddingBottom:"0px", maxHeight:"300px", objectFit:"contain"}} />
                    <p className="text" style={{textAlign:"center", paddingTop:"12px"}}><b>View the Skill</b></p>
                </a>
            </div>

            <h1 className="main-header"> What is this? </h1>
            <p className="text"> This page is about a Claude Code skill I built called <code>/add-project</code>. It automates the entire process of adding a new project to this portfolio: take a raw dump of notes, run one command, and get back a finished, wired-up page with polished copy and a technical architecture diagram. No IDE, no manual file editing, no forgetting a step. This page itself was created using that skill.
            </p>
            <p className="text"> To understand why I built it, here is a bit of background on how this portfolio has evolved alongside the AI tools I have been using.
            </p>

            <h1 className="main-header"> The Story </h1>
            <p className="text"> This portfolio started as a simple React site to document the projects I work on. A place to put things I was proud of and share them with anyone curious enough to look. Simple enough. But keeping it updated turned out to be more work than I expected.
            </p>

            <h1 className="second-header"> Chapter 1: The StackOverflow Era </h1>
            <p className="text"> In the beginning, every bug was a rabbit hole. Mismatched React Router versions, CSS layout quirks, broken image imports. The kind of problems that seem trivial in hindsight but could eat up an entire afternoon. The workflow was familiar: copy the error, paste it into Google, land on a StackOverflow thread from 2017, try three answers, discover they're all for an older version, and piece together a fix from five different sources. It worked, but it was slow and pulled me out of the creative work I actually wanted to be doing.
            </p>

            <h1 className="second-header"> Chapter 2: ChatGPT Changes the Game </h1>
            <p className="text"> When ChatGPT arrived, debugging transformed overnight. Instead of keyword-searching my way through documentation and forum threads, I could describe the problem conversationally and get a targeted suggestion in seconds. It didn't write my code for me, but it dramatically shortened the time between hitting a wall and finding a direction forward. The portfolio went from something I dreaded updating to something I could actually iterate on.
            </p>

            <h1 className="second-header"> Chapter 3: Claude Code, No IDE Required </h1>
            <p className="text"> Claude Code changed things again, more fundamentally. Where ChatGPT helped me think through problems, Claude Code could just <i>do</i> them. I could describe a change, "revamp the navbar styling" or "add a new project page that matches the existing pattern", and watch it read the codebase, understand the conventions already in place, make the edits, and wire everything together. I added entire project pages without opening VS Code once.
            </p>
            <p className="text"> What made it different wasn't just the speed. Claude Code understood <i>context</i>. It didn't follow instructions in isolation. It read the existing code, matched the patterns it found, and made decisions consistent with how the rest of the codebase was already structured.
            </p>

            <h1 className="main-header"> The Problem Worth Solving </h1>
            <p className="text"> Even with Claude Code, there was still friction. Every time I finished a project and wanted to add it to the portfolio, I'd go through the same steps: create a page file, import images, write the card entry in <code>body.js</code>, add the route to <code>navbar.js</code>, make sure all the paths lined up. About 20 minutes of work, but the same 20 minutes every time. Repetitive, mechanical, and easy to get wrong if I forgot a step.
            </p>
            <p className="text"> The other issue was content quality. I'd produce a rough first draft of project notes, bullet points, half-finished sentences, jargon that made sense to me but wouldn't land for someone reading it cold. Turning that into something polished required a separate editing pass that I often skipped.
            </p>
            <p className="text"> I wanted a single command that could take my raw notes, messy and incomplete, and produce a finished, wired-up portfolio page. That's the <code>/add-project</code> skill.
            </p>

            <h1 className="main-header"> How the Skill Works </h1>
            <p className="text"> Claude Code skills are markdown files stored in <code>.claude/skills/</code> that act as structured prompts for a specific task. When you invoke <code>/add-project</code>, Claude loads the skill and follows it as a precise set of instructions, not just a vague goal, but a step-by-step process with explicit rules about what to ask, what to check, and what to produce.
            </p>

            <h1 className="second-header"> Step 0: Information Gathering </h1>
            <p className="text"> The skill starts by parsing whatever the user provides. A structured write-up, a raw dump of notes, a YC application, or just a few sentences. It extracts what it can, then explicitly asks for everything that's missing before touching any file. Required fields include the project category, role, card description, cover image, detail page images, and links. Nothing is assumed or fabricated. If it's not there, it asks.
            </p>

            <h1 className="second-header"> Step 1: Content Polishing </h1>
            <p className="text"> The user's notes are a first draft. The skill takes that raw material and rewrites it into structured prose, matching the writing tone already present across the portfolio. It organizes content into logical sections: overview, problem, solution, how it works, technical details. Not every project needs every section, so it adapts the structure to what's actually there.
            </p>

            <h1 className="second-header"> Step 2: Architecture Diagram Generation </h1>
            <p className="text"> For any project with a technical component, the skill generates an inline SVG architecture diagram directly in the React component. No external libraries, no image files, just pure SVG embedded in JSX. It reads the tech stack from the project description and maps it into a clean visual: grouped sections for frontend, backend, and external services, with labeled arrows showing data flow. The diagram is responsive via <code>viewBox</code> and styled with a muted professional color palette.
            </p>

            {/* Architecture Diagram of the Skill Itself */}
            <h1 className="second-header"> Step 3: File Creation and Wiring </h1>
            <p className="text"> Once content and assets are ready, the skill executes three precise file operations — creating the project page, updating the card listings, and adding the route — all following the existing codebase patterns exactly.
            </p>

            <svg viewBox="0 0 900 560" width="90%" style={{maxWidth:"900px", margin:"20px auto 30px auto", display:"block"}} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#666" />
                    </marker>
                </defs>

                {/* Input */}
                <rect x="20" y="20" width="200" height="120" rx="16" fill="#f5f5f5" stroke="#bbb" strokeWidth="2" />
                <text x="120" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#333" textAnchor="middle">User Input</text>
                <rect x="40" y="58" width="160" height="32" rx="8" fill="#e8e8e8" stroke="#aaa" strokeWidth="1" />
                <text x="120" y="79" fontFamily="Arial, sans-serif" fontSize="11" fill="#444" textAnchor="middle">Raw project notes / dump</text>
                <rect x="40" y="96" width="160" height="32" rx="8" fill="#e8e8e8" stroke="#aaa" strokeWidth="1" />
                <text x="120" y="117" fontFamily="Arial, sans-serif" fontSize="11" fill="#444" textAnchor="middle">Images + Links</text>

                {/* Arrow: Input -> Skill */}
                <line x1="220" y1="80" x2="290" y2="80" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                <text x="255" y="72" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">invokes</text>

                {/* Skill Core */}
                <rect x="290" y="20" width="320" height="300" rx="16" fill="#fdf3ff" stroke="#c084fc" strokeWidth="2" />
                <text x="450" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#7e22ce" textAnchor="middle">/add-project Skill</text>
                <text x="450" y="65" fontFamily="Arial, sans-serif" fontSize="10" fill="#9333ea" textAnchor="middle">.claude/skills/add-project.md</text>

                <rect x="310" y="76" width="280" height="44" rx="10" fill="#f3e8fd" stroke="#a855f7" strokeWidth="1.5" />
                <text x="450" y="95" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Step 0: Information Gathering</text>
                <text x="450" y="111" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Parse dump → ask for missing fields</text>

                <rect x="310" y="130" width="280" height="44" rx="10" fill="#f3e8fd" stroke="#a855f7" strokeWidth="1.5" />
                <text x="450" y="149" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Step 1: Content Polishing</text>
                <text x="450" y="165" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Rewrite notes → structured prose</text>

                <rect x="310" y="184" width="280" height="44" rx="10" fill="#f3e8fd" stroke="#a855f7" strokeWidth="1.5" />
                <text x="450" y="203" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Step 2: SVG Diagram</text>
                <text x="450" y="219" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Read tech stack → generate architecture SVG</text>

                <rect x="310" y="238" width="280" height="44" rx="10" fill="#f3e8fd" stroke="#a855f7" strokeWidth="1.5" />
                <text x="450" y="257" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Step 3: File Operations</text>
                <text x="450" y="273" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Create page → update body.js → update navbar.js</text>

                {/* Arrow: Skill -> Outputs */}
                <line x1="610" y1="160" x2="670" y2="160" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                <text x="640" y="152" fontFamily="Arial, sans-serif" fontSize="9" fill="#888" textAnchor="middle">writes</text>

                {/* Output Files */}
                <rect x="670" y="20" width="210" height="300" rx="16" fill="#f0fdf4" stroke="#86efac" strokeWidth="2" />
                <text x="775" y="48" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#166534" textAnchor="middle">Output Files</text>

                <rect x="690" y="62" width="170" height="44" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="775" y="81" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">pages/{"{slug}"}.js</text>
                <text x="775" y="97" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Full project page component</text>

                <rect x="690" y="118" width="170" height="44" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="775" y="137" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Components/body.js</text>
                <text x="775" y="153" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Card entry + image import</text>

                <rect x="690" y="174" width="170" height="44" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="775" y="193" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Components/navbar.js</text>
                <text x="775" y="209" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Route + import added</text>

                <rect x="690" y="230" width="170" height="44" rx="10" fill="#dcfce7" stroke="#4ade80" strokeWidth="1.5" />
                <text x="775" y="249" fontFamily="Arial, sans-serif" fontSize="12" fill="#333" textAnchor="middle">Img/ assets</text>
                <text x="775" y="265" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Copied + imported correctly</text>

                {/* Bottom: what Claude reads */}
                <rect x="20" y="380" width="860" height="150" rx="16" fill="#fff7ed" stroke="#fed7aa" strokeWidth="2" />
                <text x="450" y="408" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="#9a3412" textAnchor="middle">What Claude Code Reads Before Writing Anything</text>

                <rect x="40" y="420" width="190" height="44" rx="10" fill="#ffedd5" stroke="#fb923c" strokeWidth="1.5" />
                <text x="135" y="439" fontFamily="Arial, sans-serif" fontSize="11" fill="#333" textAnchor="middle">Existing project pages</text>
                <text x="135" y="455" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Matches style + tone</text>

                <rect x="248" y="420" width="190" height="44" rx="10" fill="#ffedd5" stroke="#fb923c" strokeWidth="1.5" />
                <text x="343" y="439" fontFamily="Arial, sans-serif" fontSize="11" fill="#333" textAnchor="middle">proj.css class definitions</text>
                <text x="343" y="455" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Uses correct CSS classes</text>

                <rect x="456" y="420" width="190" height="44" rx="10" fill="#ffedd5" stroke="#fb923c" strokeWidth="1.5" />
                <text x="551" y="439" fontFamily="Arial, sans-serif" fontSize="11" fill="#333" textAnchor="middle">Current body.js + navbar.js</text>
                <text x="551" y="455" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Inserts without breaking state</text>

                <rect x="664" y="420" width="196" height="44" rx="10" fill="#ffedd5" stroke="#fb923c" strokeWidth="1.5" />
                <text x="762" y="439" fontFamily="Arial, sans-serif" fontSize="11" fill="#333" textAnchor="middle">Img/ directory</text>
                <text x="762" y="455" fontFamily="Arial, sans-serif" fontSize="10" fill="#666" textAnchor="middle">Verifies assets exist</text>

                {/* Arrow down to context box */}
                <line x1="450" y1="340" x2="450" y2="375" stroke="#666" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                <text x="480" y="362" fontFamily="Arial, sans-serif" fontSize="9" fill="#888">reads codebase</text>
            </svg>

            <h1 className="second-header"> Step 4: Verification </h1>
            <p className="text"> After all files are written, the skill verifies that route paths match card links, import names are consistent, and all image paths resolve correctly. It surfaces a checklist of what was created and flags anything that still needs attention, like placeholder image imports the user needs to swap in later.
            </p>

            <h1 className="main-header"> What Makes This Different </h1>
            <p className="text"> The key insight behind this approach is that Claude Code doesn't just follow the skill instructions. It reads the existing codebase first. Before writing a single line, it understands the current structure of <code>body.js</code>, the CSS classes defined in <code>proj.css</code>, the writing style used across existing project pages, and the routing conventions in <code>navbar.js</code>. The skill provides the process; Claude's understanding of the codebase provides the context. Together they produce output that fits seamlessly into what's already there.
            </p>
            <p className="text"> This is also what separates a skill from a template. A template gives you a blank form to fill in. A skill is context-aware. It adapts to the state of the project, asks for what it needs, makes judgment calls when things are ambiguous, and produces work that would otherwise require a developer who already knows the codebase inside and out.
            </p>

            <h1 className="main-header"> The Result </h1>
            <p className="text"> Adding a new project to this portfolio now takes a conversation, not an afternoon. I write a rough dump of notes, run <code>/add-project</code>, answer a few clarifying questions, and get back a finished, wired-up page with polished copy and an architecture diagram. The whole thing gets committed and pushed without me opening an IDE or touching a config file.
            </p>
            <p className="text"> The Swiftly project page on this site was created entirely this way, from a raw YC application dump to a finished portfolio page in a single session. This page too was written and built through the same workflow.
            </p>

            <p className="text" style={{paddingBottom:"12px"}}> If you're curious about building something similar, feel free to reach out.</p>
            <Footer />
        </div>
    )
}

export default ClaudeSkill
