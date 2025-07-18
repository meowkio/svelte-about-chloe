<script>
  import { typewriter } from './transition.js' // Typewriter effect I got from Svelte Key blocks tutorial
	import { messages } from './title-messages.js';

	let i = $state(-1);

	$effect(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});

  import { fade } from 'svelte/transition';
  let Age = 20;
  let bio = "I'm a student at UvA and a part time icecream maker!"; 
  let hobbies = ["Coding", "Poetry", "Thrifting"];
</script>


<style>
  
  :global(body) {
    margin: 0;
    background-color: #2c2c2c;
    color: #ffc0cb;
    font-family: 'Courier New', monospace;
    margin: 0;
    padding: 0;
  }

  h1 {
   color: #ffc0cb;
    font-family: 'Courier New', monospace;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
    margin-top: 10vh;
    color: #ffc0cb;
    font-family: 'Courier New', monospace;
  }
  .hobbies {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  .hobby {
    background-color: #444;
    color: #ffc0cb;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #ffc0cb;
    transition: background-color 0.3s ease;
  }

  .hobby:hover {
    background-color: #5c5c5c;
  }

  .typewriter-container {
    position: sticky;
    top: 0;
    height: 20vh;
    width: 150vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #2c2c2c;
    z-index: 1;
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    color: #ffc0cb;
    font-family: 'Courier New', monospace;
  }

</style>

<div class="typewriter-container">
{#key i}
	<h2 in:typewriter={{ speed: 5 }}>
		{messages[i] || ''}
  </h2>
{/key}
</div>

<div class="container" transition:fade>
  <p>I am <strong>{Age}</strong> years old.</p>
  <p>{bio}</p>

  <h2>My Hobbies</h2>
  <div class="hobbies">
    {#each hobbies as hobby}
      <div class="hobby">{hobby}</div>
    {/each}
  </div>
  </div>