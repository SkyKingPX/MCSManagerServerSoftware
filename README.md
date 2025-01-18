# MCSManagerServerSoftware
This repo is responsible for the Optional Server Update Scripts for MCSManager.

The releases contain Serverfiles that cannot be downloaded by MCSManager without issues.

# Server Update Script

Usage:
`node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

In-Panel Update Command:
`curl -o getVersionLatestBuild.js -z getVersionLatestBuild.js https://github.com/SkyKingPX/MCSManagerServerSoftware/releases/download/ServerUpdater/getVersionLatestBuild.js && node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`