import { StatisticsList, StatisticsItem } from './Statistics.styled.jsx';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const statisticArray = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total feedbacks' },
    { statItem: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <StatisticsList>
      {statisticArray.map(({ statItem, title }) => (
        <StatisticsItem key={title}>
          <p>
            {title}:{' '}
            <span>
              {title !== 'Positive feedbacks'
                ? statItem
                : positivePercentage + '%'}
            </span>
          </p>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};
