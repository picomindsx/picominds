"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const Button = ({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className={cn(
        "px-[100px] py-2 border-[0.5px] border-indigo-50 rounded-full bg-gradient-to-r from-indigo-900 to-indigo-950 cursor-pointer flex items-center gap-2 transform transition-transform duration-300 ease-out",
        className,
        isHover && "scale-[1.01]"
      )}
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {children}
      <ArrowUpRight
        className={cn(
          "rotate-0 transform transition-transform duration-300 ease-out",
          isHover && "rotate-45 "
        )}
      />
    </button>
  );
};

export default Button;
