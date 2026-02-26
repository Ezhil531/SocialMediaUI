import {Text, View, Image, StyleSheet} from 'react-native';
import UserProfile from './UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import Post from './Post';

const UserPost = ({ name, image, likes, comments, bookmarks }) => {
    return (
        <View style={styles.postContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' , alignItems: 'center'}}>
            <View style={styles.postHeader}>
                <UserProfile image={image} imageDimensions={{ width: 30, height: 30}} />
                <Text style={styles.postName}>{name}</Text>
            </View>
                <FontAwesomeIcon icon={faEllipsisH} color="#898DAE" />
            </View>
            <Post image={image} />
            <View style={{ flexDirection: 'row', width: '100%'}}>
            <View style={styles.postStats}>
                <Text style={styles.postStat}>{likes}</Text>
                <FontAwesomeIcon icon={faHeart} color="#F35BAC" />
            </View>
            <View style={styles.postStats}>
                <Text style={styles.postStat}>{comments}</Text>
                <FontAwesomeIcon icon={faComment} color="#898DAE" />
            </View>
            <View style={styles.postStats}>
                <Text style={styles.postStat}>{bookmarks}</Text>
                <FontAwesomeIcon icon={faBookmark} color="#898DAE" />
                </View>
            </View>
        </View>
    );
};

export default UserPost;

const styles = StyleSheet.create({
    postContainer: {
        alignItems: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: "#EFEFE5",
        padding: 16,
        gap: 10,
    },
    postName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    postStats: {
        flexDirection: 'row',
        alignItems: 'center',   
        gap: 4,
        marginTop: 4,
        marginRight: 16,
    },
    postStat: {
        fontSize: 14,
        color: '#898DAE',
        marginLeft: 4,
    },
});