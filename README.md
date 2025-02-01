# MCSManagerServerSoftware
This repo is responsible for the Optional Server Update Scripts for MCSManager.

The releases contain Serverfiles that cannot be downloaded by MCSManager without issues.

# Server Update Script

Installing [Node.js](https://nodejs.org/en/download/) is recommended for easier use!

## Usage:
**Linux (File already downloaded):**
`node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

**Windows (File already downloaded):**
`node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

## In-Panel Update Command:
**Linux (Node.js shipped with MCSM):**
`sh -c "curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && /opt/node-v16.20.2-linux-x64/bin/node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>"`
> Example:
> `sh -c "curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && /opt/node-v16.20.2-linux-x64/bin/node ./getVersionLatestBuild.js paper 1.21.4 server.jar"`

**Windows (Node.js shipped with MCSM):**

`"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -command "curl -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js; <MCSM Install Location>\daemon\node_app.exe .\getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>"`
> Example:
> `"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -command "curl -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js; C:\MCSM\daemon\node_app.exe .\getVersionLatestBuild.js paper 1.21.4 server.jar"`

## Update Command when Node.js and npm are installed
**Linux & Windows:**
`npx -y github:SkyKingPX/mc-server-updater#ServerUpdater -- <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `npx -y github:SkyKingPX/mc-server-updater#ServerUpdater -- paper 1.21.4 server.jar`