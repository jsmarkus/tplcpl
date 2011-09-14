## TplCpl - templates compiler

This is a command-line utility to compile javascript templates (currently Jade and Underscore) for use client-side.

TplCpl compiles a whole directory of your project's templates into single JS-file and optionally minifies them with Uglify.js.


### Using compiler

#### Under Linux:

Install TplCpl from npm:


```
sudo -g npm install tplcpl

tplcpl --help
```

Global (`-g`) installation is preferred to use the command line tool.

Usage:

```
tplcpl -t path/to/templates -o path/to/templates.js -c
```

You have to pass `-t` and `-o` options - templates directory and output JS-file respectively.
`-c` option means "compress" - minify output file with Uglify.js.

During compilation a directory is traversed recursively.

Template engine to compile with is chosen by file's extension.

Jade templates must have `.jade` extension, underscore templates - `.us` extension.

#### Under Windows:

Download and run [tplcpl-setup.exe](https://github.com/downloads/jsmarkus/tplcpl/tplcpl-setup.exe) Windows installer

TplCpl is installed to C:\tplcpl.


```
C:\tplcpl\bin\tplcpl -t path\to\templates -o path\to\templates.js -c
```

Under windows please avoid spaces in paths.

### Using compiled templates

After templates are compiled, they may be used as following:

```
var html = Templating.tpl('my/template.jade', {foo:'bar'});
console.log(html);
```

A Templating namespace provides also a convenient way to add `tpl()` helper to your javascript "class".

Suppose we have an OOP module like this:

```
var MyModule = function () {

};
MyModule.prototype.myMethod = function () {

};

//etc...
```

Then we make:

```
Templating.enable(MyModule);
```

Now instances of MyModule will have a `tpl()` method:

```
var inst = new MyModule;
var h = inst.tpl('my/template.jade', {foo:'bar'});
```

Since `tpl()` is added with `Templating.enable`, templates rendering functions are bound to the calling object.

So in your jade or underscore templates you can use `this` variable referring to the object that calls `tpl()`.


### Underscore extension

There is a missing feature in Underscore templates - an escaping.

So it is added here.

Now

```
<%=variable%>
```
is used to escape special characters in a variable.

To show variable without escaping you should use:

```
<%-variable%>
```

### Collaboration

I have written TplCpl for private use, so it is not a universal tool.

Feel free to fork it or submit an issue if you want to add any missing features.
