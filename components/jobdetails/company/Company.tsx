import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../../constants";
import checkImageUrl from "../../../utils/checkImageUrl";

type CompanyProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

const Company: FC<CompanyProps> = ({
  companyLogo,
  jobTitle,
  companyName,
  location,
}) => {
  return (
    <View className="justify-center items-center mt-10">
      <View className="justify-center items-center rounded-3xl bg-[#FFF] p-2">
        <Image
          source={{
            uri: checkImageUrl(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          style={{ width: 80, height: 80 }}
          resizeMode="contain"
          className="rounded-2xl"
        />
      </View>

      <View className="mt-2">
        <Text
          className="font-dark text-xl text-primary text-center"
          numberOfLines={1}
        >
          {jobTitle}
        </Text>
      </View>

      <View className="flex-row justify-center items-center mt-2">
        <Text className="font-med text-sm text-secondary" numberOfLines={1}>
          {companyName} /
        </Text>

        <View className="flex-row justify-center items-center ml-0.5">
          <Image
            source={icons.location}
            style={{
              width: 14,
              height: 14,
              tintColor: "#C1C0C8",
            }}
            resizeMode="contain"
          />
          <Text className="font-reg text-gray ml-0.5 text-sm">{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
