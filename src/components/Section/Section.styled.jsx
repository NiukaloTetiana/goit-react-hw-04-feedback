import styled from 'styled-components';

export const SectionContainer = styled.section`
  margin: auto;
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  font-family: Roboto;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 32px;
  font-weight: 600;
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin-bottom: 20px;
`;
