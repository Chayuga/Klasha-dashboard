import { ArrowDownward } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { data7, data30 } from '../utils';

const SalesGraph = () => {
  const textBlack = '#000000';
  const textRed = '#EF2C5A';

  const [currency, setCurrency] = useState('');
  const [chartData, setChartData] = useState(data7);
  const [colorSeven, setColorSeven] = useState(textRed);
  const [colorThirty, setColorThirty] = useState(textBlack);

  const handleSevenDays = () => {
    setChartData(data7);
    setColorSeven(textRed);
    setColorThirty(textBlack);
  };

  const handleThirtyDays = () => {
    setChartData(data30);
    setColorSeven(textBlack);
    setColorThirty(textRed);
  };

  const handleChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  // w:768 h:284
  const [graphWith, setGraphWidth] = useState(768);
  const [graphHeight, setGraphHeight] = useState(284);

  const mobile = useMediaQuery('(max-width:560px)');
  const tablet = useMediaQuery('(max-width:1024px)');
  const laptop = useMediaQuery('(min-width:1024px)');

  useEffect(() => {
    if (mobile === true) {
      setGraphWidth(230);
      setGraphHeight(100);
    }

    if (tablet === true) {
      setGraphWidth(650);
      setGraphHeight(230);
    }

    if (laptop === true) {
      setGraphWidth(768);
      setGraphHeight(284);
    }
  }, [mobile, tablet, laptop]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        marginX: '1rem',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginX: '1rem',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body1' sx={{ marginRight: '1.5rem' }}>
              Sales
            </Typography>
            <Typography sx={{ borderRight: 1, marginRight: '1.5rem' }}>
              .
            </Typography>
            <Button
              onClick={handleSevenDays}
              size='small'
              sx={{ color: colorSeven, textTransform: 'none' }}
            >
              7 days
            </Button>
            <Button
              onClick={handleThirtyDays}
              size='small'
              sx={{ color: colorThirty, textTransform: 'none' }}
            >
              30 days
            </Button>

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id='demo-simple-select-autowidth-label'>
                currency
              </InputLabel>
              <Select
                labelId='demo-simple-select-autowidth-label'
                id='demo-simple-select-autowidth'
                value={currency}
                onChange={handleChangeCurrency}
                autoWidth
                label='currency'
              >
                <MenuItem value={'usd'}>USD</MenuItem>
                <MenuItem value={'ngn'}>NGN</MenuItem>
                <MenuItem value={'kes'}>KES</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #000000',
              paddingX: '0.6rem',
              maxHeight: '2.7rem',
              color: '#000000',
              textTransform: 'none',
            }}
          >
            <ArrowDownward /> <Typography>Download report</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            border: '1px solid #000000',
            borderRadius: '10px',
            padding: '1.5rem',
            margin: '1rem',
          }}
        >
          <AreaChart
            width={graphWith}
            height={graphHeight}
            data={chartData}
            margin={{ top: 10, right: 30, left: 5, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#EF2C5A' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#EF2C5A' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='range' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='revenue'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
          </AreaChart>
        </Box>
      </Box>
      <Box
        sx={{
          dispaly: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          alignItems: 'center',
          paddingY: '3rem',
          paddingX: '2rem',
          marginBottom: '1rem',
          width: '19rem',
          height: '15rem',
          backgroundColor: '#EF2C5A',
        }}
      >
        <Typography sx={{ color: '#ffffff' }}>
          KlashaWire - send <br />
          money to businesses <br /> globally from Africa
        </Typography>
        <Button
          sx={{
            textTransform: 'none',
            padding: '0.7rem 1rem',
            backgroundColor: '#000000',
            borderRadius: '10px',
            color: '#ffffff',
            bottom: '-2rem',
            '&:hover': { backgroundColor: '#ffffff', color: '#000000' },
          }}
        >
          Send a Wire
        </Button>
      </Box>
    </Box>
  );
};
export default SalesGraph;
