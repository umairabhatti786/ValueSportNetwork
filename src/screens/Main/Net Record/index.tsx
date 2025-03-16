import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import Player from "../../../components/Player";

const NetRecord = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          justifyContent: "space-between",
          // marginHorizontal: sizeHelper.calWp(40),
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...appStyles.row,
          }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(15),
              height: sizeHelper.calWp(20),
            }}
            source={images.left_arrow_black}
            resizeMode="contain"
          />
          <CustomText //screen name
            text={"Net Record"}
            color={theme.colors.half_black}
            size={30}
            style={{ paddingHorizontal: sizeHelper.calWp(20) }}
            fontWeight="900"
            fontFam={fonts.Inter_Bold}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Betslip")}>
          <Image
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
            }}
            source={images.filter}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };
  const DetailContaner = ({ day, ROI, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
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
      </TouchableOpacity>
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
  const ScrorePoints = () => {
    return (
      <View style={{ gap: sizeHelper.calHp(15) }}>
        <View style={{ ...appStyles.row }}>
          <Image
            source={images.player5}
            resizeMode="contain"
            style={{
              height: sizeHelper.calWp(60),
              width: sizeHelper.calWp(60),
              marginRight: sizeHelper.calWp(20),
              borderRadius: sizeHelper.calHp(50),
            }}
          />
          <CustomText text={"Marc"} size={24} fontWeight="700" />
          <Image
            resizeMode="contain"
            source={images.check}
            style={{
              height: sizeHelper.calHp(20),
              width: sizeHelper.calWp(20),
              marginLeft: sizeHelper.calWp(10),
              borderRadius: 50,
            }}
          />
        </View>

        {/* 2 */}
        <View
          style={{
            ...appStyles.row,
            gap: sizeHelper.calWp(10),
          }}
        >
          {/* imgs */}
          <View style={{ ...appStyles.row }}>
            <View
              style={{
                height: sizeHelper.calHp(60),
                width: sizeHelper.calWp(60),
                backgroundColor: "#EBF3FE",
                borderRadius: sizeHelper.calHp(50),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={images.check3}
                resizeMode="contain"
                style={{
                  height: sizeHelper.calHp(30),
                  width: sizeHelper.calWp(30),
                }}
              />
            </View>
            <View
              style={{
                height: sizeHelper.calHp(30),
                width: sizeHelper.calWp(30),
                backgroundColor: theme.colors.white,
                borderRadius: sizeHelper.calHp(50),
                borderWidth: sizeHelper.calHp(0.6),
                borderColor: "#AEAEAE",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: sizeHelper.calWp(-20),
                alignSelf: "flex-end",
              }}
            >
              <Image
                source={images.leakers}
                resizeMode="contain"
                style={{
                  height: sizeHelper.calHp(30),
                  width: sizeHelper.calWp(30),
                }}
              />
            </View>
          </View>
          {/* .............. */}
          <View>
            <View style={{ ...appStyles.row }}>
              <CustomText text={"3-Way Parlay"} size={20} />
              <CustomText
                text={"+200  |"}
                size={16}
                color={theme.colors.gray500}
              />
              <CustomText
                text={"  0.1u"}
                size={16}
                color={theme.colors.gray400}
              />
            </View>
          </View>
        </View>
        {/* 3 */}
        <View
          style={{
            borderWidth: sizeHelper.calHp(0.5),
            borderColor: theme.colors.gray500,
            borderRadius: 10,
            gap: sizeHelper.calHp(20),
            padding: sizeHelper.calHp(20),
            width: "70%",
            alignSelf: "center",
          }}
        >
          {/* 1st */}
          <View style={{ ...appStyles.row }}>
            <View style={{ ...appStyles.row }}>
              <View
                style={{
                  height: sizeHelper.calHp(60),
                  width: sizeHelper.calWp(60),
                  backgroundColor: "#FEEBEB",
                  borderRadius: sizeHelper.calHp(50),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={images.cross}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(30),
                    width: sizeHelper.calWp(30),
                  }}
                />
              </View>
              <View
                style={{
                  height: sizeHelper.calHp(30),
                  width: sizeHelper.calWp(30),
                  backgroundColor: theme.colors.white,
                  borderRadius: sizeHelper.calHp(50),
                  borderWidth: sizeHelper.calHp(0.6),
                  borderColor: "#AEAEAE",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: sizeHelper.calWp(-20),
                  alignSelf: "flex-end",
                }}
              >
                <Image
                  source={images.leakers}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(30),
                    width: sizeHelper.calWp(30),
                  }}
                />
              </View>
            </View>
            <View style={{ marginLeft: sizeHelper.calWp(20) }}>
              <View style={{ ...appStyles.row }}>
                <CustomText text={"Alex.D To Score 10+ Points | "} size={16} />
                <CustomText
                  text={"-100"}
                  size={16}
                  color={theme.colors.gray500}
                />
              </View>
              <CustomText
                text={"MEM @NYK  |  1/28  1:30am"}
                size={16}
                color={theme.colors.gray500}
              />
            </View>
          </View>
          {/* 2nd */}
          <View style={{ ...appStyles.row }}>
            <View style={{ ...appStyles.row }}>
              <View
                style={{
                  height: sizeHelper.calHp(60),
                  width: sizeHelper.calWp(60),
                  backgroundColor: "#EBF3FE",
                  borderRadius: sizeHelper.calHp(50),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={images.check3}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(30),
                    width: sizeHelper.calWp(30),
                  }}
                />
              </View>
              <View
                style={{
                  height: sizeHelper.calHp(30),
                  width: sizeHelper.calWp(30),
                  backgroundColor: theme.colors.white,
                  borderRadius: sizeHelper.calHp(50),
                  borderWidth: sizeHelper.calHp(0.6),
                  borderColor: "#AEAEAE",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: sizeHelper.calWp(-20),
                  alignSelf: "flex-end",
                }}
              >
                <Image
                  source={images.leakers}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(30),
                    width: sizeHelper.calWp(30),
                  }}
                />
              </View>
            </View>
            <View style={{ marginLeft: sizeHelper.calWp(20) }}>
              <View style={{ ...appStyles.row }}>
                <CustomText text={"Alex.D To Score 10+ Points | "} size={16} />
                <CustomText
                  text={"-100"}
                  size={16}
                  color={theme.colors.gray500}
                />
              </View>
              <CustomText
                text={"MEM @NYK  |  1/28  1:30am"}
                size={16}
                color={theme.colors.gray500}
              />
            </View>
          </View>
          {/* 3nd */}
          <View style={{ ...appStyles.row }}>
            <View style={{ ...appStyles.row }}>
              <View
                style={{
                  height: sizeHelper.calHp(60),
                  width: sizeHelper.calWp(60),
                  backgroundColor: "#EBF3FE",
                  borderRadius: sizeHelper.calHp(50),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={images.check3}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(30),
                    width: sizeHelper.calWp(30),
                  }}
                />
              </View>
              <View
                style={{
                  height: sizeHelper.calHp(30),
                  width: sizeHelper.calWp(30),
                  backgroundColor: theme.colors.white,
                  borderRadius: sizeHelper.calHp(50),
                  borderWidth: sizeHelper.calHp(0.6),
                  borderColor: "#AEAEAE",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: sizeHelper.calWp(-20),
                  alignSelf: "flex-end",
                }}
              >
                <Image
                  source={images.leakers}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(30),
                    width: sizeHelper.calWp(30),
                  }}
                />
              </View>
            </View>
            <View style={{ marginLeft: sizeHelper.calWp(20) }}>
              <View style={{ ...appStyles.row }}>
                <CustomText text={"Alex.D To Score 10+ Points | "} size={16} />
                <CustomText
                  text={"-100"}
                  size={16}
                  color={theme.colors.gray500}
                />
              </View>
              <CustomText
                text={"MEM @NYK  |  1/28  1:30am"}
                size={16}
                color={theme.colors.gray500}
              />
            </View>
          </View>
        </View>
      </View>
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
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>

        {/* Streak */}
        <StreakConatiner />

        {/* score */}
        <ScrorePoints />
      </ScrollView>
    </ScreenLayout>
  );
};

export default NetRecord;

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
  imgCircle: {
    width: sizeHelper.calWp(50),
    height: sizeHelper.calHp(50),
    borderRadius: sizeHelper.calHp(50),
    borderWidth: sizeHelper.calWp(2),
    borderColor: theme.colors.white,
  },
});
