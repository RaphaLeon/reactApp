import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import handleError from '../../error/containers/handle-error';
import HandleError from '../../error/containers/handle-error';

class Home extends Component {
    state = {
        modalVisible: false
    }

    handleOpenModal = (event) =>{
        this.setState({
            modalVisible: true
        });
    }

    handleCloseModalClick = (event) => { 
        this.setState({
            modalVisible: false,
        });
    }
    render() {
        return(
            <HandleError>
                <HomeLayout>    
                    <Related />
                    <Categories 
                        categories={ this.props.data.categories }
                        handleOpenModal = { this.handleOpenModal }
                        /> 
                    {
                        this.state.modalVisible &&
                        <ModalContainer> 
                            <Modal handleClick={ this.handleCloseModalClick }>
                                <h1>This is a portal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        );
    }
}

export default Home