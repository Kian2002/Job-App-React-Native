import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import About from "../about/About";
import Specifics from "../specifics/Specifics";

type TabsProps = {
  jobData: any;
};

const Tabs: FC<TabsProps> = ({ jobData }) => {
  const tabs = ["About", "Qualifications", "Responsibilities"];

  console.log(jobData[0]);

  const [activeTab, setActiveTab] = useState("About");

  return (
    <View className="mt-4 p-medium pb-24">
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

      <View>
        {activeTab === "About" && (
          <About jobDescription={jobData[0].job_description ?? "[N/A]"} />
        )}
        {activeTab === "Qualifications" && (
          <Specifics
            title="Qualifications"
            tabData={jobData[0].job_highlights?.Qualifications ?? ["N/A"]}
          />
        )}
        {activeTab === "Responsibilities" && (
          <Specifics
            title="Responsibilities"
            tabData={jobData[0].job_highlights?.Responsibilities ?? ["N/A"]}
          />
        )}
      </View>
    </View>
  );
};

export default Tabs;
