import styles from "../../styles/button.module.css";

export default function Button({
  type,
  text,
  disabled,
  onClick,
  ariaLabel,
  className,
  buttonStyle = "base",
}: {
  type: "submit" | "button";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
  buttonStyle?: "base" | "close";
}) {
  const buttonClass =
    buttonStyle === "close" ? styles.buttonClose : styles.buttonBase;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${buttonClass} ${className}`}
      aria-label={ariaLabel}
      disabled={disabled}>
      {text}
    </button>
  );
}
