import { Text, View, Image, StyleSheet, FlatList } from 'react-native';

const PostSection = ({ posts }) => {
    return (<FlatList
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
            />);
}
