import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import "../App.css";

// Mutation Component doesnt do shit
const LOGOUT_USER = gql`
  mutation logOut {
    signOut
  }
`;

function MenuBar() {
  const { user, logout } = useContext(AuthContext);
  //const pathname = window.location.pathname;

  // configure path name parsing logic
  //const path = pathname === "/" ? "home" : pathname.substr(1);
  //const [activeItem, setActiveItem] = useState(path);

  //const handleItemClick = (e, { name }) => setActiveItem(name);

  //identify login state
  const menuBar = user ? (
    <Menu secondary size="massive" style={{ marginBottom: "0px" }}>
      <Menu.Item
        className={"logo"}
        name="Subscriptions"
        //active={activeItem === "home"}
        //onClick={handleItemClick}
        as={Link}
        to="/subscriptions"
      >
        <img
          style={{ height: "37px", width: "108px" }}
          alt="logo"
          src="surplusLogo.svg"
        />
      </Menu.Item>

      <Menu.Menu position="right">
        <Mutation
          mutation={LOGOUT_USER}
          update={(cache, _) => {
            console.log(cache);
          }}
        >
          {() => (
            <Menu.Item
              style={{
                backgroundColor: "#7610EB",
                color: "#ffffff",
                alignSelf: "center",
                marginRight: "20px",
                fontSize: "14px",
                fontWeight: "400",
              }}
              name="logout"
              onClick={logout}
              as={Link}
              to="/"
            />
          )}
        </Mutation>
      </Menu.Menu>
    </Menu>
  ) : (
    <Menu secondary style={{ marginBottom: "0px" }} size="massive">
      <Menu.Item
        className={"logo"}
        name="home"
        //active={activeItem === "home"}
        //onClick={handleItemClick}
        as={Link}
        to="/"
      >
        <img
          style={{ height: "37px", width: "108px" }}
          alt="logo"
          src="surplusLogo.svg"
        />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          style={{ fontSize: "14px", fontWeight: "400" }}
          name="login"
          //active={activeItem === "login"}
          //onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          style={{
            backgroundColor: "#7610EB",
            color: "#ffffff",
            alignSelf: "center",
            marginRight: "20px",
            fontSize: "14px",
            fontWeight: "400",
          }}
          position="right"
          name="register"
          //active={activeItem === "register"}
          //onClick={handleItemClick}
          as={Link}
          to="/register"
        />
      </Menu.Menu>
    </Menu>
  );

  return menuBar;
}

export default MenuBar;
