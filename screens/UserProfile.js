import { Text, View, TouchableOpacity, StyleSheet , Image} from "react-native";

const UserProfile = ({ image , imageDimensions}) => {
    return (
        <View style={styles.storyImageContainer}>
            <Image source={image} style={{ width: imageDimensions.width, height: imageDimensions.height , borderRadius: imageDimensions.width }} />
        </View>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
   storyImageContainer: {
        borderColor: '#F35BAC',
        borderWidth: 2,
        borderRadius: 50,
        overflow: 'hidden',
        padding: 2,
    },
}); 