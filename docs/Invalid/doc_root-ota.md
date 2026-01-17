---
next: false
prev: false
DocNotice:
  enabled: true
  dismissible: false
  text: '<p>此文档中的内容为无效内容，仅用于存档。</p><p>请勿参考此文档中的任何内容。</p>'
---
> [!CAUTION] 警告
> 此文档的主要内容已被证明为**无效内容**，仅用于存档。\
> 请勿参考此文档中的任何内容。
> 
> 若你选择继续，则代表你已经充分了解并可自行承担全部风险，并自愿承担责任，作者对此操作产生的任何后果概不负责。
>
> ### 无效原因
> 小米电视 / 盒子的 HyperOS OTA 在安装完成后会立即重启系统，用户无法在重启前通过 Magisk 执行“安装到未使用的槽位 (OTA 后)”操作，因此本方案在当前版本的 HyperOS 上不成立。

> [!NOTE] 说明
> 小米盒子 5 使用了 **虚拟 A/B 系统更新** 机制\
> 因此，在安装更新前需要进行一些额外操作才能保证 Root 在更新后也能够正常使用

> [!TIP] 什么是 A/B 系统更新?
> 旧版 A/B 系统更新（也称为无缝更新）的目标是确保在无线下载 (OTA) 更新期间在磁盘上保留一个可正常启动和使用的系统。采用这种方式可以降低更新之后设备无法启动的可能性，这意味着用户需要将设备送到维修和保修中心进行更换和刷机的情况将会减少。
>
> ### 什么是 虚拟 A/B 系统更新?
> 虚拟 A/B 是在旧版 A/B 更新和非 A/B 的基础上构建的；后者已在 Android 15 中废弃，以减少更新的空间开销。\
> 虚拟 A/B 实际上并没有额外的动态分区槽位，相反，增量会写入快照，然后在确认成功启动后合并到基本分区。虚拟 A/B 使用 Android 专用的快照格式。
> 
> 如需获取更多信息，请参阅: [Android Developers](https://source.android.com/docs/core/ota)


如果你收到了 OTA 更新，请按照以下方法来进行操作
1. 打开设置，并转到 **关于本机 > 系统版本**

   <img height="300" src="/images/screenshots/app_settings_update.png">

2. 点击"下载更新"，并等待更新下载完成

   <img height="300" src="/images/screenshots/app_update_1.png">

3. 下载完成后不要点击界面中的"立即更新"按钮，请立即退出更新界面并返回桌面，然后打开 Magisk 应用

   <img height="300" src="/images/screenshots/app_update_2.png">

   <img height="300" src="/images/screenshots/applist_magisk.png">

   或是使用使用下列命令来打开 Magisk 应用:
   ```shell
   adb shell am start com.topjohnwu.magisk/com.topjohnwu.magisk.ui.MainActivity
   ```

4. 进入 Magisk 应用主界面后点击 **安装 > 安装到未使用的槽位 (OTA后) > 开始**

   <img height="300" src="/images/screenshots/app_magisk_install_3.png">

   点击后系统将自动执行安装安装过程，并在界面中显示安装日志
   
5. 重新打开系统更新界面，并点击重启

6. 进入系统后，打开 Magisk 应用来确认安装状态

至此，你已经完成 OTA 更新过程

下图为正常安装的 Magisk 应用主界面

<img height="300" src="/images/screenshots/app_magisk.png">

> [!WARNING] 注意
> 当设备完成 OTA 更新后，建议立即备份相关系统镜像，以备不时之需。

::: info 说明
- A/B 系统更新 的介绍引自 [Android Developers](https://source.android.com/docs/core/ota/ab)。
- 若更新后 Magisk 状态异常，可尝试重新备份并修补新版本的 init_boot.img 来刷入，以恢复 Root。
:::

> [!CAUTION] 警告
> 此文档的主要内容已被证明为**无效内容**，仅用于存档。\
> 请勿参考此文档中的任何内容。
> 
> 若你选择继续，则代表你已经充分了解并可自行承担全部风险，并自愿承担责任，作者对此操作产生的任何后果概不负责。
>
> ### 无效原因
> 小米电视 / 盒子的 HyperOS OTA 在安装完成后会立即重启系统，用户无法在重启前通过 Magisk 执行“安装到未使用的槽位 (OTA 后)”操作，因此本方案在当前版本的 HyperOS 上不成立。