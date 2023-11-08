import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item =>item.category === "dessert");
  const soup = menu.filter(item =>item.category === "soup");
  const salad = menu.filter(item =>item.category === "salad");
  const pizza = menu.filter(item =>item.category === "pizza");
  const offered = menu.filter(item =>item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>e-restaurant | Menu</title>
      </Helmet>
      {/* Main cover */}
      <Cover coverImg={coverImg} title="Our Menu"></Cover>

      {/* section title */}
      <SectionTitle subHeading="don't miss" heading="Today's offer"></SectionTitle>

      {/* offered items */}
      <MenuCategory items={offered} ></MenuCategory>

      {/* dessert items cover section */}
      <MenuCategory items={dessert} img={dessertImg} title="dessert"></MenuCategory>
      {/* soup items with cover section */}

      <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>

      {/* salad items with cover section */}

      <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>

      {/* pizza items with cover section */}

      <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
    </div>
  );
};

export default Menu;
