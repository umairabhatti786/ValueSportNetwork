import { StyleSheet, View } from "react-native";
import { appStyles } from "../../../../utils/GlobalStyles";
import sizeHelper from "../../../../utils/Helpers";
import { theme } from "../../../../utils/Themes";
import CustomText from "../../../../components/Text";
import { fonts } from "../../../../utils/Themes/fonts";
import ScreenLayout from "../../../../components/ScreenLayout";
import CustomInput from "../../../../components/Input";
import CustomButton from "../../../../components/Button";
import CustomHeader from "../../../../components/Header";

const EVCalculator = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <CustomHeader title={"EV Calculator"} />
        <View style={{ gap: sizeHelper.calHp(10) }}>
          <CustomText
            text={"Betting Odds Calculator"}
            color={theme.colors.black}
            fontWeight="600"
            fontFam={fonts.Inter_SemiBold}
            numberOfLines={2}
            size={22}
          />
          <CustomText
            text={
              "The betting odds calculator allows you to input your state and odds in American, Decimal, or Fractional formats to quickly calculate the payout for your bets."
            }
            color={theme.colors.gray900}
            size={18}
          />
        </View>
        <View style={{ ...styles.box, paddingVertical: sizeHelper.calHp(40) }}>
        <CustomInput
              label="Bet Amount"
              labelSize={20}
              value={"10"}
              borderColor={"#AEAEAE"}
              height={60}
              borderWidth={0.5}
              borderRadius={sizeHelper.calWp(20)}
              width={"100%"}
              backgroundColor={"transparent"}
              placeholder="000"
            />
          <CustomInput
              label="American Odds"
              labelSize={20}
              value={"10"}
              borderColor={"#AEAEAE"}
              height={60}
              borderWidth={0.5}
              borderRadius={sizeHelper.calWp(20)}
              width={"100%"}
              backgroundColor={"transparent"}
              placeholder="000"
            />
            <CustomInput
              label="Fractional Odds"
              labelSize={20}
              value={"10"}
              borderColor={"#AEAEAE"}
              height={60}
              borderWidth={0.5}
              borderRadius={sizeHelper.calWp(20)}
              width={"100%"}
              backgroundColor={"transparent"}
              placeholder="000"
            />
          <View
            style={{
              ...styles.box,
              flexDirection: "row",
              justifyContent: "space-around",
              padding: sizeHelper.calWp(10),
              marginVertical: sizeHelper.calHp(20),
            }}
          >
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"To Win"}
                color={theme.colors.gray900}
                fontWeight="600"
                fontFam={fonts.Inter_Medium}
                size={22}
              />
              <CustomText
                text={"$10"}
                color={theme.colors.gray100}
                fontWeight="600"
                fontFam={fonts.Inter_Medium}
                size={22}
              />
            </View>
            <View style={{ gap: sizeHelper.calHp(10) }}>
              <CustomText
                text={"Payout"}
                color={theme.colors.gray900}
                fontWeight="600"
                fontFam={fonts.Inter_Medium}
                size={22}
              />
              <CustomText
                text={"$10"}
                color={theme.colors.gray100}
                fontWeight="600"
                fontFam={fonts.Inter_Medium}
                size={22}
              />
            </View>
          </View>
          <CustomButton
            bgColor={theme.colors.secondry}
            width={"60%"}
            style={{ alignSelf: "center" }}
            onPress={() => navigation.navigate("favoriteSports")}
            text="Reset"
            borderRadius={25}
          />
        </View>
      </ScreenLayout>
    </>
  );
};
export default EVCalculator;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(20),
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(40),
  },
  box: {
    paddingHorizontal: sizeHelper.calWp(30),
    borderRadius: sizeHelper.calWp(20),
    borderColor: "#AEAEAE",
    borderWidth: 0.5,
    gap: sizeHelper.calHp(20),
  },
});
