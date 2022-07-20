import React from 'react';
import BackgroundBubbles from '../components/backgroundBubbles';
import PrimaryButton from '../components/primaryButton';
import SecondaryOutlineButton from '../components/secondaryOutlineButton';
import MainTitle from '../components/mainTitle';
import {Link} from 'react-router-dom'






const Home = () => {
 
    return (<React.StrictMode>
    
    <BackgroundBubbles />
    <MainTitle />
    <Link to='/SignUp'><PrimaryButton text='Get Started'/></Link>
    
    <SecondaryOutlineButton />
    
    </React.StrictMode> 
  )};
  
  export default Home;

