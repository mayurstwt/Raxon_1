import "./styles.css";
import img1 from "../src/logo1.png";

export default function App() {
  return (
    <header class="text-gray-600 body-font">
      <div class="logo container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={img1} />
          <span class="ml-3 text-xl">Raxon Innovation</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900" href="/Footer.js">
            Brands We Manage
          </a>
          <a class="mr-5 hover:text-gray-900">Our Services</a>
          <a class="mr-5 hover:text-gray-900">About Us</a>
          <a class="mr-5 hover:text-gray-900">News</a>
          <a class="mr-5 hover:text-gray-900">Our Locations</a>
          <a class="mr-5 hover:text-gray-900">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}
