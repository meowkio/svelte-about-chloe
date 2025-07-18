<script>
  import { typewriter } from './transition.js' // Typewriter effect I got from Svelte Key blocks tutorial
  let key = 0; // key to trigger typewriter animation once
  import { fade } from 'svelte/transition';
  let favouriteNumber = 22;
  let bio = "I am a web developer with a passion for building cool things!"; 
  let hobbies = ["Coding", "Poetry", "Thrifting"];

  import ImageCard from "./lib/ImageCard.svelte";

  let cardData = [
    {
      image: "https://media.istockphoto.com/id/185590965/photo/yellow-rubber-duck-for-bath-time.jpg?s=612x612&w=0&k=20&c=QoT-O5jbOugCgdQhLat15c0L9jCmRrSTiO9U50W_eQc=",
      title: "Coding",
      description: "I love solving problems and writing code to build cool things.",
    },
    {
      image: "https://media.istockphoto.com/id/1460007178/photo/library-books-on-table-and-background-for-studying-learning-and-research-in-education-school.jpg?s=612x612&w=is&k=20&c=PvjSrEGbw3G64q74ccIQaJ9nEj9AzPwjvRo1cWFA3UU=",
      title: "Poetry",
      description: "Writing poetry helps me express my emotions.",
    },
    {
      image: "https://media.istockphoto.com/id/1440399157/photo/international-airport-terminal-asian-beautiful-woman-with-luggage-and-walking-in-airport.jpg?s=612x612&w=0&k=20&c=RqmI0KG_pnEb_GmWLC6pY5MoV75JBt1nU1L9dStkJys=",
      title: "Thrifting",
      description: "I enjoy finding unique and preloved items.",
    },
  ];
</script>

<style>
  h1 {
    color: #2c3e50;
    font-family: Arial, sans-serif;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  .hobbies {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .hobby {
    background-color: #3498db;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
  }
</style>

<div class="container">
  {#key key}
<h1 in:typewriter={{ speed: 2 }}>Hi I'm Chloe!</h1>
  {/key}

	<div transition:fade>
  <p>My favourite number is <strong>{favouriteNumber}</strong>.</p>
  <p>{bio}</p>

  <h2>My Hobbies</h2>
  <div class="hobbies">
    {#each hobbies as hobby}
      <div class="hobby">{hobby}</div>
    {/each}
  </div>

  <h2>Some of My Favourite Things</h2>
  <div class="card-container">
    {#each cardData as { image, title, description }}
      <ImageCard {image} {title} {description} />
        {/each}
      </div>
    </div>
</div>