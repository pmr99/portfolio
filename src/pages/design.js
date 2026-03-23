import { DesignBody } from '../Components/body';
import Footer from '../Components/footer';
import { MdDesignServices } from "react-icons/md";
import './proj.css';

const Design = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "calc(100vh - 60px)" }}>
      <div style={{ flex: 1 }}>
        <div style={{ padding: "48px 0 24px", textAlign: "center" }}>
          <MdDesignServices size={64} style={{ color: "var(--color-accent)", marginBottom: 12 }} />
          <h1 className="title-head" style={{ paddingTop: 0 }}>Design</h1>
        </div>
        <DesignBody />
      </div>
      <Footer />
    </div>
  );
};

export default Design;
