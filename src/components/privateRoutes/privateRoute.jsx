import { Navigate } from "react-router-dom";
import {Container,Spinner,Col,Row}  from 'react-bootstrap'
 export  function PrivateRoutes({children}){
if(!JSON.parse(localStorage.getItem("user"))){
    <Col>
     <Row>
        <Spinner/>
     </Row>
    </Col>
}
if(!JSON.parse(localStorage.getItem("user"))){
    console.log(JSON.parse(localStorage.getItem("user")))
    return <Navigate to="/login"/>
}
if(localStorage.getItem("user")){
    return  children
}
}