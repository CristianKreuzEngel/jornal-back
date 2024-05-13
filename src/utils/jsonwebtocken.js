const jwt = require("jsonwebtoken");
const fs = require('fs');

const payload = { userId: 123, permissions: ["read", "write"]};

const privateKey = fs.readFileSync("./private_key.pem");

const publictKey = fs.readFileSync("./public_key.pem");
// const token = jwt.sign(payload, privateKey, { algorithm: "RS256"})
// console.log(token)

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicGVybWlzc2lvbiI6WyJyZWFkIiwid3JpdGUiXSwiaWF0IjoxNzExMDY3NzM1fQ.XPw1tlUjEKVa4n9EVQC05JTCfqSj2xIoVoiPt3LqVa6NhoGXyYs7znq4S_wEJ5Yq5tZVV_yZ5TSANrxPsYa95P7T8ZO7INWcMYy2h4Hp_1hMWvK9501-qQGpM8K7VctNVFTRoersL_uyfbO1dxsO3E1u8XWUC7oVImSscviYEyqa6sMordg-fIY9JqL-nql_p8wEnt6TMIu2BufABb6j83rBAdqgG_9sI-f-DI5vSfae1B0wyMwse3dJEv7n3Rz___QwkZqFLUe6Lsht-rIM5rUIqtHeSnQeBpiumZhGrOS3DehZ-6b4vqpi-3JVlyuAeU3fdwzx-xSoP2KmKafoZA'

try {
    const decoded = jwt.verify(token, publictKey, { algorithms: ["RS256"]});
    console.log("Decoded", decoded)
} catch (err) {
    console.error("Verification failed", err)
}