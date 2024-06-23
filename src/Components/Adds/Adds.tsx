import React, { useState, useEffect } from "react";
// import AddAd from "./AddAd";
// import EditAd from "./EditAd";
import AddAd from "./AddAd";
import EditAd from "./EditAd";

interface AddsProps {
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

const sampleAds: Ad[] = [
    { 
        id: 1, 
        title: "2 BHK Apartment in Downtown", 
        description: "A spacious 2 BHK apartment located in the heart of the city.",
        carpetArea: "1200 sq ft",
        location: "Downtown",
        configuration: "2 BHK",
        possessionDate: "2025-12-01"
    },
    { 
        id: 2, 
        title: "Luxury Villa in Suburbs", 
        description: "A beautiful luxury villa with a private garden and pool.",
        carpetArea: "3500 sq ft",
        location: "Suburbs",
        configuration: "4 BHK",
        possessionDate: "2023-06-15"
    },
    { 
        id: 3, 
        title: "Office Space in Tech Park", 
        description: "Modern office space available in the city's tech park.",
        carpetArea: "5000 sq ft",
        location: "Tech Park",
        configuration: "Open Office",
        possessionDate: "2024-01-01"
    }
];

const Adds: React.FC<AddsProps> = ({ title }) => {
    
    useEffect(() => {
        document.title = title;
        
        // Initialize sessionStorage with sample data if empty
        const storedAds = sessionStorage.getItem("ads");
        if (storedAds) {
            setAds(JSON.parse(storedAds));
        } else {
            sessionStorage.setItem("ads", JSON.stringify(sampleAds));
            setAds(sampleAds);
        }
    }, [title]);

    const [ads, setAds] = useState<Ad[]>([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentAd, setCurrentAd] = useState<Ad | null>(null);

    const handleAddAd = (newAd: Ad) => {
        const updatedAds = [...ads, newAd];
        setAds(updatedAds);
        sessionStorage.setItem("ads", JSON.stringify(updatedAds));
    };

    const handleRemoveAd = (id: number) => {
        const updatedAds = ads.filter(ad => ad.id !== id);
        setAds(updatedAds);
        sessionStorage.setItem("ads", JSON.stringify(updatedAds));
    };

    const handleEditAd = (updatedAd: Ad) => {
        const updatedAds = ads.map(ad => (ad.id === updatedAd.id ? updatedAd : ad));
        setAds(updatedAds);
        sessionStorage.setItem("ads", JSON.stringify(updatedAds));
        setIsEditing(false);
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">{title}</h2>
            <button 
                className="btn btn-primary mb-4"
                onClick={() => setIsAdding(true)}
            >
                Add New Ad
            </button>

            {isAdding && (
                <AddAd 
                    onAddAd={(newAd) => {
                        handleAddAd(newAd);
                        setIsAdding(false);
                    }} 
                    onCancel={() => setIsAdding(false)}
                />
            )}

            {isEditing && currentAd && (
                <EditAd 
                    ad={currentAd} 
                    onEditAd={(updatedAd) => handleEditAd(updatedAd)} 
                    onCancel={() => setIsEditing(false)} 
                />
            )}

            <h3>Existing Ads</h3>
            {ads.length === 0 && <p>No ads available.</p>}
            <ul className="list-group">
                {ads.map(ad => (
                    <li key={ad.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{ad.title}</h5>
                            <p>{ad.description}</p>
                            <p><strong>Carpet Area:</strong> {ad.carpetArea}</p>
                            <p><strong>Location:</strong> {ad.location}</p>
                            <p><strong>Configuration:</strong> {ad.configuration}</p>
                            <p><strong>Possession Date:</strong> {new Date(ad.possessionDate).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <button 
                                type="button" 
                                className="btn btn-warning me-2" 
                                onClick={() => {
                                    setCurrentAd(ad);
                                    setIsEditing(true);
                                }}
                            >
                                Edit
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                onClick={() => handleRemoveAd(ad.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Adds;
