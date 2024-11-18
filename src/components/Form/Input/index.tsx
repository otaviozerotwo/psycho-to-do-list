import { KeyboardAvoidingView, Text, TextInput, TextInputProps } from "react-native"
import styles from "./styles"

type InputProps = {
  label: string,
  placeholder: string,
  keyboardType?: TextInputProps["keyboardType"],
  secureTextEntry?: boolean,
};

const Input = ({ label, placeholder, keyboardType, secureTextEntry }: InputProps ) => {
  return (
    <KeyboardAvoidingView behavior="padding">
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </KeyboardAvoidingView>
  );
};

export default Input;