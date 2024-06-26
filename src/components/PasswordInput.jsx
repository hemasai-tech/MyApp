// components/PasswordInput.js
import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PasswordInput = ({ label, error, ...props }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholderTextColor={'#667085'}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            {...props}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={styles.iconContainer}
          >
            <Icon name={secureTextEntry ? "visibility-off" : "visibility"} size={20} color="grey" />
          </TouchableOpacity>
        </View>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    height: 60
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  iconContainer: {
    padding: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
});

export default PasswordInput;
