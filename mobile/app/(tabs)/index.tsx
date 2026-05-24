import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatsTab = () => {
  return (
    <SafeAreaView className="flex-1 bg-surface">
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text className="text-white">ChatsTab</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatsTab;
