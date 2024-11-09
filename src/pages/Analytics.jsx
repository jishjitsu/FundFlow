'use client';

import {
  LineChart,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

const data = [
  { date: 'Aug 01', 'ETF Shares Vital': 2100.2, 'Vitainvest Core': 4434.1, 'iShares Tech Growth': 7943.2 },
  { date: 'Aug 02', 'ETF Shares Vital': 2150.3, 'Vitainvest Core': 4550.7, 'iShares Tech Growth': 8100.1 },
  { date: 'Aug 03', 'ETF Shares Vital': 2200.4, 'Vitainvest Core': 4667.8, 'iShares Tech Growth': 8255.5 },
  { date: 'Aug 04', 'ETF Shares Vital': 2250.5, 'Vitainvest Core': 4800.3, 'iShares Tech Growth': 8400.8 },
  { date: 'Aug 05', 'ETF Shares Vital': 2300.6, 'Vitainvest Core': 4933.0, 'iShares Tech Growth': 8550.2 },
  { date: 'Aug 06', 'ETF Shares Vital': 2350.7, 'Vitainvest Core': 5056.1, 'iShares Tech Growth': 8700.3 },
  { date: 'Aug 07', 'ETF Shares Vital': 2400.8, 'Vitainvest Core': 5179.4, 'iShares Tech Growth': 8850.4 },
  { date: 'Aug 08', 'ETF Shares Vital': 2450.9, 'Vitainvest Core': 5302.7, 'iShares Tech Growth': 9000.5 },
  { date: 'Aug 09', 'ETF Shares Vital': 2501.0, 'Vitainvest Core': 5426.0, 'iShares Tech Growth': 9150.6 },
  { date: 'Aug 10', 'ETF Shares Vital': 2551.1, 'Vitainvest Core': 5549.3, 'iShares Tech Growth': 9300.7 },
  { date: 'Aug 11', 'ETF Shares Vital': 2601.2, 'Vitainvest Core': 5672.6, 'iShares Tech Growth': 9450.8 },
  { date: 'Aug 12', 'ETF Shares Vital': 2651.3, 'Vitainvest Core': 5795.9, 'iShares Tech Growth': 9600.9 },
  { date: 'Aug 13', 'ETF Shares Vital': 2701.4, 'Vitainvest Core': 5919.2, 'iShares Tech Growth': 9751.0 },
  { date: 'Aug 14', 'ETF Shares Vital': 2751.5, 'Vitainvest Core': 6042.5, 'iShares Tech Growth': 9901.1 },
  { date: 'Aug 15', 'ETF Shares Vital': 2801.6, 'Vitainvest Core': 6165.8, 'iShares Tech Growth': 10051.2 },
  { date: 'Aug 16', 'ETF Shares Vital': 2851.7, 'Vitainvest Core': 6289.1, 'iShares Tech Growth': 10201.3 },
  { date: 'Aug 17', 'ETF Shares Vital': 2901.8, 'Vitainvest Core': 6412.4, 'iShares Tech Growth': 10351.4 },
  { date: 'Aug 18', 'ETF Shares Vital': 2951.9, 'Vitainvest Core': 6535.7, 'iShares Tech Growth': 10501.5 },
  { date: 'Aug 19', 'ETF Shares Vital': 3002.0, 'Vitainvest Core': 6659.0, 'iShares Tech Growth': 10651.6 },
  { date: 'Aug 20', 'ETF Shares Vital': 3052.1, 'Vitainvest Core': 6782.3, 'iShares Tech Growth': 10801.7 },
];

const valueFormatter = (number) => `$${Intl.NumberFormat('us').format(number)}`;

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 p-4 bg-black text-white"> {/* Dark background with white text */}
      {/* Portfolio Cards Section */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <h3 className="text-lg font-bold">Portfolio</h3>
          <p className="text-xl">$32,227.40</p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold">Total Profit</h3>
          <p className="text-xl text-green-600">+$430.90</p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold">Total Companies</h3>
          <p className="text-xl">3</p>
        </Card>
        <Card>
          <h3 className="text-lg font-bold">Total Invested</h3>
          <p className="text-xl">$19,698.65</p>
        </Card>
      </div>

      {/* Line Chart Section */}
      <div>
        <LineChart
          data={data}
          index="date"
          categories={['ETF Shares Vital', 'Vitainvest Core', 'iShares Tech Growth']}
          colors={['#1f77b4', '#ff7f0e', '#2ca02c']} // Line colors
          lineThickness={3}
          valueFormatter={valueFormatter}
          yAxisWidth={80}
          showMarkers
          className="h-96"
          // Style the chart to have a white background
          style={{
            backgroundColor: '#ffffff', // White background for the chart
            borderRadius: '8px',
            color: '#000', // Black text for the chart
          }}
        />
      </div>

      {/* Sales Table Section */}
      <Table className="mt-8">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="text-white">Company</TableHeaderCell> {/* White text for header */}
            <TableHeaderCell className="text-right text-white">Sales ($)</TableHeaderCell> {/* White text for header */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="text-white">ETF Shares Vital</TableCell> {/* White text for body */}
            <TableCell className="text-right text-white">$210,000</TableCell> {/* White text for body */}
          </TableRow>
          <TableRow>
            <TableCell className="text-white">Vitainvest Core</TableCell>
            <TableCell className="text-right text-white">$334,000</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-white">iShares Tech Growth</TableCell>
            <TableCell className="text-right text-white">$493,000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
