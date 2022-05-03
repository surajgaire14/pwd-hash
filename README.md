# pwd-hash

### To Encrypt Password
use hash(), where first parameter is plain password, and second parameter is security key.

For Higher Security: use `const Securitykey = crypto.randomBytes(32);` and store it in .env file.
```
const pwdHash = require('pwd-hash');
const hash = pwdHash.hash('password', 'securityKey');
```

### To Decrypt Password
use verify(), where first parameter is hashed password, and second parameter is security key.
```
const pwdHash = require('pwd-hash');
const hash = pwdHash.verify('hashed password', 'securityKey');
```
