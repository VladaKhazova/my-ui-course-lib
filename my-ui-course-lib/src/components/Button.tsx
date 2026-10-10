import React from "react";
import type {ButtonAllProps} from "./ButtonProps";
import "./Button.css";

export function Button({
        as = "button",
        variant,
        size,
        ButtonState = "default",
        className,
        disabled,
        type = "button",
        children,
        ...props
}: ButtonAllProps) {
    const buttonClasses = [
        "button",
        `button--${variant}`,
        `button--${size}`,
        `button--${ButtonState}`,
        disabled && "button--disabled",
        className
    ].filter(Boolean).join(" ");

    const Tag = as as React.ElementType;
    return (
        <Tag
            {...props}
            className={buttonClasses}
            disabled={as === "button" ? disabled : undefined}
            type={as === "button" ? type : undefined}
        >
            {children}
        </Tag>
    );
}
