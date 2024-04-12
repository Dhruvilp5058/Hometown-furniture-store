import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ImageScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  console.log("item>>>>>",item);

  return (
    <View>
      <FlatList
        horizontal
        data={item.images}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item: image }) => (
          <View style={{ margin: 10 }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={{ uri: image }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ImageScreen;
