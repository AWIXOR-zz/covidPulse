import { ResponsiveBar } from '@nivo/bar'

const data = [
  {
    country: 'AD',
    'hot dog': 90,
    'hot dogColor': 'hsl(221, 70%, 50%)',
    // burger: 132,
    // burgerColor: 'hsl(117, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 114,
    'hot dogColor': 'hsl(181, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 123,
    'hot dogColor': 'hsl(52, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 57,
    'hot dogColor': 'hsl(9, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 168,
    'hot dogColor': 'hsl(251, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 90,
    'hot dogColor': 'hsl(331, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 49,
    'hot dogColor': 'hsl(70, 70%, 50%)',
  },
]
export default function Charts() {
  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      enableGridX={true}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  )
}
