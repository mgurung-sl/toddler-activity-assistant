const activities = [
  {
    name: "Sock Basket Drop",
    ages: ["1-2", "2-3"],
    energy: "calm",
    space: "indoors",
    minutes: 5,
    blurb: "Let your toddler drop rolled socks into a basket, then tip them out and repeat.",
    setup: ["A basket or bowl", "3 to 5 clean socks"],
    steps: [
      "Sit on the floor together with the basket close by.",
      "Model dropping one sock in at a time.",
      "Invite your toddler to copy you and celebrate each drop.",
      "Dump the basket and start over if they want another round."
    ],
    safety: ["Use only soft items.", "Stop if your toddler mouths the socks heavily."]
  },
  {
    name: "Tape Road Adventure",
    ages: ["2-3", "3-4"],
    energy: "balanced",
    space: "indoors",
    minutes: 10,
    blurb: "Make a quick tape road on the floor for cars, animals, or walking feet.",
    setup: ["Low-tack tape", "Toy cars or small stuffed animals"],
    steps: [
      "Place short strips of tape on the floor to form a simple road.",
      "Guide toys along the road together.",
      "Add words like stop, turn, and go for simple language play.",
      "Peel the tape up when finished."
    ],
    safety: ["Avoid tape on delicate flooring.", "Supervise small toy pieces carefully."]
  },
  {
    name: "Cushion Hop Path",
    ages: ["2-3", "3-4"],
    energy: "active",
    space: "indoors",
    minutes: 10,
    blurb: "Line up cushions and let your toddler step, hop, or crawl across.",
    setup: ["2 to 4 firm cushions or pillows", "Clear floor space"],
    steps: [
      "Spread cushions in a short path with small gaps.",
      "Show one safe way to cross slowly.",
      "Invite your toddler to step or crawl across.",
      "Change the order to keep it interesting."
    ],
    safety: ["Keep the path low to the ground.", "Hold a hand if balance is still developing."]
  },
  {
    name: "Water Brush Wall",
    ages: ["1-2", "2-3", "3-4"],
    energy: "calm",
    space: "outdoors",
    minutes: 10,
    blurb: "Paint a fence or wall with water and watch the marks disappear.",
    setup: ["Cup of water", "Paintbrush or sponge", "Outdoor wall, fence, or paving stone"],
    steps: [
      "Dip the brush into water.",
      "Make lines, dots, or big swirls on an outdoor surface.",
      "Name shapes or letters only if your toddler enjoys it.",
      "Refill the water and keep going until interest fades."
    ],
    safety: ["Choose a stable, non-slippery area.", "Avoid outdoor surfaces that may be hot."]
  },
  {
    name: "Nature Treasure Walk",
    ages: ["2-3", "3-4"],
    energy: "active",
    space: "outdoors",
    minutes: 15,
    blurb: "Take a short walk and look for safe, simple treasures like leaves and smooth stones.",
    setup: ["Small bag or bucket", "Shoes and sun protection if needed"],
    steps: [
      "Pick one or two things to look for, such as leaves or sticks.",
      "Walk slowly and let your toddler spot items.",
      "Talk about color, size, or texture.",
      "Empty the finds at home and choose a few favorites to inspect."
    ],
    safety: ["Avoid picking unknown plants.", "Wash hands after the walk."]
  },
  {
    name: "Kitchen Drum Parade",
    ages: ["1-2", "2-3", "3-4"],
    energy: "active",
    space: "either",
    minutes: 5,
    blurb: "Use a pot and wooden spoon for a short, cheerful rhythm break.",
    setup: ["Pot, container, or sturdy bowl", "Wooden spoon"],
    steps: [
      "Tap a slow beat and let your toddler copy it.",
      "Try loud and soft sounds.",
      "March a few steps together while drumming.",
      "End before the noise becomes overwhelming."
    ],
    safety: ["Protect ears by keeping the session short.", "Use sturdy tools without sharp edges."]
  },
  {
    name: "Sticker Rescue",
    ages: ["2-3", "3-4"],
    energy: "calm",
    space: "indoors",
    minutes: 10,
    blurb: "Place stickers on paper and let your toddler peel them off and move them.",
    setup: ["Large stickers", "Paper or cardboard"],
    steps: [
      "Stick a few stickers onto the paper with folded tabs to make peeling easier.",
      "Show how to lift one corner.",
      "Let your toddler peel and restick them freely.",
      "Talk about colors or shapes if they seem interested."
    ],
    safety: ["Use large stickers only.", "Keep the backing away from mouths."]
  },
  {
    name: "Laundry Helper Match",
    ages: ["2-3", "3-4"],
    energy: "balanced",
    space: "indoors",
    minutes: 15,
    blurb: "Turn sock sorting into a quick matching game with a real household task.",
    setup: ["A few pairs of socks", "Clear floor or bed space"],
    steps: [
      "Spread out a few sock pairs.",
      "Find one matching pair together.",
      "Invite your toddler to find the same colors or patterns.",
      "Celebrate effort even if the matches are not exact."
    ],
    safety: ["Keep the set small to avoid frustration.", "Skip tiny items or loose pins."]
  },
  {
    name: "Bubble Chase",
    ages: ["1-2", "2-3"],
    energy: "active",
    space: "outdoors",
    minutes: 5,
    blurb: "Blow bubbles and invite your toddler to stomp, clap, or pop every last one.",
    setup: ["Bubble solution", "Bubble wand", "Outdoor space"],
    steps: [
      "Blow a few bubbles close to where your toddler is standing.",
      "Model popping a couple with hands or feet.",
      "Keep it playful and short when interest dips.",
      "Repeat a few times before moving on."
    ],
    safety: ["Use a bubble solution that is child-safe.", "Keep the activity in an open area away from traffic."]
  },
  {
    name: "Shadow Animal Game",
    ages: ["1-2", "2-3", "3-4"],
    energy: "calm",
    space: "indoors",
    minutes: 10,
    blurb: "Use a lamp and the wall to make moving animal shadows together.",
    setup: ["Lamp or bright light", "Clear wall space"],
    steps: [
      "Turn on a lamp and let shadows appear on the wall.",
      "Move your hands or body to make a rabbit or bird shape.",
      "Invite your toddler to copy the movement.",
      "Switch to a quiet sound or a silly pose before ending."
    ],
    safety: ["Keep the light source stable and cool to the touch.", "Avoid placing lamps near water or clutter."]
  },
  {
    name: "Pom-Pom Roll",
    ages: ["2-3", "3-4"],
    energy: "balanced",
    space: "indoors",
    minutes: 10,
    blurb: "Roll pom-poms across a tray and watch them tumble into different spots.",
    setup: ["A shallow tray or box lid", "Pom-poms or soft balls"],
    steps: [
      "Place a few pom-poms in the tray.",
      "Show how to roll them gently with hands.",
      "Talk about where they go and cheer each attempt.",
      "Keep the collection small and easy to reset."
    ],
    safety: ["Choose soft, large pom-poms only.", "Skip any tiny pieces that could be mouthed."]
  },
  {
    name: "Sticker Match Circle",
    ages: ["2-3", "3-4"],
    energy: "balanced",
    space: "indoors",
    minutes: 15,
    blurb: "Match stickers by color and shape in a tiny sorting game.",
    setup: ["Colorful stickers", "Paper or card"],
    steps: [
      "Place a few stickers in front of your toddler.",
      "Pick one and help them find another matching one.",
      "Sort by color, pattern, or animal picture.",
      "End by sticking the favorites onto one page."
    ],
    safety: ["Use large stickers for easy handling.", "Keep all backing paper out of reach."]
  },
  {
    name: "Treasure Hunt Sweep",
    ages: ["1-2", "2-3", "3-4"],
    energy: "active",
    space: "either",
    minutes: 10,
    blurb: "Hide a few safe items and let your toddler find them in a gentle search game.",
    setup: ["A few soft or safe household objects", "A small space to search"],
    steps: [
      "Show the hidden items and name them.",
      "Invite your toddler to search one area at a time.",
      "Celebrate each find with a quick clap.",
      "Keep the hiding spots easy and visible."
    ],
    safety: ["Avoid anything sharp or small enough to swallow.", "Keep the hunt in a safe, supervised area."]
  },
  {
    name: "Blanket Fort Crawl",
    ages: ["1-2", "2-3"],
    energy: "active",
    space: "indoors",
    minutes: 10,
    blurb: "Make a simple blanket tunnel and let your toddler crawl through it.",
    setup: ["Blanket or sheet", "Chairs or stools", "Soft floor space"],
    steps: [
      "Anchor the blanket lightly between two chairs.",
      "Show your toddler how to crawl through slowly.",
      "Add a stuffed toy to peek inside.",
      "Take it down after a few rounds."
    ],
    safety: ["Keep the tunnel low and stable.", "Never leave a child inside without supervision."]
  },
  {
    name: "Water Bottle Roll",
    ages: ["1-2", "2-3"],
    energy: "balanced",
    space: "outdoors",
    minutes: 5,
    blurb: "Roll a water bottle across the grass and cheer each gentle push.",
    setup: ["Empty plastic bottle", "Outdoor ground"],
    steps: [
      "Set the bottle on the grass.",
      "Use a gentle nudge to make it roll.",
      "Invite your toddler to push it again.",
      "Try a slow roll and a fast roll for variety."
    ],
    safety: ["Use only a lightweight, empty bottle.", "Keep it away from faces and mouths."]
  }
];

