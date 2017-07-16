# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung
URL: http://www.andrewgurung.com/

Context
-----------------
## CodeAcademy: Web Form
https://www.codecademy.com/courses/web-beginner-en-Vfmnp/0/2?curriculum_id=50b91eda28c2fb212300039e

Notes
-----------------

## The Basic Form
- Forms are used to pass information from the client to the server
- Form elements contain `<input>` elements, which can be of several types
- <input> element doesn't get closed -- There are no </input> tags

### Syntax: Form
```
<form>
<input type='text' name='hi' value='Hi'>
</form>
```

### Text box
- value: Default value
- name: Identifier
```
<input type='text' name='first' value='First Name'>
<input type='text' name='last' value='Last Name'>
```

### Add textarea
- Have a paragraph as label
```
<p>Type your response:</p><br/>
<textarea></textarea>
```

### Radio Buttons
- `type='radio'`
- Select a single input from several choices, such as "yes" or "no"
- `name` and `value` are optional attributes
```
<input type='radio'>Yes
<input type='radio'>No
```

### Checkboxes
- `type='checkbox'`
- Can have a default "checked" which selects a checkbox
```
<p>Pizza toppings</p>
<p>(Check all that apply)</p>
<input type='checkbox' checked>Cheese
<input type='checkbox'>Mushrooms
<input type='checkbox'>Pepperoni
```

### Submit button
- `type='submit'`
- This will create a little "submit" button
```
<input type='submit'>
```
