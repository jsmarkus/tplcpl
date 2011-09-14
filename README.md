## TplCpl - templates compiler

This is a command-line utility to compile javascript templates (currently Jade and Underscore) for use client-side.

TplCpl compiles a whole directory of your project's templates into single JS-file and optionally minifies them with Uglify.js.


### Using compiler

#### Under Linux:

Npm package coming soon. TODO!

So for now you have to install dependencies manually:

```
npm install jade underscore commander uglify-js
```

Usage:

```
path/to/tplcpl/bin/tplcpl -t path/to/templates -o path/to/templates.js -c
```

You have to pass `-t` and `-o` options - templates directory and output JS-file respectively.
`-c` option means "compress" - minify output file with Uglify.js.

During compilation a directory is traversed recursively.

Template engine to compile with is chosen by file's extension.

Jade templates must have `.jade` extension, underscore templates - `.us` extension.

#### Under Windows:

Windows installer coming soon. TODO!

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

Since `tpl()` is added with `Templating.enable` templates rendering invocation are bound to object that invokes them.
So in your jade or underscore templates you can use `this` variable referring to the object that calls `tpl()`.

