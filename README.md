# pwd-hash
Algorithm: `aes-256-cbc`
**Note:** Not recommended for password hashing ☢️ (Use `bcrypt` instead, soon we'll have our own 🤗). It's sole purpose is for communication encryption. 🚀
### To encrypt String
Use hash(param), where parameter is plain text.
Returns Encrypted String.
```
const stringHash = require('pwd-hash');
const hash = stringHash.hash('text');
```

### To decrypt encripted string
Use decrypt(param), where parameter is hashed string.
Returns Decrypted String.
```
const stringHash = require('pwd-hash');
const hash = stringHash.decrypt('hashed string');
```

### To verify string
Use verify(param1, param2), where parameter param1 is plain string and param2 is hashed string.
Returns Decrypted String.
```
const stringHash = require('pwd-hash');
const isSame = stringHash.verify('plain string','hashed string');
```