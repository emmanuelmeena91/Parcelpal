import React from 'react';


const UserFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">SAFE & SECURE</h3>
        <p>You benefit from our experience in delivering effective cargo solutions through the complex global supply procedures of the world's destinations.</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">FAST DELIVERY</h3>
        <p>You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing.</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">24/7 SUPPORT</h3>
        <p>All of which explains why you’ll find the team of outstanding support at ParcelPal Delivery ready to apply their passion for solutions in support of your business.</p>
      </div>
    </div>

    <div className="border-t border-gray-800 my-8"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">ParcelPal Delivery Kenya</h3>
        <p>EMAIL: info@parcelpal-delivery.com</p>
      </div>

      <div>
  <h3 className="text-2xl font-semibold mb-4">PAY USING</h3>
  <p>Accepted payment methods:</p>
  <ul>
    
    <li>
      <img
        src="https://cioafrica.co/wp-content/uploads/2022/02/M-PESA.jpeg"
        alt="Mobile Money Payments"
        className="w-14 h-12 inline-block"
      />
      Mobile Money Payments
    </li>
    <li>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR23iYr7IfryWRP7nYkNHEokmh1a1MwGAMxIw&usqp=CAU"
        alt="Bank Transfers"
        className="w-14 h-12 inline-block"
      />
      Bank Transfers
    </li>
    {/* Add more payment methods with image links here */}
  </ul>
</div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">KENYAN COUNTIES DELIVERY</h3>
        <p>Choose your county to get ParcelPal Delivery services:</p>
        <ul>
          <li>Nairobi County</li>
          <li>Mombasa County</li>
          <li>Kisumu County</li>
          <li>Nakuru County</li>
          <li>Migori County</li>
          <li>Kisii County</li>
          <li>Eldoret County</li>
          {/* Add more counties here */}
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-800 my-8"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">CONTACT US</h3>
        <p>Have questions or need assistance?</p>
        <p>Email: info@parcelpal-delivery.com</p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">CONNECT WITH US</h3>
        <p>Stay connected with ParcelPal Delivery:</p>
        <div className="flex space-x-4">
          <a href="#" className="text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Copyright © 2023 ParcelPal Delivery | All Rights Reserved</h3>
      </div>
    </div>
  </div>
</footer>

  );
};

export default UserFooter;
