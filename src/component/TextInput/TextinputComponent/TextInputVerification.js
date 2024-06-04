import {TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styleSheetverification from '../../../Screens/VerificationScreen/StyleSheetVerification/styleSheetverification'

export default function TextInputVerification() {
  const inputRefs = useRef([]);
  const [Focus, setFocus] = useState(null);
  const [values, setValues] = useState(['', '', '', '']); 

  const focusNextTextinput = index => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const focusPreviusTextinput = index => {
    if (inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onChangeText = (value, index) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    if (value.length === 0) {
      focusPreviusTextinput(index);
    } else if (value.length > 0) {
      focusNextTextinput(index);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomValues = Array.from({ length: 4 }, () =>
        Math.floor(Math.random() * 10).toString()
      );
     
      setValues(randomValues); 
      
    }, 4000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <View style={styleSheetverification.otpinputview}>
      {[0, 1, 2, 3].map(index => (
        <TextInput
          key={index.toString()}
          style={[
            Focus === index && { borderColor: 'rgb(0, 172, 255)' },
            styleSheetverification.otpInputfield,
          ]}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={value => onChangeText(value, index)} // Pass index to onChangeText
          onFocus={() => setFocus(index)}
          onBlur={() => setFocus(null)}
          ref={ref => (inputRefs.current[index] = ref)}
          onSubmitEditing={() => {
            focusNextTextinput(index);
          }}
          value={values[index]} 
        />
      ))}
    </View>
  );
}
