'use client';
import Image from "next/image";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const buttons = [
  <Button key="two">2x R$ 15.300,00</Button>,
  <Button key="three">3x R$ 10.196,66</Button>,
  <Button key="four">4x R$ 7.725,00</Button>,
  <Button key="five">5x R$ 6.300,00</Button>,
  <Button key="six">6x R$ 5.283,33</Button>,
  <Button key="seven">7x R$ 4.542,85</Button>,
];

export default function PaymentMethod() {
  const [isOpenOption, setIsOpenOption] = useState(true)

  function handleCheck() {
    setIsOpenOption(true)
  }
  
  function handleUncheck() {
    setIsOpenOption(false)
  }

  return (
    <Box className="w-[500px] min-h-screen mb-16 flex flex-col mx-auto space-y-8">
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
                  <Box className="absolute right-2 top-3">
                    {isOpenOption ? (
                      <Button onClick={handleUncheck} className="rounded-full min-w-1">
                        <Icon style={{ color: '#E5E5E5' }}>
                          <CircleOutlinedIcon className="align-top" />
                        </Icon>
                      </Button>
                    ) : (
                      <Button onClick={handleCheck} className="rounded-full min-w-1">
                        <Icon style={{ color: '#03D69D' }}>
                          <CheckCircleRoundedIcon className="align-top"/>
                        </Icon>
                      </Button>
                    )}
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
                </Button>
                <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                  <Typography variant="body1" className="text-[#4D4D4D]"><strong>3x</strong> R$ 10.196,66</Typography> 
                  <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 30.620,00</Typography> 
                </Button>
                <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                  <Typography variant="body1" className="text-[#4D4D4D]"><strong>4x</strong> R$ 7.725,00</Typography> 
                  <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 30.900,00</Typography> 
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
                </Button>
                <Button className="flex flex-col items-start min-h-20 border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">  
                  <Typography variant="body1" className="text-[#4D4D4D]"><strong>6x</strong> R$ 5.283,33</Typography> 
                  <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 31.699,00</Typography> 
                </Button>
                <Button className="flex flex-col items-start min-h-20 rounded-xl border-2 border-[#E5E5E5] hover:border-2 hover:border-green-500 hover:bg-green-50">
                  <Typography variant="body1" className="text-[#4D4D4D]"><strong>7x</strong> R$ 4.542,85</Typography> 
                  <Typography variant="subtitle2" className="text-[#AFAFAF]">Total: R$ 31.800,00</Typography> 
                </Button>   
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>        
    </Box>
  )
}
