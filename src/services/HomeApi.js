import React from 'react';
import axios from 'axios';
import { IP } from '../../Global'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native';
import { Auth } from '../../App';

export const getStats = async () => {
    const link = `${IP}/dashboard`;
    const jsonValue = await AsyncStorage.getItem('@data')
    const token = "Bearer " + JSON.parse(jsonValue).token

    const header = {
        Authorization: token
    }

    try {
        const res = await axios.get(link, { headers: header })
        // console.log('RES: ', res.data)
        return (res.data)
    } catch (e) {
        // console.log('e -> 20', e.response)
        if (e?.response?.data?.message == 'Unauthenticated.') {
            // Calling thr global function to logout..
            Auth()
        }
        ToastAndroid.show(e?.response?.status == 500 ? 'Something went wrong' : e?.response?.data?.message, ToastAndroid.LONG)
        return ({ success: false, message: e?.response?.data?.message })
    }
}