import React, { useEffect ,useRef } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import { useLocation } from 'react-router-dom';


function CarouselWithContent() {
  const location = useLocation();
  const swiperRef = useRef(null); // Create a ref for the Swiper instance

  useEffect(() => {
    if (location.pathname === '/') {
      if (!swiperRef.current) { // Initialize Swiper if it doesn't exist
        swiperRef.current = new Swiper('.swiper-container', {
        loop: true, // Set to true to create a circular loop
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000, // Delay between slides in milliseconds (5 seconds in this example)
        },
        effect: '3D Carousel', // Add this line to enable slide effect
      });
    }
  }}, [location]);

  if (location.pathname === '/') {
    return (
      <div>
        {/* Navbar */}

        {/* Carousel Container with background image */}
        <div
          className="bg-yellow-250 py-24"
          style={{
            backgroundImage: `url('https://img.freepik.com/premium-vector/illustration-online-delivery-service-via-mobile-application-online-order-tracking-home_196604-127.jpg?w=1060')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative rounded-lg overflow-hidden">
            <div className="swiper-container" style={{ height: '440px' }}>
              <div className="swiper-wrapper">
                <div className="swiper-slide flex items-center justify-center">
                  <div className="p-5 rounded-lg bg-transparent text-white text-center">
                    <h2 className="text-cyan-900 text-4xl font-semibold font-poppins">Fast & Reliable Delivery Services</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">We ensure parcels are delivered with care.</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">With global reach and passion for perfection, </h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">we've become synonymous with fast shipping services. </h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">We take pride in connecting you to your loved ones</h2>
                  </div>
                </div>
                <div className="swiper-slide flex items-center justify-center">
                  <div className="p-5 rounded-lg bg-transparent text-white text-center">
                    <h2 className="text-cyan-900 text-4xl font-semibold font-poppins">Secure and Efficient Transport</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">Your parcels are in safe hands throughout the journey.</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">Discover a world of shipping designed with you in mind.</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">Our commitment to excellence in handling your parcels</h2>
                  </div>
                </div>
                <div className="swiper-slide flex items-center justify-center">
                  <div className="p-5 rounded-lg bg-transparent text-white text-center">
                    <h2 className="text-cyan-900 text-4xl font-semibold font-poppins">Customer Satisfaction is Our Priority</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">ParcelPal offers a comprehensive solution for parcels</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">ParcelPal: Your Convenient Delivery Solution</h2>
                    <h2 className="text-gray-900 text-1xl font-semibold font-poppins">Say goodbye to missed deliveries and the stress.</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Don't render the carousel on other pages
  }
}

export default CarouselWithContent;
