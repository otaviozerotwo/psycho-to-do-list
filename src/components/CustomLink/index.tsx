import { Text, Pressable } from "react-native"
import styles from './styles';

type CustomLinkProps = {
  label: string,
  onPress: () => void
};

const CustomLink = ({ label, onPress } : CustomLinkProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

export default CustomLink;