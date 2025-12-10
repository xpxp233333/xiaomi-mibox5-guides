```shell
?         - alias for 'help'
_aml_defenv_reserve- reserve some specified envs after defaulting env
adnl      - use Amlogic DNL protocol
adtimg    - manipulate dtb/dtbo Android image
amfc      - amfc subsystem
aml_key_burn- Burning keys from external device(sdmmc/udisk/memory) other than usb device
aml_sysrecovery- Burning with amlogic format package from partition sysrecovery
aml_update_env- aml_update_env
amlbootsta- get bootloader status in env
amlmmc    - AMLMMC sub system
amlsecurecheck- try bootloader/dtb/recovery secure check
avb       - avb
base      - print or set address offset
bc_test   - Amlogic BC test
bcb       - bcb
bl30_print_set- bl30 log print en set when build uboot with --noverbose
blkcache  - block cache diagnostics and control
bmp       - manipulate BMP image data
boot      - boot default, i.e., run 'bootcmd'
boot_cooling- cpu temp-system
bootd     - boot default, i.e., run 'bootcmd'
bootefi   - Boots an EFI payload from memory
bootelf   - Boot from an ELF image in memory
bootflow  - Boot flows
booti     - boot Linux kernel 'Image' format from memory
bootm     - boot application image from memory
bootp     - boot image via network using BOOTP/TFTP protocol
bootvx    - Boot vxWorks from an ELF image
build_message- print bl2/bl2e/bl2x/bl31/bl32/bl33 version
cc_test   - Amlogic CC test
check_ab  - check_ab
chpart    - change active partition of a MTD device
clk       - CLK sub-system
clkmsr    - Amlogic measure clock
close_uart- Close Uart TX/RX
cmp       - memory compare
coninfo   - print console devices and information
copy_slot_bootable- copy_slot_bootable
cp        - memory copy
crc32     - checksum calculation
cu        - Detect USB img and twilight_upgrade.ini to start usb burning
cvbs      - CVBS sub-system
cyclic    - Cyclic
dcache    - enable or disable data cache
ddr_asr_test- ddr_asr_test cmd arg1 arg2 arg3...
ddr_auto_fast_boot_check- ddr_fastboot_config cmd arg1 arg2 arg3...
ddr_auto_scan_drv- ddr_test_cmd cmd arg1 arg2 arg3...
ddr_cpu_test- ddr_test_cmd cmd arg1 arg2 arg3...
ddr_dfs_test- ddr_dfs_test cmd arg1 arg2 arg3...
ddr_fast_boot- ddr_fastboot_config cmd arg1 arg2 arg3...
ddr_g12_offset_data- ddr_g12_offset_data  1 0  0 0  1 3
ddr_spec_test- DDR test function ddr_spec_test 1 0x1080000 0x200000 1  3 1 1
ddr_test_cmd- ddr_test_cmd cmd arg1 arg2 arg3...
ddr_test_copy- ddr_test_copy function
ddrtest   - DDR test function
defenv_reserve- reserve some specified envs after defaulting env
dhcp      - boot image via network using DHCP/TFTP protocol
dmc_rw    - dmc read write function
dmc_vio_check- dmc sec violation reg check
dovi      - Dolby_vision sub-system
dsc       - dsc cmd
echo      - echo args to console
editenv   - edit environment variable
efuse     - efuse commands
efuse_mrk - eFUSE mrk checknum
efuse_mrk_long- eFUSE mrk long checknum
efuse_obj - eFUSE object program commands
efuse_user- efuse user space read write ops
emmc      - EMMC sub system
env       - environment handling commands
erase     - erase FLASH memory
ethloop   - ethloop     - loopback test using ethernet test package

exit      - exit script
ext2load  - load binary file from a Ext2 filesystem
ext2ls    - list files in a directory (default /)
ext4load  - load binary file from a Ext4 filesystem
ext4ls    - list files in a directory (default /)
ext4size  - determine a file's size
factory_provision- provision keybox

factorydata- Access the factorydata from Xiaomi Partition
false     - do nothing, unsuccessfully
fastboot  - run as a fastboot usb or udp device
fatinfo   - print information about filesystem
fatload   - load binary file from a dos filesystem
fatls     - list files in a directory (default /)
fatmkdir  - create a directory
fatrm     - delete a file
fatsize   - determine a file's size
fatwrite  - write file into a dos filesystem
fdt       - flattened device tree utility commands
flinfo    - print FLASH memory information
fstype    - Look up a filesystem type
fstypes   - List supported filesystem types
g12_d2pll - g12_d2pll 1300  1 0x10 0
get_avb_mode- get_avb_mode
get_boot_part- get part name to load the bootable part
get_bootloaderversion- print bootloader version
get_cpuid - read cpuid to env cpu_id
get_rebootmode- get reboot mode
get_system_as_root_mode- get_system_as_root_mode
get_valid_slot- get_valid_slot
gpio      - query and control gpio pins
gzwrite   - unzip and write memory to block device
hdmitx    - HDMITX sub-system
help      - print command description/usage
i2c       - I2C sub-system
icache    - enable or disable instruction cache
imgread   - Read the image from internal flash with actual size
imxtract  - extract a part of a multi-image
ini       - parse an ini file in memory and merge the specified section into the env
ini_model - parse ini file by env model_name
itest     - return true/false on integer compare
jtagoff   - disable jtag
jtagon    - enable jtag
keyman    - Unify key ops interfaces based dts cfg
keyunify  - key unify sub-system
leds_state- manage amlogic LEDs
ln        - Create a symbolic link
load      - load binary file from a filesystem
loop      - infinite loop on address range
ls        - list files in a directory (default /)
lzmadec   - lzma uncompress a memory region
md        - memory display
mdio      - MDIO utility commands
mii       - MII utility commands
mm        - memory modify (auto-incrementing address)
mmc       - MMC sub system
mmcinfo   - display MMC info
model_list- list ini model name
msleep    - Sleep xxx MS
mtd       - MTD utils
mtdparts  - define flash/nand partitions
mw        - memory write (fill)
net       - NET sub-system
nfs       - boot image via network using NFS protocol
nm        - memory modify (constant address)
os_ident  - identify OS type
osd       - osd sub-system
panic     - Panic with optional message
part      - disk partition related commands
phyreg    - ethernet phy register read/write/dump
ping      - send ICMP ECHO_REQUEST to network host
pinmux    - show pin-controller muxing
powerset  - power on/off a certain power domain
powershow - show the power domain status , 0: on; 1: off
printenv  - print environment variables
protect   - enable or disable FLASH write protection
pxe       - commands to get and boot from pxe files
random    - fill memory with random pattern
rarpboot  - boot image via network using RARP/TFTP protocol
rdext4pic - read logo bmp from ext4 part
readMetadata- readMetadata
read_temp - cpu temp-system
reboot    - set reboot mode and reboot system
reset     - Perform RESET of the CPU
rpmb_init - RPMB sub-system
rpmb_state- RPMB sub-system
rsvmem    - reserve memory
run       - run commands in an environment variable
saradc    - saradc sub-system
save      - save file to a filesystem
saveenv   - save environment variables to persistent storage
sdc_burn  - Burning with amlogic format package in sdmmc 
sdc_update- Burning a partition with image file in sdmmc card
set_active_slot- set_active_slot
set_roll_flag- set_roll_flag
set_usb_boot- set usb boot mode
setenv    - set environment variables
showvar   - print local hushshell variables
size      - determine a file's size
sleep     - delay execution for some time
store     - STORE sub-system:
sysboot   - command to get and boot from syslinux files
systemoff - system off 
systemsuspend- system suspend 
temp_triming- cpu temp-system
test      - minimal test like /bin/sh
tftpboot  - load file via network using TFTP protocol
true      - do nothing, successfully
unlz4     - lz4 uncompress a memory region
unpackimg - un pack logo image into pictures
unzip     - unzip a memory region
update_dt - update_dt
update_env_part- update env part with argv list
update_tries- update_tries
usb       - USB sub-system
usb_burn  - Burning with amlogic format package in usb 
usb_update- Burning a partition with image file in usb host
usbboot   - boot from USB device
version   - print monitor, compiler and linker version
vout      - VOUT sub-system
vout2     - VOUT2 sub-system
vout3     - VOUT3 sub-system
vpp       - vpp sub-system
vpu       - vpu sub-system
watermark_init- initialize watermark
wdt       - Watchdog sub-system
```