import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="page-container"
      style={{ marginLeft: "20px", textAlign: "center" }}
    >
      <div
        style={{
          marginTop: "64px",
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "32px",
        }}
      >
        해당 페이지를 찾지 못했습니다.
      </div>
      <div
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          marginBottom: "80px",
        }}
      >
        주소가 잘못되었거나 더이상 제공되지 않는 페이지 입니다.
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          fontSize: "16px",
          lineHeight: "1.6",
          color: "white",
          cursor: "pointer",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "4px",
        }}
      >
        메인 페이지로 이동
      </button>
    </div>
  );
}

export default NotFound;
