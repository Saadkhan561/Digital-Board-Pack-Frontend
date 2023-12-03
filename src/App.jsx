import { useState } from "react";
import "./App.css";
import Search from "./components/searchBar";
import Card from "./components/card";
import Notification from "./components/notification";

function App() {
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [filter, setFilter] = useState("All");
  const [notify, setNotify] = useState(false);

  console.log(filter)

  return (
    <div className="flex relative overflow-x-hidden h-screen">
      {/* SIDE BAR DIV */}
      <div className="p-4 h-screen w-[300px] mob_screen:hidden">
        <div className="text-xl font-semibold">Digital Board Pack</div>
        <div className="flex justify-center p-2 border border-gray-400 rounded-xl items-center w-24 mt-4 ml-2 cursor-pointer shadow-2xl hover:duration-200 hover:bg-slate-100">
          <div className="mr-2">
            <img src="/images/plus.png" alt="" height={15} width={15} />
          </div>
          <div className="text-sm font-semibold">New</div>
        </div>
        {/* SIDE BAR FULL SCREEN */}
        <div className="mt-4">
          <ul className="text-md">
            <li className="flex items-center mb-1 cursor-pointer p-2 hover:rounded-2xl hover:bg-slate-200 hover:duration-200">
              <div className="mr-2">
                <img
                  src="/images/dashboard.png"
                  alt=""
                  height={20}
                  width={20}
                />
              </div>
              <div>Dashboard</div>
            </li>
            <li className="flex items-center mb-1 cursor-pointer p-2 hover:rounded-2xl hover:bg-slate-200 hover:duration-200">
              <div className="mr-2">
                <img src="/images/calendar.png" alt="" height={20} width={20} />
              </div>
              <div>Calendar</div>
            </li>
            <li className="flex items-center mb-1 cursor-pointer p-2 hover:rounded-2xl hover:bg-slate-200 hover:duration-200">
              <div className="mr-2">
                <img src="/images/tools.png" alt="" height={20} width={20} />
              </div>
              <div>Tools</div>
            </li>
            <li className="flex items-center mb-1 cursor-pointer p-2 hover:rounded-2xl hover:bg-slate-200 hover:duration-200">
              <div className="mr-2">
                <img src="/images/meeting.png" alt="" height={20} width={20} />
              </div>
              <div>Scheduling</div>
            </li>
            <li className="flex items-center mb-1 cursor-pointer p-2 hover:rounded-2xl hover:bg-slate-200 hover:duration-200">
              <div className="mr-2">
                <img src="/images/email.png" alt="" height={20} width={20} />
              </div>
              <div>Share Document</div>
            </li>
          </ul>
        </div>
        {/* SIDE BAR MEDIUM SCREEN */}
        {/* <div className="mt-16 w-8 relative side_bar_full:hidden border border-black">
          <ul>
            <li className="cursor-pointer relative peer">
              <img src="/images/dashboard.png" alt="" height={30} width={30} />
              <div className="hidden absolute top-0 left-10 text-white bg-black text-xs p-[4px] items-center rounded-3xl peer-hover:block border border-black">
                Dashboard
              </div>
            </li>
          </ul>
        </div> */}
      </div>
      {/* MIDDLE DIV */}
      <div className={menu ? 'w-full opacity-50 duration-200 relative' : 'w-full opacity-100 duration-200 relative'}>
        {/* SEARCH BAR DIV */}
        <div className="flex justify-between items-center p-4">
          {/* SEARCH BAR */}
          <Search />
          {/* FULL SCREEM NOTIFICATION DIV */}
          <div className="flex items-center mob_screen:hidden">
            <div className="relative cursor-pointer">
              <div onClick={() => setNotify(!notify)}>
                <img src="/images/notify.png" alt="" height={25} width={25} />
              </div>
              {/* NOTIFICATION DIV */}
              <div
                className={
                  notify
                    ? "notification-div opacity-100 duration-200"
                    : "notification-div opacity-0 duration-200"
                }
              >
                <ul className="p-2">
                  <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                    <div className="border rounded-full p-1">
                      <img
                        src="/images/account.png"
                        alt=""
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">
                        Manager shared a meeting document
                      </div>
                      <div className="text-blue-500 font-semibold text-xs">
                        2 days ago
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                    <div className="border rounded-full p-1">
                      <img
                        src="/images/account.png"
                        alt=""
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">
                        Manager shared a meeting document
                      </div>
                      <div className="text-blue-500 font-semibold text-xs">
                        2 days ago
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                    <div className="border rounded-full p-1">
                      <img
                        src="/images/account.png"
                        alt=""
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">
                        Manager shared a meeting document
                      </div>
                      <div className="text-blue-500 font-semibold text-xs">
                        2 days ago
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                    <div className="border rounded-full p-1">
                      <img
                        src="/images/account.png"
                        alt=""
                        height={30}
                        width={30}
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-1">
                        Manager shared a meeting document
                      </div>
                      <div className="text-blue-500 font-semibold text-xs">
                        2 days ago
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cursor-pointer border border-gray-400 rounded-full w-8 h-8 ml-2">
              <img src="/images/account.png" alt="" height={28} width={28} />
            </div>
          </div>
          {/* SMALL SCREEM NOTIFICATION DIV */}
          <div className="relative flex gap-2 items-center mob_screen_closed:hidden">
            <div className="cursor-pointer" onClick={() => setNotify(!notify)}>
              <img src="/images/notify.png" alt="" height={25} width={25} />
            </div>
            {/* NOTIFICATION DIV */}
            <div
              className={
                notify
                  ? "notification-div opacity-100 duration-200"
                  : "notification-div opacity-0 duration-200"
              }
            >
              <ul className="p-2">
                <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                  <div className="border rounded-full p-1">
                    <img
                      src="/images/account.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      Manager shared a meeting document
                    </div>
                    <div className="text-blue-500 font-semibold text-xs">
                      2 days ago
                    </div>
                  </div>
                </li>
                <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                  <div className="border rounded-full p-1">
                    <img
                      src="/images/account.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      Manager shared a meeting document
                    </div>
                    <div className="text-blue-500 font-semibold text-xs">
                      2 days ago
                    </div>
                  </div>
                </li>
                <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                  <div className="border rounded-full p-1">
                    <img
                      src="/images/account.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      Manager shared a meeting document
                    </div>
                    <div className="text-blue-500 font-semibold text-xs">
                      2 days ago
                    </div>
                  </div>
                </li>
                <li className="flex gap-4 items-center mb-2 p-2 w-full hover:bg-slate-200 rounded-xl duration-200">
                  <div className="border rounded-full p-1">
                    <img
                      src="/images/account.png"
                      alt=""
                      height={30}
                      width={30}
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">
                      Manager shared a meeting document
                    </div>
                    <div className="text-blue-500 font-semibold text-xs">
                      2 days ago
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              onClick={() => setMenu(!menu)}
              className="hover:shadow-2xl cursor-pointer"
            >
              <img src="/images/menu.png" alt="" height={25} width={25} />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-between items-center p-4">
          {/* FILTER DIV */}
          <div className={notify ? 'flex justify-end cursor-pointer' : 'z-10 flex justify-end cursor-pointer'}>
            <div
              className={
                dropdown
                  ? "relative border border-slate-300 border-b-0 w-36 p-1 font-light"
                  : "relative border border-slate-300 w-36 p-1 font-light"
              }
            >
              <div
                onClick={() => setDropdown(!dropdown)}
                className="flex justify-between items-center hover:bg-slate-200 duration-300"
              >
                <div>{filter}</div>
                <div>
                  <img
                    className={
                      dropdown
                        ? "rotate-180 duration-150"
                        : "rotate-0 duration-150"
                    }
                    src="/images/down-arrow.png"
                    alt=""
                    height={15}
                    width={15}
                  />
                </div>
              </div>
              <div
                className={
                  dropdown
                    ? "absolute top-8 left-0 p-1 border border-slate-300 border-t-0 rounded-b-xl w-36 bg-white"
                    : "absolute top-8 left-0 p-1 border border-slate-300 border-t-0 rounded-b-xl w-36 bg-white hidden"
                }
              >
                <ul>
                  <li
                    onClick={(e) => setFilter(e.target.innerText)}
                    className="hover:bg-slate-200 duration-300"
                  >
                    All
                  </li>
                  <li
                    onClick={(e) => setFilter(e.target.innerText)}
                    className="hover:bg-slate-200 duration-300"
                  >
                    New
                  </li>
                  <li
                    onClick={(e) => setFilter(e.target.innerText)}
                    className="hover:bg-slate-200 duration-300"
                  >
                    Sort By Date
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-10 mob_screen_closed:hidden flex justify-center p-2 bg-slate-100 border border-gray-400 rounded-full items-center cursor-pointer shadow-2xl hover:duration-200">
            <div>
              <img src="/images/plus.png" alt="" height={20} width={20} />
            </div>
            {/* <div className="text-sm font-semibold">New</div> */}
          </div>
        </div>
        {/* CARDS BODY DIV */}
        <div className="p-4 flex flex-wrap gap-4 mob_screen:justify-center">
          {/* CARD */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      {/* MENU SIDEBAR */}
      <div
        className={
          menu
            ? "absolute top-0 right-0 mob_screen_closed:hidden shadow-2xl"
            : "absolute top-0 left-full mob_screen_closed:hidden"
        }
      >
        <ul className="text-md font-semibold p-2 bg-white h-screen w-[250px] menu_bar_mob:w-screen border">
          <div
            onClick={() => setMenu(!menu)}
            className="float-right mt-3 mb-2 border w-[28px] p-[3px] rounded-2xl hover:bg-slate-300 duration-300 cursor-pointer"
          >
            <img src="/images/right-arrow.png" alt="" height={20} width={20} />
          </div>
          <li className="menu-bar-li flex justify-between">Account</li>
          <li className="menu-bar-li">Profile</li>
          <hr />
          <li className="menu-bar-li mt-2">Dashboard</li>
          <li className="menu-bar-li">Calendar</li>
          <li className="menu-bar-li">Tools</li>
          <li className="menu-bar-li">Scheduling</li>
          <li className="menu-bar-li">Share Document</li>
        </ul>
        <div className="border border-slate-500 p-[3px] rounded-2xl hover:bg-slate-400 duration-300">
          <img src="/images/right-arrow.png" alt="" height={20} width={20} />
        </div>
      </div>
    </div>
  );
}

export default App;
