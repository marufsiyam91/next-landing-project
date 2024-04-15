'use client'

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/Components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}>
            
        <MenuItem setActive={setActive} active={active} item="Services">
          <div>
            <h2>home</h2>
            <h2>about</h2>
            <h2>service</h2>
            <h2>contact</h2>
          </div>
        </MenuItem>
        </Menu>
            
    </div>
  );
};

export default Navbar;
