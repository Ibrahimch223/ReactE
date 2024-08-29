import Button from "@mui/material/Button";
import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <>
      <div className="headersearch ml-3 mr-3">
        <input type="text" placeholder="Rechercher votre produit..." />
        <Button>
          <IoMdSearch />
        </Button>
      </div>
    </>
  );
};

export default SearchBox;
