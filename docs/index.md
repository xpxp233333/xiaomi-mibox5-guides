---
next: false
---

# 小米盒子5 (MOB2MB-5P)
此文档记录了小米盒子5 (MOB2MB-5P) 的部分信息\
如硬件信息、实机照片、拆机照片、UART 连接信息、Android 分区表、如何 Root 等相关信息

> [!NOTE]
> 本文档中的设备信息基于作者自有设备及官方公开资料整理。\
> 不同批次或渠道的设备在系统版本、硬件或外观上可能存在差异，相关内容仅供参考，请以实际情况为准。\
> 此文档与小米公司没有任何关联，在阅读相关内容前请自行判断风险

## 文档目录
### 硬件信息
- [规格参数](./hardware#规格参数)
- [额外信息](./hardware#额外信息)
- [设备外观](./hardware#设备外观-来自于官方)
- [主板照片](./hardware#主板照片)
- [内部部分元器件特写](./hardware#内部部分元器件特写)
- [Android 分区信息](./hardware#android-分区信息)
- [UART连接信息](./hardware#uart连接信息)

> [!CAUTION] 警告
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

### 解除 Bootloader 锁定 <Badge type="danger" text="谨慎操作" />
- [小米盒子信息](./unlock_bootloader#小米盒子信息)
- [前置要求](./unlock_bootloader#前置要求)
- [启用 ADB 调试 功能](./unlock_bootloader#启用-adb-调试-功能)
- [连接电脑并授权 ADB](./unlock_bootloader#连接电脑并授权-adb)
- [打开 OEM 解锁 选项](./unlock_bootloader#打开-oem-解锁-选项)
- [进入 Fastboot 模式并解锁 Bootloader](./unlock_bootloader#进入-fastboot-模式并解锁-bootloader)
- [额外内容: 重新锁定 Bootloader](./unlock_bootloader#额外内容-重新锁定-bootloader) <Badge type="tip" text="可选操作" />

### 通过 DSU 来备份分区 <Badge type="danger" text="谨慎操作" />
- [小米盒子信息](./backup#小米盒子信息)
- [前置要求](./backup#前置要求)
- [制作并安装 DSU 镜像](./backup#制作并安装-dsu-镜像)
- [重启到 DSU 系统并执行备份操作](./backup#重启到-dsu-系统并执行备份操作)
- [删除已安装的 GSI](./backup#删除已安装的-gsi) <Badge type="tip" text="可选操作" />

### 如何 Root <Badge type="danger" text="谨慎操作" />
- [小米盒子信息](./root#小米盒子信息)
- [前置要求](./root#前置要求)
- [提取 init_boot 镜像](./root#提取-init_boot-镜像)
- [修补并刷入 init_boot 镜像](./root#修补并刷入-init_boot-镜像)
- [~~额外内容: 保留 Root 来安装 OTA 更新~~](./root#额外内容-保留-root-来安装-ota-更新) <Badge type="danger" text="未实机验证" /> <Badge type="danger" text="WIP" /> <Badge type="tip" text="可选操作" />

## 官方页面

- [小米商城页面](https://www.mi.com/shop/buy/detail?product_id=21291)
- [使用说明书](https://home.mi.com/views/introduction.html?region=cn&pdid=24752&model=xiaomi.tvbox.5b1)
