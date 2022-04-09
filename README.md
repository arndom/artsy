![demo](demo.gif)

<div align="center">
  <a href='https://opensource.org/licenses/MIT'>
    <img src='https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge'>
  </a>

  <a href='http://artsy-rho.vercel.app/'>
    <img src='https://img.shields.io/github/deployments/arndom/artsy/production?label=vercel&style=for-the-badge'>
  </a>
</div>

---

### About Artsy 🎨
Artsy is a fun app that allows you to record audio and use the transcribed data to generate art...

Well, that was the plan but some issues occurred down the line during the art generation. The idea was to use public ML models to drive this process which would have yielded some beautiful results, i.e: 
_**matte painting of a whale in the sea**_, generated [@pixray](https://replicate.com/pixray/text2image)

![1](https://user-images.githubusercontent.com/40564798/162583694-ccda08b4-de2f-49cf-aa90-6a3d602fb172.png)

The issue lies in the implementation, I attempted to deploy a container instance of the above model on GCP but realized I was way over my head as the GPU costs were very substantial. So, after the setback, I moved to an API but that had its issues with CORS and getting in touch with their team in the remaining time wasn't an option so I decided to run with what works and present it as a 'feature'.

Anyway, if a cost-effective and working solution is found, it would be surely implemented.

You can test it out [here](http://artsy-rho.vercel.app/)

Leave a 🌟 if you found this somewhat interesting.

---
