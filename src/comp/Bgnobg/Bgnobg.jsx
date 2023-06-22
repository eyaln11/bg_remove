import "./Bgnobg.css";
import { useState, useRef } from "react";

function Bgnobg() {
  const [choosed_color, setchoosed_color] = useState(null);

  const inputElement = useRef();

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
