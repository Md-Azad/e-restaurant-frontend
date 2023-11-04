import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg"

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>e-restaurant | Menu</title>
      </Helmet>
      <Cover coverImg={coverImg}></Cover>
      
    </div>
  );
};

export default Menu;
