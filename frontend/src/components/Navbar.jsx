import { navLinks } from '../components';
import { quotient_logo } from '../assets';

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={quotient_logo} alt="quotient" className="w-[124px] h-[32px]" />
      <h1>Hello</h1>
    </nav>
  );
};
export default Navbar;
