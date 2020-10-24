import React from "react";
import styled from "styled-components";
export const Modal = (showModal, setShowModal) => {
  return <div>{showModal ? <div>Modal</div> : null}</div>;
};
