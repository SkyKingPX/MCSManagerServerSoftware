# MCSManagerServerSoftware
This repo is responsible for the Optional Server Update Scripts for MCSManager.

The releases contain Serverfiles that cannot be downloaded by MCSManager without issues.

# Server Update Script

## Usage:
**Linux:**
`/opt/node-v16.20.2-linux-x64/bin/node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `/opt/node-v16.20.2-linux-x64/bin/node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

**Windows:**
_Requires [NodeJS](https://nodejs.org/en/download/) to be **manually** installed!_
`node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>`
> Example:
> `node ./getVersionLatestBuild.js paper 1.21.4 server.jar`

## In-Panel Update Command:
**Linux:**
`sh -c "curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && /opt/node-v16.20.2-linux-x64/bin/node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>"`
> Example:
> `sh -c "curl -s -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js && /opt/node-v16.20.2-linux-x64/bin/node ./getVersionLatestBuild.js paper 1.21.4 server.jar"`

**Windows:**
`"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -command "curl -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js; <MCSM Install Location>\daemon\node_app.exe .\getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>"`
> Example:
> `"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -command "curl -o getVersionLatestBuild.js https://raw.githubusercontent.com/SkyKingPX/MCSManagerServerSoftware/refs/tags/ServerUpdater/getVersionLatestBuild.js; C:\MCSM\daemon\node_app.exe .\getVersionLatestBuild.js paper 1.21.4 server.jar"`