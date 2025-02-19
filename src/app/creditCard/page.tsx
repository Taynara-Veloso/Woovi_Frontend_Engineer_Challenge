import * as React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const parcels = [
  {
    label: '1x R$ 30.500,00',
  },
  {
    label: '2x R$ 15.300,00',
  },
  {
    label: '3x R$ 10.196,66',
  },
  {
    label: '4x R$ 7.725,00',
  },
  {
    label: '5x R$ 6.300,00',
  },
  {
    label: '6x R$ 5.283,33',
  },
  {
    label: '7x R$ 4.542,85',
  },
];

export default function CreditCard() {

  return (
    <div>
      <div className="flex justify-center items-center px-10 my-6">
        <h1 className="font-extrabold text-2xl text-center text-gray-700">
          João, pague o restante em 1x no
          cartão
        </h1>
      </div>
      <Box className="w-[424px] mx-auto space-y-7">
        <FormControl className="w-full space-y-7">
          <TextField id="outlined-basic" label="Nome completo" variant="outlined" />
          <TextField id="outlined-basic" label="CPF" variant="outlined" />
          <TextField id="outlined-basic" label="Número do cartão" variant="outlined" />
        </FormControl>
        <FormControl className="flex flex-row space-x-5">
          <TextField id="outlined-basic" label="Vencimento" variant="outlined" />
          <TextField id="outlined-basic" label="CVV" variant="outlined" />
        </FormControl>
        <FormControl className="w-full">
          <TextField
            id="outlined-select-currency"
            select
            label="Parcelas"
          >
            {parcels.map((amount) => (
              <MenuItem key={amount.label} >
                {amount.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
        <Button variant="contained" className="w-full h-10 bg-[#133A6F] normal-case">Pagar</Button>
        <Box className="flex justify-center items-center px-10 my-6">
          <Typography variant='body2' className=" flex flex-col text-base text-center text-gray-400">
            Prazo de pagamento:
            <strong className="text-gray-700">15/12/2021 - 08:17</strong>
          </Typography>
        </Box>
        <Box className="space-y-3">
          <Stack className="flex flex-row gap-2 absolute items-center">
            <Icon style={{ color: '#03D69D', backgroundColor: '#fff' }}><CheckCircleRoundedIcon className="align-baseline"/></Icon>
            <Stack className="flex flex-row gap-28 space-x-8">
              <Typography variant='subtitle1' className="font-semibold text-gray-700">1ª entrada no Pix</Typography> 
              <Typography variant='subtitle1' className="font-extrabold text-gray-900">R$ 15.300,00</Typography>
            </Stack>
          </Stack>
          <Divider orientation="vertical" className="w-0.5 h-7 relative left-3 top-4 -z-10 bg-gray-200 border-gray-200"></Divider>
          <Stack className="flex flex-row gap-2 absolute">
            <Icon style={{ color: '#03D69D' }}><CircleOutlinedIcon className="align-baseline" /></Icon>
            <Stack className="flex flex-row gap-40 space-x-6">
              <Typography variant='subtitle1' className="font-semibold text-gray-700">2ª no cartão</Typography>
              <Typography variant='subtitle1' className="font-extrabold text-gray-900">R$ 15.300,00</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box className="pt-10">
          <Divider style={{ background: '#E5E5E5', border: '#E5E5E5' }} className="w-full h-1 rounded"></Divider>
        </Box>
        <Box className="flex justify-between">
          <Typography style={{ color: '#4D4D4D' }} variant="body1" className="font-semibold">CET: 0,5%</Typography>
          <Typography style={{ color: '#4D4D4D' }} variant="body1" className="font-semibold">Total: R$ 31.500,00</Typography>
        </Box>
        <Divider style={{ background: '#E5E5E5', border: '#E5E5E5' }} className="w-full h-1 rounded"></Divider>
        <Box className="flex justify-between">
          <Typography style={{ color: '#4D4D4D' }} variant="body1" className="font-extrabold">Como funciona?</Typography>
          <Icon style={{ color: '#4D4D4D' }}><ExpandLessRoundedIcon className="align-baseline" /></Icon>
        </Box>
        <Divider style={{ background: '#E5E5E5', border: '#E5E5E5' }} className="w-full h-1 rounded"></Divider>
        <Box className="pb-3">
          <Typography style={{ color: '#B2B2B2' }} variant="body1" className="flex flex-col items-center ">
            Identificador:
            <strong className="text-gray-700">2c1b951f356c4680b13ba1c9fc889c47</strong>
          </Typography>
        </Box>
      </Box>
    </div>
  )
}