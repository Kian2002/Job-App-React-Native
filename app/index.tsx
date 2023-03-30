import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import {
  Nearbyjobs,
  Popularjobs,
  Welcome,
  ScreenHeaderBtn,
} from "../components";

import { icons, images } from "../constants";

const App = () => {
  const router = useRouter();

  const [jobType, setJobType] = useState("Full Time");

  const onHandlePress = () => {};

  const onHandleJobType = (type) => {
    setJobType(type);
  };

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} handlePress={onHandlePress} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              handlePress={onHandlePress}
            />
          ),
        }}
      />

      <ScrollView showsHorizontalScrollIndicator={false}>
        <View className="flex-1 p-medium">
          <Welcome handleJobType={onHandleJobType} />
          <Popularjobs jobType={jobType} />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
