# VideoColorSampler
###Video Color Sampler - sample video frame colors at runtime
This demo shows how to sample the current video frame color palette.
It uses [color-thief](https://github.com/lokesh/color-thief/) to grab the current frame to a canvas and sample the colors.
It then uses the ["Name that color"](http://chir.ag/projects/ntc/) library by Chirag Mehta to display the color name.
jQuery is used only for easy DOM manipulation but it is not required.
In this demo, 3 colors are sampled every 500ms but you can easily change these values.
###A note about security
If you want to sample a video file from another domain, you need to verify the following:
* Add the attribute `crossOrigin ="anonymous"` to your video tag
* For some browsers you will also need to add cross-domain headers to the server hosting your video file

# Demo
http://amirch1.github.io/VideoColorSampler
