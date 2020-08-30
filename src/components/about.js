import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about" id="about">
      <div className="title">
        <div className="line1"></div>
        <h1>About Us</h1>
        <div className="line2"></div>
      </div>
      <p className="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue odio. Sed ut efficitur nunc. Aliquam ac risus hendrerit, posuere sem sed, pharetra magna. Quisque mollis lorem at lorem bibendum dapibus sit amet vitae orci. Nunc sed dui ac urna imperdiet cursus. In hac habitasse platea dictumst. Vestibulum at odio ut tellus volutpat efficitur non tristique nibh. Duis pulvinar, velit et elementum lacinia, mauris magna eleifend quam, et cursus sem eros et dui. Sed vitae volutpat diam. Vestibulum blandit ultrices massa, pulvinar scelerisque lacus volutpat et. Donec massa ipsum, vulputate gravida mauris quis, sollicitudin pharetra quam.
      </p>
      <div className="images">
        <img src="interior1.png" alt="" id='img1'></img>
        <img src="interior2.jpg" alt="" id='img2'></img>
      </div>
    </div>
  );
}

export default About;