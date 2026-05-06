import {Link} from "react-router-dom";
import{ FaInstagram,FaFacebook ,FaLinkedin, FaGithub,FaUsers,FaDribbble,FaBehance,FaEnvelope,FaPhoneAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-black shadow-md">
        <h1 className="text-2xl font-bold text-blue-500">MyPortfolio</h1>
        <ul className="flex gap-6">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Projects</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-lg">
            Hire me
          </button>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className=" bg-gray-700 flex flex-col md:flex-row items-center justify-between px-10 py-20">
        
        {/* Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-xl font-bold">
            Hello, This is <br></br>
            <span className="text-blue-500 text-5xl">Tanvin Akter</span>
          </h2>
          <p className="text-blue-300 text-5xl">
            Full-Stack Developer.
          </p>
          {/* Social Icons */}
<div className="flex gap-6 text-3xl pt-6">
  
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-500 transition duration-300"
  >
    <FaFacebook />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-500 transition duration-300"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-gray-400 transition duration-300"
  >
    <FaGithub />
  </a>

</div>
          <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg">
            Hire me
          </button>
            <a href="/Images/cv.pdf" download>
              <button className="px-6 py-3 border border-white rounded-lg text-lg hover:bg-blue-700">
                Download CV
              </button>
            </a>
          </div>
          {/* Experience Div */}
<div className="flax justify-center mt-10">
  <div className="bg-gray-800 rounded-2xl shadow-lg flex flex-col md:flex-row justify-around items-center py-10">

    {/* Experience */}
    <div className="text-center px-8">
      <h1 className="text-5xl font-bold text-blue-500">5+</h1>
      <p className="text-2xl text-gray-300 mt-3">
        Experiences
      </p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-24 border-l border-gray-500"></div>

    {/* Projects */}
    <div className="text-center px-8">
      <h1 className="text-5xl font-bold text-blue-500">20+</h1>
      <p className="text-2xl text-gray-300 mt-3">
        Project Done
      </p>
    </div>

    {/* Divider */}
    <div className="hidden md:block h-24 border-l border-gray-500"></div>

    {/* Clients */}
    <div className="text-center px-8">
      <h1 className="text-5xl font-bold text-blue-500">80+</h1>
      <p className="text-2xl text-gray-300 mt-3">
        Happy Clients
      </p>
    </div>

  </div>
</div>
        </div>

        {/* Image */}
<div className="flex-1 md:w-1/2 flex justify-center mt-10 md:mt-0">
  <img
    src="/Images/image.jpg"
    alt="Profile"
    className="w-[500px] h-[500px] rounded-2xl shadow-lg object-cover"
  />
</div>
      </section>
      {/* Services Section */}
<section className="px-10 py-20 bg-gray-700 text-white">

  {/* Heading */}
  <div className="text-center mb-16">
    <h1 className="text-5xl font-bold mb-6">
      Services
    </h1>

    <p className="text-gray-400 text-xl">
      Lorem ipsum dolor sit amet consectetur.
      Imperdiet convallis blandit felis ligula aliquam
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* Card 1 */}
    <div className="bg-gray-900 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-lg">
      <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        App Design
      </h2>

      <p className="text-gray-400 text-lg leading-9">
        Lorem ipsum dolor sit amet .
        <br />
        Imperdiet Lorem ipsum dolor sit amet consectetur
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-900 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-lg">
      <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        Web Development
      </h2>

      <p className="text-gray-400 text-lg leading-9">
        Lorem ipsum dolor sit amet .
        <br />
        Imperdiet Lorem ipsum dolor sit amet consectetur
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-900 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-lg">
      <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        UI/UX Design
      </h2>

      <p className="text-gray-400 text-lg leading-9">
        Lorem ipsum dolor sit amet .
        <br />
        Imperdiet Lorem ipsum dolor sit amet consectetur
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-gray-900 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-lg">
      <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        Graphic Design
      </h2>

      <p className="text-gray-400 text-lg leading-9">
        Lorem ipsum dolor sit amet .
        <br />
        Imperdiet Lorem ipsum dolor sit amet consectetur
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-gray-900 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-lg">
      <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        SEO Marketing
      </h2>

      <p className="text-gray-400 text-lg leading-9">
        Lorem ipsum dolor sit amet .
        <br />
        Imperdiet Lorem ipsum dolor sit amet consectetur
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-gray-900 rounded-3xl p-10 text-center hover:scale-105 transition duration-300 shadow-lg">
      <FaUsers className="text-6xl text-blue-500 mx-auto mb-6" />

      <h2 className="text-3xl font-bold text-blue-500 mb-6">
        Mobile App
      </h2>

      <p className="text-gray-400 text-lg leading-9">
        Lorem ipsum dolor sit amet .
        <br />
        Imperdiet Lorem ipsum dolor sit amet consectetur
      </p>
    </div>

  </div>
</section>

      {/* Footer Section */}
<footer className="bg-gray-900 text-gray-400 py-20 px-10">

  {/* Logo */}
  <div className="text-center">
    <h1 className="text-5xl font-bold text-blue-500 mb-12">
      Tanvin
    </h1>
  </div>

  {/* Menu */}
  <div className="flex flex-wrap justify-center gap-10 text-2xl mb-14">
    <a href="#" className="hover:text-blue-500 transition duration-300">
      Home
    </a>

    <a href="#" className="hover:text-blue-500 transition duration-300">
      Services
    </a>

    <a href="#" className="hover:text-blue-500 transition duration-300">
      About me
    </a>

    <a href="#" className="hover:text-blue-500 transition duration-300">
      Portfolio
    </a>

    <a href="#" className="hover:text-blue-500 transition duration-300">
      Contact me
    </a>
  </div>

  {/* Social Icons */}
  <div className="flex justify-center gap-8 mb-16">

    <div className="border border-gray-600 p-4 rounded-full hover:border-blue-500 hover:text-blue-500 transition duration-300 cursor-pointer">
      <FaInstagram className="text-2xl" />
    </div>

    <div className="border border-gray-600 p-4 rounded-full hover:border-blue-500 hover:text-blue-500 transition duration-300 cursor-pointer">
      <FaLinkedin className="text-2xl" />
    </div>

    <div className="border border-gray-600 p-4 rounded-full hover:border-blue-500 hover:text-blue-500 transition duration-300 cursor-pointer">
      <FaDribbble className="text-2xl" />
    </div>

    <div className="border border-gray-600 p-4 rounded-full hover:border-blue-500 hover:text-blue-500 transition duration-300 cursor-pointer">
      <FaBehance className="text-2xl" />
    </div>

  </div>

  {/* Contact Info */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-2xl mb-16">

    <div className="flex items-center gap-4">
      <FaEnvelope />
      <p>tanvinannie912@gmail.com</p>
    </div>

    <div className="flex items-center gap-4">
      <FaPhoneAlt />
      <p>+8801968303552</p>
    </div>

  </div>

  {/* Line */}
  <div className="border-t border-gray-700 w-full md:w-3/4 mx-auto mb-8"></div>

  {/* Bottom Text */}
  <div className="text-center text-lg text-gray-500">
    Designed by Tanvin Annie | Full Stack Developer
  </div>

</footer>
    </div>
  );
};

export default Home;