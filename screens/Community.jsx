import React, { useState } from 'react';
import { View, Text, ScrollView } from "react-native";
import styles from "../assets/style/styles";
import Post from '../components/PostPreview';
import dummy from '../assets/dummy';

export default function Community() {
  const [postData, setPostData] = useState(dummy);

  //useEffect(() => {
  //  setPostData(handlePostFetchRequest());
  //});

  return (
    <View style={styles.container}>
      <ScrollView style={styles.postContainer}>
        { postData.map(post => (
          <Post data={ post } key={ post.id }/>
        )) }
      </ScrollView>
    </View>
  )
};