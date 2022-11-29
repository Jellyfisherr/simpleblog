import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import { DetailWrapper, Header, Content} from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
    render() {
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.detail.get('title'),
    content: state.detail.get('content')
});

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetail(id));
    }
})

export default connect(mapState, mapDispatch)(Detail);