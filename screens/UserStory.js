import { View, Text, Image, StyleSheet } from 'react-native';
import UserProfile from './UserProfile';

const UserStory = ({ name, image }) => {
    return (
        <View style={styles.storyContainer}>
            <UserProfile image={image} imageDimensions={{ width: 60, height: 60 }} />
            <Text style={styles.storyName}>{name}</Text>
        </View>
    );
};

export default UserStory;

const styles = StyleSheet.create({
   storyContainer: {
        alignItems: 'center',
        marginRight: 16,
        padding: 8,
        gap: 8,
        height: 100,
    },
    storyImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: 2,
        borderRadius: 50,
        overflow: 'hidden',
        padding: 2,
    },
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    }
});