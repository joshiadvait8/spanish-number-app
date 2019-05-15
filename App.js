import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Audio } from "expo";

const listBackgroundColor = {
  1: "#45CE30",
  2: "#E83350",
  3: "#BB2CD9",
  4: "#4BCFFA",
  5: "#6AB04A",
  6: "#E83350",
  7: "#F4C724",
  8: "#1287A5",
  9: "#EA7773",
  10: "#0A79DF"
};
const soundList = {
  one: require("./assets/one.wav"),
  two: require("./assets/two.wav"),
  three: require("./assets/three.wav"),
  four: require("./assets/four.wav"),
  five: require("./assets/five.wav"),
  six: require("./assets/six.wav"),
  seven: require("./assets/seven.wav"),
  eight: require("./assets/eight.wav"),
  nine: require("./assets/nine.wav"),
  ten: require("./assets/ten.wav")
};
export default class App extends React.Component {
  //function to play sound
  //to imporve performance e asyc load the playsound method
  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          //when successfully executed we get  this
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis); //duration of sound
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gridcontainer}>
          <Image style={styles.logo} source={require("./assets/logo.png")} />
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[1] }, styles.item]}
              onPress={() => {
                this.playSound("one");
              }}
            >
              <Text style={styles.itemtext}>One</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[2] }, styles.item]}
              onPress={() => {
                this.playSound("two");
              }}
            >
              <Text style={styles.itemtext}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[3] }, styles.item]}
              onPress={() => {
                this.playSound("three");
              }}
            >
              <Text style={styles.itemtext}>Three</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[4] }, styles.item]}
              onPress={() => {
                this.playSound("four");
              }}
            >
              <Text style={styles.itemtext}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[5] }, styles.item]}
              onPress={() => {
                this.playSound("five");
              }}
            >
              <Text style={styles.itemtext}>Five</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[6] }, styles.item]}
              onPress={() => {
                this.playSound("six");
              }}
            >
              <Text style={styles.itemtext}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[7] }, styles.item]}
              onPress={() => {
                this.playSound("seven");
              }}
            >
              <Text style={styles.itemtext}>Seven</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[8] }, styles.item]}
              onPress={() => {
                this.playSound("eight");
              }}
            >
              <Text style={styles.itemtext}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[{ backgroundColor: listBackgroundColor[9] }, styles.item]}
              onPress={() => {
                this.playSound("nine");
              }}
            >
              <Text style={styles.itemtext}>Nine</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowcontainer}>
            <TouchableOpacity
              style={[
                { backgroundColor: listBackgroundColor[10] },
                styles.item
              ]}
              onPress={() => {
                this.playSound("ten");
              }}
            >
              <Text style={styles.itemtext}>Ten</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3335"
    // alignItems: "center",
    // justifyContent: "center"
  },
  gridcontainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 20
  },
  rowcontainer: {
    flexDirection: "row",
    padding: 10
  },
  item: {
    flex: 1,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  itemtext: {
    color: "#FFF",
    fontSize: 25
  }
});
