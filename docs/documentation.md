Quartz
======
______

Grid System
-----------
Quartz includes a grid system that is comprised of "columns" that help when creating responsive layouts.

A single row can contain up to 12 columns, or a mixture of different sized columns, so long as the sum of their sizes is less than or equal to 12.

Columns must exist inside of a `.container` element.  To create a column, apply the class `.col` to an element, along with the class `.col-n` where `n` is the size of the column to be created.

####Example
	<div class="container">
       <div class="col col-6">
       </div>
    </div>
   
Columns are responsive and will stack when the width of the window is `550px`.  
Columns can be nested as well.

####Example
	<div class="container">
       <div class="col col-6">
       		<div class="col col-6">
       		</div>
       </div>
    </div>