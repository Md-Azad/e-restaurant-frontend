

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md: w-3/12 mx-auto text-center">
            <p className="text-yellow-600 pb-2">---{subHeading}---</p>
            <h1 className="text-3xl uppercase border-y-4 py-2">{heading}</h1>
            
        </div>
    );
};

export default SectionTitle;