import { connect } from 'react-redux';
import GridItem from './grid_item';

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history,
    id: ownProps.id,
    title: ownProps.title,
    price: ownProps.price,
    photoUrl: ownProps.photoUrl
})

export default connect(mapStateToProps, null)(GridItem);