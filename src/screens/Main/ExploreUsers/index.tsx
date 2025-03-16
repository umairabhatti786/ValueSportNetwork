import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { appStyles } from "../../../utils/GlobalStyles";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import ScreenLayout from "../../../components/ScreenLayout";
import User from "../../../components/User";

const ExploreUsers = ({ navigation }: any) => {
  const tabBarData = [
    { pic: images.check, name: "Verified Experts", screen: "VerifiedExperts" },
    {
      pic: images.fire,
      name: "Hot Streak Bettors",
      screen: "HotStreakBettors",
    },
    { pic: images.network, name: "Popular Bettors", screen: "PopularBettors" },
  ];
  const ExpertUsers = [
    {
      name: "Marc Alex",
      pic: images.player1,
      info: "Last 30d: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player2,
      info: "Last 30d: +179.43u",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player3,
      info: "Last 30d: +179.43u",
      isFollowing: false,
    },
  ];
  const PopularBettors = [
    {
      name: "Marc Alex",
      pic: images.player1,
      info: "200k  Followers",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player4,
      info: "200k  Followers",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player2,
      info: "200k  Followers",
      isFollowing: false,
    },
  ];
  const HotBettors = [
    {
      name: "Marc Alex",
      pic: images.player4,
      info: "30 days Streak",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player3,
      info: "30 days Streak",
      isFollowing: false,
    },
    {
      name: "Marc Alex",
      pic: images.player1,
      info: "30 days Streak",
      isFollowing: false,
    },
  ];
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          backgroundColor: theme.colors.white,
        }}
      >
        <TouchableOpacity
          style={{ paddingRight: sizeHelper.calWp(20) }}
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
          text={"Explore Users"}
          color={theme.colors.black}
          fontWeight="700"
          fontFam={fonts.BricolageGrotesque_Bold}
          numberOfLines={2}
          size={30}
        />
      </View>
    );
  };
  const handleTabPress = (screen: string) => {
    navigation.navigate(screen);
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />

      <View style={styles.rectangle}>
        <CustomText
          text={"You are almost done!"}
          color={theme.colors.white}
          size={20}
        />
        <CustomText
          text={"Follow users and experts for free picks and \ninsights"}
          color={theme.colors.white}
          size={16}
        />
      </View>
      {/* tabs */}
      <View
        style={{
          ...appStyles.row,
          justifyContent: "space-between",
        }}
      >
        {tabBarData.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleTabPress(item.screen)}
            key={index}
            style={{
              width: sizeHelper.calWp(210),
              height: sizeHelper.calHp(60),
              borderRadius: sizeHelper.calWp(20),
              gap: sizeHelper.calWp(10),
              borderWidth: sizeHelper.calWp(0.6),
              paddingLeft: sizeHelper.calWp(6),
              borderColor: "#B6B6B6",
              ...appStyles.row,
            }}
          >
            <Image
              source={item.pic}
              resizeMode="contain"
              style={{
                height: sizeHelper.calHp(40),
                width: sizeHelper.calWp(40),
              }}
            />
            <View>
              <CustomText text={item.name} size={14} fontWeight="700" />
              {/* imgs */}
              <View style={{ ...appStyles.row }}>
                <Image source={images.player1} style={styles.imgCircle} />
                <Image
                  source={images.player2}
                  style={[styles.imgCircle, { marginLeft: -3 }]}
                />
                <Image
                  source={images.player3}
                  style={[styles.imgCircle, { marginLeft: -3 }]}
                />
                <Image
                  source={images.player4}
                  style={[styles.imgCircle, { marginLeft: -3 }]}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* user map  Experts*/}
      <View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: sizeHelper.calHp(15),
          }}
        >
          <CustomText text={"Experts"} size={18} fontWeight="700" />
          <CustomText text={"See All"} color={theme.colors.gray700} size={16} />
        </View>

        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: sizeHelper.calHp(15),
          }}
        >
          {ExpertUsers.map((item, index) => {
            return (
              <User
                key={index}
                img={item.pic}
                info={item.info}
                name={item.name}
              />
            );
          })}
        </View>
      </View>
      {/* user map  Popular Bettors*/}
      <View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: sizeHelper.calHp(15),
          }}
        >
          <CustomText text={"Popular Bettors"} size={18} fontWeight="700" />
          <CustomText text={"See All"} color={theme.colors.gray700} size={16} />
        </View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: sizeHelper.calHp(15),
          }}
        >
          {PopularBettors.map((item, index) => {
            return (
              <User
                key={index}
                img={item.pic}
                info={item.info}
                name={item.name}
              />
            );
          })}
        </View>
      </View>
      {/* user map  Hot Bettors*/}
      <View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: sizeHelper.calHp(15),
          }}
        >
          <CustomText text={"Hot Bettors"} size={18} fontWeight="700" />
          <CustomText text={"See All"} color={theme.colors.gray700} size={16} />
        </View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: sizeHelper.calHp(15),
          }}
        >
          {HotBettors.map((item, index) => {
            return (
              <User
                key={index}
                img={item.pic}
                info={item.info}
                name={item.name}
                bgColor={theme.colors.primary}
                isHot
              />
            );
          })}
        </View>
      </View>
    </ScreenLayout>
  );
};

export default ExploreUsers;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calWp(40),
  },
  rectangle: {
    borderRadius: sizeHelper.calWp(22),
    backgroundColor: theme.colors.primary,
    paddingHorizontal: sizeHelper.calWp(60),
    paddingVertical: sizeHelper.calHp(35),
    gap: sizeHelper.calHp(20),
  },
  imgCircle: {
    width: sizeHelper.calWp(20),
    height: sizeHelper.calHp(15),
    borderRadius: sizeHelper.calHp(50),
    borderWidth: sizeHelper.calHp(1),
    borderColor: theme.colors.white,
  },
});
