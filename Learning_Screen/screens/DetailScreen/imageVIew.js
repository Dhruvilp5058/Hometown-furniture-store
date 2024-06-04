import React from 'react';
import { View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { ArrowLeft, DownloadSimple } from 'phosphor-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ImageViewer from 'react-native-image-zoom-viewer';
import CameraRoll from '@react-native-camera-roll/camera-roll';
import RNFetchBlob from 'rn-fetch-blob';

const { width } = Dimensions.get('window');

const ImageView = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;

    const images = item.images.map((image) => ({ url: image }));

    const saveImageToDevice = async (url) => {
        try {
            const { config, fs } = RNFetchBlob;
            let PictureDir = fs.dirs.PictureDir;
            let options = {
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: `${PictureDir}/image_${Date.now()}.jpg`,
                    description: 'Image'
                }
            };
            config(options).fetch('GET', url).then(res => {
                CameraRoll.save(res.path(), { type: 'photo' })
                    .then(() => {
                        Alert.alert('Success', 'Image saved to gallery!');
                    })
                    .catch(err => {
                        console.error(err);
                        Alert.alert('Error', 'Failed to save image!');
                    });
            });
        } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to save image!');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <TouchableOpacity
                style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}
                onPress={() => navigation.goBack()}
            >
                <ArrowLeft weight='bold' size={32} color="#fff" />
            </TouchableOpacity>
            <ImageViewer
                imageUrls={images}
                enableSwipeDown={true}
                onSwipeDown={() => navigation.goBack()}
                renderIndicator={() => null}
                backgroundColor='#000'
                saveToLocalByLongPress={false}
                onSave={(currentIndex) => {
                    const imageUrl = images[currentIndex]?.url;
                    if (imageUrl) {
                        saveImageToDevice(imageUrl);
                    } else {
                        Alert.alert('Error', 'Failed to retrieve image URL');
                    }
                }}
                onLongPress={(image) => {
                    const currentIndex = images.findIndex(img => img.url === image.url);
                    if (currentIndex !== -1) {
                        saveImageToDevice(images[currentIndex].url);
                    } else {
                        Alert.alert('Error', 'Failed to retrieve image URL');
                    }
                }}
            />
            <TouchableOpacity
                style={{ position: 'absolute', top: 20, right: 20, zIndex: 1 }}
                onPress={() => saveImageToDevice(images[0].url)}
            >
                <DownloadSimple weight='bold' size={32} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default ImageView;
