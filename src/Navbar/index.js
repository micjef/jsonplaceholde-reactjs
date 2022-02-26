import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveLogin } from "../store/loginSlice";

const Navbar = ({ title, logic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [mail, setMail] = useState("");

  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const doLogic = () => {
    dispatch(
      saveLogin({
        id: id,
        mail: mail,
      })
    );
    console.log(id, mail);
  };

  return (
    <div className="navbar">
      <div className="nav">
        <div className="left">
          {logic === "Login" ? (
            <>
              <Link to="/" className="title">
                <p className="title">{title}</p>
              </Link>
            </>
          ) : (
            <>
              <Link to="/admin" className="title">
                <p className="title">{title}</p>
              </Link>
            </>
          )}
        </div>
        <div className="right">
          <div className="logic" onClick={togglePopup}>
            <p className="text">{logic}</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <b>{logic}</b>
              <div>
                <p>User Id</p>
                <input
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder=" user id"
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  type="text"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  placeholder="email"
                />
              </div>
              <Link to={`/admin/${id}`}>
                <button onClick={doLogic}>{logic}</button>
              </Link>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default Navbar;

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};
