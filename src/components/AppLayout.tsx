import TopBar from '../components/TopBar';
import Sidebar from '../components/SideBar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <TopBar />
      <Sidebar />
      <main className="h-screen w-screen border-solid pl-[280px] pt-[104px]">
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
