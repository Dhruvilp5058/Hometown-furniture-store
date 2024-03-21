import { View, Text, Button, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const fetchPaymentSheetParams = async () => {
    const apiUrl = 'http://10.0.101.32:3000';
    const response = await fetch(`${apiUrl}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response', response);

    const jdata = await response.json();
    console.log('jdata', jdata); 

    
    const { paymentIntent, ephemeralKey, customer } = jdata; 
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeralKey, customer, publishableKey } =
        await fetchPaymentSheetParams();

      await initPaymentSheet({
        merchantDisplayName: 'Example, Inc.',
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: 'Jane Doe',
        },
      });
    } catch (error) {
      console.error('Error initializing Payment Sheet:', error);
      Alert.alert('Error', 'Failed to initialize payment sheet. Please try again later.');
    }
  };

  const openPaymentSheet = async () => {
    try {
      const { error } = await presentPaymentSheet();

      if (error) {
        Alert.alert(`Error code: ${error.code}`, error.message);
      } else {
        Alert.alert('Success', 'Your order is confirmed!');
      }
    } catch (error) {
      console.error('Error opening Payment Sheet:', error);
      Alert.alert('Error', 'Failed to open payment sheet. Please try again later.');
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <StripeProvider publishableKey="pk_test_51OuWnzSCOBjelIMM02ERs8Tekd2GfHdBpB20enn9cUdNI3IOL9V2pCQU5DqiSWiD9CqijJLObgIdmyK7IQM3lh1V00x7B4CmSH">
      <View>
        <Button title="Open Payment Sheet" onPress={openPaymentSheet} />
      </View>
    </StripeProvider>
  );
};

export default PaymentScreen;
