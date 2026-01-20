# Project Management
## Adding new projects/catergories
Find '1 collections' folder in the source path
```
source/1 collections/...
```
Add a new folder with a correct label

**Make sure to add layout json and matching the contents**
```
source/1 collections/
    0 creativeTech
        0 creativeTech.json
        000 BMD.md
        000 BMD_assets
        001 MM.md
        001 MM_assets
        ...
    1 motionGraphic
        1 motionGraphic.json
        000 ikeaTogether.md
        000 ikeaTogether_assets
        001 DJReactive.md
        001 DJReactive_assets
        ...
    2 leatherCrafting
        2 leatherCrafting.json
        000 airpodCase.md
        000 airpodCase_assets
        ...
    ...
```
Make sure to manage the asset files with separated folders
```
    000 BMD.md --> 000 BMD_assets
    001 MM.md --> 001 MM_assets
```


Inside data JSON, the form has to be like below
```
0 creativeTech.json
    {
        "layout": "work.html",
        "tags": "work",
        "group": "Creative Tech"  //<-- Set the group type. It effects on the filtering
    }
```

## After creating a new project -> Front Matter Managing
Below is the sample shape of the front matter setting
(Find '/workTemplate/000 sampleWork.md' )
```
---
title: Title of the project
subTitle: Subtitle for explaining the project with one sentence
photo: /0 assets/work_template/000 sampleWork_assets/sampleImage.jpg
video: Youtube embedded link. Not a direct address.
tag:
  - Style
  - Aesthetic
  - or important tech usage
mediumTech:
  - Used tool
  - Used medium
projectDate:
  - From When
  - To When
size:
  - Scale
  - Duration
type: Personal Project or Team Project, role
linkText: Relative Link Text
link: Actual Link
---
```
Adjust the front matter contents based on the project information.

[Photo] matter allways has to be filled with the thumbnail image.
If there's [Video] matter is exist, it automatically shows the video url instead of the thumbnail image. (Only at the project page, not on the gallery view)


## Change Selected Work List
Selected works are managed by the JSON list. Find the path below.
```
source/_data/selectedWorks.json
```
Adjust the list inside JSON. The order from list affects the order on the HTML.

```
selectedWorks.json
    {
        "selectedWorksPaths": [
            "0 creativeTech/004 BMD.md",
            "0 creativeTech/002 21CEnigmaMachine.md",
            "1 motionGraphic/002 IkeaTogether.md",
            "0 creativeTech/000 ArmWithManners.md"
        ]
    }
```
---


# Style Guide
This website is based on Markdown, but using html components as additional styles. 
Make sure to check [Markdown Syntax](https://www.markdownguide.org/basic-syntax/).

The guide below is html components which you can add on your Markdown files

## About Description Section
Use a below line to auto-seperate the description section and content section.
```
<!--desc-->
```

## Spacer Line
Setting a spacer between contents with 4 options
1. Empty spacer
```
<div class="spacer"></div>
```
2. With short line
```
<div class="spacer short"></div>
```
3. With mid line
```
<div class="spacer mid"></div>
```
4. With long line
```
<div class="spacer long"></div>
```

## Content Box 
Use different column options with below
1. one
```
<div class="contentBox one">
    <!-- Content inside. Text/Image/Etc -->
</div>
```
2. two
```
<div class="contentBox two">
    <!-- Content inside. Text/Image/Etc -->
    <!-- Content inside. Text/Image/Etc -->
</div>
```
3. three
```
<div class="contentBox three">
    <!-- Content inside. Text/Image/Etc -->
    <!-- Content inside. Text/Image/Etc -->
    <!-- Content inside. Text/Image/Etc -->
</div>
```

**Use just 'contentBox' to wrap up the text box**
It supports Markdown style. Make sure to give an empty line between html and Markdown styles
```
<div class="contentBox">

    # MD Title
    MD main text

</div>
```

## Additional settings
Grid two, with 1:2 ratio
```
<div class="contentBox two twoRatio">
</div>
```
Grid two, turn into grid one when it's on the mobile
```
<div class="contentBox two mobileOne">
</div>
```
For span 2 in grid three
```
<div class="contentBox double">
</div>
```

With border lines
```
<div class="contentBox border">
</div>
```
Without Padding
```
<div class="contentBox noPad">
</div>
```


### Hyperlink, open with additional page tab
```
<a href="https://allkustom.itch.io/mm"
target="\_blank"
rel="noopener noreferrer"
class = "linkBox " style ="border: solid var(--strokeThin) var(--whiteSecond); width:fit-content; padding:10px 15px;"
> Hyperlink</a>
```

### List with a box shape
Below example is 2 col list.
Inside of it, one 2 col list and one full width list
```
<div class = "contentBox border">
<div class="contentBox"  >
<div class="contentBox two" >

**Adobe**

<div class="contentBox noPad">
<div class="contentBox two" style ="margin-top:0;">

**After Effects**

Expert
</div>
</div>
</div>
<div class="contentBox two">

**3D Printing**

Expert
</div>
</div>
</div>
```

## Image file markdown insert
```
![sample image](/0%20assets/basic/Ikea_together.png)
```
Or
```
<img src="/0 assets/basic/Ikea_together.png" alt="" />
```
Markdown requires to fill up the empty space with '%2'