
## Prerequisites

`vsce`:
```bash
npm i -g vsce
```
`code` VS Code command line tool should be installed as part of VS Code
[Command line - vscode ](https://vscode.readthedocs.io/en/latest/editor/command-line/)

## Create `.vsix`

```bash
vsce package
```

## Install `.vsix` package

### MacOS, Linux

```bash
code --install-extension linkify-0.0.1.vsix
```

### Windows Subsystem for Linux

`code --install-extension` is not yet supported on WSL (?)
>Ignoring option install-extension: not supported for code.

Extensions sidebar, More Actions (`...` at top-right), Install from VSIX
