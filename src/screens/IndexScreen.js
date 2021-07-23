import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import blogContext from '../context/blogContext';

const IndexScreen = () => {

    const BlogContext = useContext(blogContext)

    return ( 
        <View>
            <Text>{BlogContext}</Text>
        </View>
     );
}
const styles = StyleSheet.create({

})

export default IndexScreen;