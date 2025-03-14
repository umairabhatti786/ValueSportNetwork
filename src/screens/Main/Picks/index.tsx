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
  const PlayersData = [
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "1hr ago",
      record: " | NBA Record: +179.43u",
    },
  ];
  const Tabs = ["SPREAD", "MONEY LINE", "PARLAYS", "OTHER"];
  const [activeTab, setActiveTab] = useState(0);
  const OthersTab = () => {
    return (
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.gray500,
        }}
      >
        {PlayersData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Betslip")}
              key={index}
              style={{
                gap: sizeHelper.calHp(30),
                paddingHorizontal: sizeHelper.calWp(40),
                paddingVertical: sizeHelper.calHp(25),
              }}
            >
              {/* Player Component */}
              <Player
                pic={item.pic}
                name={item.name}
                time={item.time}
                record={item.record}
              />

              {/* Betting Info */}
              <View
                style={{
                  ...appStyles.row,
                  justifyContent: "space-between",
                }}
              >
                <View style={{ ...appStyles.row }}>
                  <Image source={images.player1} style={styles.imgCircle} />
                  <View style={{ marginLeft: 10 }}>
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
                      text={"MEM @NYK  |  1/28  1:30am"}
                      size={16}
                      color={theme.colors.gray500}
                    />
                  </View>
                </View>

                {/* Icons Section */}
                <View style={{ ...appStyles.row, gap: sizeHelper.calWp(25) }}>
                  {/* Plus Icon */}
                  <View
                    style={{
                      ...appStyles.row,
                      gap: sizeHelper.calWp(10),
                    }}
                  >
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

                  {/* Heart Icon */}
                  <View
                    style={{
                      ...appStyles.row,
                      gap: sizeHelper.calWp(10),
                    }}
                  >
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
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <View>
        {/* header and tabs */}
        <View
          style={{
            gap: sizeHelper.calHp(20),
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
                  backgroundColor: theme.colors.grayF6,
                  borderWidth: sizeHelper.calWp(1),
                  borderColor: theme.colors.gray700,
                  borderRadius: sizeHelper.calWp(5),
                  padding: sizeHelper.calWp(15),
                  justifyContent: "space-between",
                  // shadowOffset: { width: 0, height: 0 },
                  shadowColor: theme.colors.black,
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
                  <CustomText text={"1"} fontWeight="700" />
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    backgroundColor: theme.colors.primary,
                    borderRadius: sizeHelper.calHp(10),
                  }}
                />
              </View>
              {/* card 2 */}
              <View
                style={{
                  width: sizeHelper.calWp(320),
                  height: sizeHelper.calHp(100),
                  padding: sizeHelper.calHp(15),
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ ...appStyles.row, justifyContent: "space-between" }}
                >
                  <CustomText
                    text={"0"}
                    fontWeight="700"
                    color={theme.colors.gray500}
                  />
                  <View style={{ ...appStyles.row }}>
                    <CustomText
                      text={"NYK"}
                      color={theme.colors.gray500}
                      size={20}
                      style={{ paddingRight: sizeHelper.calWp(20) }}
                    />
                    <Image
                      source={images.lakers}
                      resizeMode="contain"
                      style={{
                        width: sizeHelper.calWp(40),
                        height: sizeHelper.calHp(35),
                      }}
                    />
                  </View>
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    backgroundColor: "#D9D9D9",
                    borderRadius: sizeHelper.calHp(10),
                  }}
                />
              </View>
            </View>
            {/* //spread */}
            <View
              style={{
                borderWidth: sizeHelper.calWp(1),
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
                  padding: sizeHelper.calWp(15),
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
                      }}
                    />
                    <CustomText
                      text={"MEM"}
                      color={theme.colors.gray500}
                      size={20}
                      style={{ marginLeft: sizeHelper.calWp(20) }}
                    />
                  </View>
                  <CustomText
                    text={"0"}
                    fontWeight="700"
                    color={theme.colors.gray500}
                  />
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    backgroundColor: "#D9D9D9",
                    borderRadius: sizeHelper.calHp(10),
                  }}
                />
              </View>
              {/* card 2 */}
              <View
                style={{
                  height: sizeHelper.calHp(100),
                  width: sizeHelper.calWp(320),
                  backgroundColor: theme.colors.grayF6,
                  borderWidth: sizeHelper.calWp(1),
                  borderColor: theme.colors.gray700,
                  borderRadius: sizeHelper.calWp(5),
                  padding: sizeHelper.calWp(15),
                  justifyContent: "space-between",
                  // shadowOffset: { width: 0, height: 0 },
                  shadowColor: theme.colors.black,
                  shadowOpacity: 0.15, // Adjust for lighter shadow
                  shadowRadius: 4, // Blurriness
                  elevation: 4, // Required for Android
                }}
              >
                <View
                  style={{ ...appStyles.row, justifyContent: "space-between" }}
                >
                  <CustomText text={"1"} fontWeight="700" />
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
                      }}
                    />
                  </View>
                </View>
                {/* bar */}
                <View
                  style={{
                    width: "100%",
                    height: sizeHelper.calHp(10),
                    backgroundColor: theme.colors.primary,
                    borderRadius: sizeHelper.calHp(10),
                  }}
                />
              </View>
            </View>
            {/* //Moneyline */}
            <View
              style={{
                borderWidth: sizeHelper.calWp(1),
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
        {activeTab == 2 && (
          <View
            style={{
              paddingHorizontal: sizeHelper.calWp(40),
              paddingVertical: sizeHelper.calHp(25),
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomText text={"Parlays"} size={24} fontWeight="700" />
            {PlayersData.map((item, index) => {
              return (
                <View style={{ gap: sizeHelper.calHp(20) }}>
                  {/* 1 */}
                  <Player
                    pic={item.pic}
                    name={item.name}
                    time={item.time}
                    record={item.record}
                  />
                  {/* 2 */}
                  <View
                    style={{
                      ...appStyles.row,
                      gap: sizeHelper.calWp(10),
                    }}
                  >
                    {/* imgs */}
                    <View style={{ ...appStyles.row }}>
                      <Image source={images.player1} style={styles.imgCircle} />
                      <Image
                        source={images.player2}
                        style={[styles.imgCircle, { marginLeft: -20 }]}
                      />
                      <Image
                        source={images.player3}
                        style={[styles.imgCircle, { marginLeft: -15 }]}
                      />
                    </View>
                    <View>
                      <CustomText text={"3-Way Parlay"} size={20} />
                      <View style={{ ...appStyles.row }}>
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
                    {[1, 2, 3].map((i) => {
                      return (
                        <View style={{ ...appStyles.row }}>
                          <Image
                            source={images.player1}
                            style={styles.imgCircle}
                          />
                          <View style={{ marginLeft: 10 }}>
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
                              text={"MEM @NYK  |  1/28  1:30am"}
                              size={16}
                              color={theme.colors.gray500}
                            />
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        )}
        {/* //active tab 2 end */}
        {activeTab == 3 && (
          <View>
            <CustomText
              text={"Other"}
              size={24}
              fontWeight="700"
              style={{
                paddingHorizontal: sizeHelper.calWp(40),
                paddingTop: sizeHelper.calHp(20),
              }}
            />

            {[1, 2, 3, 4, 5].map((index) => (
              <OthersTab key={index} />
            ))}
          </View>
        )}

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
  imgCircle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
});
