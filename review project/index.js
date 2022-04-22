// local reviews data
const reviews = [
  {
    id: 1,
    name: "William Megan",
    job: "web developer",
    img:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nostrum. Necessitatibus molestias tempore delectus doloremque iusto dignissimos nemo dicta vel natus reprehenderit nam asperiores sit laborum accusantium neque, eligendi qui.",
  },
  {
    id: 2,
    name: "Andrew Coolman",
    job: "ui/ux designer",
    img:
      "https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Gloria  jones",
    job: "IT/Support",
    img:
      "https://images.viacbs.tech/uri/mgid:arc:imageassetref:bet.com:9ad13e9c-2e04-11ec-84ca-0e0dce71f2a5?quality=0.7",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Bill Anderson",
    job: "Head of media",
    img:
      "https://media.istockphoto.com/photos/happy-middle-aged-male-using-latest-technology-picture-id491665687?k=20&m=491665687&s=612x612&w=0&h=5k79xdliTdZnzU9s77rZ_njKgjk3zGYgmpPTuBITduc=",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },


{
    id: 5,
    name: "Jill Ander",
    job: "Photographer",
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjukMkYXjvAghS-RvASSWfeEJdGDqRG3p8g&usqp=CAU",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },



];



const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");



const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn")


//set starting item

let currentItem = 0;

//load initial iteam


window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});


/*
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});
*/

 //show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}








// show next person

  nextBtn.addEventListener("click", function ()  {
      currentItem++;
       if (currentItem > reviews.length-1){
           currentItem=0
       }


      showPerson(currentItem);
  });



 prevBtn.addEventListener("click", function ()  {
      currentItem--;
       if (currentItem < reviews.length-1){
           currentItem 
       }


      showPerson(currentItem);
  });




 // show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

