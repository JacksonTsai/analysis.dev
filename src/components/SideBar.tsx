import { Link, useLocation } from 'react-router-dom';
import sun from '../assets/icons/sun.svg';
import chart from '../assets/icons/chart.svg';

const linkStyle = 'flex h-14 gap-3 pl-8 text-base leading-[56px] text-gray-700 hover:bg-blue-100';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed h-screen w-60 overflow-hidden bg-white shadow-md">
      <ul className="flex h-full flex-col pt-20">
        <li
          className={`${linkStyle} ${location.pathname === '/today-weather' && 'border-r-4 border-solid border-r-navy-blue bg-slate-200'}`}
        >
          <img src={sun} />
          <Link to="/today-weather">Today's Weather</Link>
        </li>
        <li
          className={`${linkStyle} ${location.pathname === '/population' && 'border-r-4 border-solid border-r-navy-blue bg-slate-200'}`}
        >
          <img src={chart} />
          <Link to="/population">Population</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
