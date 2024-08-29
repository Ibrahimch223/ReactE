import { CiMenuBurger } from "react-icons/ci";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineHome } from "react-icons/md";

const Navi = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1 align-items-center">
              <Button className="allCatTab">
                <span className="icon1 mr-2">
                  <CiMenuBurger />
                </span>
                <span className="text">Tout Catagories</span>
                <span className="icon2 ml-2">
                  <FaAngleDown />
                </span>
              </Button>
            </div>

            <div className="col-sm-9 navPart2 d-flex align-items-center">
              <ul className="list list-inline">
                <li className="list-inline-item">
                  <Link to="/">
                    <MdOutlineHome />
                    Home
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Telephone</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Tablete</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Ordinateur</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Electroménage</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navi;
