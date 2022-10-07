import { Logo } from "../logo/logo";
import { IoIosMenu } from "react-icons/io";
import { IoRefresh } from "react-icons/io5";
import { BsThreeDotsVertical, BsArrowLeft } from "react-icons/bs";
import "./header.css";
import { useContext } from "react";
import { FruitContext } from "../../context/fruitContext";

type fruitPage = {
  pageFruit?: boolean
}
export const Header = (props: fruitPage) => {
  const context = useContext(FruitContext);
  
  return (
    <header>
      <div className="top-header"></div>
      <div className="container-header flex">
        <div className="container-logo-and-menu flex container-icons">
          <IoIosMenu size={30} />
          <Logo />
        </div>
        <div className="container-refresh container-icons">
          {props.pageFruit ? (
            <BsArrowLeft onClick={() => context.changeFruit(null!)} size={30} />
          ) : (
            <>
              <IoRefresh
                size={23}
                onClick={() => (location.href = location.href)}
              />
              <BsThreeDotsVertical size={23} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};
