import styled from '@emotion/styled';

const BaseButton = styled.button`
  display: flex;
  height: 53px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #FFFFFF;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(2px);
    border-bottom-width: 6px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background: #78C83D;
  border-top: 2px solid #50A015;
  border-right: 2px solid #50A015;
  border-bottom: 8px solid #50A015;
  border-left: 2px solid #50A015;
`;

export const SecondaryButton = styled(BaseButton)`
  background: transparent;
  border-top: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-right: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-bottom: 8px solid color(display-p3 0.2275 0.2745 0.3059);
  border-left: 2px solid color(display-p3 0.2275 0.2745 0.3059);
`;

export const IconButton = styled(BaseButton)`
  width: auto;
  min-width: 55px;
  padding: 16px 24px 21px 24px;
  background: transparent;
  border-top: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-right: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-bottom: 8px solid color(display-p3 0.2275 0.2745 0.3059);
  border-left: 2px solid color(display-p3 0.2275 0.2745 0.3059);
`;

// Add documentation for usage
/*
Example usage:
<PrimaryButton>CHECK ANSWER</PrimaryButton>
<SecondaryButton>Skip</SecondaryButton>
<IconButton><CrossIcon /></IconButton>
*/
