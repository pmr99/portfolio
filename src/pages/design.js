import {DesignBody} from '../Components/body';
import Footer from '../Components/footer';
import { MdDesignServices } from "react-icons/md";

const Design = () => {
  return (
    <div>
      <MdDesignServices size = "sm" style = {{height: "100px", margin: "auto", padding: "8px"}}/>
      <DesignBody/>
      <Footer/>
    </div>
  );
}

export default Design;