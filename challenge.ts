// challenge.ts

interface User {
    name: string;
    age: number;
    birthday: string;
    };


const prettyPrintWilder = (users: any) => {
    users.map((user: any) => {
        if(user.age !== undefined) {
      console.log(`${user.name} is ${user.age} years old`);
        } else {
            console.log(`${user.name} was born on ${user.birthday}`);
        }
    });
  };
  
  const wilders = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul", birthday: "10/02/1990" };
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);