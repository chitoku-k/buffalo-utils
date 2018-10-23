buffalo-utils
=============

Shell utilities for managing your Buffalo AirStation

This version is designed for AirStation series: WHR-1166DHP, WHR-1166DHP2, WHR-1166DHP3, WHR-1166DHP4.
For those who have a different AirStation, refer to [https://github.com/chitoku-k/buffalo-utils/tree/master](https://github.com/chitoku-k/buffalo-utils/tree/master).

## How to Use

Minimum requirement follows:

- Bash
- Curl

## Core Components

### buffalo-login

Logs in. Requires a raw password.

Call `buffalo-login` with the hostname.

```sh
$ echo 'your-password' | ./buffalo-login '192.0.2.1'
```

### buffalo-logout

Logs out. Requires nothing.

Call `buffalo-logout` with the hostname.

```sh
$ ./buffalo-logout '192.0.2.1'
```

### buffalo-reboot

Reboots. Requires nothing. Note that this results in being logged out.

Call `buffalo-reboot` with the hostname.

```sh
$ ./buffalo-reboot '192.0.2.1'
```
