"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function ModeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme(); // Use resolvedTheme to avoid delay
  const [mounted, setMounted] = useState(false);

  // Ensure component is only mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  if (!mounted) {
    // Prevent hydration errors by not rendering on the server
    return null;
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Switch
        checked={resolvedTheme === "dark"} // Use resolvedTheme for consistent behavior
        onCheckedChange={handleToggle}
        id="theme-toggle"
      />
      <Label htmlFor="theme-toggle">
        {resolvedTheme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </Label>
    </div>
  );
}
