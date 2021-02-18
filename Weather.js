import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const WeatherOptions = {
  Thunderstorm: {
    iconName: "weather-sunny",
    gradient: ["#FEF253", "FF7300"],
    title: "Thunderstorm",
    subtitle: "Just don't go outside.",
  },
  Drizzle: {
    iconName: "cloud-drizzle",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "Drizzle",
    subtitle: "Just don't go outside.",
  },
  Rain: {
    iconName: "cloud-rain",
    gradient: ["#1c92d2", "#f2fcfe"],
    title: "Rain",
    subtitle: "Just don't go outside.",
  },
  Snow: {
    iconName: "cloud-snow",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "Snow",
    subtitle: "Just don't go outside.",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", "#66A6FF"],
    title: "Atmosphere",
    subtitle: "Just don't go outside.",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", "#FF0000"],
    title: "Clear",
    subtitle: "Just don't go outside.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Just don't go outside.",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Mist",
    subtitle: "Just don't go outside.",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4568DC", "#B06AB3"],
    title: "Dust",
    subtitle: "Just don't go outside.",
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      // Background Liner Gradient
      colors={WeatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={WeatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{WeatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {WeatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: { fontSize: 42, color: "white" },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontWeight: "600",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
  },
});
