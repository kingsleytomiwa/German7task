import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { SvgXml } from "react-native-svg";
import { styled } from "nativewind";
import {
  vaSvg,
  homeSvgXml,
  searchSvg,
  commemtSvg,
  compassSvg,
  petSvg,
  profileSvg,
  addcircleSvg,
  optionsSvg,
} from "../helpers/svgs";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Sidebar = () => {
  return (
    <StyledView className="absolute bg-white w-[150] h-screen shadow-md z-30">
      <StyledView className="py-[50] flex flex-col justify-between items-center h-screen">
        <StyledView className="flex flex-col gap-[30] justify-center items-center">
          <StyledView className="flex gap-[0.5rem] items-center">
            <SvgXml xml={vaSvg} width={75} height={75} />
          </StyledView>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={homeSvgXml} width={45} height={45} />
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={searchSvg} width={45} height={45} />
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={compassSvg} width={45} height={45} />
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={commemtSvg} width={45} height={45} />
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={addcircleSvg} width={45} height={45} />
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9] bg-[#FFDF9C]">
            <SvgXml xml={petSvg} width={45} height={45} />
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={profileSvg} width={45} height={45} />
          </TouchableOpacity>
        </StyledView>
        <StyledView>
          <TouchableOpacity className="flex gap-[0.5rem] items-center border-[1px] w-[80] py-[15] rounded-2xl border-[#d8d0c9]">
            <SvgXml xml={optionsSvg} width={45} height={45} />
          </TouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Sidebar;
