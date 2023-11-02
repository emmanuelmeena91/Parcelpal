import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="aboutText">
        <h2>WHO ARE WE ?</h2>
        <p>Welcome to ParcelPal, a trusted leader in the parcel delivery industry. With a rich history and a commitment to excellence, we have been serving our valued customers for 10+ years, connecting people and businesses with seamless delivery solutions.</p>
        <p>At Parcelpal, we understand the importance of reliable and efficient parcel delivery services in today's fast-paced world. Whether you're a small business owner looking to expand your reach or an individual sending a special package to a loved one, we've got you covered.</p>
        
        <h3>Our Mission:</h3>
        <p>Our mission is simple yet powerful - to provide unparalleled parcel delivery services with a focus on speed, security, and satisfaction. We strive to exceed customer expectations by leveraging cutting-edge technology, a dedicated team of professionals, and a vast network of logistics partners.</p>

        <h3>What Sets Us Apart:</h3>
        <ul>
          <li><strong>Customer-Centric Approach:</strong> We prioritize our customers' needs and preferences, ensuring a personalized experience for every shipment. From easy online booking to real-time tracking, we keep you in control every step of the way.</li>
          <li><strong>Reliability and Timeliness:</strong> With a commitment to on-time delivery, you can trust us to get your parcels to their destination promptly and safely. Our advanced routing systems and experienced drivers ensure efficient delivery routes.</li>
          <li><strong>State-of-the-Art Technology:</strong> We leverage the latest technology to streamline our operations and enhance the customer experience. Our digital platforms allow for easy scheduling, tracking, and communication.</li>
          <li><strong>Secure Handling:</strong> The safety of your parcels is our top priority. Our trained staff and secure handling processes guarantee that your items arrive in the same condition they were sent.</li>
          <li><strong>Environmental Responsibility:</strong> We're dedicated to reducing our environmental footprint. Through eco-friendly practices and innovative solutions, we aim to contribute to a sustainable future.</li>
        </ul>

        <p>Join Us on Our Journey:</p>
        <p>We invite you to experience the ParcelPal difference. Whether you're a frequent shipper or sending your first package, we're here to make every delivery a smooth and stress-free experience. Thank you for choosing us as your trusted delivery partner.</p>
      </div>
      <div className="achievements">
  <div className="achievement">
    <h3>98%</h3>
    <p>On-Time Delivery Rate</p>
  </div>
  <div className="achievement">
    <h3>500,000+</h3>
    <p>Successful Deliveries</p>
  </div>
  <div className="achievement">
    <h3>5,000+</h3>
    <p>Satisfied Customers</p>
  </div>
  <div className="achievement">
    <h3>24/7</h3>
    <p>Customer Support Availability</p>
  </div>
</div>
    </section>
  );
}

export default About;
