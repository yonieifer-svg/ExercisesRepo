// import fs from "fs";

// 1
const writeFileAsPromise = (filePath, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, "utf-8", (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
};

// writeFileAsPromise("data/message.txt", "hello world!")
//         .then(console.log("success"))
//         .catch("failed")
//         .finally("done");

// 2
const readFileAsPromise = (filePath) => {
    return new Promise((res, rej) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) rej(err);
            else res(data);
        });
    });
};

// readFileAsPromise("data/message.txt")
//     .then(console.log)
//     .catch(console.log)

// 3
const readFileAndCount = (filePath) => {
    return new Promise((res, rej) => {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) rej(err);
            else res(data.length);
        });
    });
};

// readFileAndCount("data/message.txt")
//     .then(console.log)
//     .catch(console.log("hi"))

// 4
const appendFileAsPromise = (filePath, content) => {
    return new Promise((res, rej) => {
        fs.appendFile(filePath, content, (err) => {
            if (err) rej(err);
            else res();
        });
    });
};

// writeFileAsPromise("data/step1.txt", "hello from promise 1\n")
//     .then(() => {
//         console.log("Step 1 done");
//         return appendFileAsPromise("data/step2.txt", "hello from promise 2\n")})
//     .then(() => console.log("Step 2 done"))
//     .catch(console.log)

// 5
let f1;
let f2;

readFileAsPromise("data/step1.txt")
    .then((data) => {
        f1 = data;
        return readFileAsPromise("data/step2.txt");
    })
    .then((data) => {
        f2 = data;
        return readFileAsPromise("data/step3.txt");
    })
    .then((data) => {
        console.log(f1 + f2 + data);
    })
    .catch(console.log);

// 6
let report;
readFileAsPromise("data/report-title.txt")
    .then((data) => {
        report = data;
        return readFileAsPromise("data/report-body.txt");
    })
    .then((data) => {
        report += data;
        return writeFileAsPromise("data/final-report.txt", report);
    })
    .catch(console.log);

import { rmSync } from "fs";
// 7
import fs from "fs/promises";

fs.readFile("data/final-report.txt", "utf8")
    .then(console.log)
    .catch(console.log);

// 8
let report1;
fs.readFile("data/report-title.txt", "utf8")
    .then((data) => {
        report1 = data;
        return fs.readFile("data/report-body.txt", "utf8");
    })
    .then((data) => {
        report1 += data;
        return fs.writeFile("data/final-report.txt", report1);
    })
    .catch(console.log);


// 9
const createUser = (username) => fs.mkdir(`data/users/${username}`, {recursive: true})


const writeProfile = (username, data) => fs.writeFile(`data/users/${username}/profile.txt`, data)


const readProfile = (username) => fs.readFile(`data/users/${username}/profile.txt`, "utf8")



createUser("alice")
    .then(() => writeProfile("alice", "alice\n32\n"))
    .then(() => readProfile("alice"))
    .then(console.log)
    .catch(console.log)