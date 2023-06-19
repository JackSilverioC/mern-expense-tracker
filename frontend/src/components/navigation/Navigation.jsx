import { styled } from "styled-components";
import avatar from "../../img/avatar.png";
import { menuItems } from "../../utils/MenuItems";

function Navigation({ active, setActive }) {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="" />
        <div className="text">
          <h2>Usuario</h2>
          <p>Tu dinero</p>
        </div>
      </div>
      <ul className="menu-items">
        {menuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={active === item.id ? "active" : ""}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 290px;
  height: 100%;
  background: rgba(57, 62, 70, 0.85);

  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
    h2 {
      color: #00adb5;
    }
    p {
      color: #eaeaea;
    }
  }

  .menu-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: #eaeaea;
      padding-left: 1rem;
      position: relative;
      i {
        color: #eaeaea;
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }

  .active {
    color: #ff2e63 !important;
    i {
      color: #ff2e63 !important;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #ff2e63;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
