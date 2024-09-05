import React , {useState} from 'react'
import Header from '../components/Header'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import {Gents,Ladies} from '../data'
import WomenCollection from '../components/WomenCollection'

const MainPage = () => {
    console.log('Ladies',Ladies)
    const [gentsFashion , setGentsFashion] =useState(Gents);
    const [ladiesFashion, setLadiesFashion] = useState(Ladies);
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Collection gentsFashion={gentsFashion}></Collection>
            <WomenCollection ladiesFashion={ladiesFashion} ></WomenCollection>
            <Footer></Footer>
        </div>
    )
}

export default MainPage