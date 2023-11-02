import React from 'react';
import './Landing.css';
import { NavLink } from "react-router-dom";


const Landing = () => {
  return (
    <section className="landing">
      <div className="textImage">
        <h1>PARCELPAL</h1>
        <h3>DELIVERY , WITH EASE , ANYTIME , ANYWHERE !</h3>
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
      <div className="sendParcelButton">
        <h2>GET STARTED TODAY !</h2>
        <NavLink to="/signup" className="text-yellow-500">
        <button>SEND PARCEL</button>

        </NavLink>

      </div>
      <div className="customerReviews">
        <div className="review">
          <p>3/5 - ParcelPal provided excellent service for my last delivery, but I've had a couple of delays in the past. Overall, a decent experience. - John Doe</p>
        </div>
        <div className="review">
          <p>5/5 - I was initially skeptical, but ParcelPal pleasantly surprised me with their quick and secure delivery. However, their customer support could use some improvement. - Jane Smith</p>
        </div>
        <div className="review">
          <p>4/5 - Had a great experience with ParcelPal for the most part. The only downside was a minor packaging issue, but they promptly resolved it. Will use their services again. - James Brown</p>
        </div>
        <div className="review">
          <p>2/5 - The delivery was on time, and the parcel arrived in perfect condition. However, the tracking information wasn't as detailed as I would have liked. - Mary Johnson</p>
        </div>
        <div className="review">
          <p>5/5 - ParcelPal is a reliable option for sending packages. My only complaint is the pricing, which can be a bit steep compared to other services I've used. - Robert Davis</p>
        </div>
      </div>
    </section>
  );
}

export default Landing;
