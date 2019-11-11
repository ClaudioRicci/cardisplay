import React, { useLayoutEffect } from "react";
import Button from "../Button/Button";
import "./Modal.scss";

export default function Modal({
  make,
  model,
  img_url,
  rrp,
  carwow_rating,
  summary,
  onClose
}) {
  function useLockBodyScroll() {
    useLayoutEffect(() => {
      // Get original value of body overflow
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // Prevent scrolling on mount
      document.body.style.overflow = "hidden";
      // Re-enable scrolling when component unmounts
      return () => (document.body.style.overflow = originalStyle);
    }, []); // Empty array ensures effect is only run on mount and unmount
  }

  useLockBodyScroll();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{make}</h2>
        <p>{model}</p>
        <p>{summary}</p>
        <Button label="Close" onClick={onClose}></Button>
      </div>
    </div>
  );
}
