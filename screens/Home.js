import React from 'react';
import { View, Text , TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getFontFamily } from '../assets/fonts/helper';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import UserStory from './UserStory';
import {useState,useEffect} from 'react';
import UserPost from './UserPost';

const Home = () => {
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedStories, setDisplayedStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [currentPagePosts, setCurrentPagePosts] = useState(1);
    const [displayedPosts, setDisplayedPosts] = useState([]);
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const paginatedStories = pagination(userStories, currentPage, pageSize);
        setDisplayedStories(paginatedStories);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        setIsLoadingPosts(true);
        const paginatedPosts = pagination(userProfile, currentPagePosts, pageSize);
        setDisplayedPosts(paginatedPosts);
        setIsLoadingPosts(false);
    }, []);

    const pagination = (data , currentPage , pageSize) => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= data.length) {
            return [];
        }
        return data.slice(startIndex, endIndex);
    };

    const userStories = [
        { id: 1, name: 'Alice', image: require('../assets/images/default_profile.png') },
        { id: 2, name: 'Bob', image: require('../assets/images/default_profile.png') },
        { id: 3, name: 'Charlie', image: require('../assets/images/default_profile.png') },
        { id: 4, name: 'David', image: require('../assets/images/default_profile.png') },
        { id: 5, name: 'Eve', image: require('../assets/images/default_profile.png') },
        { id: 6, name: 'Frank', image: require('../assets/images/default_profile.png') },
        { id: 7, name: 'Grace', image: require('../assets/images/default_profile.png') },
        { id: 8, name: 'Hannah', image: require('../assets/images/default_profile.png') },
        { id: 9, name: 'Ivan', image: require('../assets/images/default_profile.png') },
        { id: 10, name: 'Judy', image: require('../assets/images/default_profile.png') },
        { id: 11, name: 'Karl', image: require('../assets/images/default_profile.png') },
        { id: 12, name: 'Leo', image: require('../assets/images/default_profile.png') },
        { id: 13, name: 'Mallory', image: require('../assets/images/default_profile.png') },
        { id: 14, name: 'Nina', image: require('../assets/images/default_profile.png') },
        { id: 15, name: 'Oscar', image: require('../assets/images/default_profile.png') },
    ];
    const userProfile = [{ id: 1, name: 'Alice', image: require('../assets/images/default_post.png'), likes: 120, comments: 300, bookmarks: 180 },
        { id: 2, name: 'Bob', image: require('../assets/images/default_post.png'), likes: 100, comments: 200, bookmarks: 150 },
        { id: 3, name: 'Charlie', image: require('../assets/images/default_post.png'), likes: 80, comments: 100, bookmarks: 120 },
        { id: 4, name: 'David', image: require('../assets/images/default_post.png'), likes: 90, comments: 150, bookmarks: 130 },
        { id: 5, name: 'Eve', image: require('../assets/images/default_post.png'), likes: 110, comments: 250, bookmarks: 140 },
        { id: 6, name: 'Frank', image: require('../assets/images/default_post.png'), likes: 70, comments: 80, bookmarks: 100 },
        { id: 7, name: 'Grace', image: require('../assets/images/default_post.png'), likes: 130, comments: 350, bookmarks: 200 },
        { id: 8, name: 'Hannah', image: require('../assets/images/default_post.png'), likes: 60, comments: 90, bookmarks: 110 },
        { id: 9, name: 'Ivan', image: require('../assets/images/default_post.png'), likes: 95, comments: 120, bookmarks: 160 },
        { id: 10, name: 'Judy', image: require('../assets/images/default_post.png'), likes: 85, comments: 110, bookmarks: 140 },
        { id: 11, name: 'Karl', image: require('../assets/images/default_post.png'), likes: 75, comments: 100, bookmarks: 130 },
        { id: 12, name: 'Leo', image: require('../assets/images/default_post.png'), likes: 90, comments: 120, bookmarks: 150 },
    ];
    return (
        <SafeAreaView style={{
            flex: 1, padding: 16
        }}>
           {/* Posts Section */}
            <View style={{ marginBottom: 16 ,}}>
                <FlatList
                    ListHeaderComponent={
                        <>
                        <View style={styles.container}>
                        <Title title="Let's Explore" />
                        <TouchableOpacity onPress={() => console.log('Profile icon pressed')} activeOpacity={0.7} style={styles.profileIconContainer}>
                        <FontAwesomeIcon icon={faEnvelope} color='#898DAE' />
                        <View style={styles.notificationBadge}>
                        <Text style={styles.notificationText}>2</Text>
                        </View>
                        </TouchableOpacity>
                    {/* Stories Section */}
                        </View>
                    <FlatList
                    data={displayedStories}
                    renderItem={({ item }) => (
                        <UserStory name={item.name} image={item.image} />
                    )}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (!isLoading) {
                        const nextPage = currentPage + 1;
                        const paginatedStories = pagination(userStories, nextPage, pageSize);
                        if (paginatedStories.length > 0) {
                            setDisplayedStories(prevStories => [...prevStories, ...paginatedStories]);
                            setCurrentPage(nextPage);
                        }
                    }
                }}
            /></>}
                data={displayedPosts}
                renderItem={({ item }) => (
                    <UserPost key={item.id} name={item.name} image={item.image} likes={item.likes} comments={item.comments} bookmarks={item.bookmarks} />
                )}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                    if (!isLoadingPosts) {
                        const nextPage = currentPagePosts + 1;
                        const paginatedPosts = pagination(userProfile, nextPage, pageSize);
                        if (paginatedPosts.length > 0) {
                            setDisplayedPosts(prevPosts => [...prevPosts, ...paginatedPosts]);
                            setCurrentPagePosts(nextPage);
                        }
                    }
                }}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontFamily: getFontFamily('Inter', '600'),
    },
    profileIconContainer: {
        padding: 14,
        backgroundColor: '#F9F9FB',
        borderRadius: 50,
    },
    notificationBadge: {
        position: 'absolute',
        top: 6,
        right: 6,
        backgroundColor: '#F35BAC',
        borderRadius: 8,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    notificationText: {
        color: '#FFFFFF',
        fontSize: 8,
        fontFamily: getFontFamily('Inter', '600'),
    },
 
}); 