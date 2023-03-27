import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { icons } from "../../../constants";

type FooterProps = {
  url: string;
};

const Footer: FC<FooterProps> = ({ url }) => {
  return (
    <View className="flex-row p-small justify-between items-center absolute bottom-0 left-0 right-0 bg-[#FFF]">
      <TouchableOpacity className="border border-tertiary rounded-3xl h-16 w-16 items-center justify-center">
        <Image
          source={icons.heartOutline}
          className=" h-2/5 w-2/5"
          style={{ tintColor: "#FF7754" }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-tertiary p-large flex-1 rounded-3xl ml-3"
        onPress={() => Linking.openURL(url)}
      >
        <Text className="text-white font-dark text-md text-center">
          Apply Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
