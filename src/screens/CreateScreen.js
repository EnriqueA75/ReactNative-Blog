import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
//import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import blogContext from '../context/blogContext';

const CreateScreen = ( {navigation }) => {

    const { addBlogPost } = useContext(blogContext)

    return ( 
        <View>
            <BlogPostForm
                onSubmit={(title, content) => {
                    addBlogPost(title, content, () => navigation.navigate('Index'))
                }}
            />
        </View>
     );
}
 const styles = StyleSheet.create({

 })
export default CreateScreen;