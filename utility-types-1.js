"use strict";
// ! we start by defining an interface and a function that returns user and overrides, the function will override in this case the email.
// ! to override we need something that is just optional because maybe there is nothing to override it. We could define a second interface but we would just be copy pasta code.
// ! to avoid doing that there is something called Partial which constructs a type with all properties of Type set to optional. 
// ! Returning a type that represents all subsets of a given type.
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// interface MyUserOptionals {
//     name?: string;
//     id?: string;
//     email?: string;
// }
const merge = (user, overrides) => {
    return Object.assign(Object.assign({}, user), overrides);
};
console.log(merge({
    name: "Ralph",
    id: "foo",
    email: "user.mail@mail.com"
}, {
    email: "notuser.mail@notmail.com",
}));
// ! Creating a map, which is a record that points from that id to that record, it's for fast lookup.
// ! given an object that have an id in them like the MyUser object.
const mapById = (users) => {
    return users.reduce((a, v) => {
        return Object.assign(Object.assign({}, a), { [v.id]: v });
    }, {});
};
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
const mapByIdOmit = (users) => {
    return users.reduce((a, v) => {
        const { id } = v, other = __rest(v, ["id"]);
        return Object.assign(Object.assign({}, a), { [id]: other });
    }, {});
};
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
