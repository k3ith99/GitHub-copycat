import React from "react";

function About() {

  return (
    <>
      <div id="aboutus-div">
      <h1> What is our purpose </h1>
      <h2 className="sub-titles"> Purpose </h2>
      <p> We have created this website in order to allow people to have access and know information on
        github user's repo information It allows you to search for any user name, to which will result 
        in giving their information from repo names, forks, starred and many more. We, of course are aware
        of internet safety and are not here to promote any form of dangerous behaviour. This should hold no 
        threat to the actual users nor does it access any private information since Github security prevents
        it from doing so. We simply used an github api, in which fetches users repo information and have created 
        this for the sake of practice and fun.  </p>
      
       <h2 className="sub-titles"> Goals </h2>
        <p> As we have previously mentioned, this is simply for practie and the sake of vistors to have harmless
          fun using the api. This website is being used for educational purpose, both on the sides of the developers
          as well as those who vist our website. We hope to build up and explore new, innovative ways in which we can
          develop and adapt code in ways which is easier and accesibile for users to recperaite and use as a guide. We hope 
          to develop this website with more functionality for the users to wholeheartdly enjoy using. A few 
          features we'd like to add is more access the within the respositries, such as being able to click and be redirected
          to the repo that has been clicked. Alongside a forward and back button for both the pages as well as for the api </p>
        
        <h2 className="sub-titles"> Who</h2>
        <p> The three developers who have been working on this website is Hamza, Giacamo as well as Jumaanah. </p>
        </div>

    </> 
  );
}

export default About;