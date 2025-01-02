// Get the modal, seagull images, and close button
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');
const poemText = document.getElementById('poem-text');

// Add event listener to each seagull
const seagulls = document.querySelectorAll('.seagull');
const poems = [
`Unbound 

Here you stand,  
as you are,  
a quiet flame  
in an open field.  

No chains,  
no walls,  
only the vastness  
of your truth.  

Step forward,  
for nothing holds you,
you are free.
`,
`Freedom from “Perfection”

The present society, a vast tapestry;
For so long, I hid my true, flawed identity,
Masking it with a made-up personality,
Cohering with “perfect” societal norms
As I am afraid of facing judgement.

But for a still moment
I’ve come to a realization;
What is this feeling I yearn for?
I thought that I was contented
Living with two personalities
Until I met “freedom”.

With this, I see the truth,
I am finally free to be me.
I perceive a new perspective,
Standing tall and proud;
Embracing the person I truly am.

Unbothered by criticism,
I walk the path to a new chapter,
A life of confidence, embracing imperfections
Knowing that I am enough just the way I was.
As long as I’m free to be me, 
Being “perfect”, I no longer need to be.

`,
`Freedom to Be

You have the freedom
to be yourself,
your true self
here, now.

No walls to press you in,
no voices to bend your shape,
no shadows to chase you away.

Nothing stands in your way
not the weight of yesterday,
not the whispers of tomorrow.

You are here.
You are enough.
Unbound.

The air welcomes you,
the earth steadies you,
the sky stretches infinite.

Be
your true self,
as you were always meant to be.
`,
`"Freedom, for the better"
The freedom you have is in your hands
You no longer have to follow other people's demands
Let the world see your light, and let your spirit soar
For you have changed, a different person from before. 

Feel the strength that lives inside you
Shatter the limits and start anew
With each stride, your essence grows
A journey that's yours, where freedom flows.

Show the world you're more than what they seem
You've risen above, even stronger than the brink
You've risen above, more courageous than you think
For freedom has changed you, for the better.
`,
`"Who you truly are"
Remember who you are,  
Refresh your mind every hour.  
Don't force to commit a change,  
Especially an unnecessary one.  

Freedom is not only from outside parties,  
Freedom is inside your soul.  
Being different and being yourself  
Will not make you a mole.  

You have a choice,  
And it's better to choose the right one.  
Choose to be yourself and be free,  
And you shall be judged by none.
`,
`"Unveilling my true self"
To you, I must admit,  
Revealing my true self is a struggle within.  
Each day, I carry the weight of their stares,  
A fortress of doubt built by standards unfair.  

Leaving me in silence, masked in disguise,  
Hiding my flaws from judgmental eyes.  
Fear grips me in many ways, many fields,  a shadow I can’t escape—  
The pressure to fit into beauty’s cruel shape,  

To follow the dreams that others create,  
To act as they wish, not as I ache.  
But why should I let this crush my soul?  
Why let their demands consume me whole?  

I am more than their hollows of commands,
For I have the right to simply stand.
No force can break the truth I claim,
I’ll rise above, untouched by shame.

No mask to wear, no script to recite,  
My soul stands bare in its radiant light.  
Here I am, unveiled the real me,  
Breaking free from my shadowed past. 
 
This weight they gave cannot define
The beauty, the brilliance that’s solely mine.
My hidden talents, my unspoken voice,
Deserve to flourish, to sing, to rejoice.

I won’t let the mold they’ve designed—  
I’ll carve my path, with my passion aligned.  
I am more than they expect of me.
I am who I am,

I am free.
And nothing can ever take that from me.
`,
`“Beyond the Bounderies” 
I stand on the edge of a sea,
Where the winds whisper, “Be free, just be.”
The sky above, endless and wide,
Reflects the truth I no longer hide.

The road ahead’s all mine to take,
No need to bend, no need to break.
I’m just me, no act, no show,
And I’ll keep moving, letting it flow. 

The future whispers, soft and clear,
In this moment, I have no fear.
I stand as I am, no more to prove,
For in this freedom, I move.
`,
`I am me, and always will be, no matter what.

I’ve spent so many years hiding behind a mask,
Fitting in, pretending, just doing what they ask.
I mimicked perfection, kept my true self locked tight,
Afraid of their eyes, of what they'd think or might.

But then, in a quiet moment, I felt something stir—
A voice, soft yet strong, reminding me to concur:
Why chase perfection when I’m already whole?
Why live in the shadows when I can soar and control?

So I stepped out of the lines I once thought were mine,
Tore down the walls, crossed over the line.
For the first time, I let my soul run free,
Learning that to be me is enough to just be.

No more pretending, no need to appease,
I’ve found my own rhythm, my heart at ease.
The world may judge, but I’ve come to see—
The only approval I need is the freedom to be me.
`
];

// Click event to show poem in modal
seagulls.forEach((seagull, index) => {
    seagull.addEventListener('click', () => {
        poemText.textContent = poems[index]; // Set the corresponding poem text
        modal.style.display = 'flex'; // Show modal
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
});

// Close modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide modal if clicked outside
    }
});

// Function to open the team modal
function openTeamModal() {
    document.getElementById("teamMembersModal").style.display = "block";
}

// Function to close the team modal
function closeTeamModal() {
    document.getElementById("teamMembersModal").style.display = "none";
}

// Close the modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target === document.getElementById("teamMembersModal")) {
        closeTeamModal();
    }
}

// Function to open the modals
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close the modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Redirect to the external URL for "Read Jonathan the Seagull"
document.getElementById('read-jonathan-btn').addEventListener('click', () => {
    window.open('https://www.crisrieder.org/thejourney/wp-content/uploads/2021/02/Jonathan-Livingston-Seagull.pdf', '_blank'); // URL for "Jonathan Livingston Seagull"
});

// Event listeners for "About Us" and "Contact Us" buttons
document.getElementById('about-us-btn').addEventListener('click', () => {
    openModal('aboutUsModal');
});

document.getElementById('contact-us-btn').addEventListener('click', () => {
    openModal('contactUsModal');
});

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const aboutModal = document.getElementById('aboutUsModal');
    const contactModal = document.getElementById('contactUsModal');
    if (event.target === aboutModal) {
        closeModal('aboutUsModal');
    } else if (event.target === contactModal) {
        closeModal('contactUsModal');
    }
};

// Music button functionality
const playMusicButton = document.getElementById('play-music');
const backgroundMusic = document.getElementById('background-music');

let isPlaying = false;

playMusicButton.addEventListener('click', () => {
    if (!isPlaying) {
        backgroundMusic.play(); // Play the music
        playMusicButton.textContent = 'Pause Music'; // Change button text
        isPlaying = true;
    } else {
        backgroundMusic.pause(); // Pause the music
        playMusicButton.textContent = 'Play Music'; // Revert button text
        isPlaying = false;
    }
});