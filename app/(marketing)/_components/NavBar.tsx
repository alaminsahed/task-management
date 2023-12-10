import { Button } from "@/components/ui/button";
import React from "react";

function NavBar() {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <h1>ksfskdfnjsdjsdbfsjb</h1>
        <div className="">
          <Button>Login</Button>
          <Button>Get Tastify for free</Button>
        </div>
      </div>
      NavBar
    </div>
  );
}

export default NavBar;
