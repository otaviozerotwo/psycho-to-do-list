import { Text, View } from "react-native";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do APP</Text>
    </View>
  );
};

export default Header;