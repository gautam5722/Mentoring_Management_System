import { Container } from 'mdbreact'
import React from 'react'
function damn(){
  window.location.replace("https://nitinkumar33.github.io/assi/Fusion_Basics_020152019.pdf")
}
function damn1(){
  window.location.replace("https://nitinkumar33.github.io/assi/978-1-63057-055-2-2.pdf")
}
function damn2(){
  window.location.replace("https://nitinkumar33.github.io/assi/जय श्री राम.pdf")
}

const ViewAssingment = () => {
  return (
<>
    <Container>
    <div><center><h1>Download Your Assignment 1</h1></center></div>
    <center><button onClick={damn} className='btn btn-primary'>Download</button></center>
    </Container>

<br></br><br></br><br></br>
<Container>
    <div><center><h1>Download Your Assignment 2</h1></center></div>
    <center><button type='button' onClick={damn1} className='btn btn-primary'>Download</button></center>
    </Container>
    <br></br><br></br><br></br>

<Container>
    <div><center><h1>Download Your Assignment 3</h1></center></div>
    <center><button type='button' onClick={damn2} className='btn btn-primary'>Download</button></center>
    </Container>
    </>
  )
}

export default ViewAssingment