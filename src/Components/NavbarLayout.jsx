import React from "react";
import NavBar from "./NavBar";

export default function NavbarLayout(props) {
    const {children} = props;
  return (
    <>
        <NavBar />
        {children}
    </>
  )
}
