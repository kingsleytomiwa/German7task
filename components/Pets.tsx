import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import { DUMMY_DATA } from "../helpers/helper";
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_300Light,
} from "@expo-google-fonts/outfit";
import { actions } from "../helpers/svgs";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

interface Props {
  filter: string;
}
interface DataItem {
  img: string;
  animal: string;
  name: string;
  type: string;
  gender: string;
  age: string;
  weight: string;
}

const Pets = ({ filter }: Props) => {
  let [fontsLoaded] = useFonts({
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <StyledView className="bg-white rounded-3xl shadow-md pl-5 py-5 flex flex-col gap-3 mt-[25]">
      <StyledText
        style={{ fontFamily: "Outfit_500Medium" }}
        className="text-[32px] font-semibold tracking-wider"
      >
        Pets <StyledText className="text-[#979593]">(7)</StyledText>
      </StyledText>
      <StyledView>
        <StyledView className="flex flex-row flex-wrap gap-6">
          {DUMMY_DATA.filter((data) => data.animal === filter).map(
            (data, index) => (
              <StyledView key={index} className="w-[45%]">
                <StyledView className="shadow-md">
                  <StyledImage
                    source={{ uri: data.img }}
                    className="w-full h-[300] rounded-t-2xl"
                  />
                  <StyledView className="absolute right-0 top-4">
                    <SvgXml xml={actions} width={60} height={60} />
                  </StyledView>
                  <StyledView className="flex flex-row justify-between px-5 py-5 border-[1px] border-[#d8d0c9]">
                    <StyledText
                      style={{ fontFamily: "Outfit_500Medium" }}
                      className="text-[28px] font-semibold"
                    >
                      {data.name}
                    </StyledText>
                    <StyledText
                      style={{ fontFamily: "Outfit_300Light" }}
                      className="text-[28px] text-[#979593]"
                    >
                      {data.type}
                    </StyledText>
                  </StyledView>
                  <StyledView className="flex flex-col  border-[1px] border-[#d8d0c9] rounded-b-2xl">
                    <StyledView className="flex flex-row justify-between px-5 pt-7 pb-2">
                      <StyledText
                        style={{ fontFamily: "Outfit_300Light" }}
                        className="text-[28px] text-[#979593]"
                      >
                        Gender:
                      </StyledText>
                      <StyledText
                        style={{ fontFamily: "Outfit_400Regular" }}
                        className="text-[28px] font-[400]"
                      >
                        {data.gender}
                      </StyledText>
                    </StyledView>
                    <StyledView className="flex flex-row justify-between px-5 py-2">
                      <StyledText
                        style={{ fontFamily: "Outfit_300Light" }}
                        className="text-[28px] text-[#979593]"
                      >
                        Age:
                      </StyledText>
                      <StyledText
                        style={{ fontFamily: "Outfit_400Regular" }}
                        className="text-[28px] font-[400]"
                      >
                        {data.age}
                      </StyledText>
                    </StyledView>
                    <StyledView className="flex flex-row justify-between px-5 pb-7 pt-2">
                      <StyledText
                        style={{ fontFamily: "Outfit_300Light" }}
                        className="text-[28px] text-[#979593]"
                      >
                        Weight:
                      </StyledText>
                      <StyledText
                        style={{ fontFamily: "Outfit_400Regular" }}
                        className="text-[28px] font-[400]"
                      >
                        {data.weight}
                      </StyledText>
                    </StyledView>
                  </StyledView>
                </StyledView>
              </StyledView>
            )
          )}
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Pets;
