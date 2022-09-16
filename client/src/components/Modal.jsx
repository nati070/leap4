import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { validateURL, addUrlMapping } from "../utils/utils";

const Modal = (props) => {
  const [url, setUrl] = useState("");
  const [isErr, setErr] = useState(false);

  const handaleUrl = async () => {
    if (validateURL(url)) {
      const data = await addUrlMapping(url);
      props.setNewId(data["id"]);
      props.setShow(false);
    } else {
      setErr(true);
    }
  };

  const handaleClose = () => {
    props.setShow(false);
    setErr(false);
  };

  if (!props.show) {
    return null;
  }

  return (
    <Div className="modal">
      <div className="content">
        <div className="header">
          <h1> Add Url </h1>
        </div>
        <div className="body">
          <label>
            Enter Url:
            <Input type="textfield" onChange={(e) => setUrl(e.target.value)} />
          </label>
        </div>
        {isErr ? <ErrLabel> please insert valid url</ErrLabel> : <></>}
        <div className="footer">
          <Input type="button" value="Add" onClick={() => handaleUrl()} />
          <Input
            type="button"
            value="Close"
            onClick={() => {
              handaleClose();
            }}
          />
        </div>
      </div>
    </Div>
  );
};

export default Modal;

const Div = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .header {
    display: flex;
    justify-content: center;
  }
  .footer {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

const Input = styled.input`
  margin: 5px;
`;

const ErrLabel = styled.label`
  color: red;
`;
