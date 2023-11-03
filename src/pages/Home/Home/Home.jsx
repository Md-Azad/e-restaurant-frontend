import Announcement from "../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PhoneNum from "../PhoneNum/PhoneNum";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Announcement></Announcement>
            <PopularMenu></PopularMenu>
            <PhoneNum></PhoneNum>
            <Featured></Featured>
        </div>
    );
};

export default Home;