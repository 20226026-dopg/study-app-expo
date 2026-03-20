import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ExploreScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text>ExploreScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ExploreScreen;
