import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "./styles.css";




// ---------------------------------------------------------------------------------------------------

// PLEASE VIEW ALL OF THE CODE COMMENTS AT THE BOTTOM OF THE FILE BEFORE REVIEWING THIS PROJECT

// ---------------------------------------------------------------------------------------------------





const imagesArray = [
  ["hamburger", "quinoa", "sweet-potato"], 
  ["salmon", "olive-oil", "mozzarella-cheese"],
  ["honey-roasted-almonds", "peppers", "blueberries"] 
];




function Carousel() {

  const [isOnImg1, setIsOnImg1] = useState(false);
  const [isOnImg2, setIsOnImg2] = useState(false);
  const [isOnImg3, setIsOnImg3] = useState(false);
  const [isOnImg4, setIsOnImg4] = useState(false);
  const [isOnImg5, setIsOnImg5] = useState(false);
  const [isOnImg6, setIsOnImg6] = useState(false);
  const [isOnImg7, setIsOnImg7] = useState(false);
  const [isOnImg8, setIsOnImg8] = useState(false);
  const [isOnImg9, setIsOnImg9] = useState(false);
  const [isInCarousel, setIsInCarousel] = useState(false);


  const [isCarouselRunning, setIsCarouselRunning] = useState(true);
  const [cancelCount, setCancelCount] = useState(0);
  const [carouselMessage, setCarouselMessage] = useState("Slideshow about to start right..."); 
  const [animationStarted, setAnimationStarted] = useState(false);



  return (
    <div>
      <BuildCarousel
        isOnImg1={isOnImg1}
        setIsOnImg1={setIsOnImg1}
        isOnImg2={isOnImg2}
        setIsOnImg2={setIsOnImg2}
        isOnImg3={isOnImg3}
        setIsOnImg3={setIsOnImg3}
        isOnImg4={isOnImg4}
        setIsOnImg4={setIsOnImg4}
        isOnImg5={isOnImg5}
        setIsOnImg5={setIsOnImg5}
        isOnImg6={isOnImg6}
        setIsOnImg6={setIsOnImg6}
        isOnImg7={isOnImg7}
        setIsOnImg7={setIsOnImg7}
        isOnImg8={isOnImg8}
        setIsOnImg8={setIsOnImg8}
        isOnImg9={isOnImg9}
        setIsOnImg9={setIsOnImg9}
        isInCarousel={isInCarousel}
        setIsInCarousel={setIsInCarousel}
        isCarouselRunning={isCarouselRunning}
        setIsCarouselRunning={setIsCarouselRunning}        
      />
      <CancelAnimation
        isCarouselRunning={isCarouselRunning}
        setIsCarouselRunning={setIsCarouselRunning}
        cancelCount={cancelCount}
        setCancelCount={setCancelCount}
        carouselMessage={carouselMessage}
        setCarouselMessage={setCarouselMessage}
        animationStarted={animationStarted}
        setAnimationStarted={setAnimationStarted}
      />
      <FormAndInsights />
    </div>
  ); 
}




function BuildCarousel(props) {  

  const stateVarsArray = [
    [props.isOnImg1, props.isOnImg2, props.isOnImg3],
    [props.isOnImg4, props.isOnImg5, props.isOnImg6],
    [props.isOnImg7, props.isOnImg8, props.isOnImg9]
  ];

  const stateSettersArray = [
    [props.setIsOnImg1, props.setIsOnImg2, props.setIsOnImg3],
    [props.setIsOnImg4, props.setIsOnImg5, props.setIsOnImg6],
    [props.setIsOnImg7, props.setIsOnImg8, props.setIsOnImg9]
  ];


   return (
     <section>
       <div className="carousel-outer-container">
         <div 
           onMouseEnter={() => props.setIsInCarousel(true)}
           onMouseLeave={() => props.setIsInCarousel(false)}
           className={props.isInCarousel ? "carousel-inner-container carousel-entered" : "carousel-inner-container"}
         >
         {imagesArray.map((item, index) => (
           <figure 
             id={`carousel-slide-${index + 1}`}
             key={`carousel-slide-${index + 1}`}            
             className={props.isCarouselRunning ? `carousel-slides carousel-animation-${index + 1}` : "carousel-slides"}
           >
             <img
               src={`./images/${imagesArray[index][0]}.jpg`}
               onMouseEnter={() => stateSettersArray[index][0](true)}
               onMouseLeave={() => stateSettersArray[index][0](false)}
               alt={`Photo of ${imagesArray[index][0]}`}
               key={`food-${imagesArray[index][0]}`}
               className={stateVarsArray[index][0] ? "carousel-images img-border-yellow" : "carousel-images"}
              />
             <img
               src={`./images/${imagesArray[index][1]}.jpg`}
               onMouseEnter={() => stateSettersArray[index][1](true)}
               onMouseLeave={() => stateSettersArray[index][1](false)}
               alt={`Photo of ${imagesArray[index][1]}`}
               key={`food-${imagesArray[index][1]}`}
               className={stateVarsArray[index][1] ? "carousel-images img-border-yellow" : "carousel-images"}
              />
             <img
               src={`./images/${imagesArray[index][2]}.jpg`}
               onMouseEnter={() => stateSettersArray[index][2](true)}
               onMouseLeave={() => stateSettersArray[index][2](false)}
               alt={`Photo of ${imagesArray[index][2]}`}
               key={`food-${imagesArray[index][2]}`}
               className={stateVarsArray[index][2] ? "carousel-images img-border-yellow" : "carousel-images"}
              />              
           </figure>   
          ))}     
         </div>
       </div>
     </section>
   );
}


