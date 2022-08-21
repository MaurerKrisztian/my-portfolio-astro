---
layout: ../../layouts/project.astro
title: Youtube downloader (cli wrapper)
client: Self
publishDate: 2020-03-02 00:00:00
img: /assets/project/Maurer_Krisztián_yt-downloader-cover.png
description: Youtube downloader (cli wrapper)
tags:
- HTML Canvas
- UI
- Animation
---

![Youtube downloader demo Maurer Krisztián](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g49qupi8c5g5f5uv5t4q.gif)

You have probably already come across a YouTube video download site, in this article I will show you how to write such a site and go through the concepts and solutions I used.

### First of all, let's clarify what we want to achieve:
- providing a youtube link to download the video in mp4 or mp3 format and give real time feedback on the status of the download to make it cool.

Demo: [https://youtube-downloader-app.netlify.app/](https://youtube-downloader-app.netlify.app/)

Api code: [https://github.com/MaurerKrisztian/youtube-downloader-api](https://github.com/MaurerKrisztian/youtube-downloader-api) 

UI code: [https://github.com/MaurerKrisztian/youtube-downloader-ui-vue](https://github.com/MaurerKrisztian/youtube-downloader-ui-vue)

### **1. How to download a youtube video?**

After a bit of searching, I found a couple of Linux cli tools that are just for this, most of them downloaded slowly, but luckily I found **[ytb-dl](https://github.com/yt-dlp/yt-dlp)**, which somehow bypasses the download restriction.

### **2. How to interact with a cli API via Node.js?**

With nodejs you can run cli commands with the [**spawn**](https://nodejs.org/api/child_process.html) built-in function that creates a child process.

```javascript
const downloadProcess = spawn('yt-dlp', [link]);

downloadProcess.stdout.on('data', (data) => {
    console.log(data);
});
```
The responses of the child process to the console, e.g. download percentage, speed, size... we can receive and process these outputs with stdout.on


### **3. CLI wrapper.**

I built a wrapper around yt-dlp which essentially parameterizes the calls and formats the lines extracted from std-otut into json format with a couple of regexps so I can easily work with this in the future.

  **Events:** The wrapper throws 4 types of events:

- start - when a download starts
- progress - information about the download progress (precent, speed..)
- error - if something went wrong
- close - if the process has ended

Wrapper file: [https://github.com/MaurerKrisztian/youtube-downloader-api/blob/main/src/cli-wrapper/yt-downloader-wrapper.ts](https://github.com/MaurerKrisztian/youtube-downloader-api/blob/main/src/cli-wrapper/yt-downloader-wrapper.ts)

As a result, this function call can be used to start a download of throw events from cli responses into a processable format:

```typescript

 process(link: string, id: string, path: string = './download', filename: string = "video", format: 'mp4' | 'mp3' = 'mp4') {...}

``` 

### **4. Event management**

On the UI, the goal would be to have real-time feedback, so a REST API solution is not suitable, but the websocket is perfet, so I built a socket connection, the client can request a download and can subscribe to progress, error, done response that sends real time information.

### **5. UI**

I'm writing UI in Vue (my first vue project). It essentially connects to the backend sockets and displays the returned data.

### **6. Deploy** 

We use the yt-dlp cli so the env need to contain this. I was able to deploy it to my own server, but I also tried to deploy here https://railway.app/ but this yt-dlp is a "banned dependency" due to the quality of shared hosting but we can include the yt-dlp binary among the files and use that or downolad the binary on the fly. I am currently working on it.


 *NOTE: this is just an mvp (there are things to improve) in the future I will update the article and the project, if you find something to improve, feel free to submit a pull request or open an issue 

