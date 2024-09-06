import TopBar from '../components/TopBar';
import Sidebar from '../components/SideBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import loading from '../assets/icons/loading.svg';

const AppLayout = () => {
  return (
    <>
      <TopBar />
      <Sidebar />

      <main className="h-screen w-screen border-solid pl-[280px] pt-[104px]">
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <img src={loading} alt="loading" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default AppLayout;
