---
title: Coalesce
subTitle: Enhance your networking with handshakes
photo: /1 collections/0 creativeTech/assets/005 Coalesce_assets/Coalesce_thumbnail.png
video: 
tag:
  - Networking
  - Prototype

mediumTech:
  - ESP32
  - Firestore Database
  - React.js
  - Unity

projectDate:
  - 02/05/2026
  - 02/23/2026
size:
  - 40*170 mm
type: 
  - Team Project
role:
  - Project Lead
  - Creative Technologist
  - Hardware Fabrication
  - Web Developer

linkText: Github Link
link: https://github.com/allkustom/Coalesce
---

<div class="spacer"></div>



# Project Description

<div class="contentBox two twoRatioSec mobileOne">

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/005 Coalesce_assets/handshake_1.mp4
  " type="video/mp4" />
</video>

<div class="contentBox">


**A handshake** can be used in a new way through this device.

**Enhance professional networking sessions**, making it easier to connect without having stop and share your data
</div>

</div>






<div class="spacer"></div>


# About Handshake
<div class="contentBox two mobileOne">

<div class="contentBox noPad">

Begining likely as early 9th century in the Middle East, the **handshake represents symbolizes** a form of peace, trust, and back then, that the dominant hand was weapon free.

<br>

**But after the pandemic**, the meaning of handshake has begun to change.
**More than 50%** have started using handshake in situations where they are **'business' or 'formal.'**


<a href="https://theharrispoll.com/wp-content/uploads/2025/03/INT_COVID-19-5-Years-Later_Core-Demos-Profile_Ban.pdf?utm_source=chatgpt.com"
target="\_blank"
rel="noopener noreferrer"
class = "linkBox " style ="border: solid var(--strokeThin) var(--whiteSecond); width:100%; padding:10px 15px; margin-top:10px;">Research Source</a>
</div>

<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/handshake_research.png
" alt="" />

</div>



<div class="spacer"></div>


<div class="contentBox two mobileOne">

<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/networking image.png
" alt="" />

<div class="contentBox one">

<div class="contentBox">

## Why

We aim to give the handshake **new purpose** for participants. Make **a wearable device** that gives participants the ability to share socials and information when shaking hands

Our intention is to make participants to consider, who do they want to shake hands with, why, and what does that symbolize about the handshake in modern times?
</div>
<div class="contentBox">

## Where & Who

**Networking Event**

Where the event participants have the purpose of 'networking' in common.
</div>


</div>


</div>

<div class="spacer"></div>


<div class="contentBox three">

<div class="contentBox">

This device is intended to be worn by participants in networking events. Because of this, **the clear guidelines** were needed for how to wear and use the device properly. We wanted to communicate this information through an infographic manual.
</div>
<div class="contentBox one">

<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/infographic.png
" alt="" />

