import {
  FlatList,
  FlatListComponent,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { appStyles } from "../../../utils/GlobalStyles";
import sizeHelper from "../../../utils/Helpers";
import { theme } from "../../../utils/Themes";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { fonts } from "../../../utils/Themes/fonts";
import ScreenLayout from "../../../components/ScreenLayout";
import CustomButton from "../../../components/Button";

const ExploreUsers = ({ navigation }: any) => {
  const User = () => {
    return (
      <View
        style={{
          width: 110,
          //height: 130,
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          padding: 10,
          borderWidth: 0.5,
          borderRadius: 10,
          borderColor: "#B6B6B6",
        }}
      >
        <Image
          source={images.player1}
          resizeMode="contain"
          style={{ height: 35, width: 35, borderRadius: 50 }}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ ...appStyles.row }}>
            <CustomText text={"ggghhhh"} size={20} />
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
          <CustomText
            text={"Last 30d: +179.43u"}
            color={theme.colors.gray700}
            size={14}
          />
        </View>
        <CustomButton
          text="Follow"
          bgColor={theme.colors.secondry}
          borderRadius={10}
          height={44}
        />
      </View>
    );
  };
  const tabBarData = [
    { pic: images.check, name: "Verified Experts" },
    { pic: images.fire, name: "Hot Streak Bettors" },
    { pic: images.network, name: "Popular Bettors" },
  ];
  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          // gap: sizeHelper.calWp(20),
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

      <View
        style={{
          ...appStyles.row,
          justifyContent: "space-between",
        }}
      >
        {tabBarData.map((item, index) => (
          <View
            key={index}
            style={{
              width: 111,
              height: 36,
              borderRadius: 10,
              gap: 10,
              borderWidth: 0.5,
              padding: 3,
              borderColor: "#B6B6B6",
              ...appStyles.row,
            }}
          >
            <Image
              source={item.pic}
              resizeMode="contain"
              style={{ height: 30, width: 30 }}
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
          </View>
        ))}
      </View>

      <View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <CustomText text={"Experts"} size={18} fontWeight="700" />
          <CustomText text={"See All"} color={theme.colors.gray700} size={16} />
        </View>
        <View
          style={{
            ...appStyles.row,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          {[1, 2, 3].map((index) => {
            return <User />;
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
    //height: 20,
    borderRadius: 12,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 52,
    paddingVertical: 20,
    gap: 10,
  },
  imgCircle: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
});
