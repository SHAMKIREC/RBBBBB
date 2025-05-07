"use client";

import { Icon as IconifyIcon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
}

export function Icon({ icon, className, ...props }: IconProps) {
  return (
    <div className={cn("inline-flex", className)} {...props}>
      <IconifyIcon icon={icon} />
    </div>
  );
} 