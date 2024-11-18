import { Button, Text, View } from "react-native"
import Checkbox from "expo-checkbox";
import CustomButton from "../CustomButton";
import styles from "./styles";
import Input from "./Input";
import { useState } from "react";

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
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.text}>Don`t have an account?</Text>
        <CustomButton label="Sign Up" onPress={signUp}/>
      </View>
      
      <Input label="Email" placeholder="Email" keyboardType="email-address" />
      <Input label="Password" placeholder="Password" secureTextEntry/>

      <View style={{ flexDirection: 'row' }}>
        <Checkbox 
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <CustomButton label="Forget Password ?" onPress={forgotPassword} />
      </View>
      <Button title="Log In" onPress={signIn} />
      <Text>Or</Text>
      <CustomButton label="Continue with Google" onPress={signIn} />
    </View>
  );
};

export default Form;