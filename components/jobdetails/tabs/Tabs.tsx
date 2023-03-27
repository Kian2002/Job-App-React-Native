import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const Tabs = () => {
  const tabs = ["About", "Qualifications", "Responsibilities"];

  const [activeTab, setActiveTab] = useState("About");

  return (
    <View className="mt-4">
      <View className="w-full justify-center items-center">
        <FlatList
          data={tabs}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setActiveTab(item)}
              className={`bg-white rounded-xl px-medium py-2 ${
                activeTab === item && "bg-primary"
              }`}
            >
              <Text
                className={`text-gray font-reg text-center ${
                  activeTab === item && "text-white"
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {activeTab === "About" && <Text>About</Text>}
      {activeTab === "Qualifications" && <Text>Qualifications</Text>}
      {activeTab === "Responsibilities" && <Text>Responsibilities</Text>}
    </View>
  );
};

export default Tabs;
