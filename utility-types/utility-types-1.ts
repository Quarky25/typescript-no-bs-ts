// ! we start by defining an interface and a function that returns user and overrides, the function will override in this case the email.
// ! to override we need something that is just optional because maybe there is nothing to override it. We could define a second interface but we would just be copy pasta code.
// ! to avoid doing that there is something called Partial which constructs a type with all properties of Type set to optional. 
// ! Returning a type that represents all subsets of a given type.

interface MyUser {
    name: string;
    id: string;
    email?: string;

}

type MyUserOptionals = Partial<MyUser>;

// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser  => {
    return {
        ...user,
        ...overrides,
    };
};
console.log(merge(
{
    name: "Ralph",
    id: "foo", 
    email: "user.mail@mail.com"
},
{
    email: "notuser.mail@notmail.com",
}));

type RequiredMyUser = Required<MyUser>

//! Pick constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
type JustEmailAndName = Pick<MyUser, "email" | "name">;

type UserWithoutID = Omit<MyUser, "id">;

// ! Creating a map, which is a record that points from that id to that record, it's for fast lookup.
// ! given an object that have an id in them like the MyUser object.

const mapById = (users: MyUser[]): Record<string, MyUser> => {
    return users.reduce((a, v) => {
        return {
            ...a,
            [v.id]:v,
        }

    }, {});
}

console.log(mapById([
    {
        id: "foo",
        name: "Mr.Foo"
    },
    {
        id: "baz",
        name: "Mrs. Baz"
    }
]));

// ! Omit: constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). Basiacally the opposite of Pick.

const mapByIdOmit = (users: MyUser[]): Record<string, UserWithoutID> => {
    return users.reduce((a, v) => {
        const {id, ...other} = v;
        return {
            ...a,
            [id]: other,
        }

    }, {});
}

console.log(mapByIdOmit([
    {
        id: "foo",
        name: "Mr.Foo"
    },
    {
        id: "baz",
        name: "Mrs. Baz"
    }
]));


