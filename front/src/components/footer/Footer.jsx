import BagIcon from "../../assets/icons/nav/bag.svg";
import CheckoutIcon from "../../assets/icons/nav/checkout.svg";
import HomeIcon from "../../assets/icons/nav/home.svg";
import SettingsIcon from "../../assets/icons/nav/settings.svg";
import { useLayout } from "../../contexts/LayoutContextProvider";

const Footer = () => {
  const { showBottomNav } = useLayout();
  if (!showBottomNav) {
    return null;
  }
  return (
    <footer className="p-2 bg-white flex gap-4 align-middle justify-evenly">
      <img src={HomeIcon} width={24} />
      <img src={CheckoutIcon} width={24} />
      <img src={BagIcon} width={24} />
      <img src={SettingsIcon} width={24} />
    </footer>
  );
};

export default Footer;
