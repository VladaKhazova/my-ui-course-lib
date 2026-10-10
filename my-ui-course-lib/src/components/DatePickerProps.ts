import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

export type DatePickerAppearance = "outline" | "filled";
export type DatePickerSize = "s" | "m" | "l";
export type DatePickerStatus = "default" | "error" | "warning" | "success";
export type DatePickerValidationMode = "always" | "afterBlur";

export interface DatePickerProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "defaultValue" | "max" | "min" | "onChange" | "readOnly" | "size" | "type" | "value"
    > {
    label: string;
    value?: string;
    defaultValue?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onValueChange?: (value: string) => void;
    onClear?: () => void;
    helperText?: ReactNode;
    errorText?: ReactNode;
    warningText?: ReactNode;
    successText?: ReactNode;
    minDate?: string;
    maxDate?: string;
    requiredText?: string;
    minDateText?: string;
    maxDateText?: string;
    unavailableDateText?: string;
    isDateUnavailable?: (value: string) => boolean;
    appearance?: DatePickerAppearance;
    size?: DatePickerSize;
    status?: DatePickerStatus;
    validationMode?: DatePickerValidationMode;
    fullWidth?: boolean;
    clearable?: boolean;
    readOnly?: boolean;
}

export interface DatePickerValidationParams {
    value: string;
    required?: boolean;
    minDate?: string;
    maxDate?: string;
    requiredText: string;
    minDateText: string;
    maxDateText: string;
    unavailableDateText: string;
    isDateUnavailable?: (value: string) => boolean;
}
