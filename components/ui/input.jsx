import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-[8px] border border-black/50 focus:border-accent font-light bg-white px-4 py-5 text-base placeholder:text-primary/90 outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
