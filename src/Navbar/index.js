import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllLogin, saveLogin, selectLoginList } from "../store/loginSlice";

const Navbar = ({ title, logic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const [mail, setMail] = useState("");

  const dispatch = useDispatch();

  const userId = useSelector(selectLoginList)

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

    {logic === 'Log Out' && (
      dispatch(deleteAllLogin)
    )}
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
              <Link to={`/admin/${userId[0].id}`} className="title">
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
              {logic === 'Login' && (
                <div>
                  <p>User Id</p>
                  <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder=" user id"
                  />
                </div>
              )}
              {logic === 'Login' && (
                <div>
                  <p>Email</p>
                  <input
                    type="text"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    placeholder="email"
                  />
                </div>
              )}
              <Link to={logic === 'Login' ? (`/admin/${id}`) : ('/')} handleClose={togglePopup}>
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
