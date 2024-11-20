import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12
  },
  text: {
    fontSize: 12,
    fontWeight: 'medium',
  },
  section: {
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 6,
    marginBottom: 24
  },
  containerCheckboxCustomLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  containerCheckbox: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 5
  },
  orText: {
    fontSize: 12,
    marginBottom: 24,
    textAlign: 'center'
  },
  customButton: {
    height: 48,
    backgroundColor: '#1D61E7',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 24
  },
  customButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'medium',
    textAlign: 'center'
  },
});

export default styles;