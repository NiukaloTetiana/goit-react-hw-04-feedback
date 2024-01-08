import styled from 'styled-components';

export const NotificationText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  font-family: Roboto;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;
