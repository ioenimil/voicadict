"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useEffect } from "react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    console.log(theme);
  });

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-3">
      <Switch onCheckedChange={handleToggle} id="theme-toggle" />
      <Label htmlFor="theme-toggle">
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Label>
    </div>
  );
}
