import React from "react";
import { Search } from "lucide-react";
import { X } from "lucide-react";
import { SunIcon } from "lucide-react";


function Icon({ type, className }: { type: string, className:string }) {
  switch (type) {
    case "search":
      return <Search className={className} />;
      break;
    case "clear":
      return <X className={className} />;
      break;
    case "search":
      return <X className={className} />;
      break;

    default:
      return <SunIcon className={className} />;
      break;
  }
}

export default Icon;
