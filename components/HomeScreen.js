import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

class HomeScreen extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading: true,
      };
    }

  
    componentDidMount() {
      this.apiCall();
    }
  
    async apiCall() {
      for (let i = 1; i <= 83; i++) {
        if (i === 17) {
          continue;
        }
        let resp = await fetch(`https://swapi.dev/api/people/${i}`);
        let respJson = await resp.json();
        respJson.id = i;
        if (respJson.species[0]) {
          respSpecies = await fetch(respJson.species[0]);
          respJson.species = await respSpecies.json();
        } else {
          respSpecies = await fetch("https://swapi.dev/api/species/1/");
          respJson.species = await respSpecies.json();
        }
        respHomeWorld = await fetch(respJson.homeworld);
        respJson.homeworld = await respHomeWorld.json();
        let respVehicles = []
        let waiting
        if(respJson.vehicles.length != 0){
            for(let j = 0; j < respJson.vehicles.length; j++){
                respVehicles[j] = await fetch(respJson.vehicles[j]);
                respJson.vehicles[j] = await respVehicles[j].json()
            }
        } else {
            waiting = await fetch(`https://swapi.dev/api/people/${i}`);
            respJson.vehicles[0] = 'None';
        }
        this.setState((prevState) => ({
          data: [...prevState.data, respJson],
        }));
      }
      this.state.loading = false;
      console.log(this.state.data)
    }
  
    list() {
      return this.state.data.map((element) => {
        return (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile', {element})}>
            <View style={styles.listItem} key={element.id}>
                <View style={{  display: "flex", justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={styles.itemText}>
                    {element.name}
                    </Text>
                    <Icon
                    name="chevron-right"
                    size={20}
                    color="black"
                    type="entypo"
                    style={{ top: 5, right: 5}}
                    />
                </View>
              <Text style={styles.species}>
                {" "}
                {element.species.name} from {element.homeworld.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      });
    }
  
    loadingIcon() {
      if (this.state.loading) {
        return (
          <View>
            <ActivityIndicator
              style={styles.activityIndicator}
              size="small"
              color="#828282"
            ></ActivityIndicator>
          </View>
        );
      } else {
        return;
      }
    }
  
    render() {
      return (
        <View>
          <ScrollView>
              <View style={{paddingBottom: 70}}>
                    {this.list()}  
                    <View>{this.loadingIcon()}</View>
              </View>
            </ScrollView>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    activityIndicator: {
      marginTop: 20,
    },
    listItem: {
      borderBottomColor: "#E6E6E6",
      borderBottomWidth: 1,
      padding: 20,
    },
    itemText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333333",
    },
    species: {
      fontSize: 14,
      color: "#828282",
      marginLeft: -3,
    },
  });

  export default HomeScreen;  