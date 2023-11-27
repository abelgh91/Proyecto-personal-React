import { useAuth } from "../../contexts/authContext";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const {user, logout} = useAuth();
  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <img
            src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701073416/loro_ezswxt.png"
            alt="logo"
            className="logo"
          />
          <div className="titleContainer">
            <h1 className="titleHeader">USER PAGE</h1>
            <h1 className="titleHeaderBlack">USER PAGE</h1>
          </div>
        </div>
        <nav>
          {user == null && (
            <NavLink to="/login">
              <img
                src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701073294/seguridad-del-usuario_povk6q.png"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}

          {user !== null ? (
            <NavLink to="/dashboard">
              <img
                src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701072854/menu-principal_vji15v.png"
                alt=""
                className="iconNav iconDashBoard"
              />
            </NavLink>
          ) : null}

          <NavLink to="/">
            <img
              src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1701072955/hogar_m4szgd.png"
              alt=""
              className="iconNav home"
            />
          </NavLink>
          {user !== null && (
            <img
              src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1697478719/3_zf17by.png"
              alt=""
              className="iconNav iconLogout"
              onClick={() => logout()}
            />
          )}
          {user !== null ? (
            <>
              <NavLink to="/profile">
                <img
                  className="profileCircle"
                  src={user.image}
                  alt={user.user}
                />
              </NavLink>
            </>
          ) : null}
          {}
        </nav>
      </header>
    </>
  )
}

