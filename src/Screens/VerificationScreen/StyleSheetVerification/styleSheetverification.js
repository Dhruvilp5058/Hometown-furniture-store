import {StyleSheet} from 'react-native';
import React from 'react';

const styleSheetverification = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  backarrow:{
    left:10,
    top:10
  },
  otpinputview: {
    marginTop: 100,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  otpInputfield: {
    // backgroundColor: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    padding: 20,
    fontSize: 20,
    height: 65,
    width: '20%',
    borderRadius: 10,
    borderWidth: 2,
    textAlign: 'center',
    margin: 10,
    color:'black'
  },

  fbox: {
    margin: 10,
  },
  txtverification: {
    fontSize: 20,
    fontWeight: '900',
    color: 'black',
    top: 60,
    left: 40,
  },
  txtnote: {
    fontWeight: '600',
    color: 'grey',
    top: 70,
    left: 40,
  },

  loaderview: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadersecondview: {
    backgroundColor: 'white',
    padding: 80,
  },
  loaderotp: {
    fontSize: 33,
    color: 'rgb(0, 172, 255)',
  },
  loaderContainer:{
    top:15
  },
  dataemail:{
    fontWeight: '400',
    color: 'rgb(0, 172, 255)',
    top: 86,
    left: 38,
  },
  dataphone:{
    fontWeight: '400',
    color: 'rgb(0, 172, 255)',
    top: 70,
    left: 44,
  },
  otpsend:{
    left: 160,
    bottom:25
  },
  spinnertext:{
    fontSize:25,
    // zIndex:1
  }
});
export default styleSheetverification;
