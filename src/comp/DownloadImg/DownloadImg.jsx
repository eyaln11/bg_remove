import "./DownloadImg.css";
import check from "./../../images/check.png";
import newImg from "./../../images/new.png";

function DownloadImg() {
  return (
    <div>
      <div className="DownloadImg_upper_and_bottom_div DownloadImg_upper_div">
        <div className="DownloadImg_text">תמונה חינם</div>
        <div className="DownloadImg_subtext">612x408 תצוגה מקדימה של תמונה</div>
        <div className="DownloadImg_btn">הורד</div>

        <div className="DownloadImg_small_text_cont DownloadImg_upper_small_text_cont">
          <span className="DownloadImg_small_text">
            איכות טובה עד 0.25 מגה פיקסל
          </span>
          <img src={check} alt="" className="" />
        </div>
      </div>

      <div className="DownloadImg_upper_and_bottom_div DownloadImg_bottom_div">
        <div className="DownloadImg_text">
          Pro
          <img src={newImg} className="pro_img_new" alt="" />
        </div>
        <div className="DownloadImg_subtext">1280x1920 תמונה מלאה</div>
        <div className="DownloadImg_btn">HD הורד</div>

        <div className="DownloadImg_small_text_cont DownloadImg_bottom_small_text_cont">
          <span className="DownloadImg_small_text">
            איכות טובה עד 0.25 מגה פיקסל
          </span>
          <img src={check} alt="" className="" />
        </div>
      </div>
    </div>
  );
}

export default DownloadImg;
