import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import Player from "../../../components/Player";

const picks = ({ navigation }: any) => {
  const SpreadPlayersData = [
    { pic: images.player1, name: "Marc Alex", time: "1hr ago" },
    { pic: images.player2, name: "Marc Alex", time: "1hr ago" },
  ];
  const MoneylinePlayersData = [
    { pic: images.player3, name: "Marc Alex", time: "1hr ago" },
    { pic: images.player4, name: "Marc Alex", time: "1hr ago" },
  ];
  const Tabs = ["SPREAD", "MONEY LINE", "PARLAYS", "OTHER"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ScreenLayout style={styles.main}>
      <View
        style={
          {
            // gap: sizeHelper.calHp(10),
          }
        }
      >
        {/* header and tabs */}
        <View
          style={{
            gap: sizeHelper.calHp(20),
            // backgroundColor: theme.colors.white,
          }}
        >
          {/* header */}
          <View
            style={{
              ...appStyles.row,
              justifyContent: "space-between",
              marginHorizontal: sizeHelper.calWp(40),
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
                text={"Picks"}
                color={theme.colors.half_black}
                size={30}
                style={{ paddingHorizontal: sizeHelper.calWp(20) }}
                fontWeight="900"
                fontFam={fonts.Inter_Bold}
              />
            </TouchableOpacity>
            <Image
              style={{
                width: sizeHelper.calWp(40),
                height: sizeHelper.calWp(40),
              }}
              source={images.filter}
              resizeMode="contain"
            />
          </View>
          {/* Tabs */}
          <View
            style={{
              ...appStyles.row,
              paddingHorizontal: sizeHelper.calWp(40),
              gap: sizeHelper.calWp(30),
              borderBottomWidth: 0.5,
              borderBottomColor: theme.colors.gray500,
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
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      marginTop: sizeHelper.calHp(5),
                    }}
                  >
                    {activeTab == index && (
                      <View
                        style={{
                          width: "100%",
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
        </View>

        {activeTab == 0 && (
          <View>
            {/* // cards dev */}
            <View
              style={{
                ...appStyles.row,
                paddingHorizontal: sizeHelper.calWp(40),
                paddingVertical: sizeHelper.calHp(25),
                justifyContent: "space-between",
              }}
            >
              {/* card 1 */}
              <View
                style={{
                  height: sizeHelper.calHp(100),
                  width: sizeHelper.calWp(320),
                  backgroundColor: "#F6F6F6",
                  borderWidth: 0.1,
                  borderColor: "#757575",
                  borderRadius: 5,
                  padding: 10,
                  justifyContent: "space-between",
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: "#000000",
                  shadowOpacity: 0.15, // Adjust for lighter shadow
                  shadowRadius: 4, // Blurriness
                  elevation: 4, // Required for Android
                }}
              >
                <View
                  style={{ ...appStyles.row, justifyContent: "space-between" }}
                >
                  <View style={{ ...appStyles.row }}>
                    <Image
                      source={images.nba}
                      resizeMode="contain"
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calHp(35),
                        // width: 22,
                        // height: 21,
                      }}
                    />

                    <CustomText
                      text={"MEM"}
                      size={20}
                      style={{ paddingLeft: 10 }}
                    />
                  </View>
                  <CustomText
                    text={"1"}
                    fontWeight="700"
                    style={{ paddingLeft: 10 }}
                  />
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    // height: 5,
                    backgroundColor: "#FF0000",
                    borderRadius: 5,
                  }}
                />
              </View>
              {/* card 2 */}
              <View
                style={{
                  width: sizeHelper.calWp(320),
                  height: sizeHelper.calHp(100),
                  //backgroundColor: "#F6F6F6",
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ ...appStyles.row, justifyContent: "space-between" }}
                >
                  <CustomText
                    text={"0"}
                    fontWeight="700"
                    color="#797D86"
                    style={{ paddingLeft: 10 }}
                  />
                  <View style={{ ...appStyles.row }}>
                    <CustomText
                      text={"NYK"}
                      color="#797D86"
                      size={20}
                      style={{ paddingRight: 10 }}
                    />
                    <Image
                      source={images.lakers}
                      resizeMode="contain"
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calHp(35),
                        // width: 22,
                        // height: 21,
                      }}
                    />
                  </View>
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    // height: 5,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            {/* //spread */}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: theme.colors.gray500,
                padding: sizeHelper.calWp(40),
                gap: sizeHelper.calHp(20),
              }}
            >
              <CustomText text={"Spread"} size={24} fontWeight="700" />
              {SpreadPlayersData.map((item, index) => {
                return (
                  <View style={{ gap: sizeHelper.calHp(20) }}>
                    <Player pic={item.pic} name={item.name} time={item.time} />
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {/* //active tab 0 end */}

        {activeTab == 1 && (
          <View>
            {/* // cards dev */}
            <View
              style={{
                ...appStyles.row,
                paddingHorizontal: sizeHelper.calWp(40),
                paddingVertical: sizeHelper.calHp(25),
                justifyContent: "space-between",
              }}
            >
              {/* card 1 */}
              <View
                style={{
                  width: sizeHelper.calWp(320),
                  height: sizeHelper.calHp(100),
                  padding: 10,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ ...appStyles.row, justifyContent: "space-between" }}
                >
                  <View style={{ ...appStyles.row }}>
                    <Image
                      source={images.lakers}
                      resizeMode="contain"
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calHp(35),
                        // width: 22,
                        // height: 21,
                      }}
                    />
                    <CustomText
                      text={"MEM"}
                      color="#797D86"
                      size={20}
                      style={{ marginLeft: sizeHelper.calWp(20) }}
                    />
                  </View>
                  <CustomText
                    text={"0"}
                    fontWeight="700"
                    color="#797D86"
                    style={{ paddingLeft: 10 }}
                  />
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    // height: 5,
                    backgroundColor: "#D9D9D9",
                    borderRadius: 5,
                  }}
                />
              </View>
              {/* card 2 */}
              <View
                style={{
                  height: sizeHelper.calHp(100),
                  width: sizeHelper.calWp(320),
                  backgroundColor: "#F6F6F6",
                  borderWidth: 0.1,
                  borderColor: "#757575",
                  borderRadius: 5,
                  padding: 10,
                  justifyContent: "space-between",
                  shadowOffset: { width: 0, height: 0 },
                  shadowColor: "#000000",
                  shadowOpacity: 0.15, // Adjust for lighter shadow
                  shadowRadius: 4, // Blurriness
                  elevation: 4, // Required for Android
                }}
              >
                <View
                  style={{ ...appStyles.row, justifyContent: "space-between" }}
                >
                  <CustomText
                    text={"1"}
                    fontWeight="700"
                    style={{ paddingLeft: 10 }}
                  />
                  <View style={{ ...appStyles.row }}>
                    <CustomText
                      text={"NYK"}
                      size={20}
                      style={{ marginRight: sizeHelper.calWp(20) }}
                    />
                    <Image
                      source={images.mem}
                      resizeMode="contain"
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calHp(35),
                        // width: 22,
                        // height: 21,
                      }}
                    />
                  </View>
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    // height: 5,
                    backgroundColor: "#FF0000",
                    borderRadius: 5,
                  }}
                />
              </View>
            </View>
            {/* //Moneyline */}
            <View
              style={{
                borderWidth: 0.5,
                borderColor: theme.colors.gray500,
                padding: sizeHelper.calWp(40),
                gap: sizeHelper.calHp(20),
              }}
            >
              <CustomText text={"Moneyline"} size={24} fontWeight="700" />
              {MoneylinePlayersData.map((item, index) => {
                return (
                  <View style={{ gap: sizeHelper.calHp(20) }}>
                    <Player pic={item.pic} name={item.name} time={item.time} />
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {/* //active tab 1 end */}

        {/* game guide */}
        <View
          style={{
            marginHorizontal: sizeHelper.calWp(40),
            marginVertical: sizeHelper.calHp(20),
            gap: sizeHelper.calHp(10),
          }}
        >
          <CustomText text={"Game Guide"} size={24} fontWeight="700" />
          <View style={{ ...appStyles.row, justifyContent: "space-between" }}>
            {/* //for link */}
            <View style={{ ...appStyles.row }}>
              <CustomText
                text={"Game Guide :"}
                size={16}
                color={theme.colors.gray700}
              />
              <TouchableOpacity>
                <CustomText
                  text={"https://www.valuesports.com/..."}
                  size={16}
                  color={theme.colors.blue100}
                />
              </TouchableOpacity>
            </View>
            {/* icons */}
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
              {/* plus icon */}
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <Image
                  source={images.plusBox}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calWp(25),
                    width: sizeHelper.calWp(25),
                  }}
                />
                <CustomText
                  text={"20"}
                  size={20}
                  color={theme.colors.gray700}
                />
              </View>
              {/* heart icon */}
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <Image
                  source={images.heart}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calWp(25),
                    width: sizeHelper.calWp(25),
                  }}
                />
                <CustomText
                  text={"10"}
                  size={20}
                  color={theme.colors.gray700}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenLayout>
  );
};

export default picks;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(20),
    flex: 1,
    // backgroundColor: "#F5F5F5",
    backgroundColor: theme.colors.white,
  },
});
