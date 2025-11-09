# 小米盒子 5 (MOB2MB-5P)

> [!NOTE]
> ### 注意
> - 本文档中的设备信息基于作者自有设备及官方公开资料整理。
> - 不同批次或渠道的设备在系统版本、硬件或外观上可能存在差异，相关内容仅供参考，请以实际情况为准。

## 目录
- [规格参数](#规格参数)
- [额外信息](#额外信息)
- [设备外观](#设备外观-来自于官方)
- [主板照片](#主板照片)
- [内部部分元器件特写](#内部部分元器件特写)
- [UART连接信息](#uart连接信息)
- [Root / 备份教程](#root--备份教程)

## 规格参数
- 操作系统：Xiaomi HyperOS (Android 14)
- SoC：Amlogic S905X5M
- CPU：四核 Cortex-A55 (最高主频 2.5 GHz)
- GPU：ARM Mali-G310 V2
- RAM：2GB
- ROM：32GB
- 蓝牙：5.2
- 无线网络：Wi-Fi 6 (2.4GHz/5GHz)
- 尺寸：97 x 97.1 x 17 mm
- 重量：91.6 g
- USB 2.0 x 1
- HDMI x 1

_※ 说明：规格参数信息来自于官方_

## 额外信息
- 设备代号：darkknight
- 系统内显示型号：MiTV-AZFU0
- 出厂系统版本：UD2A.240505.001.W1.OS2.0.7.0.UZFAABX
- 出厂内核版本：5.15.153-android14-11-gf80308c320bc-abOS2.0.7.0.UZFAABX
- 指纹: Xiaomi/darkknight/darkknight:14/UD2A.240505.001.W1/OS2.0.7.0.UZFAABX:user/release-keys
- 出厂安全补丁级别：2024-11-01
- 出厂 Bootloader 版本：01.01.250317.222939

_※ 说明：此处的信息均来自于作者自己的设备，不同生产批次或销售渠道的设备，其预装的系统版本可能存在差异，相关内容仅供参考，请以实际情况为准。_

## 设备外观 (来自于官方)

<details>

<summary>点击此处来查看照片</summary>

<img height="1000" src="./images/device/mibox5.png">

_※ 说明：由于官方并未提供 小米盒子5 的接口照片，因此接口照片来自于与 小米盒子5 外观一样的 Xiaomi TV Box S (3rd Gen)，照片仅供参考，请以实物为准。_
</details>

## 主板照片

### 主板正面 (屏蔽罩未移除)
<details>

<summary>点击此处来查看照片</summary>

<img height="1000" src="./images/device/mainboard_front_shield.png">

</details>

### 主板正面
<details>

<summary>点击此处来查看照片</summary>

<img height="1000" src="./images/device/mainboard_front.png">

</details>

### 主板反面 (屏蔽罩未移除)
<details>

<summary>点击此处来查看照片</summary>

<img height="1000" src="./images/device/mainboard_back_shield.png">

</details>

### 主板反面
<details>

<summary>点击此处来查看照片</summary>

<img height="1000" src="./images/device/mainboard_back.png">

</details>

## 内部部分元器件特写

### SoC：晶晨 S905X5M
<details>

<summary>查看 SOC 特写</summary>

<img height="500" src="./images/device/soc.png">

</details>

### eMMC：长江存储 YMEC6A2TB1A2C3
<details>

<summary>查看 eMMC 特写</summary>

<img height="500" src="./images/device/emmc.png">

</details>

### RAM：南亚 NT5AD512M16C4-JR
<details>

<summary>查看 RAM 特写</summary>

<img height="500" src="./images/device/ram.png">

</details>

### Wifi+BT模块：欧智通 K265B-UU
<details>

<summary>查看 Wifi+BT模块 特写</summary>

<img height="500" src="./images/device/wifi_bt_module.png">

</details>

## UART连接信息
> [!WARNING] 
> 不同生产批次或销售渠道的设备其行为和相关定义可能会有所不同，此处提供的信息仅供参考，请以实际情况为准。 
>
> 如你选择继续则代表你已经充分了解并可自行承担全部风险，并自愿承担责任，作者对此操作产生的任何后果概不负责。

<img height="200" src="./images/hdmi_connector_pinout.svg">

### 引脚定义
| HDMI 引脚编号 | 对应 UART 信号 | 说明 |
| ------------ | ------------- | ----- |
| 2  | RX (接收)| 连接到 USB-TTL 的 TX 引脚 |
| 14 | TX (发送)| 连接到 USB-TTL 的 RX 引脚 |
| —  | GND (地) | HDMI 屏蔽层或任意接地金属部分 |
| —  | —        | 请勿连接其他引脚，以避免损坏设备 |

### 连接参数
| 参数   | 值     |
| ------ | ------ |
| 波特率 | 921600 |
| 数据位 | 8 |
| 校验位 | 无 |
| 停止位 | 1 |
| 流控  | 无 |



> [!NOTE]
> ### 注意
> - 如果出现了乱码的情况，请保证你的设备已良好接地，并且检查波特率是否为921600。
> - 建议在通电前检查相关线缆是否正确连接，以避免损坏设备。
> - 使用常规的 HDMI 线缆也可以将 UART 信号引出，但该方法不仅过程麻烦，还会永久损坏一根线缆，因此推荐通过使用 HDMI免焊头 来进行连接。

_※ 说明：_
- _此部分使用的图片来自于 [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:HDMI_Connector_Pinout.svg)_
- _UART 引脚信息参考自 [XDA上的这篇帖子](https://xdaforums.com/t/solved-help-debricking-mi-box-s-2nd-gen-mdz-28-aa.4655643/)，该帖面向于 Xiaomi TV Box S (2nd Gen)，因此请注意与 小米盒子5 的差异。_
- _相关内容均已在 小米盒子5 的实机上完成相关测试。_
- _不同生产批次或销售渠道的设备其行为和相关定义可能会有所不同，此处提供的信息仅供参考，请以实际情况为准。_

## Root / 备份教程

> [!CAUTION]
> ### 风险提示
> 下方列出的部分内容涉及设备底层操作 (如解锁 Bootloader、修改系统分区等) ，存在较高风险，并可能对设备造成不可预估的影响，可能导致：
> - 设备永久性变砖
> - 硬件损坏
> - 数据丢失
> - 失去官方保修资格
> - 无法正常接收或安装 OTA 系统更新
> - 设备被远程入侵
> - 数据被恶意软件清除或盗取
> - 某些应用检测到 Root 状态后拒绝运行
> - DRM 失效 (例如 Widevine 安全等级降级)
> - 某些应用检测到 DRM 失效后拒绝播放受保护内容
>
> 在非必要情况下不建议执行相关操作，如你选择继续则代表你已经充分了解并可自行承担全部风险，并自愿承担责任，作者对此操作产生的任何后果概不负责。

### 目录
- [如何解除 小米盒子 5 (MOB2MB-5P) 的 Bootloader 锁定](unlock_bootloader.md)
- [如何通过 DSU 来备份 小米盒子 5 (MOB2MB-5P) 的系统镜像](backup.md)
- [如何 Root 小米盒子 5 (MOB2MB-5P)](root.md)