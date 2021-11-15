import { forwardRef, ComponentProps } from "react";

import styles from "./button.module.css";

const Button = forwardRef<
  HTMLButtonElement,
  Omit<ComponentProps<"button">, "className">
>(({ children, ...rest }, ref) => {
  return (
    <button ref={ref} className={styles.button} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
