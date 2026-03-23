import { COLORS } from "@/lib/theme";
import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";

const TabsLayout = () => {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <NativeTabs tintColor={COLORS.background}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Chats</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="house.fill"
          md="chat"
          selectedColor={COLORS.primary}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="magnifyingglass"
          md="explore"
          
          selectedColor={COLORS.primary}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="person.fill"
          md="person"
          selectedColor={COLORS.primary}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
};

export default TabsLayout;
