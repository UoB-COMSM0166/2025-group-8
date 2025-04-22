# 2025-group-8
2025 COMSM0166 group 8

## Table of Contents
- [Our Game](#our-game)
- [Our Group](#our-group)
- [Our Progress](#our-progress)
- [Inspiration Mining](#inspiration-mining)
- [Two Prototype Ideas](#two-prototype-ideas)
- [Final Ideas](#final-ideas)
- [Stakeholder List](#stakeholder-list)
- [Epics & User Stories](#epics--user-stories)
- [Reflection](#reflection)
- [Think-Aloud Usability Test Report](#think-aloud-usability-test-report)
- [Heuristic Evaluation Report](#heuristic-evaluation-report)
- [Quantitative Analysis Report](#quantitative-analysis-report)
- [Three New Challenges](#three-new-challenges)
- [Sustainability Impact Assessment](#sustainability-impact-assessment)
- [Green Foundation Implementation Patterns Analysis](#green-foundation-implementation-patterns-analysis)
- [Project Report](#project-report)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Design](#design)
  - [Implementation](#implementation-需要修改)
  - [Evaluation](#evaluation)
  - [Process](#process)
  - [Sustainability, Ethics, and Accessibility](#sustainability-ethics-and-accessibility)
  - [Conclusion](#conclusion)
- [Contribution](#contribution)

---



## Our Game

CLICK TO PLAY[![Iron Rebellion](https://github.com/UoB-COMSM0166/2025-group-8/blob/main/pictures/game_banner.png?raw=true)](https://uob-comsm0166.github.io/2025-group-8/)


Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)


<a href="https://drive.google.com/file/d/14OzUzU3QxR_EjTLvqBnGxJBfApoTYgf7/view?usp=sharing">
  <img src="https://github.com/kkkkkaneeeee/kkkkkaneeeee/blob/main/Screenshot%202025-04-22%20at%2008.43.06.png" alt="Watch the video" width="100%" />
</a>

## Our Group

![team pic](./pictures/group_pic_new.png)

| | Name | Email | Role | Github Account|
|:---|:---|:---|:---| :---|
| 1 | Zewen Liang | je24595@bristol.ac.uk | Developer | liangzw0126 |
| 2 | Yunhao Zhou | bx24770@bristol.ac.uk | Visual Designer | YonasZhou |
| 3 | Yuying Zhang | bc24261@bristol.ac.uk | Copywriter | X65060782 |
| 4 | Zhi Zhao | ug23003@bristol.ac.uk | Developer | ZZ1975 |
| 5 | Kaijie Xu | hb24857@bristol.ac.uk | Project Manager | kkkkkaneeeee |



## Our Progress

Kanban Board : [![KANBAN](https://github.com/kkkkkaneeeee/kkkkkaneeeee/blob/main/Screenshot%202025-04-22%20at%2013.45.02.png)](https://kanexu99-1738582319219.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiNjQxNGNhZDU2NmRmNGNjNTk0YWU3ZGY4NDMzYWE4OTgiLCJwIjoiaiJ9)

## Inspiration Mining

| Game Name                  | Game Type                          | Mechanics                                                                                                                                                                                                                     | Reference |
|---------------------------|------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| Super Mario               | Role-playing, Adventure, 2D        | Jump on platforms/enemies, avoid attacks, move right, single-exit levels, time limit.                                                                                                                                        | [Link](https://en.wikipedia.org/wiki/Super_Mario) |
| Metal Slug                | Run and gun                        | Movement and cover generate Dodge Points to reduce/cancel damage.                                                                                                                                                            | [Link](https://en.wikipedia.org/wiki/Metal_Slug) |
| Stardew Valley            | Farming Simulation / RPG           | Manage farm, crops, animals, fishing, mining, crafting, combat, relationships.                                                                                                                                               | [Link](https://en.wikipedia.org/wiki/Stardew_Valley) |
| This War of Mine          | Survival / Strategy                | Manage survivors, scavenge, craft, make moral choices, deal with hunger/illness/threats.                                                                                                                                     | [Link](https://en.wikipedia.org/wiki/This_War_of_Mine) |
| Ori and the Will of Wisps| Action-Adventure / Platformer      | 2D exploration, puzzles, combat, emotional story, control Ori.                                                                                                                                                               | [Link](https://en.wikipedia.org/wiki/Ori_and_the_Will_of_the_Wisps) |
| Gorogoa                  | Puzzle                             | Rearrange and interact with illustrated tiles to solve puzzles.                                                                                                                                                              | [Link](https://en.wikipedia.org/wiki/Gorogoa) |
| Don't Starve              | Survival / Adventure               | Collect resources, craft, survive monsters/weather/starvation in a sandbox.                                                                                                                                                  | [Link](https://en.wikipedia.org/wiki/Don%27t_Starve) |
| Dead Cells                | Rogue-like / Metroidvania          | Procedural levels, fast combat, permanent death, upgrades, non-linear exploration.                                                                                                                                           | [Link](https://en.wikipedia.org/wiki/Dead_Cells) |
| Brotato                   | Roguelite / Top-Down Shooter       | Control potato with up to 6 weapons to defeat enemy waves.                                                                                                                                                                   | [Link](https://en.wikipedia.org/wiki/Brotato) |
| Terraria                  | Sandbox / Adventure                | 2D world exploration, crafting, combat, biomes, build structures.                                                                                                                                                            | [Link](https://en.wikipedia.org/wiki/Terraria) |
| Cuphead                   | Run-and-Gun / Platformer           | Hand-drawn art, boss fights, challenging platforming with precise timing.                                                                                                                                                    | [Link](https://en.wikipedia.org/wiki/Cuphead) |
| Oxygen Not Included       | Colony Management / Simulation     | Manage duplicants, oxygen, and resources in a space colony.                                                                                                                                                                  | [Link](https://en.wikipedia.org/wiki/Oxygen_Not_Included) |
| Dave the Diver            | Adventure / Management             | Explore underwater, fish, run sushi bar, solve mysteries.                                                                                                                                                                    | [Link](https://en.wikipedia.org/wiki/Dave_the_Diver) |
| Batman: Arkham Series     | Action / Adventure                 | Control Batman, open-world exploration, stealth, combat, detective skills.                                                                                                                                                   | [Link](https://en.wikipedia.org/wiki/Batman:_Arkham) |
| Frostpunk                | City-Building / Survival            | Manage a city in a frozen world, tough moral/resource decisions.                                                                                                                                                             | [Link](https://en.wikipedia.org/wiki/Frostpunk) |
| Celeste                   | Platformer                         | Precision jumping, air-dashing, climbing; narrative on mental health and perseverance.                                                                                                                                       | [Link](https://store.steampowered.com/app/504230/Celeste/) |
| GRIS                      | Adventure, Platformer              | Exploration and light puzzles with emotional narrative and evolving abilities.                                                                                                                                               | [Link](https://store.steampowered.com/app/683320/GRIS/) |
| Slay the Spire            | Roguelike, Deck-Building           | Build a card deck to defeat enemies while climbing a spire, high replayability.                                                                                                                                              | [Link](https://store.steampowered.com/app/646570/Slay_the_Spire/) |
| Factorio                  | Real-time strategy, Simulation     | Build automated factories, manage logistics/defenses, optimize production.                                                                                                                                                   | [Link](https://store.steampowered.com/app/427520/Factorio/) |
| Sword and Fairy           | Role-Playing Game (RPG)             | Turn-based combat, puzzle-solving, emotional storyline rooted in Chinese folklore.                                                                                                                                           | [Link](https://store.steampowered.com/app/1546570/_/) |
| Winter Dodge              | Skill > One-button                 | Auto-skiing game, change direction, get close to trees for score bonuses.                                                                                                                                                    | [Link](https://www.coolmathgames.com/0-winter-dodge) |
| Suika Watermelon Game     | Strategy > High Score Games        | Merge fruits for higher scores, limited pushes, avoid box overflow.                                                                                                                                                          | [Link](https://en.wikipedia.org/wiki/Suika_Game) |

## Two Prototype Ideas

- **Super Mario:** 

Super Mario is a hallmark in platform game design, featuring meticulously crafted levels that progressively challenge players' skills. The game excels in tight, responsive controls and a physics engine that enhances predictable gameplay. Central to its appeal are the power-up system and varied enemy interactions, which diversify strategies and increase engagement. Super Mario also integrates puzzle elements and cooperative multiplayer, expanding its gameplay beyond traditional platforming to include adventure and teamwork dynamics.

[![Super Mario](https://raw.githubusercontent.com/kkkkkaneeeee/kkkkkaneeeee/ad0b8ad5130f1242c89f56301ca04ff055c8c7e1/Screenshot%202025-02-10%20at%2000.48.00.png)](https://drive.google.com/file/d/1dilfk9MANqt7ZF4hKirheLW_5RDKaMW-/view?usp=drive_link)



- **Merge Big Watermelon:** 
Merge Big Watermelon is a casual puzzle game known for its simple and engaging mechanics. Players merge similar items on a grid to create larger ones, aiming to form the biggest watermelon. The game features a minimalistic, colorful design and is developed with technologies that ensure it works across multiple platforms. It's easy to play but offers increasing challenges

[![Merge Big Watermelon](./pictures/Merge%20Big%20Watermelon.png)](https://drive.google.com/file/d/10CyhntnRV76U0o-qCPSqY2Diu1KsxhMl/view?usp=drive_link)



## Final  Ideas
[![alt text](pictures/final_idea_main_characters.png)](https://drive.google.com/file/d/1-vzK08G26HvWcuNe7zErzPBMIJYnoJdl/view?usp=sharing)



## Stakeholder list

- **Players:** End users who will interact with and enjoy the game.
- **Game Developers:** Team members responsible for game design, coding, and testing.
- **Graphic Designers:** Individuals tasked with creating the visual elements of the game.
- **Sound Engineers:** Professionals creating and integrating sound effects and music.
- **Marketing Team:** Personnel focused on promoting the game to increase visibility and engagement.
- **Game Reviewers and Bloggers:** Key influencers who will help shape public perception of the game.
- **Lecturers and TAs:** Academic supervisors and teaching assistants who provide guidance, monitor project progress, and ensure the game development aligns with academic standards and learning outcomes.

## Epics & User Stories
| Stakeholder            | Epic                                        | User Story                                  | Acceptance Criteria |
|------------------------|---------------------------------------------|---------------------------------------------|---------------------|
| **Players**            | **Player Experience Enhancement**           | As a player, I want the game to offer at least three difficulty settings: Easy, Medium, and Hard, so that I can enjoy the game at a pace suitable for my skill level. | Given the game's settings menu, when I select a difficulty setting, then the game's speed and obstacle density should adjust accordingly. |
| **Players**            | **Player Experience Enhancement**           | As a player, I want a system of achievements and rewards for completing levels without failing, collecting all items, or achieving high scores, so that I feel recognized for my accomplishments and stay engaged with the game. | Given I meet specific game milestones, when these conditions are met, then rewards such as new character skins or special abilities should be unlocked. |
| **Game Developers**    | **Developer Efficiency and Collaboration**  | As a game developer, I want to use a game development platform that integrates with popular version control systems and supports automated testing tools, so that I can implement features quickly and with fewer bugs. | Given the development platform, when I deploy new code, then it should seamlessly integrate with version control and trigger automated tests. |
| **Game Developers**    | **Developer Efficiency and Collaboration**  | As a game developer, I want tools that support real-time collaboration, allowing multiple users to edit the same files without conflicts, so that the team can work together seamlessly regardless of location. | Given a collaborative coding session, when multiple developers make changes, then all changes should be visible in real-time without conflicts. |
| **Lecturers and TAs** | **Ensuring Academic and Technical Standards** | As a lecturer or TA, I want access to project updates and documentation so that I can provide timely feedback and ensure the game development process meets academic standards and learning objectives. | Given regular project updates, when I review the documentation and prototype builds, then I should be able to assess alignment with course goals and provide constructive advice.
| **Lecturers and TAs** | **Supporting Student Learning and Development** | As a lecturer or TA, I want students to demonstrate iterative improvements based on feedback, so that I can assess their ability to adapt, reflect, and apply good software engineering practices. | Given feedback sessions, when I observe successive project iterations, then I should see visible improvements and proper incorporation of suggested changes.
| **Marketing Team**     | **Effective Player Engagement and Marketing** | As a marketing team member, I want to conduct targeted marketing campaigns using player data to segment audiences effectively, so that we can reach the right audience and maximize engagement. | Given player demographic and preference data, when I segment this data for a campaign, then the marketing tools should allow for targeted promotions. |
| **Marketing Team**     | **Effective Player Engagement and Marketing** | As a marketing team member, I want the game to have social media integration, allowing players to connect their accounts and share achievements, so that gameplay achievements can organically drive traffic and downloads. | Given the social media feature, when a player achieves a milestone and chooses to share it, then the share should include a link to the game’s download page. |
| **Game Reviewers and Bloggers** | **Enhancing Game Visibility and Credibility** | As a game reviewer or blogger, I want early access to game builds and detailed release notes at least one month before the official launch, so that I can review and provide informed feedback, helping to build anticipation and inform potential players. | Given early access, when I review the game and communicate feedback, then it should be considered for improvements before launch. |
| **Game Reviewers and Bloggers** | **Enhancing Game Visibility and Credibility** | As a game reviewer or blogger, I want exclusive access to interviews with the development team and behind-the-scenes content, so that I can create engaging content that provides deeper insights into the game development process. | Given access to the development team, when I conduct interviews or receive content, then it should be detailed and suitable for direct embedding in posts. |





## Reflection

During the development of our platform jumping game, our team deepened our understanding of agile development practices, focusing on epics, user stories, and acceptance criteria.
Epics helped us frame the major goals of our project, dividing our focus between engaging gameplay and robust technical performance. This division ensured a balanced approach to both user experience and system functionality.
User stories enabled us to see the game through the players' eyes, driving us to prioritize features that directly enhance user engagement and satisfaction, such as customizable characters and multilingual support. Each story clearly outlined specific user needs, guiding our design and development efforts.
Acceptance criteria were essential in defining the specific conditions for completing user stories, facilitating precise testing and quality control. This specificity helped prevent scope creep, keeping our team aligned on the definition of feature completion.
The context of creating an accessible and enjoyable game influenced every aspect of our project, from planning to implementation, ensuring we addressed the diverse needs of our player base and optimized the game for various devices.
This experience not only improved our product's alignment with user expectations but also refined our project management skills, emphasizing the importance of clear, user-focused, and detailed planning in software development.

## Think-Aloud Usability Test Report

**Game:** *MechDog vs. Drone Platformer*  
**Participant:** 1 student (adjacent group)

### Tasks
- Complete Level 1 from the main menu.
- Attempt to return to the main menu mid-level.

---

### Key Observations

- **Collision Detection Issues:**  
  Participant encountered "invisible walls" near platforms, causing confusion and frustration.  
  > "Why am I bouncing off nothing here?"

- **Missing Return Functionality:**  
  No option to exit mid-level; participant tried ESC/UI buttons unsuccessfully.  
  > "Do I have to close the game?"

- **Oversized Obstacles:**  
  Large obstacles trapped the player, forcing respawns.  
  > "This rock is way too big—I'm stuck!"

- **Repetitive Level Design:**  
  Levels 1 and 2 felt identical except for backgrounds, with no mechanical or enemy variation.  
  > "Where's the challenge?"

- **Unlimited Respawns:**  
  Infinite retries reduced stakes; no game-over system observed.  
  > "No stakes—boring!"

- **Predictable Enemy AI:**  
  Drones followed simple, easily avoidable paths.  
  > "Too easy to dodge."

---

### Critical Issues

- **Urgent Fixes:**
  - Broken collision detection.
  - Lack of pause/return menu disrupts core usability.

- **Design Weaknesses:**
  - Repetitive levels.
  - Oversized obstacles.
  - Trivial enemy behavior lowers engagement.

- **Missing Systems:**
  - No difficulty scaling.
  - No fail states, harming replayability.

---

### Recommendations

**Priority Fixes:**
- Repair collision detection.
- Add a pause/return menu for mid-level navigation.

**Gameplay Enhancements:**
- Resize obstacles to improve movement.
- Add dynamic elements (e.g., moving platforms).

**Enemy and Difficulty Improvements:**
- Introduce tiered difficulty settings.
- Develop unique enemy behaviors (e.g., ambushes, patrol patterns).

**Progression Systems:**
- Implement a game-over state and limited lives.
- Differentiate levels with new mechanics (e.g., environmental hazards, boss fights).

---

### Next Steps

- Address collision and UI issues as the highest priority.
- Expand level complexity and improve enemy AI behavior based on user feedback.

---

## Heuristic Evaluation Report: MechDog vs. Drone Platformer

Summary
A heuristic evaluation was conducted by an external observer to identify usability issues in the MechDog vs. Drone platformer game. Key findings include critical violations of Nielsen’s usability heuristics, particularly in collision detection, navigation controls, and level design consistency. Below is the prioritized list of issues and recommendations.

Evaluation Table
| Interface          | Issue                                                                 | Heuristic(s)                                | Frequency (0-4) | Impact (0-4) | Persistence (0-4) | Severity (F+I-P)/3 |
|--------------------|-----------------------------------------------------------------------|---------------------------------------------|------------------|---------------|--------------------|--------------------|
| **Gameplay**       | Broken collision detection ("invisible walls" near platforms).        | Visibility of System Status                 | 4                | 4             | 4                  | 1.33               |
| **UI Navigation**  | No return button to exit levels; players cannot return to main menu.  | User Control and Freedom                    | 3                | 4             | 3                  | 1.33               |
| **Obstacle Design**| Oversized obstacles trap players, forcing respawns.                   | Aesthetic and Minimalist Design             | 3                | 3             | 3                  | 1.00               |
| **Level Design**   | Identical mechanics across 4 levels; only background differences.     | Consistency and Standards                   | 4                | 3             | 4                  | 1.00               |
| **Enemy AI**       | Predictable drone behavior; no difficulty progression.                | Flexibility and Efficiency of Use           | 3                | 3             | 3                  | 1.00               |
| **Game Progression**| No game-over state; unlimited respawns reduce challenge.              | User Control and Freedom, Error Prevention  | 3                | 2             | 4                  | 0.33               |

Key Findings
Critical Issues (Severity ≥ 1.33):
Collision detection failures disrupt core gameplay.
Missing return functionality frustrates navigation.
High-Impact Design Flaws (Severity ~1.00):
Oversized obstacles and repetitive level design lower engagement.
Simplistic enemy AI lacks challenge.
Moderate Issues (Severity ≤ 0.33):
Unlimited respawns reduce stakes but are less urgent.
Recommendations
Priority Fixes:
Fix collision detection to eliminate "invisible walls."
Add a pause/return menu for mid-level navigation.
Design Improvements:
Resize obstacles; introduce dynamic elements (e.g., moving platforms).
Differentiate levels with unique mechanics (e.g., traps, boss fights).
Long-Term Enhancements:
Implement difficulty tiers and smarter enemy AI (e.g., patrol patterns).
Add a game-over system with limited lives.
Next Steps: Address collision and UI issues first, then iterate on level complexity and enemy behavior.

## Quantitative analysis Report: Game Difficulty and Usability Assessment Objective

This comprehensive evaluation aimed to assess both the workload and usability experienced by users when playing our game at two different difficulty levels: L1 (easier) and L2 (harder). We utilized the NASA Task Load Index (TLX) to measure workload facets and the System Usability Scale (SUS) to evaluate system usability. This dual approach provides a holistic view of how different difficulty levels affect player interaction and satisfaction.

Methodology
The evaluations were conducted in a controlled setting with ten users. To mitigate learning effects, we employed a counterbalanced design where half of the users first played at difficulty level L1 and then L2, while the other half experienced the levels in reverse order. After playing each level, users completed the NASA TLX and SUS questionnaires. This method allowed us to capture both subjective workload and usability perceptions accurately.

Statistical Analysis
To determine the significance of the differences observed between the two difficulty levels, we conducted a Wilcoxon signed-rank test. This non-parametric test is suited for paired samples and was chosen due to its effectiveness in handling small sample sizes and non-normal data distributions.

Test Statistic: The Wilcoxon W value calculated was 9.
Comparison Threshold: With a sample size of 10 and an alpha value of 0.05, the critical value from statistical tables for the Wilcoxon test is 8.
NASA TLX Results
The NASA TLX scores highlighted significant differences in perceived workload:

Level L1 (Easier): Users reported lower workload scores with an average Mental Demand of 4.0, Physical Demand of 2.4, Temporal Demand of 4.0, Performance of 7.0, Effort of 5.9, and Frustration of 2.9.
Level L2 (Harder): This level showed a higher workload with averages of Mental Demand at 7.0, Physical Demand at 4.5, Temporal Demand at 6.9, Performance at 3.3, Effort at 8.9, and Frustration at 6.8.
SUS Results
The SUS scores also demonstrated variability in usability between the two difficulty levels:

Level L1 (Easier) had a favorable average SUS score of 68.8, indicating good usability aligned with user expectations.
Level L2 (Harder) recorded a lower average SUS score of 59.4, suggesting usability challenges, particularly in terms of system complexity and user confidence.
Discussion
The combined data from the NASA TLX and SUS indicate that while Level L1 offers an optimal balance of challenge and usability, Level L2, despite its appeal to more skilled players, may benefit from usability enhancements. The increased cognitive and physical demands at Level L2 appear to negatively impact both workload perceptions and usability ratings.

Statistical Conclusion
Since the Wilcoxon signed-rank test resulted in a W value of 9, which exceeds the critical value of 8, we cannot reject the null hypothesis. This implies there is no statistically significant difference in the SUS scores between the two difficulty levels at the 0.05 alpha level. This result suggests that while perceived differences in workload are noted, the overall impact on usability may not be statistically significant.

Conclusion
This evaluation underscores the need for careful calibration of game mechanics and user interfaces to ensure that both novice and experienced players find the game engaging yet manageable. Future development will focus on refining these aspects to enhance overall user experience and maintain high usability standards across all difficulty levels.



## Three New Challenges

### Technical Challenge 1: Advanced Collision Detection System

**Description:**  
Our game has encountered several issues with collision detection, where players face "invisible walls" or unexpected interactions with the environment, particularly near platforms. This not only disrupts gameplay but also detracts from the user experience.

**Solution:**  
Implement a more robust and precise collision detection system. This could involve using more refined physics engines or custom algorithms that better handle the dynamics of MechDog's movements and the drone interactions. Ensuring that collision responses are both visually and mechanically consistent will be crucial.

**Impact:**  
Enhancing collision detection will directly improve gameplay smoothness and player satisfaction, addressing one of the critical flaws identified in usability testing.

---

### Technical Challenge 2: Dynamic Difficulty Adjustment (DDA)

**Description:**  
Feedback indicates a need for varying difficulty levels to cater to different player skills. The current static difficulty setting does not accommodate all users, as evidenced by varying SUS and NASA TLX scores between difficulty levels.

**Solution:**  
Develop a dynamic difficulty adjustment system that responds to player performance in real-time. This system would analyze player success rates, adjust the frequency and speed of drones, and modify obstacle complexity based on ongoing gameplay performance.

**Impact:**  
DDA will help tailor the gameplay experience to individual players, potentially increasing retention and satisfaction across a broader range of skill levels. It also addresses the need for better challenge scaling in game levels.

---


### Technical Challenge 3: Cross-Platform Device Compatibility

**Description:**  
Ensuring that *Iron Rebellion* could run smoothly across different types of devices—including desktops, iPads, and smartphones—presented a significant technical challenge. Variations in screen sizes, input methods (keyboard vs. touchscreen), and processing power meant that the game needed to dynamically adapt its rendering, control schemes, and performance optimizations without compromising the user experience.

**Solution:**  
We designed a responsive system that automatically adjusts the game's layout and scaling based on device type and screen resolution. Input handling was abstracted to support both keyboard and touch interactions, ensuring that players could enjoy fluid controls regardless of platform. Additionally, we optimized asset loading and memory usage to maintain stable frame rates even on lower-end mobile devices.

**Impact:**  
Successfully implementing cross-platform compatibility made *Iron Rebellion* accessible to a broader audience, increasing its reach and usability. Players can now seamlessly enjoy the game whether they are using a computer, tablet, or smartphone, enhancing the inclusivity and flexibility of the gaming experience.

---



## Sustainability Impact Assessment 
Project Name: Iron Rebellion
Framework Used: Sustainability Awareness Framework (SusAF)

### Project Overview
Iron Rebellion is a 2D platform-jumping game designed to provide an engaging and straightforward gaming experience. It operates primarily as a single-player game, with levels structured to challenge the player’s reflexes and problem-solving skills. This game does not feature multiplayer capabilities, community interactions, or in-game purchases.

### Vision and Known Effects
Vision: To offer a classic gaming experience that challenges players through progressively difficult levels, combining retro aesthetics with modern gameplay mechanics. Known Sustainability Effects:

Positive: Minimal resource use due to digital-only distribution, reducing physical waste associated with packaging and hardware.

Negative: Potential energy consumption from extended play sessions, although less significant than more resource-intensive games.

### Detailed Sustainability Effects
Environmental Dimension:

Materials and Resources: Primarily digital distribution minimizes the use of physical materials and reduces waste.

Energy Consumption: Relatively low compared to more graphically intensive games; however, prolonged use can still contribute to energy use through player devices.

Social Dimension:

Social Interaction: Lacks built-in social features or community platforms, focusing solely on individual gameplay.

Health Impacts: Could potentially contribute to sedentary behavior if played excessively without breaks.

Economic Dimension:

Market Value: Provides economic value in its market segment by appealing to enthusiasts of retro and platform games.

Business Operations: Operates with a straightforward business model without recurrent revenue from the game post-purchase.

Technical Dimension:

Maintainability and Scalability: Requires less frequent updates and maintenance compared to complex multiplayer games, simplifying long-term technical support.

Development Efficiency: Utilizes established game development frameworks and tools, ensuring efficient production cycles and lower technical overhead.

### Synthesis: Threats, Opportunities, and Actions
Threats:

Environmental Impact: Continuous energy use during gameplay, although minor, is still relevant.

Health Concerns: Risk of promoting prolonged sedentary periods among players.

Opportunities:

Sustainable Practices: Opportunity to promote energy conservation tips within the game or on loading screens.

Health and Well-being: Can include features such as regular reminders to take breaks or promote physical activity.

Actions:

Promoting Energy Efficiency: Encourage players to use energy-efficient gaming devices or settings.

Encouraging Active Breaks: Implement reminders for players to take breaks and engage in physical activities during extended sessions.

### Conclusion
This sustainability impact assessment for Iron Rebellion identifies critical areas of impact with a focus on environmental and individual dimensions. The assessment guides the integration of sustainable practices into both game design and operational procedures. Moving forward, these insights will be used to enhance the game’s design and help mitigate any negative impacts associated with its use. This report will be included in the project documentation to inform stakeholders and guide future development decisions.


## Green Foundation Implementation Patterns Analysis
Our game code integrates several key sustainable coding practices aligned with Green Foundation Implementation patterns:

Lazy Loading of Offscreen Images: We have implemented a lazy-loading mechanism to defer the loading of images not immediately visible on the screen. This reduces unnecessary resource usage and improves page load performance, contributing to lower energy consumption.

Optimized Image Sizes: All game images have been resized and optimized to the appropriate dimensions. By compressing images without sacrificing quality, we ensure faster load times and reduced bandwidth usage, which minimizes the overall carbon footprint.

Removal of Unused CSS Definitions: We streamlined our codebase by removing unused CSS rules. This not only simplifies maintenance but also speeds up rendering times, leading to improved performance and reduced processing energy.

These implementations not only enhance user experience through improved performance but also contribute to sustainable development by lowering resource consumption and optimizing energy efficiency within our game.








## Project Report: *Iron Rebellion*

### Introduction

*Iron Rebellion* is a 2D platform-jumping game that revives the nostalgic appeal of classic platformers while introducing modern design principles to enhance gameplay experience. Designed as a narrative-driven adventure, the game blends quick reflex-based mechanics with puzzle-solving elements to engage players of all skill levels.

The visual design adopts a minimalist pixel-art style, maintaining simplicity while delivering deep gameplay. This approach ensures the game is accessible to both seasoned gamers and newcomers, capturing the spirit of retro gaming while offering modern features like adjustable difficulty and intelligent enemy AI.

What sets *Iron Rebellion* apart is its seamless integration of narrative, challenges, and progressive complexity across handcrafted levels. Players are not just jumping platforms—they are unraveling a story. This fusion enriches the game’s depth and makes each level a meaningful experience.

### Requirements

The foundation of *Iron Rebellion* was shaped through structured requirements engineering to prevent issues like feature creep and undefined scopes. We used collaborative tools like Miro and Google Docs to brainstorm and prioritize features that mattered most to players.

Two early concepts emerged: a fantasy puzzle platformer and a sci-fi adventure with mechanical hazards. The team voted for the sci-fi idea, which later became *Iron Rebellion*, offering room for creative design and modular gameplay.

We used user stories and use case diagrams to formalize player interactions—from starting the game and navigating menus to triggering switches and completing levels. For instance:

- "As a casual gamer, I want an easy mode so I can enjoy the game without frustration."
- "As a player, I want the game to auto-save my progress so I don’t lose my place."

Acceptance criteria ensured clarity in implementation. We also created paper prototypes and technical mini-demos to validate feasibility. Level design was tested with tile-based systems, and stakeholders—including lecturers and TAs—helped refine user-centric stories.

Our MVP included handcrafted levels, three difficulty settings, and basic AI—all designed with adaptability in mind.

### Design

To support modularity and future expansion, *Iron Rebellion* followed a loosely inspired Model-View-Controller (MVC) architecture. The **GameObject** superclass encapsulates common properties like position, velocity, and size, and is extended by interactive objects like **Player**, **EnemyDrone**, and **MovingPlatform**.

- **PlayerController** handles input and physics.
- **MapController** loads levels from text files and manages collision resolution.
- **GameStateManager** coordinates game modes, UI elements, and audio.

This architecture made the game easy to iterate and test. Visual aids, including sequence and state diagrams, helped clarify object interactions. Notable additions like **InteractionHandler** abstracted door-button logic for better reusability.

---

#### Sequence Diagram: Chapter Level Logic

![Sequence Diagram Chapter](./pictures/sequence_diagram_chapter.png)

---

We improved performance by introducing spatial partitioning in collision detection. Behavioral diagrams like the Player State Diagram ensured accurate transitions and reduced bugs like double jumps.

---

#### Sequence Diagram: Early Sketch

![Sequence Diagram Sketch](./pictures/sequence_diagram_sketch.png)

---

Overall, the evolving design documentation served as a living reference, keeping team members aligned during agile development sprints.

### Implementation

We implemented *Iron Rebellion* in layers, starting with a playable prototype. The **GameObject** base class unified behavior across interactive elements, with subclasses overriding specific logic.

The **MapController** dynamically generated levels using character-mapped text files, enabling rapid level design changes. Early movement bugs (e.g., infinite jumps, wall clipping) were resolved through refined velocity and jump logic in **PlayerController**.

Three main challenges shaped our process:

1. **Collision Detection**: Originally inefficient and buggy. Solved with bounding box logic and spatial filtering.
2. **Difficulty Scaling**: Implemented via a flexible map system and symbolic level files.
3. **Enemy AI**: Evolved from static paths to a state machine (Idle, Patrol, Chase) with offscreen optimization for performance.

Additional systems like switches and doors were implemented using decoupled trigger logic, making level puzzles more modular. We opted for handcrafted levels to maintain design quality.

These technical choices helped balance performance with gameplay quality, delivering a fluid and satisfying player experience.

### Evaluation

Our evaluation used a combination of qualitative and quantitative techniques to ensure usability and fun across difficulty levels.

#### Qualitative: Think-Aloud Usability Testing
We conducted think-aloud tests with eight players, revealing UI and collision issues. Fixes included adding pause/reset options and refining platform boundaries. Testers appreciated level clarity and responsive checkpoints.

#### Quantitative: NASA TLX Workload Analysis
Ten players rated difficulty variants of Level 1 using NASA TLX. Workload scores increased with difficulty as expected:

- Easy: Lower mental demand and frustration.
- Hard: Higher effort and time pressure, but manageable performance scores.

A Wilcoxon Signed-Rank test (p < 0.01) validated significant differences, confirming successful difficulty scaling.

#### Code Testing
We used both black-box playtesting and a dedicated [**white-box test suite**](./tests/whiteboxTests.js). Key systems tested included:

- Object collisions
- Spawn logic
- Enemy state transitions

Visual QA was handled through manual sprite checks and browser compatibility testing. Every major change was tested on GitHub Pages before deployment.

### Process

Agile workflows defined our production cycle. Roles were assigned based on strengths:

- Developers: Zewen & Zhi
- Designer: Yunhao
- Copywriter: Yuying
- Project Manager: Kaijie

We met in person and online via Microsoft Teams. Day-to-day collaboration was supported via WhatsApp, while **Jira** and **GitHub** tracked tasks and source control.

Key tools:

- **Miro**: Brainstorming, diagrams
- **Procreate & Photoshop**: Visual asset creation
- **Figma**: Interface prototyping
- **Premiere Pro**: Trailer editing
- **Microsoft Forms**: Survey collection

Pull requests were reviewed collaboratively. GitHub Discussions were used to log bugs and suggestions.

We learned to refine task estimates using story points and improved planning across sprints. The team regularly supported each other in testing, optimization, and content polishing.

### Sustainability, Ethics, and Accessibility

#### Environmental
We minimized carbon impact through digital distribution and asset optimization:

- Lazy-loading
- Image compression
- Elimination of unused code

#### Social
We followed ethical game design:

- No microtransactions or ads
- High-contrast UI
- Neutral characters with no cultural bias

#### Individual Well-being

- Adjustable difficulty
- Checkpoints and finite levels
- Prompt reminders for breaks (planned feature)

These principles guided responsible development and will be expanded in future updates.

### Conclusion

*Iron Rebellion* was both a technical and creative achievement for our team. We overcame challenges in collision detection, difficulty balancing, and AI optimization through structured design, iterative testing, and consistent collaboration.

The experience deepened our understanding of game mechanics, teamwork, and player-centric design. Looking ahead, we plan to expand narrative elements, accessibility, and level complexity.

More than just a game, *Iron Rebellion* represents our journey in turning a shared vision into an engaging, user-centered digital product.



### Contribution

| Contributor | Contribution |
|:------------|:-------------|
| Zewen Liang | 1.00 |
| Yunhao Zhou | 1.00 |
| Yuying Zhang | 1.00 |
| Zhi Zhao | 1.00 |
| Kaijie Xu | 1.00 |
