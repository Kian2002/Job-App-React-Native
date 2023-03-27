import { Stack, useRouter, useSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { Company, JobFooter, JobTabs, ScreenHeaderBtn } from "../../components";
import { icons } from "../../constants";
import useFetch from "../../hooks/useFetch";

const JobDetails = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { data, isLoading, error, refresh } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

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
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              handlePress={() => console.log("Share clicked")}
            />
          ),
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={{ marginTop: 10 }}
          />
        ) : error ? (
          <Text>Something went wrong...</Text>
        ) : data.length === 0 ? (
          <Text>No data found</Text>
        ) : (
          <View>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_country}
            />

            <JobTabs jobData={data} />
          </View>
        )}
      </ScrollView>
      <JobFooter
        url={
          data[0]?.job_google_link ?? "https://careers.google.com/jobs/results/"
        }
      />
    </SafeAreaView>
  );
};

export default JobDetails;
