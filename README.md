# 小米盒子 5 (MOB2MB-5P)

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

_*注：规格参数信息来自于官方_

## 外观 (来自于官方)

<details>

<summary>点击此处来查看照片</summary>

<img height="1000" src="./images/device/mibox5.png">

_*注：由于官方并未提供 小米盒子5 的接口照片，因此接口照片来自于与 小米盒子5 外观一样的 Xiaomi TV Box S (3rd Gen)，仅供参考，请以实物为准。_
</details>

## 主板照片 [WIP]


## 内部部分元器件特写

### SOC：晶晨 S905X5M
<details>

<summary>查看 SOC 特写</summary>

<img height="500" src="./images/device/soc.png">

</details>

### EMMC：长江存储 YMEC6A2TB1A2C3
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
小米盒子 5 的 UART 信号被厂商引到了 HDMI 接口的引脚中，因此无需拆机即可通过 HDMI免焊头 实现连接。

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
> - 建议在通电前检查 HDMI 插头的引脚对应，避免短路。
> - 使用常规的 HDMI 线缆也可以将 UART 信号引出，但该方法不仅过程麻烦，还会永久损坏一根线缆，在此文档中不做介绍。

_*注：此部分使用的图片来自于 [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:HDMI_Connector_Pinout.svg)。_

## 官方宣传图 [WIP]


