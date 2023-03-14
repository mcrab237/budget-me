import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  const [amount, setAmount] = useState(1000);
  const [checking, setChecking] = useState(632);
  const [pressed, isPressed] = useState(true);

  const handlePress = () => {
    isPressed(!pressed);
  };
  const Slots = ({ name, icon, color, checking, arrow }) => {
    return (
      <View
        style={{
          paddingVertical: 10,
          borderWidth: 0.5,
          borderRadius: 10,
          paddingHorizontal: 5,
          flexDirection: "row",
          borderColor: "grey",
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: "row", flex: 1 }}>
          <AntDesign
            name={icon}
            size={24}
            color={color}
            style={{ marginHorizontal: 15 }}
          />
          <Text style={{ marginTop: 2, fontWeight: "bold" }}>{name}</Text>
        </View>
        {arrow ? (
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 15, marginHorizontal: 10 }}
            >
              ${checking}
            </Text>
            <TouchableOpacity onPress={handlePress}>
              <AntDesign
                name={pressed ? "arrowdown" : "arrowup"}
                size={15}
                color="black"
                style={{ marginTop: 3, marginRight: 5 }}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginHorizontal: 10,
                  color: "blue",
                }}
              >
                Add
              </Text>

              <AntDesign
                name={"plus"}
                size={15}
                color="blue"
                style={{ marginTop: 3, marginRight: 5 }}
              />
            </TouchableOpacity>
          </View>
        )}
       
      </View>
    );
  };

  const Upcoming = ({ icon, amount, days, name, color }) => {
    return (
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            borderWidth: 0.6,
            alignItems: "center",
            paddingVertical: 15,
            width: 110,
            borderRadius: 10,
            marginRight: 15,
          }}
        >
          <AntDesign name={icon} color={color} size={25} />
          <Text style={{ marginTop: 12 }}>{name}</Text>
          <Text style={{ fontWeight: "bold", marginVertical: 3 }}>
            ${amount}
          </Text>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
              alignSelf: "stretch",
              width: "100%",
              borderColor: "#FFF7EE",
            }}
          />
          <Text>IN {days} DAYS</Text>
        </View>
      </View>
    );
  };

  const History = ({ amount, name, date, status,income }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
          alignSelf: "stretch",
          width: "100%",
          borderColor: "#FFF7EE",
          paddingVertical:10
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
    <ScrollView style={styles.container}>
      <StatusBar />
      <View
        style={{
          marginTop: 40,
          paddingHorizontal: 15,
          backgroundColor: "#1D9BF0",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Feather name="settings" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Fri, Feb 19</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            paddingTop: 20,
            borderRadius: 15,
            paddingBottom: 60,
          }}
        >
          <View>
            <Text>Current spend this month</Text>
            <Text style={{ fontWeight: "bold", fontSize: 30 }}>$1000</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons
              style={{
                backgroundColor: "green",
                borderRadius: 50,
                position: "absolute",
                right: 100,
              }}
              name="arrow-upward"
              size={24}
              color="white"
            />
            <View>
              <Text style={{ maxWidth: 100 }}>$500 More than last month</Text>
            </View>
            
          </View>
          
        </View>
        
      </View>
      </View>


      <View style={{ backgroundColor: "white", flex: 1, marginTop: 40 }}>
        <View style={{ padding: 15 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontWeight: "bold" }}>SERVICES</Text>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="sync" size={15} color="black" />
              <Text> Synced 10 minutes ago</Text>
            </View>
          </View>
          <View>
            <Slots
              color="blue"
              icon="bank"
              name="Checking"
              checking={checking}
              arrow={true}
            />
            {!pressed ? (
              <TouchableOpacity>
                <View
                  style={{ flexDirection: "row", backgroundColor: "#FCFFF5" }}
                >
                  <View style={{ flex: 1, padding: 15 }}>
                    <View>
                      <Text style={{ padding: 5, fontWeight: "bold" }}>
                        Adv Plus Banking
                      </Text>
                      <Text>****8542 | Bank Of America</Text>
                    </View>
                  </View>
                  <Text style={{ padding: 15, fontWeight: "bold" }}>
                    ${checking}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}
            <Slots
              color="blue"
              icon="creditcard"
              name="Card Balance"
              checking={checking}
              arrow={false}
            />
            <Slots
              color="blue"
              icon="database"
              name="Investments"
              checking={checking}
              arrow={false}
            />
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontWeight: "bold" }}>UPCOMING</Text>
            <ScrollView horizontal={true}>
              <Upcoming
                name="Youtube"
                icon="youtube"
                amount={7.99}
                days={2}
                color="red"
              />
              <Upcoming name="Google" icon="google" amount={10.5} days={12} />
              <Upcoming
                name="Facebook"
                icon="facebook-square"
                amount={87.6}
                days={15}
                color="blue"
              />
              <Upcoming
                name="Chegg"
                icon="book"
                amount={19.9}
                days={20}
                color="orange"
              />
            </ScrollView>
          </View>

          <View>
            <Text style={{ fontWeight: "bold", marginVertical: 15 }}>
              RECENT TRANSACTIONS
            </Text>

            <View>
              <History
                name="Chevron"
                date="March 12"
                status="Pending"
                amount={25.5}
              />
              <History
                name="Subway"
                date="March 09"
                status="Pending"
                amount={23.54}
              />
               <History
                name="Google"
                date="March 08"
                status="Complete"
                amount={108.96}
                income = {true}
              />
              <History
                name="Walmart Purchase"
                date="March 08"
                status="Complete"
                amount={1528.96}
              />
                <History
                name="Heroku"
                date="March 07"
                status="Complete"
                amount={8.96}
              />
               <History
                name="Kennesaw State University"
                date="March 07"
                status="Complete"
                amount={868.96}
                income={true}
              />
               
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1D9BF0",
    flex: 1,
  },
});
