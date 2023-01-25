import React from "react";

type AboutType = {
  career: Career[];
  awardsAndCertificate: AwardsAndCertificate[];
};

type Career = {
  companyName: string;
  period: string;
  href: string;
  summary: string[];
};

type AwardsAndCertificate = {
  name: string;
  period: string;
  href: string;
};

export default AboutType;
