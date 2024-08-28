import { Link } from "react-router-dom";
import Logo from "../../assets/images/ETS.png";
import ContryDrop from "../ContryDrown";

const Header = () => {
  return (
    <>
      <div className="headerw">
        <div className="test">
          <div className="containerw">
            <p className=" text-center mb-0 mt-0">
              Bienvenue Chez <b>ETS services</b> pour vos besoins electronique
              et divers
            </p>
          </div>
        </div>

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="logowapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="d-flex align-items-center col-sm-10 part2">
                <ContryDrop />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
