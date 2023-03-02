import React from "react";
import logo from "../../Media/logo2.webp";
import logo3 from "../../Media/logo3.webp";
import inn from "../../Media/in.webp";
import you from "../../Media/you.webp";

const Footer = () => {
  return (
    

<footer class="p-4 bg-gray-900 shadow md:px-6 md:py-8 dark:bg-gray-900">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm  sm:mb-0 text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto border-gray-700 lg:my-8" />
    <span class="block text-sm  sm:text-center text-gray-400">© 3 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
</footer>


  );
};

export default Footer;
