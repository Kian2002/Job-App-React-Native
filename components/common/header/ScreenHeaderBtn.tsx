import React from "react";
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { icons, images } from "../../../constants";

type ScreenHeaderBtnProps = {
  iconUrl: ImageSourcePropType;
  handlePress: () => void;
};

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      className="rounded-xl w-10 h-10 justify-center items-center bg-white"
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        className={iconUrl === icons.menu ? "h-6 w-6" : " h-10 w-10 rounded-lg"}
        style={iconUrl === images.profile ? null : { tintColor: "#312651" }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
