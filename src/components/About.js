import React, { useState } from "react";



export default function About() {
  const[myStyle , setMyStyle] =useState({
    color: 'black',
    backgroundColor: 'white'
    
  })

  const [myText , setMyText] = useState("Enable Dark mode")
  const toggleStyle = () => {
    if(myStyle.color == 'black'){
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setMyText("enable light mode");
    }

      else{
        setMyStyle({
          color: 'black',
          backgroundColor: 'white'
        })
        setMyText("enable dark mode")
      }
    
  }


  
  return (
    <div className="container" style={myStyle}>
      <div className="accordion" id="accordionExample"  >
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingOne" style={myStyle}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              About 1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first about body.</strong> It is shown by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the
              overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              About 2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second about body.</strong> It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the
              overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              About 3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third about body.</strong> It is hidden by
              default, until the collapse plugin adds the appropriate classes
              that we use to style each element. These classes control the
              overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-warning" onClick={toggleStyle}>{myText}</button>
    </div>
  );
}
