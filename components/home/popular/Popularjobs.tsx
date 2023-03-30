import { useRouter } from "expo-router";
import React, { FC, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useFetch from "../../../hooks/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

type PopularjobsProps = {
  jobType: string;
};

const Popularjobs: FC<PopularjobsProps> = ({ jobType }) => {
  const query = {
    query: "Software Engineer",
    num_pages: 1,
    employement_type: jobType,
  };
  const { isLoading, error, data, refresh } = useFetch("search", query);

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
    } else {
      refresh();
    }
  }, [jobType]);

  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
  };

  return (
    <View className="mt-10">
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
