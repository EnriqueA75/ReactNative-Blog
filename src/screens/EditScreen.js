import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';
//import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
import blogContext from '../context/blogContext';

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id')
    const { blogPosts, editBlogPost } = useContext(blogContext)
    const blogPost = blogPosts.find((blogPost) => blogPost.id === id)

    return ( 
        <View>
            <BlogPostForm
                initialValues={{title: blogPost.title, content: blogPost.content}}
                onSubmit={(title, content) => {
                    editBlogPost(id, title, content, () => navigation.pop())
                }}            
            />
        </View>
     );
}
const styles = StyleSheet.create({

})
 
export default EditScreen;