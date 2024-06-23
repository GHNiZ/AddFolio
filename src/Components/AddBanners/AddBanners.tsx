import React from 'react';

interface AddBannersProps {
    title: string;
    image: string;
    paragraph: string;
}

const AddBanners: React.FC<AddBannersProps> = ({ title, image, paragraph }) => {
    return (
        <div className="container mt-4">
            <div className="card">
                <img src={image} className="card-img-top" alt="Banner Image" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{paragraph}</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    );
};

export default AddBanners;
