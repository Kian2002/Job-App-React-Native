import React, { FC } from "react";
import { View, Text } from "react-native";

type AboutProps = {
  jobDescription: string;
};

const About: FC<AboutProps> = ({ jobDescription }) => {
  return (
    <View className="mt-5 p-medium bg-[#FFF] rounded-2xl">
      <Text className="text-primary font-dark text-lg">About the job:</Text>
      <View className="mt-5">
        <Text className="text-gray font-reg text-md">{jobDescription}</Text>
      </View>
    </View>
  );
};

export default About;
