import type {ButtonHTMLAttributes} from "react";

export type ButtonVariant = 'fill' | 'outline' | 'text';
export type ButtonSize = 's' | 'm' | 'l';
export type ButtonStates = "default" | "hover" | "active";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    size: ButtonSize;
    ButtonState?: ButtonStates;
}
