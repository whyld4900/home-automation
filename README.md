# home-automation: D-Link DCS-2530L put jpg images into folders and sync to cloud

## Problem: 
The D-Link DCS-2530L can ftp jpg images on motion detection. The images cannot be grouped into folders (e.g. 2019-01-06). Putting thousands of images into one directory causes performance issues.

## Solution: 
Create NODE script to:
1. create all folders needed
2. delete old folders and get JPG list
3. put all JPGs into the right folders

Create Powershell script to:
1. use Robocopy to sync local images to cloud
2. send success email on completion

## Stack:
* NODE + NPM + TypeScript
* Powershell
* Robocopy
* Windows 10 PC
* Windows Task Scheduler
