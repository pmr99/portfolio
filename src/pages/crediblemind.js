import "./proj.css";
import home from "../Img/waste_home.png";
import Footer from "../Components/footer";

const Crediblemind = () => {
  return (
    <>
    <div className="project-page">
      <h1 className="title-head">JED Foundation Hub</h1>

      <h1 className="main-header">Problem</h1>
      <h2 className="second-header">Overview</h2>
      <p className="text">
        9% of U.S. college students experience a mental illness each year. The JED Foundation's mission is focused
        on suicide prevention, campus safety, and overall mental health improvement to higher education. The Campus
        Advisors play the primary role of overseeing the progress of JED's strategic plan at these campuses but
        lack a centralized system to track their workflow & progress.
      </p>
      <p className="text">
        I lead a team of six talented individuals to work with CredibleMind and JED Foundation to tackle this
        design problem.
      </p>

      <h1 className="main-header">Findings</h1>
      <p className="text">
        Since the scope of the problem statement was broad, the team concluded that the initial user research
        should be spent gaining information about the role of JED Foundation, the scope of work for Campus
        Advisors, and goals of all the stakeholders involved. We prepared a user interview script, and used it
        as a basis to extract information from prerecorded interviews.
      </p>

      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Tasks conducted by Campus Advisors</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>What they like about their existing workflow</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Pain points and challenges they face completing tasks</li>
      </ul>

      <h2 className="second-header">Affinity Mapping</h2>
      <p className="text">
        Using the data from user interviews, we grouped together insights to identify recurring themes and points.
      </p>
      <img src={home} alt="Affinity Map" className="project-img project-img--small" />

      <h2 className="second-header">Insight Generation</h2>

      <p className="text"><b>1. Key Tasks</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>
          The Campus Advisors' main roles were tracking schools' progress, communicating with individual Campus
          Task Force Advisors, and handling administrative tasks.
        </li>
      </ul>

      <p className="text"><b>2. What Works</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>
          Campus Advisors enjoyed the flexibility of using their own productivity tools, using Google Suite
          for collaboration.
        </li>
      </ul>

      <p className="text"><b>3. Pain Points</b></p>
      <ul style={{ marginLeft: "10%", marginRight: "10%" }}>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Lack of Integration (of different databases)</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Difficulty to coordinate with stakeholders</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Lack of Search Function</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Lack of Personalization</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Poor Data Visualization</li>
        <li className="text" style={{ marginLeft: 0, marginRight: 0 }}>Repetitive Tasks</li>
      </ul>

      <h2 className="second-header">Evaluation</h2>

      <p className="text"><b>Information Tracking</b></p>
      <p className="text">
        Campus Advisors need a way to track daily tasks, categorize schools based on strategic plan progress,
        and better integration of all the external databases they use.
      </p>

      <p className="text"><b>Data Visualization</b></p>
      <p className="text">
        Campus Advisors require improved accessibility to metadata of schools, ability to pull latest school
        report progress and quick access to school's status on different components of the strategic plan.
      </p>

      <p className="text"><b>Report Automation</b></p>
      <p className="text">
        Since many of the reports use similar language, Campus Advisors must be able to automate a large part
        of the report generation.
      </p>

      <p className="text"><b>Personalization</b></p>
      <p className="text">
        The platform needs the ability to reorganize features based on user preference, and have the ability
        to pin and favourite specific tools.
      </p>

      <p className="text"><b>Communication</b></p>
      <p className="text">
        Improve accessibility to contact representatives from schools, and provide information on recent
        correspondence.
      </p>

      <p className="text"><b>Resource Search</b></p>
      <p className="text">
        Search bar to increase accessibility to tools, a new resource page organized by categories.
      </p>

      <h1 className="main-header">Our Initial Solution</h1>

      <h2 className="second-header">Low-Fi Prototypes</h2>
      <p className="text">
        Based on what we had learnt from the user interviews, we came up with low fidelity prototypes of what
        our final product could potentially look like: Task Bar, School Summary, Resource Search, and Report
        Automation.
      </p>

      <h2 className="second-header">Initial Feedback</h2>
      <p className="text">
        The main dashboard is the first thing campus advisors will land on. The task bar and the school
        summaries should reside there for easy access.
      </p>

      <p className="text"><b>School Dashboard Architecture</b></p>
      <p className="text">
        We initially made the school summary a card view, but changed it to a bar view to account for the
        shape of the kanban-style task bar.
      </p>

      <h2 className="second-header">Mid-Fi Prototypes</h2>
      <p className="text">
        Using the collective team feedback and the low-fidelity sketches, we mocked-up mid-fidelity wireframes
        in Figma to further visualize our ideas.
      </p>

      <h1 className="main-header">Feedback and Iterations</h1>

      <h2 className="second-header">First User-Testing</h2>
      <p className="text">
        After forming a mid-fi prototype, we conducted a round of user testing. Our prototypes enabled us to
        get a deeper understanding of the needs of Campus Advisors and the nuances of their daily tasks.
      </p>

      <h2 className="second-header">Incorporating Feedback</h2>
      <p className="text">
        We iterated on the dashboard to consider the usefulness of a full kanban board, visualizations of
        progress using school "phases" as metrics, and refined wording choices for better UX.
      </p>

      <h1 className="main-header">Final Wireframes</h1>

      <h2 className="second-header">Dashboard</h2>
      <p className="text">
        Features: integration of tasks from other apps organized by phase, urgent tasks displayed on dashboard,
        tags to organize by school/task, ability to personalize.
      </p>

      <h2 className="second-header">School Page</h2>
      <p className="text">
        Features: Overview of current phase, ability to pull up most recent report, quick access to important
        contacts, visualization of progress within strategic plan.
      </p>

      <h2 className="second-header">Playbook Page</h2>
      <p className="text">
        Features: Filters based on custom categories, quick resource selection with integrated email
        functionality, search via keywords.
      </p>

      <h2 className="second-header">Report Automation Page</h2>
      <p className="text">
        Features: Pulling and compiling data while allowing the user to edit or make changes as necessary.
      </p>

      <h2 className="second-header">Style Guide</h2>
      <p className="text">
        Our color palette was inspired by our goal to elicit warmth, energy, and confidence with the orange-yellow
        color as well as calmness and motivation through the purple-bluish color.
      </p>

      <h1 className="main-header">Reflections</h1>
      <p className="text" style={{ paddingBottom: "12px" }}>
        It's been a great experience working with JED Foundation and CredibleMind. We learnt the importance of
        designing 'with' the end users rather than designing 'for' the end users.
      </p>

    </div>
    <Footer />
    </>
  );
};

export default Crediblemind;
