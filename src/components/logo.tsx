import Link from "next/link";
import React from "react";
import IconNoirBook from "@/components/svg-compnents/iconoir_book";
function Logo() {
  return (
    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
      <Link href={"/"}>
        <IconNoirBook />
      </Link>
    </div>
  );
}

export default Logo;
