import React, { useContext } from "react";
import type {ButtonAllProps} from "./ButtonProps";
import * as styles from "./Button.css.ts";
import { ThemeTokensContext } from "../theme/tokensContext";
import { themeClass } from "../theme/theme.css";

export function Button({
        as = "button",
        variant = "fill",
        size = "s",
        ButtonState = "default",
        className,
        disabled,
        type,
        children,
        ...props
}: ButtonAllProps) {
    const theme = useContext(ThemeTokensContext);
    const buttonClasses = [
        theme ? undefined : themeClass,
        styles.button,
        styles.variants[variant],
        styles.sizes[size],
        className
    ].filter(Boolean).join(" ");

    const isDisabledLink = as === "a" && disabled;
    const href = "href" in props ? props.href : undefined;
    const Tag = as as React.ElementType;
    return (
        <Tag
            {...props}
            className={buttonClasses}
            data-state={ButtonState}
            data-disabled={disabled ? "" : undefined}
            disabled={as === "button" ? disabled : undefined}
            type={as === "button" ? type ?? "button" : type}
            href={isDisabledLink ? undefined : href}
            role={isDisabledLink ? "link" : props.role}
            aria-disabled={isDisabledLink ? true : props["aria-disabled"]}
            tabIndex={isDisabledLink ? -1 : props.tabIndex}
            onClick={isDisabledLink
                ? (event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault()
                : props.onClick}
        >
            {children}
        </Tag>
    );
}
