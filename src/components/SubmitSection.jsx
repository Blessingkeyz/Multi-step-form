import { Box, Button, FormControl } from '@chakra-ui/react'
import React from 'react'
import { memo } from 'react'

const SubmitSection = memo(({ formValid }) => {
    console.log("render : submit");
    return (
        <Box
            flexDirection={'column'}
            position={'absolute'}
            padding={'0px'}
            alignItems={'center'}
            width={{
                base: '327px',
                sm: '486px'
            }}
            height={{
                base: '55px',
                sm: '222px'
            }}
            top={{
                base: '379px',
                sm: '497.5px'
            }}
            left={{
                base: '3px',
                sm: '174px'
            }}
            gap={{
                base: '50px',
                sm: '26px'
            }}
        >
            {/* Submit */}
            <FormControl>
                <Button
                    width={{
                        base: '327px',
                        sm: '486px'
                    }}
                    height={{
                        base: '55px',
                        sm: '67px'
                    }}
                    borderRadius={'10px'}
                    padding={'16px 120px'}
                    color={'#F8F8F8'}
                    fontFamily={'poppins'}
                    fontStyle={'normal'}
                    fontWeight={'500'}
                    fontSize={{
                        base: '16px',
                        sm: '24px'
                    }}
                    lineHeight={'36px'}
                    bgColor={formValid ? '#440376' : 'rgba(68, 3, 118, 0.6)'}
                    type={'submit'} >
                    Get Started
                </Button>
            </FormControl>
        </Box>
    )
}
)
export default SubmitSection