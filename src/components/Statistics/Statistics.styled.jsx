import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

export const StatisticsItem = styled.li`
  font-family: Roboto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray};
  text-shadow: ${({ theme }) => theme.shadows.text};
`;
