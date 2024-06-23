import React, { useEffect, useState } from "react";
import AddBanners from "../AddBanners/AddBanners";
import { Duplex } from "stream";
import Adds from "../Adds/Adds";

interface HomeProps {
    title: string;
}

interface Ad {
    id: number;
    title: string;
    description: string;
    carpetArea: string;
    location: string;
    configuration: string;
    possessionDate: string;
}

const Home: React.FC<HomeProps> = ({ title }) => {
    const [ads, setAds] = useState<Ad[]>([]);

    useEffect(() => {
        document.title = title;

        // Retrieve ads from sessionStorage
        const storedAds = sessionStorage.getItem("ads");
        if (storedAds) {
            setAds(JSON.parse(storedAds));
        }
    }, [title]);

    let imagePath = 'https://barn2.com/wp-content/uploads/2022/01/Complete-guide-to-using-product-sampling-for-your-WooCommerce-site-marketing-strategy-Header.png';

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Explore</h2>
            {ads.length === 0 && (
                <div className="container mt-5">
                    <AddBanners
                        title="Welcome to Our Website!"
                        image={imagePath}
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis orci nec quam elementum, id varius sapien lacinia."
                    />
                </div>
            )}
            {ads.map(ad => (
                <div key={ad.id} className="container mt-5">
                    <AddBanners
                        title={ad.title}
                        image={imagePath}
                        paragraph={ad.description}
                    />
                </div>
            ))}

            <div style={{display:'none'}}><Adds title="Manage Adds"></Adds></div>
        </div>

    );
}

export default Home;
