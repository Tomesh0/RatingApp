import { useState } from "react";
import './index.css'

export default function Home() {
  
  const Questions = [{
    Qnum: "1",
    Question: "How satisfied are you with our product?",
    rating : [
      {rate : 1},
      {rate : 2},
      {rate : 3},
      {rate : 4},
      {rate : 5}
    ]
  },

  {
    Qnum: "2",
    Question: "How fair are the prices compared to similar retailer?",
    rating : [
      {rate : 1},
      {rate : 2},
      {rate : 3},
      {rate : 4},
      {rate : 5}
    ]
  },
  {
    Qnum: "3",
    Question: "How satisfied are you with the value for money of your Purchase?",
    rating : [
      {rate : 1},
      {rate : 2},
      {rate : 3},
      {rate : 4},
      {rate : 5}
    ]

  },
  {
    Qnum: "4",
    Question: "on the scale of 1-10 how would you recommend us to your friends and family?",
    rating : [
      {rate : 1},
      {rate : 2},
      {rate : 3},
      {rate : 4},
      {rate : 5},
      {rate : 6},
      {rate : 7},
      {rate : 8},
      {rate : 9},
      {rate : 10},
            

    ]
  },
  {
    Qnum: "5",
    Question: "What could we do to improve our services?",
    rating : [
      {
          rate : " "
      }
    ]
   
  },



  ];

  // const five = [1, 2, 3, 4, 5]

  localStorage.setItem('How satisfied are you with our product?',Questions.rate);
  localStorage.setItem('How fair are the prices compared to similar retailer',Questions.rate);
  localStorage.setItem('How satisfied are you with the value for money of your Purchase?',Questions.rate);
  localStorage.setItem('on the scale of 1-10 how would you recommend us to your friends and family',Questions.rate);
  localStorage.setItem('What could we do to improve our services',Questions.rate);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Message, setMessage] = useState("");
  
 
 

  const handleNextClick = (e) =>{
    
    const nextQuestion = currentQuestion + 1;
     if (nextQuestion < Questions.length ) {
    setCurrentQuestion(nextQuestion);
  }
      else{
        setMessage("Thankyou For your Support")
      }

  }
  const handlePrevClick = (e) =>{
    e.preventDefault()
    const nextQuestion = currentQuestion - 1;
     if (nextQuestion < Questions.length) {
    setCurrentQuestion(nextQuestion);
    
  }

  }



  // const result = localStorage.setItem('Rating', Questions.rating.rate);
  

 
  

  return (<div>




    <div className='container'>
      <div className='row'>
        <div className='col-lg-3'></div>

        <div className='col-lg-6'>
          <div className='wrapper'>

            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{Questions.length}
              </div>
              
              <div >{Questions[currentQuestion].Question}</div>
              
              
                
            </div>

            <div >
            {
              

            }  
						{Questions[currentQuestion].rating.map((ratings) => (
							<input type='text' name="name" value={ratings.rate}/>
						))}
					</div>
						<div>
              {Message}
            </div>
					

            {/* {Questions.map((que) => (
              <h2>{que.Qnum}{que.Question}</h2>
            ))} */}

            <div>
              <button onClick={handlePrevClick}>Prev</button>
              <button onClick={ handleNextClick }>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  )
}
