import React from "react";
import { Button as PaperButton } from "react-native-paper";

const Button = ({ mode, style, onPress, children }) => (
  <PaperButton mode={mode} style={style} onPress={onPress}>
    {children}
  </PaperButton>
);

export default Button;