const form = document.querySelector("#activity-form");
const surpriseButton = document.querySelector("#surprise-button");
const activityCard = document.querySelector("#activity-card");
const resultStatus = document.querySelector("#result-status");
const favoritesList = document.querySelector("#favorites-list");
const moreIdeasList = document.querySelector("#more-ideas");
const quickPicksList = document.querySelector("#quick-picks");
const showMoreButton = document.querySelector("#show-more-button");
const FAVORITES_KEY = "little-moments-favorites";
let currentActivity = null;
let currentMatches = [];
let areMoreIdeasVisible = false;

function getFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveFavorites(items) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
}

function renderFavorites() {
  const favorites = getFavorites();

  if (!favorites.length) {
    favoritesList.innerHTML = '<p class="empty-copy">No favorite ideas yet.</p>';
    return;
  }

  favoritesList.innerHTML = favorites
    .map(
      (activityName, index) => `
        <div class="favorite-item">
          <span>${activityName}</span>
          <button type="button" class="remove-favorite" data-index="${index}">Remove</button>
        </div>
      `
    )
    .join("");
}

function addFavorite(activityName) {
  const favorites = getFavorites();
  if (!activityName || favorites.includes(activityName)) {
    return;
  }

  const updatedFavorites = [activityName, ...favorites].slice(0, 5);
  saveFavorites(updatedFavorites);
  renderFavorites();
}

