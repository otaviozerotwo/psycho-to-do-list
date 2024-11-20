import { StyleProp, Text, Pressable, ViewStyle, TextStyle } from "react-native"

type CustomButtonProps = {
  label: string,
  onPress: () => void,
  styleButton?: StyleProp<ViewStyle>,
  styleText?: StyleProp<TextStyle>
}

const CustomButton = ({ label, onPress, styleButton, styleText } : CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styleButton}>
      <Text style={styleText}>{label}</Text>
    </Pressable>
  );
};

export default CustomButton;