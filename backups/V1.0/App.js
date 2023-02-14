import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <br></br>

      <Alert variant="primary"> Northrend Expedition </Alert>


        <Breadcrumb>

        <BreadcrumbItem active> Prologue </BreadcrumbItem>
        <BreadcrumbItem> <a href="https://www.w3schools.com"> The Shore </a> </BreadcrumbItem>
        <BreadcrumbItem> The Keep </BreadcrumbItem>

        </Breadcrumb>

        
        <Card style={{ width: '60rem',color: "#000" }}>

        <Card.Img src="https://www.linkpicture.com/q/crypt-banner-copy.png" />

        <Card.Body>
        
        <br></br>

        <Card.Title> 
        New Avalon Crypt
        </Card.Title>


        <Card.Text>
        <br></br>
        </Card.Text>

        <Card.Text>
        <small className="font-weight-light">
        The air inside the crypt where Mercer used to conduct his research was danker than ever. The death knight finally stopped leaning on the crooked wall, straightening up;
        </small>
        </Card.Text>
       
        <Card.Text>
        <small className="font-weight-light">
        in his mind he was still disappointed with how last week's meeting with the Ember Wolves went.
       "How could they not see it? The Pass was clearly the superior defensible option... *sigh* at least Morteious' got some sense." He'd mutter to himself in a low tone.
       </small>
       </Card.Text>

       
       <Card.Text>
       <small className="font-weight-light">
       But maybe that's what he kept telling himself to make up for a distraction on a more pressing matter that had plagued his mind for the last few years: The Forgotten Shore. Mercer paced the small crypt room back and forth slowly. before finally picking his runeblade and shoulderpads from the corner of the room.
       He began to move out, stiffening his belt and picking his helmet up from the hallway. But then he was frozen in his tracks as his eyes caught another glimpse of the note; he stood in front of the flyer that was pinned on the wall of the crypt with a dagger:
       </small>
       </Card.Text>



        </Card.Body>
        </Card>





       
        
      </header>
    </div>
  );
}

export default App;
