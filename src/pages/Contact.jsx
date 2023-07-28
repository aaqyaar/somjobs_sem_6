import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInbox,
  FaPhone,
} from "react-icons/fa";
import { HiOutlineMail, HiPhoneIncoming } from "react-icons/hi";
export function ContactPage() {
  return (
    <div className="h-full bg-primary">
      {/* get help and all the contacts of this company and also a form with 3 input fields , name, subject, message  */}
      <div className="mx-auto max-w-screen-lg   px-2 flex flex-col  py-4">
        <div className="">
          <div className="flex   lg:flex-row items-center   gap-20  flex-col mt-6">
            <div>
              <h1 className="text-5xl font-bold text-white">
                Get in touch with us
              </h1>
              <p className="text-gray-400 text-lg font-thin mt-4">
                We are here to help you
              </p>
            </div>

            <img
              src="https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration6.svg"
              className="h-[30rem]"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between  mt-12">
            <div className="flex  flex-col">
              <h1 className="text-2xl font-bold text-white">Social Contacts</h1>

              <div className="flex flex-col mt-4">
                <div className="flex items-center text-lg font-light cursor-pointer text-white py-3.5 hover:text-gray-300 gap-2">
                  <FaFacebook />
                  <a href="#">Somjobs</a>
                </div>
                <div className="flex items-center text-lg font-light cursor-pointer text-white py-3.5 hover:text-gray-300 gap-2">
                  <FaWhatsapp />
                  <a href="#">Somjobs</a>
                </div>
                <div className="flex items-center text-lg font-light cursor-pointer text-white py-3.5 hover:text-gray-300 gap-2">
                  <FaLinkedin />
                  <a href="#">Somjobs</a>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8313.220666179086!2d45.298252164340965!3d2.040977282033125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d584208a91e883f%3A0x33b3bacfb4cf94dd!2sJamhuriya%20University%20of%20Science%20%26%20Technology%20(JUST)!5e0!3m2!1sen!2sso!4v1690527101032!5m2!1sen!2sso"
              width="700"
              height="500"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* contact */}
          <div className="flex flex-col my-24">
            <h1 className="text-4xl font-bold text-white">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-gray-400 text-lg font-thin mt-4">
              Send us a message and we will get back to you
            </p>
            <h1 className="text-white hover:text-gray-500 inline-flex items-center gap-3 my-4">
              <HiOutlineMail className="inline-block text-xl" />{" "}
              info@somjobs.com
            </h1>
            <h1 className="text-white hover:text-gray-500 inline-flex items-center gap-3 my-4">
              <HiPhoneIncoming className="inline-block text-xl" /> +252610 000
              000
            </h1>
            <div className="flex flex-col  gap-4 mt-4 bg-secondary rounded-sm p-4">
              <input
                name="query"
                placeholder="Your name"
                className="p-3 text-white w-full bg-transparent border border-blue-100 rounded-md focus:outline-none"
              />

              <input
                name="location"
                placeholder="Your email"
                className="p-3 text-white w-full bg-transparent border  border-blue-100 rounded-md focus:outline-none"
              />

              <input
                name="location"
                placeholder="Subject"
                className="p-3 text-white w-full bg-transparent border  border-blue-100 rounded-md focus:outline-none"
              />

              <textarea
                rows={5}
                name="location"
                placeholder="Message"
                className="p-3 text-white w-full bg-transparent border  border-blue-100 rounded-md focus:outline-none"
              />

              <button
                type="submit"
                className="bg-blue-600 active:bg-blue-700 p-3 rounded text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
