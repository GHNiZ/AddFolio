import React, { useEffect } from "react";

interface AboutProps {
    title: string;
}

const About: React.FC<AboutProps> = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">About Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/400"
                        alt="About Us"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h3>Our Story</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse nec augue vel ligula pharetra imperdiet.
                        Nulla facilisi. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia curae; Mauris
                        scelerisque ipsum nec libero rutrum, sed condimentum elit
                        consectetur.
                    </p>
                    <h3>Our Mission</h3>
                    <p>
                        Fusce ullamcorper, libero a ornare aliquam, elit mauris
                        tincidunt elit, eget tempor erat odio vitae erat. Ut
                        venenatis libero nec nisi tincidunt, in euismod orci
                        hendrerit. Duis efficitur neque vel posuere tincidunt.
                    </p>
                    <h3>Our Team</h3>
                    <p>
                        Integer quis velit id purus posuere suscipit a non
                        ligula. Aliquam erat volutpat. Phasellus varius risus
                        quis tortor auctor, id convallis lorem congue.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
