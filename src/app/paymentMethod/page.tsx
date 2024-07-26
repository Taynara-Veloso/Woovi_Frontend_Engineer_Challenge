'use client';
import Image from "next/image";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

export default function PaymentMethod() {

  return (
    <Box className="w-[500px] min-h-screen mb-16 flex flex-col mx-auto">
      <FormGroup className="space-y-8">
        <Box className="flex justify-center items-center">
          <h1 className="font-extrabold text-2xl text-center">
            João, como você quer pagar?
          </h1>
        </Box>
          
        <Box className="relative">
          <Box>
            <Box className="flex justify-center space-y-40">
              <Box className="flex justify-center">
                <Box sx={{
                  width: 330,
                }}>
                  <Box className="flex items-center bg-[#E5E5E5] rounded-full absolute z-10 px-5 h-7 -top-3 font-bold">Pix</Box>
                </Box>
                <Box className="flex absolute border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50 rounded-xl w-4/5 h-32">
                  <Box className="flex-col w-full p-5">
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                    
                    <Box className="space-y-1">
                      <Typography className="color-[#4D4D4D] text-xl">
                        <strong>1x </strong> 
                        R$ 30.500,00
                      </Typography>
                      <Box className="space-y-2">
                        <Typography style={{ color: '#03D69D' }} className="text-sm font-bold">
                          Ganhe <strong>3% </strong> de Cashback
                        </Typography>
                        <Box className="relative">
                          <Image
                            className="absolute w-full h-8"
                            src="/Rectangle 77.png"
                            alt="R$300,00 reais de volta no seu Pix na hora"
                            width={387}
                            height={33}
                          />
                          <Typography className="absolute text-white p-1">
                            🤑 R$ 300,00 de volta no seu Pix na hora
                          </Typography> 
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className="absolute z-0 w-4/5"
              >
                <Box sx={{
                    marginLeft: 4.4,
                  }}
                >
                  <Box className="flex items-center bg-[#E5E5E5] rounded-full absolute z-10 px-5 h-7 -top-3 font-bold">Pix Parcelado</Box>
                </Box>
                <ButtonGroup orientation="vertical" aria-label="Vertical button group" 
                className="w-full"
                >
                  <Button className="flex flex-col items-start min-h-20 pt-5 rounded-xl border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                    <Typography variant="body1" className="text-[#4D4D4D]"><strong>2x</strong> R$ 15.300,00</Typography> 
                    <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 30.600,00</Typography> 
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                  </Button>
                  <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                    <Typography variant="body1" className="text-[#4D4D4D]"><strong>3x</strong> R$ 10.196,66</Typography> 
                    <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 30.620,00</Typography> 
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                  </Button>
                  <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                    <Typography variant="body1" className="text-[#4D4D4D]"><strong>4x</strong> R$ 7.725,00</Typography> 
                    <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 30.900,00</Typography> 
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                    <Image
                      className="relative z-0 w-full h-8 my-2 flex justify-center "
                      src="/Rectangle 77.png"
                      alt="R$300,00 reais de volta no seu Pix na hora"
                      width={387}
                      height={33}
                    />
                    <Typography className="absolute bottom-5 left-7  text-white text-xs">
                      <strong>-3%</strong> de juros: Melhor opção de parcelamento
                    </Typography> 
                    
                  </Button>
                  <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                    <Typography variant="body1" className="text-[#4D4D4D]"><strong>5x</strong> R$ 6.300,00</Typography> 
                    <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 31.500,00</Typography> 
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                  </Button>
                  <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">  
                    <Typography variant="body1" className="text-[#4D4D4D]"><strong>6x</strong> R$ 5.283,33</Typography> 
                    <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 31.699,00</Typography> 
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                  </Button>
                  <Button className="flex flex-col items-start min-h-20 rounded-xl border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                    <Typography variant="body1" className="text-[#4D4D4D]"><strong>7x</strong> R$ 4.542,85</Typography> 
                    <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 31.800,00</Typography> 
                    <Box className="absolute -right-3 top-1">
                      <FormControlLabel control={
                        <Checkbox 
                          icon={<CircleOutlinedIcon style={{ color: '#E5E5E5', fontSize: 28 }}/>} 
                          checkedIcon={<CheckCircleRoundedIcon style={{ color: '#03D69D', fontSize: 28 }}/>}
                        />} 
                        label=""
                      />
                    </Box>
                  </Button>   
                </ButtonGroup>
              </Box>
            </Box>
          </Box>
        </Box>  
      </FormGroup>      
    </Box>
  )
}
