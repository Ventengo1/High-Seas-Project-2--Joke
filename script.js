
const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "What’s orange and sounds like a parrot? A carrot!",
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats! - Read this one 3 times to finally get it:)",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look sad? Because it had too many problems.",
    "Why can’t you trust stairs? They’re always up to something.",
    "What do you call fake spaghetti? An impasta!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I used to play piano by ear, but now I use my hands.",
    "How do you organize a space party? You planet.",
    "Why was the broom late? It swept in.",
    "What’s Forrest Gump’s email password? 1forest1. Run-forest-run. Get it, This one is actually good, makes ense",
    "Why did the computer break up with the internet? There was no connection. - Well...I guess at least a tech related on for Hack Club",
    "How does a train eat? It goes chew chew.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "What did one wall say to the other? 'Meet you at the corner!'",
    "Why was the belt arrested? For holding up a pair of pants.",
    "What’s a vampire’s favorite fruit? A blood orange.",
    "What did the big flower say to the little flower? 'Hey, bud!'",
    "Why do bicycles fall over? Because they’re two-tired!",
    "Why was the math teacher suspicious? She was always counting on something.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "What did the ocean say to the shore? Nothing, it just waved.",
    "Why don’t oysters share their pearls? Because they’re shellfish! - Shellfish really, well ain't the worst one I heard",
    "What do you call a dinosaur with a great vocabulary? A thesaurus. -Hello great humans, This one is pretty corny but it's like a fish with no eyes joke.",
    "What kind of shoes do ninjas wear? Sneakers!",
    "Why did the golfer bring two pairs of pants? In case he got a hole-in-one.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "What kind of music do mummies listen to? Wrap music.",
    "Why did the cookie go to the doctor? Because it felt crummy.",
    "How do trees access the internet? They log on.",
    "What’s a frog’s favorite candy? Lollihops! This probably isn't funny, it's made by AI. It tried, or at least I think it did. ",
    "What did the fish say when it hit the wall? 'Dam.' - Good one...............",
    "Why did the bicycle stand up by itself? It was two-tired. - This one doesn't make sense. Wy stand up wen you are too-tired. Like I understand the 2 tire thin but come on.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.    -To be honest, I don't exactly get this one but is what it is. Right? ",
    "How does a snowman get around? By riding an 'icicle'! - Took me a bit to realize it, 'Icicle' 'Bicycle' ",
    "Why don’t scientists trust atoms? Because they make up everything!",
    "How does the moon cut its hair? Eclipse it. - This is not funny. AI really needs to get better with making jokes.",
    "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.- This one is interesting...",
    "Why was the math book sad? It had too many problems. This could be worse, ",
    "Why did the man put his money in the blender? He wanted to make some liquid assets. - Not terrible I guess, could be more discript but like it",
    "Why did the belt get arrested? For holding up a pair of pants.",
    "What do you call a factory that makes good products? A satisfactory! Honestly, this one isn't all too good but isn't that terrible either.",
    "Why can’t Elsa have a balloon? Because she’d let it go. - This one is actually really funny",
    "How do you make a tissue dance? Put a little boogie in it. - I don't get this one, tell me if I'm wrong but what does this mean? ",
    "Why don’t koalas count as bears? They don’t have the right koalafications. - This one isn't that good.",
    "Why was the baby strawberry crying? Because its parents were in a jam. - This quote isn't too bad, it kinda makes sense but maybe include jam in it or ",
    "What did the shark say when he ate the clownfish? 'This tastes funny.'"
  ];
  
  function generateJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    document.querySelector('.joke').textContent = randomJoke;
  }
  
  function addFloatingText() {
    const colors = ["rgba(255, 255, 255, 0.5)", "rgba(255, 204, 204, 0.5)", "rgba(255, 102, 102, 0.5)", "rgba(102, 178, 255, 0.5)"];
    
    for (let i = 0; i < 25; i++) {
      const hi = document.createElement('div');
      hi.classList.add('hi-text');
      hi.textContent = 'Hi';
  
      // Random positioning, color, opacity, and size
      hi.style.top = Math.random() * 100 + 'vh';
      hi.style.left = Math.random() * 100 + 'vw';
      hi.style.color = colors[Math.floor(Math.random() * colors.length)];
      hi.style.opacity = Math.random() * 0.5 + 0.2;
      hi.style.fontSize = Math.random() * 2 + 1 + 'em';
  
      document.body.appendChild(hi);
    }
  
    for (let i = 0; i < 10; i++) {
      const jokeElement = document.createElement('div');
      jokeElement.classList.add('hi-text');
      jokeElement.textContent = jokes[Math.floor(Math.random() * jokes.length)];
  
      // Random positioning, color, opacity, and size for jokes
      jokeElement.style.top = Math.random() * 100 + 'vh';
      jokeElement.style.left = Math.random() * 100 + 'vw';
      jokeElement.style.color = colors[Math.floor(Math.random() * colors.length)];
      jokeElement.style.opacity = Math.random() * 0.5 + 0.2;
      jokeElement.style.fontSize = Math.random() * 1.5 + 1 + 'em';
  
      document.body.appendChild(jokeElement);
    }
  }
  
  window.onload = addFloatingText;
