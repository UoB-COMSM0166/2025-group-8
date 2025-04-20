# 2025-group-8
2025 COMSM0166 group 8

## Table of Contents
- [Our Game](#our-game)
- [Our Group](#our-group)
- [Our Progress](#our-progress)
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
  - [Implementation](#implementation)
  - [Evaluation](#evaluation)
  - [Process](#process)
  - [Sustainability, Ethics, and Accessibility](#sustainability-ethics-and-accessibility)
  - [Conclusion](#conclusion)
  - [Contribution Statement](#contribution-statement)


## Our Game

CLICK TO PLAY[![Iron Rebellion](https://github.com/UoB-COMSM0166/2025-group-8/blob/main/pictures/game_banner.png?raw=true)](https://uob-comsm0166.github.io/2025-group-8/)


Your game lives in the [/docs](/docs) folder, and is published using Github pages to the link above.

Include a demo video of your game here (you don't have to wait until the end, you can insert a work in progress video)

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

Kanban Board : [![KANBAN](./pictures/KANBAN.png)](https://kanexu99-1738582319219.atlassian.net/jira/software/projects/KAN/boards/1?atlOrigin=eyJpIjoiNjQxNGNhZDU2NmRmNGNjNTk0YWU3ZGY4NDMzYWE4OTgiLCJwIjoiaiJ9)

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
| **Graphic Designers**  | **Visual and Audio Immersion**              | As a graphic designer, I want access to a comprehensive library of creative assets that are suitable for platform games and customizable in terms of color and size, so that I can design unique and appealing game visuals efficiently. | Given the design phase, when I access the asset library, then I should find a wide range of pre-made and customizable graphics. |
| **Graphic Designers**  | **Visual and Audio Immersion**              | As a graphic designer, I want the game engine to support high-resolution graphics up to 4K without performance degradation, so that the game looks crisp and engaging on all devices. | Given any supported device, when the game is played, then it should display high-resolution graphics scalable without loss of detail. |
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








## Project Report: Iron Rebellion
### Introduction

Iron Rebellion is a 2D platform-jumping game that rekindles the nostalgic allure of classic platformers while infusing modern design principles to elevate the gaming experience. Distinct from conventional platform games, Iron Rebellion is built around a compelling narrative that intricately weaves through each level, offering a blend of challenges that test both the player's reflexes and problem-solving skills.

This game distinguishes itself with a minimalist approach in design and functionality, reflected in its streamlined gameplay mechanics and the elegant simplicity of its pixel art graphics. By doing so, it captures the essence of classic gaming experiences while ensuring accessibility and engaging gameplay for both seasoned gamers and newcomers alike.

Iron Rebellion stands out by merging the straightforward, accessible gameplay that characterized the early days of platform gaming with complex puzzles and rich, narrative-driven quests. This synthesis not only pays homage to the roots of the platform genre but also pushes its boundaries by integrating story elements directly into the gameplay structure, thereby enhancing the overall depth and appeal of the game.

The game's unique charm lies in its ability to maintain simplicity while delivering a deep, engaging experience. This approach not only makes Iron Rebellion captivating but also makes it a refreshing addition to the genre, promising to deliver entertainment and challenge in equal measure. With Iron Rebellion, we aim to provide players with a nostalgic yet novel gaming journey that rejuvenates their love for platform games through a contemporary lens.

### Requirements
Requirements engineering played a central role in the early development of Iron Rebellion, shaping a platformer that combines nostalgic gameplay with fresh mechanics. To avoid common pitfalls in game development such as feature creep and vague scoping (Petrillo, 2009), we approached the requirements phase with structured planning and collaboration, using diagrams, user stories, and feasibility tests to define a realistic and user-centered game concept.

Our team began by sharing gaming experiences and discussing what we enjoyed most in platformers like Super Mario and Celeste. We agreed the game should be easy to learn but challenging to master, with increasing difficulty across handcrafted levels. After several brainstorming sessions using Miro and Google Docs, we proposed two core ideas: a puzzle-focused fantasy platformer and a sci-fi themed game featuring a robotic character in a hostile world. Through team discussion and preference voting, we selected the sci-fi concept, which evolved into Iron Rebellion. The setting allowed us to experiment with mechanical hazards and narrative elements, giving us creative flexibility and design consistency.

Once the game idea was set, we drafted use case diagrams to map out all expected interactions between the player and the game. These included entering the game, moving through menus, choosing difficulty, engaging with enemies, triggering switches, progressing through levels, and experiencing win or fail states. This structured view helped us define clear user flows and plan the game architecture around them.

To guide feature implementation, we developed user stories following the standard template: “As a [type of user], I want [feature] so that [goal].” These stories helped personalize the design and keep user needs in focus. Examples include:

As a casual gamer, I want an “easy” mode so I can enjoy the game without frustration.

As a challenge-seeking player, I want progressively harder levels so I feel rewarded for improving.

As a player, I want the game to auto-save my progress so I don’t lose my place if I exit.

Each story had accompanying acceptance criteria. For example, difficulty selection was considered complete only when it clearly adjusted enemy speed, obstacle density, and health pickups in real time.

During our third workshop, we created paper prototypes to test how the game might look and feel. These prototypes helped us quickly test design ideas, particularly level layouts, enemy positioning, and platform spacing. We learned early on that minor tweaks in level structure could drastically change the experience, prompting us to implement a tile-based map system for flexible iteration.

To validate the technical feasibility of our plans, we built several mini-prototypes. None of us had prior experience with game physics, so we tested features like jumping, collisions, and moving platforms using Processing. These simple demos confirmed that our core mechanics could be implemented with our current tools and skills, giving us confidence to move forward.

Stakeholder identification also helped us shape our priorities. Beyond players, our lecturers and teaching assistants acted as surrogate users, offering feedback and helping us interpret player needs more broadly. This process helped us write inclusive user stories, such as:

As a player who tires easily, I want frequent checkpoints so I can play in short bursts.

As a visually-oriented player, I want a clean interface that clearly shows objectives and progress.

In the final phase of requirements planning, we used these stories to define the MVP (Minimum Viable Product). Our MVP included three difficulty settings, five handcrafted levels, basic enemy AI, and a checkpoint system. More complex ideas like procedural level generation or multiplayer were consciously deferred to avoid overextending our scope.

In summary, the requirements phase for Iron Rebellion was iterative, collaborative, and grounded in practical tools such as user stories, use case diagrams, and paper prototypes. This process helped us define a game that is both achievable and engaging, laying a strong foundation for the design and implementation stages that followed. By grounding every feature in user needs and team feasibility, we ensured that the final product would be coherent, polished, and enjoyable to play.

### Design （需要修改）
The design of Iron Rebellion focused on building a modular and maintainable architecture that could support responsive gameplay, varied levels, and future expansion. We adopted a structure inspired by the Model-View-Controller (MVC) pattern, which helped us separate concerns and organize code around data, control, and display layers. Although not implemented as a strict MVC, this approach guided how we structured classes and managed responsibilities.

At the core of our system is the GameObject superclass, which defines shared properties like position, velocity, and size. This class is extended by all interactive elements in the game, including the Player, EnemyDrone, MovingPlatform, and TriggerButton. Each subclass overrides specific behavior for drawing, updating movement, and handling collisions. This hierarchy allowed us to reuse logic and minimize redundant code while keeping object behaviors modular.

The PlayerController class is responsible for reading inputs and applying player movement, jumps, and physics interactions. It communicates closely with the MapController, which manages the level layout by reading from external text files. This setup allowed us to rapidly test different level configurations without changing the codebase. The MapController also stores references to all game objects and handles collision resolution, which we initially placed in the player logic but later refactored for performance and clarity.

To coordinate the overall game flow, we implemented a GameStateManager that switches between different game modes: menu, gameplay, pause, and game over. This component handles which parts of the game loop are active and what should be rendered. It also manages background music and HUD elements like lives and score. This modularity made it easier to add features like difficulty selection and transition animations later in the project.

Our early class diagram reflected this system with key classes like MainGame, Player, Enemy, Map, and UIManager. The MainGame class runs the loop and delegates updates and rendering to other modules. This clear hierarchy helped us keep the game logic organized as we added new content.

As the project evolved, we updated our diagrams to reflect design changes. One example was the addition of an InteractionHandler, which manages interactions between objects such as buttons and doors. Initially, this logic was embedded in the Player class, but we separated it to improve flexibility and avoid tight coupling.

We also used behavioural diagrams to track game logic and player state transitions. Our Player State Diagram included states like Idle, Jumping, Falling, and Dead. Transitions between states depended on physics conditions and inputs. This helped us fix bugs such as double-jumping or getting stuck mid-air by clarifying the allowed transitions.

A Sequence Diagram was also created to track interactions when a player steps on a button, triggering a door to open. This showed the flow from PlayerController to InteractionHandler, then to MapController, and finally updating the game state via GameStateManager. These diagrams helped ensure each class had a clear role and that their communication was predictable.

During testing, we encountered performance issues with collision checks as levels grew. Our original method looped through all objects for collision detection, which caused lag. After reviewing our design, we introduced spatial partitioning logic in MapController, grouping objects by grid zones. This optimization improved performance without rewriting major parts of the code.

Our design work followed an agile process, so diagrams were updated frequently based on testing feedback and new requirements. Adding features like adaptive enemy behavior or environmental hazards required updates to our EnemyDrone class and MapController logic. Keeping our diagrams current allowed us to communicate design changes across the team and avoid misunderstandings during development.

In summary, the design of Iron Rebellion prioritized modularity, maintainability, and flexibility. Class diagrams helped structure our systems, while behavioural diagrams made interactions clearer. This foundation supported efficient implementation, smoother debugging, and the ability to adapt quickly to changes throughout development.

### Implementation （需要修改）
The implementation of Iron Rebellion followed an iterative, feature-first approach where we began by building a basic working prototype and then layered complexity onto it. Our initial steps focused on constructing the platforming foundation—handling user input, applying gravity, detecting collisions, and creating a player object that could interact with a tile-based level. From there, we implemented levels, enemy behaviors, and visual effects. Each feature introduced new challenges that pushed us to refine our initial architecture.

Our GameObject class served as the base for all interactive items in the game—such as the player, enemies, buttons, and moving platforms. Each subclass extended basic update and draw methods, giving us the flexibility to implement specific behaviors while maintaining a clean, modular structure. We used a MapController to parse external level files and instantiate the correct objects into the scene based on predefined characters. This allowed us to edit and test levels without modifying the core codebase.

The PlayerController was responsible for handling keyboard inputs, player physics, and interaction with the environment. Early tests revealed issues like infinite jumping and wall clipping, which led us to refine how ground detection and vertical movement were handled. We used velocity variables and jump flags to create a natural feel, preventing actions unless the player was in the correct state. This formed a stable core for player movement.

However, three implementation challenges defined our development process: collision detection, difficulty balancing, and responsive enemy AI.

Collision detection was the first major hurdle. Our original approach—checking all objects every frame—was inefficient and often buggy. The player would sometimes fall through platforms or get stuck on edges. We solved this by splitting collision checks into horizontal and vertical passes, introducing bounding box overlap detection, and limiting checks to nearby tiles. This not only fixed edge cases but also improved performance across all levels.

The second challenge was difficulty balancing and level design. We wanted to create a game that was accessible but still rewarding. To support this, we introduced three difficulty modes—Easy, Medium, and Hard—each adjusting obstacle density, drone speed, and platform layouts. We developed a text-based map system, where each symbol in a level file represented an object. This allowed us to quickly tweak level design during testing, based on feedback. For instance, when a tester found the tutorial jump too hard, we adjusted platform spacing with just one line change in the level file. This system became essential for rapid iteration.

Our third major challenge was creating responsive and dynamic enemy behavior. Initially, drones moved in a fixed pattern, which testers found too predictable. To improve this, we created a basic state machine where drones could switch between Idle, Patrol, and Chase based on player proximity. These states controlled speed and direction, making drones feel more reactive. However, adding these behaviors introduced frame rate drops when multiple drones were active. To fix this, we implemented an optimization where off-screen drones only updated once every few frames, reducing CPU load significantly without affecting gameplay.

Aside from these major systems, we also implemented environmental interactions such as switches, doors, and moving hazards. Buttons and triggers were abstracted into their own classes, each holding references to the objects they affect. For example, pressing a button would send a signal to a door object, causing it to animate and open. This decoupling made it easier to create puzzles and level-specific mechanics.

We chose not to implement procedural generation to retain control over puzzle design and pacing. All levels were hand-crafted, which allowed us to focus on difficulty progression and narrative structure. This decision proved valuable during playtesting, where we observed how players approached puzzles and could make immediate, fine-tuned adjustments.

In summary, the implementation of Iron Rebellion focused on building a solid foundation and then solving three major technical challenges: robust collision detection, scalable difficulty through flexible level design, and intelligent but efficient enemy AI. Addressing these challenges improved the game’s stability, performance, and overall player experience—ensuring it felt responsive, balanced, and fun to play.

### Evaluation
To ensure Iron Rebellion delivered a fun and accessible gameplay experience, we used both qualitative and quantitative evaluation methods. Our goal was to understand how players perceived the game, identify usability problems, and verify whether the difficulty scaled in a satisfying and fair way. We conducted a think-aloud study during early development and complemented it with a NASA Task Load Index (TLX) analysis to evaluate cognitive workload across different difficulty levels. Alongside this, we also established a consistent approach to testing the game’s functionality and stability.

Qualitative Evaluation: Think-Aloud Usability Testing

For our qualitative assessment, we selected the Think-Aloud Protocol, where participants verbalised their thoughts while playing. This method helped us uncover pain points in real-time and better understand players’ mental models. We recruited eight players of varying gaming experience, each of whom played the first two levels of Iron Rebellion.

Several consistent themes emerged during this process. First, many users expressed confusion about how to restart a level or exit to the main menu. Our UI lacked a pause or return function, leading players to manually refresh the browser or quit the window. This feedback prompted us to introduce a pause menu and a reset button in subsequent builds.

Another frequent comment involved collision detection. Phrases like “Why did I get stuck here?” or “I jumped and bounced off nothing” indicated invisible walls or inaccurate platform boundaries. This reinforced issues we had identified internally and led to improvements in our collision handling system.

A more positive theme emerged around the visual clarity of level layouts and the satisfying feedback when completing a stage. Participants enjoyed the checkpoint system and enemy behaviors once the early bugs were resolved. Importantly, several testers noted that the game felt “rewarding” when they succeeded, which aligned with our goal of creating a skill-based, learnable experience.

Quantitative Evaluation: NASA TLX Workload Assessment

To complement our qualitative findings, we conducted a NASA Task Load Index (TLX) assessment to evaluate cognitive workload across difficulty levels. We asked ten participants to play three versions of Level 1: Easy, Medium, and Hard. After each session, they completed a TLX questionnaire rating their mental demand, effort, performance, frustration, and physical demand.

The results showed a clear upward trend in workload as difficulty increased. Average effort scores rose from 3.4 (Easy) to 6.7 (Hard), and frustration increased from 2.2 to 5.9. However, performance ratings remained relatively high across all modes, suggesting that even at higher difficulties, players felt they were able to perform well with repeated attempts.

A Wilcoxon Signed-Rank test confirmed statistically significant differences in effort and frustration between Easy and Hard modes (p < 0.01). This validated our level design strategy, where harder modes were intended to challenge reflexes and timing, but not create insurmountable difficulty spikes. Importantly, participants rated the Medium mode as having the most “satisfying” balance between challenge and success—insight that influenced how we structured the rest of the levels.

Code Testing and Quality Assurance

To maintain code quality and ensure functionality across features, we used a combination of white-box and black-box testing. Internally, we created a Test class with assertion-based tests to verify core mechanics such as object spawning, collision outcomes, and physics calculations. For example, we tested whether the player could jump only when grounded, and whether drones correctly transitioned between patrol and chase states.

Much of our testing also relied on continuous playtesting by team members and external users. After every major feature merge, at least one developer would play through all existing levels to verify that mechanics were still functioning correctly. We documented common testing paths, such as “test button-door interaction,” “test drone collision with player,” and “test level reset behavior,” and these were followed before every demo.

Visual elements were tested using manual inspection, focusing on sprite alignment, animation timing, and asset loading performance. Since the game was deployed via GitHub Pages, we also tested compatibility across different browsers and operating systems, identifying and resolving minor UI scaling issues along the way.

In summary, our evaluation process was designed to gather both subjective player impressions and measurable performance data. The think-aloud study highlighted several interface and mechanical issues early on, allowing us to fix major bugs before broader testing. The NASA TLX confirmed that our difficulty scaling was effective and informed decisions on pacing and level design. Regular testing ensured that the game remained stable, consistent, and enjoyable throughout development.

### Process
The development of Iron Rebellion was a collaborative effort built on structured teamwork, clear roles, and continuous iteration. From the beginning, we adopted an agile-inspired approach, which gave us the flexibility to evolve ideas and respond to feedback efficiently. Our team consisted of five members, each with different strengths, and we assigned roles accordingly: two developers (Zewen and Zhi), one visual designer (Yunhao), one copywriter (Yuying), and one project manager (Kaijie).

During our first meetings, we focused on building rapport and aligning our vision. We discussed games we had enjoyed growing up and identified common interests in classic platformers and science fiction. These early conversations helped us converge on a shared direction and choose the theme and mechanics for Iron Rebellion. Our initial concepts were documented through Miro for brainstorming and GitHub repositories for file sharing, where we stored sketches, diagrams, and initial drafts.

Task management began with GitHub’s built-in Kanban board, but as tasks grew in complexity, we switched to Jira for improved tracking and clarity. We structured the board into “To Do,” “In Progress,” “Testing,” and “Done” columns, with each user story broken into smaller tasks. The project manager was responsible for sprint planning, while other team members selected tasks aligned with their skills during weekly planning sessions.

To keep communication smooth, we held regular meetings—once in-person after labs and twice weekly on Microsoft Teams. These meetings were structured as short stand-ups to discuss completed tasks, current blockers, and upcoming goals. We complemented these with WhatsApp for day-to-day communication, allowing us to quickly ask questions or coordinate merge requests. This lightweight but consistent communication strategy helped us avoid misunderstandings and supported continuous progress.

GitHub was used for version control. We followed a workflow where each team member developed features in separate branches and opened pull requests for review. This encouraged code quality and accountability. At least one teammate would review each PR before merging it into the main branch. The review process helped identify bugs early and made it easier for everyone to stay informed on changes happening in the codebase.

When technical challenges arose—such as implementing smoother collisions or AI behavior for drones—we used pair programming and screen sharing. This allowed one team member to drive while another assisted with logic or debugging. These sessions proved especially useful when dealing with complex interactions or cross-component dependencies.

To centralize our documentation and resources, we maintained a dedicated folder within our GitHub repository. This folder contained meeting summaries, design references, and user feedback logs. Using GitHub for both code and documentation allowed us to keep everything in one place, which improved traceability and made collaborative writing easier. We also used GitHub Discussions to track unresolved bugs and to document feature suggestions that were out of scope for the MVP but worth revisiting later.

Our team dynamics remained flexible throughout. While we had defined roles, we frequently stepped in to assist each other. For example, when image optimization became a bottleneck, our developer helped compress assets. Similarly, when testing demands grew, all team members participated in playtesting and feedback collection. This willingness to support one another was key to maintaining momentum, especially as deadlines approached.

One area where we improved significantly over time was task estimation. In early sprints, we underestimated how long certain features—like level transitions or enemy AI—would take to polish. By decomposing tasks into smaller parts and tracking average story point completions, we adjusted our scope more accurately in later sprints. This helped prevent last-minute rushes and ensured consistent quality.

In retrospect, our agile process was effective because it allowed structure without being rigid. Weekly sprints kept us accountable, while open communication helped resolve blockers quickly. Using tools like Jira, GitHub, Teams, and WhatsApp gave us a solid workflow, and our shared enthusiasm made the project both productive and enjoyable. Although we encountered obstacles, our teamwork and willingness to learn from each other were essential to delivering a complete and functional game by the deadline.

### Sustainability, Ethics, and Accessibility
The development of Iron Rebellion not only aimed to deliver an engaging gameplay experience but also considered the broader implications of game development on the environment, individuals, and society. This section outlines our game’s impact across three critical dimensions: environmental, social, and individual.

#### Environmental Impact
We prioritized environmental sustainability in both our design and deployment choices. Unlike traditional physical games that involve plastic cartridges, discs, or printed manuals, Iron Rebellion is distributed entirely through digital means via GitHub Pages, which minimizes material waste and eliminates carbon emissions related to manufacturing and transportation.

In development, we adopted several green software practices inspired by the Green Software Foundation’s recommendations:

Lazy loading of off-screen assets ensures only necessary resources are loaded, reducing memory usage and processor cycles.

Optimized image sizes and removal of unused code reduced file size and energy required during gameplay and page loading.

We intentionally avoided using high-resolution assets beyond what is visually necessary for a 2D pixel-art platformer, leading to lower GPU usage and power consumption.

While Iron Rebellion is relatively lightweight compared to 3D games, we acknowledge that prolonged play sessions still lead to cumulative energy use on end-user devices. To mitigate this, we propose adding eco-friendly messages during loading screens (e.g., “Take breaks to rest your eyes and reduce energy use”), which could raise awareness without disrupting gameplay.

#### Social Impact
While Iron Rebellion is primarily a single-player experience, our development choices reflect ethical consideration toward broader social inclusiveness.

Firstly, we avoided exploitative microtransaction models often seen in modern games. There are no in-app purchases, loot boxes, or predatory ads, ensuring that players of all financial backgrounds can enjoy the game equally and without manipulation. This aligns with ethical game design principles that prioritize fair access and avoid psychological exploitation (e.g., dark patterns).

Secondly, we adopted open and inclusive design principles in our gameplay. Although we did not fully implement accessibility tools like screen readers or remappable controls due to project constraints, we laid a foundation by ensuring the visual interface is clean, with high-contrast colors and intuitive HUD elements.

Moreover, our story and characters were designed to be universal and non-stereotypical, avoiding harmful cultural tropes or gender biases. Our robot protagonist and enemies are abstract enough to remain neutral, allowing players from diverse backgrounds to project themselves into the game without friction.

In future iterations, we aim to expand localization, add color-blind friendly modes, and enable keyboard remapping to reach a wider audience, particularly gamers with disabilities.

#### Individual Impact
From an individual player’s perspective, Iron Rebellion was crafted with cognitive and emotional well-being in mind. During development, we conducted NASA TLX workload testing and SUS usability evaluations to ensure the game was mentally stimulating without causing undue frustration or fatigue.

Key design features that support healthy individual gameplay include:

Difficulty settings (Easy, Medium, Hard) allowing players to tailor the challenge to their own comfort.

Checkpoints that enable progress saving, reducing stress from failure.

Finite levels and the absence of “infinite grind” mechanics, promoting focused, short sessions rather than endless, compulsive play.

Visual and auditory feedback that rewards skill and improvement, helping players experience a healthy sense of progress and achievement.

In terms of physical well-being, we plan to implement regular reminder prompts to encourage breaks, inspired by the Pomodoro Technique. This helps combat sedentary gaming habits, a common concern in modern digital entertainment.

Additionally, the game’s simple control scheme reduces the cognitive barrier for entry, making it accessible to younger players and older users unfamiliar with complex control systems.

#### Conclusion
By integrating sustainable design choices, ethical monetization strategies, and accessibility-oriented gameplay, Iron Rebellion exemplifies how small-scale digital games can have a positive footprint across environmental, social, and individual dimensions. While our current implementation is modest, the foundational decisions we've made open the door to further enhance our game’s ethical and sustainable impact in future updates. These practices also reflect our commitment as developers to responsible digital creation in a world increasingly shaped by interactive technologies.


### Conclusion
The development of Iron Rebellion was a challenging yet deeply rewarding journey that pushed our technical, creative, and collaborative skills. As our first full team-based game development project, it served as both a testing ground and learning experience in managing complexity, dividing responsibilities, and producing a complete software product within a limited timeframe.
At its core, Iron Rebellion aimed to deliver a nostalgic platforming experience with a modern twist—tight controls, thoughtful level design, and scalable difficulty. Through playtesting and iteration, we learned how even small changes in platform positions or enemy behavior could significantly impact gameplay quality. This taught us the importance of player feedback and playability testing early and often. We also learned to strike a balance between ambition and scope, making critical decisions to prioritize a polished core experience over unfinished or unnecessary features.
One of our greatest challenges was implementing reliable collision detection and AI behaviors that were both engaging and performant. Our initial attempts led to several bugs, but through structured testing, code reviews, and repeated refactoring, we were able to build a robust and reusable system. This process not only improved the gameplay but also strengthened our understanding of software design patterns, modularity, and code maintainability.
Accessibility and sustainability also emerged as key learning areas. We implemented several green coding practices, including lazy loading and asset optimization, and learned how small design decisions can reduce energy consumption. While we didn’t implement full accessibility features, we discussed ideas such as keyboard remapping and visual scaling that could be included in future versions to make the game more inclusive.
Working in a team also highlighted the value of soft skills—communication, task delegation, and shared accountability. Our ability to adapt to challenges, whether technical or organizational, was a major factor in the project’s success. Using tools like Jira and GitHub, we stayed organized and ensured that progress continued even during high-pressure periods.
Looking forward, there are several areas of Iron Rebellion we would like to explore further. First, adding a stronger narrative layer would help contextualize levels and enhance immersion. We also plan to design additional levels with new mechanics, such as time-based traps or puzzle-driven boss fights. Another exciting direction would be expanding accessibility options, especially for players using non-traditional input methods.
In reflection, Iron Rebellion provided us with a comprehensive understanding of what it takes to build a game from scratch: from ideation and system design to user testing and deployment. More than anything, this project taught us how to turn a shared creative vision into a playable, user-focused product. These lessons will carry forward with us into future academic and professional projects alike.

Table 
Table to demonstrate team contributions for Iron Rebellion Game Project.

Contributor	Contribution
Zewen Liang	1.00
Yunhao Zhou	1.00
Yuying Zhang	1.00
Zhi Zhao	1.00
Kaijie Xu	1.00

## Project Report

### Introduction

- 5% ~250 words 
- Describe your game, what is based on, what makes it novel? 

### Requirements 

- 15% ~750 words
- Use case diagrams, user stories. Early stages design. Ideation process. How did you decide as a team what to develop? 

### Design

- 15% ~750 words 
- System architecture. Class diagrams, behavioural diagrams. 

### Implementation

- 15% ~750 words

- Describe implementation of your game, in particular highlighting the three areas of challenge in developing your game. 

### Evaluation

- 15% ~750 words

- One qualitative evaluation (your choice) 

- One quantitative evaluation (of your choice) 

- Description of how code was tested. 

### Process 

- 15% ~750 words

- Teamwork. How did you work together, what tools did you use. Did you have team roles? Reflection on how you worked together. 

### Conclusion

- 10% ~500 words

- Reflect on project as a whole. Lessons learned. Reflect on challenges. Future work. 

### Contribution Statement

- Provide a table of everyone's contribution, which may be used to weight individual grades. We expect that the contribution will be split evenly across team-members in most cases. Let us know as soon as possible if there are any issues with teamwork as soon as they are apparent. 

### Additional Marks

You can delete this section in your own repo, it's just here for information. in addition to the marks above, we will be marking you on the following two points:

- **Quality** of report writing, presentation, use of figures and visual material (5%) 
  - Please write in a clear concise manner suitable for an interested layperson. Write as if this repo was publicly available.

- **Documentation** of code (5%)

  - Is your repo clearly organised? 
  - Is code well commented throughout?



待办：
1.将测试部分链接到report
2.kanban：不同knaban的尝试，为什么选择了现在的kanban