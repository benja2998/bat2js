# bat2js
Batch to JavaScript compiler

[![Coverage Status](https://coveralls.io/repos/github/benja2998/bat2js/badge.svg?branch=main)](https://coveralls.io/github/benja2998/bat2js?branch=main)

Currently not very functional. This is very much alpha quality software.

## Installation

```bash
npm install -g bat2js
```

## Usage

```bash
bat2js <input.bat>
```

This is an example of a batch file that can be compiled to JavaScript:

```batch
@echo off

set hi=Hello
set world=world!

echo %hi% %world%
echo Goodbye world!

pause
exit
```
