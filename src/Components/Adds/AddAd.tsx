import React, { useState } from "react";

interface AddAdProps {
    onAddAd: (ad: Ad) => void;
    onCancel: () => void;
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

const AddAd: React.FC<AddAdProps> = ({ onAddAd, onCancel }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [carpetArea, setCarpetArea] = useState("");
    const [location, setLocation] = useState("");
    const [configuration, setConfiguration] = useState("");
    const [possessionDate, setPossessionDate] = useState("");

    const handleSubmit = () => {
        const newAd: Ad = {
            id: Date.now(),
            title,
            description,
            carpetArea,
            location,
            configuration,
            possessionDate
        };
        onAddAd(newAd);
    };

    return (
        <div className="mb-4">
            <h3>Add New Ad</h3>
            <div className="mb-3">
                <label htmlFor="adTitle" className="form-label">Ad Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="adTitle" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Enter ad title" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="adDescription" className="form-label">Ad Description</label>
                <textarea 
                    className="form-control" 
                    id="adDescription" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Enter ad description"
                ></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="adCarpetArea" className="form-label">Carpet Area</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="adCarpetArea" 
                    value={carpetArea} 
                    onChange={(e) => setCarpetArea(e.target.value)} 
                    placeholder="Enter carpet area" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="adLocation" className="form-label">Location</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="adLocation" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Enter location" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="adConfiguration" className="form-label">Configuration</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="adConfiguration" 
                    value={configuration} 
                    onChange={(e) => setConfiguration(e.target.value)} 
                    placeholder="Enter configuration" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="adPossessionDate" className="form-label">Possession Date</label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="adPossessionDate" 
                    value={possessionDate} 
                    onChange={(e) => setPossessionDate(e.target.value)} 
                />
            </div>
            <button 
                type="button" 
                className="btn btn-primary me-2" 
                onClick={handleSubmit}
            >
                Add Ad
            </button>
            <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onCancel}
            >
                Cancel
            </button>
        </div>
    );
};

export default AddAd;
