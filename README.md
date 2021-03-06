buffalo-utils
=============

Shell utilities for managing your Buffalo AirStation

This version is designed for AirStation series: WXR-1750DHP2, WXR-1751DHP2.
For those who have a different AirStation, refer to [https://github.com/chitoku-k/buffalo-utils/tree/plain-sjis](https://github.com/chitoku-k/buffalo-utils/tree/plain-sjis).

## How to Use

The utilities are divided into two parts: authenticator and core components.
Minimum requirements are different from each other as follows:

- Authenticator (buffalo-setup)
  - Bash
  - Curl
  - Node.js
- Core Components (buffalo-advanced, buffalo-log, buffalo-login, etc)
  - Bash
  - Curl

Authenticator outputs encrypted data from the password, which enables to log in
multiple times and can be reused.

## Authenticator

### buffalo-setup

Downloads public-key generator from the local AirStation and outputs encrypted
data for logging in.

Call `buffalo-setup` with the hostname and pass password from the standard
input.

```sh
$ echo 'your-secret-password' | ./buffalo-setup '192.0.2.1' > encrypted
```

## Core Components

### buffalo-login

Logs in. Requires encrypted data that `buffalo-setup` generates.

Call `buffalo-login` with the hostname and a filename for new cookie jar.

```sh
$ cat 'encrypted' | ./buffalo-login '192.0.2.1' 'cookies'
```

### buffalo-logout

Logs out. Requires nothing.

Call `buffalo-logout` with the hostname.

```sh
$ ./buffalo-logout '192.0.2.1'
```

### buffalo-advanced

Gets or sets the advanced settings. Requires the generated cookie jar.

To get the entire list of the existing settings, call `buffalo-advanced` with
the hostname and the filename of the cookie jar.

```sh
$ ./buffalo-advanced '192.0.2.1' 'cookies'
```

To get the value(s) of the existing settings, call `buffalo-advanced` with the
hostname, the filename of the cookie jar, and the category of the settings. The
category can be any of following: method, defgw, dns, or wan

- method
  - method: Method for obtaining IP address
  - gwaddr_4over6: Gateway Address for IPv4 over IPv6
  - ipaddr: Manual IP Address
  - netmask: Manual Subnet Mask
- defgw
  - defgw: Default Gateway
- dns
  - dns0: Primary DNS
  - dns1: Secondary DNS
- wan
  - defmac_use: MAC address
  - mtu: MTU

```sh
$ ./buffalo-advanced '192.0.2.1' 'cookies' 'dns'
```

To set the value(s) of the existing settings, call `buffalo-advanced` with the
hostname, the filename of the cookie jar, and a string `submit`. The command
eval's the standard input, expecting the usage below. Pass `config_wan[*]=*` so
script can parse as a bash expression.

```sh
$ echo 'config_wan[mtu]=1280' | ./buffalo-advanced '192.0.2.1' 'cookies' 'submit'
```

### buffalo-log

Downloads the log. Requires the generated cookie jar.

Call `buffalo-log` with the hostname, and the filename of the cookie jar.

```sh
$ ./buffalo-log '192.0.2.1' 'cookies'
```

### buffalo-reboot

Reboots. Requires the generated cookie jar. Note that this results in being
logged out. Requires the generated cookie jar.

Call `buffalo-reboot` with the hostname, and the filename of the cookie jar.

```sh
$ ./buffalo-reboot '192.0.2.1' 'cookies'
```

### buffalo-status

Gets the JSON repesentation of the current status. Requires the generated
cookie jar.

Call `buffalo-status` with the hostname, and the filename of the cookie jar.

```sh
$ ./buffalo-status '192.0.2.1' 'cookies'
```

### buffalo-wait

Gets the current busy status. Requires the generated cookie jar.

Call `buffalo-wait` with the hostname, and the filename of the cookie jar.

```sh
$ ./buffalo-wait '192.0.2.1' 'cookies'
```
