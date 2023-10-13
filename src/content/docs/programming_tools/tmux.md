---
title: Tmux
description: Why Tmux is the best thing you will ever learn.
sidebar:
  order: 1
tags: tools, tmux, config
---

This article briefly introduces tmux, and provides a recommended startup config to make tmux easier to use.


## Why tmux?

Linux is a pretty popular server solution. It is used by many tech giants to build its backend data centers, and also small businesses as their backend infra.

To interact with Linux, developers typically use terminal and ssh. They use them to issue command to control the Linux server.

It all sounds pretty sweet until developers started to work on more complicated tasks, e.g., developing large scale softwares. There are two major problems:

*   In each ssh session, you are only allowed to run one single foreground program at any time.
*   If your ssh session is down, you lose the foreground program in that session.

This is definitely not desirable. When doing software development work, we always need to have multiple tasks going on at the same time, e.g., editing code, version control, data base operations, running tests. However, in a ssh session, you are only allowed to run one single foreground program. What make it worse is that it could be lost anytime if you ssh session is reset.

Tmux perfectly addressed the above issues by introducing the following design:

![Tmux Design](../../../tmux/assets/images/remote_linux_development_overall.jpg)

In this design, instead of running in the ssh session, the programs on the server side (e.g., editors, shells) runs within the tmux session. When the session is reset or lost, none of the programs will be affected. Also, multiple programs can run within the same tmux session.


## Installation

Installing tmux is easy. On Linux, you can do:
```sh
sudo apt update && sudo apt install tmux
```

On mac, you can do:
```sh
brew install tmux
```

## Tmux - Cheatsheet

| Command                           | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| tmux                              | Start tmux                                           |
| tmux ls                           | Display sessions                                     |
| tmux a /attach-session            | Restore tmux session                                 |
| tmux a -t mysession               | Attach to a session with the name `mysession`        |
| tmux attach -d                    | Detach an already attached session                   |
| tmux new -s mysession             | Start a new session with name `mysession`            |
| tmux kill-ses -t mysession        | Kill session with name `mysession`                   |
| tmux kill-ses -a                  | Kill all session but the current                     |
| tmux new -s mysession -n mywindow | Start session with `mysession` and window `mywindow` |

### Sessions

| Command                  | Description                               |
| ------------------------ | ----------------------------------------- |
| Ctrl-b :new -s mysession | Start a new session with name `mysession` |
| Ctrl-b :kill-session     | Kill current session                      |
| Ctrl-b d                 | Detach from tmux                          |
| Ctrl-b $                 | Rename session                            |
| Ctrl-b s                 | Switch session                            |
| Ctrl-b w                 | Session and Window Preview                |
| Ctrl-b s                 | Show all session                          |
| Ctrl-b (                 | Move to previous session                  |
| Ctrl-b )                 | Move to next session                      |

### Windows
Windows are basically tabs in tmux session. They are listed on the bottom of the screen by default. They are extremely useful, because they provide an elegant way to manage all your programs.


| COMMANDS                              | DESCRIPTION                                |
| ------------------------------------- | ------------------------------------------ |
| Ctrl-b c                              | Create a window                            |
| Ctrl-b ,                              | Rename Window                              |
| Ctrl-b &                              | Close current window                       |
| Ctrl-b [0-9]                          | Switch between windows using numeric index |
| Ctrl-b Arrows                         | Switch between windows using arrow keys    |
| Ctrl-b w                              | Session and Window Preview                 |
| Ctrl-b n                              | Go to the next window                      |
| Ctrl-b p                              | Go to the previous window                  |
| Ctrl-b l                              | Toggle last active window                  |
| Ctrl-b :swap-window -s [0-9] -t [0-9] | Swap windows                               |

### Panes
Panes allow you to split a single window into multiple areas, where each area can run a separate program. This is helpful if you prefer to see multiple programs running in the same screen.

By default, each window has one pane by default. You can split each pane vertically or horizontally.

