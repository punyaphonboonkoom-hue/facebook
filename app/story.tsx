import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function StoryScreen() {
  const { image, name } = useLocalSearchParams<{
    image: string;
    name: string;
  }>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <Ionicons name="close" size={32} color="white" />
      </TouchableOpacity>

      <Text style={styles.name}>{name}</Text>

      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
  name: {
    color: 'white',
    fontSize: 16,
    position: 'absolute',
    top: 45,
    left: 20,
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});
