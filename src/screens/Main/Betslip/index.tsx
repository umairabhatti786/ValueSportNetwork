import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../../components/Text";
import { images } from "../../../assets/pngs";
import { appStyles } from "../../../utils/GlobalStyles";
import CustomButton from "../../../components/Button";

const Betslip = ({ navigation }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const Tabs = ["Straight", "Parlay", "Teaser"];

  const logo = [images.logo1, images.logo2, images.logo3, images.logo4];
  const Bar = ({ logo }: { logo: any }) => {
    return (
      <View
        style={{
          borderWidth: sizeHelper.calWp(0.6),
          borderColor: "#B2B2B2",
          borderRadius: sizeHelper.calWp(15),
          padding: sizeHelper.calWp(20),
          ...appStyles.row,
          justifyContent: "space-between",
          marginTop: sizeHelper.calHp(35),
        }}
      >
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <Image
            source={logo}
            resizeMode="contain"
            style={{
              height: sizeHelper.calHp(30),
              width: sizeHelper.calWp(30),
            }}
          />
          <CustomText text={"Fanduel"} size={20} />
        </View>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(40) }}>
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
                borderRadius: sizeHelper.calWp(50),
                width: sizeHelper.calWp(35),
                height: sizeHelper.calHp(35),
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                left: sizeHelper.calWp(90),
                bottom: sizeHelper.calHp(15),
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
            borderBottomWidth: sizeHelper.calWp(0.6),
            borderBottomColor: theme.colors.gray500,
            marginHorizontal: sizeHelper.calHp(-40),
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
              marginTop: sizeHelper.calHp(25),
              shadowColor: "#000",
              shadowOpacity: sizeHelper.calHp(0.2),
              shadowRadius: sizeHelper.calHp(15),
              elevation: 4,
              borderRadius: sizeHelper.calHp(15),
              backgroundColor: theme.colors.white,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.grayF6,
                borderRadius: sizeHelper.calHp(15),
                borderWidth: sizeHelper.calHp(0.6),
                overflow: "hidden",
              }}
            >
              {/* 1.1 */}
              <View
                style={{
                  ...appStyles.row,
                  justifyContent: "space-between",
                  marginVertical: sizeHelper.calHp(15),
                  marginHorizontal: sizeHelper.calWp(30),
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
                    borderWidth: sizeHelper.calHp(0.6),
                    borderRadius: sizeHelper.calHp(10),
                    borderColor: theme.colors.grayD9,
                    width: sizeHelper.calWp(150),
                    height: sizeHelper.calHp(40),
                    gap: sizeHelper.calHp(4),
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
                  marginHorizontal: sizeHelper.calHp(30),
                  marginVertical: sizeHelper.calWp(20),
                  ...appStyles.row,
                  flexWrap: "wrap",
                  gap: sizeHelper.calHp(15),
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
                  marginHorizontal: sizeHelper.calHp(30),
                  marginVertical: sizeHelper.calHp(10),
                  ...appStyles.row,
                  gap: sizeHelper.calHp(15),
                }}
              >
                <Image
                  source={images.player1}
                  style={{
                    height: sizeHelper.calHp(40),
                    width: sizeHelper.calWp(40),
                    borderRadius: sizeHelper.calWp(50),
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
            paddingVertical: sizeHelper.calHp(20),
            paddingHorizontal: sizeHelper.calWp(40),
            backgroundColor: theme.colors.grayF6,
            borderWidth: sizeHelper.calHp(0.5),
            borderColor: "#B2B2B2",
            borderRadius: sizeHelper.calHp(15),
            marginTop: sizeHelper.calHp(40),
          }}
        >
          <CustomText text={"Edit Bets"} size={16} />
          <Image
            source={images.edit}
            resizeMode="contain"
            style={{
              height: sizeHelper.calHp(25),
              width: sizeHelper.calWp(25),
            }}
          />
        </View>
        {/* 3 */}
        <View
          style={{
            borderWidth: sizeHelper.calHp(0.5),
            borderColor: "#B2B2B2",
            // padding: 10,
            padding: sizeHelper.calHp(20),
            ...appStyles.row,
            justifyContent: "space-between",
            marginVertical: sizeHelper.calHp(40),
            borderRadius: sizeHelper.calHp(15),
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calHp(20) }}>
            <Image
              source={images.logo1}
              resizeMode="contain"
              style={{
                height: sizeHelper.calHp(25),
                width: sizeHelper.calHp(25),
              }}
            />
            <CustomText text={"Fanduel"} size={20} />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calHp(40) }}>
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
            paddingVertical: sizeHelper.calHp(35),
            marginHorizontal: sizeHelper.calWp(40),
          }}
        >
          <Image
            source={images.bars}
            resizeMode="contain"
            style={{
              height: sizeHelper.calHp(70),
              width: sizeHelper.calWp(70),
            }}
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
    borderBottomWidth: sizeHelper.calWp(0.6),
    borderBottomColor: theme.colors.gray500,
  },
  reteBar: {
    // width: 130,
    width: sizeHelper.calWp(250),
    height: sizeHelper.calHp(40),
    borderRadius: sizeHelper.calHp(10),
    borderWidth: sizeHelper.calWp(0.6),
    paddingHorizontal: sizeHelper.calWp(10),
    ...appStyles.row,
    justifyContent: "space-between",
  },
});
