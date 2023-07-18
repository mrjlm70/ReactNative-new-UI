import * as React from "react";
import {
  Animated,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import FirstRoute from "../components/FirstRoute";
import SecondRoute from "../components/SecondRoute";

export default class HomeScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "Upcoming" },
      { key: "second", title: "Invitation" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <SafeAreaView style={{ backgroundColor: "black" }}>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map((inputIndex) =>
                inputIndex === i ? 1 : 0.5
              ),
            });

            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}
              >
                <Animated.Text style={{ opacity, fontSize: 25 }}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fc9372",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    marginTop: 40,
    height: 60,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
