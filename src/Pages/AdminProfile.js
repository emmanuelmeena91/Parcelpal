import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AdminProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      setIsLoading(true);
    }
  };

  useEffect(() => {
    if (isLoading) {
      const toastId = toast.info('Logging out...', {
        position: 'top-center',
        autoClose: false,
        style: {
          width: '400px',
          fontSize: '20px',
        },
      });

      setTimeout(() => {
        // Perform logout logic
        console.log('Logging out...');

        // Close the notification
        toast.dismiss(toastId);

        // Navigate to the 'LandingPage' component
        navigate('/'); // This should take you to the LandingPage
      }, 2000); // 2-second delay
    }
  }, [isLoading, navigate]);
  return (
    <div className="flex justify-center bg-gray-300 w-full">
      <div className="bg-gray-300 w-full md:w-[1440px] h-[1024px]">
        <div className="relative w-full md:w-[800px] h-[727px] md:top-[147px] md:left-[316px] bg-[#ffd64d]">
          <div className="absolute w-full md:w-[300px] h-[91px] md:top-[85px] md:left-[259px] bg-black rounded-[12px]">
            <div className="absolute top-[21px] left-[14px] font-semibold text-[#ffd64d] text-[40px] tracking-[1.00px] leading-[normal] whitespace-nowrap">
              Admin Profile
            </div>
          </div>
          <div className="absolute w-[178px] h-[173px] top-[192px] left-[320px]">
            <div className="absolute w-[155px] h-[167px] top-[6px] left-[6px] bg-[#d9d9d9] rounded-[77.5px/83.5px]" />
            <img className="absolute w-[178px] h-[172px] top-0 left-0" alt="Ph user bold" src="prof.png" />
          </div>
          <div className="absolute w-[99px] h-[78px] top-[396px] left-[160px] rounded-md">
            <img alt="Vector" src="gmail.png" />
          </div>
          <div className="absolute top-[407px] left-[343px] font-semibold text-black text-3xl  tracking-[1.00px] leading-[normal] whitespace-nowrap">
            joseph@gmail.com
          </div>
          <div className="absolute top-[480px] left-[343px] font-semibold text-black text-3xl  tracking-[1.00px] leading-[normal] whitespace-nowrap">
            +254 467 417 19
          </div>
          <div className="absolute w-[315px] h-[105px] top-[542px] left-[273px] rounded-[30px]">
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-blue-200"
              onClick={handleLogout}
              disabled={isLoading}
            >
              {isLoading ? 'Logging out...' : 'Log out'}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add this line to display the toast notifications */}
    </div>
  );
};
