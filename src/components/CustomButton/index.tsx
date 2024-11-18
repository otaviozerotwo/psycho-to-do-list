import { Text, TouchableOpacity } from "react-native"
import styles from './styles';

type CustomButtonProps = {
  label: string,
  onPress: () => void
};

const CustomButton = ({ label, onPress } : CustomButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;