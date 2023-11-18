import React from "react";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <Image src="/coffee.png" width={300} height={300} alt="person walking" />
    </section>
  );
};

export default HeroSection;
