angular-template-repeat
=======================

ngRepeat like directive for large view-only datasets

##### Demo
https://andytompkins.github.io/angular-template-repeat/

##### Usage
This directive requires either lodash or underscore.


```
    <table>
			  <thead>
			  	<tr>
					<th>In stock?</th>
					<th>Category</th>
					<th>Description</th>
					<th>Id</th>
					<th>Name</th>
					<th>Price</th>
					<th>Version</th>
					<th>Color</th>
					<th>Qty Limited?</th>
					<th>Limits</th>
				</tr>
			  </thead>
			  <tbody data-template-repeat="item in items" data-template="itemRow.html" data-cache-rows="allItems" data-cache-key="id">
				  
			  </tbody>
		</table>
```

```
  <script type="text/ng-template" id="itemRow.html">
 		<tr>
			<td><span data-ng-show="<%= inStock %>">In stock</span><span data-ng-hide="<%= inStock %>">Out of stock</span></td>
			<td><%= category %></td>
			<td><%= description %></td>
			<td><%= id %></td>
			<td><%= name %></td>
			<td><%= price %></td>
			<td><%= version %></td>
			<td><%= color %></td>
			<td><span data-ng-show="<%= hasLimit %>">Limited Qty Avail</span></td>
			<td>
				<div data-ng-show="<%= hasLimit %>" class="">
			        (<span>{{<%= min %>|number}}</span> - <span>{{<%= max %>|number}}</span>)
			    </div>
			</td>
		</tr>
	</script>
```
