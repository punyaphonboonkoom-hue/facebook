import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PostScreen() {
  const params = useLocalSearchParams();
  const image = params.image as string;

  if (!image) return null; // กันพัง

  return (
    <View style={styles.container}>
      {/* ปุ่มปิด */}
      <TouchableOpacity style={styles.closeBtn} onPress={() => router.back()}>
        <Ionicons name="close" size={30} color="white" />
      </TouchableOpacity>

      {/* รูป */}
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeBtn: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 6,
  },
});
