import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../../hooks/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const Nearbyjobs = () => {
  const router = useRouter();

  const query = { query: "Software Developer in Vancouver, BC", num_pages: 1 };

  const { isLoading, error, data, refresh } = useFetch("search", query);

  return (
    <View className="w-full h-full mt-10">
      <View className="flex-row justify-between items-center">
        <Text className="font-med text-lg text-secondary">Nearby Jobs</Text>
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
          data.map((item) => (
            <NearbyJobCard
              key={item.job_id}
              item={item}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
