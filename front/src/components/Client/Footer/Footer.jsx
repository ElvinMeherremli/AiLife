import './Footer.scss'

function Footer() {
  return (
    <div className="Footer-section">
      <div className="container max-w-[1296px]">
        <div className="row wrapper">
          <div className="col-lg-3">
            <img
              src="https://ai-life-react.vercel.app/assets/logo-49876130.png"
              alt=""
              className="logo"
            />
            <p className="logo-descr">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              vitae risus nec dui venenatis dignissim.
            </p>
          </div>
          <div className="col-lg-3">
            <h4>Usecases</h4>
            <ul>
              <li> - Creative Writing</li>
              <li> - Social Media Ads</li>
              <li> - For Emails</li>
              <li> - Text Editing</li>
              <li> - Blog Writing</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Company</h4>
            <ul>
              <li> - About Us</li>
              <li> - Knowledge Base</li>
              <li> - Affiliate Program</li>
              <li> - Community</li>
              <li> - Market API</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Connect With Us</h4>
            <ul>
              <li> - Chat Now</li>
              <li> - LinkedIn</li>
              <li> - Facebook</li>
              <li> - Twitter</li>
              <li> - Instagram</li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="row footer-bottom">
          <div className="col-lg-6">
            <p className="c">© 2023. All Rights Reserved.</p>
          </div>
          <div className="col-lg-6">
            <div className="footer-navigation">
              <a href="#">Terms of use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
