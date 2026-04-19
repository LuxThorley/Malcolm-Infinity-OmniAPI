# GitHub deploy reference

This package no longer uses any `.bat` installer or auto-deploy wrapper.

Use the Visual Studio Code terminal and push manually to:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## Commands

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

If `origin` already exists:

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```
