import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomHeader from "../../../components/Header";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButton from "../../../components/Button";

const Betslip = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const Tabs = ["Straight", "Parlay", "Teaser"];

  const logo = [images.logo1, images.logo2, images.logo3, images.logo4];
  const Bar = ({ logo }: { logo: any }) => {
    return (
      <View
        style={{
          borderWidth: 0.3,
          borderColor: "#B2B2B2",
          borderRadius: 10,
          padding: 15,
          ...appStyles.row,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{ ...appStyles.row, gap: 10 }}>
          <Image
            source={logo}
            resizeMode="contain"
            style={{ height: 15, width: 15 }}
          />
          <CustomText text={"Fanduel"} size={20} />
        </View>
        <View style={{ ...appStyles.row, gap: 30 }}>
          <View style={{ ...appStyles.row }}>
            <CustomText text={"Yes "} size={20} />
            <CustomText text={"-100"} size={20} color={theme.colors.gray700} />
          </View>
          <CustomText text={"$2.00"} size={20} />
        </View>
      </View>
    );
  };
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
        {/* 1 */}
        <View
          style={{
            ...appStyles.row,
            justifyContent: "center",
            marginHorizontal: sizeHelper.calWp(40),
          }}
        >
          <Image
            source={images.prev}
            style={{
              height: sizeHelper.calHp(40),
              width: sizeHelper.calWp(40),
            }}
          />
          {/* card */}
          <View
            style={{
              marginTop: 15,
              shadowColor: "#000",
              shadowOpacity: 0.2,
              shadowRadius: 5,
              elevation: 4, // Android shadow
              borderRadius: 10, // Apply border radius to match inside View
              backgroundColor: theme.colors.white, // Ensure shadow is visible
              padding: 2, // Add slight padding to separate shadow from inner view
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.grayF6,
                borderRadius: 10,
                borderWidth: 0.6,
                overflow: "hidden", // Prevents child components from casting shadows outside the border
              }}
            >
              {/* 1.1 */}
              <View
                style={{
                  ...appStyles.row,
                  justifyContent: "space-between",
                  marginVertical: 10,
                  marginHorizontal: 20,
                }}
              >
                {/* texts */}
                <View>
                  <View style={{ ...appStyles.row }}>
                    <CustomText
                      text={"Alex.D To Score 10+ Points | "}
                      size={16}
                    />
                    <CustomText
                      text={"-100"}
                      size={16}
                      color={theme.colors.gray500}
                    />
                  </View>
                  <CustomText
                    text={"MEM @NYK"}
                    size={16}
                    color={theme.colors.gray500}
                  />
                </View>
                {/* answer book btn */}
                <View
                  style={{
                    ...appStyles.row,
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: theme.colors.grayD9,
                    width: 78,
                    height: 21,
                    gap: 4,
                    justifyContent: "center",
                  }}
                >
                  <CustomText
                    text={"Assign Book"}
                    size={16}
                    color={theme.colors.gray100}
                  />
                  <Image
                    source={images.down_gray}
                    resizeMode="contain"
                    style={{
                      height: sizeHelper.calHp(15),
                      width: sizeHelper.calWp(15),
                      tintColor: theme.colors.gray700,
                    }}
                  />
                </View>
              </View>
              {/* line */}
              <View style={styles.line} />
              {/* 1.2 */}
              <View
                style={{
                  marginHorizontal: 15,
                  marginVertical: 10,
                  ...appStyles.row,
                  flexWrap: "wrap",
                  gap: 10,
                  justifyContent: "center",
                }}
              >
                <View
                  style={[
                    styles.reteBar,
                    { backgroundColor: "#FEEBEB", borderColor: "#FF8B8B" },
                  ]}
                >
                  <CustomText
                    text={"Risk"}
                    size={16}
                    color={theme.colors.gray700}
                  />
                  <CustomText
                    text={"|"}
                    size={16}
                    color={theme.colors.gray700}
                  />
                  <CustomText
                    text={"$1.00"}
                    size={16}
                    color={theme.colors.primary}
                  />
                </View>

                <View
                  style={[
                    styles.reteBar,
                    {
                      backgroundColor: "#EBF3FE",
                      borderColor: "#8BBFFF",
                    },
                  ]}
                >
                  <CustomText
                    text={"To Win"}
                    size={16}
                    color={theme.colors.gray700}
                  />
                  <CustomText
                    text={"|"}
                    size={16}
                    color={theme.colors.gray700}
                  />
                  <CustomText text={"$2.00"} size={16} color="#0C5FBE" />
                </View>

                <View
                  style={[
                    styles.reteBar,
                    {
                      backgroundColor: theme.colors.grayF6,
                      borderColor: "#737373",
                    },
                  ]}
                >
                  <CustomText
                    text={"Value"}
                    size={16}
                    color={theme.colors.gray700}
                  />
                  <CustomText
                    text={"|"}
                    size={16}
                    color={theme.colors.gray700}
                  />
                  <CustomText text={"-100"} size={16} />
                </View>

                <View
                  style={[
                    styles.reteBar,
                    {
                      backgroundColor: theme.colors.grayF6,
                      borderColor: "#737373",
                    },
                  ]}
                >
                  <CustomText text={"Odds"} size={16} />
                  <CustomText text={"|"} size={16} />
                  <CustomText
                    text={"-100"}
                    size={16}
                    color={theme.colors.primary}
                  />
                </View>
              </View>
              {/* line */}
              <View style={styles.line} />
              <View
                style={{
                  marginHorizontal: 15,
                  marginVertical: 5,
                  ...appStyles.row,
                  gap: 10,
                }}
              >
                <Image
                  source={images.player1}
                  style={{
                    height: sizeHelper.calHp(40),
                    width: sizeHelper.calWp(40),
                    borderRadius: 50,
                  }}
                />
                <TextInput placeholder="Add a note or tag..." />
              </View>
            </View>
          </View>

          <Image
            source={images.next2}
            style={{
              height: sizeHelper.calHp(40),
              width: sizeHelper.calWp(40),
            }}
          />
        </View>
        {/* 2 edit */}
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: theme.colors.grayF6,
            borderWidth: 0.3,
            borderColor: "#B2B2B2",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <CustomText text={"Edit Bets"} size={16} />
          <Image
            source={images.edit}
            resizeMode="contain"
            style={{ height: 15, width: 15 }}
          />
        </View>
        {/* 3 */}
        <View
          style={{
            borderWidth: 0.3,
            borderColor: "#B2B2B2",
            borderRadius: 10,
            padding: 10,
            ...appStyles.row,
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View style={{ ...appStyles.row, gap: 10 }}>
            <Image
              source={images.logo1}
              resizeMode="contain"
              style={{ height: 15, width: 15 }}
            />
            <CustomText text={"Fanduel"} size={20} />
          </View>
          <View style={{ ...appStyles.row, gap: 30 }}>
            <View style={{ ...appStyles.row }}>
              <CustomText text={"Yes "} size={20} />
              <CustomText
                text={"-100"}
                size={20}
                color={theme.colors.gray700}
              />
            </View>
            <CustomText text={"$2.00"} size={20} />
          </View>
        </View>
        {logo.map((it, index) => (
          <Bar key={index} logo={it} />
        ))}
      </View>
      {/* bottom */}
      <View>
        <View style={styles.line} />
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            paddingVertical: 20,
            marginHorizontal: sizeHelper.calWp(40),
          }}
        >
          <Image
            source={images.bars}
            resizeMode="contain"
            style={{ height: 35, width: 35 }}
          />
          <CustomButton
            text="Track Picks"
            width={"90%"}
            onPress={() => navigation.navigate("ExploreUsers")}
          />
        </View>
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
    justifyContent: "space-between",
  },
  content: {
    marginHorizontal: sizeHelper.calWp(40),
  },
  downArrow: {
    height: sizeHelper.calHp(45),
    width: sizeHelper.calWp(44),
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.gray500,
  },
  reteBar: {
    width: 130,
    height: 22,
    borderRadius: 5,
    borderWidth: 0.3,
    paddingHorizontal: 5,
    ...appStyles.row,
    justifyContent: "space-between",
  },
});
