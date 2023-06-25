import React from "react";
import "./Bgoriginal.css";

function Bgoriginal({ image }) {
  return (
    <div>
      <div className="display_uploaded_image_original_container">
        {image && (
          <img
            src={image ? URL.createObjectURL(image) : ""}
            className="image_original_style"
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default Bgoriginal;
