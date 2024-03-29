var quote = document.getElementById("quote");
var newQuote = document.getElementById("newQuote");
var previousRandomNumber = 0;
var quotes = [
				"Beautiful things happen when you distance yourself from negativity.",
				"It is never too late to be what you might have been.",
				"Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
				"Be the change that you wish to see in the world.", 
				"Limit your 'always' and your 'nevers'.",
				"Spread Love everywhere you go.",
				"Each person must live their life as a model for others.",
				"Motivation comes from working on things we care about.",
				"Life has got all those twists and turns. You've got to hold on tight and off you go.",
				"You are enough just as you are.",
				"Life changes very quickly, in a very positive way, if you let it.",
				"You must do the things you think you cannot do.", 
				"Happiness is not by chance, but by choice.",
				"We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
				"Don't wait. The time will never be just right.",
				"Have a spontaneous adventure today!",
				"If you are always trying to be normal, you will never know how amazing you can be.",
				"Working hard is important. But there is something that matters even more: believing in yourself.",
				"You are allowed to be both a masterpiece and a work in progress, simultaneously.",
				"You are doing a freaking great job.",
				"Always believe something wonderful is about to happen.",
				"Some people look for a beautiful place. Others make a place beautiful.",
				"Happiness often sneaks in through a door you didn't know you left open.",
				"You are never too old to set another goal or to dream a new dream.",
				"Stay close to anything that makes you glad you are alive.",
				"Try to be a rainbow in someone else's cloud.",
				"You do not find the happy life. You make it.",
				"The most wasted of days is one without laughter.",
				"You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
				"The bad news is time flies, the good news is you're the pilot.",
				"Your limitation - it's only your imagination.",
				"Push yourself, because no one else is going to do it for you.",
				"Great things never come from comfort zones.",
				"Dream it. Wish it. Do it.",
				"Success doesn't just find you. You have to go out and get in.",
				"The harder you work for something, the greater you'll feel when you achieve it.",
				"Don't stop when you're tired. Stop when you're done.",
				"Wake up with determination. Go to bed with satisfaction.",
				"Do something today that your future self will thank you for.",
				"It's going to be hard, but hard does not mean impossible.",
				"Don't wait for opportunity. Create it.",
				"The key to success is to focus on goals, not obstacles.",
				"The way to get started is to quit talking and begin doing.",
				"Don't let yesterday take up too muuch of today.",
				"We may encounter many defeats, but we must not be defeated.",
				"Knowing is not enough; we must apply. Wishing is not enough; we must do.",
				"We generate fears while we sit. We overcome them by actrion.",
				"Whether you think you can or think you can't, you're right.",
				"Creativity is intelligence having fun.",
				"What you lack in talent can be made up with desire, hustle and giving 110% all the time.",
				"Develop an 'Attitude of Gratitude'. Say Thank You to everyone you meet for everything they do for you.",
				"Reading is to the mind, as exercise is to the body.",
				"For every reason it's not possible, there are hundreds of people who have faced the same circumstances and succeeded.",
				"Things work out best for those who make the best of how things work out.",
				"A room without books is like a body without a soul.",
				"I think goals should never be easy, they should force you to work, even if they are uncomfortable at the time.",
				"Today's accomplishments were yesterday's impossibilities.",
				"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
				"You don't have to be great to start, but you have to start to be great.",
				"A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power.",
				];


newQuote.addEventListener("click", function(){
	var quoting = quotes[Math.floor(Math.random() * quotes.length)];
	quote.textContent = quoting;
})

newQuote.click();