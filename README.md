buffalo-utils
=============

Shell utilities for managing your Buffalo AirStation

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
