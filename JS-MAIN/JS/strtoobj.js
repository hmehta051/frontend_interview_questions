//input
const a = ` mark     Johansson     waffle            80  2
 mark           Johansson     blender      200         1
         mark         Johansson        knife         10 4
 Nikita   Smith     waffle        80      2               
          Nikita        Smith      blender    200   1
   Nikita          Smith         knife        10         4 `

   // output
//    {
//     'mark Johansson': [
//       { name: 'waffle', price: '80', quantity: '2' },
//       { name: 'blender', price: '200', quantity: '1' },
//       { name: 'knife', price: '10', quantity: '4' }
//     ],
//     'Nikita Smith': [
//       { name: 'waffle', price: '80', quantity: '2' },
//       { name: 'blender', price: '200', quantity: '1' },
//       { name: 'knife', price: '10', quantity: '4' }
//     ]
//   }
 
const res = {};
const newObj = a.split('\n').forEach(line => {
    const words = line.split(' ').filter(Boolean)

    const fullName = `${words[0]} ${words[1]}`;

    res[fullName] = [...(res[fullName] ?? []), {
        name: words[2],
        price: words[3],
        quantity: words[4]
    }]
})