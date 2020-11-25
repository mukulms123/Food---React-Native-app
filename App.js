import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultShowScreen from "./src/screens/ResultShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

// console.log("App Started.");
const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultShow: ResultShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business App",
    },
  }
);

export default createAppContainer(navigator);
