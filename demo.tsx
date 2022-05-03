import * as React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import {
  alpha,
  styled,
  ThemeProvider,
  experimental_sx as sx,
} from '@mui/material/styles';
import Select from '@mui/material/Select';
import SelectInput, {
  SelectInputProps,
} from '@mui/material/Select/SelectInput';
import createTheme from '@mui/material/styles/createTheme';
import MenuItem from '@mui/material/MenuItem';

const demoData = [
  { name: 'demo1', value: 'demo1' },
  { name: 'demo2', value: 'demo2' },
  { name: 'demo3', value: 'demo3' },
];

const SingleSelect = styled(Select)<SelectInputProps>(({ theme }) => {
  createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            '& .MuiList-root': {
              borderRadius: 0,
            },
          },
        },
      },
    },
  });
});
export default function StyledCustomization() {
  return (
    <ThemeProvider theme={finalTheme}>
      <SingleSelect label="please select" variant="standard">
        {demoData.map((o, i) => (
          <MenuItem divider key={i} value={o.value}>
            {o.name}
          </MenuItem>
        ))}
      </SingleSelect>
    </ThemeProvider>
  );
}
const finalTheme = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: 'red',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: sx({
          paddingBottom: 0,
          paddingTop: 0,
        }),
      },
    },
  },
});
// 4px as default.
// https://mui.com/system/the-sx-prop/#spacing
// https://mui.com/system/borders/#border-radius