function removeFavorite(index) {
  const favorites = getFavorites();
  favorites.splice(index, 1);
  saveFavorites(favorites);
  renderFavorites();
}

function matchesFilter(activity, filters) {
  const ageMatch = filters.age === "any" || activity.ages.includes(filters.age);
  const energyMatch = filters.energy === "any" || activity.energy === filters.energy;
  const timeMatch = filters.time === "any" || activity.minutes <= Number(filters.time);
  const spaceMatch =
    filters.space === "any" || activity.space === "either" || activity.space === filters.space;

  return ageMatch && energyMatch && timeMatch && spaceMatch;
}

function getMatchingActivities(filters) {
  return activities.filter((activity) => matchesFilter(activity, filters));
}

function pickActivity(filters) {
  const matches = getMatchingActivities(filters);

  if (matches.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * matches.length);
  return matches[randomIndex];
}

function renderMoreIdeas() {
  const otherMatches = currentMatches.filter((activity) => activity.name !== currentActivity.name);
  const visibleMatches = otherMatches.slice(0, 3);

  if (!visibleMatches.length) {
    showMoreButton.hidden = true;
    moreIdeasList.innerHTML = "";
    areMoreIdeasVisible = false;
    return;
  }

  showMoreButton.hidden = false;
  showMoreButton.textContent = areMoreIdeasVisible ? "Hide extra ideas" : "Show more ideas";

  if (!areMoreIdeasVisible) {
    moreIdeasList.innerHTML = "";
    return;
  }

  moreIdeasList.innerHTML = visibleMatches
    .map(
      (activity) => `
        <button type="button" class="more-idea-item" data-activity-name="${activity.name}">
          ${activity.name}
        </button>
      `
    )
    .join("");
}

function getThemeLabel(activity) {
  if (!activity) {
    return "Simple";
  }

  const nameMap = {
    "Sock Basket Drop": "Sensory",
    "Tape Road Adventure": "Movement",
    "Cushion Hop Path": "Movement",
    "Water Brush Wall": "Creative",
    "Nature Treasure Walk": "Nature",
    "Kitchen Drum Parade": "Movement",
    "Sticker Rescue": "Sensory",
    "Laundry Helper Match": "Sensory",
    "Bubble Chase": "Movement",
    "Shadow Animal Game": "Creative",
    "Pom-Pom Roll": "Sensory",
    "Sticker Match Circle": "Sensory",
    "Treasure Hunt Sweep": "Pretend play",
    "Blanket Fort Crawl": "Movement",
    "Water Bottle Roll": "Movement"
  };

  if (typeof activity === "string") {
    return activity;
  }

  return nameMap[activity.name] || "Simple";
}

