import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'

const Expense = () => {

  const[name,setName] = useState("")
  const[status,setStatus] = useState("")
  const[date,setDate] = useState("")
  const[amount, setAmount] = useState(635);
  const[income, setIncome] = useState(0);
  const[expense, setExpense] =useState(0)
  const[items, setItems] = useState([
    {id: 0, 
    name:"Heroku",
    date:"March 07",
    status:"Complete",
    amount:8.96
  },
  {id: 1, 
    name:"Walmart",
    date:"March 07",
    status:"Pending",
    amount:18.96
  }
  ])

  const handleAddItem = () => {
    const newExpense = {
      id: Math.random().toString(),
      name: name, date:date,
        status:"Complete",
      amount: amount,
     
    };
    setItems([...items, newExpense]);
    setName('');
    setDate();
    setStatus();
    setAmount('');
  };

  const handleDeleteItem = id => {
    const filteredItems = items.filter(item => item.id !== id);
    setItems(filteredItems);
  };

  const History = ({ amount, name, date, status,income }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor:"white",
          marginTop:10, padding:20, borderRadius:10
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
          <Text>
            {date} | <Text style={{color:status ==="Pending"? "red":"green"}}>{status}</Text> 
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", color:income?"green" :"blue" }}>${amount}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={{padding:20,backgroundColor:'#F8F8FF'}}>
              <Text style={{fontWeight:'bold', }}>TRANSACTIONS</Text>
      <View style={{ flexDirection: "row"}}>
        <View style={{marginTop:10, flexDirection:'row'}}>
          <TouchableOpacity style={{ flexDirection:'row', backgroundColor: 'white', width:160,padding:20, justifyContent:'center',borderRadius:10}}>
            <View style={{backgroundColor:'#E4FBEA', padding:20, marginHorizontal:10, borderRadius:200}}>
              <Ionicons color="#4AE378" name="caret-up-outline" size={15}/>
            </View>
              <View style={{marginHorizontal:10,marginTop:5}}>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#4AE378"}}>+24%</Text>
                <Text>Income</Text>
              </View>
          </TouchableOpacity>
      <View style={{marginHorizontal:14}}/>
          <TouchableOpacity style={{flexDirection:'row', backgroundColor: 'white', width:160,padding:20, justifyContent:'center',borderRadius:10}}>
            <View style={{backgroundColor:'#F4E6D1', padding:20, marginHorizontal:10, borderRadius:200}}>
              <Ionicons color="#F79506" name="caret-down-outline" size={15}/>
            </View>
              <View style={{marginHorizontal:10,marginTop:5}}>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#F79506"}}>-54%</Text>
                <Text>Expense</Text>
              </View>
          </TouchableOpacity>
          
        </View>

      </View>
      <View style={{marginTop:20}}><TextInput
        placeholder="Expense"
        value={name}
        onChangeText={text => setName(text)}
        style={{ padding: 15, marginBottom: 10, backgroundColor:'white', borderRadius:10  }}
      />
       <TextInput
        placeholder="Date"
        value={date}
        onChangeText={text => setDate(text)}
        style={{  padding: 15, marginBottom: 10, backgroundColor:'white', borderRadius:10 }}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={text => setAmount(text)}
        style={{ padding: 15, marginBottom: 10, backgroundColor:'white', borderRadius:10  }}
      />
      <Button title="Add Expense" onPress={handleAddItem} /></View>
      
      <FlatList
      data={items}
      renderItem={({item}) => 
      <History  
      name={item.name}
      date={item.date}
      status={item.status}
      amount={item.amount}/>}
      keyExtractor = {item => items.id}
      />
    </ScrollView>
  )
}

export default Expense

const styles = StyleSheet.create({})