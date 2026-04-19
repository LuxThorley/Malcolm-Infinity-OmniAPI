# Manual GitHub deployment

Target repository:

`https://github.com/luxthorley/malcolm-infinity-OmniAPI.git`

## First push from Visual Studio Code terminal

```bash
git init
git branch -M main
git add .
git commit -m "Deploy Malcolm Infinity OmniAPI v6 manual edition"
git remote add origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## If Git asks for authentication

Use your GitHub username and either:
- a Personal Access Token for HTTPS, or
- your configured SSH key, if you prefer SSH.

## If `origin` already exists

```bash
git remote set-url origin https://github.com/luxthorley/malcolm-infinity-OmniAPI.git
git push -u origin main
```

## If the remote already has commits

```bash
git pull --rebase origin main
git push -u origin main
```

## Verify the remote

```bash
git remote -v
```

Expected remote:

```text
origin  https://github.com/luxthorley/malcolm-infinity-OmniAPI.git (fetch)
origin  https://github.com/luxthorley/malcolm-infinity-OmniAPI.git (push)
```
