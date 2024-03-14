import styled, { keyframes } from "styled-components";

type ItemsProps = {
    bgColor?: string;
}

export const HeroContainer = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
`;
export const HeroChildOne = styled.div`
  width: 100%;
  margin: 20px;
`;
export const HeroChildTwo = styled.div`
  width: 100%;
  margin: 20px;
  border-radius: 20px;
  position: relative;
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
`;
export const HeroController = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Tabs = styled.div`
    width: 100px;
    height: 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 50px;
`;

export const BannerMain = styled.div`
    width: 100%;
    height: 300px;
    background-color: #EDEFF1;
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 5px;
`;
export const FamilyBanner = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
`;

export const Banner = styled.div<ItemsProps>`
    width: 100%;
    height: 100%;
    background-color: ${({bgColor}) => bgColor};
    margin: 5px;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BannerTitle = styled.h1`
    font-size: 60px;
    color: #282928;
`;
export const BannerP = styled.p`
    font-size: 20px;
    color: #282928;
`;

export const BannerHeader = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

export const HeaderTitle = styled.span`
    margin-right: 10px;
    padding: 5px 20px;
    border: 1px solid #fff;
    border-radius: 20px;
    color: #fff;
    font-weight: normal;
    font-size: 16px;
    width: 100%;
    text-align: center;
`;

export const HeaderIcon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    border: 1px solid #fff;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const BannerValues = styled.div``;

export const BannerValueTotal = styled.span`
    font-size: 40px;
    color: #fff;
`;

export const BannerSpan = styled.span`
    font-size: 14px;
    color: #fff;
`;
