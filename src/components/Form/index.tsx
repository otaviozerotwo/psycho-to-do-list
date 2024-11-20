import { Text, View } from "react-native"
import Checkbox from "expo-checkbox";
import CustomLink from "../CustomLink";
import styles from "./styles";
import Input from "./Input";
import { useState } from "react";
import CustomButton from "../CustomButton";

const Form = () => {
  const [isChecked, setChecked] = useState(false);

  const signUp = () => {
    console.log('TESTE CLICK SIGNUP OK!');
  }

  const forgotPassword = () => {
    console.log('TESTE CLICK FORGOT PASSWORD OK!');
  }

  const signIn = () => {
    console.log('TESTE CLICK LOGIN OK!');
  }

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
      <CustomButton label="Continue with Google" onPress={signIn} styleButton={styles.customButton} styleText={styles.customButtonText} />
    </View>
  );
};

export default Form;