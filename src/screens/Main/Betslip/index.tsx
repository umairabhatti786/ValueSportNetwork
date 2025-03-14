import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomHeader from "../../../components/Header";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";
import { fonts } from "../../../utils/Themes/fonts";

const Betslip = () => {
  const [activeTab, setActiveTab] = useState(0);
  const Tabs = ["Straight", "Parlay", "Teaser"];

  return (
    <ScreenLayout style={styles.main}>
      <View style={styles.content}>
        {/* //header */}
        <View style={{ ...appStyles.row, justifyContent: "space-between" }}>
          <View>
            <CustomText //screen name
              text={"Betslip"}
              color={theme.colors.half_black}
              size={30}
              fontWeight="900"
            />
            {/* //notification */}
            <View
              style={{
                backgroundColor: theme.colors.primary,
                borderRadius: 50,
                width: 20,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: 50,
                bottom: 10,
              }}
            >
              <CustomText text={"1"} color={theme.colors.white} size={20} />
            </View>
          </View>
          <Image
            source={images.downArrowCircled}
            style={styles.downArrow}
            resizeMode="contain"
          />
        </View>
        {/* tabs */}
        <View
          style={{
            ...appStyles.row,
            // gap: sizeHelper.calWp(60),
            justifyContent: "space-between",
            paddingHorizontal: sizeHelper.calWp(25),
            paddingTop: sizeHelper.calHp(25),
          }}
        >
          {Tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index.toString()}
                onPress={() => setActiveTab(index)}
              >
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                  <CustomText
                    text={item}
                    size={19}
                    color={
                      activeTab == index
                        ? theme.colors.black
                        : theme.colors.gray500
                    }
                  />
                </View>
                {/* underline active tab */}
                <View
                  style={{
                    height: sizeHelper.calHp(10),
                    width: "110%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    marginTop: sizeHelper.calHp(5),
                  }}
                >
                  {activeTab == index && (
                    <View
                      style={{
                        width: "150%",
                        height: sizeHelper.calHp(5.5),
                        backgroundColor: theme.colors.primary,
                        borderTopLeftRadius: sizeHelper.calWp(10),
                        borderTopRightRadius: sizeHelper.calWp(10),
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* border line */}
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.gray500,
            marginHorizontal: -30,
          }}
        />
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
  content: {
    marginHorizontal: sizeHelper.calWp(40),
  },
  downArrow: {
    height: sizeHelper.calHp(45),
    width: sizeHelper.calWp(44),
  },
});
