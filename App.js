// aTorkar started writing code
/* Resources
cap_usa.gif: https://giphy.com/gifs/captain-america-freedom-gif-S3sc3Pg9dFpUA
star_wallpaer.gif: https://giphy.com/gifs/stars-night-sky-twinkling-FlodpfQUBSp20
logo.png: https://www.flaticon.com/free-icons/logo Logo icons created by Freepik - Flaticon
*/

/* Literature:
https://en.wikipedia.org/wiki/Web_colors
https://docs.expo.dev/ui-programming/image-background/
https://reactnative.dev/docs/style
*/

/* Improvements:
 * code is formatted with Prettier
 * this "Name Badge" is animated - please look at the short video (however, a screenshot is also 
 * attached)
 * to the red background there is added a gif of flickering stars
 * text has added font families Courier New and Helvetica
 * the name box now has opacity
 * the name box now has a border with different colors from blue to violet, and is resized
 * next to the name there is animated gif of Captain America
 * the subtitle text has a letter spacing
 * the greeting text and subtitle text have black text shadows
 * logo of the company is added to the top left corner
 * text is added for the name tag owner's position
 */

import { StatusBar } from "expo-status-bar";

// aTorkar ended writing code
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
// aTorkar started writing code
import { Image } from "react-native";
// aTorkar ended writing code

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
export default function App() {
  return (
    // aTorkar started writing code
    <View style={styles.container}>
      <Image
        style={styles.starWallpaper}
        source={require("./assets/star_wallpaper.gif")}
      />
      <View>
        <Image style={styles.logo} source={require("./assets/logo.png")} />
      </View>
      {/* aTorkar ended writing code */}

      <Text style={styles.welcomeText}>Hello</Text>
      {/* aTorkar started writing code */}
      <Text style={styles.subtitleText}>MY NAME IS</Text>
      <SafeAreaView style={styles.boxSafeArea}></SafeAreaView>

      <View style={styles.boxStyle}>
        <View style={styles.inlineContainer}>
          <Text style={styles.nameText}>ChewChew</Text>
          <Image
            style={styles.capUsa}
            source={require("./assets/cap_usa.gif")}
          />
        </View>
        <View>
          <Text style={styles.positionText}>
            Position @ CLS: Can Tafford, IT Eng.
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    // aToarkar ended writing code
    alignItems: "center",
    // aTorkar started writing code
    justifyContent: "center",
  },

  starWallpaper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.6,
  },
  // aTorkar ended writing code

  welcomeText: {
    fontSize: 90,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#FA8072",
    textAlign: "center",
    // aTorkar started writing code
    textShadowColor: "black",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
    fontFamily: "Courier New",
    top: -40,
  },

  // aTorkar ended writing code
  subtitleText: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#FFA07A",
    marginBottom: 20,
    textAlign: "center",
    // aTorkar started writing code
    letterSpacing: 9,
    fontFamily: "Courier New",
    textShadowColor: "black",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
    top: -40,
  },

  boxStyle: {
    // aTorkar ended writing code
    width: "70%",
    height: "55%",
    backgroundColor: "white",
    borderRadius: 15, // aTorkar wrote this line
    justifyContent: "center",
    // aTorkar started writing code
    alignItems: "center",
    marginBottom: 20,
    opacity: 0.75,
    borderColor: "black",
    borderWidth: 5,
    borderStyle: "solid",
    borderLeftColor: "blue",
    borderTopColor: "blue",
    borderRightColor: "violet",
    borderBottomColor: "violet",
    top: -40,
  },

  // aTorkar ended writing code
  nameText: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    // aTorkar started writing code
    fontFamily: "Helvetica",
  },

  positionText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Helvetica",
  },

  position: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Helvetica",
  },

  // aTorkar ended writing code
  boxSafeArea: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  // aTorkar started writing code
  capUsa: {
    width: 100,
    height: 100,
  },

  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    top: 80,
    left: -360,
    position: "relative",
  },
});
// aTorkar ended writing code
