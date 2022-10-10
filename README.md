
# SEI Project 2: Reacathon

## Overview 

### Description

At the end of the  second module, dedicated to the React web applications, we were tasked with building a small front end application using a public API.
We chose the API of the Rijksmuseum in Amsterdam (https://data.rijksmuseum.nl/object-metadata/api/) and built an application to show some of the collections and single items in more detail.

### Deployment link

https://sei-project2-museum.netlify.app/

### Timeframe & Working Team
It was a pair project and we had 48 hours to complete it. 
Our Team members were Ridwan Arshad (https://github.com/Riddles-sys) and Arianna Giordano (https://github.com/silverjana/ )

### Technologies Used

HTML  
SASS  
JavaScript  

React   
Bootstrap  
API  
Axios  
Yarn 

GitHub  
VSCode with LiveShare  
Insomnia  
Google developer Tools  

### Brief
#### Overview
The second project is to **build a React application** that consumes a **public API**.
​
#### Technical Requirements
​
Your app must:
* Consume a public API – this could be anything but it must make sense for your project.
* Have several components
* The app can have a router - with several "pages", this is up to you and if it makes sense for your project.
* Include wireframes - that you designed before building the app.
* Be deployed online and accessible to the public (hosted on your public github, not GA github!)

#### Necessary Deliverables
* A working application, hosted somewhere on the internet
* A link to your hosted working app in the URL section of your Github repo
* A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
​
#### Sign Off Reqs
* A working request in Insomnia from the API you want to use, showing that you can access the dataset you need.
* A basic wireframe of your apps design + components

## Planning
UI wireframe Sketch on Excalidraw:   
<img src="https://i.imgur.com/AVv396G.png" alt="screenshot" width="350"/>  

We also planned what components were needed:

**App**  
all imports, routes  
**Navbar**  
navigation  bar with brand (home)+ link (list)  
**Footer**  
text-links  
**Main**  
image + title + button ( nav to list)  
**List**  
cards ( GET request)  
image + title  
**OneObject**  
(GET request , object.id is target value)  
image, title, information about object, button for list  

Due to time constraints we mostly pair coded, and debugging was done together.
I can take credit for the styling of the home page and the cards.

## Process
We mostly pair coded on VSCode Live Share, and pushed to a Github repository on my account.  

We started by importing all the packages and creating the necessary components and Router.  

<img src="https://i.imgur.com/dTlhWdH.png" alt="screenshot" width="650"/>

We moved on to creating an Axios GET request using an API key and mapping the data to display the information we wanted. In this instance we wanted to extract the title, image, object number and Id.   

<img src="https://i.imgur.com/INHapDo.png" alt="screenshot" width="750"/>

We placed these into Bootstrap cards.  
We used the useParams method to hook the extracted data from the first request to make a new GET request.  
<img src="https://i.imgur.com/SpZpxcD.png" alt="screenshot" width="750"/>

The API was quite complex and required the object number to attain a description of the object so we could display each object with more information. If there was no English description available, a long title was displayed instead.  

<img src="https://i.imgur.com/YVLH6H9.png" alt="screenshot" width="750"/>

We created a Homepage with the background image of the museum and an Enter button to welcome the user of the App. 
In the header, we created a navigation bar. 
We incorporated a Link to the Museum website in the footer, along with our GitHub pages as the creators of the app

<img src="https://i.imgur.com/X7QsUIS.png" alt="screenshot" width="750"/>

## Final Product

*coming*


### Challenges
The issue that really affected our application was that the API documentation was not up to date (or the API not working properly), as even if it is explicitly stated and used in the example, there was no way to make an API request to get all the paintings of a specific artist.   

<img src="https://i.imgur.com/Q4zp17T.png" alt="screenshot" width="650"/>
<img src="https://i.imgur.com/ixQW0R9.png" alt="screenshot" width="750"/>
<img src="https://i.imgur.com/dtbqRvf.png" alt="screenshot" width="750"/>

This is the response to that request: (single artworks should be objects in the artObjects array)  

<img src="https://i.imgur.com/VBwBeg4.png" alt="screenshot" width="750"/>

Therefore we could not add the option on the Single Item page to see more art by the same artist.


The first problem we came across while coding was mapping the data from the API into the cards as an error was displayed saying “paintings.map is not a function”. 
With the use of console.log, we realised the issue was with the definition of painting and the nested artObjects. To correct this, we used setPaintings to data.artObjects and defined painting to the nested data.
Insomnia was used to locate the nested data.  

<img src="https://i.imgur.com/akCRW3g.png" alt="screenshot" width="750"/>


The second issue we ran into was getting the image to display on the Single Painting page. 
The solution was to create a conditional statement to verify that the data was received before displaying the image.

<img src="https://i.imgur.com/DE4tGNN.png" alt="screenshot" width="750"/>

Another issue, once we started to display different kinds of objects, was that the “back to previous page” button had to be dynamic.   
<img src="https://i.imgur.com/ooMVV98.png" alt="screenshot" width="750"/>

So we implemented useNavigate to go back to the previous page.  
<img src="https://i.imgur.com/oYTZKM8.png" alt="screenshot" width="750"/>
<img src="https://i.imgur.com/HMBxejg.png" alt="screenshot" width="750"/>

### Wins

<img src="https://i.imgur.com/mHGqLYj.png" alt="screenshot" width="750"/>

<img src="https://i.imgur.com/lUJPmSL.png" alt="screenshot" width="750"/>

We understood how to request and use the API key, and we took advantage of the particular system this API uses to display further information with a second request in a new page.


Although it was the first time practising with React and API, due to good teamwork we built a working network of components in a short amount of time with little to no debugging.

### Key Learnings/Takeaways
It was the first React app project with API requests we built by ourselves and I am very pleased with how we approached the process. While planning and coding I felt I understood well the application structure and how to make axios requests, and I am much more confident with displaying the response data. Since the API we chose had a complex structure,  I had a lot of practice with how to get to the data I wanted out of the response. 

I learned to check the API responses with insomnia before planning the application to see if the documentation is up to date when building a front end.

I also got used to pair coding and working in a team, sharing ideas, reaching solutions we both liked and helping each other when needed.
### Future Improvements

With more time, we could implement a method to get more specific in the GET requests and more methods to sort the data such as by artist or location.
We could also add filters to the list pages.


