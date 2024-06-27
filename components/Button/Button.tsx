import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, DimensionValue } from 'react-native';
const { width, height } = Dimensions.get("screen")

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
  btnWidth?: DimensionValue | undefined;
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 36,
    alignSelf: 'center',
    justifyContent: 'center',
    flexGrow: 0,
    borderRadius: 30,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonContainer: {
    justifyContent: 'center',
    width: width * 0.9,

  },
});

export const MyButton = ({ text, onPress, color, textColor, btnWidth }: ButtonProps) => (
  <View style={[styles.buttonContainer, !!btnWidth && { width: btnWidth }]}>
    <TouchableOpacity
      style={[styles.button, !!color && { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
