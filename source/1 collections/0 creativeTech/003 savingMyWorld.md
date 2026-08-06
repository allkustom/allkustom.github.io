---
visible: No
title: Saving My Wolrd
subTitle: Walkable Immersive Experience
photo: /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/savingmyworld_thumbnail.png
video: 
tag:
  - XR
  - Custom Controller Mount


mediumTech:
  - Unity
  - Blender
  - After Effects
  - Illustrator
  - Photoshop
  - Audition
projectDate:
  - 10/27/2025
  - 12/12/2025
size:
  - Play Time - 8 min
  - Walkable Area - 5 * 2 M
type: Team Project
role:
  - Project Lead
  - Unity Developer
  - Hardware Prototyper
  - Storyteller
linkText: Game Download Link
link: https://allkustom.itch.io/saving-my-world
---




**In a future where energy has run out, you begin an adventure to save the world and your family**
*Saving My World* is a VR storytelling game where you walk through a real space of 5 * 2 M and explore a space station. In the game, there is a companion called *Sphere*, and the player must always carry it with both hands. To make this feeling not only in the VR world but also in the real world, we provide a custom controller mount. Players interact with physical objects and solve problems together.<br>
<!--desc-->


<div class="spacer"></div>

# Gameplay

<iframe src="https://www.youtube.com/embed/Ets6VIAljQA" 
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="spacer"></div>

# Story Summary

The player wakes inside a damaged facility and, guided by the sphere device, sets out for the Central System. Traveling between modules by capsule, they unlock Scan to reveal invisible cosmic energy, collect it, and use that power to open the way forward. Reaching the Central System, they are tasked with restoring three sub systems and push through each area’s challenges, gaining new abilities that let them progress. With all abilities in hand, a hidden passage in Room 1 triggers the sphere device’s memory recovery, revealing that the player is a clone modeled on the “Original,” along with a family-related clue and extra energy. Returning to the Central System, the story concludes along one of two paths: restart the facility and remain, or gather all energy so the sphere device can secure the station while the player returns to Earth.





<div class="spacer mid"></div>

# Custom Controller Mount

<div class="contentBox two">
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/custom controller_final_2.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/custom controller_final_3.JPG
" alt="" />
</div>

<div class="contentBox two mobileOne">
<div class="contentBox one">

This is the idea that **started the concept of the game**. When we are in a VR world, there are limits to the physical feedback we can receive. There are methods like haptic gloves that can create the resistance of an object, but this only recreates the sense of touch, so it is hard to say that it creates detailed interaction. Especially when we imagine holding an object with both hands, **the real space that should exist between the hands can't be recreated with haptic feedback alone.**
</div>
<div class="contentBox one">

Under that idea, we suggest the custom controller mount. The player **holds an object with both hands** and sees that its movement is linked with the object in the game. Because of this, the player can feel the visual information of the VR world layered on top of real world sensation. We simply took the name from its shape and called it *Sphere*.

Because of that, we made *Sphere* the center of both the main gameplay mechanic and the storytelling. The player move *Sphere* to solve puzzles, bring *Sphere* close to their eyes to collect information, and talk with *Sphere* to understand the world.
</div>

</div>

<div class="spacer"></div>

# Controller Prototyping
<div class="contentBox two twoRatioSec mobileOne">

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/tracking func demo_vid.mp4
  " type="video/mp4" />
</video>

<div class="contentBox">

Quest 3S and controllers can recognize each other only when the controllers are being held in the hands. Because of this, I place the controllers at both ends and fix the distance with a mount. In Unity, I **link the object by using the center point** as an anchor. Also, even when the controllers rotate, the face expression inside always turns toward the player, which **emphasizes that it is an object for interaction.**

</div>
</div>

<div class="contentBox three">
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/blender_prototype.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/blender_final.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/blender_sphere.png
" alt="" />
</div>

<div class="spacer"></div>

# Facial Expression

### To give the feeling that the player is really having a conversation

Shows 6 different expressions depending on the dialogue. I created the animation by changing the material UV of the object, so only one texture was needed.

<br>

Drawn by *Rosyln Choi*

<div class="contentBox three">
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/face_1.mov
  " type="video/mp4" />
