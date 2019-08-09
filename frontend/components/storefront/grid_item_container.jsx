import { connect } from 'react-redux';
import GridItem from './grid_item';

const mapStateToProps = (state, ownProps) => ({
    
    history: ownProps.history
})