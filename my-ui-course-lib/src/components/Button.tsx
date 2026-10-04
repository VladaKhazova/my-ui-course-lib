import type { ButtonProps } from "./ButtonProps";
import "./Button.css";

export function Button({
        variant,
        size,
        ButtonState = "default",
        className,
        disabled,
        type = "button",
        children,
        ...props
}: ButtonProps) {
    const buttonClasses = [
        "button",
        `button--${variant}`,
        `button--${size}`,
        `button--${ButtonState}`,
        disabled && "button--disabled",
        className
    ].filter(Boolean).join(" ");

    return (
        <button className={buttonClasses} disabled={disabled} type={type} {...props}>
            {children}
        </button>
    );
}
