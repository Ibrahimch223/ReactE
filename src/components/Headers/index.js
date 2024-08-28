import { Link } from "react-router-dom";
import Logo from "../../assets/images/ETS.png";
import ContryDrop from "../ContryDrown";
import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";

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

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logowapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className="d-flex align-items-center col-sm-10 part2">
                <ContryDrop />
                <div className="headersearch ml-3 mr-3">
                  <input
                    type="text"
                    placeholder="Rechercher votre produit..."
                  />
                  <Button>
                    <IoMdSearch />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
