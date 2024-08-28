import { Link } from "react-router-dom";
import Logo from "../../assets/images/ETS.png";
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
      </div>

      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logowapper col-sm-3">
              <Link to={"/"}>
                <img src={Logo} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
