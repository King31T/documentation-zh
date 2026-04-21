# eth_getBlockReceipts

*通过`blockNumber`查询指定区块中的所有交易收据（Transaction Receipts）。对于创世块，轻节点已经裁剪的块和未生产的块返回`null`。*

**参数**

String - `blockNumber`：支持十六进制字符串表示的区块号、blockHash(有无0x开头均支持)或标签（ "latest"、"earliest"、"finalized"）三种类型

**返回值**

An array of objects - 交易收据对象的数组，交易收据对象同[eth_getTransactionReceipt](eth_getTransactionReceipt.md)的返回值

**示例**

```curl

curl -X POST 'https://api.shasta.trongrid.io/jsonrpc' --data '{

	"jsonrpc": "2.0",

	"method": "eth_getBlockReceipts",

	"params": ["0x311110"],

	"id": 64

}'

```

结果

```json
{
    "jsonrpc": "2.0",
    "id": 64,
    "result": [
      {
        "blockHash": "0x0000000000311110a1bdce5bbd0bd790c27ac9681f1b3db6abd62bcc1c05dbe9",
        "blockNumber": "0x311110",
        "contractAddress": null,
        "cumulativeGasUsed": "0x13dc7",
        "effectiveGasPrice": "0xa",
        "from": "0x702f9b337aeb8be3e767345cc4954f20fa100b21",
        "gasUsed": "0x13dc7",
        "logs": [],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "status": "0x1",
        "to": "0x970cabfb1ca0cdd5dae19e309f0226061ed28753",
        "transactionHash": "0x2bd303c0e75a705ee51fb16695dd7654588db968bc1735b9f7d8f6ce6b56a41b",
        "transactionIndex": "0x0",
        "type": "0x0"
      }
    ]
}
```
