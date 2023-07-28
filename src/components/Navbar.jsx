import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
  ];

  const active = navigation.findIndex((item) => item.href === pathname);

  const activeClassName =
    "text-md font-light text-white bg-primary py-3.5 px-2.5 hover:text-gray-300";

  const inactiveClassName =
    "text-md font-light text-white py-3.5 px-3 hover:text-gray-300";
  return (
    <header className="bg-secondary">
      <nav className="mx-auto container px-2 flex items-center justify-between py-4">
        <div className="flex items-center justify-between w-full">
          <Link to={"/"}>
            <h1 className="text-xl font-bold text-white">
              Somjobs<span className="text-blue-600">.com</span>
            </h1>
          </Link>
          <div className="block">
            <ul className="flex space-x-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={
                      active === navigation.indexOf(item)
                        ? activeClassName
                        : inactiveClassName
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
