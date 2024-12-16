import React from "react";
import styles from "./Input.module.css";

interface InputProps {
    label: string;
    name: string;
    value: string | number | boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string; // text, number, email, etc.
    placeholder?: string;
    required?: boolean;
    className?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    required = false,
    className = "",
}) => {
    return (
        <div className={styles.inputContainer}>
            <label htmlFor={name} className={styles.inputLabel}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={styles.inputField}
            />
        </div>
    );
};

export default Input;