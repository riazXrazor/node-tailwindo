# Tailwindo

<p align="center">
  <img src="https://pbs.twimg.com/media/DQ-mDgSX0AUpCPL.png">
</p>
                                                                         
javascript version of https://github.com/awssat/tailwindo

This tool can convert Boostrap CSS classes in HTML code to equivalent Tailwind CSS classes, still not perfect but good as a helper tool.

### [Online Bootstrap to Tailwind Converter](http://130.61.255.202/bootstrap-to-tailwind)

[http://riazxrazor.in/bootstrap-to-tailwind](http://130.61.255.202/bootstrap-to-tailwind)

## Installing `tailwindo` for CLI use
### Requires nodejs version >= 10
You can install the package via npm globally:

`$ npm i -g tailwindo`

Then use it to convert a snippet, a file or a folder.

### Using the command

#### Possible Options
##### Convert a directory (just the files in this directory, it's not recursive)
```bash
$ tailwindo path/to/directory/ 
```
##### Recursively convert a directory
```bash
$ tailwindo path/to/directory/ --recursive=true
```
You can also use the short hand `-r true` instead of the full `--recursive=true`

##### Convert different file extensions
This will allow you to upgrade your `vue` files, `twig` files, and more!
```bash
$ tailwindo path/to/directory/ --extensions=vue,php,html
```
You can also use the short hand `-e vue,php,html` instead of the full `--extensions`

##### Overwrite the original files
_Please note this can be considered a destructive action as it will replace the orignal file and will not leave a copy of the original any where._
```bash
$ tailwindo path/to/directory/ -p
```

##### Convert raw code
just CSS classes:

```bash
$ tailwindo 'alert alert-info'
```

Or html:

```bash
$ tailwindo '<div class=\"alert alert-info mb-2 mt-3\">hi</div>'
```

### Convert a file
By default this will copy the code into a new file like file.html -> file.tw.html
```bash
$ tailwindo file.blade.php
```
This option works with the `-p` option

## Using the package

You can install the package via npm locally in your project folder:

```bash 
$ npm i tailwindo
```

```bash
Usage: tailwindo <path/to/directory/>
Options:
  --version         Show version number                                [boolean]
  -r, --recursive   Recursively convert a directory                    [boolean]
  -e, --extensions  Convert different file extensions                   [string]
  -p, --replace     Overwrite the original files                       [boolean]
  -?, --help        Show help                                          [boolean]

By Riaz Ali Laskar
```

Then use it like this: 

```php
const tailwindo = require('tailwindo');

$input = '<div class="alert alert-danger">hi</div>'; //BootstrapCSS code

$output = tailwindo($input) // gets converted code
```


## License
The MIT License (MIT). Please see [License File](https://github.com/riazXrazor/node-tailwindo/blob/master/LICENSE) for more information.
