import { useState } from "react";

import "./Bg.css";
import close from "./../../images/close.png";
import banner from "./../../images/banner.png";
import logo from "./../../images/logo.png";
import DownloadImg from "../DownloadImg/DownloadImg";
import Bgnobg from "../Bgnobg/Bgnobg";
import Bgoriginal from "../Bgoriginal/Bgoriginal";

function Bg() {
  const [bgType, setBgType] = useState(true);

  return (
    <div className="bg_general_div">
      <div className="bg_top_menu">
        <img src={close} className="bg_close_btn" alt="close button" />
        <div className="bg_top_menu_title">העלאת תמונה כדי להסיר את הרקע</div>
        <div className="bg_top_menu_button">העלאת תמונה</div>
        <div className="bg_top_menu_sub_title">פורמטים נתמכים: png, jpeg</div>
      </div>

      <div className="bg_body_area">
        <div className="bg_body_left">
          <div className="bg_body_tabs">
            <div className="bg_body_bg_remove">
              <span
                className="bg_body_bg_remove_text"
                onClick={() => setBgType(true)}
              >
                הוסר רקע
              </span>
            </div>
            <div className="bg_body_bg_original">
              <span
                className="bg_body_bg_remove_text"
                onClick={() => setBgType(false)}
              >
                מקורי
              </span>
            </div>
          </div>
          <div className="bg_body_left_middle">
            {bgType ? <Bgnobg /> : <Bgoriginal />}
          </div>
          <div className="bg_body_eula">
            <span>
              על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. וחלים מדיניות
              ופרטיות ותנאי השימוש
            </span>
          </div>
          <div className="bg_body_eula_btn">תקנון חברה</div>
        </div>
        <div className="bg_body_right">
          <div className="bg_body_right_middle">
            <DownloadImg />
          </div>
        </div>
      </div>

      <div className="bg_footer">
        <img src={logo} className="bg_footer_logo" alt="" />
        <img src={banner} className="bg_footer_banner" alt="" />
      </div>
    </div>
  );
}

export default Bg;
