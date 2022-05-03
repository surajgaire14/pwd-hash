# pwd-hash

### To Encrypt Password
use hash(), where parameter is plain text.
```
const stringHash = require('pwd-hash');
const hash = stringHash.hash('text');
```

### To Decrypt Password
use verify(), where parameter is hashed string.
```
const stringHash = require('pwd-hash');
const hash = stringHash.verify('hashed string');
```
