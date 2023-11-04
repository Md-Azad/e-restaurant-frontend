
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

  const [menu] = useMenu();
  const popularItems = menu.filter(item =>item.category ==="popular");
  
  return (
    <section>
      <SectionTitle
        heading="From Our menu"
        subHeading="Popular Menu"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-10 my-6">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-12">
        <button className="btn btn-outline mt-6 border-0 border-b-4 ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
