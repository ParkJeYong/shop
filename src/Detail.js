import { useState } from "react";
import c1 from "./마키마 사진/마키마 상품1.jpg";

function Detail() {
  let [좋아요, 좋아요변경] = useState(0);
  return (
    <div className="container">
      <img src={c1} />
      <h4>
        마키마가 먼 곳을 응시하고 있다
        <span
          onClick={() => {
            좋아요변경(좋아요 + 1);
          }}
        >
          💕
        </span>
        {좋아요}
      </h4>
    </div>
  );
}

export default Detail;
