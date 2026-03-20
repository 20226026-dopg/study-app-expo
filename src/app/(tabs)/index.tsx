import * as Sentry from "@sentry/react-native";
import React from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 items-center justify-center">
        <Text>ChatsScreen</Text>
        <Button
          title="Try!"
          onPress={() => {
            Sentry.captureException(new Error("First error"));
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatsScreen;
