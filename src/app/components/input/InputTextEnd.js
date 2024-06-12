
import * as React from "react";
import {createTheme,Divider,Icon,ThemeProvider} from '@mui/material';
import styled from "@emotion/styled";
import theme from "../../style/theme";
import TextField from '@mui/material/TextField';
// import InputAdornment from '@mui/material/InputAdornment';
export default function InputTextEnd({state, helperText, value, placeholder, InputAdornment}){
    const theme = createTheme({
        typography:{
            fontFamily : "Pretendard"
        },
        palette: {
            primary: {
              main: "#28E67C",
            },
        },
    })
    return(
        <ThemeProvider theme={theme}>
            {
                state == "disabled" ?
                <StyledTextField id="outlined-basic"  variant="outlined" type="text" disabled placeholder={placeholder} value={value}   InputProps={{
                    endAdornment: <InputAdornment position="start">{InputAdornment}</InputAdornment>,
                  }}/> 
                : <></>
            }
            {
                state == "error"?
                <StyledTextField id="outlined-basic"  variant="outlined" type="text" helperText={helperText} placeholder={placeholder} error value={value}   InputProps={{
                    endAdornment: <InputAdornment position="start">{InputAdornment}</InputAdornment>,
                  }}/>
                : <></>
            }
            {
                !state ?
                <StyledTextField id="outlined-basic"  variant="outlined" type="text" value={value} placeholder={placeholder}   InputProps={{
                    endAdornment: <InputAdornment position="start">{InputAdornment}</InputAdornment>,
                  }}/>  : <></>
            }

        </ThemeProvider>
    )
}

const StyledTextField = styled(TextField)`
    width: 100%;
    border-radius: 4px;
    .MuiOutlinedInput-root{
        border: 1px solid #D9D9D9;
        font-size: 14px !important;
            border-radius: 4px;
    }
    .Mui-error{
        border-color: red !important;
    }
    input{
        background-color: #fff;
        font-size: 1.6rem;
        outline: none;
        color: #0E301D;
        border-radius: 4px;
    }
    fieldset{
        padding: 1rem 2rem;
        border: none;
    }
    .Mui-disabled{
        background-color: #F6F6F6;
    }
    p{
        color: red !important;
        line-height: 200%;
    }
    .Mui-error{
        margin: 0;
        input{
            border-color: red !important;
        }
    }
`;