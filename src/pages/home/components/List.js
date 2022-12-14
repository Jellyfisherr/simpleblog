import React, { PureComponent } from "react";
import { ListItem, ListInfo, LodeMore } from '../style';
import { connect } from "react-redux";
import { actionCreator } from '../store';
import { Link } from 'react-router-dom'; 

class List extends PureComponent {
    render(){
        const { list, addHomeList, page} = this.props;
        return(
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem key={index}>
                            <img 
                            className='pic'
                            src={item.get('imgUrl')}
                            alt=""
                            />
                            <ListInfo>
                            <h3 className="title">{item.get('title')}</h3>
                            <p className="desc">{item.get('desc')}</p>
                            </ListInfo>                                               
                            </ListItem> 
                            </Link>
                        )
                    })
                }   
                <LodeMore onClick={() => addHomeList(page)}>More letters</LodeMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('articleList'),
    page: state.home.get('articlePage')
});

const mapDispatch = (dispatch) => ({
    addHomeList(page) {
        dispatch(actionCreator.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch) (List);