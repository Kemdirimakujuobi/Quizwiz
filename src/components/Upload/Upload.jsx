import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  width: ${props => props.isUploaded ? '361px' : '118px'};
  height: 126px;
  padding: ${props => props.isUploaded ? '9px 10px' : '8px 9px'};
  align-items: center;
  gap: ${props => props.isUploaded ? '17px' : '8px'};
  flex-shrink: 0;
  border-radius: 16px;
  border: 4px dashed #4084A7;
  border: 4px dashed color(display-p3 0.3176 0.5098 0.6431);
  transition: width 0.3s ease;
`;

const FileName = styled.div`
  flex: 1 0 0;
  color: #F1F7FB;
  color: color(display-p3 0.949 0.9686 0.9843);
  font-family: "ABC Diatype Rounded Variable Unlicensed Trial";
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
`;

const DefaultIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="99" height="108" viewBox="0 0 99 108" fill="none">
    <rect y="0.617676" width="98.6765" height="106.765" rx="5" fill="#336486" style={{fill: '#336486', fill: 'color(display-p3 0.2000 0.3922 0.5255)', fillOpacity: 1}}/>
    <rect y="10.3232" width="92.2059" height="87.3529" rx="4" fill="#A1D2F4" style={{fill: '#A1D2F4', fill: 'color(display-p3 0.6314 0.8235 0.9569)', fillOpacity: 1}}/>
    <rect y="0.617676" width="84.1176" height="106.765" rx="5" fill="#5182A4" style={{fill: '#5182A4', fill: 'color(display-p3 0.3176 0.5098 0.6431)', fillOpacity: 1}}/>
    <path d="M41.9121 46.3823V61.8823" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="4" strokeLinecap="round"/>
    <path d="M49.6621 54.1323L34.1621 54.1323" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="4" strokeLinecap="round"/>
  </svg>
);

const UploadedIcon = () => (
  <svg width="99" height="108" viewBox="0 0 99 108" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="0.617676" width="98.6765" height="106.765" rx="5" fill="#336486" style={{fill: '#336486', fill: 'color(display-p3 0.2000 0.3922 0.5255)', fillOpacity: 1}}/>
    <rect x="6" y="10" width="86" height="88" rx="4" fill="#E1E1E1" style={{fill: '#E1E1E1', fill: 'color(display-p3 0.8824 0.8824 0.8824)', fillOpacity: 1}}/>
    <rect x="6" y="10" width="75" height="88" rx="4" fill="white" style={{fill: 'white', fillOpacity: 1}}/>
    <g opacity="0.5">
      <rect width="47" height="6" rx="3" transform="matrix(1 0 0 -1 20 45)" fill="#336486" style={{fill: '#336486', fill: 'color(display-p3 0.2000 0.3922 0.5255)', fillOpacity: 1}}/>
      <rect width="47" height="6" rx="3" transform="matrix(1 0 0 -1 20 56)" fill="#336486" style={{fill: '#336486', fill: 'color(display-p3 0.2000 0.3922 0.5255)', fillOpacity: 1}}/>
      <rect width="33" height="6" rx="3" transform="matrix(1 0 0 -1 20 67)" fill="#336486" style={{fill: '#336486', fill: 'color(display-p3 0.2000 0.3922 0.5255)', fillOpacity: 1}}/>
    </g>
  </svg>
);

const HiddenInput = styled.input`
  display: none;
`;

const Upload = ({ 
  isUploaded = false, 
  fileName = '', 
  onFileSelect,
  accept = '.pdf,.doc,.docx'
}) => {
  const fileInputRef = React.useRef(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };
  return (
    <Container 
      isUploaded={isUploaded} 
      onClick={!isUploaded ? handleClick : undefined}
      style={{ cursor: !isUploaded ? 'pointer' : 'default' }}
    >
      <HiddenInput
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
      />
      {isUploaded ? <UploadedIcon /> : <DefaultIcon />}
      {isUploaded && <FileName>{fileName}</FileName>}
    </Container>
  );
};

export default Upload;
