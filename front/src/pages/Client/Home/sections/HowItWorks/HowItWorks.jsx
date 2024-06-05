import "./HowItWorks.scss";
import { FaPlay } from "react-icons/fa";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 800,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 0,
};

function HowItWorks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="HowItWorks-section">
      <div className="container max-w-[1296px]">
        <div className="title_top">
          <span>HOW IT WORKS</span>
          <div className="line"></div>
        </div>
        <h2 className="title">
          Save Your Time And Money, Very Easy To Create Your{" "}
          <span>writing Content That Converts</span>
        </h2>
        <div className="row mt-[70px]">
          <div className="col-lg-4 box" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000">
            <div className="sh_title">01</div>
            <div className="single_hiw_content">
              <h3>Magically Writes</h3>
              <p>
                It is a long established fact that reader will be distracted
                readable content of a page when.
              </p>
            </div>
          </div>
          <div className="col-lg-4 box" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" data-aos-duration="1000">
            <div className="sh_title">02</div>
            <div className="single_hiw_content">
              <h3>Input context</h3>
              <p>
                It is a long established fact that reader will be distracted
                readable content of a page when.
              </p>
            </div>
          </div>
          <div className="col-lg-4 box" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0" data-aos-duration="1000">
            <div className="sh_title">03</div>
            <div className="single_hiw_content">
              <h3>Choose Usecase</h3>
              <p>
                It is a long established fact that reader will be distracted
                readable content of a page when.
              </p>
            </div>
          </div>
        </div>
        <div className="video mt-20" data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" data-aos-duration="1000">
          <img
            src="https://ai-life-react.vercel.app/assets/video-bg-e357f6a8.jpg"
            alt=""
          />
          <button onClick={handleOpen}>
            <FaPlay style={{ color: "white", fontSize: "40px" }} />
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe
              width="900"
              height="515"
              src="https://www.youtube.com/embed/OUFcCoTx8zM?si=tvAInyPa5wjcdOR_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
export default HowItWorks;
