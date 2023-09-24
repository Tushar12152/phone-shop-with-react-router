import { useLoaderData } from "react-router-dom";
import Banner from "../../Header/Banner/Banner";
import Phones from "../../Phones/Phones";

const Home = () => {
    const phones=useLoaderData()

    return (
        <div>
                    <div className="mt-10">
                    <Banner></Banner>
                    </div>

                    <div className="mt-10">
                        <Phones phones={phones}></Phones>
                    </div>
        </div>
    );
};

export default Home;