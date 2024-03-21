import React, {Component} from 'react';
import {View, Text, Alert, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

const Child = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <WebView source={{uri: 'https://reactnative.dev/'}} />
    </SafeAreaView>
  );
};

export default Child;
