import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useFetch from "../../../hooks/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const query = { query: "Software Developer in Vancouver, BC", num_pages: 1 };
  const { isLoading, error, data } = useFetch("search", query);

  const handleCardPress = (item) => {};

  return (
    <View className="w-full h-full mt-10">
      <View className="flex-row justify-between items-center">
        <Text className="font-med text-lg text-secondary">Popular Jobs</Text>
        <TouchableOpacity>
          <Text className="font-reg text-md text-gray">Show all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : error ? (
          <Text>Something went wrong...</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard item={item} handleCardPress={handleCardPress} />
            )}
            keyExtractor={(item) => item.job_id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: 12 }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
