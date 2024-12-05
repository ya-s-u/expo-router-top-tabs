import type {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
} from "@react-navigation/material-top-tabs/lib/typescript/src/types";
import type {
  ParamListBase,
  TabNavigationState,
} from "@react-navigation/native";
import { withLayoutContext, Stack } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const { Navigator } = createMaterialTopTabNavigator();

const TopTab = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function Layout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: true }} />
      <TopTab>
         <TopTab.Screen
          name="aaa/index"
          options={{
            title: "AAA",
            tabBarLabel: "AAA",
          }}
        />
         <TopTab.Screen
          name="bbb/index"
          options={{
            title: "BBB",
            tabBarLabel: "BBB",
          }}
        />
      </TopTab>
    </>
  );
};