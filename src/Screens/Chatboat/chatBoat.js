import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import style from './stylesheet';

const ChatBot = () => {
  const [data, setData] = useState([]);
  const apikey = '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';
  const apiurl = 'https://api.openai.com/v1/';
  const [input, setInput] = useState('');

  const handleSend = async () => {
    try {
      const response = await axios.post(
        `${apiurl}/completions`,
        {
          model: 'gpt-3.5-turbo-instruct',
          prompt: input,
          max_tokens: 150,
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apikey}`,
          },
        }
      );
      console.log(response.data);
      const text = response.data.choices[0].text;
      setData([...data, { type: 'user', text: input }, { type: 'bot', text }]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={style.main}>
      <Text style={style.tittle}>AI Chat Bot</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={style.body}
        renderItem={({ item }) => (
          <View style={style.itemview}>
            <Text style={[style.txtitem, { color: item.type === 'user' ? 'green' : 'red' }]}>
              {item.type === 'user' ? 'You' : 'Bot'} :
            </Text>
            <Text style={style.bot}>  {item.text}</Text>
          </View>
        )}
      />
       <TouchableOpacity onPress={handleSend} style={style.button}>
        <Text style={style.buttontext}>Ask</Text>
      </TouchableOpacity>
      <TextInput
        style={style.input}
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder='Ask me anything'
        placeholderTextColor='black'
      />
     
    </View>
  );
};

export default ChatBot;
