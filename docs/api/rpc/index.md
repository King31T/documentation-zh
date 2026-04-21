# gRPC API

## 1. 概述

gRPC 是一个现代、开源、高性能的 RPC 框架，基于 HTTP/2 协议，并使用 Protocol Buffers（Protobuf）进行数据序列化。与传统的 HTTP/1.1 RESTful API 相比，gRPC 提供更高的性能、更低的延迟、更小的数据包、双向流式传输能力，以及强大的代码生成机制，使其成为与区块链节点进行高效稳定交互的理想选择。

TRON 提供了一套基于 gRPC 的 API 接口，允许开发者以高性能和强类型的方式与 TRON 节点交互。本文将以 Java 为例，详细说明如何完成基本的 gRPC 调用，从获取 .proto 文件到完成整个过程。

**有关 API 的具体定义，请参阅以下链接：**
[api/api.proto](https://github.com/tronprotocol/protocol/blob/master/api/api.proto)

!!! note
    SolidityNode 已废弃。现在 FullNode 支持 SolidityNode 的所有 RPC。新开发者应只部署 FullNode。

大多数 gRPC API 通过 `wallet` 服务访问。部分 API 也支持 `walletsolidity` 服务，该服务仅提供对**已确认链上数据**的访问。每个 API 页面都会说明其支持的服务。

## 2. 了解 TRON 的 gRPC 接口和 Protocol Buffers

TRON 中所有链上操作和数据查询都通过 gRPC 服务公开。这些服务的定义位于 .proto 文件中。**Protocol Buffers** 是一种语言无关、平台无关、可扩展的结构化数据序列化机制，用于定义服务接口和消息结构。

通过 .proto 文件，您可以：

* **定义服务：** 包含客户端可以调用的方法（RPC）。
* **定义消息：** 描述请求和响应的数据结构。

gRPC 工具链根据这些 .proto 文件自动生成客户端和服务器代码，其中包含与 TRON 节点通信所需的所有底层逻辑。

## 3. 完整的 gRPC 调用流程

### 3.1 获取 TRON 的 .proto 文件

TRON 官方在 GitHub 仓库中维护所有 .proto 文件，这些文件是生成 gRPC 客户端代码的基础。

1. **访问 TRON Protocol 仓库：**
   打开 TRON 官方 `protocol` GitHub 仓库：[https://github.com/tronprotocol/protocol](https://github.com/tronprotocol/protocol)

2. **下载 .proto 文件：**
   您可以在 `core/src/main/proto` 目录下找到核心 .proto 文件，例如：

   * `api/api.proto`：定义主要的 gRPC 服务和方法（如 `Wallet` 服务）。
   * `core/Tron.proto`：定义 TRON 核心数据结构（如 `Block`、`Transaction`、`Account` 等）。
   * `core/contract/account_contract.proto`、`core/contract/asset_issue_contract.proto` 等：定义各种系统合约操作的消息结构。

### 3.2 生成 gRPC 客户端代码

获取 .proto 文件后，需要生成 Java 客户端代码。

为避免影响本地其他设置和项目，并简化生成过程，强烈建议在 Java 项目中使用 Maven 或 Gradle 的 Protobuf 插件。

**Maven（`pom.xml`）配置说明：**

在项目的 `pom.xml` 文件中配置必要的依赖项和构建插件。

通常包括用于网络通信的 **`grpc-netty-shaded`**、用于 Protobuf 消息处理的 **`grpc-protobuf`**，以及用于 gRPC 客户端存根的 **`grpc-stub`**。

同时，还需要添加 **Protobuf Java 运行时库**，包括 `protobuf-java` 和 `protobuf-java-util`。此外，还需要配置 **`protobuf-maven-plugin`**，用于自动检测操作系统、指定 Protobuf 编译器和 gRPC Java 插件的 Maven 坐标，并设置 .proto 文件的源目录，以便在构建过程中自动生成 Java 代码。

**代码生成步骤：**
将从 TRON GitHub 下载的 .proto 文件放入项目配置的源目录（Maven 项目为 `src/main/proto`），然后在项目根目录执行相应的构建命令（Maven 为 `mvn clean install`，Gradle 为 `gradle build`），构建工具的 Protobuf 插件将自动生成所需的 Java gRPC 客户端代码。

**Gradle（`build.gradle`）配置说明：**

Gradle 所需的依赖项与 Maven 基本相同。以下是配置文件示例（请根据实际情况修改版本号）：

```groovy
dependencies {
    implementation 'io.github.tronprotocol:trident:0.9.2'
    
    implementation 'io.grpc:grpc-netty-shaded:1.64.0'
    implementation 'io.grpc:grpc-protobuf:1.64.0'
    implementation 'io.grpc:grpc-stub:1.64.0'
    implementation 'com.google.protobuf:protobuf-java:3.25.1' 
}
```

配置完成后，使用 `gradle clean build`。

### 3.3 构建 gRPC 客户端并发起调用

代码生成后，可以在 Java 项目中使用这些生成的类来构建 gRPC 客户端，并与 TRON 节点通信。

#### 3.3.1 核心概念

* **`ManagedChannel`：** 表示与 gRPC 服务器的连接，管理底层网络连接。
* **`Stub`：** 从 .proto 文件生成的客户端接口，提供调用 gRPC 服务中定义方法的便捷方式。常见类型包括 `BlockingStub`（阻塞）和 `FutureStub`（异步）。
* **TRON 节点端点：** TRON 的 gRPC 服务通常运行在 `50051` 端口。访问 TronGrid 公共节点可能需要 API Key。

#### 3.3.2 调用流程

调用 gRPC 方法的基本流程如下：

1. **创建 `ManagedChannel`：** 配置目标 TRON 节点的地址和端口，建立与 gRPC 服务器的连接。
2. **创建 `Stub`：** 使用从 .proto 文件生成的 `WalletGrpc` 类创建相应的存根实例，例如 `WalletGrpc.newBlockingStub(channel)` 用于阻塞调用。
3. **附加 API Key（如需）：** 如果使用 TronGrid 等需要 API Key 的公共节点服务，通常需要将 API Key 作为元数据添加到请求头中。
4. **调用方法：** 使用创建的存根实例调用 TRON gRPC 服务中定义的方法，传入适当的请求消息。
5. **处理响应：** 接收并解析从 TRON 节点返回的响应消息。
6. **关闭 `ManagedChannel`：** 应用结束或不再需要连接时，务必关闭 `ManagedChannel` 以释放网络资源。

**Trident** 高度封装了上述 gRPC 交互的所有复杂步骤，尤其是**交易构建、签名和广播**，使开发者无需处理这些底层细节。以下是 Trident 中的相关源码实现（仅展示 `ApiWrapper` 类的部分代码，完整代码请参阅：[ApiWrapper.java](https://github.com/tronprotocol/trident/blob/main/core/src/main/java/org/tron/trident/core/ApiWrapper.java)）：

```java
package org.tron.trident.core;

import com.google.protobuf.ByteString;
import com.google.protobuf.Message;
import io.grpc.ClientInterceptor;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.Metadata;
import io.grpc.stub.MetadataUtils;

import org.tron.trident.api.WalletGrpc;
import org.tron.trident.api.WalletSolidityGrpc;
import org.tron.trident.core.key.KeyPair;
import org.tron.trident.proto.Chain.Transaction;
import org.tron.trident.proto.Contract.TransferContract;
import org.tron.trident.proto.Response.TransactionExtention;

public class ApiWrapper implements Api {

    public final WalletGrpc.WalletBlockingStub blockingStub;
    public final WalletSolidityGrpc.WalletSolidityBlockingStub blockingStubSolidity;
    public final KeyPair keyPair;
    public final ManagedChannel channel;
    public final ManagedChannel channelSolidity;

    public ApiWrapper(
        String grpcEndpoint,
        String grpcEndpointSolidity,
        String hexPrivateKey,
        String apiKey
    ) {
        channel = ManagedChannelBuilder.forTarget(grpcEndpoint).usePlaintext().build();
        channelSolidity = ManagedChannelBuilder.forTarget(grpcEndpointSolidity)
            .usePlaintext()
            .build();

        Metadata header = new Metadata();
        Metadata.Key<String> key = Metadata.Key.of(
            "TRON-PRO-API-KEY",
            Metadata.ASCII_STRING_MARSHALLER
        );
        header.put(key, apiKey);

        blockingStub = WalletGrpc.newBlockingStub(channel).withInterceptors(
            MetadataUtils.newAttachHeadersInterceptor(header)
        );
        blockingStubSolidity = WalletSolidityGrpc.newBlockingStub(channelSolidity).withInterceptors(
            MetadataUtils.newAttachHeadersInterceptor(header)
        );

        keyPair = new KeyPair(hexPrivateKey);
    }

    @Override
    public TransactionExtention transfer(String fromAddress, String toAddress, long amount)
        throws IllegalException {
        ByteString rawFrom = parseAddress(fromAddress);
        ByteString rawTo = parseAddress(toAddress);

        TransferContract transferContract = TransferContract.newBuilder()
            .setOwnerAddress(rawFrom)
            .setToAddress(rawTo)
            .setAmount(amount)
            .build();

        return createTransactionExtention(
            transferContract,
            Transaction.Contract.ContractType.TransferContract
        );
    }

    @Override
    public Transaction signTransaction(TransactionExtention txnExt, KeyPair keyPair) {
        byte[] txId = txnExt.getTxid().toByteArray();
        byte[] signature = KeyPair.signTransaction(txId, keyPair);
        return txnExt
            .getTransaction()
            .toBuilder()
            .addSignature(ByteString.copyFrom(signature))
            .build();
    }

    @Override
    public String broadcastTransaction(Transaction txn) throws RuntimeException {
        Response.TransactionReturn ret = blockingStub.broadcastTransaction(txn);
        if (!ret.getResult()) {
            String errorMessage = new String(ret.getMessage().toByteArray());
            String message = resolveResultCode(ret.getCodeValue()) + ", " + errorMessage;
            throw new RuntimeException(message);
        } else {
            byte[] txId = calculateTransactionHash(txn);
            return ByteArray.toHexString(txId);
        }
    }

    public void close() {
        channel.shutdown();
        channelSolidity.shutdown();
    }
}
```

## 4. 使用 Trident-java

在实际开发中，手动调用 gRPC 接口可能相当繁琐。Trident 是 TRON 官方提供的 Java SDK，已封装大部分 gRPC 调用工作，包括客户端构建、消息序列化/反序列化，以及交易签名和广播等复杂操作。如需更便捷地与 TRON 交互，可直接参考或使用 Trident 进行 gRPC 调用。

## 5. API 分类

1. [账户管理](account-management/getaccount.md) — 账户查询、余额和多签验证
2. [资产与代币](assets-and-tokens/createassetissue.md) — TRC-10 资产发行、转账和查询
3. [区块操作](block-operations/getblock.md) — 按编号、ID 和范围查询区块
4. [网络信息](network-information/getbandwidthprices.md) — 节点信息、链参数和价格
5. [资源管理](resource-management/cancelallunfreezev2.md) — 能量、带宽、质押和委托
6. [智能合约](smart-contracts/clearcontractabi.md) — 合约部署、触发和查询
7. [交易操作](transaction-operations/getpendingsize.md) — 交易查询和待处理池
8. [钱包操作](wallet-operations/accountpermissionupdate.md) — 账户创建、转账和广播
9. [超级代表与治理](witness-and-governance/createwitness.md) — 见证人管理、投票、提案和奖励

## 6. 相关参考和文档

* **TRON Protocol Buffers 定义：**
  [https://github.com/tronprotocol/protocol](https://github.com/tronprotocol/protocol)
* **gRPC Java 官方文档：**
  [https://grpc.io/docs/languages/java/](https://grpc.io/docs/languages/java/)
* **Protocol Buffers 官方文档：**
  [https://developers.google.com/protocol-buffers](https://developers.google.com/protocol-buffers)
* **TronGrid 官方网站（获取 API Key）：**
  [https://www.trongrid.io/](https://www.trongrid.io/)
* **Trident GitHub 仓库：**
  [https://github.com/tronprotocol/trident/](https://github.com/tronprotocol/trident/)
* **Trident 文档：**
  [https://tronprotocol.github.io/trident/](https://tronprotocol.github.io/trident/)
