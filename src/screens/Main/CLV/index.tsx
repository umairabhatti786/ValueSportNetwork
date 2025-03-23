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

const CLV = ({ navigation }: any) => {
  const Tabs = ["All TIme", "Season", "Last 30 day"];
  const [activeTab, setActiveTab] = useState(0);
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
            text={"CLV"}
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
  const DetailContaner = ({ day, ROI, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styles.btn_container,
          alignItems: "center",
          justifyContent: "center",
          width: "31%",
        }}
      >
        <View style={{ gap: sizeHelper.calHp(3) }}>
          <CustomText
            text={day}
            color={theme.colors.half_black}
            size={20}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText
            text={"$0.00"}
            color={theme.colors.blue100}
            size={30}
            style={{ marginTop: sizeHelper.calHp(5) }}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />
          <CustomText
            text={"0-0-0"}
            color={theme.colors.secondry}
            size={20}
            fontWeight="400"
            fontFam={fonts.Inter_Light}
          />
          <View style={{ ...appStyles.row }}>
            <CustomText
              text={"ROI "}
              color={theme.colors.gray500}
              size={20}
              style={{ marginTop: sizeHelper.calHp(10) }}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
            />
            <CustomText
              text={ROI}
              color={theme.colors.secondry}
              size={20}
              style={{ marginTop: sizeHelper.calHp(10) }}
              fontWeight="400"
              fontFam={fonts.Inter_Light}
            />
          </View>
        </View>
      </TouchableOpacity>
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
                    paddingHorizontal: sizeHelper.calWp(50),
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

        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
        {/* today,yesterday */}
        <View style={appStyles.rowjustify}>
          <DetailContaner day={"Today"} ROI={"18%"} />
          <DetailContaner
            day={"Yesterday"}
            ROI={"39.1%"}
            //  onPress={() => navigation.navigate("NetRecord")}
          />
          <DetailContaner day={"Last 7 Days"} ROI={"56.9%"} />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default CLV;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    paddingHorizontal: sizeHelper.calWp(40),
  },
  btn_container: {
    borderRadius: sizeHelper.calWp(20),
    borderWidth: sizeHelper.calWp(0.6),
    borderColor: theme.colors.gray500,
    gap: sizeHelper.calWp(17),
    padding: sizeHelper.calWp(20),
  },
});