function renderQuickPicks() {
  if (!currentActivity || !currentMatches.length) {
    quickPicksList.innerHTML = "";
    return;
  }

  const picks = currentMatches.filter((activity) => activity.name !== currentActivity.name).slice(0, 3);

  if (!picks.length) {
    quickPicksList.innerHTML = "";
    return;
  }

  quickPicksList.innerHTML = `
    <div class="quick-picks-header">Quick picks</div>
    <div class="quick-picks-list">
      ${picks
        .map(
          (activity) => `
            <button type="button" class="quick-pick" data-activity-name="${activity.name}">
              ${activity.name}
              <small>${getThemeLabel(activity)}</small>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function getTagIcon(type, value) {
  const icons = {
    minutes: "⏱️",
    energy: {
      calm: "🌿",
      balanced: "⚖️",
      active: "⚡"
    },
    space: {
      indoors: "🏠",
      outdoors: "🌳",
      either: "✨"
    },
    theme: "🎯",
    age: "👶"
  };

  if (type === "energy") {
    return icons.energy[value] || "✨";
  }

  if (type === "space") {
    return icons.space[value] || "✨";
  }

  return icons[type] || "✨";
}

function renderList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function renderActivity(activity) {
  currentActivity = activity;
  areMoreIdeasVisible = false;
  activityCard.classList.remove("empty-state");
  activityCard.innerHTML = `
    <h3>${activity.name}</h3>
    <p class="activity-meta">${activity.blurb}</p>
    <div class="activity-tags">
      <span class="activity-tag"><span aria-hidden="true">${getTagIcon("minutes")}</span> ${activity.minutes} mins</span>
      <span class="activity-tag"><span aria-hidden="true">${getTagIcon("energy", activity.energy)}</span> ${activity.energy}</span>
      <span class="activity-tag"><span aria-hidden="true">${getTagIcon("space", activity.space)}</span> ${activity.space}</span>
      <span class="activity-tag"><span aria-hidden="true">${getTagIcon("theme")}</span> ${getThemeLabel(activity)}</span>
      <span class="activity-tag"><span aria-hidden="true">${getTagIcon("age")}</span> Ages ${activity.ages.join(", ")}</span>
    </div>
    <div class="activity-details">
      <section>
        <h4>Setup</h4>
        <ul>${renderList(activity.setup)}</ul>
      </section>
      <section>
        <h4>Steps</h4>
        <ul>${renderList(activity.steps)}</ul>
      </section>
      <section>
        <h4>Safety note</h4>
        <ul>${renderList(activity.safety)}</ul>
      </section>
    </div>
    <div class="activity-actions">
      <button type="button" class="favorite-button" data-favorite-name="${activity.name}">Favorite idea</button>
    </div>
  `;
  renderMoreIdeas();
  renderQuickPicks();
}

function renderEmpty(message) {
  activityCard.classList.add("empty-state");
  activityCard.innerHTML = `<p class="empty-copy">${message}</p>`;
  quickPicksList.innerHTML = "";
}

function getFilters() {
  return {
    age: document.querySelector("#age").value,
    energy: document.querySelector("#energy").value,
    time: document.querySelector("#time").value,
    space: document.querySelector("#space").value
  };
}

function showActivity(filters) {
  const matches = getMatchingActivities(filters);
  const activity = pickActivity(filters);

  if (!activity) {
    resultStatus.textContent = "No exact match for those filters.";
    renderEmpty("Try changing one filter to widen the options.");
    currentMatches = [];
    showMoreButton.hidden = true;
    moreIdeasList.innerHTML = "";
    return;
  }

  currentMatches = matches;
  resultStatus.textContent = "Here is one simple activity to try.";
  renderActivity(activity);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showActivity(getFilters());
});

surpriseButton.addEventListener("click", () => {
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];
  currentMatches = [randomActivity];
  resultStatus.textContent = "Here is a random activity from the full list.";
  renderActivity(randomActivity);
});

showMoreButton.addEventListener("click", () => {
  if (!currentActivity || !currentMatches.length) {
    return;
  }

  areMoreIdeasVisible = !areMoreIdeasVisible;
  renderMoreIdeas();
});

activityCard.addEventListener("click", (event) => {
  const favoriteButton = event.target.closest(".favorite-button");
  if (!favoriteButton) {
    return;
  }

  const activityName = favoriteButton.dataset.favoriteName;
  addFavorite(activityName);
  resultStatus.textContent = `${activityName} was added to your favorites.`;
});

favoritesList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".remove-favorite");
  if (!removeButton) {
    return;
  }

  removeFavorite(Number(removeButton.dataset.index));
});

moreIdeasList.addEventListener("click", (event) => {
  const ideaButton = event.target.closest(".more-idea-item");
  if (!ideaButton) {
    return;
  }

  const nextActivity = currentMatches.find((activity) => activity.name === ideaButton.dataset.activityName);
  if (nextActivity) {
    areMoreIdeasVisible = false;
    resultStatus.textContent = "Here is another matching idea.";
    renderActivity(nextActivity);
  }
});

quickPicksList.addEventListener("click", (event) => {
  const pickButton = event.target.closest(".quick-pick");
  if (!pickButton) {
    return;
  }

  const nextActivity = currentMatches.find((activity) => activity.name === pickButton.dataset.activityName);
  if (nextActivity) {
    resultStatus.textContent = "Here is another quick pick for today.";
    renderActivity(nextActivity);
  }
});

renderFavorites();
showMoreButton.hidden = true;