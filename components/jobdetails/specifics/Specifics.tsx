import React, { FC } from "react";
import { View, Text } from "react-native";

type SpecificsProps = {
  tabData: any;
  title: string;
};

const Specifics: FC<SpecificsProps> = ({ tabData, title }) => {
  return (
    <View className="mt-5 p-medium bg-[#FFF] rounded-2xl">
      <Text className="text-primary font-dark text-lg">{title}:</Text>

      <View className="mt-5">
        {tabData.map((item: any, index: number) => (
          <View key={item + index} className="flex-row mt-3">
            <View className="w-2 h-2 rounded-2xl mt-1 bg-gray2" />
            <Text className="text-md text-gray font-reg ml-2">{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
