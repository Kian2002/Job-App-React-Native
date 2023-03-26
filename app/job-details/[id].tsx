import { Stack, useRouter, useSearchParams } from "expo-router";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { icons } from "../../constants";
import useFetch from "../../hooks/useFetch";

const JobDetails = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { data, isLoading, error, refresh } = useFetch("job-details", {
    job_id: params.id,
  });

  return (
    <SafeAreaView className="flex-1 bg-lightWhite">
      <Stack.Screen
        options={{
          headerTitle: "",
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              handlePress={() => console.log("Share clicked")}
            />
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default JobDetails;
