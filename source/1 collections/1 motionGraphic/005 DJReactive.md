---
title: Networking Party, DJ Reactive Visual
subTitle: Real-time reactive for the social party
photo: /1 collections/1 motionGraphic/assets/005 DJReactive_assets/networkingPartyDJ_thumbnail.png
video: https://www.youtube.com/embed/vGp6ohVT1FE
tag:
  - Touchdesigner
  - Projection Mapping
  - Mad Mapper

mediumTech:
  - Touchdesigner
  - Mad Mapper
projectDate:
  - 07/19/2024
size:
  - 29000*1200 px
  - 120m 0s
type: 
  - Company Project 
  - Raum Art Center
role:
  - Motion Design Lead
linkText: 
link: 

---
A social networking party planned and hosted by [Raum Art Center](https://www.theraum.co.kr/)(Click Link). The primary attendees were business owners, startup founders, and influencers, so securing a DJ for the networking session as the event highlight was essential to deliver a social club vibe. However, Raum Art Center strongly maintains a medieval castle visual/structure, which made it difficult to present the modern, youth-oriented visuals the audience expected. To bridge this gap, we used a beam projector to turn the large space into a canvas for real-time reactive visuals. This approach **overcame the venue’s built-in limitations** and created a new, more contemporary experience.

<!--desc-->
<div class="spacer"></div>



<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/000.JPG" alt="" />

<div class="contentBox two mobileOne">

<div class="contentBox">

## Technical Issue
The video pipeline was structured as follows. Audio from the DJ booth was routed into TouchDesigner. TouchDesigner analyzed the audio data and generated reactive visuals. The visuals were then sent to Mad Mapper via NDI output. Mad Mapper delivered the final output to 12 installed projectors.

<br>

However, the installed **PC couldn't handle both TouchDesigner and Mad Mapper**. Maintaining a minimum of 60 fps at an unusual resolution of 29000*1200 px was not feasible. To solve this issue, I needed to understand how NDI works.

</div>
<div class="contentBox">

## Solution: Local Network NDI
**NDI is a local network based data transport protocol**. A single computer already operates within its own local network environment, which is why NDI can run without additional hardware. I concluded that if I built a local network between two separate machines, I could split the workload between TouchDesigner and Mad Mapper while keeping the output live.

<br>

I connected a MacBook Pro for TouchDesigner processing and a Windows PC for MadMapper output using a crossover Ethernet cable to create a direct local network. As a result, I was **able to maintain the required quality and deliver stable real-time projection output.**

</div>
</div> 

<div class="spacer short"></div>


<div class="contentBox two mobileOne">
<div class="contentBox">

## MX10 Switching System
### With Cooking Switching
Rendering at an unusual resolution of 29000*1200 px puts significant strain on the PC. When 10 visuals are cooking simultaneously, **performance drops to around 5-10 fps**. I adopted the MX10 switching system to manage visual sources more efficiently, but it did not reduce the calculation load on its own.

<br>

To solve this, I **customized the MX10 switching system by limiting active cooking** to a maximum of 2 visuals at a time. I allowed cooking only for the current visual and the next visual in the queue, while disabling cooking for all other visuals. This preserved the usability of the switching system while **maintaining stable real-time output at 50-60 fps**.
</div>
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/001.JPG" alt="" />

</div>

<div class="contentBox two">
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/010.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/012.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/011.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/013.png" alt="" />
</div>

<div class="spacer short"></div>

## TouchDesigner Visual Containers

<div class="contentBox border">
<div class="contentBox two">
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/020.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/021.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/022.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/023.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/024.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/025.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/026.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/027.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/028.png" alt="" />
<img src="/1 collections/1 motionGraphic/assets/005 DJReactive_assets/029.png" alt="" />

</div>
</div>