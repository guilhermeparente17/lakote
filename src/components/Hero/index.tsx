import { GoArrowUpRight } from "react-icons/go";
import {
  Banner,
  BannerMain,
  FamilyBanner,
  HeroChildOne,
  HeroChildTwo,
  HeroContainer,
  BannerTitle,
  BannerP,
  BannerHeader,
  HeaderTitle,
  HeaderIcon,
  BannerValues,
  BannerValueTotal,
  BannerSpan,
  HeroController,
  HeroImage,
  Tabs,
} from "./styled";

import Button from "../Button";
import { useEffect, useState } from "react";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import Image5 from "../../assets/image5.jpg";

type bannerProps = {
  id: number;
  title: string;
  amount: string;
  bgColor: string;
  p: string;
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
  ]
  const bannerData: bannerProps[] = [
    {
      id: 1,
      title: "Happy Customer",
      amount: "120k",
      bgColor: "#2A61DA",
      p: "Our customers are satisfied with our performance results, because we sell the best quality homes.",
    },
    {
      id: 1,
      title: "Project Success",
      amount: "473",
      bgColor: "#282928",
      p: "Our customers are satisfied with our performance results, because we sell the best quality homes.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
        if (currentImage === 4) {
            setCurrentImage(1);
            return;
        }
      setCurrentImage((prevImage) => (prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const nextImage = () => {
    if (currentImage === 4) {
        setCurrentImage(1);
        return
    }
    
    setCurrentImage(currentImage + 1);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <HeroContainer>
      <HeroChildOne>
        <BannerMain>
          <BannerTitle>
            Lakote Builds <br />
            Future Housing
          </BannerTitle>

          <BannerP>
            The best place for you to find your dream home, we provide the
            highest quality housing.
          </BannerP>
        </BannerMain>

        <FamilyBanner>
          {bannerData.map((banner, index) => {
            return (
              <Banner key={index} bgColor={banner.bgColor}>
                <BannerHeader>
                  <HeaderTitle>{banner.title}</HeaderTitle>
                  <HeaderIcon>
                    <GoArrowUpRight color="#fff" />
                  </HeaderIcon>
                </BannerHeader>

                <BannerValues>
                  <BannerValueTotal>{banner.amount}</BannerValueTotal>
                  <hr />
                  <BannerSpan>{banner.p}</BannerSpan>
                </BannerValues>
              </Banner>
            );
          })}
        </FamilyBanner>
      </HeroChildOne>

      <HeroChildTwo>
        <HeroImage src={images[currentImage]}  key={currentImage} alt="imagem" />

        <HeroController>
          <Button onClick={() => previousImage()}>Previous</Button>
          <Tabs>
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </Tabs>
          <Button onClick={() => nextImage()}>Next</Button>
        </HeroController>
      </HeroChildTwo>
    </HeroContainer>
  );
};

export default Hero;