function CancelAnimation(props) {

  function handleCancel() {
    if (props.isCarouselRunning) {
      props.setIsCarouselRunning(false);
      props.setCancelCount(prevCount => prevCount + 1);     
    } else {
      props.setIsCarouselRunning(true);
    }
  }

  useEffect(() => {  
    if (props.cancelCount != 0) {
      alert(`Slideshow paused, amount of times you stopped it: ${props.cancelCount}`); 
    }
  }, [props.cancelCount]);

  useEffect(() => {
    setTimeout(() => props.setCarouselMessage("Slideshow about to start right... now"), 3000);
    setTimeout(() => props.setAnimationStarted(true), 5000);
  }, []);


  return (
    <section>
      <div id="outer-container-btn">        
        <div id="inner-container-btn">
          <button 
            type="button"
            onClick={handleCancel}
            className={props.isCarouselRunning ? "cancel-btn cancel-btn-running" : "cancel-btn cancel-btn-paused"}
          >
            {props.isCarouselRunning ? "Stop carousel" : "Start carousel"}
          </button>
          <p className={!props.animationStarted ? "position-animation-msg" : "position-animation-msg animation-began"}>         
            {props.carouselMessage}
          </p>        
        </div>
      </div>
    </section>
  );
}






function FormAndInsights(props) {

  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [favCarouselFood, setFavCarouselFood] = useState(null);
  const [numFoodsCook, setNumFoodsCook] = useState();
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [canCookWell, setCanCookWell] = useState(null);

  function handleInput1(event) {
  	if (event.target.value != "") {
    	setFavCarouselFood(event.target.value);
      setAnsweredQuestions(prevNumber => prevNumber + 1);
    }
  }
  
  function handleInput2(event) {
  	if (event.target.value != "") {
    	setNumFoodsCook(event.target.value);
      setAnsweredQuestions(prevNumber => prevNumber + 1);
    }
  }

  useEffect(() => {
    if (answeredQuestions === 2) {
      setIsFormCompleted(true);
      if (numFoodsCook >= 5) {
        setCanCookWell(true);
      } else {
        setCanCookWell(false);
      }
    }
  }, [answeredQuestions, numFoodsCook]);


  return (
    <section className="form-styles">
      <form>
        <label htmlFor="favorite-option">  
          What is your favorite food from the options listed here?
        </label>
        <input 
          type="text"
          onBlur={handleInput1}
          name="favorite-option"
          id="favorite-option"   
        /> <br />
        <label htmlFor="cooking-question">  
          How many of these foods do you know how to cook well?
        </label>
        <input 
          type="number"
          onBlur={handleInput2}
          name="cooking-question"
          id="cooking-question"    
        />
      </form>
      <details>
        <summary className={!isFormCompleted ? "" : "form-completed-flash"}>
          {!isFormCompleted ? "Answered Questions:" : "Answered Questions – Check Answers and Insights"}
        </summary>
        <ul>
          <li>
            {favCarouselFood != null ? `Your favorite food from the slideshow was ${favCarouselFood}` : "You did not tell us your favorite food yet"}
          </li>
          <li>
            {numFoodsCook != null ? `You can cook ${numFoodsCook} of the carousel foods well` : "We don't know how many foods you can cook well yet"}
          </li>
          {canCookWell != null ? 
            <li>
              {canCookWell ? `You clearly are good cook considering you can cook ${numFoodsCook} of those foods` : "Since the amount of foods you can cook well is less than 5, you may benefit from some cooking classes"}
            </li> : null}
          <li style={!isFormCompleted ? {display: "none"} : null}>
            {!isFormCompleted ? "" : "Thank you for completing the form"}
          </li>
        </ul>   
      </details>
    </section>  
  );
}




ReactDOM.render(<Carousel/>, document.getElementById("application"));





/* Please open the project in a new tab by clicking on the "open in new window" button in the top right corner */
/* The <form> portion of the project only really has logic for a users initial input, it's not designed to have/accept additional inputs from the user after the initial one. Yes, I know that you would need that additional logic in the real world but this was not a production webpage/project, so I placed more of an emphasis on just focusing on using React. The project still shows proficiency with React's core fundamentals without that additional logic */
/* Once again, this was not a production webpage/project, so the CSS and responsiveness was not prioritized. I built this project to show usage/competency with React function components & hooks, so I focused much more so on the React code versus the CSS code. Please do not evaluate my CSS capabilities based on the CSS you see in this project. If you would like to see my CSS capabilities, please view my "blueberry practice project" on the Repl platform (which is in the "featured" section of my LinkedIn profile) */
/* I basically built this project entirely on my own and also I had never built a carousel before */
/* I know that onBlur event is a little bit of a hack here but the issue is onChange event fires after every keystroke in some browsers which is not what I wanted, onBlur event works better here */
 
 
 
 
/* INSTRUCTIONS:  how to go through the form portion of the webpage as a user */
 
/* NOTE: when you try out all of these input options that I list below for the form questions, you need to refresh the page and start over each time */
/* 3 main options:
		1) fill out no questions  ––  toggle open the <details> element
  	2) fill out the first question ONLY  ––  toggle open the <details> element
 	 	3) fill out both questions  ––  toggle open the <details> element
*/





      













