import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "0f83e84546bbd6ae32129e0982f0fa53";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    // console.log(data);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };

  getLocation = async () => {
    try {
      // throw Error(); // catch Alert Test
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // Send to API and get wehater !
      this.getWeather(latitude, longitude);
    } catch (e) {
      Alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;

    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
