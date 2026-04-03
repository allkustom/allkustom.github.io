---
title: Hear'T
subTitle: Hear the heart, between two sounds
photo: /1 collections/0 creativeTech/assets/006 heart_assets/hear_thumbnail.png
video: 
tag:
  - Physical Game
  - Medical
  - Pen Plotter

mediumTech:
  - ESP32
  - Unity
  - Touchdesigner
  - Leapmotion 2
  - Fusion 360
  - Illustrator
  - After Effects
  - Figma

projectDate:
  - 02/20/2026
  - 03/30/2026
size:
  - 450*600*15 mm
type: 
  - Team Project
role:
  - Project Lead
  - Creative Technologist
  - Hardware Fabrication
  - Unity Developer
  - Touchdesigner Developer
  - Motion Graphics Designer
  - Data Com System Design
  - Video Editor
  - 
linkText: Github Link
link: https://github.com/allkustom/HearT
---



<div class="contentBox border">

**Hear the heart, between two sounds**
</div>

<br>

The player uses **a digital stethoscope** as a controller to listen to **heart murmurs** and diagnose the type and location of the symptoms. It also offers a new experience about the standards of information and accessibility in medical diagnosis by using both real heart murmurs and converted heart murmurs.

<!--desc-->

<div class="spacer"></div>



# Description Video

<div class="contentBox two twoRatioSec mobileOne">

<iframe src="https://www.youtube.com/embed/OBqHutUxT3Y"
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<div class="contentBox">


**Jess Marcotte** describes *Queering Control(ler) as reorienting the standards of standardized control(ler) and looking at existing systems and standards from a new perspective.*

<br>

Based on this idea, we built our own definition of queering controller.
**Rearranging the standard by which the power/authority to collect and interpret information are distributed.**
</div>

</div>


<div class="spacer"></div>

# Full Gameplay

<iframe src="https://www.youtube.com/embed/e9sfo1vt9lQ"
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


<div class="spacer"></div>




# Tech Process

<div class="contentBox two twoRatioSec mobileOne">

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/006 heart_assets/02 leapmotion to unity.mp4
  " type="video/mp4" />
</video>

<div class="contentBox">

### Leapmotion 2, TD, Unity

I used Leapmotion 2 for hand tracking, and the data was managed in TouchDesigner. With Python, created a plane using 4 coordinate points as vertices and identified where the current hand position exists on that plane. The coordinate values were then sent to Unity through **UDP** and used for the movement of the player object.

</div>


</div>

<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/TD capture_1.png
" alt="" />


<br>
<br>

<div class="contentBox noPad">

<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/TD capture_2.png
" alt="" />

Sound engineered by *Mick Griffin* & Structure refined by *Minkyu Kim*
</div>

<br>



### Heart Beat Sound Network

To create the heart sounds in Touchdesigner, we first needed to understand the structure of heart sounds. Heart sounds are made up of **S1, S2, S3, and S4**. S1 and S2 form the main structure of a normal heartbeat. When there is a problem in the heart, a murmur appears between S1 and S2, or at points such as S3 and S4. We designed the system to **send out a pulse in 8 beats and cross** the assigned murmur sound according to the detected symptom. When the player object in Unity gets close to a symptom object, Unity sends the type of symptom and the distance to Touchdesigner through UDP, which determines **which symptom sound should be played and how strong it should be.**














<div class="spacer mid"></div>


# Prototype & Playtest

## 1st Prototype & Playtest
<div class="contentBox two">
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/playtest_1_1.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/playtest_1_2.png
" alt="" />
</div>


<div class="spacer"></div>


## Final Prototype

<div class="contentBox two">
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/stethoscope photo_1.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/stethoscope photo_3.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/circuit photo_1.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/circuit photo_2.JPG
" alt="" />

</div>

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/006 heart_assets/05 pen plotter.mp4
  " type="video/mp4" />
</video>



<br>

<div class="contentBox two mobileOne">


<div class="contentBox noPad">

### Stethoscope, CAD

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/006 heart_assets/CAD_stethoscope.mp4
  " type="video/mp4" />
</video>
</div>
<div class="contentBox noPad">

### Pen plotter, CAD

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/006 heart_assets/CAD_plotter.mp4
  " type="video/mp4" />
</video>
</div>

</div>

<br>

## Component List
<div class="contentBox two border mobileOne">

<div class="contentBox two ">
<div class="contentBox">

