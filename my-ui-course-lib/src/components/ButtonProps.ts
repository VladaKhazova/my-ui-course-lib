import type {ComponentPropsWithRef} from "react";

export type ButtonVariant = 'fill' | 'outline' | 'text';
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonStates = "default" | "hover" | "active";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    ButtonState?: ButtonStates;
    disabled?: boolean;
}

export type ButtonAsButtonProps = ButtonProps & ComponentPropsWithRef<"button"> & {
    as?: "button";
}

export type ButtonAsLinkProps = ButtonProps & ComponentPropsWithRef<"a"> & {
    as: "a";
}

export type ButtonAllProps = ButtonAsButtonProps | ButtonAsLinkProps;
