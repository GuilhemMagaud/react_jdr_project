import { styled } from '@mui/material';
import Parchemin from '../../../parchemin.png'

const Addstyle = styled("div")({
    backgroundImage: `url(${Parchemin})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '260px',
    height: '340px'
  })

function Addperso(){
    return(
        <div>
        <Addstyle sx={{paddingLeft: '55px', paddingTop: '35px', paddingRight: '20px', marginTop:'25px',marginLeft:'25px'}}>
            <p>ajouter une nouvelle fiche </p>
        </Addstyle>
    </div>
    );
    
}

export default Addperso;