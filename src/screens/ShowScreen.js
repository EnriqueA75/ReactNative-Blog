import React, {  useContext } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
//import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'
import blogContext from '../context/blogContext';

const ShowScreen = ({navigation}) => {

    const { blogPosts } = useContext(blogContext)
    const id = navigation.getParam('id')
    const blogPost = blogPosts.find((blogPost) => blogPost.id === id)

    return ( 
        <View>
            <View>
                <Text style={styles.titleStl}>{blogPost.title}</Text>
            </View>
            <View>
                <Text style={styles.contentStl}>{blogPost.content}</Text>
            </View>
        </View>
    );
}
ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
        <TouchableOpacity 
            onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}   
            style={{marginRight: 10}}>
            <Feather name="edit" size={24} style={{ color: '#2C3E50' }}/>
        </TouchableOpacity>
        ),
    };
}; 
 const styles = StyleSheet.create({
    titleStl: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: 'center',
        color: '#34495E'
    },
    contentStl: {
        fontSize: 16,
        marginTop: 10,
        alignSelf: 'center',
        color: '#616A6B',
        marginHorizontal: '8%'
    },

 })
export default ShowScreen;