import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const ButtonView = ({ onPress, title, btnStyles,iconName, iconType }) => {
  return (
    <TouchableOpacity style={btnStyles} onPress={onPress}>
      <View style={styles.content}>
        <Icon name={iconType} size={20} color="white" style={styles.iconLeft} />
        <Text style={styles.text}>{title}</Text>
        <Icon name={iconName} size={40} color="white" style={styles.iconRight} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  iconLeft: {
    marginRight: 'auto',
  },
  iconRight: {
    marginLeft: 10,
    marginLeft:'auto'
  },
});

export default ButtonView;
