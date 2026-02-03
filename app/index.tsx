import React, { useState } from 'react';
import { router } from 'expo-router';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Story =
  | { name: string; add: true }
  | { name: string; add: false; img: string };

export default function HomeScreen() {
  const [postText, setPostText] = useState('');

  /* ================= STORIES ================= */
  const stories: Story[] = [
    { name: 'Add story', add: true },

    { name: 'PE_Sothorn', add: false, img: 'https://i.imgur.com/NuBPU3i.jpeg' },
    { name: 'Pink Pancake', add: false, img: 'https://i.imgur.com/EgR43ht.jpeg' },
    { name: 'Rainny Liw', add: false, img: 'https://i.imgur.com/HBELtpP.jpeg' },

    // ✅ สตอรี่ใหม่ (ใช้ลิงก์ของหนู)
    {
      name: 'Baby AI ✨',
      add: false,
      img: 'https://i.imgur.com/1XKQ9vT.jpeg',
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>

        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <Ionicons name="menu" size={26} color="white" />
          <Text style={styles.logo}>facebook</Text>
          <View style={styles.rightButtons}>
            <IconBtn name="add" />
            <IconBtn name="search" />
            <IconBtn name="chatbubble" />
          </View>
        </View>

        {/* ================= POST INPUT ================= */}
        <View style={styles.postBox}>
          <Image
            source={{ uri: 'https://i.imgur.com/4bNv2RP.jpeg' }}
            style={styles.avatar}
          />

          <TextInput
            style={styles.postInput}
            placeholder="คุณกำลังคิดอะไรอยู่"
            placeholderTextColor="#B0B3B8"
            value={postText}
            onChangeText={setPostText}
          />

          <Ionicons name="image" size={24} color="#45BD62" />
        </View>

        {/* ================= STORY BAR ================= */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storybar}
        >
          {stories.map((item, i) => (
            <TouchableOpacity
              key={i}
              style={styles.storyItem}
              activeOpacity={0.8}
              onPress={() => {
                if (!item.add) {
                  router.push({
                    pathname: '/story',
                    params: {
                      image: item.img,
                      name: item.name,
                    },
                  });
                }
              }}
            >
              {item.add ? (
                <View style={styles.addStory}>
                  <Ionicons name="add" size={30} color="white" />
                </View>
              ) : (
                <View style={styles.storyBorder}>
                  <Image
                    source={{ uri: item.img }}
                    style={styles.storyImage}
                  />
                </View>
              )}

              <Text style={styles.storyText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* ================= POST เดิม ================= */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: 'https://i.imgur.com/4bNv2RP.jpeg' }}
              style={styles.postAvatar}
            />
            <View>
              <Text style={styles.postName}>ช้อปขั้นเทพ</Text>
              <Text style={styles.postTime}>5 วัน</Text>
            </View>
          </View>

          <Text style={styles.postText}>พึ่งตื่นครับนุดด 🥺</Text>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/post',
                params: { image: 'https://i.imgur.com/NuBPU3i.jpeg' },
              })
            }
          >
            <Image
              source={{ uri: 'https://i.imgur.com/NuBPU3i.jpeg' }}
              style={styles.postImage}
            />
          </TouchableOpacity>
        </View>

        {/* ================= POST ใหม่ (เพิ่มให้) ================= */}
        <View style={styles.postCard}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: 'https://i.imgur.com/4bNv2RP.jpeg' }}
              style={styles.postAvatar}
            />
            <View>
              <Text style={styles.postName}>Baby AI ✨</Text>
              <Text style={styles.postTime}>เมื่อสักครู่</Text>
            </View>
          </View>

          <Text style={styles.postText}>
            วันชิล ๆ กับมุมโปรดของเรา 🐱💙
          </Text>

          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/post',
                params: { image: 'https://i.imgur.com/1XKQ9vT.jpeg' },
              })
            }
          >
            <Image
              source={{ uri: 'https://i.imgur.com/1XKQ9vT.jpeg' }}
              style={styles.postImage}
            />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const IconBtn = ({ name }: { name: any }) => (
  <TouchableOpacity style={styles.iconBtn}>
    <Ionicons name={name} size={20} color="white" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#18191A' },
  container: { backgroundColor: '#18191A' },

  header: { flexDirection: 'row', alignItems: 'center', padding: 12 },
  logo: {
    color: '#1877F2',
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  rightButtons: { flexDirection: 'row', gap: 8 },
  iconBtn: {
    backgroundColor: '#3A3B3C',
    padding: 8,
    borderRadius: 20,
  },

  postBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#242526',
    margin: 12,
    padding: 10,
    borderRadius: 12,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },

  postInput: {
    flex: 1,
    backgroundColor: '#3A3B3C',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    color: 'white',
  },

  storybar: { paddingLeft: 12, paddingBottom: 10 },
  storyItem: { width: 90, marginRight: 10 },

  storyBorder: {
    width: 80,
    height: 120,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#1877F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyImage: {
    width: 72,
    height: 112,
    borderRadius: 12,
  },

  addStory: {
    width: 80,
    height: 120,
    borderRadius: 14,
    backgroundColor: '#3A3B3C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storyText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },

  postCard: {
    backgroundColor: '#242526',
    marginTop: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postName: { color: '#fff', fontWeight: 'bold' },
  postTime: { color: '#B0B3B8', fontSize: 12 },
  postText: { color: '#fff', paddingHorizontal: 10, marginBottom: 8 },
  postImage: { width: '100%', height: 420 },
});
