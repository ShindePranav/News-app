import React,{useState,useEffect} from 'react'
import { View,FlatList} from 'react-native'
import Cards from '../components/Cards'
import DATA from "../apis/data"
import Screen from "../components/Screen"
import SearchBar from '../components/SearchBar'
import store from '../reduxstore/store'
import {newsLiked,setData} from '../reduxstore/actions'


export default function MainScreen({navigation}) {
  const [selectedId, setSelectedId] = useState("");
  const [news, setNews] = useState(DATA)
  
  //Use as ComponentDidMount Hook to unitialize data in redux
  useEffect(() => {
    store.dispatch(setData(DATA))
  }, [])
  

  const unsubscribe= store.subscribe(()=>{
    console.log("store  updated");
    //Just to see if the state is updated
  })
  
  const handleLike=(item)=>{
  store.dispatch(newsLiked(item.id))
  setNews(store.getState())
  }
  

  const handleSearch=(searchText)=>{
    //does comparision and filters result
    const updated=DATA.filter(i=>i.title.toLowerCase().includes(searchText.toLowerCase()))
    setNews(updated)
  }
  const handlePress=(details)=>{
    //alert(details)
    navigation.navigate('Details',details)
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return (
      <Cards
        title={item.title}
        shortDescription ={item.shortDescription}
        date ={item.date}
        readMins = {item.readMins}
        img ={item.img}
        onPress={()=>{handlePress(item)} }
        style={{ backgroundColor }}
        onLike={()=>{handleLike(item)}}
        liked={item.liked}
      />
    );
  };

  return (
      <Screen>
      <SearchBar 
      icon="search"
      placeholder="Search Here"
      onChangeText={handleSearch}
      />
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height:150}}
      />
    </Screen>
  );
}

