// Navbar background handling
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll > 100) {
            $(".gameflix-navbar").css("background", "#000");
        } else {
            $(".gameflix-navbar").css("background", "transparent");
        }
    })
});

const games = [
    // BF1 | ID = 0
    {
        background: "images/backgrounds/battlefield_1.jpeg",
        boxArt: "images/box_arts/BA_battlefield_1.jpg",
        title: "Battlefield 1",
        description: "Battlefield 1 is a first-person shooter set during World " +
        "War I, offering large-scale multiplayer battles and a gripping " +
        "single-player campaign. It emphasizes teamwork, historical weaponry, " +
        "and dynamic environments. The game is known for its immersive " +
        "depiction of trench warfare and vehicle combat.",
    },
    // BF2142 | ID = 1
    {
        background: "images/backgrounds/bf2142.jpg",
        boxArt: "images/box_arts/BA_bf2142.jpg",
        title: "Battlefield 2142",
        description: "Set in a future ice age, Battlefield 2142 is a sci-fi " +
        "shooter that pits players against each other in futuristic military " +
        "combat. It introduced Titans—massive airships—and class-based warfare " +
        "with advanced technology. The game blends traditional Battlefield " +
        "mechanics with futuristic elements.",
    },
    // BFBC2 | ID = 2
    {
        background: "images/backgrounds/bfbc2.jpg",
        boxArt: "images/box_arts/BA_bfbc2.jpg",
        title: "Battlefield: Bad Company 2",
        description: "Bad Company 2 follows a rogue squad of soldiers in a " +
        "story-driven campaign filled with action and humor. It features " +
        "destructible environments and strategic multiplayer modes. The game " +
        "was praised for its engaging characters and intense firefights.",
    },
    // BOTW | ID = 3
    {
        background: "images/backgrounds/botw.jpg",
        boxArt: "images/box_arts/BA_botw.jpg",
        title: "The Legend of Zelda: Breath of the Wild",
        description: "Breath of the Wild is an open-world adventure game where " + 
        "players control Link in a vast, beautifully rendered Hyrule. It " + 
        "emphasizes exploration, physics-based puzzles, and survival mechanics. " + 
        "The freedom it offers set a new standard for open-world design.",
    },
    // EWJ | ID = 4
    {
        background: "images/backgrounds/ewj.jpg",
        boxArt: "images/box_arts/BA_ewj.jpg",
        title: "Earthworm Jim",
        description: "Earthworm Jim is a quirky side-scrolling platformer " +
        "starring an earthworm in a robotic suit. Known for its bizarre humor " +
        "and creative levels, it mixes action and comedy. The game became a " +
        "cult classic for its unique style and tough challenges.",
    },
    // GoW PS4 | ID = 5
    {
        background: "images/backgrounds/god_of_war.jpeg",
        boxArt: "images/box_arts/BA_god_of_war.jpg",
        title: "God of War (PS4)",
        description: "In this reimagining of the franchise, Kratos embarks on " +
        "a deeply personal journey with his son Atreus through Norse mythology. " +
        "The game blends brutal combat with emotional storytelling. It’s " +
        "acclaimed for its cinematic presentation and character development.",
    },
    // GTA IV | ID = 6
    {
        background: "images/backgrounds/grand_theft_auto_IV.jpg",
        boxArt: "images/box_arts/BA_grand_theft_auto_IV.jpg",
        title: "Grand Theft Auto IV",
        description: "GTA IV follows Niko Bellic, an Eastern European immigrant " +
        "navigating the crime-ridden streets of Liberty City. The game offers a " +
        "dark, realistic tone with strong storytelling and open-world gameplay. " +
        "It was praised for its depth, physics, and mature narrative.",
    },
    // GTA V | ID = 7
    {
        background: "images/backgrounds/grand_theft_auto_V.jpg",
        boxArt: "images/box_arts/BA_grand_theft_auto_V.jpg",
        title: "Grand Theft Auto V",
        description: "GTA V features three protagonists and a massive open world " +
        "filled with missions, activities, and satire. Players can switch " +
        "between characters as they unravel an intertwining story. Its online " +
        "component remains hugely popular for its persistent updates and chaos.",
    },
    // GTA SA | ID = 8
    {
        background: "images/backgrounds/gta_sa.jpg",
        boxArt: "images/box_arts/BA_gta_sa.jpg",
        title: "Grand Theft Auto: San Andreas",
        description: "San Andreas puts players in the shoes of CJ as he returns " +
        "home to Los Santos to save his family and gang. The game spans three " +
        "cities and includes RPG elements, vehicles, and tons of side activities. " +
        "It’s one of the most iconic and expansive entries in the GTA series.",
    },
    // LM3 | ID = 9
    {
        background: "images/backgrounds/luigis_mansion_3.jpeg",
        boxArt: "images/box_arts/BA_luigi_mansion_3.jpg",
        title: "Luigi’s Mansion 3",
        description: "Luigi explores a haunted hotel to rescue his friends, " +
        "solving puzzles and catching ghosts with his Poltergust vacuum. The " +
        "game features charming visuals, clever level design, and humorous " +
        "scares. It’s a standout adventure for all ages on the Nintendo Switch.",
    },
    // RDR | ID = 10
    {
        background: "images/backgrounds/red_dead_redemption.jpg",
        boxArt: "images/box_arts/BA_red_dead_redemption.jpg",
        title: "Red Dead Redemption",
        description: "Set in the dying days of the Wild West, Red Dead Redemption " +
        "follows former outlaw John Marston seeking redemption. It blends " +
        "open-world freedom with a compelling narrative and gun-slinging action. " +
        "The game is lauded for its emotional depth and stunning world.",
    },
    // SotD | ID = 11
    {
        background: "images/backgrounds/sotd.png",
        boxArt: "images/box_arts/BA_sotd.png",
        title: "Shadows of the Damned",
        description: "A horror-action game with punk rock attitude, it follows " +
        "demon hunter Garcia Hotspur through the underworld to save his " +
        "girlfriend. It mixes humor, grotesque visuals, and over-the-top gunplay. " +
        "Created by legendary Japanese developer Suda51, it’s a wild and weird ride.",
    },
    // SMB | ID = 12
    {
        background: "images/backgrounds/super_mario_bros.jpg",
        boxArt: "images/box_arts/BA_super_mario_bros.jpg",
        title: "Super Mario Bros.",
        description: "Super Mario Bros. revolutionized gaming as players guided " +
        "Mario through side-scrolling levels to rescue Princess Peach. Its tight " +
        "controls, catchy music, and platforming perfection made it a legend. " +
        "It's considered one of the most influential games of all time.",
    },
    // Oblivion | ID = 13
    {
        background: "images/backgrounds/tes_iv_oblivion.jpeg",
        boxArt: "images/box_arts/BA_tes_IV_Oblivion.jpg",
        title: "The Elder Scrolls IV: Oblivion",
        description: "Oblivion offers a massive fantasy world filled with quests, " +
        "dungeons, and freedom of choice. Players take on the role of a hero " +
        "trying to stop a demonic invasion. Its radiant AI and modding community " +
        "helped it stay beloved for years.",
    },
    // Order | ID = 14
    {
        background: "images/backgrounds/the_order_1886.jpg",
        boxArt: "images/box_arts/BA_the_order_1886.jpg",
        title: "The Order: 1886",
        description: "A cinematic action game set in an alternate Victorian " +
        "London where knights battle supernatural creatures with steampunk " +
        "weapons. Known for its stunning visuals and film-like presentation. " +
        "The gameplay is linear but rich in atmosphere.",
    },
    // Goose | ID = 15
    {
        background: "images/backgrounds/untitled_goose_game.png",
        boxArt: "images/box_arts/BA_untitled_goose_game.jpg",
        title: "Untitled Goose Game",
        description: "You play as a mischievous goose causing chaos in a " +
        "peaceful village. The game combines humor, stealth, and light puzzles " +
        "as you complete a to-do list of pranks. Its simple design and charming " +
        "style made it a surprise hit.",
    }
];

let randomGame = Math.floor(Math.random() * games.length);

$(document).ready(function() {
    const firstGame = games[randomGame];
    $("#background").attr("src", firstGame.background);
    $("#main-box-art").attr("src", firstGame.boxArt);
    $("#game-title").text(firstGame.title);
    $("#game-description").text(firstGame.description);

    // When a carousel item (box art) is clicked
    $(".card").click(function () {
        const gameId = $(this).data("game-id");
        const game = games[gameId];

        $("#background").attr("src", game.background);
        $("#main-box-art").attr("src", game.boxArt);
        $("#game-title").text(game.title);
        $("#game-description").text(game.description);
    });
});
