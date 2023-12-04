import { useState } from 'react';
import SideBar from './sideBar.jsx';
import Home from './home.jsx';
import Search from './searchBar.jsx';
import Notification from './notification';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [menu, setMenu] = useState(false);
  const [notify, setNotify] = useState(false);

  return (
    <div className='flex relative overflow-x-hidden h-screen'>
      <SideBar />
      {/* MIDDLE DIV */}
      <div
        className={
          menu
            ? 'w-full opacity-50 duration-200 relative'
            : 'w-full opacity-100 duration-200 relative'
        }
      >
        {/* SEARCH BAR DIV */}
        <div className='flex justify-between items-center p-4'>
          {/* SEARCH BAR */}
          <Search />
          {/* FULL SCREEM NOTIFICATION DIV */}
          <div className='flex items-center mob_screen:hidden'>
            <div className='relative cursor-pointer'>
              <div onClick={() => setNotify(!notify)}>
                <img src='/images/notify.png' alt='' height={25} width={25} />
              </div>
              {/* NOTIFICATION DIV */}
              <div
                className={
                  notify
                    ? 'notification-div opacity-100 duration-200'
                    : 'notification-div opacity-0 duration-200'
                }
              >
                <ul className='p-2'>
                  <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                    <div className='border rounded-full p-1'>
                      <img
                        src='/images/account.png'
                        alt=''
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className='text-sm font-semibold mb-1'>
                        Manager shared a meeting document
                      </div>
                      <div className='text-blue-500 font-semibold text-xs'>
                        2 days ago
                      </div>
                    </div>
                  </li>
                  <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                    <div className='border rounded-full p-1'>
                      <img
                        src='/images/account.png'
                        alt=''
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className='text-sm font-semibold mb-1'>
                        Manager shared a meeting document
                      </div>
                      <div className='text-blue-500 font-semibold text-xs'>
                        2 days ago
                      </div>
                    </div>
                  </li>
                  <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                    <div className='border rounded-full p-1'>
                      <img
                        src='/images/account.png'
                        alt=''
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className='text-sm font-semibold mb-1'>
                        Manager shared a meeting document
                      </div>
                      <div className='text-blue-500 font-semibold text-xs'>
                        2 days ago
                      </div>
                    </div>
                  </li>
                  <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                    <div className='border rounded-full p-1'>
                      <img
                        src='/images/account.png'
                        alt=''
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className='text-sm font-semibold mb-1'>
                        Manager shared a meeting document
                      </div>
                      <div className='text-blue-500 font-semibold text-xs'>
                        2 days ago
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='cursor-pointer border border-gray-400 rounded-full w-8 h-8 ml-2'>
              <img src='/images/account.png' alt='' height={28} width={28} />
            </div>
          </div>
          {/* SMALL SCREEM NOTIFICATION DIV */}
          <div className='relative flex gap-2 items-center mob_screen_closed:hidden'>
            <div className='cursor-pointer' onClick={() => setNotify(!notify)}>
              <img src='/images/notify.png' alt='' height={25} width={25} />
            </div>
            {/* NOTIFICATION DIV */}
            <div
              className={
                notify
                  ? 'notification-div opacity-100 duration-200'
                  : 'notification-div opacity-0 duration-200'
              }
            >
              <ul className='p-2'>
                <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                  <div className='border rounded-full p-1'>
                    <img
                      src='/images/account.png'
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className='text-sm font-semibold mb-1'>
                      Manager shared a meeting document
                    </div>
                    <div className='text-blue-500 font-semibold text-xs'>
                      2 days ago
                    </div>
                  </div>
                </li>
                <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                  <div className='border rounded-full p-1'>
                    <img
                      src='/images/account.png'
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className='text-sm font-semibold mb-1'>
                      Manager shared a meeting document
                    </div>
                    <div className='text-blue-500 font-semibold text-xs'>
                      2 days ago
                    </div>
                  </div>
                </li>
                <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                  <div className='border rounded-full p-1'>
                    <img
                      src='/images/account.png'
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className='text-sm font-semibold mb-1'>
                      Manager shared a meeting document
                    </div>
                    <div className='text-blue-500 font-semibold text-xs'>
                      2 days ago
                    </div>
                  </div>
                </li>
                <li className='flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200'>
                  <div className='border rounded-full p-1'>
                    <img
                      src='/images/account.png'
                      alt=''
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className='text-sm font-semibold mb-1'>
                      Manager shared a meeting document
                    </div>
                    <div className='text-blue-500 font-semibold text-xs'>
                      2 days ago
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setMenu(!menu)}
              className='hover:shadow-2xl cursor-pointer'
            >
              <img src='/images/menu.png' alt='' height={25} width={25} />
            </div>
          </div>
        </div>
        {/* ROUTING COMPONENT */}
        <Outlet />
      </div>
      {/* MENU SIDEBAR */}
      <div
        className={
          menu
            ? 'absolute top-0 right-0 mob_screen_closed:hidden shadow-2xl'
            : 'absolute top-0 left-full mob_screen_closed:hidden'
        }
      >
        <ul className='text-md font-semibold p-2 bg-white h-screen w-[250px] menu_bar_mob:w-screen border'>
          <div
            onClick={() => setMenu(!menu)}
            className='float-right mt-3 mb-2 border w-[28px] p-[3px] rounded-2xl hover:bg-slate-300 duration-300 cursor-pointer'
          >
            <img src='/images/right-arrow.png' alt='' height={20} width={20} />
          </div>
          <li className='menu-bar-li flex justify-between'>Account</li>
          <li className='menu-bar-li'>Profile</li>
          <hr />
          <li className='menu-bar-li mt-2'>Dashboard</li>
          <li className='menu-bar-li'>Calendar</li>
          <li className='menu-bar-li'>Tools</li>
          <li className='menu-bar-li'>Scheduling</li>
          <li className='menu-bar-li'>Share Document</li>
        </ul>
        <div className='border border-slate-500 p-[3px] rounded-2xl hover:bg-slate-400 duration-300'>
          <img src='/images/right-arrow.png' alt='' height={20} width={20} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
