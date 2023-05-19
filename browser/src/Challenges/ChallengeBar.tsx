import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { CheckCircleOutline, Cancel } from '@mui/icons-material';
import { useIsConnected } from '../contexts/Beacon';
import { useChallengesContext } from './ChallengesContext';
import { useContract } from '../contexts/Contract';

const drawerWidth = 240
const ChallengeBar: React.FC = () => {
  const isConnected = useIsConnected()
  const pokeContract = useContract()
  const {walletConnects, setWalletConnects,  contractExists, setContractExists, pokeCallable } = useChallengesContext();

//Check Wallet connects task
  useEffect(() => {
    const checkConnection = async () => {
      console.log('Component mounted');
      if (isConnected()) setWalletConnects("pass");
      if (contractExists === "unknown" || contractExists === "fail") {
      try {
        await pokeContract.get_balance()
        setContractExists('pass')
      } catch {
        console.log("Contract not found on chain. Check the address in contexts/settings.tsx is correct")
        setContractExists('fail')

      }
    }
    };
  
    checkConnection();
  
    return () => {
      console.log('Component unmounted');
    };
  }, [isConnected(), useContract()]);


  return (
    <div>
       <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h6" color="textSecondary" textAlign="left" sx={{ pl: 2, pt: 1, pb: 0 }}>
  Challenge 1 
</Typography>
        <List>

        <ListItem key="Contract found on chain">
        <ListItemIcon>
        {contractExists === 'pass' ? (
      <CheckCircleOutline style={{ color: 'green' }} />
    ) : contractExists === 'fail' ? (
      <Cancel style={{ color: 'red' }} />
    ) : (
      <HelpOutlineIcon/>
    )}
        </ListItemIcon>
        <ListItemText primary="Contract found on chain" />

    </ListItem>

        <ListItem key="Wallet connects">
        <ListItemIcon>
        {walletConnects === 'pass' ? (
      <CheckCircleOutline style={{ color: 'green' }} />
    ) : walletConnects === 'fail' ? (
      <Cancel style={{ color: 'red' }} />
    ) : (
      <HelpOutlineIcon/>
    )}
        </ListItemIcon>
        <ListItemText primary="Wallet connects" />

    </ListItem>



    <ListItem key="Poke Entrypoint callable">
  <ListItemIcon>
    {pokeCallable === 'pass' ? (
      <CheckCircleOutline style={{ color: 'green' }} />
    ) : pokeCallable === 'fail' ? (
      <Cancel style={{ color: 'red' }} />
    ) : (
      <HelpOutlineIcon/>
    )}
  </ListItemIcon>
  <ListItemText primary="Poke Entrypoint callable" />
</ListItem>




</List>
          <Divider />        
        </Box>
      </Drawer>
    </div>
  );
};

export default ChallengeBar;