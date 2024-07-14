import * as React from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

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
          />
        </FormControl>
        <Button variant="contained" className="w-full h-10 bg-blue-900 normal-case">Pagar</Button>
        <Box className="flex justify-center items-center px-10 my-6">
          <Typography variant='body2' className=" flex flex-col text-base text-center text-gray-400">
            Prazo de pagamento:
            <strong className="text-gray-700">15/12/2021 - 08:17</strong>
          </Typography>
        </Box>
        <Box className="space-y-3">
          <Stack className="flex flex-row gap-2 absolute items-center">
            <Icon style={{ color: '#03D69D' }}><CheckCircleRoundedIcon className="align-baseline"/></Icon>
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
      </Box>
    </div>
  )
}