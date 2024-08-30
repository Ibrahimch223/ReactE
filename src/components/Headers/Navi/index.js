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
                    <Button>
                      <MdOutlineHome />
                      Home
                    </Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Telephone</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Tablete</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Ordinateur</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Electroménage</Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>Contact</Button>
                  </Link>
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
