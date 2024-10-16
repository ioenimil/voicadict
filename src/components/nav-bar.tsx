import Image from "next/image";
import React from "react";
import { FontSelect } from "./font-dropdown";
import { Separator } from "./ui/separator";
import { ModeToggle } from "./theme-button";
import { UserProfile } from "./user-profile";

type Props = object;

export default function NavBar({}: Props) {
  return (
    <nav className="flex w-full justify-between">
      <Image
        src="/assets/images/svg/iconoir_book.svg"
        alt="Logo"
        width={32}
        height={36}
      />
      <div className="flex items-center justify-between gap-4">
        <div>
          <FontSelect />
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-4">
          <div>
            <ModeToggle />
          </div>
          <div>
            <UserProfile />
          </div>
        </div>
      </div>
    </nav>
  );
}
