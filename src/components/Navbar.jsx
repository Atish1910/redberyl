import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <div class="container px-lg-2 px-0">
          <nav class="navbar navbar-expand-lg ">
            <button
              type="button"
              class="navbar-toggler fs_13 me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center align-items-center"
              id="navbarCollapse"
            >
              <div class="navbar-nav">
                <NavLink
                  to="/"
                  className="nav-item nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Comp1
                </NavLink>
                <NavLink
                  to="/comp2"
                  className="nav-item nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Comp2
                </NavLink>
                <NavLink
                  to="/comp3"
                  className="nav-item nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  Comp3
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
