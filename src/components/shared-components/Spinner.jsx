import React from "react";
import { Spinner } from "reactstrap";

export const CustomSpinner = ({ isVisible }) => {
  return isVisible ? (
    <>
      {isVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: isVisible ? "blur(5px)" : "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              position: "relative",
              animation: "spin 1s linear infinite",
            }}
          >
            <Spinner
              color="light"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      )}
    </>
  ) : (
    <></>
  );
};
