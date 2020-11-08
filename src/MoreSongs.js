import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardImg, CardText, Col, Container, Row} from "reactstrap";
import { PlayFill } from "react-bootstrap-icons";
import { Link } from 'react-router-dom'
import './font.css'
import TextTruncate from "react-text-truncate";



const Button = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    color: white;
    font-size: 95px;
    opacity:0.5;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`

const Song = ({ video }) => {
    return (
    <Col>
        <Card className="text-center" style={{border:'0', marginTop:'20px'}}>
        <div style={{position: 'relative'}}>
            <CardImg style={{width:''}} src={video.snippet.thumbnails.maxres.url}>
            </CardImg>
            <Link to={`/${video.id}`} target="_blank"><Button><PlayFill/></Button></Link>
            
        </div>
            <CardBody style={{backgroundColor:'rgb(41,60,71)', height:'100px'}}>
                <CardText className="songtitle position-relative" style={{bottom:"10px"}}>
                    <TextTruncate
                        style={{color:'white'}}
                        line={2}
                        element='p'
                        truncate='...'
                        text={video.snippet.title}
                    />
                </CardText>
            </CardBody>
        </Card>
     </Col>
    )
}

const MoreSongs = ({ videoData }) => {
    return (
        <div class="container" id='moresongs'>
        <div class="row justify-content-center">
            <div className="text-white h1 position-relative" style={{top:'65px', fontFamily:'' }}><p className="trending">More trending Songs</p></div>
        </div>
            <Container fluid={true}><div className="position-relative" style={{top:'40px'}}><Row xl="3" lg="2" md='1' sm='1' xs='1'>{videoData.map(v =><Song video={v}/>)}</Row></div> </Container>
        </div>
    )
}

export default MoreSongs