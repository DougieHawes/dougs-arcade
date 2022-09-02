import { Link } from "react-router-dom";

import "./style.scss";

const Header = ({ onClick }) => {
  return (
    <header className="header" onClick={onClick}>
      <Link to="/">
        <h1 className="title" onClick={() => {}}>
          DOU<span className="title-g">G</span>'S{" "}
          <span className="title-a">A</span>RCA
          <span className="title-d">D</span>E
        </h1>
      </Link>
    </header>
  );
};

export default Header;
