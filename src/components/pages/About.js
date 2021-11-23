import React from 'react';
import pic from '../../assets/IMG_7207.JPG';

export default function About() {
    return (
        <div className="mt-3 pb-5 container" id="about">
        <div className="post-heading text-center">
            <h3 className="display-4 font-weight-bold">About Me</h3>
            <hr className="w-75 mx-auto mb-5"/>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
                <img src={pic} className="img-fluid" alt="meow"/>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <h2>I'd like to introduce myself..</h2>
                <hr/>
                <p>I'm Gabriel, a full stack developer. Currently I'm enrolled in the UC Berkeley Bootcamp and am less than one month away from graduating. 
                    Some areas of programming I'm passionate about are web development (of course), game development, and 
                    mobile apps. I enjoy continual learning and experimenting with different technologies. Some other things I enjoy 
                    are music production, games, finance, and going to the moon! ₿⟠
                </p>
            </div>
        </div>
    </div>
    )
}