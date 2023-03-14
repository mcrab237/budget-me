import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Settings = () => {


  return (
    <ScrollView >
    <SafeAreaView style={{ backgroundColor: "#F8F8FF", flex: 1 }}>
      <TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#F8F8FF",
            paddingVertical: 15,
            bottom: 20,
            marginTop:30
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
              marginHorizontal: 10,
            }}
            source={{
              uri: "https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/308127252_481256974016941_6123110286601590751_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eqy8AQq2BDMAX8qNy6L&_nc_ht=scontent-atl3-2.xx&oh=00_AfAoNF5TpgBJl6LDzmdikVIQ519oIUc0DMMOm2ETeCJuMQ&oe=64146824",
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
        <Text style={{ color: "#0053C5", fontWeight: "bold", fontSize: 18 }}>
          Account
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="person-outline"
            size={20}
          />

          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            ATO
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
              color: "#0053C5",
              marginHorizontal: 0,
            }}
          >
            Online
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="call-outline"
            size={20}
          />

          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            2918848948
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
              color:"green",
              marginHorizontal: 0,
            }}
          >
            Verified
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="mail-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            tony@gmail.com
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginTop: 10,
              marginBottom: 10,
              color: "green",
              marginHorizontal: 0,
            }}
          >
            verified
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
        <Text style={{ color: "#0053C5", fontWeight: "bold", fontSize: 18 }}>
          Settings
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="alert-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Display Mode
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="notifications-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Notifications and Sounds
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="chatbox-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Chat Settings
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="laptop-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Devices
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 20, marginTop: 25 }}>
        <Text style={{ color: "#0053C5", fontWeight: "bold", fontSize: 18 }}>
          Contact us
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="alert-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Contact Support
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="book-outline"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Terms and Conditions
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="logo-facebook"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            facebook
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          marginTop: 5,
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 5,
          }}
        >
          <Ionicons
            style={{ marginTop: 10, marginHorizontal: 10 }}
            name="logo-twitter"
            size={20}
          />
          <Text style={{ fontSize: 17, marginTop: 10, marginBottom: 10 }}>
            Twitter
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 102, marginVertical: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 20,
            borderWidth: 1,
          }}
        >
          <Text style={{ textAlign: "center" }}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  </ScrollView>
  )
}

export default Settings

const styles = StyleSheet.create({})