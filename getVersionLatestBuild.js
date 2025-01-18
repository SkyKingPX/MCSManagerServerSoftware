/*
 * |------------------------------------------|
 * |   Server Update Script for MCSManager    |
 * |             [Version 1.0.0]              |
 * |        by SkyKing_PX and FourK           |
 * |------------------------------------------|
 * 
 * Usage:
 * node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>
 * 
 * In-Panel Update Command:
 * curl -o getVersionLatestBuild.js -z getVersionLatestBuild.js https://github.com/SkyKingPX/MCSManagerServerSoftware/releases/download/ServerUpdater/getVersionLatestBuild.js && node ./getVersionLatestBuild.js <purpur/paper/fabric> <MC Version> <(Optional) output-file-name.jar>
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const software = process.argv[2];
const version = process.argv[3];
const fileName = process.argv[4];
const launcherVersion = "1.0.1";

if (software == null || version == null) {
    console.error("One of your arguments is missing. Please check your command. Exiting...");
    exit;
}

function getLatestBuild(options, version, callback) {
    const req = https.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            if (res.statusCode === 200) {
                callback(null, JSON.parse(data));
            } else {
                callback(new Error(`Request failed with status code ${res.statusCode}`));
            }
        });
    });
    req.on('error', (e) => {
        callback(e);
    });
    req.end();
}

function downloadFile(url, dest, callback) {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
        res.pipe(file);
        file.on('finish', () => {
            file.close(callback);
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => callback(err));
    });
}

let options = {
    hostname: 'undefined',
    path: `undefined`,
    method: 'GET'
};

// Match downloads API
switch (software.toLowerCase()) {
    case 'purpur':
        options = {
            hostname: 'api.purpurmc.org',
            path: `/v2/purpur/${version}`,
            method: 'GET'
        };
        break;
    case 'paper':
        options = {
            hostname: 'api.papermc.io',
            path: `/v2/projects/paper/versions/${version}/builds`,
            method: 'GET'
        };
        break;
    case 'fabric':
        options = {
            hostname: 'meta.fabricmc.net',
            path: `/v2/versions/loader/${version}`,
            method: 'GET'
        };
        break;
    default:
        console.error(`Did not recognize Software argument ${software}. Possible options: purpur, paper, fabric.`);
        exit;
        break;
}

getLatestBuild(options, version, (err, response) => {
    if (err) {
        console.error(`Error: ${err.message}`);
    } else {
        let downloadUrl = ``;
        switch (software.toLowerCase()) {
            case "purpur":
                console.log(`Latest Purpur build: ${response.builds.latest}. Attempting to update...`);
                downloadUrl = `https://api.purpurmc.org/v2/purpur/${version}/${response.builds.latest}/download`;
                let filePathPurpur = process.cwd() + `/purpur-${version}-${response.builds.latest}.jar`;
                if (fileName != null) {
                    filePathPurpur = process.cwd() + `/${fileName}`;
                }
                downloadFile(downloadUrl, filePathPurpur, (err) => {
                    if (err) {
                        console.error(`Error downloading file: ${err.message}.`);
                        exit;
                    } else {
                        console.log(`Server file downloaded successfully. Exiting...`);
                        exit;
                    }
                });
                break;

            case "paper":
                let builds = response.builds;
                let buildNumbers = builds.map(build => build.build);
                let index = buildNumbers.length - 1;
                const latestBuild = buildNumbers[index];
                console.log(`Latest Paper build: ${JSON.stringify(latestBuild)}. Attempting to update...`);
                downloadUrl = `https://api.papermc.io/v2/projects/paper/versions/${version}/builds/${JSON.stringify(latestBuild)}/downloads/paper-${version}-${JSON.stringify(latestBuild)}.jar`;
                let filePathPaper = process.cwd() + `/paper-${version}-${JSON.stringify(latestBuild)}.jar`;
                if (fileName != null) {
                    filePathPaper = process.cwd() + `/${fileName}`;
                }
                downloadFile(downloadUrl, filePathPaper, (err) => {
                    if (err) {
                        console.error(`Error downloading file: ${err.message}.`);
                        exit;
                    } else {
                        console.log(`Server file downloaded successfully. Exiting...`);
                        exit;
                    }
                });
                break;

            case "fabric":
                let loaderVer = response[0].loader.version;
                console.log(`Latest Fabric Loader Version: ${loaderVer}. Attempting to update...`);
                downloadUrl = `https://meta.fabricmc.net/v2/versions/loader/${version}/${loaderVer}/${launcherVersion}/server/jar`;
                let filePathFabric = process.cwd() + `/fabric-server-mc.${version}-loader.${loaderVer}-launcher.${launcherVersion}.jar`;
                if (fileName != null) {
                    filePathFabric = process.cwd() + `/${fileName}`;
                }
                downloadFile(downloadUrl, filePathFabric, (err) => {
                    if (err) {
                        console.error(`Error downloading file: ${err.message}.`);
                        exit;
                    } else {
                        console.log(`Server file downloaded successfully. Exiting...`);
                        exit;
                    }
                });
                break;
            default:
                console.error("An unexpected error occurred!");
                exit;
                break;
        }
    }
});
