import {
  Image,
  ScrollView,
  StyleSheet,
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
import CustomButton from "../../../components/Button";

const Following = ({ navigation }: any) => {
  const Tabs = ["100 Followers", "100 Following"];
  const [activeTab, setActiveTab] = useState(0);
  const PlayersData = [
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
    {
      pic: images.player3,
      name: "Marc Alex",
      time: "Last 30d",
      record: " +172u",
    },
  ];
  const Player = ({ pic, name, time, record, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...appStyles.row,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            ...appStyles.row,
          }}
        >
          <Image
            resizeMode="contain"
            source={pic}
            style={{
              height: sizeHelper.calWp(60),
              width: sizeHelper.calWp(60),
              marginRight: sizeHelper.calWp(20),
              borderRadius: sizeHelper.calHp(50),
            }}
          />
          <View>
            <View style={{ ...appStyles.row }}>
              <CustomText text={name} size={20} />
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
              text={`${time} ${record ? `: ${record}` : ""}`}
              size={16}
              color={theme.colors.gray500}
            />
          </View>
        </View>
        <CustomButton
          text="Follow"
          bgColor={theme.colors.secondry}
          width={100}
          height={50}
          borderRadius={15}
          size={16}
        />
      </TouchableOpacity>
    );
  };
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
            text={"Following"}
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
  const PlayerVw = () => {
    return (
      <View>
        {PlayersData.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Betslip")}
              key={index}
              style={{
                gap: sizeHelper.calHp(30),
                paddingHorizontal: sizeHelper.calWp(40),
                paddingVertical: sizeHelper.calHp(25),
                borderBottomWidth: sizeHelper.calWp(0.6),
                borderBottomColor: theme.colors.gray500,
              }}
            >
              {/* Player Component */}
              <Player
                pic={item.pic}
                name={item.name}
                time={item.time}
                record={item.record}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: sizeHelper.calHp(30),
          paddingBottom: sizeHelper.calHp(30),
        }}
      >
        <Header />
        {/* tabs */}
        <View
          style={{
            ...appStyles.row,
            paddingVertical: sizeHelper.calWp(5),
            paddingHorizontal: sizeHelper.calHp(5),
            // paddingRight: sizeHelper.calHp(35),
            gap: sizeHelper.calWp(30),
            backgroundColor: theme.colors.gray600,
            borderRadius: sizeHelper.calHp(44),
            justifyContent: "space-between",
          }}
        >
          {Tabs.map((item, index) => {
            const isActive = activeTab === index;

            return (
              <TouchableOpacity
                key={index.toString()}
                onPress={() => setActiveTab(index)}
              >
                <View
                  style={{
                    paddingHorizontal: isActive
                      ? sizeHelper.calWp(50)
                      : sizeHelper.calWp(10),
                    paddingVertical: sizeHelper.calWp(10),
                    alignItems: "center",
                    backgroundColor: isActive
                      ? theme.colors.white
                      : theme.colors.gray600,
                    borderRadius: sizeHelper.calWp(50),
                  }}
                >
                  <CustomText text={item} size={19} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        <PlayerVw />
      </ScrollView>
    </ScreenLayout>
  );
};

export default Following;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    paddingHorizontal: sizeHelper.calWp(40),
    backgroundColor: theme.colors.white,
  },
  imgCircle: {
    width: sizeHelper.calWp(50),
    height: sizeHelper.calHp(50),
    borderRadius: sizeHelper.calHp(50),
    borderWidth: sizeHelper.calWp(2),
    borderColor: theme.colors.white,
  },
});
