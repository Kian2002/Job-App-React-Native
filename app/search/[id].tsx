import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import axios from "axios";

import { RAPID_API_KEY } from "@env";

import { ScreenHeaderBtn, NearbyJobCard } from "../../components";
import { icons } from "../../constants";

const SearchPage = () => {
  const router = useRouter();
  const params = useSearchParams();

  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: { query: params.id, page: page },
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(error);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: true,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <View className="p-large">
        <View className="mb-2">
          <Text className="text-2xl font-dark text-primary">{params.id}</Text>
          <Text className="text-lg font-med text-secondary">
            Job Oppurtunities
          </Text>
        </View>

        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : error ? (
            <Text>Something went wrong...</Text>
          ) : (
            data.map((item) => (
              <NearbyJobCard
                key={item.job_id}
                item={item}
                handleNavigate={() =>
                  router.push(`/job-details/${item.job_id}`)
                }
              />
            ))
          )}

          <View className="flex-row justify-center items-center mt-2 mb-10 gap-2">
            <TouchableOpacity
              className="bg-tertiary w-8 h-8 rounded-lg"
              onPress={() => setPage(page - 1)}
            >
              <Image
                source={icons.chevronLeft}
                className="w-8 h-8"
                style={{ tintColor: "#FFFFFF" }}
              />
            </TouchableOpacity>

            <Text className="bg-white w-8 h-8 rounded-lg text-center text-lg font-med text-tertiary">
              {page}
            </Text>

            <TouchableOpacity
              className="bg-tertiary w-8 h-8 rounded-lg"
              onPress={() => setPage(page + 1)}
            >
              <Image
                source={icons.chevronRight}
                className="w-8 h-8"
                style={{ tintColor: "#FFFFFF" }}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchPage;
