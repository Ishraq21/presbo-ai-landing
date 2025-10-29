import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default:
    "bg-[var(--button-default-bg, theme(colors.accent.DEFAULT))] text-[var(--button-default-fg, theme(colors.accent.foreground))] hover:opacity-90",
  outline:
    "border border-white/10 bg-transparent text-foreground hover:border-white/30 hover:bg-white/5",
  ghost: "bg-transparent text-foreground hover:bg-white/10",
  subtle: "bg-white/10 text-foreground hover:bg-white/20",
  destructive: "bg-red-500 text-white hover:bg-red-600"
} as const

type Variant = keyof typeof buttonVariants

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: Variant
  size?: "sm" | "md" | "lg" | "icon"
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, variant = "default", size = "md", ...props }, ref) => {
    const Component = asChild ? Slot : "button"
    return (
      <Component
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
