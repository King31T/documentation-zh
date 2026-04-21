# web3_sha3

*返回给定数据的 Keccak-256 哈希值（非标准化的 SHA3-256）。*

**参数**  

DATA - 要转换为 SHA3 哈希的数据

**返回**  

DATA - 给定字符串的 SHA3 结果。

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{"jsonrpc": "2.0", "id": 1, "method": "web3_sha3", "params": ["0x68656c6c6f20776f726c64"]}'

```

结果

```json

{"jsonrpc":"2.0","id":1,"result":"0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"}

```
