import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack />;
};

export default Layout;
