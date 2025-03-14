import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { appStyles } from "../../utils/GlobalStyles";
import { images } from "../../assets/pngs";
import sizeHelper from "../../utils/Helpers";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import CustomButton from "../Button";
import { PlayerType } from "../../utils/Types";

const Player = ({ pic, name, time, record }: PlayerType) => {
  return (
    <TouchableOpacity
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
            borderRadius: 50,
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
            text={`${time} ${record ? ` | ${record}` : ""}`}
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

export default Player;

const styles = StyleSheet.create({});
