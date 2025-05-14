import React from "react"
import Link from "next/link"

type ButtonVariant = "default" | "outline"
type ButtonSize = "default" | "sm" | "lg"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  href?: string
  fullWidth?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      // asChild = false,
      href,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none"
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400",
    }
    
    const sizes = {
      sm: "h-9 px-3 text-sm",
      default: "h-10 px-4 py-2 text-sm",
      lg: "h-11 px-8 py-2 text-base",
    }
    
    const widthClass = fullWidth ? "w-full" : ""
    
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`
    
    if (href && !props.disabled) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }
    
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
