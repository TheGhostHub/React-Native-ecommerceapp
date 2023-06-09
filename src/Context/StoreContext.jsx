
import { createContext, useEffect, useState } from 'react';
import React from 'react'
import db from '../DB/data.json'

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
    //Client
    const [data, setData] = useState([]);
    const [basket, setBasket] = useState([]);
    const [nbrsProductsBag, setNbrsProductbag] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [PurchaseHistory, setPurchaseHistory] = useState([]);
    const [nbrsPurchaseHistory, setNbrsPurchaseHistory] = useState(0);

    //Admin
    const [received, setReceived] = useState([])
    const [allClosed, setAllClosed] = useState([]);
    const [packed, setPacked] = useState([]);

    const RandomOrderNumber = (max) => {
        return Math.floor(Math.random() * max);
    }
    const loadData = async () => {
        try {
            let res = db;
            setData(res);
        } catch (error) {
            console.log(error);
        }
    }
    const dateTime = () => {
        let day = new Date().getDate()
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        return day + '/' + month + '/' + year;
    }

    useEffect(() => {
        loadData();
    }, [])
    return (
        <StoreContext.Provider value={{ setData, data, setBasket, basket, nbrsProductsBag, setNbrsProductbag, setTotalPrice, totalPrice, setPurchaseHistory, PurchaseHistory, setNbrsPurchaseHistory, nbrsPurchaseHistory, dateTime, RandomOrderNumber, received, setReceived, setAllClosed, allClosed,packed,setPacked }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider