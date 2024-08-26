"use client";
import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { HoveredLink, Menu } from "./ui/navbar-menu";

export function NavbarDemo() {
  return (
      <Navbar className="top-2" />

  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/dashboard">
            Dashboard
        </HoveredLink>
        <HoveredLink href="/info_form">
            Generate Idea
        </HoveredLink>
        <HoveredLink href="/policies">
            Policies
        </HoveredLink>
        <HoveredLink href="/signin">
            Login
        </HoveredLink>
      </Menu>
    </div>
  );
}
