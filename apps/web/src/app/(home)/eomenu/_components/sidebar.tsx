import EvorgProfileData from "./evorgprofiledata";

export default function SideBar() {
  const itemNav = [
    { content: 'My Profile' },
    { content: 'My Events' },
    { content: 'My Transactions' },
    { content: 'My Dashboard' },
  ];

  return (
    <div>
      <label
        htmlFor="my-drawer-2"
        className="btn drawer-button lg:hidden text-white bg-transparent"
      >
        <svg
          width={40}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </label>
      <div className="drawer lg:drawer-open fixed">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div
          id="1"
          className="drawer-content flex flex-col items-center justify-center"
        >
          <EvorgProfileData/>
        </div>
        <div
          id="2"
          className="drawer-content flex flex-col items-center justify-center"
        >
          ASD
        </div>
        <div className="drawer-content flex flex-col items-center justify-center">
          BSD
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-gray-900 text-white min-h-full w-80">
            {/* Sidebar content here */}
            <div className="my-auto">
              {itemNav.map((item, key) => {
                return (
                  <div key={key} className="pt-10">
                    <li>
                      <a href="">{item.content}</a>
                    </li>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
