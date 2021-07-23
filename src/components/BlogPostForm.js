import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return ( 
        <View>
            <Text style={styles.titleStl}>Enter title</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputStl}
                placeholder="Title"
            />
            <Text style={styles.titleStl}>Enter content</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.inputStl}
                placeholder="Content"
            />
            <TouchableOpacity 
                style={styles.btnStl}
                onPress={() => onSubmit(title, content)}
            >
                <Text style={styles.btnTxtStl}>yep</Text>
            </TouchableOpacity>
        </View>
     );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

 const styles = StyleSheet.create({
    inputStl: {
        padding: 10,
        height: 50,
        backgroundColor: '#FFF',
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center',
        borderRadius: 10,
        fontWeight: 'bold',
        borderColor: '#2C3E50',
        borderWidth: 1,
        marginHorizontal: '10%',
    },
    titleStl: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: '#2C3E50'
    },
    btnStl: {
        backgroundColor: '#A569BD',
        marginHorizontal: '10%',
        marginVertical: 15,
        borderRadius: 5,
        padding: 5
    },
    btnTxtStl: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    }
 })
export default BlogPostForm;