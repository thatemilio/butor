# butor :zero:.:one:.:one:

Super simple [Bootstrap](http://getbootstrap.com) Tutor plugin that utitlizes the
existing [Bootstrap popover plugin](http://twitter.github.com/bootstrap/javascript.html#popovers) to create a single
page tour.


## Demo
http://emiliote.github.com/butor/


## Installation

```html
<script src="/js/jquery.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/butor.js"></script>
```


## Usage

To start we need a `Tutor` to use.

```javascript
  var tutor = new Tutor();
```

Now we need to add our tutor's steps. Each step's `Object` requires, at minimum, three keys: 

* element: a jQuery selector string pointing at the element that needs a popover
* title: a string to use as the popover's title
* content: a string to use for the popover's content

You can add any supported `popover` options to the `Object`, but those three are required.

```javascript
  tutor
  .addStep({
    element: '.navbar ul.nav li.logout',
    title: 'Log out',
    content: 'This is where you go to log off of the site.'
  })
  .addStep({
    element: '.navbar .search',
    placement: 'right',
    title: 'Find things',
    content: 'Enter some search terms, get some results.. maybe.'
  });
```

All that's left is to teach the user.

```javascript
  tutor.teach();
```

But sometimes you want to run some code after you're done teaching so that is where being able to pass in a function comes in handy.

```javascript
  tutor.teach(function() {
    alert("and that concludes today's lesson.");
  });
```

I thought that was pretty easy?


## License
Copyright (C) 2013 Emilio Testa

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
