import { CodeBody } from '../Components/body';
import Footer from '../Components/footer';
import { FaLaptopCode } from "react-icons/fa";
import './proj.css';

const Code = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 60px)" }}>
      <div style={{ flex: 1 }}>
        <div style={{ padding: "48px 0 24px", textAlign: "center" }}>
          <FaLaptopCode size={64} style={{ color: "var(--color-accent)", marginBottom: 12 }} />
          <h1 className="title-head" style={{ paddingTop: 0 }}>Code</h1>
        </div>
        <CodeBody />
      </div>
      <Footer />
    </div>
  );
};

export default Code;
