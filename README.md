# MCSManagerServerSoftware
This repo is responsible for the Optional Server Update Scripts for MCSManager.

The releases contain Serverfiles that cannot be downloaded by MCSManager without issues.

# Server Update Script

## Usage:
**Linux:**
`/opt/node-v20.12.2-linux-x64/bin/node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `/opt/node-v20.12.2-linux-x64/bin/node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

**Windows:**
_Requires [NodeJS](https://nodejs.org/en/download/) to be **manually** installed!_
`node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

## In-Panel Update Command:
**Linux:**
`sh -c "curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && /opt/node-v20.12.2-linux-x64/bin/node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>" mcsm`
> Example:
> `sh -c "curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && /opt/node-v20.12.2-linux-x64/bin/node ./getVersionLatestBuild.js paper 1.21.4 server.jar" mcsm`

**Windows:**
`curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && node ./getVersionLatestBuild.js paper 1.21.4 server.jar