import { useNavigate } from "react-router-dom";
import MenuIcon from "../../assets/icons/nav/menu.svg";
import BackIcon from "../../assets/icons/nav/back.svg";
import DotsIcon from "../../assets/icons/nav/dots.svg";
import ProfilePic from "../../assets/icons/profile.jpg";
import { useLayout } from "../../contexts/LayoutContextProvider";

const Header = () => {
  const navigate = useNavigate();
  const { title, backUrl, showAvatar, resetState } = useLayout();
  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (backUrl) {
      navigate(backUrl);
      resetState();
    }
  };
  return (
    <header className="p-2 flex justify-between align-middle">
      <button
        className="bg-white flex align-middle justify-center border-0 px-2 pt-1 rounded-md"
        onClick={handleButtonClick}
      >
        <img src={backUrl ? BackIcon : MenuIcon} width={24} />
      </button>
      {title && <span>{title}</span>}
      {showAvatar && <img src={ProfilePic} className="rounded-full" />}
      {!showAvatar && (
        <button
          className="bg-white flex align-middle justify-center border-0 px-2 pt-1 rounded-md"
          onClick={handleButtonClick}
        >
          <img src={DotsIcon} width={24} />
        </button>
      )}
    </header>
  );
};

export default Header;
