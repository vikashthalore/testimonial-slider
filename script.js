const testimonials = [
    {
        name: "karma",
        photoUrl: "https://plus.unsplash.com/premium_photo-1749614134903-6858a388b22f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur rem quas aspernatur dolorem atque obcaecati fugiat omnis, minus temporibus hic vel aliquam impedit quo accusamus, provident tempora deleniti, nesciunt voluptatibus.",
    },
      {
        name: "varma",
        photoUrl: "https://images.unsplash.com/photo-1743875929006-803ea54cafc1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        text: "Lorem ipsum dolor sit amet lorem maintain copyright content accepted main content consectetur adipisicing elit. Tenetur rem quas aspernatur dolorem atque obcaecati fugiat omnis, minus temporibus hic vel aliquam impedit quo accusamus, provident tempora deleniti, nesciunt voluptatibus.",
    },
     {
        name: "sarma",
        photoUrl: "https://plus.unsplash.com/premium_photo-1669725348367-e3ab175b9143?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        text: "arem type body parts damage on this time to crating automaticly in masc in the body parts on arms an back side Lorem ipsum dolor sit amet lorem maintain copyright content accepted main content consec temporibus hic vel aliquam impedit quo accusamus, provident tempora deleniti, nesciunt voluptatibus.",
    },    
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} =
    testimonials[idx];
    imgEl.src = photoUrl
    textEl.innerHTML = text
    usernameEl.innerHTML = name
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(() =>{
      updateTestimonial()
    }, 2000)
}