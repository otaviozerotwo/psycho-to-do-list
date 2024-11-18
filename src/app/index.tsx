import { View } from "react-native";
import Header from "../components/Header";
import Form from "../components/Form";
import { LinearGradient } from "expo-linear-gradient";
import styles from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0062E0', '#19AFFF']}
        style={styles.background}
      >
        <Header />
        <View style={styles.form}>
          <Form />
        </View>
      </LinearGradient>
      
    </View>
  );
}
