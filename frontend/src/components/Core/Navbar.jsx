import React, { useState, useEffect } from 'react';
import Commanbtn from '../Buttons/Commanbtn';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import logo from '../../Assests/favicon.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../state/actions/userSlice';


const Navbar = () => {
  const link = [
    {
      title: 'Home',
      link: '',
    },
    {
      title: 'Features',
      link: 'feature',
    },
    {
      title: 'Dashboard',
      link: 'dashboard',
    },
    {
      title: 'Premium',
      link: 'premium',
    },
    {
      title: 'Vote',
      link: 'vote',
    },
  ];

  const {token } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const activePath = location.pathname.split('/');
  const activelink = activePath[activePath.length - 1];

  // State to track the visibility of links on small screens
  const [showLinks, setShowLinks] = useState(true); // Start with links visible on large screens

  // Function to update showLinks based on screen size
  const updateShowLinks = () => {
    setShowLinks(window.innerWidth <= 1024); // Change 1024 to your desired breakpoint
  };

  useEffect(() => {
    // Add an event listener to update showLinks on window resize
    window.addEventListener('resize', updateShowLinks);

    // Call the updateShowLinks function once on component mount
    updateShowLinks();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateShowLinks);
    };
  }, []);

  

  
  


  return (
    <div className={`p-5 flex justify-between ${showLinks ? 'items-start' : 'items-center'}`}>
      <div className='flex gap-2 items-center'>
        <img src={logo} alt="" className='h-10 w-10' />
        <div className="font-bold text-2xl">Quotient</div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-5">
        <div
          className="md:hidden cursor-pointer relative"
          onClick={() => setShowLinks(!showLinks)}
        >
          {showLinks ? <RxCross1 className='absolute right-0' /> : <AiOutlineBars />}
        </div>
        <div
          className={`${
            showLinks ? 'flex flex-col absolute right-[5%]' : 'hidden'
          } md:flex md:items-center gap-5`}
        >
          {link.map((item, i) => (
            <Link
              key={i}
              className={`${
                activelink === item.link ? 'text-[#02F3B5]' : ''
              } cursor-pointer`}
              to={`/${item.link}`}
            >
              {item.title}
            </Link>
          ))}
          <div>
            {token ? (
              <Link
                className='bg-[#02F3B5] text-white rounded-md'
                onClick={() => {
                  localStorage.clear();
                  dispatch(logout());
                }}
                to='/'
              >
                Logout
              </Link>
            ) : (
              <Link to='/login'>
                <Commanbtn type={true} text='Login' path='/login' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
