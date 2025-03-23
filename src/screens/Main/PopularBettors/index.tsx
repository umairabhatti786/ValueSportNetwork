import {
  FlatList,
  Image,
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

const PopularBettors = ({ navigation }: any) => {
  const Tabs = [
    "All",
    "NFL",
    "NBA",
    "NCAAB",
    "NHL",
    "SOCCER",
    "NCAAW",
    "PGA",
    "MLB",
    "NBA",
    "NBA",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const PopularBettorsData = [
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player,
      info: "All time: +179.43u",
      isFollowing: false,
    },
  ];
  const Header = () => {
    return (
      <TouchableOpacity
      onPress={() => navigation.goBack()}

        style={{
          ...appStyles.row,
          backgroundColor: theme.colors.white,
        }}
      >
        <View
          style={{ paddingHorizontal: sizeHelper.calWp(40) }}
        >
          <Image
            style={{
              width: sizeHelper.calWp(15),
              height: sizeHelper.calWp(20),
            }}
            source={images.left_arrow_black}
            resizeMode="contain"
          />
        </View>
        <CustomText
          text={"Popular Bettors"}
          color={theme.colors.black}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
          numberOfLines={2}
          size={30}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />
      {/* Tabs */}
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.gray500,
        }}
      >
        <FlatList
          data={Tabs}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: sizeHelper.calWp(40),
            gap: sizeHelper.calWp(30),
          }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => setActiveTab(index)}>
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
              {/* Underline active tab */}
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
          )}
        />
      </View>

      <View style={styles.content}>
        <FlatList
          data={PopularBettorsData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: sizeHelper.calHp(15),
            gap: sizeHelper.calHp(15),
            justifyContent: "space-between",
          }}
          columnWrapperStyle={{
            gap: sizeHelper.calWp(15), // Space between columns
            justifyContent: "space-between",
          }}
          renderItem={({ item }) => (
            <User img={item.pic} info={item.info} name={item.name} />
          )}
        />
      </View>
    </ScreenLayout>
  );
};
export default PopularBettors;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    paddingHorizontal: sizeHelper.calWp(40),
  },
});