Infographics by [Jaden Mathews](https://www.linkedin.com/in/jaden-mathews-450baa2b1/)

</div>
<div class="contentBox">

Through this, users can take part in the **onboarding process by themselves**. And because they attach the device on their own, their trust in using it may also become higher. In addition, during this process, guidance to the webpage can be introduced naturally through scanning a QR code.
</div>


</div>


<div class="spacer"></div>

# Handshake to Data
<div class="contentBox two mobileOne">
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/final image.JPG
" alt="" />

<div class="contentBox">

### RX/TX with Conductive Plates

The first challenge of this project was **how to detect a handshake and identify who the other person is.** To identify the other person, we decided that using **RX/TX communication** would be the most efficient method. 2 conductive plates connected to RX/TX are attached to the palm. When a handshake happens in this state, the plates connect with the other person’s RX/TX, completing the circuit. At that moment, the devices **transmit their assigned client IDs** to each other. The received client ID is then sent to the DB to update each other’s client information.
<br>

We used **MPU6050** to detect the act of handshaking. By sensing a sudden change in vertical acceleration, it determines that a handshake has occurred. After that, it updates the handshake count in the DB.

</div>
</div>


<div class="spacer"></div>

# Webpage & Database
<div class="contentBox two mobileOne">
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/webpage_image.jpeg
" alt="" />

<div class="contentBox">

Participants should be able to see the updated status. Using Firebase Datastore, the information who they handshake with and the number of handshakes are **continuously updated and shown** through the webpage. Through this, participants can see how many people are currently at the event, who they have met, and how many handshakes they have made.

<br>

We also created a feature that unlocks the other person’s **information based on the number of handshakes.** After the first handshake, that person is added to the connection list. Then, each time they shake hands again, more information that the other person registered becomes unlocked and available to visit. Up to this point, the device is used as 'a tool'. However, it can also be used as 'a goal', such as the Google Calendar dinner schedule invite that is unlocked after 10 straight handshakes. We expect this can work as a fun experience.
</div>
</div>

<br>

## Webpage User Sequence
<div class="contentBox three">
<div class="contentBox noPad">

### 1. User Verification
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/webpage_1.png
" alt="" />
</div>
<div class="contentBox noPad">

### 2. Submit User Info
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/webpage_2.png
" alt="" />
</div>
<div class="contentBox noPad">

### 3. Personal Page, Check Connections
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/webpage_3.png
" alt="" />
</div>

</div>




<div class="spacer mid"></div>


# Prototype & Playtest

## 1st Prototype
<div class="contentBox two">
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/1st prototype_1.png
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/1st prototype_2.png
" alt="" />
</div>

<br>
<br>

## 2nd Prototype

<div class="contentBox three">
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/2nd prototype_3.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/2nd prototype_2.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/2nd prototype_1.JPG
" alt="" />
</div>

<br>

## Component List
<div class="contentBox two border mobileOne">

<div class="contentBox two ">
<div class="contentBox">

### Board
</div>
<div class="contentBox nopad">

**ESP32 S3 Zero** *1
</div>
</div>

<div class="contentBox two  ">
<div class="contentBox">

### Sensor
</div>
<div class="contentBox">

**MPU6050** *1
</div>
</div>
<div class="contentBox two  ">
<div class="contentBox">

### Power Supply
</div>
<div class="contentBox">

**3.7V Li-Po Battery** *1
**DWEII 5V 2A Step-up Charging Converter** *1
</div>
</div>

</div>

<br>


## 2nd Prototype's Playtest
<div class="contentBox three">
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/playtest_1.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/playtest_2.JPG
" alt="" />
<img src="
/1 collections/0 creativeTech/assets/005 Coalesce_assets/playtest_3.JPG
" alt="" />
</div>

<br>

## Received Feedback

The concept of exchanging information through the device received a positive response. However, there were also two negative reactions.
<br>

**First, concern about sharing personal information.** A participant may be willing to share their information with some people but not with others, which raised the question of how the device could be controlled in that situation. This could be solved by adding a function that allows the user to limit or control the device with **a micro gesture or action** which wouldn't be noticeable to the other person.
<br>

**Second, expect physical feedback on handshake detection.** If the RX/TX conductive plates couldn't make proper contact, the device won't work. In that state, even if a handshake happens, it is difficult to expect the intended result. This could be solved by **adding a haptic feedback** that responds when the RX/TX connection is detected.

<div class="spacer"></div>

# Possible Improvements

1. Consider **other ways of greeting**
Ex. hug, fist bump, etc
2. When the participant **doesn't want to shake hands**, possibility of unwelcoming from others.
3. When the participant wants to shake hands, but **doesn't want their information to be shared.**
4. When the handshake **becomes the purpose, not the tool**
Imagine, just asking for handshakes without actual social interaction.

<div class="spacer short"></div>

# Role
<div class="contentBox two border mobileOne">

<div class="contentBox two ">
<div class="contentBox">

### Minkyu Kim
</div>
<div class="contentBox nopad">

- **Project Manager**
- Creative Technologist
- Product Designer
- Programmer
</div>
</div>

<div class="contentBox two  ">
<div class="contentBox">

### Jaden Mathews
</div>
<div class="contentBox">

- Graphic Designer
- Creative Technologist
- Video Director
</div>
</div>
<div class="contentBox two  ">
<div class="contentBox">

### Chloe Jiang
</div>
<div class="contentBox">

- Unity Programmer
</div>
</div>
<div class="contentBox two  ">
<div class="contentBox">

### Milly Zhang
</div>
<div class="contentBox">

- Unity Programmer
</div>
</div>

</div>

<div class="spacer"></div>

# Personal Contribution



<div class="contentBox two mobileOne">

<div class="contentBox two ">
<div class="contentBox">

### Project Management
</div>
<div class="contentBox nopad">

- Core idea & logic development
- Built the project timeline
- Assigned team roles

</div>
</div>

<div class="contentBox two  ">
<div class="contentBox">

### Prototyping
</div>
<div class="contentBox">

- Designed circuits
- Fabricated hardware prototypes
- Implemented DB access & real time information updates
- Improved the handshake detection logic


</div>
</div>


<div class="contentBox two  ">
<div class="contentBox">

### Backend
</div>
<div class="contentBox">

- Set up & integrated the Firestore database
</div>
</div>
<div class="contentBox two  ">
<div class="contentBox">

### Frontend
</div>
<div class="contentBox">

- Developed a real time webpage using React.js
</div>
</div>

</div>

