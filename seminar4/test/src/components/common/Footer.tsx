import React from "react";
import Styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <div className="footer">Copyright&copy; 2021. BE SOPT Web part. All rights Reserved.</div>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = Styled.div`
  .footer {
    height: 91px;
    color: #cea0e3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
