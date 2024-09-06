import analytics from '../assets/icons/analytics.svg';
import user from '../assets/icons/user.svg';
import down from '../assets/icons/down.svg';

/**
 * Top navigation bar component that displays an analysis icon, app name, and user information.
 *
 * @returns {JSX.Element} The rendered top bar navigation component.
 *
 * @example
 * <TopBar />
 */

const TopBar: React.FC = () => {
  return (
    <nav aria-label="top bar" className="fixed z-10 flex w-full items-center justify-between bg-white px-8 py-4 shadow">
      <div className="flex items-center justify-start gap-3">
        <img src={analytics} alt="analysis icon" />
        <div className="flex items-baseline justify-start gap-1">
          <span className="text-2xl">Analysis</span>
          <span className="text-base text-slate-400">.dev</span>
        </div>
      </div>
      <div className="flex cursor-pointer items-center justify-end gap-4">
        <img src={user} alt="user icon" />
        <div className="">username</div>
        <img className="h6 w-6" src={down} alt="user icon" />
      </div>
    </nav>
  );
};

export default TopBar;
