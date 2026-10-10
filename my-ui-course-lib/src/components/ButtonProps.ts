import {type ButtonHTMLAttributes, type ComponentPropsWithRef} from "react";

export type ButtonVariant = 'fill' | 'outline' | 'text';
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonStates = "default" | "hover" | "active";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    size: ButtonSize;
    ButtonState?: ButtonStates;
}

export type ButtonAsButtonProps = ButtonProps & ComponentPropsWithRef<"button"> & {
    as?: "button";
}

export type ButtonAsLinkProps = ButtonProps & ComponentPropsWithRef<"a"> & {
    as: "a";
}

export type ButtonAllProps = ButtonAsButtonProps | ButtonAsLinkProps;
