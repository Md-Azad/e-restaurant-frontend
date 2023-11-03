import Announcement from "../Announcement/Announcement";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Announcement></Announcement>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;