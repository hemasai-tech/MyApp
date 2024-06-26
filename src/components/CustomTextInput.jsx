import React from 'react';
import { View, TextInput, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';

const CustomTextInput = ({ label, error, ...props }) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput placeholderTextColor={'#667085'} style={styles.input} {...props} />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: '#F9FAFB',
    borderRadius: 20
  },
  input: {
    padding: 10,
    fontSize: 16,
    height: 60
  },
  error: {
    color: 'red',
  },
});

export default CustomTextInput;
