import React from "react";
import { TextInput as PaperTextInput } from "react-native-paper";

const TextInput = ({ label, value, onChangeText, style, ...props }) => (
  <PaperTextInput
    label={label}
    value={value}
    onChangeText={onChangeText}
    style={style}
    {...props}
  />
);

export default TextInput;
