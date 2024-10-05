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
export function FontSelect() {
  const [value, setValue] = useState("Sans Serif");
  const [DropdownMenuOpened, setDropdownMenuOpened] = useState(false);

  return (
    <DropdownMenu dir="rtl" onOpenChange={setDropdownMenuOpened}>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end  text-right  items-center gap-1">
          <Label id="font-dropdown  " className="  text-right">
            {value}
          </Label>
          {DropdownMenuOpened ? (
            <ChevronUp id="block font-dropdown" />
          ) : (
            <ChevronDown id="block font-dropdown" />
          )}
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" className="">
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="Sans Serif">
            Sans Serif
          </DropdownMenuRadioItem>
          <DropdownMenuArrow />
          <DropdownMenuRadioItem value="Serif">Serif</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mono">Mono</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
