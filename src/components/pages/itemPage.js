// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import WithRestoService from '../hoc/';
// import Spinner from '../spinner';
// import Error from '../error';
// import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
// import {Card, CardText, CardBody, Button, CardTitle, CardImg, Badge} from 'reactstrap';

// import './itemPage.css';



// class ItemPage extends Component {

//     componentDidMount() {
//         if( this.props.menuItems.length === 0){
//             this.props.menuRequested();

//             const {RestoService} = this.props;
//             RestoService.getMenuItems()
//                 .then(res => this.props.menuLoaded(res))
//                 .catch(error => this.props.menuError());
//         }
//     }

//     render() {
//         const {loading, error, menuItems} = this.props;
//         if(error) {
//             return (
//                 <div className = "item_page">
//                     <Error/>
//                 </div>
//             )
//         }
//         if(loading) {
//             return (
//                 <div className = "item_page">
//                     <Spinner/>
//                 </div>
//             )
//         }
//         const item = menuItems.find(el => +el.id === +this.props.match.params.id)
//         const{title, url, category, aboutPerson, price, id} = item;
//         //console.log(this.props.menuItems)


//         return (
//             <div className = "item_page">
//                 <Card className="Card">
//                     <CardImg top width="100%" src={url} alt={title}/>
//                     <CardBody>
//                         <CardTitle><h4>{title}</h4></CardTitle>
//                         <CardText>Наставник: <small className="text-muted">{category}</small></CardText>
//                         <CardText><small className="text-muted">{aboutPerson}</small></CardText>
//                         <div className="scale_main">
//                             <div className="scale_first"></div>
//                             <div className="scale_second"></div>
//                         </div>
//                             <div className="resources">
//                                 <h4>Cобрано: <Badge color="success" >50 %</Badge></h4>
//                             </div>
//                         <Button>Подробнее &gt; &gt;</Button>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }
// }




// const mapStateToProps =  (state) =>{
//     return {
//         menuItems: state.menu,
//         loading: state.loading,
//         error: state.error
//     }
// }


// const mapDispatchToProps = {
//     menuLoaded: menuLoaded,
//     menuRequested,
//     menuError,
//     addedToCart
// }


// export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(ItemPage) );