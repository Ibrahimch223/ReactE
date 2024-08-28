import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";

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
    </>
  );
};

export default ContryDrop;
