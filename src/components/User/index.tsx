import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import sizeHelper from "../../utils/Helpers";
import { images } from "../../assets/pngs";
import { appStyles } from "../../utils/GlobalStyles";
import CustomText from "../Text";
import { theme } from "../../utils/Themes";
import CustomButton from "../Button";
type UserProps = {
  bgColor?: string;
  name: string;
  info: string;
  img: any;
  isHot?: boolean;
};
const User = ({ bgColor, img, name, info, isHot = false }: UserProps) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const textColor =
    isHot && isFollowing
      ? theme.colors.primary
      : isFollowing
      ? theme.colors.secondry
      : theme.colors.white;
  const tintColorDynamic =
    isHot && isFollowing
      ? theme.colors.primary
      : isFollowing
      ? theme.colors.secondry
      : theme.colors.white;
  const borderColor =
    isHot && isFollowing
      ? theme.colors.primary
      : isFollowing
      ? theme.colors.secondry
      : "transparent";

  const bgColorDynamic =
    isHot && isFollowing
      ? theme.colors.white // Hot & Following → White
      : isHot
      ? theme.colors.primary // Hot but Not Following → Primary (Red)
      : isFollowing
      ? theme.colors.white // Not Hot but Following → White
      : theme.colors.secondry; // Not Hot & Not Following → Secondary (Blue)

  return (
    <View
      style={{
        width: sizeHelper.calWp(200),
        alignItems: "center",
        justifyContent: "center",
        gap: sizeHelper.calHp(15),
        padding: sizeHelper.calHp(15),
        borderWidth: sizeHelper.calHp(0.5),
        borderRadius: sizeHelper.calHp(15),
        borderColor: "#B6B6B6",
      }}
    >
      <Image
        source={img}
        style={{
          height: sizeHelper.calHp(60),
          width: sizeHelper.calWp(60),
          borderRadius: sizeHelper.calWp(50),
        }}
      />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ ...appStyles.row }}>
          <CustomText text={name} size={20} />
          <Image
            resizeMode="contain"
            source={images.check}
            style={{
              height: sizeHelper.calHp(20),
              width: sizeHelper.calWp(20),
              marginLeft: sizeHelper.calWp(10),
              borderRadius: sizeHelper.calWp(50),
            }}
          />
        </View>
        <CustomText text={info} color={theme.colors.gray700} size={14} />
      </View>
      <CustomButton
        text={isFollowing ? "Following " : "Follow"}
        bgColor={bgColorDynamic}
        textColor={textColor}
        borderWidth={1}
        borderColor={borderColor}
        borderRadius={sizeHelper.calWp(15)}
        height={44}
        size={18}
        onPress={() => setIsFollowing(!isFollowing)}
      >
        <Image
          source={images.check2}
          resizeMode="contain"
          tintColor={tintColorDynamic}
          style={{ height: sizeHelper.calHp(20), width: sizeHelper.calWp(20) }}
        />
      </CustomButton>
    </View>
  );
};

export default User;
