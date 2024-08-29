import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";
import Dialog from "@mui/material/Dialog";

const ContryDrop = () => {
  return (
    <>
      <Button className="contryDrop">
        <div className="info d-flex flex-column">
          <span className="label">Localisation</span>
          <span className="name">
            <b>Bamako</b>
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog open={true} className="locationModal">
        <h4>Votre lieux</h4>
        <div className="headersearch w-100">
          <input type="text" placeholder="lieux..." />
          <Button>
            <IoMdSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          <li>
            <Button>ACI 2000</Button>
          </li>
          <li>
            <Button>Dafina</Button>
          </li>
          <li>
            <Button>1008 Logement</Button>
          </li>
          <li>
            <Button>Doumassana</Button>
          </li>
          <li>
            <Button>Badalabougou</Button>
          </li>
          <li>
            <Button>Magnabougou</Button>
          </li>
          <li>
            <Button>Niamakoro</Button>
          </li>
          <li>
            <Button>Magnabougou</Button>
          </li>
          <li>
            <Button>Kalaban-coura</Button>
          </li>
          <li>
            <Button>Kalaban-coro</Button>
          </li>
          <li>
            <Button>Lafiabougou</Button>
          </li>
          <li>
            <Button>Sabalibougou</Button>
          </li>
          <li>
            <Button>Sotiba</Button>
          </li>
          <li>
            <Button>BaganaBougou</Button>
          </li>
          <li>
            <Button>Yrimadio</Button>
            <li>
              <Button>Magnabougou</Button>
            </li>
            <li>
              <Button>Magnabougou</Button>
            </li>
            <li>
              <Button>Magnabougou</Button>
            </li>
            <li>
              <Button>Magnabougou</Button>
            </li>
            <li>
              <Button>Magnabougou</Button>
            </li>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default ContryDrop;
