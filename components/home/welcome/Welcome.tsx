import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { icons } from "../../../constants";

const jobTypes = ["Full Time", "Part Time", "Freelance", "Internship"];

const Welcome = () => {
  const router = useRouter();

  const [isActive, setIsActive] = useState("Full Time");
  const [search, setSearch] = useState("");

  return (
    <View>
      <View className="w-full">
        <Text className="text-secondary text-lg font-reg">Hello Kian</Text>
        <Text className="text-primary text-2xl font-dark mt-0.5">
          Find your perfect job
        </Text>
      </View>

      <View className="justify-center items-center flex-row mt-5 h-12 mr-5">
        <View className="flex-1 h-full items-center justify-center rounded-2xl bg-white mr-5">
          <TextInput
            placeholder="What are you looking for?"
            placeholderTextColor={"rgb(131,130,154)"}
            className="w-full h-full px-medium font-reg text-secondary"
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        <TouchableOpacity
          className="bg-tertiary w-12 h-full rounded-2xl justify-center items-center"
          onPress={() => {
            if (search) router.push(`/search/${search}`);
          }}
        >
          <Image
            source={icons.search}
            className="h-1/2 w-1/2"
            style={{ tintColor: "white" }}
          />
        </TouchableOpacity>
      </View>

      <View className="mt-4 w-full">
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="rounded-xl border border-gray2 bg-white px-small py-1.5"
              style={{
                borderColor: isActive === item ? "#F3F4F8" : "rgb(131,130,154)",
                backgroundColor: isActive === item ? "#444262" : "white",
              }}
              onPress={() => {
                setIsActive(item);
                router.push(`/jobs/${item}`);
              }}
            >
              <Text
                className="font-med text-gray2 checked:text-primary"
                style={{
                  color: isActive === item ? "#F3F4F8" : "rgb(131,130,154)",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{ columnGap: 10 }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Welcome;
