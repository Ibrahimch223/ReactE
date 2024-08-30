import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ContryDrop = () => {
  const [isOpenModal, setisOpenModal] = useState(false);

  return (
    <>
      <Button className="contryDrop" onClick={() => setisOpenModal(true)}>
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
      <Dialog
        open={isOpenModal}
        TransitionComponent={Transition}
        onClose={() => setisOpenModal(false)}
        className="locationModal"
      >
        <h4>Votre lieux</h4>
        <Button className="close" onClick={() => setisOpenModal(false)}>
          <IoMdClose />
        </Button>
        <div className="headersearch mt-3 w-100">
          <input type="text" placeholder="lieux..." />
          <Button>
            <IoMdSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          <li>
            <Button onClick={() => setisOpenModal(false)}>ACI 2000</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Dafina</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>1008 Logement</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Doumassana</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Badalabougou</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Niamakoro</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Kalaban-coura</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Kalaban-coro</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Lafiabougou</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Sabalibougou</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Sotiba</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>BaganaBougou</Button>
          </li>
          <li>
            <Button onClick={() => setisOpenModal(false)}>Yrimadio</Button>
            <li>
              <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
            </li>
            <li>
              <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
            </li>
            <li>
              <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
            </li>
            <li>
              <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
            </li>
            <li>
              <Button onClick={() => setisOpenModal(false)}>Magnabougou</Button>
            </li>
          </li>
        </ul>
      </Dialog>
    </>
  );
};

export default ContryDrop;
