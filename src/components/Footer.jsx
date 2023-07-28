import { FaWhatsapp, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    // bottom float
    //
    <footer className="bg-secondary  w-full fixed bottom-0">
      <div className="mx-auto container px-2 flex items-center justify-between py-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-xl font-bold text-white">
            Somjobs<span className="text-blue-600">.com</span>
          </h1>
          <div className="block">
            <ul className="flex space-x-4">
              <li className="flex items-center text-md font-light cursor-pointer text-white py-3.5 px-3 hover:text-gray-300 gap-2">
                <FaFacebook />
                <a href="#">Somjobs</a>
              </li>
              <li className="flex items-center text-md font-light cursor-pointer text-white py-3.5 px-3 hover:text-gray-300 gap-2">
                <FaWhatsapp />
                <a href="#">Somjobs</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
