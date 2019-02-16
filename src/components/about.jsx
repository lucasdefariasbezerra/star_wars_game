import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from 'semantic-ui-react';
import '../template/style.css';
import RowItem from './shared/rowItem';
import Linker from './shared/linker';
import consts from '../utils/consts';

const { Row } = Grid;

const About = (props) => {
   return(
       <div className='cardGroupSpacing'>
           <Container as='div'>
            <Grid centered>
                <RowItem columns={1} imageSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmpdYJUqxXfTc50Y3Qjf4L55EUyljtL3eyoCj3cb_Yoof5zrv' />
                <RowItem columns={1} imageSrc='https://goodlogo.com/images/logos/star_wars_logo_3476.gif' />
                <Row columns={1} >
                   <Linker url='feed' text='jogar' componentType={consts.BUTTON} />
                </Row>
            </Grid>
           </Container>
       </div>
   );
};

About.propTypes = {
    name: PropTypes.string
};

About.defaultProps = {
    name: 'Testing the proTypes'
};

export default About;