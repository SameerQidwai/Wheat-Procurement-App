import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon, Text } from '@ui-kitten/components';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import PartiesScreen from '../screens/PartiesScreen';
import WheatScreen from '../screens/WheatScreen';
import BardanaScreen from '../screens/BardanaScreen';

import { BACK_COLOR, BASE_COLOR, DEAFULT_FONT_SIZE, GRAY_COLOR } from '../../Global';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

class AppNavigator extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={props => {
                    return (
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            <DrawerItem
                                label={() => <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Logout</Text>}
                                onPress={() => {
                                    this.props.removeData()
                                }} />
                        </DrawerContentScrollView>
                    )
                }}
                screenOptions={() => ({
                    headerTitle: this.props.institute,
                    headerStyle: {
                        backgroundColor: BACK_COLOR,
                        elevation: 0,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                    },
                    drawerStyle: {
                        backgroundColor: BASE_COLOR,
                        width: 240,
                    },
                    drawerActiveTintColor: 'white',
                    drawerInactiveTintColor: 'white'
                })}
            >
                <Drawer.Screen name="Dashboard" component={HomeScreen} options={{ unmountOnBlur: true }} />
                <Drawer.Screen name="Farmers" component={PartiesScreen} options={{ unmountOnBlur: true }} />
                <Drawer.Screen name="Bardana" component={BardanaScreen} options={{ unmountOnBlur: true }} />
                <Drawer.Screen name="Wheat" component={WheatScreen} options={{ unmountOnBlur: true }} />
            </Drawer.Navigator>
        );
    }
}

export default AppNavigator;