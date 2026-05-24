---
title: Satellite Tracking Station
subTitle: (Ongoing) Tracking 3D Coordinate
photo: /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/0 thumbnail.JPG
video: 
tag:
  - Robotics

mediumTech:
  - Arduino
  - Fusion 360
  - 3D Printing
  - Robotics

projectDate:
  - 12/27/2025
  - Ongoing
size:
  - 200*100*150 mm
type: 
  - Research Project
role:
  - Research Assistant
  - Hardware Fabrication
  - Tracking Function Developer
linkText: Github Link
link: https://github.com/allkustom/Satellite-Tracking-Station
---

This project is **ongoing** since Dec 27th, 2025. Atending project as **a research assistant.**
Instructor: [Thiago Hersan](https://thiagohersan.com/)
<br>

It is designed to **accurately target 3D coordinates** with a wrist differential gear. At the moment, the user has to enter the coordinates manually, but plan to add an automatic tracking function with a satellite location API. Also, the target isn’t limited only to satellites, and opening the possibilities for other targets as well.
<br>
<!--desc-->


<div class="spacer"></div>



# May 23rd, 3rd Prototype
<div class="contentBox">
<iframe src="https://www.youtube.com/embed/5paCRZDbIPQ" 
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="spacer short"></div>



# Fabrication Process

## Jan 2nd, 1st Prototype

<div class="contentBox three">


<img src="
https://satnogs.org/wp-content/uploads/sites/2/2015/01/gs.jpg
" alt="" />



<div class="contentBox">

### About the Wrist Differential Structure

At the beginning of this project, I was asked to refer to [the Rotator from SatNOGs](https://satnogs.org/documentation/projects/). SatNOGs used a two axis separated motion system, and each axis rotated with a 3D printed worm gear.

Considering the torque that the worm gear can produce, it was a reasonable choice. However, because the parts were 3D printed, we considered the long term durability and sustainability were limited.
<br>

For that reason, we chose a wrist differential gear structure to focus on **precision and sustainability.**
</div>

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/1st prototype_video.mp4
  " type="video/mp4" />
</video>
</div>
<div class="contentBox two mobileOne">
<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/1st prototype_cad.png
" alt="" />
<div class="contentBox one">

### Received Feedback

After sharing the first prototype, we confirmed that it was a suitable form for the direction of the project. **However, the prototype couldn't provide enough precision**, and there wasn't a box to contain the board and modules, so we decided to move forward with a 2nd prototype.


We also added another goal to the project, which was to **create a more accessible design** so that the device/station could be reproduced more easily and other developers could try the project without much difficulty.

</div>

</div>

<div class="spacer"></div>

# Feb 2nd, 2nd Prototype
<div class="contentBox two twoRatioSec mobileOne">
<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/2nd prototype.JPG
" alt="" />

<div class="contentBox one">

5V stepper motors were replaced with **NEMA 17 stepper motors.** In addition, the gear module was reduced from 2 to 1.5, which made it possible to apply more gear teeth while keeping the same.

The head part was designed in a modular with antenna installation in mind. In the center of the box, added a cylindrical space that can hold a 5-inch pipe. For better accessibility during development, applied a customized desk stand.

**To verify the expected precision,** the project moves into the programming stage. Through that process, check whether the torque is sufficient and then apply a coordinate tracking function.

</div>
</div>
<div class="contentBox three">

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/2nd prototype_1.png
" alt="" />

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/2nd prototype_2.png
" alt="" />

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/2nd prototype_3.png
" alt="" />


</div>

<div class="spacer"></div>



# 2nd Prototype's Component List
<div class="contentBox two border mobileOne">

<div class="contentBox two ">
<div class="contentBox">

### Stepper Motors
</div>
<div class="contentBox nopad">

**NEMA 17** *2
</div>
</div>




<div class="contentBox two  ">
<div class="contentBox">

### Driver Module
</div>
<div class="contentBox">

**A4988 Driver** *2
</div>
</div>


<div class="contentBox two ">
<div class="contentBox">

### Board
</div>
<div class="contentBox nopad">

**Arduino Uno R3** *1
</div>
</div>


<div class="contentBox two  ">
<div class="contentBox">

### Power Supply
</div>
<div class="contentBox">

**12V Power Supply** *1
**5V Power Supply** *1
</div>
</div>

</div>


<div class="spacer"></div>



# Feb 26th, Optimization & Coordinate Tracking

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/2nd prototype_first coord tracking.mp4
  " type="video/mp4" />
</video>


<div class="contentBox two mobileOne">
<div class="contentBox">

## 3D Coordinate Input and Tracking


**Succeeded in tracking coordinates within a hemispherical range** based on the tracking station. During this process, there were 2 important conditions.

First, when moving toward a target coordinate, the system needed to **calculate the shortest path** and rotate in the proper direction. In the early stage of development, used atan() to calculate angles. However, atan() couldn't fully determine which quadrant the coordinate was in and which direction it should move from its current position. After learning about **atan2(), was able to determine the optimal direction of movement when calculating angles.**
</div>
<div class="contentBox">

Second, when moving from point to point, the z-axis and x-axis needed to rotate at the same time so the tracking station could reach the destination without extra motion. Because of the wrist differential structure, the rotation of the L and R motors affects both axis at the same time. In the early stage of development, controlled the rotation direction and number of revolution of each motor, so diagonal movement was limited. To solve this, I calculated the final combined revolution value whenever a target point was selected. As a result, I was **able to create smooth motion** through simultaneous 2 axis operation.
</div>


</div>



<div class="spacer"></div>




<div class="contentBox three">


<iframe src="https://www.youtube.com/embed/aIBnEimhELs" 
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



<div class="contentBox">

## GUI & Leap Motion 2

I don't think it is good UX to turn on the Arduino IDE and Serial Monitor for the operation. The final goal is to control it through a separate web interface or app, but as an intermediate step, I created **a GUI using TouchDesigner.**

The system works by applying coordinates with sliders. In addition, to expand the possibilities of the project, I also experimented **with hand tracking using Leap Motion 2.**
</div>

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/Leapmotion tracking.mp4
  " type="video/mp4" />
</video>

</div>


<div class="spacer"></div>

# Mar 14th, Enhance Hand Tracking
<div class="contentBox one">
<iframe src="https://www.youtube.com/embed/HPvqUUPxvX4" 
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="contentBox one">

Modified the system to **repeatedly track the position of the hand** within certain intervals. This was part of an optimization process for the original goal, continuous satellite coordinate tracking. Through this process, I confirmed that the tracking interval needs to be improved with consideration for the motor rotation time.

</div>

<div class="spacer mid"></div>




# May 23rd, 3rd Prototype

<iframe src="https://www.youtube.com/embed/5paCRZDbIPQ" 
title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="contentBox three mobileOne">

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/0 thumbnail.JPG
" alt="" />


<div class="contentBox ">

## Hardware rebuild

**Improving the trackable angle range** was the main goal. The 2nd prototype was able to track a hemispherical range, but only half of that range was being used. Therefore, I revised the structure to minimize the wasted trackable angle range. As a result, the system became capable of tracking all angles except the lower 45 degrees. This means that, based on a spherical shape, **able to track 85.5% of the total angular range.**

<br>

Also, Fusion 360 design structure got improved. Every part was **managed under assembly design.** This improved timeline management, specification control, and the speed of design modifications.

</div>


<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/differential.JPG
" alt="" />


</div>

<div class="contentBox two">

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/fusion_1.png
" alt="" />

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/fusion_2.png
" alt="" />


</div>

<div class="spacer"></div>


<div class="contentBox two mobileOne">

<div class="contentBox">

## Limit Switch Homing

The process of manually setting the zero point should be avoided. Therefore, limit switches were added to hit the highest and lowest positions, allowing the system to consistently return to the same zero point. Since external factors can cause step loss or angular misalignment, it performs automatic calibration in a certain interval.

A closed-loop system was also considered, but it could negatively affect the project’s accessibility and cost.


</div>


<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/limit switch homing_video.mp4
  " type="video/mp4" />
</video>

</div>


<div class="spacer"></div>



<div class="contentBox two mobileOne twoRatio">

<div class="contentBox">

## Power Cable & Infinite Rotation

This project is designed with long-term tracking in mind. It is important that there shouldn't be any limitation on the rotation. For that, I used 12V 10A slip ring and buck converter for the power structure. As a result, it was revised to allow **infinite rotation.**


</div>


<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/endless rotate_video.mp4
  " type="video/mp4" />
</video>

</div>


<div class="spacer"></div>



<div class="contentBox two mobileOne">
<div class="contentBox">

## Rear Circuit Board

A detachable circuit plate was placed on the rear side so that users can choose one of three options.

<br>

First, users can use a 3D-printed mount with a prototyping board. In this option, the user directly solders the circuit onto the prototyping board and attaches it as shown in the image.

<br>


Second, a PCB with only wiring and pin headers can be used. This option leaves room for users to directly plug in and manage their own boards and modules.

<br>

Third, a custom PCB like an Arduino shield. This option integrates all components except the Arduino Uno Q, allowing the circuit system to be managed as a single integrated unit.

</div>


<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/circuit_1.jpg
" alt="" />



</div>



<div class="spacer"></div>



<div class="contentBox two mobileOne twoRatio">



<div class="contentBox">

## Heavier Load with Cycloidal Gearbox

To collect data during satellite tracking, the installation of **an antenna** is being considered. A 20:1 cycloidal gearbox, which can provide **higher torque**, was tested so that it can be added as an optional component.

<br>

The gears were stacked in three layers to **cancel out most of the vibration generated during rotation.**


</div>


<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/cycloidal_fusion_video.mp4
  " type="video/mp4" />
</video>

</div>
<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/cycloidal apply_video.mp4
  " type="video/mp4" />
</video>











<div class="spacer long"></div>

# Extra Research & Experiment
<div class="contentBox border">

Attempts made to further develop the project and to solve possible issues.
</div>

<br>
<br>
<br>

## Jan 16th, Robot Arm IK



<div class="contentBox one">

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/ik testing.mp4
  " type="video/mp4" />
</video>
</div>

<div class="contentBox one">


<br>


### Considering Robot Arm

I understand that many different methods can be used to implement the tracking function. **To explore beyond the limitations** of the wrist differential structure used in this project, I also built a robotic arm based on MG90S servo.

It is true that a robotic arm is more versatile and can operate across a wider range. However, **'accessibility' was also an important part of this project**, so I decided not to apply the robotic arm approach because it requires more resources and has a higher level of production difficulty.

Still, depends the target/purpose of tracking or the method of tracking, I believe a robotic arm could also be a possible option.

</div>



<div class="spacer"></div>

## Jan 15th - Feb 16th, Gearbox for Higher Torque

I used a wrist differential structure to improve the weaknesses of the worm gear used in the SatNOGs Rotator.
But, as a result, **it lower the torque.**

To solve this problem, it was necessary to test **3D printed gearboxes**. All of the gearboxes were **designed in Fusion 360.**

<br>
<br>

<div class="contentBox one">

### Jan 15th, Planetary Gearbox

Gear Ratio - 1:4

<div class="contentBox two">


<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/planetary_1.png
" alt="" />

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/planetary_2.png
" alt="" />

</div>


</div>


<br>
<br>

<div class="contentBox one">

### Feb 16th, First Cycloidal Gearbox

Gear Ratio - 1:20

<div class="contentBox two">

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/cycloidal_1.mp4
  " type="video/mp4" />
</video>

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/cycloidal_2.mp4
  " type="video/mp4" />
</video>

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/cycloidal_3.png
" alt="" />

<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/cycloidal_4.png
" alt="" />


</div>

</div>



<br>
<br>



<div class="contentBox one">

### May 23rd, Improved Cycloidal Gearbox with Magnetic Encoder

Even with a homing function via limit switches, the use of magnetic encoders had to be considered for accurate control. In addition, the previously used A4988 drivers were replaced with **TMC2209** drivers to detect abnormal stepper motor behavior or changes in current.

A system was also built based on an **ESP32** to manage each motor individually, with the possibility of **closed-loop-like operation** in mind. At the current stage of the project, this is clearly over-engineering, but the main purpose of the test was to determine what is feasible and what is not.

<br>



<div class="contentBox two">

<video class="mediaAuto"
  autoplay
  muted
  loop
  playsinline
  preload="metadata">
  <source src="
  /1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/closed loop test_video.mp4
  " type="video/mp4" />
</video>



<img src="
/1 collections/0 creativeTech/assets/100 SatelliteTrackingStation/3rd prototype/closed loop_1.JPG
" alt="" />


</div>

</div>





