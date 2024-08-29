import { CiMenuBurger } from "react-icons/ci";
import Button from "@mui/material/Button";

const Navi = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <Button className="allCatTab">
                <span className="text">Tout Catagories</span>
              </Button>
            </div>

            <div className="col-sm-9 navPart2"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navi;
