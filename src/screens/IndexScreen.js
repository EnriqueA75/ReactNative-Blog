import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const {state, deleteBlogPost, getBlogPost} = useContext(Context)

    useEffect(() => {
        getBlogPost()
        const listener = navigation.addListener('didFocus', () => {
            getBlogPost()
        })
        return () => {
            listener.remove()
        }
    }, [])

    return ( 
        <View>         
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.rowStl}>
                                <Text style={styles.titleStl}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash-2" style={styles.iconStl}/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
     );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{marginRight: 10}}>
            <Feather name="plus" size={30} style={{ color: '#2C3E50' }}/>
        </TouchableOpacity>
        ),
    };
}; 

const styles = StyleSheet.create({
    rowStl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#515A5A',
        paddingHorizontal: '5%'
    },
    titleStl: {
        fontSize: 18,
    },
    iconStl: {
        fontSize: 22,
        color: '#EC7063'
    },
    btnAddStl: {
        backgroundColor: '#A569BD',
        marginHorizontal: '10%',
        marginVertical: 15,
        borderRadius: 5,
        padding: 5
    },
    txtAddStl: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export default IndexScreen;