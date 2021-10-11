# Obsidian Calculator Plugin

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

This plugin uses https://github.com/5anthosh/fcal to evaluate math expressions within your Obsidian notes.

>Using fcal, you can perform basic arithmetic, percentage operations with precision. It features a flexible expression parser with a large set of built-in units, functions and constants.

See https://github.com/5anthosh/fcal/wiki for more information.

## Usage

### Example 1, insert answer
Write an expression which ends with the equal symbol, like:

```
PI * 4cm ^ 2 = 
```

Select the expression and choose evaluate from the command palette:

<img alt="Select the expression" src="https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/docs/assets/eg1-exp.png" /> 

<img alt="Choose evaluate from the command palette" src="https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/docs/assets/select-command.png" /> 

The expression should be evaluated:

```
PI * 4cm ^ 2 = 50.265482457436691815 Centimeters
```

### Example 2, copy to clipboard
Write an expression without ending it with an equals symbol:

```
23 % of 1023
```

Select the expression and choose evaluate from the command palette like done in Example 1 above.

The evaluated expression will be copied to the clipboard.

<img alt="The evaluated expression will be copied to the clipboard" src="https://raw.githubusercontent.com/meld-cp/obsidian-calc/main/docs/assets/eg2-clipboard.png" /> 


### Example 3, variables and multilines
Variables and multiline expressions are supported.

```
x=56.43
y=x/2
z+y=
```

Selecting all 3 lines and running the evaluate command from the palette will result in:

```
x=56.43
y=x/2
x+y=84.645
```

## Settings

None at present.


## Installation

You can install the plugin via the Community Plugins tab within Obsidian by searching for "Calc"


## Do you find this plugin useful?

<a href="https://www.buymeacoffee.com/cleon"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cleon&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"></a>

Thank you for your support 🙏

