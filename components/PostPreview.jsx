import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../assets/style/styles";
import { useNavigation } from '@react-navigation/native';

const PostPreview = ({data}) => {
  const navigation = useNavigation();

  const handleDirectToPostContent = (id) => {
    navigation.navigate("post", {postId: id});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleDirectToPostContent(data.id)}>
      <Image 
        style={styles.postThumbnail} 
        source={{
          uri: data.thumbnail,
        }}/>
      <Text>{data.title}</Text>
    </TouchableOpacity>
  )
}

export default PostPreview;