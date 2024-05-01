import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import styles from './Filters.module.css'
import React,{useEffect,useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';




function Tabpanel(data){
    const {children, value, index, ...other} =data;

    return(
        <div role="tabpanel" hidden={value!==index} id ={`simple-tabpanel-${index}`} {...other}>
            {value===index && (
                <Box sx={{p:3}}>
                    <Typography>
                        {children}
                    </Typography>
                </Box>
            )}
        </div>
    );
}

function Filters({filters,selectedFilterIndex,setSelectedFilterIndex }){

    const handleChange=(event,newValue)=>{
        setSelectedFilterIndex(newValue);
    }

    function a11y(index){
        return {
            id:`simple-tab-${index}`,
            'aria-controls': `simple-tabpanwl-${index}`,
        }
    }

    return (
    <div>
        <Tabs value ={selectedFilterIndex} onChange={handleChange} TabIndicatorProps={{
            style :{backgroundColor:'var(--color-primary)',}
        }}
        >
            {filters.map((ele,idx)=>{
                <Tab className={styles.tab} label={ele.label} {...a11y(idx)} />
            })}
        </Tabs>
    </div>
    )
}

export default Filters;