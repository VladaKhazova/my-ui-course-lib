import { useId, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import type { DatePickerProps, DatePickerStatus, DatePickerValidationParams } from "./DatePickerProps";
import "./DatePicker.css";

type DateInputElement = HTMLInputElement & {
    showPicker?: () => void;
};

function formatReadableDate(value: string) {
    if (!value) {
        return "";
    }

    const [year, month, day] = value.split("-");

    return [day, month, year].filter(Boolean).join(".");
}

function getAutoValidationMessage({
    value,
    required,
    minDate,
    maxDate,
    requiredText,
    minDateText,
    maxDateText,
    unavailableDateText,
    isDateUnavailable,
}: DatePickerValidationParams) {
    if (required && !value) {
        return requiredText;
    }

    if (value && minDate && value < minDate) {
        return `${minDateText} ${formatReadableDate(minDate)}`;
    }

    if (value && maxDate && value > maxDate) {
        return `${maxDateText} ${formatReadableDate(maxDate)}`;
    }

    if (value && isDateUnavailable?.(value)) {
        return unavailableDateText;
    }

    return "";
}

export function DatePicker({
    id,
    label,
    value,
    defaultValue,
    onChange,
    onValueChange,
    onClear,
    helperText,
    errorText,
    warningText,
    successText,
    minDate,
    maxDate,
    requiredText = "Выберите дату",
    minDateText = "Дата должна быть не раньше",
    maxDateText = "Дата должна быть не позже",
    unavailableDateText = "Эта дата недоступна",
    isDateUnavailable,
    appearance = "outline",
    size = "m",
    status = "default",
    validationMode = "always",
    fullWidth = false,
    clearable = false,
    className,
    disabled,
    readOnly,
    required,
    ...props
}: DatePickerProps) {
    const generatedId = useId();
    const inputRef = useRef<DateInputElement>(null);
    const inputId = id ?? `date-picker-${generatedId}`;
    const descriptionId = `${inputId}-description`;
    const isControlled = value !== undefined;
    const [innerValue, setInnerValue] = useState(defaultValue ?? "");
    const [isTouched, setIsTouched] = useState(false);
    const currentValue = value ?? innerValue;
    const shouldValidate = validationMode === "always" || isTouched;
    const autoErrorText = shouldValidate
        ? getAutoValidationMessage({
            value: currentValue,
            required,
            minDate,
            maxDate,
            requiredText,
            minDateText,
            maxDateText,
            unavailableDateText,
            isDateUnavailable,
        })
        : "";

    const visualStatus: DatePickerStatus = errorText || autoErrorText
        ? "error"
        : warningText
            ? "warning"
            : successText
                ? "success"
                : status;

    const description = errorText ?? autoErrorText ?? warningText ?? successText ?? helperText;
    const isInvalid = visualStatus === "error";
    const canClear = clearable && Boolean(currentValue) && !disabled && !readOnly;

    const datePickerClasses = [
        "date-picker",
        `date-picker--${appearance}`,
        `date-picker--${size}`,
        `date-picker--${visualStatus}`,
        fullWidth && "date-picker--full-width",
        disabled && "date-picker--disabled",
        readOnly && "date-picker--readonly",
        canClear && "date-picker--clearable",
        className,
    ].filter(Boolean).join(" ");

    function updateValue(nextValue: string) {
        if (!isControlled) {
            setInnerValue(nextValue);
        }

        onValueChange?.(nextValue);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        updateValue(event.target.value);
        onChange?.(event);
    }

    function handleClear() {
        updateValue("");
        onClear?.();
    }

    function handleOpenPicker() {
        if (disabled || readOnly) {
            return;
        }

        inputRef.current?.focus();
        inputRef.current?.showPicker?.();
    }

    return (
        <div className={datePickerClasses}>
            <label className="date-picker__label" htmlFor={inputId}>
                {label}
                {required && <span className="date-picker__required"> *</span>}
            </label>

            <div className="date-picker__control">
                <input
                    {...props}
                    aria-describedby={description ? descriptionId : undefined}
                    aria-invalid={isInvalid || undefined}
                    className="date-picker__input"
                    disabled={disabled}
                    id={inputId}
                    max={maxDate}
                    min={minDate}
                    onBlur={(event) => {
                        setIsTouched(true);
                        props.onBlur?.(event);
                    }}
                    onChange={handleChange}
                    readOnly={readOnly}
                    ref={inputRef}
                    required={required}
                    type="date"
                    value={currentValue}
                />

                {canClear && (
                    <button
                        className="date-picker__clear"
                        aria-label="Очистить дату"
                        onClick={handleClear}
                        type="button"
                    >
                        x
                    </button>
                )}

                <button
                    className="date-picker__picker-button"
                    aria-label="Открыть календарь"
                    disabled={disabled}
                    onClick={handleOpenPicker}
                    type="button"
                >
                    <svg
                        className="date-picker__icon"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7 2v3" />
                        <path d="M17 2v3" />
                        <path d="M4 9h16" />
                        <path d="M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                    </svg>
                </button>
            </div>

            {description && (
                <div
                    className="date-picker__description"
                    id={descriptionId}
                    role={isInvalid ? "alert" : undefined}
                >
                    {description}
                </div>
            )}
        </div>
    );
}
