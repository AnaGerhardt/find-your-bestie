import React, { forwardRef, Ref } from "react";

import styles from "styles/components/RadioButton.module.scss";

interface RadioButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  text?: string;
}

const RadioButton = (
  { text, ...props }: RadioButtonProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <label className={styles.radio}>
      <input {...props} ref={ref} type="radio" />
      <div className={styles.checkmark}></div>
      {text && <span className={styles.text}>{text}</span>}
    </label>
  );
};

export default forwardRef(RadioButton);
