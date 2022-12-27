var example1 = document.getElementById('example1'),

	gridDemo = document.getElementById('gridDemo'),
	multiDragDemo = document.getElementById('multiDragDemo'),
	swapDemo = document.getElementById('swapDemo');

// Example 1 - Simple list
new Sortable(example1, {
	animation: 150,
	ghostClass: 'blue-background-class'
});
