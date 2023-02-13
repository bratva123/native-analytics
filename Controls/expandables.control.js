import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ExpandCollapse = ({ title, children, isExpanded, setExpanded }) => {
    const Content = children()
    const scrollViewRef = useRef(null);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setExpanded(!isExpanded)}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <MaterialIcons
                        name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={24}
                        color='black'
                    />
                </View>
            </TouchableOpacity>
            {
                isExpanded &&
                <View
                    style={styles.content}
                    ref={scrollViewRef}
                >
                    {Content}
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        padding: 10
    },
    titleContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    content: {
        overflow: 'scroll',
        width: "100%",
        height: 200,
    },
});

export default ExpandCollapse;
