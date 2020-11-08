import { useEffect, useState } from "react";
import Top4 from './Carousel'
import MoreSongs from './MoreSongs'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Container, Row } from "reactstrap";
import VideoPlayer from './VideoPlayer';

const App = () => {
  let [videoData, setVideoData] = useState()

  useEffect(() => {
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cplayer&chart=mostPopular&regionCode=US&videoCategoryId=10&maxResults=11&key=AIzaSyDxh3W1Bg4LfoH5BdUc1-1z4jbjMgqF__w')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setVideoData(data)
      })
  }, []
  )
  // console.log(videoData ? videoData.items: null)
  return (
    <div>
      <Router>
      <Switch>
          {videoData ? videoData.items.map((l) => <Route path={`/${l.id}`} ><VideoPlayer url={l.id}/> </Route>): <div></div>}
          <Route path='/'>
                  {videoData ? <Container fluid={true}><Row><Col className='p-0'><Top4 videoData={videoData.items.slice(0, 5)}/></Col></Row></Container> : <div>Loading</div>}
                  {videoData ? <MoreSongs videoData={videoData.items.slice(5,)} /> : <div></div>}
                </Route>
        </Switch>
      </Router>
    </div>
    )
}

export default App;
