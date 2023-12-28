import {CodeBody} from '../Components/body';
import Footer from '../Components/footer';
import { FaLaptopCode } from "react-icons/fa";

const Code = () => {
  return (
    <div>
      <FaLaptopCode size = "sm" style = {{height: "100px", margin: "auto", padding: "16px", paddingTop: "16px"}}/>
      <CodeBody/>
      <Footer/>
    </div>
  );
}

export default Code;