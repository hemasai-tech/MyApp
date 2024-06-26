import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import ButtonView from '../buttons/ButtonView'

const Splash = (props) => {
  const { navigation } = props;

  const handleSignUp = () => {
    navigation.navigate("Register")
  };

  return (
    <ImageBackground style={styles.container} resizeMode='cover' source={require('../../../images/bg.png')}>
      <View style={styles.heading}>
        <Text style={styles.txt}>Soo</Text>
        <Text style={styles.txt}>and Carrots</Text>
      </View>
      <View style={styles.btnView}>
        <ButtonView
          title="Sign up for free"
          onPress={handleSignUp}
          btnStyles={styles.btn}
          iconName={'arrow-right-circle'}
          iconType={'login'}
        />
        <ButtonView
          title="Continue with Email"
          onPress={handleSignUp}
          btnStyles={styles.btn1}
          iconName={'arrow-right-circle'}
          iconType={'envelope'}
        />
      </View>
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    marginHorizontal: 50,
    marginVertical: 70
  },
  txt: {
    fontWeight: '800',
    fontSize: 36,
    color: '#fff'
  },
  btn: {
    backgroundColor: '#0054FF',
    borderRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  btn1: {
    backgroundColor: '#1D2939',
    borderRadius: 35,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5
  },
  btnView: {
    marginHorizontal: 20,
    marginTop: 'auto',
    marginBottom: 50
  }
})