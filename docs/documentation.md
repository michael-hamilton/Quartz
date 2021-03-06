Quartz 0.5.0 Documentation
==========================

Quartz is a basic, responsive frontend web framework that aims to provide a set of useful features and components while still remaining small in size.  Quartz is released under the [MIT License](https://github.com/michael-hamilton/Quartz/blob/master/LICENSE) and is free to use and modify however you wish.
__________________________



Grid System
-----------
Quartz includes a grid system that is comprised of "columns" that help when creating responsive layouts.

A single row can contain up to 12 columns, including a mixture of different sized columns, so long as the sum of their sizes is less than or equal to 12.

Columns must exist inside of a `.container` element.  To create a column, apply the class `.col` to an element, along with a column size class and a breakpoint size class.   Columns can be from 1 to 12 columns wide.  Use the class `.col-*` where `*` is the size of the column to be created.  Breakpoint size classes are either `.large`, `.medium`, or `.small`.  They are explained further below.  
Containers will expand to the full width of the viewport (minus padding) on screens `767px` or smaller.  On screens larger than `767px`, the width of the container will expand to either `960px` or `80%` of the viewport, whichever is smaller.

##### Example
	<div class="container">
      <div class="col medium col-6">
      </div>
    </div>
    
### Breakpoints & Synonyms
Columns are responsive elements that are useful for laying out content differently on various devices.  There are 3 different types of columns that are set to stack at certain breakpoints.

`.large` will cause columns to only display when the window width is `992px` or larger.  The `.desktop` class can be used as a synonym in place of `.large`.

`.medium` will cause columns to only display when the window width is `768px` or larger.  The `.tablet` class can be used as a synonym in place of `.medium`.

`.small` will cause columns to only display when the window width is smaller than `768px`.  The `.phone` class can be used as a synonym in place of `.small`.

### Nesting
Columns can be nested within each other as well.

##### Example
	<div class="container">
      <div class="col medium col-6">
        <div class="col medium col-6">
       	</div>
      </div>
    </div>
    
### Offsetting
Columns can be offset by applying the `.offset-*` class where `*` is the number of columns (from 1 to 11) to offset.

##### Example
	<div class="container">
      <div class="col medium offset-1">
      </div>
    </div>
__________
    


Components
----------

### Tables
Quartz provides some basic styles for tables.  These styles directly effect the `<table>` element.  Alternatively, you can apply the `.table` class to any table element to take advantage of the same styles.  To properly pickup Quartz's styles, tables should be formatted as follows (using these basic table elements where applicable):

##### Example
	<table class="table">
	  <thead>
		<tr>
	      <th>Heading 1</th>
		  <th>Heading 2</th>
		  <th>Heading 3</th>
		</tr>
	  </thead>
	  
	  <tbody>
		<tr>
	      <td>Body 1</td>
		  <td>Body 2</td>
		  <td>Body 3</td>
		</tr>
	  </tbody>
	  
	  <tfoot>
		<tr>
	      <td>Foot 1</td>
		  <td>Foot 2</td>
		  <td>Foot 3</td>
		</tr>
	  </tfoot>
	</table>
	
Quartz also provides a few other styles for tables. For a striped table, use the `.table-stripe` class.  For a bordered table, use the `.table-bordered` class.  For a condensed table, use the `.table-small` class.  To highlight rows on hover, use `.table-hover`.  These classes can be used in conjunction with each other.


### Buttons
To use a Quartz button, add the `.btn` class to an element.
	
##### Example
	<button class="btn"></button>
	
You can use any of Quartz's contextual classes to apply meaningful colors to buttons.  To use a color class, apply the class `.btn-*` where `*` is the desired color of the button.  Options for classes include:

- `.btn-default`
- `.btn-primary`
- `.btn-success`
- `.btn-info`
- `.btn-warn`
- `.btn-error`

##### Example
	<button class="btn btn-default">This is a default button</button>

Quartz also provides a few other styles for buttons.  For rounded buttons, use the `.rounded-corners` class.  Along with the default buttons sizes, you can create large or small buttons using the `.sm` and `.lg` classes, respectively.


### Forms
Quartz provides useful styles for most form elements including `input`, `textarea`, `select`, and `label`.  The easiest way to pickup Quartz's form styles is to wrap each form element and it's corresponding label in a `div` with the class `.form-row` as follows:

##### Example
	<div class="form-row">
	  <label>Form Label</label>
	  <input class="form-input" type="text" placeholder="Form Input">
	</div>
	
This same format will work for `select`, `textarea`, `input[type='checkbox']`, and `input[type='radio']` elements.

##### Example
	<!-- Select Style Example -->
	<div class="form-row">
	  <label>Form Label</label>
	  <select class="form-input">
		<option value="" disabled="disabled" selected="selected">Please Select An Option</option>
		<option value="1">1</option>
	    <option value="2">2</option>
		<option value="3">3</option>
	  </select>
	</div>
	
	<!-- Checkbox Example -->
	<div class="form-row">
	  <div class="checkbox">
	    <label>
		  <input type="checkbox"> Check me!
		</label>
	  </div>
	</div>
	
	<!-- Radio Example -->
	<div class="form-row">
	  <div class="radio">
	    <label>
		  <input type="radio" name="radio1" value="option1">
			This is value 1
		</label>
	  </div>
	  <div class="radio">
		<label>
	   	  <input type="radio" name="radio1" value="option2">
			This is value 2
		</label>
	  </div>
	  <div class="radio">
		<label>
		  <input type="radio" name="radio1" value="option3">
			This is value 3
		</label>
	  </div>
	</div>
	
#### Required Inputs
Occasionally, you may have form inputs that are required.  Quartz provides a simple methods for denoting these types of required fields by adding the `.required` class to the `.form-row` element.  Required elements are denoted by a red asterisk next to the label.

##### Example
	<div class="form-row required">
	  <label>Form Label</label>
	  <input class="form-input" type="text" placeholder="Form Input">
	</div>
	

### Alerts
Alerts are a useful way to display meaningful information.  Alerts work with all Quartz contextual classes to provide visual context to the element.  To use an alert, simply add the `.alert` class to an element as follows:

##### Example
	<div class="alert">Alert</div>

To use a contextual color with an alert, apply the class `.alert-*` where `*` is the desired color of the alert.  Options for classes include:

- `.alert-default`
- `.alert-success`
- `.alert-info`
- `.alert-warn`
- `.alert-error`

##### Example
	<div class="alert alert-default">This is a default alert</button>
	
____


Copy
----

Quartz provides many global styles that are automatically applied, without the need for classes.  Elements used for copy all pickup Quartz's styling without the need for additional classes.

### Headings
Headings elements are styled by default. Simply use the standard HTML heading elements `h1`, `h2`, `h3`, `h4`, `h5`, `h6`.

##### Example
	<h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    
Quartz includes styling for subheadings by using a `small` element inside of a heading element.

##### Example
	<h1>Heading 1 <small>Subheading</small></h1>
	
### Lists
Basic list styling is included with Quartz.

#### Unordered Lists
	<ul>
	  <li>Apples
		<ul>
  		  <li>Fuji</li>
		  <li>Golden Delicious</li>
		  <li>Winesap
		    <ul>
			  <li>Stayman</li>
		    </ul>
		  </li>
		</ul>
	  </li>
	  <li>Bannans</li>
	  <li>Cranberries</li>
	</ul>
	
#### Ordered Lists
	<ol>
	  <li>Dodge</li>
	  <li>Ford
		<ol>
  		  <li>Focus</li>
		  <li>Mustang
		    <ol>
			  <li>V6</li>
			  <li>GT</li>
			  <li>Shelby</li>
		    </ol>
		  </li>
		  <li>Taurus</li>
		</ol>
	  </li>
	  <li>GMC</li>
	</ol>
	
#### Unstyled Lists
Unstyled lists requires the class `.list-unstyled` on the `ul` to be unstyled.

	<ul class="list-unstyled">
	  <li>Apples
		<ul>
  		  <li>Fuji</li>
		  <li>Golden Delicious</li>
		  <li>Winesap
		    <ul>
			  <li>Stayman</li>
		    </ul>
		  </li>
		</ul>
	  </li>
	  <li>Bannans</li>
	  <li>Cranberries</li>
	</ul>
	
#### Description Lists
	<dl>
	  <dt>Apple</dt>
	  <dd>Red, round</dd>
	  <dt>Bannana</dt>
	  <dd>Yellow, long</dd>
	  <dt>Cranberry</dt>
	  <dd>Dark red, round, small</dd>
    </dl>

### Semantic Elements
For a paragraph level break in text, use the `hr` tag

	<hr>
	
For links, use the `a` tag

	<a href="#">This text is a link</a>

To italicize text, use the `em` tag
	
	<p>This text is <em>italicized</em></p>

To bold text, use the `strong` tag
	
	<p>This text is <strong>bold</strong></p>
	
For small text, use the `small` tag

	<p>This text is <small>small</small></p>
	
To highlight a bit of text, use the `mark` tag

	<p>This text has been <mark>highlighted</mark></p>
	
To signify that text has been inserted, use the `ins` tag

	<p>There's a little bit of <ins>inserted text</ins> here</p>
	
To strikethrough text, or signify that it has been deleted, use the `del` tag

	<p><del>This text has been deleted</del></p>
	
To signify that a bit of text has been abbreviated, use the `abbr` tag

	<p>This text has been <abbr>abbreviated</abbr></p>
	
To quote text, use the `q` tag
	
	<p>You can have <q>quotations <q>inside</q> of quotations</q></p>

To render a bit of text as code, use the `code` tag
	
	<p>This is a little bit of <code>code</code></p>
	
You can render preformatted text, such as code, using the `pre` tag
	
	<pre>
	  <code>
  	    function() {
	      if(1+1===3) {
            console.log("It's magic!");
          }
        }
      </code>
    </pre>

____


Utility Classes
---------------

Quartz has some utility classes that can be applied to various elements to assist with basic customization.

### Alignment
Elements can be aligned left, center or right by applying the `.align-left`, `.align-center` or `.align-right` classes respectively.  The only caveat of using the `.align-center` class is that it forces your element to display as a block level element.

Text can also be aligned left, center or right by applying the `.text-left`, `.text-center` or `.text-right` classes respectively.

### Rounded corners
Most quartz components come with rounded corners.  If you would prefer to remove the rounded corners, you can apply the `.no-rounded-corners` class to your element.  Conversely, you can apply the `.rounded-corners` class to an element to give it rounded corners.  Buttons and alerts are great examples of components where these classes would be useful.
