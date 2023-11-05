
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items,img,title }) => {
  return (
    <div>
        {title && <Cover coverImg={img} title={title}></Cover>}
      <div className="grid grid-cols-2 gap-10 my-12">
        {items.map((item) => (
          <MenuItem Item key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mb-12">
        <button className="btn btn-outline mt-6 border-0 border-b-4 ">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
