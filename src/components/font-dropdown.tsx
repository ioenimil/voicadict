"use client";

import { useState } from "react";
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
  const {fontFamily, setFontFamily} = useFontStore();

  return (
    <DropdownMenu dir="rtl" onOpenChange={setDropdownMenuOpened}>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-items-center  text-right  items-center gap-1">
          <Label id="font-dropdown  " className=" text-2xl ">
            {!!fontFamily ? fontFamily : "sans serif"}
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
          onValueChange={setFontFamily}
        >
          <DropdownMenuRadioItem className="text-lg" value="sans">
            Sans Serif
          </DropdownMenuRadioItem>
          <DropdownMenuArrow />
          <DropdownMenuRadioItem className="text-lg" value="serif">
            Serif
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="text-lg" value="mono">
            Mono
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
