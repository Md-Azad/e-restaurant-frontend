import Announcement from "../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PhoneNum from "../PhoneNum/PhoneNum";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Announcement></Announcement>
            <PopularMenu></PopularMenu>
            <PhoneNum></PhoneNum>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;