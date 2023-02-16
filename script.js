// Define message and picture arrays
const messages = [
  "Good Morning Dreamlight,i just wanna let you know hello i m fucking here for you.And i love you so so much jaan.ya fail to show mostly but hey i can be the person you trust.*feeling deeply but can't explain.* You are the person i wouldn't mind losing sleep for, well i can stare at you whole night if we sleep together. i mean my wifey is fucking beautiful.Please keep talking like you do without it , jag soona soona lagta hai love. i love to see you smile.i just wanna listen to you more,maybe i won't never get bored of it.i am missing you so much",
  "My soulmate since we started to talk yay i have been thinking about you likely not romanticly ofc in the starting but imagine finally the person you love is loving you back omg not me in the middle of night thinking about our first kiss but hey my thoughts are pure atleast for now coz my lil baby is sleeping and i just wanna come to her dream and make her sleep more peaceful.i am in my 'oh i am in love phrase'with 'haye haye yeh doori'.hey i want when you wake up you have a big smile on your face atleast itna you could do for me love.",
  "But Dude you are so annoying like yah sometimes i went like it's time to kiss her really so she can get shaant for a while with her stupid ques 'Do you still love me ?like no bro i have been playing for 4 years cmon jaanu you know you are my only favorite person with whom i always feel like home.i can make you feel safe love and literally can be joru ka gulam most of the time but keep a little patience my lil kido' i wanna stay with you for a long time so share everything with me like a good soulmate.",
  "I feel so lucky to have you in my life.My cute chipmunk i don't say that enough but i really love. Sorry sometimes i get mean maybe or rude but hey hey it's just how i get close or a lil jerkness won't hurt right. we are so much hoe that yay my mind is running on us us us. i can't stop me neither you can stop yourself so just let us go with time and relax my lil bean everything is gonna be fine at the end.Let's leave it to destiny like we always say *muah*",
  "You are my star in the dark night. So i thought how about waking u up with some cute stuffs i hope you will love this and it will light up your mood.I am gonna keep it for writing things for you as i really wanna write a letter but i can't wait for that moment so i thought this is the better way and yeahh whenever you feel like being down you can come up here and i will write more cute things for you my 3am the reason i am still up damn. never thought i would do something like this for someone but here we go jaan hazar h apke liye toh bs mangna mt coz what will you do then so let's live togehter my love.",
  
];

const pictures = [
  {
    url: "pic 3.jpg",
    caption: "Are you warm enough",
    
  },
  {
    url: "BrightWin2.jpg",
    caption: "I love you more than words can express.",
   
  },
  {
    url: "BrightWin.jpg",
    caption: "You are my home.",
   
  },
  {
    url: "pic 4.jpg",
    caption: "kya kahu ke sharam se hainlub sile hue",
   
  },
  {
    url: "pic 5.jpg",
    caption: "i am here for you my lil bean.",
   
  }
];

// Get elements
const messageElement = document.getElementById("message");
const pictureElement = document.getElementById("picture");

// Function to generate a random message and picture
function generateMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  messageElement.textContent = messages[randomIndex];

  const randomPicture = pictures[Math.floor(Math.random() * pictures.length)];
  pictureElement.innerHTML = `
    <img src="${randomPicture.url}" alt="" class="small" />
    <p class="caption">${randomPicture.caption}</p>
    
  `;
}

// Call the function initially
generateMessage();
