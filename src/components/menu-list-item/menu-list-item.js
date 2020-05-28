import React from 'react';
import { Link } from 'react-router-dom';
import './menu-list-item.scss';
import {Card, CardText, CardBody, Button, CardTitle, CardImg, Badge} from 'reactstrap';


const MenuListItem = ( {menuItem}) => {
    const {title, aboutPerson, url, category} = menuItem;
    
    return (
        <>
            <Link to = {`/${menuItem.id}`}>
                <Card className="Card">
                    <CardImg top width="100%" src={url}/>
                    <CardBody>
                        <CardTitle><h4>{title}</h4></CardTitle>
                        <CardText>Наставник: <small className="text-muted">{category}</small></CardText>
                        <CardText><small className="text-muted">{aboutPerson}</small></CardText>
                        <div className="scale_main">
                            <div className="scale_first"></div>
                            <div className="scale_second"></div>
                        </div>
                            <div className="resources">
                                <h4>Cобрано: <Badge color="success" >50 %</Badge></h4>
                            </div>
                        <Button>Подробнее &gt; &gt;</Button>
                    </CardBody>
                </Card>
            </Link>
        </>
    )
}


export default MenuListItem;