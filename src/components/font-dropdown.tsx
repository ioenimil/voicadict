"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Label } from "./ui/label";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import useFontStore from "@/store/settings-store";
export function FontSelect() {
  const [DropdownMenuOpened, setDropdownMenuOpened] = useState(false);
  const { fontFamily, setFontFamily } = useFontStore();

  const handleFontFamilyChange = (fontFamily: string) => {
    setFontFamily(fontFamily);
  };

  useEffect(() => {
    document
      .querySelector("body")
      ?.style.setProperty("font-family", fontFamily);
  });

  return (
    <DropdownMenu dir="rtl" onOpenChange={setDropdownMenuOpened}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-items-center gap-1 text-right">
          <Label id="font-dropdown  " className="text-2xl">
            {!!fontFamily ? fontFamily : "Select Font"}
          </Label>
          {DropdownMenuOpened ? (
            <ChevronUp className="" id=" font-dropdown" />
          ) : (
            <ChevronDown className="" id=" font-dropdown" />
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="">
        <DropdownMenuRadioGroup
          value={fontFamily}
          onValueChange={handleFontFamilyChange}
        >
          <DropdownMenuRadioItem className="text-lg" value=" sans-serif">
            Sans Serif
          </DropdownMenuRadioItem>
          <DropdownMenuArrow />
          <DropdownMenuRadioItem className="text-lg" value="serif">
            Serif
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="text-lg" value="monospace">
            Mono
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
