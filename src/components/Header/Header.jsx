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
            src="https://res.cloudinary.com/dqlvldxwc/image/upload/v1698243435/pngtree-character-default-avatar-image_2237203_yzet4n.jpg"
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
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705523/login_ljn9fb.png"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}

          {user !== null ? (
            <NavLink to="/dashboard">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705689/dashboard-statistics-5492_rnmxcl.png"
                alt=""
                className="iconNav iconDashBoard"
              />
            </NavLink>
          ) : null}

          <NavLink to="/">
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705455/home_circle_outline_icon_139029_xdnnt2.png"
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

