import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <section className="featured-item bg-fixed  text-white pt-8 my-12">
      <SectionTitle
        heading="From our menu"
        subHeading="check it out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-50">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <h3>March 20, 2024</h3>
          <h2 className="uppercase">Where can i get some?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            asperiores illo repellat dolores neque aperiam sunt quasi in
            adipisci rerum commodi totam rem, quaerat ad illum possimus sint
            praesentium ipsa. Quod rem incidunt error consequatur soluta id
            assumenda rerum nesciunt reiciendis ea, distinctio illum, labore
            iure ab perspiciatis qui voluptate.
          </p>
          <button className="btn btn-outline mt-6 border-0 border-b-4 text-white">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
