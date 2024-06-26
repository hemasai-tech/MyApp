import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { MyButton } from '../../../components/Button/Button';
import CustomTextInput from '../CustomTextInput';
import PasswordInput from '../PasswordInput';
import CheckBox from '@react-native-community/checkbox';
import Octicon from 'react-native-vector-icons/Octicons'

const Register = () => {
  const [form, setForm] = useState({
    competition: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setChecked] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const lengthCheck = password.length >= 8;
    const uppercaseCheck = /[A-Z]/.test(password);
    const lowercaseCheck = /[a-z]/.test(password);
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[~`!@#$%^&*()_\-+=?]/.test(password);

    return lengthCheck && uppercaseCheck && lowercaseCheck && numberCheck && specialCharCheck;
  };

  const handleInputChange = (name, value) => {
    setForm({ ...form, [name]: value });
    if (name === 'email') {
      if (!validateEmail(value)) {
        setErrors((prev) => ({ ...prev, email: 'Email format is invalid' }));
      } else {
        setErrors((prev) => {
          const { email, ...rest } = prev;
          return rest;
        });
      }
    }

    if (name === 'password' || name === 'confirmPassword') {
      if (!validatePassword(value)) {
        setErrors((prev) => ({
          ...prev,
          password: 'Password must be at least 8 characters long, include at least 3 of the following: uppercase letters, lowercase letters, numbers, or special characters (~`!@#$%^&*()_-+=?).',
        }));
      } else {
        setErrors((prev) => {
          const { password, ...rest } = prev;
          return rest;
        });
      }

      if (form.password !== form.confirmPassword) {
        setErrors((prev) => ({
          ...prev,
          confirmPassword: 'New password and Confirm password do not match.',
        }));
      } else {
        setErrors((prev) => {
          const { confirmPassword, ...rest } = prev;
          return rest;
        });
      }
    }

    if (name === 'firstName' || name === 'lastName') {
      if (value.trim() === '') {
        setErrors((prev) => ({ ...prev, [name]: 'This is a required field.' }));
      } else {
        setErrors((prev) => {
          const { [name]: removedError, ...rest } = prev;
          return rest;
        });
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (form.firstName.trim() === '') {
      newErrors.firstName = 'This is a required field.';
    }

    if (form.lastName.trim() === '') {
      newErrors.lastName = 'This is a required field.';
    }

    if (!validatePassword(form.password)) {
      newErrors.password = 'Password must be at least 8 characters long, include at least 3 of the following: uppercase letters, lowercase letters, numbers, or special characters (~`!@#$%^&*()_-+=?).';
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'New password and Confirm password do not match.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      if (isChecked) {
        // Perform the sign-up logic
        Alert.alert('Success', 'Form is valid and ready for submission!');
      } else {
        Alert.alert('Error', 'You must agree to the terms and conditions.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.mainHeader}>
          <Icon name='arrow-left-circle' size={40} color="#000" />
          <Text style={styles.header}>Create Account</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.competition}>
            <View>
              <Text>Competition to sign Up*</Text>
            </View>
            <View>
              <Octicon name="chevron-down" size={20} />
            </View>
          </View>
          <CustomTextInput
            label="Email"
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => handleInputChange('email', value)}
            error={errors.email}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={form.password}
            onChangeText={(value) => handleInputChange('password', value)}
            error={errors.password}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChangeText={(value) => handleInputChange('confirmPassword', value)}
            error={errors.confirmPassword}
          />
          <CustomTextInput
            label="First Name"
            placeholder="First Name in English*"
            value={form.firstName}
            onChangeText={(value) => handleInputChange('firstName', value)}
            error={errors.firstName}
          />
          <CustomTextInput
            label="Last Name"
            placeholder="Last Name in English*"
            value={form.lastName}
            onChangeText={(value) => handleInputChange('lastName', value)}
            error={errors.lastName}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
          />
          <Text style={styles.label}>By signing up, I agree to Cloti's Terms & Conditions and Privacy Policy.</Text>
        </View>
        <View style={styles.btnComp}>
          <MyButton
            text="Sign Up"
            textColor='white'
            color='#253BFF'
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff'
  },
  container: {
    padding: 20,
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '800',
    paddingHorizontal: 25,
    color: '#101828',
  },
  mainHeader: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  form: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 6,
  },
  btnComp: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  competition: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 24,
    marginVertical: 20
  }
});

export default Register;
