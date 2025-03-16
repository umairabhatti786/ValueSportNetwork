import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onbaording from "../../screens/Auth/Onbaording";
import GetStarted from "../../screens/Auth/GetStarted";
import Login from "../../screens/Auth/Login";
import Signup from "../../screens/Auth/Signup";
import ForgetPassword from "../../screens/Auth/ForgetPassword";
import Verification from "../../screens/Auth/Verification";
import favoriteSports from "../../screens/Auth/favoriteSports";
import BottomTab from "../BottomTab";
import BetHistory from "../../screens/Main/BetHistory";
import MyAccounts from "../../screens/Main/MyAccounts";
import BettingTools from "../../screens/Main/BettingTools";
import ArbCalculator from "../../screens/Main/BettingTools/ArbCalculator";
import BetCalculator from "../../screens/Main/BettingTools/BetCalculator";
import EVCalculator from "../../screens/Main/BettingTools/EVCalculator";
import OddsConverter from "../../screens/Main/BettingTools/OddsConverter";
import picks from "../../screens/Main/Picks";
import Betslip from "../../screens/Main/Betslip";
import ExploreUsers from "../../screens/Main/ExploreUsers";
import VerifiedExperts from "../../screens/Main/VerifiedExperts";
import HotStreakBettors from "../../screens/Main/HotStreakBettors";
import PopularBettors from "../../screens/Main/PopularBettors";
import UserProfile from "../../screens/Main/UserProfile";
import UserHistory from "../../screens/Main/UserHistory";
import NetRecord from "../../screens/Main/NetRecord";
import MLB_Record from "../../screens/Main/MLB_Record";

export type AppStackParamList = {
  Login: undefined;
  Signup: undefined;
  BottomTab: undefined;
  GetStarted: undefined;
  Onbaording: undefined;
  ForgetPassword: undefined;
  Verification: undefined;
  favoriteSports: undefined;
  BetHistory: undefined;
  MyAccounts: undefined;
  BettingTools: undefined;
  ArbCalculator: undefined;
  BetCalculator: undefined;
  EVCalculator: undefined;
  OddsConverter: undefined;
  Picks: undefined;
  Betslip: undefined;
  ExploreUsers: undefined;
  VerifiedExperts: undefined;
  HotStreakBettors: undefined;
  PopularBettors: undefined;
  UserProfile: undefined;
  UserHistory: undefined;
  NetRecord: undefined;
  MLB_Record: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      // screenOptions={TransitionScreenOptions}
      screenOptions={{
        headerShown: false,

        // cardStyleInterpolator: ({current: {progress}}) => {
        //   return {
        //     cardStyle: {
        //       opacity: progress,
        //     },
        //   };
        // },
      }}
    >
      <Stack.Screen name={"Onbaording"} component={Onbaording} />
      <Stack.Screen name={"GetStarted"} component={GetStarted} />
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"Signup"} component={Signup} />
      <Stack.Screen name={"ForgetPassword"} component={ForgetPassword} />
      <Stack.Screen name={"Verification"} component={Verification} />
      <Stack.Screen name={"favoriteSports"} component={favoriteSports} />
      <Stack.Screen name={"BetHistory"} component={BetHistory} />
      <Stack.Screen name={"MyAccounts"} component={MyAccounts} />
      <Stack.Screen name={"BottomTab"} component={BottomTab} />
      <Stack.Screen name={"BettingTools"} component={BettingTools} />
      <Stack.Screen name={"UserProfile"} component={UserProfile} />

      <Stack.Screen name={"ArbCalculator"} component={ArbCalculator} />
      <Stack.Screen name={"BetCalculator"} component={BetCalculator} />
      <Stack.Screen name={"EVCalculator"} component={EVCalculator} />
      <Stack.Screen name={"OddsConverter"} component={OddsConverter} />
      <Stack.Screen name={"Picks"} component={picks} />
      <Stack.Screen name={"Betslip"} component={Betslip} />
      <Stack.Screen name={"ExploreUsers"} component={ExploreUsers} />
      <Stack.Screen name={"VerifiedExperts"} component={VerifiedExperts} />
      <Stack.Screen name={"HotStreakBettors"} component={HotStreakBettors} />
      <Stack.Screen name={"PopularBettors"} component={PopularBettors} />
      <Stack.Screen name={"UserHistory"} component={UserHistory} />
      <Stack.Screen name={"NetRecord"} component={NetRecord} />
      <Stack.Screen name={"MLB_Record"} component={MLB_Record} />
    </Stack.Navigator>
  );
};
export default AppStack;
