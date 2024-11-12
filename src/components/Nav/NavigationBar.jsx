// eslint-disable-next-line no-unused-vars
import { Button, Link, Navbar, NavbarBrand, NavbarMenu, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeSwitch from "../Theme/ThemeSwitch";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar isMenuOpen={isMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>

          <NavLink to={"/"} className="font-bold text-inherit">
            _DevConfig
          </NavLink>
        </NavbarBrand>

        <NavbarMenuToggle className="sm:hidden" onClick={() => { setIsMenuOpen(!isMenuOpen) }} />
      </NavbarContent>

      {/*Menu for Desktop*/}
      <NavbarContent className="hidden space-x-2 sm:flex" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to={"/challanges"}  >
            Challanges
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/internship"}  >
            Internship
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to={"/about"} >
            About us
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <Button color="primary"
            as={NavLink}
            to="/Login"

            radius="md"
            variant="flat"
          >
            Register Now {"🎉"}
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/*Menu for Mobile*/}
      <NavbarMenu
        className={`items-center bg-transparent  space-y-4 text-xl justify-center md:hidden sm:flex `}
      >
        <NavbarItem>
          <NavLink className="text-2xl " onClick={() => { setIsMenuOpen(!isMenuOpen) }} color="foreground" to={"/challanges"} >
            Challanges
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <NavLink className="text-2xl " onClick={() => { setIsMenuOpen(!isMenuOpen) }} color="foreground" to={"/internship"} >
            Internship
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink className="text-2xl " onClick={() => { setIsMenuOpen(!isMenuOpen) }} color="foreground" to={"/about"} >
            About us
          </NavLink>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={NavLink}
            to="/Register"
            color="primary"
            radius="full"
            variant="flat"
            size="lg"
            onClick={() => { setIsMenuOpen(!isMenuOpen) }}
          >
            Register Now
          </Button>
        </NavbarItem>
      </NavbarMenu>
      <span className="max-sm:hidden">
        <ThemeSwitch />
      </span>
    </Navbar>
  );
}
