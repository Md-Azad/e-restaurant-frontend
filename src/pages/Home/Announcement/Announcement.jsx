import bgImg from "../../../assets/home/featured.jpg";
const Announcement = () => {
  return (
    <div style={{ height: "420px" }} className="my-8 relative">
      <img className="h-full w-full" src={bgImg} alt="" />
      <div className="w-9/12 h-3/5 text-center bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="mt-12 px-24">
          <h1 className="uppercase text-4xl">Announcment</h1>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quas, vel ipsam voluptate nostrum nihil nobis velit pariatur fuga
            dolorum delectus quia voluptas quae sunt totam fugit suscipit.
            Voluptatum, necessitatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quas, vel ipsam voluptate nostrum nihil nobis velit pariatur fuga
            dolorum delectus quia voluptas quae sunt totam fugit suscipit.
            Voluptatum, necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
