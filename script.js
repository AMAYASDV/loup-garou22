// Variables globales
let numPlayers;
let roles = [];
let currentRoleIndex = 0;

// Commencer le jeu
document.getElementById("startGame").addEventListener("click", () => {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
});

// Passer à l'étape 2 : Choisir les rôles
document.getElementById("nextToRoles").addEventListener("click", () => {
    numPlayers = parseInt(document.getElementById("numPlayers").value);

    if (numPlayers >= 3) {
        document.getElementById("step-1").classList.add("hidden");
        document.getElementById("step-2").classList.remove("hidden");
    } else {
        alert("Veuillez entrer au moins 3 joueurs.");
    }
});

// Distribuer les rôles aux joueurs
document.getElementById("distributeRoles").addEventListener("click", () => {
    roles = [];
    const rolesInputs = [
        { id: "villagers", label: "Villageois" },
        { id: "werewolves", label: "Loup-Garou" },
        { id: "seer", label: "Voyante" },
        { id: "witch", label: "Sorcière" },
        { id: "hunter", label: "Chasseur" },
        { id: "cupid", label: "Cupidon" },
        { id: "littleGirl", label: "Petite Fille" },
        { id: "thief", label: "Voleur" },
        { id: "scapegoat", label: "Bouc émissaire" },
        { id: "elder", label: "Ancien" },
        { id: "rescuer", label: "Salvateur" },
        { id: "bigBadWolf", label: "Grand Méchant Loup" },
        { id: "whiteWerewolf", label: "Loup-Garou Blanc" },
        { id: "wildChild", label: "Enfant Sauvage" },
        { id: "fox", label: "Renard" },
        { id: "piper", label: "Joueur de Flûte" },
        { id: "angel", label: "L'Ange" },
        { id: "bearTamer", label: "Montreur d'Ours" },
        { id: "crow", label: "Le Corbeau" },
        { id: "villageIdiot", label: "L'Idiot du Village" },
        { id: "blackWolf", label: "Loup Noir" },
        { id: "blueWolf", label: "Loup Bleu" },
        { id: "alpha", label: "Alpha" },
        { id: "corpse", label: "Cadavre" }
    ];

    // Récupérer les rôles et leur quantité
    rolesInputs.forEach(role => {
        const count = parseInt(document.getElementById(role.id).value);
        for (let i = 0; i < count; i++) {
            roles.push(role.label);
        }
    });

    if (roles.length < numPlayers) {
        alert("Le nombre total de rôles doit être égal au nombre de joueurs !");
        return;
    }

    // Mélanger les rôles
    roles = shuffleArray(roles);

    // Passer à l'étape 3
    document.getElementById("step-2").classList.add("hidden");
    document.getElementById("step-3").classList.remove("hidden");
    currentRoleIndex = 0;
    showRole();
});

// Afficher le rôle actuel
function showRole() {
    if (currentRoleIndex < roles.length) {
        document.getElementById("roleCard").textContent = roles[currentRoleIndex];
    } else {
        document.getElementById("roleCard").textContent = "Tous les rôles ont été distribués.";
        document.getElementById("nextRole").classList.add("hidden");
        document.getElementById("restart").classList.remove("hidden");
    }
}

// Passer au rôle suivant
document.getElementById("nextRole").addEventListener("click", () => {
    currentRoleIndex++;
    showRole();
});

// Redémarrer le jeu
document.getElementById("restart").addEventListener("click", () => {
    document.getElementById("step-1").classList.remove("hidden");
    document.getElementById("step-2").classList.add("hidden");
    document.getElementById("step-3").classList.add("hidden");
    document.getElementById("roleCard").textContent = "";
    document.getElementById("numPlayers").value = "";
    roles = [];
    currentRoleIndex = 0;
    document.getElementById("restart").classList.add("hidden");
    document.getElementById("nextRole").classList.remove("hidden");
});

// Fonction pour mélanger les rôles
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
