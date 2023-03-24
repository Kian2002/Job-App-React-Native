import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "../../../../constants";

type PopularJobCardProps = {
  item: any;
  handleCardPress: (item: any) => void;
};

const PopularJobCard: FC<PopularJobCardProps> = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        handleCardPress(item);
      }}
      className="w-72 h-48 p-xLarge rounded-3xl shadow-md shadow-white mt-5 bg-primary"
    >
      <TouchableOpacity
        style={{ width: 55, height: 55 }}
        className="bg-lightWhite rounded-3xl justify-center items-center"
      >
        <Image
          source={{
            uri: item.employer_logo ? item.employer_logo : icons.share,
          }}
          resizeMode="contain"
          style={{
            width: "70%",
            height: "70%",
          }}
          className="rounded-2xl"
        />
      </TouchableOpacity>

      <Text className="font-reg text-lg text-gray2 mt-2" numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View className="mt-2">
        <Text className="text-white font-dark text-xl" numberOfLines={1}>
          {item.job_title}
        </Text>

        <Text className="text-white font-reg text-lg" numberOfLines={1}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
