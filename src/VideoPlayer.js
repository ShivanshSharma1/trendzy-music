import 'bootstrap/dist/css/bootstrap.min.css';

const VideoPlayer = ({ url }) => {
    return (
    <div style={{height:'1000px',}}>
        <div>
            <div  class="embed-responsive embed-responsive-16by9" style={{width:'75%',margin:'auto', position:'relative', top:'100px',}}>
                <iframe class="embed-responsive-item" src={`https://www.youtube.com/embed/${url}?rel=0`} title="Song's Video" ></iframe>
            </div>
        </div>
    </div>
    )
}

export default VideoPlayer;