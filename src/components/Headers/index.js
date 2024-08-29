import { Link } from "react-router-dom";
import Logo from "../../assets/images/ETS.png";
import ContryDrop from "../ContryDrown";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SearchBox from "./SearchBaox";
import Navi from "./Navi";

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}

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
                <SearchBox />

                <div className="part3 d-flex align-items-center ml-auto">
                  <Button className="circle mr-3">
                    <FaRegUser />
                  </Button>

                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="price">5000CFA</span>
                    <div className="position-relative ml-2">
                      <Button className="circle">
                        <AiOutlineShoppingCart />
                      </Button>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Navi />
      </div>
    </>
  );
};

export default Header;
