import { TypeAnimation } from "react-type-animation";
import "./MainTop.scss";
function MainTop() {
  return (
    <div className="MainTop-section">
      <div className="container max-w-[1296px]">
        <div className="wrapper">
          {/* <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Get Quality & 10x Faster Way To Write Profile Bio",
              2000,
              "Get Quality & 10x Faster Way To Write Content Writing",
              2000,
              "Get Quality & 10x Faster Way To Write Blog Post",
              2000,
              "Get Quality & 10x Faster Way To Write Emails",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          /> */}
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
