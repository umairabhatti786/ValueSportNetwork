import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/GlobalStyles";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import ScreenLayout from "../../../components/ScreenLayout";
import User from "../../../components/User";

const UserHistory = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          backgroundColor: theme.colors.white,
        }}
      >
        <TouchableOpacity
          style={{ paddingRight: sizeHelper.calWp(40) }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: sizeHelper.calWp(15),
              height: sizeHelper.calWp(20),
            }}
            source={images.left_arrow_black}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <CustomText
          text={"User History"}
          color={theme.colors.black}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
          numberOfLines={2}
          size={30}
        />
      </View>
    );
  };
  const DetailContaner = ({ day, ROI }: any) => {
    return (
      <View
        style={{
          ...styles.btn_container,
          alignItems: "center",
          justifyContent: "center",
          width: "31%",
        }}
      >
        <View style={{ gap: sizeHelper.calHp(3) }}>
          <CustomText
            text={day}
            color={theme.colors.half_black}
            size={20}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText
            text={"$0.00"}
            color={theme.colors.blue100}
            size={30}
            style={{ marginTop: sizeHelper.calHp(5) }}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText
            text={"0-0-0"}
            color={theme.colors.secondry}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
          <View style={{ ...appStyles.row }}>
            <CustomText
              text={"ROI "}
              color={theme.colors.gray500}
              size={20}
              style={{ marginTop: sizeHelper.calHp(10) }}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
            />
            <CustomText
              text={ROI}
              color={theme.colors.secondry}
              size={20}
              style={{ marginTop: sizeHelper.calHp(10) }}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
            />
          </View>
        </View>
      </View>
    );
  };
  const BetsContaner = ({ title, code, Bet }: any) => {
    return (
      <View
        style={{
          ...styles.btn_container2,
          alignItems: "center",
          justifyContent: "center",
          width: "31%",
        }}
      >
        <View style={{ gap: sizeHelper.calHp(3), alignItems: "center" }}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={images.tap_ball}
          />
          <CustomText
            text={title}
            color={theme.colors.half_black}
            size={25}
            style={{ marginTop: sizeHelper.calHp(15) }}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText text={code} color={theme.colors.gray500} size={20} />
          <CustomText text={Bet} color={theme.colors.blue100} size={16} />
        </View>
      </View>
    );
  };
  const FavoriteBetsContaner = () => {
    return (
      <View
        style={{
          ...styles.btn_container,
          gap: sizeHelper.calHp(5),
          paddingHorizontal: sizeHelper.calWp(30),
        }}
      >
        <CustomText
          text={"Favorite Bets"}
          color={theme.colors.half_black}
          size={25}
          style={{ marginTop: sizeHelper.calHp(15) }}
          fontWeight="700"
          fontFam={fonts.Inter_Bold}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          {/* ist bar */}
          <CustomText text={"N/A"} color={theme.colors.gray500} size={18} />
          <View style={styles.bet_percentage}>
            <View style={[, { flex: 2, backgroundColor: "green" }]} />
            <View style={[{ flex: 1, backgroundColor: "#F216EE" }]} />
            <View style={[{ flex: 4, backgroundColor: "blue" }]} />
            <View style={[{ flex: 1, backgroundColor: "#FF8C00" }]} />
          </View>
        </View>
        {/* 2nd bar */}
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <CustomText text={"N/A"} color={theme.colors.gray500} size={18} />
          <View style={styles.bet_percentage}>
            <View style={[, { flex: 8, backgroundColor: "#FF8C00" }]} />
            <View style={[{ flex: 3, backgroundColor: "#F216EE" }]} />
            <View style={[{ flex: 2, backgroundColor: "blue" }]} />
            <View style={[{ flex: 1, backgroundColor: "#00D65D" }]} />
          </View>
        </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <CustomText text={"N/A"} color={theme.colors.gray500} size={18} />
          {/* 3rd bar */}
          <View style={styles.bet_percentage}>
            <View
              style={[, { flex: 4, backgroundColor: theme.colors.blue100 }]}
            />
            <View style={[{ flex: 2, backgroundColor: "#F216EE" }]} />
            <View style={[{ flex: 6, backgroundColor: "#00D65D" }]} />
            <View style={[{ flex: 1, backgroundColor: "#D3BAA4" }]} />
          </View>
        </View>
        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(30),
            marginLeft: sizeHelper.calWp(40),
            marginTop: sizeHelper.calHp(10),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={styles.dots} />
            <CustomText
              text={"Spread"}
              color={theme.colors.gray500}
              size={16}
            />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#F216EE" }} />
            <CustomText text={"ML"} color={theme.colors.gray500} size={16} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#FF8C00" }} />
            <CustomText text={"Total"} color={theme.colors.gray500} size={16} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#00D65D" }} />
            <CustomText text={"Props"} color={theme.colors.gray500} size={16} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <View style={{ ...styles.dots, backgroundColor: "#D3BAA4" }} />
            <CustomText
              text={"Futures"}
              color={theme.colors.gray500}
              size={16}
            />
          </View>
        </View>
      </View>
    );
  };
  const ClosingValueContainer = ({
    title,
    rate,
    total,
    bgColor,
    color,
  }: any) => {
    return (
      <View
        style={{
          borderRadius: sizeHelper.calWp(20),
          backgroundColor: bgColor,
          paddingHorizontal: sizeHelper.calWp(20),
          gap: sizeHelper.calHp(5),
          paddingVertical: sizeHelper.calHp(10),
          flex: 1,
        }}
      >
        <View style={{ ...appStyles.rowjustify }}>
          <CustomText
            text={title}
            color={color}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
          <CustomText
            text={rate}
            color={color}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </View>
        <View style={{ ...appStyles.row }}>
          <CustomText
            text={total}
            color={color}
            size={16}
            fontWeight="700"
            fontFam={fonts.Inter_Light}
          />
          <CustomText
            text={" Total"}
            color={color}
            size={16}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
        </View>
      </View>
    );
  };

  const StreakConatiner = () => {
    return (
      <>
        <View style={{ ...appStyles.rowjustify }}>
          <View
            style={{
              ...styles.btn_container,
              paddingHorizontal: sizeHelper.calWp(30),
              width: "49%",
              height: sizeHelper.calHp(140),
            }}
          >
            <View style={{ gap: sizeHelper.calHp(3) }}>
              <CustomText
                text={"Hot Streak"}
                color={theme.colors.half_black}
                size={25}
                fontWeight="700"
                fontFam={fonts.Inter_Bold}
              />
              <View style={{ ...appStyles.row }}>
                <Image
                  source={images.fire}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(60),
                    width: sizeHelper.calWp(60),
                  }}
                />
                <CustomText
                  text={"3 "}
                  fontFam={fonts.Inter_Bold}
                  fontWeight="700"
                  color={"#FF8C00"}
                  size={30}
                />
                <CustomText text={"days"} color={"#FF8C00"} size={18} />
              </View>
            </View>
          </View>

          {/* 2nd */}
          <View
            style={{
              ...styles.btn_container,
              paddingHorizontal: sizeHelper.calWp(30),
              width: "49%",
              height: sizeHelper.calHp(140),
            }}
          >
            <View style={{ gap: sizeHelper.calHp(3) }}>
              <CustomText
                text={"Hot Streak"}
                color={theme.colors.half_black}
                size={25}
                fontWeight="700"
                fontFam={fonts.Inter_Bold}
              />

              <CustomText
                text={"50u"}
                fontFam={fonts.Inter_Bold}
                fontWeight="700"
                color={theme.colors.secondry}
                size={30}
              />
              <CustomText
                text={"Jan 1-Jan30"}
                color={theme.colors.gray500}
                size={18}
              />
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <ScreenLayout style={styles.main}>
      <ScrollView
        contentContainerStyle={{
          gap: sizeHelper.calHp(30),
          paddingBottom: sizeHelper.calHp(30),
        }}
      >
        <Header />

        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner day={"Yesterday"} ROI={"39.1%"} />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
        {/* betsContaner */}
        <View style={appStyles.rowjustify}>
          <BetsContaner title={"MLB"} code={"407-344-10"} Bet={"15.89u"} />
          <BetsContaner title={"UFC"} code={"502-433-29"} Bet={"3.45u"} />
          <BetsContaner title={"BOXING"} code={"41-32-60"} Bet={"13.77u"} />
        </View>
        {/* FavoriteBets */}
        <FavoriteBetsContaner />
        {/* Closing Line */}
        <View
          style={{
            ...styles.btn_container,
            gap: sizeHelper.calHp(15),
            paddingHorizontal: sizeHelper.calWp(30),
          }}
        >
          <CustomText
            text={"Closing Line Value"}
            color={theme.colors.half_black}
            size={25}
            fontWeight="600"
            fontFam={fonts.Inter_Medium}
          />
          <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}>
            <ClosingValueContainer
              bgColor="#DDF1FF"
              title="+CLV Bets"
              rate="50.19%"
              total="150"
              color={theme.colors.secondry}
            />
            <ClosingValueContainer
              bgColor="#FEEBEB"
              title="-CLV Bets"
              rate="48.89%"
              total="74"
              color={theme.colors.primary}
            />
          </View>
        </View>
        {/* Streak */}
        <StreakConatiner />
      </ScrollView>
    </ScreenLayout>
  );
};

export default UserHistory;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    paddingHorizontal: sizeHelper.calWp(40),
  },
  btn_container: {
    borderRadius: sizeHelper.calWp(20),
    borderWidth: sizeHelper.calWp(0.6),
    borderColor: theme.colors.gray500,
    gap: sizeHelper.calWp(17),
    padding: sizeHelper.calWp(20),
  },
  btn_container2: {
    borderRadius: sizeHelper.calWp(20),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    gap: sizeHelper.calWp(17),
    padding: sizeHelper.calWp(30),
    //height: sizeHelper.calHp(230),
  },
  dots: {
    width: sizeHelper.calWp(12),
    height: sizeHelper.calWp(12),
    backgroundColor: "#0C5FBE",
    borderRadius: sizeHelper.calWp(10),
  },
  bet_percentage: {
    flexDirection: "row",
    height: sizeHelper.calHp(10),
    backgroundColor: "#D9D9D9",
    width: "80%",
    borderTopRightRadius: sizeHelper.calWp(20),
    borderBottomRightRadius: sizeHelper.calWp(20),
  },
});
