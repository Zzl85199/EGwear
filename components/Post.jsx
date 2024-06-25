import { View, Text } from "react-native";
import styles from "../assets/style/styles";

const Post = ({ route }) => {
  const { postId } = route.params;

  return (
  <View style={styles.container}>
    <Text>Post ID: {postId}</Text>
  </View>
  )
}

export default Post;