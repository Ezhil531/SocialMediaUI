import {Text, View, Image, StyleSheet} from 'react-native';
import UserProfile from './UserProfile';

const Post = ({  image }) => {
    return (
       <View style={styles.storyImageContainer}>
            <Image source={image} />
        </View>
    );
};

export default Post;

const styles = StyleSheet.create({
    storyImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
