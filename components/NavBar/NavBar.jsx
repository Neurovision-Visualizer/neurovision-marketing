function NavBar() {
  return (
    <nav class="bg-white px-2 py-3 sm:px-4 shadow-md rounded w-full">
      <div class="container flex justify-between items-center ">
        <div>
          <a href="/" class="no-underline  my-auto">
            <img src="" alt="" class="h-14" />
          </a>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 text-sm">
            <li>
              {" "}
              <a
                href="/"
                class="hover:text-primary transition-colors duration-300 "
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#features"
                class="hover:text-primary transition-colors duration-300 "
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                class="hover:text-primary transition-colors duration-300 "
              >
                {" "}
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#visualizer"
                class="hover:text-primary transition-colors duration-300 "
              >
                {" "}
                Visualizer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