</video>
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/face_2.mov
  " type="video/mp4" />
</video>
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/face_3.mov
  " type="video/mp4" />
</video>
</div>
<div class="contentBox three">
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/face_4.mov
  " type="video/mp4" />
</video>
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/face_5.mov
  " type="video/mp4" />
</video>
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/face_6.mov
  " type="video/mp4" />
</video>
</div>

<div class="spacer short"></div>

# Scan Mode


Activated when the player bring *Sphere* in front of eyes. When the player can't move forward, they can get hints or read hidden story details. It is especially important for finding Energy Capsules, which are a key element of the game, unlocking abilities, and **solving puzzles**.

<br>

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/0 Scan video.mov
  " type="video/mp4" />
</video>





<div class="spacer"></div>

# 3 Puzzles

<div class="contentBox three">

<div class="contentBox">

### 1. Syncro

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/3 1 Syncro.mov
  " type="video/mp4" />
</video>

<br>

It applies the movement of the controller to the object. It is used to return puzzle objects to their correct position.

</div>

<div class="contentBox">

### 2. Ascend

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/3 2 Ascend.mov
  " type="video/mp4" />
</video>

<br>

It allows the player to move vertically. By raising the controller toward the sky, it gives the feeling of moving through the controller itself.

</div>

<div class="contentBox">

### 3. Barrier

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/3 3 Barrier.mov
  " type="video/mp4" />
</video>

<br>


It creates or removes a barrier. It can connect a broken path or allow the player to approach objects that were previously blocked from interaction.

</div>


</div>


<div class="spacer long"></div>


# Map Structure

The player explores 5 * 2 M sized space in the real world. Even though the real space is limited, the game makes the player feel like they are exploring a much larger world. At both ends of the room, there are rotating capsules, and **the player moves back and forth** through them.


The space of the Central System was designed to show a larger area than a regular room, so it can rotate in 4 directions around a central point.

<br>

<div class="contentBox two twoRatioSec mobileOne">

<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/Structure sketch.png
" alt="" />

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/003 savingMyWorld_assets/2 central room switch.mov
  " type="video/mp4" />
</video>


</div>


<div class="spacer"></div>

# Initial Sketches

<div class="contentBox three">
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/sketch_1.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/sketch_2.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/003 savingMyWorld_assets/sketch_3.png
" alt="" />
</div>


<div class="spacer"></div>


# Role
<div class="contentBox two border mobileOne">

<div class="contentBox two twoRatio">
<div class="contentBox">

### Minkyu Kim
</div>
<div class="contentBox nopad">

- **Project Lead**
- Unity Developer
- 3D Object/Space Designer
- Hardware Prototyper
- Storyteller
</div>
</div>

<div class="contentBox two  twoRatio">
<div class="contentBox">

### Roslyn Choi
</div>
<div class="contentBox">

- Graphic Designer
</div>
</div>
<div class="contentBox two twoRatio">
<div class="contentBox">

### Kari Ergmann
</div>
<div class="contentBox">

- Storytelling Assist
</div>
</div>
<div class="contentBox two  twoRatio">
<div class="contentBox">

### Bella Dekoker
</div>
<div class="contentBox">

- Logo & Title Graphic Designer
</div>
</div>

</div>

<div class="spacer"></div>

# Personal Contribution



<div class="contentBox two mobileOne">

<div class="contentBox two twoRatio">
<div class="contentBox">

### Project Management
</div>
<div class="contentBox nopad">

- Core idea & logic development
- Built the project timeline
- Assigned team roles

</div>
</div>

<div class="contentBox two  twoRatio">
<div class="contentBox">

### Prototyping
</div>
<div class="contentBox">

- Designed a custom controller mount
- Prototyped with 3D printing


</div>
</div>


<div class="contentBox two  twoRatio">
<div class="contentBox">

### Unity
</div>
<div class="contentBox">

- Linked controllers and Unity object
- Planned and managed dialogue
- Map rotating system 
</div>
</div>
<div class="contentBox two  twoRatio">
<div class="contentBox">

### Blender, 3D Object/Space Design
</div>
<div class="contentBox">

- Designed modulized room
- Designed *Sphere* companion
</div>
</div>

</div>

