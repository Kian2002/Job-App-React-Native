import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import checkImageUrl from "../../../../utils/checkImageUrl";

type NearbyJobCardProps = {
  item: any;
  handleNavigate: (item: any) => void;
};

const NearbyJobCard: FC<NearbyJobCardProps> = ({ item, handleNavigate }) => {
  return (
    <TouchableOpacity onPress={handleNavigate} className="w-full h-24 flex-row">
      <TouchableOpacity
        style={{ width: 55, height: 55 }}
        className="justify-center"
      >
        <Image
          source={{
            uri: checkImageUrl(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={{
            width: "70%",
            height: "70%",
          }}
          className="rounded-2xl"
        />
      </TouchableOpacity>

      <View className="mt-2">
        <Text className="text-primary font-dark text-lg" numberOfLines={1}>
          {item.job_title}
        </Text>

        <Text className="text-secondary font-reg text-md" numberOfLines={1}>
          {item.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
