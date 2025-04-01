import React from 'react';
import styled from '@emotion/styled';

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.div`
  display: flex;
  transform: rotate(-8.436deg);
  padding: 8px 16px 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 111.091px;
  background: #FEE500;
  box-shadow: 0px 1.122px 0px 0px rgba(255, 255, 255, 0.28) inset,
              0px -1.122px 1px 0px rgba(0, 0, 0, 0.33) inset;
`;

const IconContainer = styled.div`
  width: 17.954px;
  height: 17.954px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  font-family: ui-rounded, "SF Pro Rounded", "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  letter-spacing: -0.02em;
`;

const XpBadge = ({ points = 0 }) => {
  return (
    <BadgeContainer>
      <Badge>
        <IconContainer>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g filter="url(#filter0_di_2830_1122)">
              <path d="M14.5979 3.46888L16.8178 3.13964L17.1471 5.35962L19.3671 5.03038L20.684 13.9103L18.4641 14.2395L18.7933 16.4595L16.5733 16.7888L16.9026 19.0087L8.02264 20.3257L7.6934 18.1057L5.47342 18.435L5.14417 16.215L2.92419 16.5443L1.60722 7.66433L3.8272 7.33508L3.49795 5.1151L5.71794 4.78586L5.38869 2.56588L14.2686 1.2489L14.5979 3.46888Z" fill="#CCB30A"/>
            </g>
            <g filter="url(#filter1_i_2830_1122)">
              <path d="M12.7077 6.01824L14.9277 5.689L15.2569 7.90898L17.4769 7.57973L18.1354 12.0197L15.9154 12.3489L16.2447 14.5689L14.0247 14.8982L14.3539 17.1181L9.91396 17.7766L9.58472 15.5567L7.36473 15.8859L7.03549 13.6659L4.81551 13.9952L4.15702 9.5552L6.377 9.22595L6.04776 7.00597L8.26774 6.67673L7.9385 4.45675L12.3785 3.79826L12.7077 6.01824Z" fill="#FFEF0A"/>
            </g>
            <defs>
              <filter id="filter0_di_2830_1122" x="1.60742" y="1.24902" width="19.0767" height="19.8247" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="0.748088"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.682353 0 0 0 0 0.584314 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2830_1122"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2830_1122" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="0.748088"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.117647 0 0 0 1 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2830_1122"/>
              </filter>
              <filter id="filter1_i_2830_1122" x="4.15723" y="3.79834" width="13.978" height="13.9783" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="0.748088"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 0.156863 0 0 0 1 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_2830_1122"/>
              </filter>
            </defs>
          </svg>
        </IconContainer>
        <Text>{points}xp</Text>
      </Badge>
    </BadgeContainer>
  );
};

export default XpBadge;