### Board
</div>
<div class="contentBox nopad">

**ESP32 Devkit C3** *2
</div>
</div>

<div class="contentBox two  ">
<div class="contentBox">

### Sensor & Output
</div>
<div class="contentBox">

**MPU6050** *1
**Joystick Moduel** *1
**8ohm Speaker** *2
**MAX98357 I2S Amp** *1
</div>
</div>
<div class="contentBox two  ">
<div class="contentBox">

### Power Supply
</div>
<div class="contentBox">

**3.7V Li-Po Battery 400maAh** *1
**DWEII 5V 2A Step-up Charging Converter** *1
</div>
</div>

</div>

<br>


## Final Playtest
<div class="contentBox three">
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/playtest_1.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/playtest_2.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/006 heart_assets/playtest_3.png
" alt="" />
</div>

<br>

## Received Feedback

The most positive feedback we received was, **“I want to play it one more time.”** When we were preparing the project, we expected that it would only support one time play because the educational message was quite strong. However, most players felt that the game itself was fun to play.

<br>

At the same time, we also received feedback that the onboarding process definitely needs improvement. **Too much information was given at once,** and this became something that interrupted the player’s immersion. At the very beginning, the tutorial had 19 pages, and we reduced it to 6 pages by keeping only the core content. However, the amount of information on each page was still more than necessary.

<br>

We also received feedback that **the converted sound was not intuitive enough**. It was supposed to help players understand heart murmurs more easily, but we believe that the cause of each symptom and the sound were not connected clearly enough. In the first prototype, we provided four example sounds for each symptom so that players could choose by themselves. However, we decided to provide randomly selected converted sounds because we thought the tutorial stage became too long. Since the player’s understanding is the real standard for how intuitive the sound is, it **seems necessary to add the example sound feature again.**

<div class="spacer"></div>

# Possible Improvements

1. **Simplifying the technical setup**
The technical preparation required to start the game is too complex and takes long
<br>

2. **Improving hand tracking**
Overload in Leapmotion 2, the hand tracking stops working after few rounds. This is critical problem for the experience. 
<br>


3. **Improving the converted sound design**
The current converted sound doesn’t immediately make the player think, ‘Oh, this must be this symptom.’ More refined sound design is needed
<br>


4. **Refining the tutorial process**
Too much informaton is concentrated in the tutorial stage. The onboarding process would be smoother if the game used more separated levels or stages.

<div class="spacer short"></div>

# Role
<div class="contentBox two border mobileOne">

<div class="contentBox two twoRatio">
<div class="contentBox">

### Minkyu Kim
</div>
<div class="contentBox nopad">

- **Project Lead**
- Creative Technologist
- Hardware Fabrication
- Unity Developer
- Touchdesigner Developer
- Motion Graphics Designer
- Data Com System Design
- Video Editor
</div>
</div>

<div class="contentBox two  twoRatio">
<div class="contentBox">

### Mick Griffin
</div>
<div class="contentBox">

- Creative Technologist
- Touchdesigner Sound Engineer
- Graphic Designer
</div>
</div>
<div class="contentBox two  twoRatio">
<div class="contentBox">

### Russell Ge
</div>
<div class="contentBox">

- Unity Developer
- Playtesting Documentation
</div>
</div>
<div class="contentBox two  twoRatio">
<div class="contentBox">

### Brian Ba La
</div>
<div class="contentBox">

- Unity UI/UX Assistant
- Playtesting Documentation
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
- Documentation via Figma

</div>
</div>

<div class="contentBox two  twoRatio">
<div class="contentBox">

### Prototyping
</div>
<div class="contentBox">

- Designed circuits
- Fabricated hardware prototypes
- Built a custom pen plotter


</div>
</div>


<div class="contentBox two twoRatio ">
<div class="contentBox">

### Unity
</div>
<div class="contentBox">

- SPP serial communication structure
- Tutorial & Game UI/UX
</div>
</div>
<div class="contentBox two  twoRatio">
<div class="contentBox">

### Touchdesigner
</div>
<div class="contentBox">

- Leapmotion 2 hand tracking
- UDP communication structure
- Supported heart beat sound network
</div>
</div>

<div class="contentBox two  twoRatio">
<div class="contentBox">

### Graphic Design
</div>
<div class="contentBox">

- Tutorial animations for Unity
- Edited the video documentation
</div>
</div>


</div>