| COMMANDS               | DESCRIPTION                                  |
| ---------------------- | -------------------------------------------- |
| Ctrl-b x               | Close the current pane                       |
| Ctrl-b ;               | Toggle last active pane                      |
| Ctrl-b z               | Maximize the current pane (toggle zoom)      |
| Ctrl-b %               | Split windows horizontally                   |
| Ctrl-b "               | Split windows vertically"                    |
| Ctrl-b {               | Move the current pane left                   |
| Ctrl-b }               | Move the current pane right                  |
| Ctrl-b space           | Toggle between pane layouts                  |
| Ctrl-b Ctrl-arrow keys | Resize panes                                 |
| Ctrl-b arrow keys      | Switch between panes (left, right, up, down) |
| Ctrl-b !               | Convert pane to a window                     |
| Ctrl-b q               | Show pane numbers                            |
| Ctrl-b q [0-9]         | Select pane by number                        |

### General Commands

| COMMANDS                                                            | DESCRIPTION                      |
| ------------------------------------------------------------------- | -------------------------------- |
| Ctrl-b ?                                                            | List keys bindings               |
| Ctrl+b :list-keys                                                   | List keys bindings               |
| tmux list-keys                                                      | List keys bindings               |
| tmux info                                                           | Show every session, window, pane |
| Ctrl-b PageUp/PageDown                                              | To scroll in a window            |
| Ctrl-b : source-file /path/to/file                                  | To reload the configuration file |
| tmux -S /tmp/your_shared_session chmod 777 /tmp/your_shared_session | To start a shared session        |

### Copy Mode

| Key Binding                      | Description                                                           |
| -------------------------------- | --------------------------------------------------------------------- |
| Ctrl-b [                         | Enter copy mode                                                       |
| q                                | Exit copy mode                                                        |
| Arrow Up/Down                    | Scroll up or down in copy mode                                        |
| Space                            | Start selection                                                       |
| Enter                            | Copy selected text                                                    |
| Ctrl-b ]                         | Paste copied text                                                     |
| Ctrl-b PgUp/PgDown               | Scroll through the scrollback buffer                                  |
| Ctrl-u/Ctrl-d                    | Scroll a half page up or down                                         |
| Ctrl-b =                         | List all windows and their current sizes                              |
| Ctrl-b :resize-pane -U/D/L/R [N] | Resize the pane Up/Down/Left/Right by N lines or cells                |
| Ctrl-b ]                         | Search forward in the scrollback buffer (press again for next match)  |
| Ctrl-r                           | Enter search mode to search backward in the scrollback buffer         |
| H/J/K/L                          | Move the cursor left/down/up/right in copy mode (vim-like navigation) |

Recommended Config[](#recommended-config)
-----------------------------------------

Here’s a recommended config for tmux to make it easier to use. [Source: Dreams of Code](https://www.youtube.com/watch?v=DzNmUNvnB04)

```sh
set-option -sa terminal-overrides ",xterm*:Tc"
set -g default-terminal "xterm-256color"

# Change Prefix
unbind C-b
set-option -g prefix C-Space
bind-key C-Space send-prefix

set -g mouse on

# Set the base index for windows to 1
set -g base-index 1
set -g pane-base-index 1
set-window-option -g pane-base-index 1
set-option -g renumber-windows on

# Set the limit for command history
set-option -g history-limit 5000

# Bind | to split the window horizontally at the current path
bind | split-window -hc "#{pane_current_path}"

# Bind - to split the window vertically at the current path
bind - split-window -vc "#{pane_current_path}"

# Bind C-c to save the tmux buffer to the clipboard
bind C-c run "tmux save-buffer - | xclip -i -sel clip"

# Bind C-v to paste the clipboard into the tmux buffer
bind C-v run "tmux set-buffer $(xclip -o -sel clip); tmux paste-buffer"

# Bind r to reload the tmux configuration and display a message
bind r source-file ~/.config/tmux/tmux.conf \; display "Reloaded!"

bind -n M-H previous-window
bind -n M-L next-window

set-window-option -g mode-keys vi

bind-key -T copy-mode-vi v send-keys -X begin-selection
bind-key -T copy-mode-vi C-v send-keys -X rectangle-toggle
bind-key -T copy-mode-vi y send-keys -X copy-selection-and-cancel

bind '"' split-window -v -c "#{pane_current_path}"
bind % split-window -h -c "#{pane_current_path}"


# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'christoomey/vim-tmux-navigator'
set -g @plugin 'catppuccin/tmux'
set -g @plugin 'tmux-plugins/tmux-yank'

run '~/.tmux/plugins/tpm/tpm'
```

