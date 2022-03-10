import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const ProfileScreen = ({ route }) => {

    return (
      <View>
        <View style={styles.profileTitleView}>
          <Text style={styles.profileTitle}>General Information</Text>
        </View>

        <View style={styles.profileListView}>
          <Text style={styles.primaryText}>Eye color  </Text>
          <Text style={styles.secondaryText}>{route.params.element.eye_color}</Text>
        </View>
        <View style={styles.profileListView}>
          <Text style={styles.primaryText}>Hair Color</Text>
          <Text style={styles.secondaryText}>{route.params.element.hair_color}</Text>
        </View>
        <View style={styles.profileListView}>
          <Text style={styles.primaryText}>Skin Color</Text>
          <Text style={styles.secondaryText}>{route.params.element.skin_color}</Text>
        </View>
        <View style={styles.profileListView}>
          <Text style={styles.primaryText}>Birth Year </Text>
          <Text style={styles.birthYear}>{route.params.element.birth_year}</Text>
        </View>
        <View style={styles.profileTitleView}>
          <Text style={styles.profileTitle}>Vehicles</Text>
        </View>
        <View style={styles.profileListView}>
        <Text style={styles.primaryText} >{route.params.element.vehicles[0].name}</Text>
        </View>
        <View style={styles.profileListView}>
        <Text style={styles.primaryText}>{route.params.element.vehicles[1] ? route.params.element.vehicles[1].name: ""}</Text>
        </View>
      </View>
    ) 
  }

  const styles = StyleSheet.create({
    profileTitleView:{
      paddingLeft: 20,
      paddingBottom:10,
      paddingTop: 30,
    },
    profileTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333333",
    },
    profileListView:{  
      display: "flex", 
      borderBottomColor: "#E6E6E6",
      borderBottomWidth: 1,
      paddingTop: 20,
      paddingLeft:25,
      paddingBottom:20,
      flexDirection: 'row',
    },  
    primaryText:{
      marginRight: 150,
      fontSize: 20,
      fontWeight: "bold",
      color: "#828282",
    },
    secondaryText:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#333333",
      textTransform: 'capitalize',
    },
    birthYear:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#333333",
      textTransform: 'uppercase',
    }
  });

  export default ProfileScreen;