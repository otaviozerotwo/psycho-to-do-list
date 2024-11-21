import { Text, View } from "react-native"
import Checkbox from "expo-checkbox";
import CustomLink from "../CustomLink";
import styles from "./styles";
import Input from "./Input";
import { useState } from "react";
import CustomButton from "../CustomButton";

type FormProps = {
  promptAsync: () => void,
  signUp: () => void,
  forgotPassword: () => void,
  signIn: () => void,
}

const Form = ({ promptAsync, signUp, forgotPassword, signIn } : FormProps) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.section}>
        <Text style={styles.text}>Don`t have an account?</Text>
        <CustomLink label="Sign Up" onPress={signUp}/>
      </View>
      
      <Input label="Email" placeholder="Email" keyboardType="email-address" />
      <Input label="Password" placeholder="Password" secureTextEntry/>

      <View style={styles.containerCheckboxCustomLink}>
        <View style={styles.containerCheckbox}>
          <Checkbox 
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
          />
          <Text style={styles.text}>Remember me</Text>
        </View>
        <CustomLink label="Forget Password ?" onPress={forgotPassword} />
      </View>
      <CustomButton label="Log In" onPress={signIn} styleButton={styles.customButton} styleText={styles.customButtonText} />
      <Text style={styles.orText}>Or</Text>
      <CustomButton label="Continue with Google" onPress={() => promptAsync()} styleButton={styles.customButton} styleText={styles.customButtonText} />
    </View>
  );
};

export default Form;