import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import { dogBoneSvg, catSvg, PigSvg } from "../helpers/svgs";
import Pets from "./Pets";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
} from "@expo-google-fonts/outfit";

const StyledView = styled(View);
const StyledText = styled(Text);

const PetsPage = () => {
  const [filter, setFilter] = useState("dog");
  const setFilterHandler = (pet: string) => {
    setFilter(pet);
  };
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView>
      <StyledView className="pl-[200px] mx-auto w-screen pt-[50] pr-[25]">
        <StyledView className="bg-white wfull rounded-3xl shadow-md pb-5 pt-2 flex flex-row gap-3 justify-center w-[805px]">
          <TouchableOpacity
            onPress={() => setFilterHandler("dog")}
            className={`flex flex-row items-center translate-x-[-10px] pb-3 pt-1 px-[62] rounded-xl justify-center gap-3 ${
              filter === "dog" ? "bg-[#FFDF9C]" : "bg-white"
            } border-[1px] border-[#d8d0c9]`}
          >
            <SvgXml xml={dogBoneSvg} width={35} height={35} />
            <StyledText
              style={{ fontFamily: "Outfit_400Regular" }}
              className="text-[25px] tracking-wider"
            >
              Dogs
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterHandler("cat")}
            className={`flex flex-row items-center translate-x-[-5px] pb-3 pt-1 px-[62] rounded-xl justify-center gap-3 ${
              filter === "cat" ? "bg-[#FFDF9C]" : "bg-white"
            } border-[1px] border-[#d8d0c9]`}
          >
            <SvgXml xml={catSvg} width={35} height={35} />
            <StyledText
              style={{ fontFamily: "Outfit_400Regular" }}
              className="text-[25px] tracking-wider"
            >
              Cats
            </StyledText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFilterHandler("pig")}
            className={`flex flex-row items-center pb-3 pt-1 px-[62] rounded-xl justify-center gap-3 ${
              filter === "pig" ? "bg-[#FFDF9C]" : "bg-white"
            } border-[1px] border-[#d8d0c9]`}
          >
            <SvgXml xml={PigSvg} width={35} height={35} />
            <StyledText
              style={{ fontFamily: "Outfit_400Regular" }}
              className="text-[25px] tracking-wider"
            >
              Pigs
            </StyledText>
          </TouchableOpacity>
        </StyledView>
        <Pets filter={filter} />
      </StyledView>
    </ScrollView>
  );
};

export default PetsPage;
