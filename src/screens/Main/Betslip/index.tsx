import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";

const Betslip = () => {
  return (
    <ScreenLayout style={styles.main}>
      <View style={{}}>
        <Text>Betslip</Text>
      </View>
    </ScreenLayout>
  );
};

export default Betslip;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(20),
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
