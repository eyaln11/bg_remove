import { useEffect } from "react";
import "./Bgnobg.css";
import { useState, useRef } from "react";
import axios from "axios";

function Bgnobg({ image }) {
  const [choosed_color, setchoosed_color] = useState(null);

  const inputElement = useRef();

  useEffect(() => {
    if (image) {
      onFileUpload(image);
    }
  }, [image]);

  function onFileUpload(imgFile) {
    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("fileName", imgFile.name);

    const headers = {
      "content-type": "multipart/form-data",
    };

    try {
      const res = axios.post(
        "http://localhost:5000/send_image",
        formData,
        headers
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  }

  function choose_color_input() {
    inputElement.current.click();
  }

  function choose_color_click(e) {
    setchoosed_color(e.target.value);
  }

  return (
    <div>
      <div className="Bgnobg_text">
        אל תשכחו להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף
      </div>

      <div className="bg_color_div" onClick={choose_color_input}>
        צבע רקע
        <div
          className="show_selected_color"
          style={{ backgroundColor: choosed_color }}
        ></div>
      </div>
      <div className="display_uploaded_image_nobg_container">
        {image && (
          <img
            src={image ? URL.createObjectURL(image) : ""}
            className="image_nobg_style"
            alt=""
          />
        )}
      </div>

      <input
        type="color"
        ref={inputElement}
        className="color_input"
        onInput={choose_color_click}
      />
    </div>
  );
}

export default Bgnobg;
