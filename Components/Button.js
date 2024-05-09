import { Pressable, View, Text, StyleSheet } from "react-native"

const Button = ({title, onPress}) => {
  return (
    <Pressable  style={styles.tHButton} onPress={onPress}>
        <View style={styles.customButton}>
            <Text style={styles.textButton}>{title}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: "#fff",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 28,
        width: 340,
        height: 40,
        borderWidth: 1, 
    borderColor: '#e9edf7',
      },
      tHButton: {
        borderRadius: 20,
        marginVertical: 8
      },
      textButton: {
        color: '#000',
        fontSize: 13,
        textAlign: 'center',
        alignItems: 'center'
      }
})

export default Button