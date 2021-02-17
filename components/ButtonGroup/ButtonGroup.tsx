import React, { forwardRef, Ref } from "react";

import styles from "styles/components/ButtonGroup.module.scss";

interface RadioButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text: string;
}

const ButtonGroup = (
  { text, ...props }: RadioButtonProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <>
      <input
        id={text}
        type="radio"
        className={styles.input}
        ref={ref}
        {...props}
      />
      <label htmlFor={text} className={styles.label}>
        {text}
      </label>
    </>
  );
};

export default forwardRef(ButtonGroup);
