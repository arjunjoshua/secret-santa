import { writeFileSync } from 'fs';

// Define player names grouped by families
const families = [
    ["janet", "shashi", "naomi", "karan", "arjun",], // Family 1
    ["sujit", "shirin", "nikhita", "nitin", "cara"], // Family 2
    ["dottie", "shailu", "naina", "ronak", "leon", "suman"], // Family 3
    ["guddi", "shubha"], // Family 4
    ["praveen", "surekha", "bhavik", "ankitha"], // Family 5
    ["joshi", "muna", "noah", "leah"], // Family 6
];

// Flatten families into a single list and track family membership
let players = [];
const familyLookup = {};

families.forEach((family, familyIndex) => {
    family.forEach((member) => {
        players.push(member);
        familyLookup[member] = familyIndex; // Map each member to their family
    });
});

// Helper to shuffle an array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// Create Secret Santa list
const secretSantaList = {};
const receivers = [...players]; // Separate pool for receivers

shuffleArray(receivers); // Shuffle to ensure randomness

players.forEach((giver) => {
    // Filter receivers to exclude the giver's family
    const validReceivers = receivers.filter(
        (receiver) => familyLookup[receiver] !== familyLookup[giver]
    );

    if (validReceivers.length === 0) {
        throw new Error("No valid assignment found. Check family sizes.");
    }

    // Assign the first valid receiver
    const assigned = validReceivers[0];
    secretSantaList[giver] = assigned;

    // Remove the assigned receiver from the pool
    receivers.splice(receivers.indexOf(assigned), 1);
});

// Write the Secret Santa list to a JSON file
writeFileSync('secret_santa_list.json', JSON.stringify(secretSantaList, null, 2));

console.log("Secret Santa list generated successfully!");

