import { TypeAnimation } from "react-type-animation";
import "./MainTop.scss";
function MainTop() {
  return (
    <div className="MainTop-section">
      <div className="container max-w-[1296px]">
        <div className="wrapper">
          <h1 className="text-center">
            Get Quality & 10x Faster Way To Write 
            <TypeAnimation
              wrapper="span"
              sequence={[" Profile Bio", 1200, " Content Writing", 1200, " Blog Post", 1200, " Emails", 1200]}
              repeat={Infinity}
              speed={170}
            />
          </h1>
          <p>
            Ai Gen is an AI writing assistant that helps you create high-quality
            content, in just a few seconds, at a fraction of the cost!
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
export default MainTop;
