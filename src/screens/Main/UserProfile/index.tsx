import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import sizeHelper from "../../../utils/Helpers";
import { appStyles } from "../../../utils/GlobalStyles";
import { images } from "../../../assets/pngs";
import CustomText from "../../../components/Text";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButton from "../../../components/Button";
import SetUpProgress from "../../../components/SetUpProgress";
import { useState } from "react";
import Modal from "react-native-modal";
import { windowWidth } from "../../../utils/Commons/Dimention";

const UserProfile = ({ navigation }: any) => {
  const Tabs = ["Spread", "Total", "Moneyline"];
  const [activeTab, setActiveTab] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [selectedGame, setSelectedGame] = useState(0);
  const LeaguesData = [
    {
      name: "MLB",
      logo: images.ballLogo1,
      units: "+15.3 units",
      code: "407-344-10",
      percentage: "3.44% ROI",
    },
    {
      name: "NBA",
      logo: images.ballLogo2,
      units: "+15.3 units",
      code: "407-344-10",
      percentage: "3.44% ROI",
    },
    {
      name: "EPL",
      logo: images.ballLogo3,
      units: "+15.3 units",
      code: "407-344-10",
      percentage: "3.44% ROI",
    },
  ];
  const DetailContaner = ({ title, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ ...styles.btn_container, flex: 1 }}
      >
        <Image style={styles.logo} source={images.boxes} resizeMode="contain" />
        <CustomText
          text={title}
          color={theme.colors.half_black}
          size={20}
          fontWeight="400"
          fontFam={fonts.Inter_Light}
        />
      </TouchableOpacity>
    );
  };

  const SportsContainer = ({ item, index }: any) => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: theme.colors.white,
          gap: sizeHelper.calWp(30),
          paddingVertical: sizeHelper.calHp(30),
          elevation: 7, // Android shadow
          shadowColor: theme.colors.black,
          shadowOffset: { width: 3, height: 3 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <View
          style={{
            gap: sizeHelper.calHp(15),
            paddingHorizontal: sizeHelper.calWp(25),
          }}
        >
          <CustomText
            text={"Complete Set Up"}
            fontWeight="600"
            fontFam={fonts.Inter_SemiBold}
            color={theme.colors.black}
            size={20}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}>
            <CustomText
              text={"You’ve completed"}
              color={theme.colors.black}
              size={17}
            />
            <CustomText
              text={"0"}
              color={theme.colors.black}
              size={17}
              fontWeight="600"
              fontFam={fonts.Inter_SemiBold}
            />
            <CustomText text={"out ot"} color={theme.colors.black} size={17} />
            <CustomText
              text={"5"}
              color={theme.colors.black}
              size={17}
              fontWeight="600"
              fontFam={fonts.Inter_SemiBold}
            />
            <CustomText text={"items"} color={theme.colors.black} size={17} />
          </View>
          <SetUpProgress totalSteps={50} width={"98%"} currentStep={50} />
        </View>
        <View style={{ gap: sizeHelper.calHp(30) }}>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(25),
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <Image
                style={{
                  height: sizeHelper.calHp(22),
                  width: sizeHelper.calHp(22),
                }}
                source={images.notification}
                resizeMode="contain"
              />
              <CustomText
                text={"Turn on notifications"}
                color={theme.colors.black}
                size={18}
              />
            </View>

            <Image
              style={{
                height: sizeHelper.calHp(20),
                width: sizeHelper.calHp(20),
              }}
              source={images.next}
              resizeMode="contain"
            />
          </View>
          <View style={styles.divider} />

          <TouchableOpacity
            onPress={() => navigation.navigate("BettingTools")}
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(25),
            }}
          >
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
              <Image
                style={{
                  height: sizeHelper.calHp(22),
                  width: sizeHelper.calHp(22),
                }}
                source={images.leagues}
                resizeMode="contain"
              />
              <CustomText
                text={"Set favorite teams & leagues"}
                color={theme.colors.black}
                size={18}
              />
            </View>

            <Image
              style={{
                height: sizeHelper.calHp(20),
                width: sizeHelper.calHp(20),
              }}
              source={images.next}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.divider} />
          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(5),
              alignSelf: "center",
            }}
          >
            <CustomText
              text={"View More"}
              color={theme.colors.blue100}
              size={20}
            />
            <Image
              style={{
                height: sizeHelper.calHp(20),
                width: sizeHelper.calHp(20),
                tintColor: theme.colors.blue100,
              }}
              source={images.next}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  };

  const MoneyPercentagesCard = () => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: "#F53636",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: sizeHelper.calHp(170),

          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: "65%",
            gap: sizeHelper.calHp(10),
            paddingVertical: sizeHelper.calHp(30),
            paddingHorizontal: sizeHelper.calWp(25),
          }}
        >
          <CustomText
            text={"Money Percentages,sharp action and more."}
            color={theme.colors.white}
            numberOfLines={2}
            size={23}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />

          <CustomText
            text={"GET PRO >"}
            color={theme.colors.white + "80"}
            size={17}
          />
        </View>
        <View
          style={{
            width: sizeHelper.calWp(300),
            height: sizeHelper.calWp(300),
            borderRadius: 999,
            backgroundColor: theme.colors.white + "50",
            alignItems: "center",
            // marginRight:sizeHelper.calWp(-0),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 999,
              backgroundColor: theme.colors.white + "50",
              width: sizeHelper.calWp(200),
              height: sizeHelper.calWp(200),
              marginRight: sizeHelper.calWp(-30),
              marginTop: sizeHelper.calHp(40),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: "110%",
                height: "110%",
              }}
              source={images.sports}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  };

  const TrackCard = () => {
    return (
      <View
        style={{
          width: "100%",
          borderRadius: sizeHelper.calWp(25),
          backgroundColor: theme.colors.blue100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: sizeHelper.calWp(25),
          paddingVertical: sizeHelper.calHp(10),

          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: "65%",
            gap: sizeHelper.calHp(10),
            paddingVertical: sizeHelper.calHp(10),
          }}
        >
          <CustomText
            text={"Track Your First Bet"}
            color={theme.colors.white}
            numberOfLines={2}
            size={23}
            fontWeight="700"
            fontFam={fonts.Inter_Bold}
          />

          <CustomText
            text={
              "Track your first bet to start using our free tools to monitor and improve your record."
            }
            color={theme.colors.white + "80"}
            size={17}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <CustomButton
              // width={"100%"}
              borderRadius={20}
              height={50}
              style={{ marginTop: sizeHelper.calHp(20) }}
              width={"50%"}
              size={17}
              fontWeight="600"
              fontFam={fonts.Inter_Medium}
              textColor={theme.colors.blue100}
              bgColor={theme.colors.white}
              // onPress={() => {}}
              text={"Get Started"}
            ></CustomButton>
            <CustomText
              text={"Not Now"}
              color={theme.colors.white}
              textDecorationLine={"underline"}
              style={{ marginTop: sizeHelper.calHp(15) }}
              size={17}
            />
          </View>
        </View>

        <Image
          style={{
            width: sizeHelper.calWp(200),
            height: sizeHelper.calWp(200),
          }}
          source={images.tracks}
          resizeMode="contain"
        />
      </View>
    );
  };
  const Header = () => {
    return (
      <View>
        <View
          style={{
            ...appStyles.rowjustify,
            paddingRight: sizeHelper.calWp(20),
          }}
        >
          <View>
            <Image
              style={{
                height: sizeHelper.calHp(100),
                width: sizeHelper.calHp(100),
                borderRadius: sizeHelper.calWp(100),
                borderWidth: 1,
                borderColor: theme.colors.primary,
              }}
              source={images.img_placeholder}
            />
            <View style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}>
              <CustomText
                text={"Marc Alex"}
                color={theme.colors.black}
                numberOfLines={2}
                size={20}
              />
              <Image
                style={{
                  height: sizeHelper.calWp(20),
                  width: sizeHelper.calWp(20),
                }}
                source={images.check}
              />
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <CustomText
              text={"100"}
              color={theme.colors.black}
              numberOfLines={2}
              size={18}
            />
            <CustomText
              text={"Total Bets"}
              color={theme.colors.gray700}
              numberOfLines={2}
              size={15}
            />
          </View>
          <View style={{ alignItems: "center" }}>
            <CustomText
              text={"100"}
              color={theme.colors.black}
              numberOfLines={2}
              size={18}
            />
            <CustomText
              text={"Followers"}
              color={theme.colors.gray700}
              numberOfLines={2}
              size={15}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Following")}
            style={{ alignItems: "center", padding: 20 }}
          >
            <CustomText
              text={"100"}
              color={theme.colors.black}
              numberOfLines={2}
              size={18}
            />
            <CustomText
              text={"Following"}
              color={theme.colors.gray700}
              numberOfLines={2}
              size={15}
            />
          </TouchableOpacity>
        </View>

        <CustomText
          text={
            "Lorem ipsum is lorem Lorem ipsum is loremLorem ipsum is lorem is Lorem ipsum is loremLorem ipsum is loremLorem ipsum."
          }
          color={theme.colors.gray700}
          size={15}
        />
      </View>
    );
  };

  return (
    <>
      <ScreenLayout style={styles.main}>
        {/* header */}
        <View style={appStyles.rowjustify}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}
          >
            <Image
              style={{
                width: sizeHelper.calWp(25),
                height: sizeHelper.calWp(25),
              }}
              source={images.left_arrow_black}
              resizeMode="contain"
            />
            <CustomText
              text={"Marc Alex"}
              color={theme.colors.half_black}
              size={30}
              fontWeight="900"
              fontFam={fonts.Inter_Bold}
            />
          </TouchableOpacity>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
            <TouchableOpacity
              style={styles.social_box}
              onPress={() => setModalVisible(true)}
            >
              <Image style={styles.img} source={images.share} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.social_box}
              onPress={() => setModalVisible2(true)}
            >
              <Image style={styles.img} source={images.scan_code} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.social_box}>
              <Image style={styles.img} source={images.filter} />
            </TouchableOpacity>
          </View>
        </View>
        <Header />
        {/* follow and my account btns */}
        <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}>
          <CustomButton
            width={"48%"}
            borderRadius={15}
            text="Follow"
            height={65}
          />

          <DetailContaner
            title={"Bet History"}
            //onPress={() => navigation.navigate("MyAccounts")}
            onPress={() => navigation.navigate("UserHistory")}
          />
        </View>
        {/* tabs */}
        <View style={{ ...appStyles.rowjustify, gap: sizeHelper.calWp(20) }}>
          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: sizeHelper.calWp(6),
              backgroundColor: "#F5F5F5",
              borderRadius: 999,
              paddingVertical: sizeHelper.calHp(6),
            }}
          >
            {Tabs.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index.toString()}
                  onPress={() => setActiveTab(index)}
                  style={{
                    ...styles.tabContainer,
                    backgroundColor:
                      activeTab == index ? theme.colors.white : "transparent",
                  }}
                >
                  <CustomText
                    text={item}
                    color={
                      activeTab == index
                        ? theme.colors.black
                        : theme.colors.gray500
                    }
                    size={19}
                  />
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.social_box}>
            <Image style={styles.img} source={images.filter} />
          </TouchableOpacity>
        </View>
        {/*  today bets */}
        <View style={{ gap: sizeHelper.calHp(15) }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: sizeHelper.calHp(5) }}>
              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}>
                <CustomText
                  text={"Today:"}
                  color={theme.colors.half_black}
                  size={30}
                  fontWeight="900"
                  fontFam={fonts.Inter_Bold}
                />
                <CustomText
                  text={"3 Bets"}
                  color={"#B6B6B6"}
                  size={30}
                  fontWeight="900"
                  fontFam={fonts.Inter_Bold}
                />
              </View>

              <CustomText
                text={"Risking 3.5 units to win 7.85 units"}
                color={"#B6B6B6"}
                numberOfLines={2}
                size={17}
              />
            </View>

            <TouchableOpacity style={styles.social_box}>
              <Image style={styles.img} source={images.filter} />
            </TouchableOpacity>
          </View>

          {[1, 2, 3].map((i) => {
            return (
              <View style={appStyles.rowjustify}>
                <View style={{ ...appStyles.row }}>
                  <Image source={images.player} style={styles.imgCircle} />
                  <View style={{ marginLeft: sizeHelper.calWp(20) }}>
                    <View
                      style={{ ...appStyles.row, gap: sizeHelper.calWp(5) }}
                    >
                      <CustomText
                        text={"Alex.D  To Score 10+ Points |"}
                        size={17}
                      />
                      <CustomText
                        text={"-100"}
                        size={16}
                        color={theme.colors.gray500}
                      />
                      <CustomText
                        text={"| 2.5u"}
                        size={16}
                        color={theme.colors.gray500}
                      />
                    </View>
                    <View>
                      <CustomText
                        text={"MEM @NYK  |  1/28  1:30am"}
                        size={14}
                        color={theme.colors.gray500}
                      />
                      <CustomText
                        text={"Dame Revenge Game Ladder up to 40"}
                        size={14}
                        color={theme.colors.gray500}
                      />
                    </View>
                  </View>
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
            );
          })}
        </View>
        {/* <TrackCard /> */}
        {/* <SportsContainer /> */}
        {/* Marc’s Stats */}
        <View>
          <View style={{ ...appStyles.rowjustify }}>
            <CustomText text={"Marc’s Stats"} size={22} fontWeight="700" />
            <TouchableOpacity style={styles.btn2}>
              <CustomText
                text={"View All Bet History"}
                size={16}
                color="#A5A5A5"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderWidth: sizeHelper.calWp(0.6),
              borderColor: "#B6B6B6",
              borderRadius: sizeHelper.calWp(30),
              marginTop: sizeHelper.calHp(20),
              padding: sizeHelper.calWp(25),
            }}
          >
            <View
              style={{
                ...appStyles.rowjustify,
                marginBottom: sizeHelper.calHp(15),
              }}
            >
              <View style={{ ...appStyles.row }}>
                <Image
                  source={images.trophy2}
                  resizeMode="contain"
                  style={{
                    height: sizeHelper.calHp(60),
                    width: sizeHelper.calWp(60),
                  }}
                />
                <View style={{ marginLeft: sizeHelper.calWp(40) }}>
                  <CustomText text={"Top Leagues"} size={22} />
                  <CustomText
                    text={"Last 30: 14-12-0"}
                    size={18}
                    color="#8E8E8E"
                  />
                </View>
              </View>
              <TouchableOpacity
              style={styles.social_box}
              onPress={() => setModalVisible(true)}
            >
              <Image style={styles.img} source={images.filter} />
            </TouchableOpacity>
            </View>

            {LeaguesData.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    ...appStyles.rowjustify,
                    marginTop: sizeHelper.calHp(20),
                  }}
                >
                  <View style={{ ...appStyles.rowjustify }}>
                    <View style={{ ...appStyles.row, width: "50%" }}>
                      <View
                        style={{
                          height: sizeHelper.calHp(80),
                          width: sizeHelper.calWp(80),
                          backgroundColor: "#F1F1F1",
                          borderRadius: sizeHelper.calWp(15),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          source={item.logo}
                          resizeMode="contain"
                          style={{
                            height: sizeHelper.calHp(60),
                            width: sizeHelper.calWp(60),
                          }}
                        />
                      </View>
                      <View style={{ marginLeft: sizeHelper.calWp(20) }}>
                        <CustomText text={item.name} size={20} />
                        <CustomText
                          text={item.units}
                          size={20}
                          color={theme.colors.secondry}
                        />
                      </View>
                    </View>

                    <Image
                      source={images.graphLine}
                      resizeMode="contain"
                      style={{
                        height: sizeHelper.calHp(50),
                        width: sizeHelper.calWp(60),
                      }}
                    />
                  </View>
                  <View >
                    <CustomText text={item.code} size={20} />
                    <CustomText
                      text={item.percentage}
                      size={15}
                      style={{textAlign:"right"}}
                      color={"#A4A4A4"}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* ....modal...... */}
        <View>
          <Modal
            isVisible={modalVisible}
          
            deviceWidth={windowWidth}
            backdropColor="rgba(0,0,0,0.1)"
            onBackButtonPress={() => setModalVisible?.(false)}
            onBackdropPress={() => setModalVisible(false)} // Allows closing when tapping outside
            style={{ margin: 0 }}
          >
            <TouchableWithoutFeedback 
            onPress={()=>setModalVisible(false)}
            >
              <View style={styles.modal}>
                {/* head */}
                <View
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
                      source={images.player}
                      style={{
                        height: sizeHelper.calWp(60),
                        width: sizeHelper.calWp(60),
                        marginRight: sizeHelper.calWp(20),
                        borderRadius: sizeHelper.calHp(50),
                      }}
                    />
                    <View>
                      <View style={{ ...appStyles.row }}>
                        <CustomText text={"Marc Alex"} size={20} />
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
                        text={"1hr ago |  NBA Record: +179.43u"}
                        size={16}
                        color={theme.colors.gray500}
                      />
                    </View>
                  </View>
                  <TouchableOpacity style={styles.social_box}>
                    <Image style={styles.img} source={images.share} />
                  </TouchableOpacity>
                </View>
                {/* qr code */}
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: sizeHelper.calHp(55),
                    borderWidth: sizeHelper.calHp(0.5),
                    borderRadius: sizeHelper.calHp(20),
                    borderColor:"#797D86"
                  }}
                >
                  <Image
                    source={images.qrCode}
                    resizeMode="contain"
                    style={{
                      height: sizeHelper.calHp(340),
                      width: sizeHelper.calWp(300),
                      alignSelf: "center",
                    }}
                  />
                </View>
                <View style={{ ...appStyles.rowjustify,gap:sizeHelper.calWp(25) }}>
                  <View
                    style={{
                      ...appStyles.row,
                      ...styles.sportContainer
                }}
                  >
                    <Image
                      source={images.fire2}
                      resizeMode="contain"
                      style={{
                        height: sizeHelper.calHp(60),
                        width: sizeHelper.calWp(60),
                        alignSelf: "center",
                      }}
                    />
                    <View>
                      <CustomText 
                      color="#757575"
                      fontFam={fonts.Inter_SemiBold}
                      fontWeight="600"
                      text={"0 DAYS"} size={22} />
                      <CustomText 
                         color="#757575"
                         fontFam={fonts.Inter_Light}
                         fontWeight="400"
                      text={"Hot Streak"} size={18} />
                    </View>
                  </View>
                  <View
                    style={{
                      ...appStyles.row,
                      ...styles.sportContainer
                }}
                  >
                    <Image
                      source={images.ball}
                      resizeMode="contain"
                      style={{
                        height: sizeHelper.calHp(60),
                        width: sizeHelper.calWp(60),
                        alignSelf: "center",
                      }}
                    />
                    <View>
                      <CustomText 
                      color="#757575"
                      fontFam={fonts.Inter_SemiBold}
                      fontWeight="600"
                      text={"NBA"} size={22} />
                      <CustomText 
                         color="#757575"
                         fontFam={fonts.Inter_Light}
                         fontWeight="400"
                      text={"Top Sport"} size={18} />
                    </View>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
        {/* ....modal   2...... */}
        <View>
          <Modal
            isVisible={modalVisible2}
            deviceWidth={windowWidth}
            backdropColor="rgba(0,0,0,0.1)"
            onBackButtonPress={() => setModalVisible2?.(false)}
            onBackdropPress={() => setModalVisible2(false)} // Allows closing when tapping outside
            style={{ margin: 0 }}
          >
            <TouchableWithoutFeedback
            onPress={()=>setModalVisible2(false)}
            >
              <View style={styles.modal}>
                {/* head */}
                <View
                  style={{
                    ...appStyles.row,
                    // justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      ...appStyles.row,
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={images.player}
                      style={{
                        height: sizeHelper.calWp(60),
                        width: sizeHelper.calWp(60),
                        marginRight: sizeHelper.calWp(20),
                        borderRadius: sizeHelper.calHp(50),
                      }}
                    />
                    <View>
                      <View style={{ ...appStyles.row }}>
                        <CustomText text={"Marc Alex"} size={20} />
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
                        text={"1hr ago |  NBA Record: +179.43u"}
                        size={16}
                        color={theme.colors.gray500}
                      />
                    </View>
                  </View>
                </View>
                {/* outer border */}
                <View
                  style={{
                    // alignItems: "center",
                    // justifyContent: "center",
                    padding: sizeHelper.calHp(20),
                    borderWidth: sizeHelper.calHp(0.6),
                    borderRadius: sizeHelper.calHp(33),
                    gap: sizeHelper.calHp(20),
                  }}
                >
                  <View
                    style={{
                      ...appStyles.row,
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      source={images.modalLogo}
                      style={{
                        height: sizeHelper.calWp(40),
                        width: sizeHelper.calWp(40),
                        marginRight: sizeHelper.calWp(20),
                        borderRadius: sizeHelper.calHp(10),
                      }}
                    />
                    <View>
                      <CustomText text={"Upcoming:"} size={20} />
                      <CustomText
                        text={"Risking 3.61 units to win 68.60 units"}
                        size={16}
                        color={theme.colors.gray500}
                      />
                    </View>
                  </View>

                  <View
                    style={{
                      ...appStyles.row,
                      borderRadius: sizeHelper.calHp(15),
                      borderWidth: sizeHelper.calHp(0.6),
                      padding: sizeHelper.calHp(10),
                    }}
                  >
                    <View style={{ ...appStyles.row }}>
                      <Image source={images.player} style={styles.imgCircle} />
                      <View style={{ marginLeft: sizeHelper.calWp(20) }}>
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
                  </View>

                  <View
                    style={{
                      ...appStyles.row,
                      borderRadius: sizeHelper.calHp(15),
                      borderWidth: sizeHelper.calHp(0.6),
                      padding: sizeHelper.calHp(10),
                    }}
                  >
                    <View style={{ ...appStyles.row }}>
                      <Image source={images.player} style={styles.imgCircle} />
                      <View style={{ marginLeft: sizeHelper.calWp(20) }}>
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
                  </View>

                  <View
                    style={{
                      ...appStyles.row,
                      borderRadius: sizeHelper.calHp(15),
                      borderWidth: sizeHelper.calHp(0.6),
                      padding: sizeHelper.calHp(10),
                    }}
                  >
                    <View style={{ ...appStyles.row }}>
                      <Image source={images.player} style={styles.imgCircle} />
                      <View style={{ marginLeft: sizeHelper.calWp(20) }}>
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
                  </View>

                  <View
                    style={{
                      ...appStyles.row,
                      borderRadius: sizeHelper.calHp(15),
                      borderWidth: sizeHelper.calHp(0.6),
                      padding: sizeHelper.calHp(10),
                    }}
                  >
                    <View style={{ ...appStyles.row }}>
                      <Image
                        source={images.plusGray}
                        style={{
                          height: sizeHelper.calHp(40),
                          width: sizeHelper.calWp(40),
                        }}
                      />
                      <View style={{ marginLeft: sizeHelper.calWp(20) }}>
                        <View style={{ ...appStyles.row }}>
                          <CustomText text={"1+ Bet"} size={16} />
                        </View>
                      </View>
                    </View>
                    
                  </View>
                </View>

                <View
                  style={{
                    ...appStyles.row,
                    justifyContent: "space-between",
                    padding: sizeHelper.calHp(3),
                  }}
                >
                  <TouchableOpacity style={styles.social_box}>
                    <Image style={styles.img} source={images.share} />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.social_box}>
                    <Image style={styles.img} source={images.link} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.social_box}>
                    <Image style={styles.img} source={images.whatsapp} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.social_box}>
                    <Image style={styles.img} source={images.twitter} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.social_box}>
                    <Image style={styles.img} source={images.msg} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      </ScreenLayout>
    </>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  main: {
    gap: sizeHelper.calHp(30),
    flex: 1,
    paddingHorizontal: sizeHelper.calWp(40),
  },
  logo: {
    width: sizeHelper.calWp(43),
    height: sizeHelper.calWp(43),
  },

  next_arrow: {
    height: sizeHelper.calHp(30),
    width: sizeHelper.calHp(25),
    marginLeft: sizeHelper.calWp(10),
    tintColor: theme.colors.primary,
  },
  btn_container: {
    height: sizeHelper.calHp(65),
    borderRadius: sizeHelper.calWp(15),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    flexDirection: "row",
    alignItems: "center",
    gap: sizeHelper.calWp(17),
    paddingHorizontal: sizeHelper.calWp(20),
    justifyContent: "center",
  },
  btn2: {
    borderRadius: sizeHelper.calWp(15),
    borderWidth: sizeHelper.calWp(1),
    borderColor: theme.colors.gray700,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:sizeHelper.calWp(11),
    paddingHorizontal:sizeHelper.calWp(20)
  },
  divider: {
    width: "100%",
    height: sizeHelper.calHp(0.5),
    backgroundColor: theme.colors.gray700,
  },
  social_box: {
    borderWidth: 0.5,
    borderColor: "#B6B6B6",
    borderRadius: sizeHelper.calWp(10),
    alignItems: "center",
    justifyContent: "center",
    padding: sizeHelper.calWp(12),
  },
  img: {
    width: sizeHelper.calWp(35),
    height: sizeHelper.calWp(35),
    tintColor: theme.colors.black,
  },
  tabContainer: {
    borderRadius: 999,
    paddingHorizontal: sizeHelper.calWp(55),
    paddingVertical: sizeHelper.calHp(9),
    alignItems: "center",
    justifyContent: "center",
  },
  imgCircle: {
    width: sizeHelper.calWp(65),
    height: sizeHelper.calWp(65),
    borderRadius: sizeHelper.calWp(65),
    borderColor: theme.colors.white,
  },
  // .......................
  modalOverlay: {
    flex: 1,
    justifyContent: "center", // Center modal instead of `flex-end`
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modal: {
    width: "90%",
    backgroundColor: theme.colors.white,
    paddingHorizontal: sizeHelper.calHp(40),
    paddingVertical: sizeHelper.calHp(30),
    borderRadius: sizeHelper.calHp(30),
    gap: sizeHelper.calHp(30),
    margin: sizeHelper.calWp(10),
    alignSelf: "center",
  },
  sportContainer:{
    gap: sizeHelper.calWp(10),
    borderWidth: sizeHelper.calWp(0.6),
    borderRadius: sizeHelper.calWp(35),
    paddingVertical: sizeHelper.calHp(16),
    paddingHorizontal: sizeHelper.calWp(40),
    flex:1
  }
});
