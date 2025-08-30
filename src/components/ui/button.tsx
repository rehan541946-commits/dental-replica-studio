import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-custom-md hover:shadow-custom-lg btn-hover-lift",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-custom-md hover:shadow-custom-lg",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-custom-sm hover:shadow-custom-md btn-hover-lift",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-custom-sm hover:shadow-custom-md",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-spring",
        link: "text-primary underline-offset-4 hover:underline transition-spring",
        medical: "bg-gradient-primary text-primary-foreground hover:opacity-95 shadow-custom-lg hover:shadow-glow transform hover:scale-105 transition-spring font-bold tracking-wide",
        appointment: "bg-gradient-to-r from-accent-red to-accent-red-light text-white hover:from-accent-red-dark hover:to-accent-red shadow-custom-lg hover:shadow-xl font-bold tracking-wide transform hover:scale-105 transition-spring",
        hero: "bg-gradient-hero text-white hover:opacity-95 shadow-custom-xl hover:shadow-glow px-8 py-4 text-lg font-bold tracking-wide transform hover:scale-105 transition-spring",
        glass: "glass text-primary hover:bg-white/90 hover:text-primary-dark backdrop-blur-xl border-2 border-white/30 hover:border-white/50 transition-spring",
        premium: "bg-gradient-mesh text-white hover:opacity-95 shadow-custom-xl hover:shadow-glow font-bold tracking-wide transform hover:scale-105 transition-spring before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        xl: "h-16 rounded-xl px-12 text-lg",
        icon: "h-11 w-11 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
