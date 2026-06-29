import { kMaxLength } from "buffer";
import fs from "fs";

const write = (file, msg) => {
    fs.writeFile(file, msg, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("File was created successfully");
    });
};

const read = (file) => {
    console.time("b");
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
            console.log("Could not read file");
        } else {
            console.log(data);
        }
        console.timeEnd("b");
    });
};

const readTextFile = (file, cb) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) return cb(err);
        cb(null, data);
    });
};

const append = (file, msg) => {
    console.time("a");
    fs.appendFile(file, msg, (err) => {
        if (err) {
            console.log(err);
        }
        console.timeEnd("a");
    });
};

const makeDirectory = (path) => {
    fs.mkdir(path, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Users folder created");
    });
};

fs.readFile("data/step1.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const data1 = data;
    fs.readFile("data/step2.txt", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const data2 = data;
        fs.readFile("data/step3.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            const data3 = data;
            console.log(data1, data2, data3);
        });
    });
});

write("data/report-title.txt", "Daily Report\n");
write("data/report-body.txt", "Everything is working\n");

fs.readFile("data/report-title.txt", (err, data) => {
    if (err) return console.log(err);
    const title = data;
    fs.readFile("data/report-body.txt", (err, data) => {
        if (err) return console.log(err);
        const body = data;
        const report = title + body;
        fs.writeFile("data/final-report.txt", report, (err) => {
            if (err) return console.log(err);
            console.log("Report created successfully");
        });
    });
});

fs.writeFile("data/original.txt", "Original file content\n", (err) => {
    if (err) return console.log(err);
    fs.readFile("data/original.txt", "utf-8", (err, data) => {
        if (err) return console.log(err);
        fs.writeFile("data/copy.txt", data, (err) => {
            if (err) return console.log(err);
            fs.readFile("data/copy.txt", "utf-8", (err, data) => {
                if (err) return console.log(err);
                console.log(data);
            });
        });
    });
});

// fs.writeFile("data/step1.txt", "Step 1 completed", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("1");
//     fs.writeFile("data/step2.txt", "Step 2 completed", (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("2");
//         fs.writeFile("data/step3.txt", "Step 3 completed", (err) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }
//             console.log("3");
//             console.log("All steps completed");

//         });
//     });
// });

// write("data/step1.txt", "Step 1 completed")
// write("data/step2.txt", "Step 2 completed");
// write("data/step3.txt", "Step 3 completed");
// fs.readdir("data/users", (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(data);
// });
// write("data/users/user1.txt", "Name: David\nAge: 25")
// makeDirectory("data/users")
// append("data/log.txt", "First action completed\nSecond action completed")

// read("data/log.txt");

// console.log("Start");
// read("data/message.txt");
// console.log("End");
// read("data/not-exist.txt");

// readTextFile("data/messages.txt", function (err, content) {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }

//     console.log(content);
// });
// append("data/message.txt", "This line was added later.");
// read("data/message.txt");
