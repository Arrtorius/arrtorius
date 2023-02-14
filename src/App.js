
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Tabs, Tab, Figure, Image } from 'react-bootstrap'

import ReactAudioPlayer from 'react-audio-player';
import demoAudio from "./Theme 3.mp4"
import demoAudio2 from "./Theme 2.mp3"
import demoAudio3 from "./Theme 4.mp3"
import demoAudio1 from "./Theme 1.mp3"
import theimage from "./shipbackground.jpg"
import 'react-h5-audio-player/lib/styles.css';





function App() {
  return (

    





    <div className="Screen">

    <div className="App">

      
      <header className="App-header">
        
        
        <br></br>
        <br></br>



        
          













        <Card bg="dark" style={{ width: '45rem',color: "#699", MarginBottom: 10 }}>
        <br></br>

        <p className="font-weight-light fs-2">  <i>Northrend Expedition</i> 
        </p>

        

       <Tabs
       defaultActiveKey="home"
       id="uncontrolled-tab-example"
       className="mb-3"
       >
       <Tab eventKey="home" title="Prologue">
        
        




      <Card bg="black" border="info" style={{ width: '45rem',color: "#699", MarginBottom: 10 }}>

        <Card.Img src="https://www.linkpicture.com/q/crypt-banner-copy.png" />

        

        <Card.Body>

         

         <Card.Title> 
         <p className="fs-4">
         New Avalon Crypt
          </p>
         </Card.Title>
          <br></br>
          


          <ReactAudioPlayer
         src={demoAudio1}
         controls />
         

         <Card.Text>
         <small className="font-weight-light">
         <p className="text-start fs-6">
          <br></br>
          The air inside the crypt where Mercer used to conduct his research was danker than ever. The death knight finally stopped leaning on the crooked wall, straightening up;
          </p>
          </small>
         </Card.Text>

          

         <Card.Text>
         <small className="font-weight-light">
         <p className="text-start fs-6">
         in his mind he was still disappointed with how last week's meeting with the Ember Wolves went.
         <i>"How could they not see it? The Pass was clearly the superior defensible option... *sigh* at least Morteious' got some sense."</i> He'd mutter to himself in a low tone.
         </p>
         </small>
         </Card.Text>


         <Card.Text>
         <small className="font-weight-light">
         <p className="text-start fs-6">
         But maybe that's what he kept telling himself to make up for a distraction on a more pressing matter that had plagued his mind for the last few years: The Forgotten Shore. Mercer paced the small crypt room back and forth slowly. before finally picking his runeblade and shoulderpads from the corner of the room.
         </p>
         </small>
         </Card.Text>

         

          <Card.Text>
          <small className="font-weight-light">
          <p className="text-start fs-6">
          He began to move out, stiffening his belt and picking his helmet up from the hallway. But then he was frozen in his tracks as his eyes caught another glimpse of the note; he stood in front of the flyer that was pinned on the wall of the crypt with a dagger:
          </p>
          </small>
          </Card.Text>

          <br></br>


          <Figure>
      <Figure.Image
        src="https://www.linkpicture.com/q/ebonletter-2-better-2.png"
      />
    </Figure>


    <Card.Text>
          <small className="font-weight-light">
          <p className="text-start fs-6">
          He lowered his head as he closed his eyes, Thinking back on his last moments on that cursed soil, and on his last interactions with his closest friends: Baron Vandran of Zeramas, Octavius, Tyr... and finally, his second, Astraea. Their faces would flash before his eyes. Their determination, their smiles... their sacrifice. 
        
          </p>
          </small>
          </Card.Text>

      



          <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       Silently, he shed a single tear in their memory, then opened his eyes again as he rose his head high once more, donning his helmet. He took the flyer off the wall, holding it in the palm of his hand as he stared at it.
          <i>"I'll find you brothers... hang in there."</i> he whispered as he clenched his fist holding the note. Finally, he'd return to the table to pick up his compass and take the stairs, ascending out of the crypt hall.
       </p>
       </small>
       </Card.Text>


       

        </Card.Body>
      </Card>


      


      <Card bg="black" border="danger" style={{ width: '45rem',color: "#988", MarginBottom: 10 }}>

    <Card.Img src="https://www.linkpicture.com/q/cathedral-banner-copy.png" />


    <Card.Body>

    <Card.Title> 
         <p className="fs-4">
         Ruins of the Scarlet Enclave
          </p>
         </Card.Title>

          <br></br>



          <ReactAudioPlayer
         src={demoAudio2}
         controls />






          <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <br></br>
       Mercer came out of the crypt to find ebon blade agents going back and forth delivering cargo and supplies from acherus and towards the ruins of the scarlet enclave. 
        A few higher ranking officers of the ebon blade were discussing plans near the gates of the ruins, and some others were runeforging their weapons. 
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       He also took a glimpse of a few paladins among the death knights, talking to each other. <i>"apparently lights hope had send a small regiment to tag along the way"</i> Mercer thought. It was time; an expedition was forming up to move out to Northrend.
       </p>
       </small>
       </Card.Text>



       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       This was personal, The Ember Wolves had lost one of their own to the scourge of Northrend. They had to be summoned. Mercer picked up the pace, hurrying towards the nearby bone gryphon handler to relay the message to his comrades in Surwich.


       </p>
       </small>
       </Card.Text>





         <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"The time has come; Your presence is needed at the Ruins of the Scarlet Enclave. If you wish to help, meet me at the crossroads of the ruins. We'll discuss the matter at hand in private." </i>Wrote Mercer to his friends in the order, hoping they would get the hint. Now he just had to wait.
       </p>
       </small>
       </Card.Text>


         <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       Meanwhile, he made his way to the crossroads of the ruins. He found ebon quartermaster Drakebreaker supervising the supply chain standing near the fountain of the crossroads. Naturally, he went ahead and asked him of the whereabouts of the deathlords organizing the operation.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       He was directed towards the inn where he found Lady Alistra of the unholy school, having a drink. <i>"Go away Mercer. no necropolises for you and your lunatic amber wolves to crash this time... we're using ships, just ships. hehe."</i> 
       </p>
       </small>
       </Card.Text>




       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"Ember"</i> Mercer said in a somewhat irritated tone. <i>"Huh...?"</i> she replied. <i>"It's Ember. ember wolves."</i> he said rolling his eyes, sitting next to her. <i>"mhmm... So, what do you want?"</i> she replied in a slight tipsy way.

       </p>
       </small>
       </Card.Text>



       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"Wanted you to advise your operation handlers to approach Northrend from the Forgotten Shore, located in Dragonblight."</i> said Mercer. Alistra raised an eyebrow. <i>"hmm. instructor, you do realize you still owe me a whole regiment of ebon blade shocktroopers and a necropolis, right...?"</i>
       </p>
       </small>
       </Card.Text>



       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       He let out a long drawn out sigh: <i>"I... I am aware."</i> she continued: <i>"Tell you what Mercer. I like you. *hic* so I'll let you co-lead this mission with a condition. Recover our lost shit... mainly our necropolis Zeramas; what say you? Think you can do it?"</i>
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"Thanks... I suppose I can Try."</i> said Mercer in a softer tone. <i>"Yes... try. and succeed this time. we really need our floaty stronghold back; otherwise we'll never be able to control the skies of *hic* Northrend again."</i> she said as she stood up leaving her mug on the table.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"I've sent a message, called for backup from the ember wolves."</i> He said without looking back to her. <i>"I know, silly."</i> she replied shaking her head, then continued: <i>"I just hope your lot can kick a necropolis back up in the air and flying as effectively as you fucking brought one down. hehe. *hic*"</i>

       </p>
       </small>
       </Card.Text>

      <br></br>




      
    


      <ReactAudioPlayer
       src={demoAudio}
       controls />

      




      <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
        <br></br>
       The area around the crossroads were busy with ebon blade convoys and a few silverhand wagons. Everyone around the ruins were making preparations to move out. Mercer's been standing in the crossroads for a few hours now, hoping that the wolves would show up at any moment. Two ships have already raised anchor, making for Borean Tundra; while three others remained docked at the ruins' port, preparing to sail towards the Forgotten Shore.
       </p>
       </small>
       </Card.Text>



       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"We're ready to set sail Darkblade. What news on your monster hunter acquaintances? They here yet?"</i> came a feminine voice from behind him. He turned to face a death knight highelf, her arms crossed and her chin up in an arrogant way. <i>"Not yet... but they'll be here. I know they will. just... wait a bit longer."</i> he replied.

       </p>
       </small>
       </Card.Text>



       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       She bent her neck slightly to the side: <i>"Do you trust them to--? uhh... maybe I worded it wrong. I mean, are you absolutely sure they'll be here in time? We need to set sail as early as possible. If its safe for us to return... its safe for everyone. and the news is starting to spread about Northrend. As I'm sure you'd agree, we prefer not to have any competition hindering our objective progress."</i>
       </p>
       </small>
       </Card.Text>



       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       He nodded in response: <i>"We shall wait for another hour. If they didn't show up by then, we'll set sail without em anyway. sound good?"</i> The elf changed her pose, her hands now on her hip. After a brief pause she uttered: <i>" Very well. And I suppose you've been briefed thoroughly about out main objective on Northrend?! That we'll be taking back the fallen necropolis?"</i>
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"I have. and it shall be done... We'll move immediately after --"</i> Mercer was interrupted by the elf: <i>"It looks like they are Already here Darkblade."</i> she said as she gestured with her neck towards behind where he stood.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"Mercer!"</i> came a deep growly voice from behind him. he turned around to find them standing there: Rogonaar, Morteious, Meyena and Kenny. as well as the two fresh faces he saw back in Stormwind: Katherine, Rogonaar's sister, and Drartur, cousin to Kazarak.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       He gave a nod to the group with a faint smile, having found comfort around more familiar faces, and that his faith in them wasn't misplaced. <i>"Thank you all for coming."</i> he said as he nodded to the order members, acknowledging them.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       The death knight elf got on her skeleton horse: <i>"Prepare to move to Northrend. We're going to this... shore you speak of. Lets take back what was ours."</i> she declared before galloping towards the port.
        <i>"Well met."</i> said Morteious in his growly worgen voice. followed by Rogonaar: <i>"We're here mate, wot've ye got for us?" </i>
       </p>
       </small>
       </Card.Text>



    </Card.Body>
    </Card>
      



     <Card bg="black" border="warning" style={{ width: '45rem',color: "#786", MarginBottom: 10 }}>

    <Card.Img src="https://www.linkpicture.com/q/port-banner-copy.png" />

    <Card.Body>

      <Card.Title> 
      <p className="fs-4">
        Path to the Port
          </p>
        </Card.Title>
        <br></br>


        <ReactAudioPlayer
         src={demoAudio3}
         controls />
          
          


        <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
        <br></br>
       Mercer nodded to Rogonaar as he then motioned for them to follow. the party started following him towards where the ships were docked. <i>"After all these years, all my searches lead back to that very spot... where it all happened. The Forgotten Shore."</i> said Mercer looking to the side, looking at the wolves with the corner of his eye as he kept walking. 
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       He continued: <i>"Its where Tyr and I fought side by side against the rampant scourge... when everybody else was oblivious to the rampage and havoc wreaked by them in the north. until I was forced to leave his side to save his wife Lilith."</i>
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"Hmmph! I see. That reminds me, Where's your second...? the val'kyr, what was her name again?"</i> asked Morteious curiously. The death knight stopped in his tracks: <i>"Astraea's been missing for the last few years. I've... lost contact with her too after the battle at the forgotten shore."</i> He shook his head, pausing briefly, then continued on his way to the port. <i>"All of us lost something that day. *sigh*"</i> he muttered.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       A moment of silence passed by as the members of the order descended towards the port. <i>"Much has happened since I was there. so many... deaths. Truth be told, I wasn't sure if I could bear to face this cursed place alone. I... appreciate the support, this means a lot."</i> said Mercer, breaking the silence.
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       <i>"Must be one hell of a dangerous job if you're thanking us beforehand."</i> said huntress Meyena as she raised an eyebrow. <i>"It is. would've done it by myself otherwise."</i> he replied quickly.
        <i>"We're with ya lad; we'll get tae the bottom o' this."</i> said the wildhammer dwarf Drartur in an assuring tone. <i>"Thank you, master dwarf."</i> he replied. 
       </p>
       </small>
       </Card.Text>


       <Card.Text>
       <small className="font-weight-light">
       <p className="text-start fs-6">
       Finally, after a few minutes of strolling about the ruined keep, they reached the ships. <i>"All aboard the flagship. we're setting sail ahead of the other two. they'll be following us."</i> Mercer uttered to the wolves as he turned facing them, waiting for them to board the ship before himself...
       </p>
       </small>
       </Card.Text>


      </Card.Body>
     </Card>

        


       </Tab>
       <Tab eventKey="profile" title="The Shore" >
        To be Continued... <br></br>
        
       </Tab>
       <Tab eventKey="contact" title="Forgotten Keep" disabled>
        
       </Tab>
       <Tab eventKey="contact" title="Spider" disabled>
      </Tab>

       </Tabs>








        
        




       </Card>
       
        
      </header>
      
      
      </div>



    </div>
  
  );
  
}



export default App;
