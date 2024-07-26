import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export default function PixCreditCard() {
  return (
    <div className="flex flex-col w-[424px] mx-auto items-center space-y-8">
      <div className="flex justify-center items-center">
        <h1 className="font-extrabold text-2xl text-center ">
        João, pague a entrada de <br/>
        R$ 15.300,00 pelo Pix
        </h1>
      </div>
      <Box sx={{
          display: 'flex',
          width: 350,
          height: 350,
          border: 2,
          borderRadius: 2,
          borderColor: '#03D69D',
        }}
      >
        
      </Box>
      <Button variant="contained" className="w-80 h-10  bg-[#133A6F] normal-case">
        Clique para copiar QR CODE
        <Icon style={{ color: '#ffffff', paddingLeft: 5 }}>
          <FileCopyIcon className="align-top w-4 h-6" />
        </Icon>
      </Button>
      <Box className="flex justify-center items-center px-10 my-6">
        <Typography variant='body2' className=" flex flex-col text-base text-center text-gray-400">
          Prazo de pagamento:
          <strong className="text-gray-700">15/12/2021 - 08:17</strong>
        </Typography>
      </Box>

      <Box className="relative w-[424px] space-y-6">
        <Box className="space-y-3">
          <Stack className="flex flex-row gap-2 absolute items-center pl-1">
            <Icon style={{ color: '#03D69D', backgroundColor: '#fff' }}><CircleOutlinedIcon className="align-baseline"/></Icon>
            <Stack className="flex flex-row space-x-32 gap-1">
              <Typography variant='subtitle1' className="font-semibold text-gray-700">1ª entrada no Pix</Typography> 
              <Typography variant='subtitle1' className="font-extrabold text-gray-900">R$ 15.300,00</Typography>
            </Stack>
          </Stack>
          <Divider orientation="vertical" className="w-0.5 h-7 relative left-4 top-5 -z-10 bg-gray-200 border-gray-200"></Divider>
          <Stack className="flex flex-row gap-2 absolute items-center pl-1">
            <Icon style={{ color: '#E5E5E5' }}><CircleOutlinedIcon className="align-baseline" /></Icon>
            <Stack className="flex flex-row space-x-40 gap-3">
              <Typography variant='subtitle1' className="font-semibold text-gray-700">2ª no cartão</Typography>
              <Typography variant='subtitle1' className="font-extrabold text-gray-900">R$ 15.300,00</Typography>
            </Stack>
          </Stack>
        </Box>
        <Box className="pt-10">
          <Divider style={{ background: '#E5E5E5', border: '#E5E5E5' }} className="w-full h-1 rounded"></Divider>
        </Box>
        <Box className="flex justify-between px-2">
          <Typography style={{ color: '#4D4D4D' }} variant="body1" className="font-semibold">CET: 0,5%</Typography>
          <Typography style={{ color: '#4D4D4D' }} variant="body1" className="font-semibold">Total: R$ 31.500,00</Typography>
        </Box>
        <Divider style={{ background: '#E5E5E5', border: '#E5E5E5' }} className="w-full h-1 rounded"></Divider>
        <Box className="flex justify-between px-2">
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
