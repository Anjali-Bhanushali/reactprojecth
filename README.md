# reactprojecth

```React components ad other terminology
- Components
 name will always starts with capital letter
 export and import statement should be mentioned

-Props and Props drilling
 using props we can insert data into the components
 and make multiple components

-Multiple Components
 if we have to make multiple components in that case,
 we can make array of data.
 and the run a loop in the return function with that component along with it's props.

-Integrating API(axios)
In simple word API is like waiter in a resturant which brings
food for the customer.

lorem picsum is a api which gives free images
similarly axios tool hai backend ko call krne me help krta hai

-install axios
npm i axios

data jo aata hai API call se wo promises ke form me aata hai
learn about async and await in api calling
async function ko asychronous bnata hai taki jb tk data n aaye
function next line pe n jaye
ar await wait krwata hai
 const fetchData = async () => {
   const response =await  axios.get('https://picsum.photos/v2/list?page=2&limit=5')
   console.log(response);
  }
  <button onClick={fetchData} className='bg-emerald-950'>get data</button>



```
