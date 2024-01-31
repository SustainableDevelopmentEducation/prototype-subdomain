import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown, faGlobe, faSearch } from "@fortawesome/free-solid-svg-icons";
import nsde from '../assets/nsde.png'
import { navLinks, projectLinks, getInvolvedLinks, contactLinks } from "../utils/links";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isGetInvolvedDropdownOpen, setIsGetInvolvedDropdownOpen] =
    useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const handleLinkClick = (linkId) => {
    setSelectedLink(linkId);
    closeDropdowns();

    const dropdownToggleFunctions = {
      projects: toggleProjectsDropdown,
      get_involved: toggleGetInvolvedDropdown,
      contact: toggleContactDropdown,
    };

    const toggleFunction = dropdownToggleFunctions[linkId];
    if (toggleFunction) {
      toggleFunction();
    }
  };

  const toggleProjectsDropdown = () => {
    setIsProjectsDropdownOpen(!isProjectsDropdownOpen);
  };

  const toggleGetInvolvedDropdown = () => {
    setIsGetInvolvedDropdownOpen(!isGetInvolvedDropdownOpen);
  };

  const toggleContactDropdown = () => {
    setIsContactDropdownOpen(!isContactDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsProjectsDropdownOpen(false);
    setIsGetInvolvedDropdownOpen(false);
    setIsContactDropdownOpen(false);
  };

  return (
    <nav className="bg-white-800 px-4 py-6">
      <div className="mx-auto flex flex-row items-center justify-around">
        {/* Logo (Order 1 on larger screens, Order 2 on smaller screens) */}
        <div className="flex text-center lg:text-left order-1 sm:order-2">
          <a href="#" className="text-darkgray text-left">
            <img
              src={nsde}
              className={`h-12`}
              alt="Logo"
            />
          </a>
        </div>

        {/* Hamburger Menu button (Order 2 on small screens, Order 1 on larger screens) */}
        <div className="xl:hidden relative sm:order-1 mr-auto">
          <button
            onClick={handleHamburgerClick}
            className="text-darkgray focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
          </button>
          {/* Dropdown Content for Hamburger Menu */}
          {isHamburgerOpen && (
            <div className="absolute bg-gray-800 text-white mt-2 p-2">
              <div>
              {navLinks.map((link) => (
              <li
                key={link.id}
                className={`flex text-nowrap relative ${
                  selectedLink === link.id
                    ? "bg-[#003477] text-white rounded-full h-full"
                    : ""
                } font-bold flex-shrink-0`}
              >
                <a
                  href="#"
                  className={`text-${
                    selectedLink === link.id ? "white" : "darkgray"
                  }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>

              </li>
            ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Links (Order 3 on all screens) */}
        <div
          className={`xl:flex xl:justify-evenly xl:items-center xl:w-3/4 xl:order-3 hidden ${
            isHamburgerOpen ? 'hidden' : 'block'
          }`}
        >
          <ul className="flex flex-col max-h-full mx-auto xl:flex-row xl:space-x-10">
          {navLinks.map((link) => (
              <li
                key={link.id}
                className={`flex relative ${
                  selectedLink === link.id
                    ? "bg-[#003477] text-white rounded-full h-full"
                    : ""
                } font-bold flex-shrink-0`}
              >
                <a
                  href="#"
                  className={`text-${
                    selectedLink === link.id ? "white" : "darkgray"
                  }`}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.label}
                </a>
                {link.hasDropdown && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className={`ml-1 mt-1 ${
                      isProjectsDropdownOpen ||
                      isGetInvolvedDropdownOpen ||
                      isContactDropdownOpen
                        ? "text-white"
                        : "text-darkgray"
                    }`}
                  />
                )}
                {/* Dropdown Content */}
                {link.id === "projects" && isProjectsDropdownOpen && (
                  <div>
                   <ul className="absolute bg-gray-800 mt-2 p-2">
                   {/* Map over projectLinks to generate dropdown items */}
                   {projectLinks.map((project) => (
                     <li key={project.id}>
                       {project.label}
                     </li>
                   ))}
                 </ul>
                 </div>
                )}
                {/* Dropdown Content */}
                {link.id === "get_involved" && isGetInvolvedDropdownOpen && (
                  <div>
                     <ul className="absolute bg-gray-800 mt-2 p-2">
                   {/* Map over projectLinks to generate dropdown items */}
                   {getInvolvedLinks.map((getInvolved) => (
                     <li key={getInvolved.id}>
                       {getInvolved.label}
                     </li>
                   ))}
                 </ul>
                  </div>
                )}
                {/* Dropdown Content */}
                {link.id === "contact" && isContactDropdownOpen && (
                  <div>
                    <ul className="absolute bg-gray-800 mt-2 p-2">
                    {/* Map over projectLinks to generate dropdown items */}
                    {contactLinks.map((contact) => (
                      <li key={contact.id}>
                        {contact.label}
                      </li>
                    ))}
                  </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Language Selector (Order 4 on all screens) */}
        <div className={`order-4 flex ml-auto text-center space-x-2`}>
          <div className="flex space-x-2 mt-1 justify-center">
            <FontAwesomeIcon icon={faGlobe} className="h-6 w-6 text-amber-500" />
            <a href="#" className="text-amber-500 font-bold text-xl">
              EN
            </a>
          </div>
          <div className="rounded-full border-2 border-amber-500 bg-amber-500 h-full mt-1">
            <FontAwesomeIcon icon={faSearch} className="h-4 w-6 text-darkgray" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




