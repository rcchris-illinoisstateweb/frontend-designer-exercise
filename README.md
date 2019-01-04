# Frontend Designer Development Exercise

Please complete both tasks defined below. **Bonus** tasks aren't required

A starting `index.html`, `scripts.js`, and `style.css` are provided in the docs folders. Screenshots of the expected output are provided in the screenshots folders. All tasks and bonuses should appear as shown in [01-completed.png](screenshots/completed.png) 

## Task 1

1. Use your existing / create a new Github account
2. Use [Github Pages](https://pages.github.com/) to display your final result
3. Utilize [Bootstrap's](https://getbootstrap.com/docs/4.2/getting-started/introduction/) **Layouts** and **Components** for all UI needs. You should NOT need to write additonal CSS to deliver expected output.
4. Create a row with 3 columns with the following: Media Object, Accordion, Row containing another row with a List group with badges in each column [screenshot: 02-task1-full.png](screenshots/02-task1-full.png)
5. At the xlarge / full screen break point, the List group columns should be stacked on top of each other
6. At the large break point, set columns 1 and 2 at 50% width and column 3 at 100% width with the List groups in 2 columns. [screenshot: 03-task1-large.png](screenshots/03-task1-large.png)
7. At the small break point, return to stackings columns in column 3. [screenshot: 05-task1-small.png](screenshots/05-task1-small.png)
8. In mobile, stack all columns [screenshot: 06-task1-mobile.png](screenshots/06-task1-mobile.png)

**Bonus:**
1. Without writing any CSS, utilize Bootstraps Spacing utilities to manage spacing

## Task 2

Example output [screenshot: 07-task2-full.png](screenshots/07-task2-full.png)

1. Utilize [Vue.js](https://vuejs.org/v2/guide/) to display people information pre-defined in the data object
2. Display all people and their properties in a Bootstrap hoverable rows table. Make the table responsive friendly [screenshot: 08-task2-medium.png](screenshots/08-task2-medium.png)
3. Bind the **danger** background class to the `td` for balances over 3000 and the **success** class to balance under 2000 
4. Utilize [Axios](https://github.com/axios/axios) to make an XMLHttpRequests and load [data.json](docs/data.json) file into the Vue data model under the `people` property.

**Bonus:**
1. Create a filter and format the dates using [MomentJS](https://momentjs.com/) - see example output for format
2. Create a filter and format the balances using [NumeralJS](https://numeraljs.com/) - see example output for format
3. Create a method that sorts the people by last name.