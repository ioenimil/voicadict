"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ArrowDownIcon } from "lucide-react";
import { Label } from "./ui/label";
export function DropdownMenuRadioGroupDemo() {
  const [value, setValue] = useState("Sans Serif");
  useEffect(() => {
    console.log(value);
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end text-right w-[120px] items-center gap-1">
          <Label id="font-dropdown " className=" text-right">
            {value}
          </Label>
          <ArrowDownIcon id="font-dropdown" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
          <DropdownMenuRadioItem value="Sans Serif">
            Sans Serif
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Serif">Serif</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Mono">Mono</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
